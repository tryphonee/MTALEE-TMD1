'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "star",
  'reaction': '💗',
  'categorie': "Support-Owner",
  'nomFichier': __filename
`;
        // Use correct variable for sender name
        await zk.sendMessage(dest, {
            text: "Hello 👋\n\nClick on the button below to join the OFFICIAL *HACHERS HOOD* WhatsApp Group",
            contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363317462952356@newsletter',
            newsletterName: "ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ",
            serverMessageId: 143,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ",
            body: "ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ",
            thumbnailUrl: 'https://raw.githubusercontent.com/joeljamestech2/JOEL-XMD/refs/heads/main/mydata/media/alive.jpg', // Add thumbnail URL if required 
            sourceUrl: 'https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: true
                }
            }
        });