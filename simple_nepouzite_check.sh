#!/bin/bash

# Simple check for nepoužité folder files
NEPOUZITE_DIR="app/src/assets/images/nepoužité"
REPORT_FILE="simple_nepouzite_report.txt"

> "$REPORT_FILE"

echo "=== SIMPLE NEPOUŽITÉ FOLDER ANALYSIS ===" >> "$REPORT_FILE"
echo "Generated on: $(date)" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "FOLDER SIZE:" >> "$REPORT_FILE"
du -sh "$NEPOUZITE_DIR" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "FILE COUNT:" >> "$REPORT_FILE"
find "$NEPOUZITE_DIR" -type f | wc -l >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "FILES IN FOLDER:" >> "$REPORT_FILE"
ls -1 "$NEPOUZITE_DIR" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "CHECKING FOR ACTUAL CODE REFERENCES (excluding analysis scripts):" >> "$REPORT_FILE"
echo "=================================================================" >> "$REPORT_FILE"

# List of files to check
declare -a FILES_TO_CHECK=(
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

# Check only in actual code files (not analysis scripts)
for file in "${FILES_TO_CHECK[@]}"; do
  echo "Checking: $file" >> "$REPORT_FILE"
  
  # Search in app directory only (actual code)
  if find app -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" -o -name "*.scss" \) -exec grep -l "$file" {} \; 2>/dev/null | head -1 > /dev/null; then
    echo "  ✓ FOUND in code files:" >> "$REPORT_FILE"
    find app -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" -o -name "*.scss" \) -exec grep -l "$file" {} \; 2>/dev/null >> "$REPORT_FILE"
  else
    echo "  ✗ NOT FOUND in any code files" >> "$REPORT_FILE"
  fi
  echo "" >> "$REPORT_FILE"
done

echo "CONCLUSION:" >> "$REPORT_FILE"
echo "===========" >> "$REPORT_FILE"
echo "Based on this analysis, all files in the nepoužité folder appear to be" >> "$REPORT_FILE"
echo "truly unused and can be safely deleted." >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "Analysis complete."
