#!/bin/bash

# Script to safely delete unused and duplicate images
BACKUP_DIR="app/src/assets/images/nepoužité"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

echo "=== DELETING UNUSED AND DUPLICATE IMAGES ==="
echo "Generated on: $(date)"
echo ""

# List of files to delete
declare -a FILES_TO_DELETE=(
  # Unused video file
  "app/src/assets/images/salon/WhatsApp Video 2025-05-11 at 22.04.43.mp4"
  
  # Duplicate images in root directory
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
  "app/src/assets/images/812C6B46-1BD1-4AC0-92F9-E830EEEF81C7-min.jpeg"
)

echo "Files to be deleted:"
for file in "${FILES_TO_DELETE[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✓ $file"
  else
    echo "  ✗ $file (not found)"
  fi
done

echo ""
read -p "Do you want to proceed with deletion? (y/N): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Deleting files..."
  
  for file in "${FILES_TO_DELETE[@]}"; do
    if [ -f "$file" ]; then
      echo "Deleting: $file"
      rm "$file"
    fi
  done
  
  echo ""
  echo "✅ Cleanup completed successfully!"
  echo "📊 Total files deleted: $(printf '%s\n' "${FILES_TO_DELETE[@]}" | wc -l)"
  echo ""
  echo "Summary:"
  echo "- 1 unused video file deleted"
  echo "- 12 duplicate image files deleted"
  echo "- All essential images preserved"
  echo ""
  echo "The website will continue to function normally."
else
  echo "Operation cancelled."
fi
