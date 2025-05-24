#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const QUALITY = 85;
const PUBLIC_DIR = 'public';

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

// Function to find all images in public directory
function findPublicImages(dir) {
  const images = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      images.push(...findPublicImages(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(item) && !item.includes('apple-icon') && !item.includes('favicon')) {
      images.push(fullPath);
    }
  }
  return images;
}

// Main conversion process
async function main() {
  console.log('🚀 Converting public directory images to WebP...\n');
  
  // Find all images in public directory
  const imageFiles = findPublicImages(PUBLIC_DIR);
  console.log(`🔍 Found ${imageFiles.length} images to convert in public directory\n`);
  
  const results = [];
  
  // Convert each image
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
  
  // Generate summary
  const totalOriginalSize = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalWebpSize = results.reduce((sum, r) => sum + r.webpSize, 0);
  const totalSavings = Math.round(((totalOriginalSize - totalWebpSize) / totalOriginalSize) * 100);
  
  console.log('\n📊 PUBLIC DIRECTORY CONVERSION SUMMARY:');
  console.log('=======================================');
  console.log(`✅ Images converted: ${results.length}`);
  console.log(`📉 Original total size: ${Math.round(totalOriginalSize / 1024)}MB`);
  console.log(`📈 WebP total size: ${Math.round(totalWebpSize / 1024)}MB`);
  console.log(`💾 Total space saved: ${Math.round((totalOriginalSize - totalWebpSize) / 1024)}MB (${totalSavings}%)`);
  
  console.log('\n🎉 Public directory WebP conversion completed!');
}

// Run the conversion
main().catch(console.error);
