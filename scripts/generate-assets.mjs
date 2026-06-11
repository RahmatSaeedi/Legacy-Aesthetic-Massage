/**
 * One-off asset generator: builds the social share image, PNG favicons/app
 * icons, and a schema logo from existing files. Re-run with `npm run assets`
 * after changing the hero photo or favicon.svg.
 */
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const img = (p) => resolve(root, 'src/assets/images', p);
const pub = (p) => resolve(root, 'public', p);

async function run() {
  // 1) Open Graph / Twitter share image (1200×630) from the hero photo.
  await sharp(img('Massage_3.jpg'))
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(pub('og-image.jpg'));

  // 2) PNG icons rasterized from the SVG favicon.
  const svg = await readFile(pub('favicon.svg'));
  const icon = (size, out) =>
    sharp(svg, { density: 512 }).resize(size, size).png().toFile(pub(out));
  await Promise.all([
    icon(32, 'favicon-32.png'),
    icon(180, 'apple-touch-icon.png'),
    icon(192, 'icon-192.png'),
    icon(512, 'icon-512.png'),
  ]);

  // 3) Schema logo — flatten the script wordmark onto white for visibility.
  await sharp(img('signature.png'))
    .flatten({ background: '#ffffff' })
    .resize({ width: 600 })
    .png()
    .toFile(pub('logo.png'));

  console.log('✓ Generated og-image.jpg, favicons, app icons, and logo.png');
}

run().catch((err) => {
  console.error('Asset generation failed:', err);
  process.exit(1);
});
