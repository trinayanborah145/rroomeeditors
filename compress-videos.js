const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const { exec } = require('child_process');

// Create optimized-videos directory if it doesn't exist
const optimizedDir = path.join(__dirname, 'public', 'optimized-videos');
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Get all MP4 files in the public directory
const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir).filter(file => file.endsWith('.mp4'));

console.log(`Found ${files.length} video(s) to process\n`);

// Process each video file
files.forEach((file, index) => {
  const inputPath = path.join(publicDir, file);
  const outputPath = path.join(optimizedDir, file);
  
  console.log(`[${index + 1}/${files.length}] Processing: ${file}`);
  
  // Get file size in MB
  const stats = fs.statSync(inputPath);
  const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
  
  console.log(`  Original size: ${fileSizeInMB}MB`);
  
  // Compress video using ffmpeg
  ffmpeg(inputPath)
    .videoCodec('libx264')
    .outputOptions([
      '-crf 28',          // Constant Rate Factor (lower = better quality, 23 is default, 28 is good for web)
      '-preset slower',   // Better compression, slower encoding
      '-movflags +faststart', // Enables streaming
      '-vf scale=1280:-2', // Scale to 1280 width, maintain aspect ratio, ensure even height
      '-c:a aac',         // Convert audio to AAC
      '-b:a 128k'         // Audio bitrate
    ])
    .on('start', (commandLine) => {
      console.log('  Started ffmpeg with command: ' + commandLine);
    })
    .on('progress', (progress) => {
      // Show progress
      process.stdout.write(`  Progress: ${Math.round(progress.percent)}%\r`);
    })
    .on('end', () => {
      // Get compressed file size
      const compressedStats = fs.statSync(outputPath);
      const compressedSizeMB = (compressedStats.size / (1024 * 1024)).toFixed(2);
      const savings = ((1 - (compressedStats.size / stats.size)) * 100).toFixed(2);
      
      console.log(`\n  Compressed size: ${compressedSizeMB}MB (${savings}% savings)`);
      console.log('  Done!\n');
      
      // If this was the last file, show completion message
      if (index === files.length - 1) {
        console.log('\nAll videos have been compressed successfully!');
        console.log(`Optimized videos are saved in: ${optimizedDir}`);
        console.log('You can now update your project to use the optimized videos from: /optimized-videos/');
      }
    })
    .on('error', (err) => {
      console.error('  Error:', err.message);
    })
    .save(outputPath);
});
