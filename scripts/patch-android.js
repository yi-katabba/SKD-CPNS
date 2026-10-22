// Dijalankan di CI setelah `cap add android`:
// - versionCode/versionName dinaikkan otomatis (nomor build) supaya APK baru bisa menimpa yang lama
// - APK release ditandatangani dengan keystore TETAP (dari GitHub Secrets) supaya update tidak ditolak Android
const fs = require('fs');
const path = require('path');
const f = path.resolve(__dirname, '..', 'android', 'app', 'build.gradle');
let g = fs.readFileSync(f, 'utf8');
const build = parseInt(process.env.BUILD_NUMBER || '1', 10);
g = g.replace(/versionCode\s+\d+/, `versionCode ${build}`)
     .replace(/versionName\s+"[^"]*"/, `versionName "1.0.${build}"`);
const { KEYSTORE_PATH, KS_PASSWORD, KEY_ALIAS, KEY_PASSWORD } = process.env;
if (!KEYSTORE_PATH || !KS_PASSWORD || !KEY_ALIAS || !KEY_PASSWORD) {
  console.error('Secrets signing belum lengkap'); process.exit(1);
}
const signing = `    signingConfigs {
        release {
            storeFile file('${KEYSTORE_PATH.replace(/\\/g, '/')}')
            storePassword '${KS_PASSWORD}'
            keyAlias '${KEY_ALIAS}'
            keyPassword '${KEY_PASSWORD}'
        }
    }
    buildTypes {`;
g = g.replace('    buildTypes {', signing).replace(/release \{\n(\s+)minifyEnabled/, 'release {\n$1signingConfig signingConfigs.release\n$1minifyEnabled');
fs.writeFileSync(f, g);
console.log('build.gradle dipatch: versionCode', build);
