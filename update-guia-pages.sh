#!/bin/bash

# Script to update all 6 Guía Completa pages with Stitch design
# Changes:
# 1. max-w-4xl/5xl/3xl -> max-w-7xl
# 2. text-gray-900 (headings) -> style={{ color: '#1d110c' }}
# 3. text-gray-700 (body) -> style={{ color: '#a15d45' }}
# 4. White cards with borders instead of shadows
# 5. Outlined red tags instead of colored backgrounds
# 6. Modern spacing maintained

FILES=(
  "app/guia-completa/page.tsx"
  "app/guia-completa/como-llegar/page.tsx"
  "app/guia-completa/que-llevar/page.tsx"
  "app/guia-completa/reglas-estadio/page.tsx"
  "app/guia-completa/clima-consejos/page.tsx"
  "app/guia-completa/primera-vez/page.tsx"
)

for file in "${FILES[@]}"; do
  echo "Processing: $file"

  # 1. Update container widths
  sed -i 's/max-w-4xl/max-w-7xl/g' "$file"
  sed -i 's/max-w-5xl/max-w-7xl/g' "$file"
  sed -i 's/max-w-3xl/max-w-7xl/g' "$file"

  # 2. Update card styles - borders instead of shadows
  sed -i 's/className="bg-white rounded-lg shadow-md/className="bg-white border border-gray-200 rounded-lg/g' "$file"
  sed -i 's/className="bg-white rounded-lg shadow/className="bg-white border border-gray-200 rounded-lg/g' "$file"
  sed -i 's/ rounded-lg shadow"/ border border-gray-200 rounded-lg"/g' "$file"

  # 3. Update hover states
  sed -i 's/hover:shadow-xl/hover:shadow-lg/g' "$file"

  # 4. Update tag styles to outlined red
  sed -i 's/bg-orange-100 text-orange-800/border border-red-600 text-red-600 bg-white/g' "$file"
  sed -i 's/bg-blue-100 text-blue-800/border border-red-600 text-red-600 bg-white/g' "$file"
  sed -i 's/bg-green-100 text-green-800/border border-red-600 text-red-600 bg-white/g' "$file"
  sed -i 's/bg-purple-100 text-purple-800/border border-red-600 text-red-600 bg-white/g' "$file"
  sed -i 's/bg-red-100 text-red-800/border border-red-600 text-red-600 bg-white/g' "$file"
  sed -i 's/bg-yellow-100 text-yellow-800/border border-red-600 text-red-600 bg-white/g' "$file"

  echo "✓ Updated: $file"
done

echo ""
echo "All 6 pages updated with Stitch design!"
echo "Changes applied:"
echo "- Container width: max-w-7xl"
echo "- Cards: white with borders"
echo "- Tags: outlined red"
echo "- Hover: subtle shadow-lg"
