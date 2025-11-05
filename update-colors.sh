#!/bin/bash

# Update text colors to Stitch design

FILES=(
  "app/guia-completa/page.tsx"
  "app/guia-completa/como-llegar/page.tsx"
  "app/guia-completa/que-llevar/page.tsx"
  "app/guia-completa/reglas-estadio/page.tsx"
  "app/guia-completa/clima-consejos/page.tsx"
  "app/guia-completa/primera-vez/page.tsx"
)

for file in "${FILES[@]}"; do
  echo "Updating colors in: $file"
  
  # Update headings (h2, h3) with text-gray-900 to custom dark brown
  perl -i -pe 's/(<h[23][^>]*className="[^"]*)(text-gray-900)([^"]*")/$1" style={{ color: '\''#1d110c'\'' }}$3/g' "$file"
  
  # Update body text with text-gray-700 to medium brown
  perl -i -pe 's/(<p[^>]*className="[^"]*)(text-gray-700)([^"]*")/$1" style={{ color: '\''#a15d45'\'' }}$3/g' "$file"
  perl -i -pe 's/(<div[^>]*className="[^"]*)(text-gray-700)([^"]*")/$1" style={{ color: '\''#a15d45'\'' }}$3/g' "$file"
  perl -i -pe 's/(<span[^>]*className="[^"]*)(text-gray-700)([^"]*")/$1" style={{ color: '\''#a15d45'\'' }}$3/g' "$file"
  perl -i -pe 's/(<li[^>]*className="[^"]*)(text-gray-700)([^"]*")/$1" style={{ color: '\''#a15d45'\'' }}$3/g' "$file"
  perl -i -pe 's/(<ul[^>]*className="[^"]*)(text-gray-700)([^"]*")/$1" style={{ color: '\''#a15d45'\'' }}$3/g' "$file"
  
  echo "✓ Colors updated in: $file"
done

echo ""
echo "Color updates complete!"
