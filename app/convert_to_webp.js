#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

// Configuration
const QUALITY = 85; // High quality (80-90%)
const SOURCE_DIR = 'src/assets/images';
const BACKUP_DIR = 'src/assets/images-backup';

// Create backup directory
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

// Function to copy directory structure
function copyDirectoryStructure(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const items = fs.readdirSync(src);
  
  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDirectoryStructure(srcPath, destPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(item)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`📁 Backed up: ${item}`);
    }
  }
}

// Function to get file size in KB
function getFileSizeKB(filePath) {
  const stats = fs.statSync(filePath);
  return Math.round(stats.size / 1024);
}

// Function to convert images to WebP
async function convertToWebP(inputDir, outputDir) {
  const results = [];
  
  // Find all image files
  const findImages = (dir) => {
    const images = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        images.push(...findImages(fullPath));
      } else if (/\.(jpg|jpeg|png)$/i.test(item)) {
        images.push(fullPath);
      }
    }
    return images;
  };
  
  const imageFiles = findImages(inputDir);
  console.log(`\n🔍 Found ${imageFiles.length} images to convert\n`);
  
  for (const imagePath of imageFiles) {
    try {
      const originalSize = getFileSizeKB(imagePath);
      const relativePath = path.relative(inputDir, imagePath);
      const outputPath = path.join(outputDir, relativePath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      const outputDirPath = path.dirname(outputPath);
      
      // Create output directory if it doesn't exist
      if (!fs.existsSync(outputDirPath)) {
        fs.mkdirSync(outputDirPath, { recursive: true });
      }
      
      // Convert to WebP
      await imagemin([imagePath], {
        destination: outputDirPath,
        plugins: [
          imageminWebp({
            quality: QUALITY,
            method: 6, // Best compression
          })
        ]
      });
      
      const webpSize = getFileSizeKB(outputPath);
      const savings = Math.round(((originalSize - webpSize) / originalSize) * 100);
      
      results.push({
        original: path.basename(imagePath),
        webp: path.basename(outputPath),
        originalSize,
        webpSize,
        savings,
        path: relativePath
      });
      
      console.log(`✅ ${path.basename(imagePath)} → ${path.basename(outputPath)} (${originalSize}KB → ${webpSize}KB, ${savings}% smaller)`);
      
    } catch (error) {
      console.error(`❌ Error converting ${imagePath}:`, error.message);
    }
  }
  
  return results;
}

// Main conversion process
async function main() {
  console.log('🚀 Starting WebP conversion process...\n');
  
  // Step 1: Create backup
  console.log('📁 Creating backup of original images...');
  copyDirectoryStructure(SOURCE_DIR, BACKUP_DIR);
  console.log('✅ Backup completed\n');
  
  // Step 2: Convert images
  console.log('🔄 Converting images to WebP format...');
  const results = await convertToWebP(SOURCE_DIR, SOURCE_DIR);
  
  // Step 3: Remove original files and rename WebP files
  console.log('\n🔄 Replacing original files with WebP versions...');
  for (const result of results) {
    const originalPath = path.join(SOURCE_DIR, result.path);
    const webpPath = originalPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Remove original file
    if (fs.existsSync(originalPath)) {
      fs.unlinkSync(originalPath);
    }
    
    console.log(`🔄 Replaced: ${result.original} → ${result.webp}`);
  }
  
  // Step 4: Generate summary
  const totalOriginalSize = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalWebpSize = results.reduce((sum, r) => sum + r.webpSize, 0);
  const totalSavings = Math.round(((totalOriginalSize - totalWebpSize) / totalOriginalSize) * 100);
  
  console.log('\n📊 CONVERSION SUMMARY:');
  console.log('======================');
  console.log(`✅ Images converted: ${results.length}`);
  console.log(`📉 Original total size: ${Math.round(totalOriginalSize / 1024)}MB`);
  console.log(`📈 WebP total size: ${Math.round(totalWebpSize / 1024)}MB`);
  console.log(`💾 Total space saved: ${Math.round((totalOriginalSize - totalWebpSize) / 1024)}MB (${totalSavings}%)`);
  console.log(`📁 Backup location: ${BACKUP_DIR}`);
  
  // Generate file mapping for code updates
  const mappingFile = 'webp_conversion_mapping.json';
  const mapping = {};
  results.forEach(result => {
    mapping[result.original] = result.webp;
  });
  
  fs.writeFileSync(mappingFile, JSON.stringify(mapping, null, 2));
  console.log(`📝 File mapping saved to: ${mappingFile}`);
  
  console.log('\n🎉 WebP conversion completed successfully!');
}

// Run the conversion
main().catch(console.error);
