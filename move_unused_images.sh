#!/bin/bash

# Directory containing images
IMAGE_DIR="app/src/assets/images"
UNUSED_DIR="$IMAGE_DIR/nepoužité"

# Create the unused directory if it doesn't exist
mkdir -p "$UNUSED_DIR"

# List of unused images identified by our analysis
declare -a UNUSED_IMAGES=(
  "20250418_1148_Grainy Filtered Eye_remix_01js44nzzwe45bymjg9mhqg886-min.png"
  "IMG_3297-min.jpeg"
  "WhatsApp Image 2025-05-11 at 22.04.40.jpeg"
  "WhatsApp Image 2025-05-11 at 22.04.45.jpeg"
  "487887388_17861238159384747_2260617714556481489_n.jpg"
  "20250418_1148_Grainy Filtered Eye_remix_01js44nzzwe45bymjg9mhqg886.png"
  "488526782_17861239131384747_1447675895797273619_n.jpg"
  "488362544_17861140617384747_6723293397755226033_n.jpg"
  "IMG_0006-min.jpeg"
  "IMG_9716-min.jpeg"
  "IMG_9374-min.jpeg"
  "IMG_3181-min.jpeg"
  "IMG_3179-min.jpeg"
  "20250510_1329_Summer Glow Up_simple_compose_01jtwz8c8tfraakakaje3r4gss-min.png"
  "20250510_1333_Serene Aura Glow_simple_compose_01jtwzfya9fp8vrqnrh5cbrfha-min.png"
  "IMG_2632 (2).png"
  "IMG_3302.jpeg"
  "IMG_3303.jpeg"
)

# Move each unused image to the unused directory
for image in "${UNUSED_IMAGES[@]}"; do
  # Find the image in the image directory (excluding the unused directory)
  find "$IMAGE_DIR" -type f -name "$image" -not -path "*nepoužité*" | while read -r file; do
    echo "Moving $file to $UNUSED_DIR/"
    mv "$file" "$UNUSED_DIR/"
  done
done

echo "All unused images have been moved to $UNUSED_DIR/"
