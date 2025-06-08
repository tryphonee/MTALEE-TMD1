'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "wallpaper2",
  'reaction': '♥️',
  'nomFichier': __filename
}, async (_0x280690, _0x2af0fc, _0x3db31b) => {
  console.log("Commande saisie !!!s");
  await _0x2af0fc.sendMessage(_0x280690, {
    'image': {
      'url': "https://files.catbox.moe/lllpe3.jpg"
    },
    'caption': "🚗𝗥𝗮𝗻𝗱𝗼𝗺 𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿 \n\n 🚘Download it and set it to your wallpaper 𝗙𝗿𝗼𝗺 (MATELEE-TMD)🚗MADE BY MATELEE"
  });
});
console.log("mon test");
