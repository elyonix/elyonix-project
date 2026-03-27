import sharp from '../node_modules/sharp/lib/index.js';
import { readFileSync, writeFileSync } from 'fs';

// Remove white/near-white background from a PNG
async function removeBackground(inputPath, outputPath, fuzzPercent = 15) {
  const image = sharp(inputPath).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const pixels = data;

  // Sample background color from the 4 corners
  function getPixel(x, y) {
    const idx = (y * width + x) * channels;
    return { r: pixels[idx], g: pixels[idx + 1], b: pixels[idx + 2], a: pixels[idx + 3] };
  }

  const corners = [
    getPixel(0, 0),
    getPixel(width - 1, 0),
    getPixel(0, height - 1),
    getPixel(width - 1, height - 1),
  ];

  // Average the corners to get the background color
  const bgColor = {
    r: Math.round(corners.reduce((s, c) => s + c.r, 0) / corners.length),
    g: Math.round(corners.reduce((s, c) => s + c.g, 0) / corners.length),
    b: Math.round(corners.reduce((s, c) => s + c.b, 0) / corners.length),
  };

  console.log(`Background color detected: rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`);

  const threshold = Math.round((fuzzPercent / 100) * 255);

  // Flood-fill from corners to mark background pixels transparent
  const visited = new Uint8Array(width * height);
  const transparent = new Uint8Array(width * height);
  const queue = [];

  function enqueue(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const idx = y * width + x;
    if (visited[idx]) return;
    visited[idx] = 1;
    const px = getPixel(x, y);
    const dist = Math.max(
      Math.abs(px.r - bgColor.r),
      Math.abs(px.g - bgColor.g),
      Math.abs(px.b - bgColor.b)
    );
    if (dist <= threshold) {
      transparent[idx] = 1;
      queue.push([x, y]);
    }
  }

  // Seed from all 4 edges
  for (let x = 0; x < width; x++) {
    enqueue(x, 0);
    enqueue(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }

  // Process queue iteratively
  while (queue.length > 0) {
    const [x, y] = queue.pop();
    enqueue(x + 1, y);
    enqueue(x - 1, y);
    enqueue(x, y + 1);
    enqueue(x, y - 1);
  }

  // Apply transparency
  for (let i = 0; i < width * height; i++) {
    if (transparent[i]) {
      pixels[i * channels + 3] = 0; // alpha = 0
    }
  }

  // Write output
  await sharp(Buffer.from(pixels), {
    raw: { width, height, channels },
  })
    .png()
    .toFile(outputPath);

  console.log(`Saved: ${outputPath}`);
}

const downloadsPath = 'C:/Users/andre/Downloads';
const publicPath = 'public/images';

await removeBackground(
  `${downloadsPath}/Logo Elyonix 1.png`,
  `${publicPath}/logo-light.png`,
  20
);

await removeBackground(
  `${downloadsPath}/Logo Elyonix 2.png`,
  `${publicPath}/logo-dark.png`,
  20
);

// Also create favicon from logo-light (as PNG ICO fallback)
await sharp(`${downloadsPath}/Logo Elyonix 1.png`)
  .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile('public/favicon-32.png');

await sharp(`${downloadsPath}/Logo Elyonix 1.png`)
  .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile('public/favicon-16.png');

// 180px for apple-touch-icon
await sharp(`${downloadsPath}/Logo Elyonix 1.png`)
  .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile('public/apple-touch-icon.png');

console.log('All done!');
