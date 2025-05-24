#!/usr/bin/env node

/**
 * Performance Testing Script for Aura Beauty Salon
 * 
 * This script runs various performance tests and generates reports
 * Usage: node scripts/performance-test.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  outputDir: './performance-reports',
  pages: [
    '/',
    '/sluzby',
    '/galerie',
    '/salon',
    '/cenik',
    '/blog',
    '/kontakt'
  ]
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

console.log('🚀 Starting Performance Tests for Aura Beauty Salon');
console.log('=' .repeat(60));

/**
 * Run Lighthouse audit for a specific page
 */
function runLighthouseAudit(url, pageName) {
  console.log(`\n📊 Running Lighthouse audit for: ${pageName}`);
  
  const outputPath = path.join(config.outputDir, `lighthouse-${pageName.replace('/', 'home')}.html`);
  const jsonOutputPath = path.join(config.outputDir, `lighthouse-${pageName.replace('/', 'home')}.json`);
  
  try {
    const command = `lighthouse "${url}" --output=html --output=json --output-path="${outputPath.replace('.html', '')}" --chrome-flags="--headless --no-sandbox" --quiet`;
    
    execSync(command, { stdio: 'inherit' });
    
    // Read and parse JSON results
    if (fs.existsSync(jsonOutputPath)) {
      const results = JSON.parse(fs.readFileSync(jsonOutputPath, 'utf8'));
      const scores = {
        performance: Math.round(results.lhr.categories.performance.score * 100),
        accessibility: Math.round(results.lhr.categories.accessibility.score * 100),
        bestPractices: Math.round(results.lhr.categories['best-practices'].score * 100),
        seo: Math.round(results.lhr.categories.seo.score * 100),
        pwa: results.lhr.categories.pwa ? Math.round(results.lhr.categories.pwa.score * 100) : 'N/A'
      };
      
      console.log(`✅ ${pageName}:`);
      console.log(`   Performance: ${scores.performance}/100`);
      console.log(`   Accessibility: ${scores.accessibility}/100`);
      console.log(`   Best Practices: ${scores.bestPractices}/100`);
      console.log(`   SEO: ${scores.seo}/100`);
      console.log(`   PWA: ${scores.pwa}/100`);
      
      return scores;
    }
  } catch (error) {
    console.error(`❌ Failed to run Lighthouse for ${pageName}:`, error.message);
    return null;
  }
}

/**
 * Analyze bundle size
 */
function analyzeBundleSize() {
  console.log('\n📦 Analyzing Bundle Size...');
  
  try {
    // Run bundle analyzer
    execSync('npm run analyze', { stdio: 'inherit' });
    console.log('✅ Bundle analysis complete. Check the generated report.');
  } catch (error) {
    console.error('❌ Bundle analysis failed:', error.message);
  }
}

/**
 * Check image optimization
 */
function checkImageOptimization() {
  console.log('\n🖼️  Checking Image Optimization...');
  
  const imageDir = './src/assets/images';
  const publicImageDir = './public/images';
  
  let totalImages = 0;
  let webpImages = 0;
  let largeImages = 0;
  
  function analyzeDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    files.forEach(file => {
      if (file.isDirectory()) {
        analyzeDirectory(path.join(dir, file.name));
      } else if (file.name.match(/\.(jpg|jpeg|png|gif|webp|avif)$/i)) {
        totalImages++;
        
        if (file.name.endsWith('.webp')) {
          webpImages++;
        }
        
        const filePath = path.join(dir, file.name);
        const stats = fs.statSync(filePath);
        const sizeInMB = stats.size / (1024 * 1024);
        
        if (sizeInMB > 1) {
          largeImages++;
          console.log(`⚠️  Large image found: ${file.name} (${sizeInMB.toFixed(2)}MB)`);
        }
      }
    });
  }
  
  analyzeDirectory(imageDir);
  analyzeDirectory(publicImageDir);
  
  const webpPercentage = totalImages > 0 ? Math.round((webpImages / totalImages) * 100) : 0;
  
  console.log(`📊 Image Analysis Results:`);
  console.log(`   Total images: ${totalImages}`);
  console.log(`   WebP images: ${webpImages} (${webpPercentage}%)`);
  console.log(`   Large images (>1MB): ${largeImages}`);
  
  if (webpPercentage < 80) {
    console.log('⚠️  Consider converting more images to WebP format for better performance');
  }
  
  if (largeImages > 0) {
    console.log('⚠️  Consider optimizing large images');
  }
}

