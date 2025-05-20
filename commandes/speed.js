const {
  zokou
} = require(__dirname + "/../framework/zokou");
const moment = require("moment-timezone");
const set = require(__dirname + "/../set");
moment.tz.setDefault('' + set.TZ);
zokou({
  'nomCom': "ping",
  'categorie': "General"
}, async (_0x411700, _0x400448, _0x459ebd) => {
  let {
    ms: _0x922dd7
  } = _0x459ebd;
  const {
    time: _0x1569c7,
    date: _0x635de8
  } = {
    'time': moment().format("HH:mm:ss"),
    'date': moment().format("DD/MM/YYYY")
  };
  const _0x27c43d = Math.floor(Math.random() * 0x64) + 0x1;
  try {
    await _0x400448.sendMessage(_0x411700, {
      'audio': {
        'url': "https://files.catbox.moe/2wonzj.mp3"
      },
      'mimetype': "audio/mp4",
      'ptt': true,
      'contextInfo': {
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363332512801418@newsletter",
          'newsletterName': "Rahman",
          'serverMessageId': 0x8f
        },
        'forwardingScore': 0x3e7,
        'externalAdReply': {
          'title': "MATELEE TMD",
          'body': "⚪ 𝗽𝗶𝗻𝗴: " + _0x27c43d + "ms\n📅 *Date:* " + _0x635de8 + "\n⏰ *Time:* " + _0x1569c7,
          'thumbnailUrl': "https://files.catbox.moe/v0gjyy.jpg",
          'mediaType': 0x1,
          'renderSmallThumbnail': true
        }
      }
    }, {
      'quoted': _0x922dd7
    });
  } catch (_0xcb931d) {
    console.log("❌ Ping Command Error: " + _0xcb931d);
    repondre("❌ Error: " + _0xcb931d);
  }
});
