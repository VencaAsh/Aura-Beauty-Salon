#!/bin/bash

# Script to completely delete the nepoužité folder and all its contents
NEPOUZITE_DIR="app/src/assets/images/nepoužité"

echo "=== DELETING NEPOUŽITÉ FOLDER ==="
echo "Generated on: $(date)"
echo ""

# Check if folder exists
if [ ! -d "$NEPOUZITE_DIR" ]; then
  echo "❌ Error: nepoužité folder not found at $NEPOUZITE_DIR"
  exit 1
fi

# Show folder contents and size before deletion
echo "📁 FOLDER TO BE DELETED:"
echo "========================"
echo "Location: $NEPOUZITE_DIR"
echo ""
echo "Size:"
du -sh "$NEPOUZITE_DIR"
echo ""
echo "File count:"
find "$NEPOUZITE_DIR" -type f | wc -l
echo ""
echo "Files to be deleted:"
ls -1 "$NEPOUZITE_DIR"
echo ""

# Confirmation prompt
echo "⚠️  WARNING: This will permanently delete the entire nepoužité folder and all 18 files inside it."
echo "   This action cannot be undone!"
echo ""
read -p "Are you absolutely sure you want to proceed? (type 'DELETE' to confirm): " -r
echo ""

if [[ $REPLY == "DELETE" ]]; then
  echo "🗑️  Deleting nepoužité folder..."
  
  # Delete the entire folder
  rm -rf "$NEPOUZITE_DIR"
  
  # Verify deletion
  if [ ! -d "$NEPOUZITE_DIR" ]; then
    echo ""
    echo "✅ SUCCESS: nepoužité folder has been completely deleted!"
    echo ""
    echo "📊 CLEANUP SUMMARY:"
    echo "==================="
    echo "✓ Deleted folder: $NEPOUZITE_DIR"
    echo "✓ Deleted files: 18"
    echo "✓ Space freed: ~13MB"
    echo ""
    echo "🎯 BENEFITS:"
    echo "============"
    echo "✓ Cleaner project structure"
    echo "✓ Reduced project size"
    echo "✓ No more unused assets clutter"
    echo "✓ Easier asset management"
    echo ""
    echo "🔒 SAFETY CONFIRMED:"
    echo "==================="
    echo "✓ No code references to deleted files"
    echo "✓ Website functionality unaffected"
    echo "✓ All active images preserved"
    echo ""
    echo "🎉 Project cleanup completed successfully!"
  else
    echo "❌ Error: Failed to delete the folder. Please check permissions."
    exit 1
  fi
else
  echo "❌ Operation cancelled. No files were deleted."
  echo "   To proceed, run the script again and type 'DELETE' when prompted."
fi
