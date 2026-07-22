const fs = require('fs');
const path = require('path');

const contextDir = '/Users/jitensony/reactwebsite/cinco_tile/src/context';
if (!fs.existsSync(contextDir)) {
    fs.mkdirSync(contextDir, { recursive: true });
}

const settingsPathJRM = '/Users/jitensony/reactwebsite/jrm/src/context/settings-context.tsx';
const settingsPathCinco = path.join(contextDir, 'settings-context.tsx');
let settingsContent = fs.readFileSync(settingsPathJRM, 'utf8');
fs.writeFileSync(settingsPathCinco, settingsContent);
console.log('Copied settings-context.tsx');

const translationPathJRM = '/Users/jitensony/reactwebsite/jrm/src/context/translation-context.tsx';
const translationPathCinco = path.join(contextDir, 'translation-context.tsx');
let translationContent = fs.readFileSync(translationPathJRM, 'utf8');

translationContent = translationContent.replace(/JRM Construction Admin Portal/g, 'Cinco Tile Admin Portal');
translationContent = translationContent.replace(/JRM Construction Landscape Design/g, 'Cinco Tile');
translationContent = translationContent.replace(/JRM Construction/g, 'Cinco Tile');
translationContent = translationContent.replace(/jrm/g, 'cinco');
translationContent = translationContent.replace(/JRM/g, 'Cinco Tile');

fs.writeFileSync(translationPathCinco, translationContent);
console.log('Copied and rebranded translation-context.tsx');

console.log('Done!');
