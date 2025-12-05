const {
  zokou
} = require("../framework/zokou");
const {
  getBuffer
} = require("../framework/dl/Function");
const runtime = function (_0x44a6e2) {
  _0x44a6e2 = Number(_0x44a6e2);
  var _0x3f18ce = Math.floor(_0x44a6e2 / 86400);
  var _0x33ca03 = Math.floor(_0x44a6e2 % 86400 / 0xe10);
  var _0x24bbcb = Math.floor(_0x44a6e2 % 0xe10 / 0x3c);
  var _0x28c156 = Math.floor(_0x44a6e2 % 0x3c);
  var _0x15925d = _0x3f18ce > 0x0 ? _0x3f18ce + (_0x3f18ce == 0x1 ? " day, " : " d, ") : '';
  var _0x3fa347 = _0x33ca03 > 0x0 ? _0x33ca03 + (_0x33ca03 == 0x1 ? " hour, " : " h, ") : '';
  var _0x493d77 = _0x24bbcb > 0x0 ? _0x24bbcb + (_0x24bbcb == 0x1 ? " minute, " : " m, ") : '';
  var _0x45c385 = _0x28c156 > 0x0 ? _0x28c156 + (_0x28c156 == 0x1 ? " second" : " s") : '';
  return _0x15925d + _0x3fa347 + _0x493d77 + _0x45c385;
};
zokou({
  'nomCom': 'uptime',
  'desc': "To check runtime",
  'Categorie': "General",
  'reaction': '⚙️',
  'fromMe': "true"
}, async (_0x5733e8, _0x11c5bc, _0x57521f) => {
  const {
    ms: _0x2bfb36,
    arg: _0x5b9f74,
    repondre: _0x141271
  } = _0x57521f;
  await _0x141271("*_Uptime of 𝚳𝚫𝚻𝚵𝐋𝚵𝚵-𝚻𝚳𝐃: " + runtime(process.uptime()) + '_*');
});
zokou({
  'nomCom': 'ss',
  'desc': "screenshots website",
  'Categorie': 'General',
  'reaction': '🎥',
  'fromMe': "true"
}, async (_0x5d5ae8, _0x3e1dc4, _0x105a5c) => {
  const {
    ms: _0x4e3982,
    arg: _0x26023f,
    repondre: _0x442146
  } = _0x105a5c;
  if (!_0x26023f || _0x26023f.length === 0x0) {
    return _0x442146("provide a link...");
  }
  const _0xc585f8 = _0x26023f.join(" ");
  let _0x23dc0e = "https://api.maher-zubair.tech/misc/sstab?url=" + _0xc585f8 + "&dimension=720x720";
  let _0x460842 = await getBuffer(_0x23dc0e);
  await _0x3e1dc4.sendMessage(_0x5d5ae8, {
    'image': _0x460842
  }, {
    'caption': "Powered by Rahmany"
  }, {
    'quoted': _0x4e3982
  });
});
