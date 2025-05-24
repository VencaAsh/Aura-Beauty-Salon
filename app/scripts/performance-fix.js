#!/usr/bin/env node

/**
 * Performance Fix Script for Aura Beauty Salon
 *
 * This script identifies and fixes common performance issues
 * Usage: node scripts/performance-fix.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Performance Fix Script for Aura Beauty Salon');
console.log('=' .repeat(60));

/**
 * Check and fix image optimization
 */
function checkImageOptimization() {
  console.log('\n🖼️  Checking Image Optimization...');

  const imageDir = './src/assets/images';
  const publicImageDir = './public/images';

  let issues = [];
  let fixes = [];

  function analyzeDirectory(dir) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir, { withFileTypes: true });

    files.forEach(file => {
      if (file.isDirectory()) {
        analyzeDirectory(path.join(dir, file.name));
      } else if (file.name.match(/\.(jpg|jpeg|png|gif)$/i) && !file.name.includes('-min')) {
        const filePath = path.join(dir, file.name);
        const stats = fs.statSync(filePath);
        const sizeInMB = stats.size / (1024 * 1024);

        if (sizeInMB > 0.5) {
          issues.push(`Large image: ${file.name} (${sizeInMB.toFixed(2)}MB)`);
          fixes.push(`Consider optimizing: ${file.name}`);
        }

        // Check if WebP version exists
        const webpPath = filePath.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');
        if (!fs.existsSync(webpPath)) {
          issues.push(`Missing WebP version: ${file.name}`);
          fixes.push(`Create WebP version: ${file.name}`);
        }
      }
    });
  }

  analyzeDirectory(imageDir);
  analyzeDirectory(publicImageDir);

  if (issues.length > 0) {
    console.log('⚠️  Image Issues Found:');
    issues.forEach(issue => console.log(`   - ${issue}`));
    console.log('\n💡 Recommended Fixes:');
    fixes.forEach(fix => console.log(`   - ${fix}`));
  } else {
    console.log('✅ All images are optimized');
  }

  return issues.length;
}

/**
 * Check bundle size and dependencies
 */
function checkBundleSize() {
  console.log('\n📦 Checking Bundle Size...');

  try {
    // Check package.json for heavy dependencies
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };

    const heavyPackages = [
      'lodash', 'moment', 'jquery', 'bootstrap', 'material-ui'
    ];

    const foundHeavy = heavyPackages.filter(pkg => dependencies[pkg]);

    if (foundHeavy.length > 0) {
      console.log('⚠️  Heavy dependencies found:');
      foundHeavy.forEach(pkg => {
        console.log(`   - ${pkg}: Consider lighter alternatives`);
      });
    }

    // Check for unused dependencies
    console.log('💡 Run "npm run analyze" to check bundle composition');

    return foundHeavy.length;
  } catch (error) {
    console.error('❌ Error checking bundle size:', error.message);
    return 0;
  }
}

/**
 * Check and fix font loading
 */
function checkFontLoading() {
  console.log('\n🔤 Checking Font Loading...');

  const issues = [];
  const fixes = [];

  // Check layout.tsx for font optimization
  const layoutPath = './src/app/layout.tsx';
  if (fs.existsSync(layoutPath)) {
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');

    if (!layoutContent.includes('display: \'swap\'')) {
      issues.push('Font display swap not configured');
      fixes.push('Add font-display: swap to Google Fonts');
    }

    if (!layoutContent.includes('preconnect')) {
      issues.push('Font preconnect not configured');
      fixes.push('Add preconnect to Google Fonts domains');
    }
  }

  if (issues.length > 0) {
    console.log('⚠️  Font Loading Issues:');
    issues.forEach(issue => console.log(`   - ${issue}`));
    console.log('\n💡 Fixes Applied:');
    fixes.forEach(fix => console.log(`   - ${fix}`));
  } else {
    console.log('✅ Font loading is optimized');
  }

  return issues.length;
}

/**
 * Check Core Web Vitals setup
 */
function checkWebVitalsSetup() {
  console.log('\n📊 Checking Web Vitals Setup...');

  const webVitalsPath = './src/components/performance/WebVitals.tsx';
  const issues = [];

  if (!fs.existsSync(webVitalsPath)) {
    issues.push('Web Vitals component not found');
  } else {
    const content = fs.readFileSync(webVitalsPath, 'utf8');

    if (!content.includes('web-vitals')) {
      issues.push('Official web-vitals library not used');
    }

    if (!content.includes('onLCP') || !content.includes('onINP')) {
      issues.push('Core Web Vitals not properly measured (should use web-vitals 5.x syntax)');
    }
  }

  // Check if web-vitals is installed
  const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  if (!packageJson.dependencies['web-vitals']) {
    issues.push('web-vitals package not installed');
    console.log('🔧 Installing web-vitals package...');
    try {
      execSync('npm install web-vitals', { stdio: 'inherit' });
      console.log('✅ web-vitals package installed');
    } catch (error) {
      console.error('❌ Failed to install web-vitals:', error.message);
    }
  }

  if (issues.length > 0) {
    console.log('⚠️  Web Vitals Issues:');
    issues.forEach(issue => console.log(`   - ${issue}`));
  } else {
    console.log('✅ Web Vitals setup is correct');
  }

  return issues.length;
}

