#!/bin/bash

# Final comprehensive image analysis
IMAGE_DIR="app/src/assets/images"
REPORT_FILE="final_image_analysis.txt"

# Clear previous report
> "$REPORT_FILE"
> unused_images_final.txt

echo "=== FINAL IMAGE ANALYSIS REPORT ===" >> "$REPORT_FILE"
echo "Generated on: $(date)" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# List all images currently in the assets directory (excluding nepoužité)
echo "CURRENT IMAGES IN ASSETS DIRECTORY:" >> "$REPORT_FILE"
echo "====================================" >> "$REPORT_FILE"
find "$IMAGE_DIR" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.svg" -o -name "*.webp" \) -not -path "*nepoužité*" | sort >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Known used images based on code analysis
declare -a USED_IMAGES=(
  # From GallerySection.tsx (pouzite folder)
  "IMG_2886-min.jpeg"
  "812C6B46-1BD1-4AC0-92F9-E830EEEF81C7-min.jpeg"
  "IMG_9798-min.jpeg"
  "IMG_3289-min.jpeg"
  "IMG_9991-min.jpeg"
  "IMG_0411-min.jpeg"
  "IMG_0777-min.jpeg"
  
  # From galerie/page.tsx (gallery folder)
  "IMG_0719-min.jpeg"
  "IMG_0790-min.jpeg"
  "IMG_0981-min.jpeg"
  "IMG_0984-min.jpeg"
  "IMG_0985-min.jpeg"
  "IMG_2886-min.jpeg"
  "IMG_3177-min.jpeg"
  "IMG_9531-min.jpeg"
  "IMG_3044-min.jpeg"
  "IMG_3178-min.jpeg"
  "IMG_1158-min.jpeg"
  "IMG_9512-min.jpeg"
  "IMG_9769-min.jpeg"
  "IMG_9991-min.jpeg"
  "IMG_3289-min.jpeg"
  
  # From salon/page.tsx
  "IMG_0985-min.jpeg"
  "IMG_0984-min.jpeg"
  "IMG_0981-min.jpeg"
  "IMG_0986-min.jpeg"
  "makrushyna.jpg"
  
  # From blog pages
  "IMG_2632.png"
  "IMG_3304.jpg"
  "Salon-hero.jpeg"
  
  # From blog references (public paths)
  "20250418_1337_Elegant Beauty Session_simple_compose_01js4az81tfqbak85m1hs5jjjk-min.png"
  "20250418_1337_Elegant Beauty Session_simple_compose_01js4az81tfqbak85m1hs5jjjk.png"
  
  # From HeroSection.tsx
  "IMG_0986-min.jpeg"
  
  # Special case - image.jpg referenced in next.config.js
  "image.jpg"
)

echo "USED IMAGES (should NOT be deleted):" >> "$REPORT_FILE"
echo "====================================" >> "$REPORT_FILE"
for image in "${USED_IMAGES[@]}"; do
  echo "  $image" >> "$REPORT_FILE"
done
echo "" >> "$REPORT_FILE"

echo "ANALYSIS OF EACH IMAGE:" >> "$REPORT_FILE"
echo "=======================" >> "$REPORT_FILE"

# Check each image file
find "$IMAGE_DIR" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.svg" -o -name "*.webp" \) -not -path "*nepoužité*" | sort | while read image_path; do
  image_name=$(basename "$image_path")
  is_used=false
  
  # Check if this image is in our used list
  for used_image in "${USED_IMAGES[@]}"; do
    if [[ "$image_name" == "$used_image" ]]; then
      is_used=true
      break
    fi
  done
  
  if [ "$is_used" = true ]; then
    echo "✓ USED: $image_name" >> "$REPORT_FILE"
  else
    echo "✗ UNUSED: $image_name" >> "$REPORT_FILE"
    echo "$image_path" >> unused_images_final.txt
  fi
done

echo "" >> "$REPORT_FILE"
echo "SUMMARY:" >> "$REPORT_FILE"
echo "========" >> "$REPORT_FILE"

if [ -s unused_images_final.txt ]; then
  echo "IMAGES THAT CAN BE SAFELY DELETED:" >> "$REPORT_FILE"
  echo "===================================" >> "$REPORT_FILE"
  cat unused_images_final.txt >> "$REPORT_FILE"
  echo "" >> "$REPORT_FILE"
  echo "Total unused images: $(wc -l < unused_images_final.txt)" >> "$REPORT_FILE"
else
  echo "All images appear to be in use." >> "$REPORT_FILE"
fi

echo "" >> "$REPORT_FILE"
echo "Analysis complete. Check $REPORT_FILE for detailed results."
