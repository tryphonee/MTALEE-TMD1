'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "alive",
  'reaction': '⬇️',
  'nomFichier': __filename
}, async (_0x4123fc, _0x5bf65e, _0x51340e) => {
  console.log("Alive command triggered!");
  const _0x2512ee = _0x51340e?.['ms']?.["pushName"] || "Unknown Contact";
  try {
    await _0x5bf65e.sendMessage(_0x4123fc, {
      'image': {
        'url': "https://files.catbox.moe/u51mv8.jpg"
      },
      'caption': "💫 Always Active 🔥\n\n✨ Contact: " + _0x2512ee + "\n🙏 [Visit Channel](" + "https://whatsapp.com/channel/0029Vb2NqkvBPzjPEvFiYa0R" + ')',
      'audio': {
        'url': "https://files.catbox.moe/xktd7q.mp3"
      },
      'mimetype': "audio/mpeg",
      'ptt': true,
      'contextInfo': {
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363332512801418@newsletter",
          'newsletterName': "╭••➤©matelee",
          'serverMessageId': 0x8f
        },
        'forwardingScore': 0x3e7,
        'externalAdReply': {
          'title': "Hallo matelee: " + _0x2512ee,
          'body': "Yoh don't disturb am active🥱 Tap here",
          'thumbnailUrl': "https://files.catbox.moe/u51mv8.jpg",
          'mediaType': 0x1,
          'renderLargerThumbnail': true,
          'sourceUrl': "https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31",
          'showAdAttribution': true
        },
        'forwardingScore': -1
      }
    });
    console.log("Alive message sent successfully with customized layout.");
  } catch (_0x136506) {
    console.error("Error sending Alive message:", _0x136506.message);
  }
});
console.log("WhatsApp bot is ready!");
fana({
  'nomCom': "test",
  'reaction': '⬇️',
  'nomFichier': __filename
}, async (_0x17a3c8, _0x5d87a8, _0x5c5b95) => {
  console.log("Alive command triggered!");
  const _0x4e00c7 = _0x5c5b95?.['ms']?.["pushName"] || "Unknown Contact";
  try {
    await _0x5d87a8.sendMessage(_0x17a3c8, {
      'image': {
        'url': "https://files.catbox.moe/jkzixp.jpg"
      },
      'caption': "💥 Always Active 💥\n\n🎙️ Contact: " + _0x4e00c7 + "\n🎙️ [Visit Channel](" + "https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31" + ')',
      'audio': {
        'url': "https://files.catbox.moe/xktd7q.mp3"
      },
      'mimetype': "audio/mpeg",
      'ptt': true,
      'contextInfo': {
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363332512801418@newsletter",
          'newsletterName': "╭••➤©matelee",
          'serverMessageId': 0x8f
        },
        'forwardingScore': 0x3e7,
        'externalAdReply': {
          'title': "matelee: " + _0x4e00c7,
          'body': "Yoh don't disturb am active🥱 Tap here",
          'thumbnailUrl': "https://files.catbox.moe/u51mv8.jpg",
          'mediaType': 0x1,
          'renderLargerThumbnail': true,
          'sourceUrl': "https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31",
          'showAdAttribution': true
        },
        'forwardingScore': -1
      }
    });
    console.log("Alive message sent successfully with customized layout.");
  } catch (_0x6a9983) {
    console.error("Error sending Alive message:", _0x6a9983.message);
  }
});
console.log("WhatsApp bot is ready!");
