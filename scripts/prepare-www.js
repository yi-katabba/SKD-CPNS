// Menyalin file web (index.html, *.js data soal, images) ke folder www/ yang dipakai Capacitor.
// File non-aplikasi (g_scripts, .git, workflow, dll) sengaja TIDAK ikut masuk APK.
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'www');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const f of fs.readdirSync(root)) {
  if (f === 'index.html' || (f.endsWith('.js') && !['capacitor.config.js'].includes(f))) {
    fs.copyFileSync(path.join(root, f), path.join(out, f));
  }
}
fs.cpSync(path.join(root, 'images'), path.join(out, 'images'), { recursive: true });
fs.writeFileSync(path.join(out, 'version.js'), `const APP_BUILD = ${parseInt(process.env.BUILD_NUMBER || '0', 10)};\nconst APP_REPO = '${process.env.GITHUB_REPOSITORY || 'yi-katabba/SKD-CPNS'}';\n`);
console.log('www siap:', fs.readdirSync(out).length, 'item');
