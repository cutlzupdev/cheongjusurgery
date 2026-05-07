import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const src = path.join(root, 'public/images/hero.jpg');
const outDir = path.join(root, 'public/images');
const widths = [640, 750, 828, 1080, 1200, 1920];

for (const w of widths) {
  await sharp(src).resize({ width: w }).avif({ quality: 55, effort: 5 }).toFile(`${outDir}/hero-${w}.avif`);
  await sharp(src).resize({ width: w }).webp({ quality: 75 }).toFile(`${outDir}/hero-${w}.webp`);
  await sharp(src).resize({ width: w }).jpeg({ quality: 80, mozjpeg: true }).toFile(`${outDir}/hero-${w}.jpg`);
}

const { data } = await sharp(src).resize({ width: 20 }).blur(8).jpeg({ quality: 60 }).toBuffer({ resolveWithObject: true });
const lqip = `data:image/jpeg;base64,${data.toString('base64')}`;
fs.writeFileSync(path.join(outDir, 'hero-lqip.txt'), lqip);

for (const f of fs.readdirSync(outDir).filter(x => /^hero-\d+\.(avif|webp|jpg)$/.test(x))) {
  console.log(`${f}: ${(fs.statSync(path.join(outDir, f)).size / 1024).toFixed(1)} KB`);
}
console.log(`LQIP bytes: ${lqip.length}`);
