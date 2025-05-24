#!/bin/bash

# Comprehensive image analysis script
IMAGE_DIR="app/src/assets/images"
REPORT_FILE="image_analysis_report.txt"

# Clear previous report
> "$REPORT_FILE"

echo "=== COMPREHENSIVE IMAGE ANALYSIS REPORT ===" >> "$REPORT_FILE"
echo "Generated on: $(date)" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Function to check if an image is referenced
check_image_references() {
    local image_path="$1"
    local image_name=$(basename "$image_path")
    local image_name_no_ext="${image_name%.*}"
    local found=false
    
    echo "Checking: $image_name" >> "$REPORT_FILE"
    
    # Check in TypeScript/JavaScript files
    if find app -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec grep -l "$image_name\|$image_name_no_ext" {} \; 2>/dev/null | head -1 > /dev/null; then
        echo "  ✓ Found in TypeScript/JavaScript files:" >> "$REPORT_FILE"
        find app -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec grep -l "$image_name\|$image_name_no_ext" {} \; 2>/dev/null | while read file; do
            echo "    - $file" >> "$REPORT_FILE"
        done
        found=true
    fi
    
    # Check in CSS files
    if find app -type f \( -name "*.css" -o -name "*.scss" -o -name "*.sass" \) -exec grep -l "$image_name\|$image_name_no_ext" {} \; 2>/dev/null | head -1 > /dev/null; then
        echo "  ✓ Found in CSS files:" >> "$REPORT_FILE"
        find app -type f \( -name "*.css" -o -name "*.scss" -o -name "*.sass" \) -exec grep -l "$image_name\|$image_name_no_ext" {} \; 2>/dev/null | while read file; do
            echo "    - $file" >> "$REPORT_FILE"
        done
        found=true
    fi
    
    # Check in config files
    if find app -type f \( -name "*.json" -o -name "*.config.*" -o -name "*.md" \) -exec grep -l "$image_name\|$image_name_no_ext" {} \; 2>/dev/null | head -1 > /dev/null; then
        echo "  ✓ Found in config/other files:" >> "$REPORT_FILE"
        find app -type f \( -name "*.json" -o -name "*.config.*" -o -name "*.md" \) -exec grep -l "$image_name\|$image_name_no_ext" {} \; 2>/dev/null | while read file; do
            echo "    - $file" >> "$REPORT_FILE"
        done
        found=true
    fi
    
    # Check in build output (if exists)
    if [ -d "app/.next" ]; then
        if find app/.next -type f -exec grep -l "$image_name\|$image_name_no_ext" {} \; 2>/dev/null | head -1 > /dev/null; then
            echo "  ✓ Found in build output (.next)" >> "$REPORT_FILE"
            found=true
        fi
    fi
    
    if [ "$found" = false ]; then
        echo "  ✗ NOT FOUND in any files" >> "$REPORT_FILE"
        echo "$image_path" >> unused_images.txt
    fi
    
    echo "" >> "$REPORT_FILE"
}

# Create list of unused images
> unused_images.txt

echo "ANALYSIS RESULTS:" >> "$REPORT_FILE"
echo "=================" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Find all image files (excluding the nepoužité directory)
find "$IMAGE_DIR" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.svg" -o -name "*.webp" \) -not -path "*nepoužité*" | sort | while read image; do
    check_image_references "$image"
done

echo "" >> "$REPORT_FILE"
echo "SUMMARY:" >> "$REPORT_FILE"
echo "========" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

if [ -s unused_images.txt ]; then
    echo "UNUSED IMAGES (can be safely deleted):" >> "$REPORT_FILE"
    cat unused_images.txt >> "$REPORT_FILE"
else
    echo "All images appear to be in use." >> "$REPORT_FILE"
fi

echo "" >> "$REPORT_FILE"
echo "Analysis complete. Check $REPORT_FILE for detailed results."