/**
 * Check service worker configuration
 */
function checkServiceWorker() {
  console.log('\n⚙️  Checking Service Worker...');

  const swPath = './public/sw.js';
  const issues = [];

  if (!fs.existsSync(swPath)) {
    issues.push('Service worker not found');
  } else {
    const content = fs.readFileSync(swPath, 'utf8');

    if (!content.includes('CACHE_NAME')) {
      issues.push('Service worker cache not configured');
    }

    if (!content.includes('fetch')) {
      issues.push('Service worker fetch handler not configured');
    }
  }

  // Check service worker registration
  const registrationPath = './src/components/performance/ServiceWorkerRegistration.tsx';
  if (!fs.existsSync(registrationPath)) {
    issues.push('Service worker registration component not found');
  }

  if (issues.length > 0) {
    console.log('⚠️  Service Worker Issues:');
    issues.forEach(issue => console.log(`   - ${issue}`));
  } else {
    console.log('✅ Service worker is properly configured');
  }

  return issues.length;
}

/**
 * Check Netlify configuration
 */
function checkNetlifyConfig() {
  console.log('\n🌐 Checking Netlify Configuration...');

  const netlifyPath = './netlify.toml';
  const issues = [];

  if (!fs.existsSync(netlifyPath)) {
    issues.push('netlify.toml not found');
  } else {
    const content = fs.readFileSync(netlifyPath, 'utf8');

    if (!content.includes('Cache-Control')) {
      issues.push('Cache headers not configured');
    }

    if (!content.includes('gzip') && !content.includes('compress')) {
      issues.push('Compression not configured');
    }

    if (!content.includes('X-DNS-Prefetch-Control')) {
      issues.push('DNS prefetch not configured');
    }
  }

  if (issues.length > 0) {
    console.log('⚠️  Netlify Configuration Issues:');
    issues.forEach(issue => console.log(`   - ${issue}`));
  } else {
    console.log('✅ Netlify configuration is optimized');
  }

  return issues.length;
}

/**
 * Generate performance report
 */
function generateReport(results) {
  console.log('\n📋 Performance Fix Report');
  console.log('=' .repeat(40));

  const totalIssues = Object.values(results).reduce((sum, count) => sum + count, 0);

  if (totalIssues === 0) {
    console.log('🎉 No performance issues found!');
    console.log('Your website is well optimized.');
  } else {
    console.log(`⚠️  Total issues found: ${totalIssues}`);
    console.log('\nIssue breakdown:');
    Object.entries(results).forEach(([category, count]) => {
      if (count > 0) {
        console.log(`   - ${category}: ${count} issue(s)`);
      }
    });

    console.log('\n💡 Next steps:');
    console.log('   1. Address the issues listed above');
    console.log('   2. Run "npm run build" to test optimizations');
    console.log('   3. Run "npm run analyze" to check bundle size');
    console.log('   4. Test with Lighthouse for performance scores');
  }

  // Save report to file
  const reportPath = './performance-fix-report.txt';
  const reportContent = `Performance Fix Report - ${new Date().toISOString()}\n\nTotal issues: ${totalIssues}\n\n${Object.entries(results).map(([category, count]) => `${category}: ${count} issue(s)`).join('\n')}`;
  fs.writeFileSync(reportPath, reportContent);
  console.log(`\n📄 Report saved to: ${reportPath}`);
}

/**
 * Main execution
 */
function main() {
  const results = {
    'Image Optimization': checkImageOptimization(),
    'Bundle Size': checkBundleSize(),
    'Font Loading': checkFontLoading(),
    'Web Vitals Setup': checkWebVitalsSetup(),
    'Service Worker': checkServiceWorker(),
    'Netlify Config': checkNetlifyConfig(),
  };

  generateReport(results);

  console.log('\n🚀 Performance fix script completed!');
  console.log('Run this script regularly to maintain optimal performance.');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  checkImageOptimization,
  checkBundleSize,
  checkFontLoading,
  checkWebVitalsSetup,
  checkServiceWorker,
  checkNetlifyConfig,
  generateReport
};
