#!/bin/bash

# Comprehensive analysis of nepoužité folder
NEPOUZITE_DIR="app/src/assets/images/nepoužité"
REPORT_FILE="nepouzite_analysis.txt"

> "$REPORT_FILE"

echo "=== NEPOUŽITÉ FOLDER ANALYSIS ===" >> "$REPORT_FILE"
echo "Generated on: $(date)" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "FILES IN NEPOUŽITÉ FOLDER:" >> "$REPORT_FILE"
echo "==========================" >> "$REPORT_FILE"
ls -la "$NEPOUZITE_DIR" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# List of files in nepoužité folder
declare -a NEPOUZITE_FILES=(
  "20250418_1148_Grainy Filtered Eye_remix_01js44nzzwe45bymjg9mhqg886-min.png"
  "20250418_1148_Grainy Filtered Eye_remix_01js44nzzwe45bymjg9mhqg886.png"
  "20250510_1329_Summer Glow Up_simple_compose_01jtwz8c8tfraakakaje3r4gss-min.png"
  "20250510_1333_Serene Aura Glow_simple_compose_01jtwzfya9fp8vrqnrh5cbrfha-min.png"
  "487887388_17861238159384747_2260617714556481489_n.jpg"
  "488362544_17861140617384747_6723293397755226033_n.jpg"
  "488526782_17861239131384747_1447675895797273619_n.jpg"
  "IMG_0006-min.jpeg"
  "IMG_2632 (2).png"
  "IMG_3179-min.jpeg"
  "IMG_3181-min.jpeg"
  "IMG_3297-min.jpeg"
  "IMG_3302.jpeg"
  "IMG_3303.jpeg"
  "IMG_9374-min.jpeg"
  "IMG_9716-min.jpeg"
  "WhatsApp Image 2025-05-11 at 22.04.40.jpeg"
  "WhatsApp Image 2025-05-11 at 22.04.45.jpeg"
)

echo "CHECKING FOR REFERENCES IN CODEBASE:" >> "$REPORT_FILE"
echo "=====================================" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Function to check for references
check_file_references() {
  local filename="$1"
  local basename_no_ext="${filename%.*}"
  local found=false
  
  echo "Checking: $filename" >> "$REPORT_FILE"
  
  # Search in all code files
  if find app -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" -o -name "*.scss" -o -name "*.json" -o -name "*.md" \) -exec grep -l "$filename\|$basename_no_ext" {} \; 2>/dev/null | head -1 > /dev/null; then
    echo "  ✓ FOUND references:" >> "$REPORT_FILE"
    find app -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" -o -name "*.scss" -o -name "*.json" -o -name "*.md" \) -exec grep -l "$filename\|$basename_no_ext" {} \; 2>/dev/null | while read file; do
      echo "    - $file" >> "$REPORT_FILE"
    done
    found=true
  fi
  
  # Search in public directory
  if find app/public -type f -exec grep -l "$filename\|$basename_no_ext" {} \; 2>/dev/null | head -1 > /dev/null; then
    echo "  ✓ FOUND in public directory:" >> "$REPORT_FILE"
    find app/public -type f -exec grep -l "$filename\|$basename_no_ext" {} \; 2>/dev/null | while read file; do
      echo "    - $file" >> "$REPORT_FILE"
    done
    found=true
  fi
  
  # Search in root directory files
  if find . -maxdepth 1 -type f -exec grep -l "$filename\|$basename_no_ext" {} \; 2>/dev/null | head -1 > /dev/null; then
    echo "  ✓ FOUND in root files:" >> "$REPORT_FILE"
    find . -maxdepth 1 -type f -exec grep -l "$filename\|$basename_no_ext" {} \; 2>/dev/null | while read file; do
      echo "    - $file" >> "$REPORT_FILE"
    done
    found=true
  fi
  
  if [ "$found" = false ]; then
    echo "  ✗ NO REFERENCES FOUND" >> "$REPORT_FILE"
  fi
  
  echo "" >> "$REPORT_FILE"
}

# Check each file
for file in "${NEPOUZITE_FILES[@]}"; do
  check_file_references "$file"
done

echo "SUMMARY:" >> "$REPORT_FILE"
echo "========" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "Total files in nepoužité folder: ${#NEPOUZITE_FILES[@]}" >> "$REPORT_FILE"
echo "Total size of nepoužité folder:" >> "$REPORT_FILE"
du -sh "$NEPOUZITE_DIR" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "Analysis complete. Check $REPORT_FILE for detailed results."
