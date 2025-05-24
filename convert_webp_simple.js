#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const QUALITY = 85;
const SOURCE_DIR = 'src/assets/images';
const BACKUP_DIR = 'src/assets/images-backup';

// Install sharp for WebP conversion
try {
  execSync('npm install sharp', { stdio: 'inherit' });
} catch (error) {
  console.log('Sharp already installed or installation failed, continuing...');
}

const sharp = require('sharp');

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

// Function to convert image to WebP using Sharp
async function convertImageToWebP(inputPath, outputPath) {
  await sharp(inputPath)
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(outputPath);
}

// Function to find all images
function findImages(dir) {
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
}

// Main conversion process
async function main() {
  console.log('🚀 Starting WebP conversion process...\n');
  
  // Step 1: Create backup
  console.log('📁 Creating backup of original images...');
  copyDirectoryStructure(SOURCE_DIR, BACKUP_DIR);
  console.log('✅ Backup completed\n');
  
  // Step 2: Find all images
  const imageFiles = findImages(SOURCE_DIR);
  console.log(`🔍 Found ${imageFiles.length} images to convert\n`);
  
  const results = [];
  
  // Step 3: Convert each image
  for (const imagePath of imageFiles) {
    try {
      const originalSize = getFileSizeKB(imagePath);
      const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      // Convert to WebP
      await convertImageToWebP(imagePath, webpPath);
      
      const webpSize = getFileSizeKB(webpPath);
      const savings = Math.round(((originalSize - webpSize) / originalSize) * 100);
      
      results.push({
        original: path.basename(imagePath),
        webp: path.basename(webpPath),
        originalSize,
        webpSize,
        savings,
        originalPath: imagePath,
        webpPath: webpPath
      });
      
      console.log(`✅ ${path.basename(imagePath)} → ${path.basename(webpPath)} (${originalSize}KB → ${webpSize}KB, ${savings}% smaller)`);
      
      // Remove original file
      fs.unlinkSync(imagePath);
      
    } catch (error) {
      console.error(`❌ Error converting ${imagePath}:`, error.message);
    }
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
  console.log('\n⚠️  Next steps:');
  console.log('1. Update import statements in TypeScript/JavaScript files');
  console.log('2. Update Next.js configuration for WebP support');
  console.log('3. Test all images display correctly');
}

// Run the conversion
main().catch(console.error);
