#!/bin/bash

# Directory containing images
IMAGE_DIR="app/src/assets/images"
UNUSED_DIR="$IMAGE_DIR/nepoužité"

# Create the unused directory if it doesn't exist
mkdir -p "$UNUSED_DIR"

# Find all image files
find "$IMAGE_DIR" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.svg" -o -name "*.webp" \) | grep -v "nepoužité" > all_images.txt

# Find all files that might reference images
find app -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" -o -name "*.html" \) > code_files.txt

# For each image, check if it's referenced in any code file
while IFS= read -r image; do
  image_basename=$(basename "$image")
  image_basename_no_ext="${image_basename%.*}"
  
  # Check if the image is referenced in any code file
  referenced=false
  while IFS= read -r code_file; do
    if grep -q "$image_basename" "$code_file" || grep -q "$image_basename_no_ext" "$code_file"; then
      referenced=true
      echo "Image $image_basename is used in $code_file"
      break
    fi
  done < code_files.txt
  
  # If the image is not referenced, move it to the unused directory
  if [ "$referenced" = false ]; then
    echo "Image $image_basename is not used in any code file"
    # Uncomment the line below to actually move the files
    # mv "$image" "$UNUSED_DIR/"
  fi
done < all_images.txt

# Clean up temporary files
rm all_images.txt code_files.txt

echo "Analysis complete. Unused images are listed above."
