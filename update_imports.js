#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load the mapping file
const mapping = JSON.parse(fs.readFileSync('webp_conversion_mapping.json', 'utf8'));

// Function to find all TypeScript/JavaScript files
function findCodeFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory() && !item.includes('node_modules') && !item.includes('.next')) {
      files.push(...findCodeFiles(fullPath));
    } else if (/\.(tsx|ts|jsx|js)$/i.test(item)) {
      files.push(fullPath);
    }
  }
  return files;
}

// Function to update imports in a file
function updateImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Update each mapping
  for (const [oldFile, newFile] of Object.entries(mapping)) {
    const oldExtension = path.extname(oldFile);
    const newExtension = path.extname(newFile);
    
    // Replace import statements
    const importRegex = new RegExp(`from\\s+['"]([^'"]*${oldFile.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})['"]`, 'g');
    const newContent = content.replace(importRegex, (match, importPath) => {
      const newImportPath = importPath.replace(oldFile, newFile);
      updated = true;
      console.log(`  📝 Updated import: ${oldFile} → ${newFile}`);
      return match.replace(importPath, newImportPath);
    });
    
    content = newContent;
  }
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

// Main function
function main() {
  console.log('🔄 Updating import statements to use WebP files...\n');
  
  const codeFiles = findCodeFiles('src');
  console.log(`🔍 Found ${codeFiles.length} code files to check\n`);
  
  let updatedFiles = 0;
  
  for (const filePath of codeFiles) {
    console.log(`Checking: ${filePath}`);
    if (updateImportsInFile(filePath)) {
      updatedFiles++;
      console.log(`✅ Updated: ${filePath}\n`);
    } else {
      console.log(`  ℹ️  No changes needed\n`);
    }
  }
  
  console.log('📊 UPDATE SUMMARY:');
  console.log('==================');
  console.log(`✅ Files checked: ${codeFiles.length}`);
  console.log(`📝 Files updated: ${updatedFiles}`);
  console.log(`🎯 Import statements updated to use WebP format`);
  
  console.log('\n🎉 Import updates completed successfully!');
}

// Run the update
main();
