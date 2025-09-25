#!/bin/bash

# Fix all SVG stop elements with style attributes
for file in src/components/*.astro; do
  echo "Fixing $file..."

  # Fix SVG stop elements
  sed -i '' 's/style="stop-color:\([^;]*\);stop-opacity:\([^"]*\)"/stop-color="\1" stop-opacity="\2"/g' "$file"

  # Fix animation-delay in regular elements
  sed -i '' 's/style="animation-delay: \([^"]*\)"/style={{"animationDelay": "\1"}}/g' "$file"
done

echo "All style fixes completed!"