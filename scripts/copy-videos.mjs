import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create optimized-videos directory if it doesn't exist
const optimizedDir = join(__dirname, '..', 'public', 'optimized-videos');
try {
  await fs.mkdir(optimizedDir, { recursive: true });
  console.log(`Created directory: ${optimizedDir}`);
} catch (err) {
  if (err.code !== 'EEXIST') throw err;
  console.log(`Directory already exists: ${optimizedDir}`);
}

// Get all MP4 files in the public directory
const publicDir = join(__dirname, '..', 'public');
const files = (await fs.readdir(publicDir)).filter(file => 
  file.endsWith('.mp4') && !file.startsWith('.')
);

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
    
    console.log(`  Size: ${fileSizeInMB}MB`);
    
    // Copy file to optimized directory
    const readStream = createReadStream(inputPath);
    const writeStream = createWriteStream(outputPath);
    
    await pipeline(readStream, writeStream);
    
    console.log(`  Copied to: ${outputPath}\n`);
    
  } catch (err) {
    console.error(`  Error processing ${file}:`, err.message);
  }
}

console.log('\nAll videos have been processed!');
console.log(`Optimized videos are saved in: ${optimizedDir}`);
console.log('You can now update your project to use the optimized videos from: /optimized-videos/');
