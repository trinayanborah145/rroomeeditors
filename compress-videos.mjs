import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';
import ffmpeg from 'fluent-ffmpeg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create optimized-videos directory if it doesn't exist
const optimizedDir = join(__dirname, 'public', 'optimized-videos');
try {
  await fs.mkdir(optimizedDir, { recursive: true });
} catch (err) {
  if (err.code !== 'EEXIST') throw err;
}

// Get all MP4 files in the public directory
const publicDir = join(__dirname, 'public');
const files = (await fs.readdir(publicDir)).filter(file => file.endsWith('.mp4'));

console.log(`Found ${files.length} video(s) to process\n`);

// Process each video file
for (const [index, file] of files.entries()) {
  const inputPath = join(publicDir, file);
  const outputPath = join(optimizedDir, file);
  
  console.log(`[${index + 1}/${files.length}] Processing: ${file}`);
  
  try {
    // Get file size in MB
    const stats = await fs.stat(inputPath);
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    console.log(`  Original size: ${fileSizeInMB}MB`);
    
    // Compress video using ffmpeg
    await new Promise((resolve, reject) => {
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
          process.stdout.write(`  Progress: ${Math.round(progress.percent || 0)}%\r`);
        })
        .on('end', () => {
          console.log('\n  Compression complete!');
          resolve(true);
        })
        .on('error', (err) => {
          console.error('  Error:', err.message);
          reject(err);
        })
        .save(outputPath);
    });
    
    // Get compressed file size
    const compressedStats = await fs.stat(outputPath);
    const compressedSizeMB = (compressedStats.size / (1024 * 1024)).toFixed(2);
    const savings = ((1 - (compressedStats.size / stats.size)) * 100).toFixed(2);
    
    console.log(`  Compressed size: ${compressedSizeMB}MB (${savings}% savings)\n`);
    
  } catch (err) {
    console.error(`  Error processing ${file}:`, err.message);
  }
}

console.log('\nAll videos have been processed!');
console.log(`Optimized videos are saved in: ${optimizedDir}`);
console.log('You can now update your project to use the optimized videos from: /optimized-videos/');
