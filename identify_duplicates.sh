#!/bin/bash

# Script to identify duplicate images and determine which can be safely deleted
IMAGE_DIR="app/src/assets/images"
REPORT_FILE="duplicate_analysis.txt"

> "$REPORT_FILE"

echo "=== DUPLICATE IMAGE ANALYSIS ===" >> "$REPORT_FILE"
echo "Generated on: $(date)" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# List of duplicate image names
declare -a DUPLICATE_NAMES=(
  "812C6B46-1BD1-4AC0-92F9-E830EEEF81C7-min.jpeg"
  "IMG_0719-min.jpeg"
  "IMG_0790-min.jpeg"
  "IMG_0981-min.jpeg"
  "IMG_0984-min.jpeg"
  "IMG_0985-min.jpeg"
  "IMG_1158-min.jpeg"
  "IMG_2886-min.jpeg"
  "IMG_3044-min.jpeg"
  "IMG_3177-min.jpeg"
  "IMG_3178-min.jpeg"
  "IMG_3289-min.jpeg"
  "IMG_9512-min.jpeg"
  "IMG_9531-min.jpeg"
  "IMG_9769-min.jpeg"
  "IMG_9798-min.jpeg"
  "IMG_9991-min.jpeg"
  "Salon-hero.jpeg"
)

echo "DUPLICATE IMAGES FOUND:" >> "$REPORT_FILE"
echo "=======================" >> "$REPORT_FILE"

for image_name in "${DUPLICATE_NAMES[@]}"; do
  echo "" >> "$REPORT_FILE"
  echo "Image: $image_name" >> "$REPORT_FILE"
  echo "Locations:" >> "$REPORT_FILE"
  
  # Find all instances of this image
  find "$IMAGE_DIR" -name "$image_name" -not -path "*nepoužité*" | while read file; do
    echo "  - $file" >> "$REPORT_FILE"
  done
done

echo "" >> "$REPORT_FILE"
echo "RECOMMENDATIONS:" >> "$REPORT_FILE"
echo "================" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "Based on code analysis, the following directories are used:" >> "$REPORT_FILE"
echo "- gallery/ folder: Used in galerie/page.tsx" >> "$REPORT_FILE"
echo "- pouzite/ folder: Used in GallerySection.tsx" >> "$REPORT_FILE"
echo "- salon/ folder: Used in salon/page.tsx and HeroSection.tsx" >> "$REPORT_FILE"
echo "- blog/ folder: Used in blog pages" >> "$REPORT_FILE"
echo "- Root images/ folder: Some duplicates that can be removed" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "SAFE TO DELETE (duplicates in root images/ folder):" >> "$REPORT_FILE"
echo "===================================================" >> "$REPORT_FILE"

# Images that are duplicated in root folder and can be safely deleted
declare -a ROOT_DUPLICATES=(
  "app/src/assets/images/IMG_0719-min.jpeg"
  "app/src/assets/images/IMG_0790-min.jpeg"
  "app/src/assets/images/IMG_2886-min.jpeg"
  "app/src/assets/images/IMG_3044-min.jpeg"
  "app/src/assets/images/IMG_3177-min.jpeg"
  "app/src/assets/images/IMG_3178-min.jpeg"
  "app/src/assets/images/IMG_3289-min.jpeg"
  "app/src/assets/images/IMG_9512-min.jpeg"
  "app/src/assets/images/IMG_9769-min.jpeg"
  "app/src/assets/images/IMG_9798-min.jpeg"
  "app/src/assets/images/IMG_9991-min.jpeg"
)

for duplicate in "${ROOT_DUPLICATES[@]}"; do
  if [ -f "$duplicate" ]; then
    echo "$duplicate" >> "$REPORT_FILE"
  fi
done

echo "" >> "$REPORT_FILE"
echo "Analysis complete."
