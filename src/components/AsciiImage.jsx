import React, { useEffect, useState } from 'react';

/**
 * Renders an image as a pixelated color-block mosaic in the terminal.
 * Each "pixel" is the full-block character █ colored with the actual pixel's RGB.
 * - `cols` = number of block columns (horizontal resolution)
 * - `rows` = number of block rows (vertical resolution)
 * Characters are ~2x taller than wide, so rows ≈ cols/2 keeps proportions square.
 */
export default function AsciiImage({ src, cols = 80, rows = 40 }) {
  const [grid, setGrid] = useState(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = cols;
      canvas.height = rows;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, cols, rows);

      const { data } = ctx.getImageData(0, 0, cols, rows);
      const rows_ = [];

      for (let y = 0; y < rows; y++) {
        const row = [];
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];

          // Fully transparent pixels → invisible block
          row.push(a < 30
            ? { color: 'transparent' }
            : { color: `rgb(${r},${g},${b})` }
          );
        }
        rows_.push(row);
      }

      setGrid(rows_);
    };

    img.onerror = () => setGrid(null);
    img.src = src;
  }, [src, cols, rows]);

  if (!grid) return null;

  return (
    <pre
      style={{
        lineHeight: '1.0',
        fontSize: '8px',
        fontFamily: "'Consolas', 'Menlo', 'Monaco', monospace",
        display: 'inline-block',
        letterSpacing: '0px',
        margin: 0,
      }}
    >
      {grid.map((row, y) => (
        <div key={y} style={{ height: '8px', lineHeight: '8px' }}>
          {row.map((pixel, x) => (
            <span key={x} style={{ color: pixel.color }}>█</span>
          ))}
        </div>
      ))}
    </pre>
  );
}
