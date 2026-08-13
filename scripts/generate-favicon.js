const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const projectRoot = path.join(__dirname, '..');
const srcPath = path.join(projectRoot, 'public', 'assets', 'imgs', 'aldwalya1-light-withoutText.png');
const outPath = path.join(projectRoot, 'public', 'assets', 'imgs', 'favicon-32x32.png');

async function generate() {
  try {
    await sharp(srcPath)
      .resize(32, 32, { fit: 'cover', position: 'center' })
      .png()
      .toFile(outPath);
    console.log('Created square favicon: public/assets/imgs/favicon-32x32.png');
  } catch (err) {
    console.error('Favicon generation failed:', err.message);
    process.exit(1);
  }
}

generate();
