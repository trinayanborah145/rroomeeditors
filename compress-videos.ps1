# Create optimized-videos directory if it doesn't exist
$optimizedDir = ".\public\optimized-videos"
if (-not (Test-Path -Path $optimizedDir)) {
    New-Item -ItemType Directory -Path $optimizedDir | Out-Null
}

# Get all MP4 files in the public directory
$videos = Get-ChildItem -Path ".\public\*.mp4"

foreach ($video in $videos) {
    $outputPath = Join-Path -Path $optimizedDir -ChildPath $video.Name
    
    Write-Host "Compressing $($video.Name)..."
    
    # Compress video using FFmpeg
    # -c:v libx264: Use H.264 codec
    # -crf 28: Constant Rate Factor (lower = better quality, 23 is default, 28 is good for web)
    # -preset slower: Better compression, slower encoding
    # -movflags +faststart: Enables streaming
    # -vf scale=1280:720: Scale to 720p width, maintaining aspect ratio
    # -c:a aac -b:a 128k: Convert audio to AAC with 128k bitrate
    # -y: Overwrite output file if it exists
    
    # First, get the video dimensions to maintain aspect ratio
    $ffprobeOutput = & ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 "$($video.FullName)"
    $dimensions = $ffprobeOutput -split 'x'
    $width = [int]$dimensions[0]
    $height = [int]$dimensions[1]
    
    # Calculate new dimensions maintaining aspect ratio (max width 1280)
    $newWidth = 1280
    $newHeight = [math]::Round(($height / $width) * $newWidth)
    
    # Ensure height is even (required by some codecs)
    if ($newHeight % 2 -ne 0) { $newHeight += 1 }
    
    # Run FFmpeg with the calculated dimensions
    & ffmpeg -i "$($video.FullName)" \
        -c:v libx264 \
        -crf 28 \
        -preset slower \
        -movflags +faststart \
        -vf scale=$($newWidth):$($newHeight) \
        -c:a aac \
        -b:a 128k \
        -y \
        "$outputPath"
    
    # Get file sizes
    $originalSize = [math]::Round(($video.Length / 1MB), 2)
    $compressedSize = [math]::Round(((Get-Item $outputPath).Length / 1MB), 2)
    $savings = [math]::Round((1 - ($compressedSize / $originalSize)) * 100, 2)
    
    Write-Host "  Original: ${originalSize}MB  |  Compressed: ${compressedSize}MB  |  Savings: ${savings}%"
}

Write-Host "\nAll videos have been compressed and saved to: $optimizedDir"
Write-Host "You can now update your project to use the optimized videos from: /optimized-videos/"