/**
 * Generate performance summary report
 */
function generateSummaryReport(results) {
  console.log('\n📋 Generating Performance Summary...');
  
  const timestamp = new Date().toISOString();
  const reportPath = path.join(config.outputDir, 'performance-summary.md');
  
  let report = `# Performance Test Report\n\n`;
  report += `**Generated:** ${timestamp}\n\n`;
  report += `## Lighthouse Scores\n\n`;
  report += `| Page | Performance | Accessibility | Best Practices | SEO | PWA |\n`;
  report += `|------|-------------|---------------|----------------|-----|-----|\n`;
  
  let totalPerformance = 0;
  let totalAccessibility = 0;
  let totalBestPractices = 0;
  let totalSEO = 0;
  let validResults = 0;
  
  results.forEach(result => {
    if (result.scores) {
      report += `| ${result.page} | ${result.scores.performance} | ${result.scores.accessibility} | ${result.scores.bestPractices} | ${result.scores.seo} | ${result.scores.pwa} |\n`;
      
      totalPerformance += result.scores.performance;
      totalAccessibility += result.scores.accessibility;
      totalBestPractices += result.scores.bestPractices;
      totalSEO += result.scores.seo;
      validResults++;
    }
  });
  
  if (validResults > 0) {
    const avgPerformance = Math.round(totalPerformance / validResults);
    const avgAccessibility = Math.round(totalAccessibility / validResults);
    const avgBestPractices = Math.round(totalBestPractices / validResults);
    const avgSEO = Math.round(totalSEO / validResults);
    
    report += `\n## Average Scores\n\n`;
    report += `- **Performance:** ${avgPerformance}/100\n`;
    report += `- **Accessibility:** ${avgAccessibility}/100\n`;
    report += `- **Best Practices:** ${avgBestPractices}/100\n`;
    report += `- **SEO:** ${avgSEO}/100\n\n`;
    
    report += `## Recommendations\n\n`;
    
    if (avgPerformance < 90) {
      report += `- 🔧 **Performance:** Consider optimizing images, reducing JavaScript bundle size, and implementing lazy loading\n`;
    }
    
    if (avgAccessibility < 95) {
      report += `- ♿ **Accessibility:** Review color contrast, add missing alt texts, and improve keyboard navigation\n`;
    }
    
    if (avgBestPractices < 95) {
      report += `- 🛡️ **Best Practices:** Update security headers, use HTTPS, and optimize third-party scripts\n`;
    }
    
    if (avgSEO < 95) {
      report += `- 🔍 **SEO:** Add missing meta descriptions, improve heading structure, and optimize structured data\n`;
    }
  }
  
  fs.writeFileSync(reportPath, report);
  console.log(`✅ Performance summary saved to: ${reportPath}`);
}

/**
 * Main execution
 */
async function main() {
  const results = [];
  
  // Run Lighthouse audits for each page
  for (const page of config.pages) {
    const url = `${config.siteUrl}${page}`;
    const scores = runLighthouseAudit(url, page);
    results.push({ page, scores });
  }
  
  // Analyze bundle size
  analyzeBundleSize();
  
  // Check image optimization
  checkImageOptimization();
  
  // Generate summary report
  generateSummaryReport(results);
  
  console.log('\n🎉 Performance testing complete!');
  console.log(`📁 Reports saved to: ${config.outputDir}`);
  console.log('\n💡 Next steps:');
  console.log('   1. Review the Lighthouse reports');
  console.log('   2. Check the bundle analyzer output');
  console.log('   3. Implement recommended optimizations');
  console.log('   4. Re-run tests to measure improvements');
}

// Run the script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  runLighthouseAudit,
  analyzeBundleSize,
  checkImageOptimization,
  generateSummaryReport
};
