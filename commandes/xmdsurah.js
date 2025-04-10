const { zokou } = require('../framework/zokou');
const axios = require('axios');
const conf = require(__dirname + "/../set");

zokou({
  nomCom: "surah",
 aliases: ["surahh", "qurann"],
  reaction: '🤲',
  categorie: "God-first"
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  const reference = arg.join(" ");
  
  if (!reference) {
    return repondre("Please specify the surah number or name.", {
      contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363345407274799@newsletter',
         newsletterName: "NJABULO JB",
         serverMessageId: 143,
         },
         forwardingScore: 999, // Score to indicate it has been forwarded
        externalAdReply: {
          title: "Surah Reference Required",
          body: "Please specify the surah number or name.",
          thumbnailUrl: conf.URL, 
          sourceUrl: conf.GURL,
          mediaType: 1,
          showAdAttribution: true,
        },
      },
    });
  }
  
  try {
    const response = await axios.get(`https://quran-endpoint.vercel.app/quran/${reference}`);
    
    if (response.data.status !== 200) {
      return repondre("Invalid surah reference. Please specify a valid surah number or name.", {
        contextInfo: {
        isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363345407274799@newsletter',
         newsletterName: "NJABULO JB",
         serverMessageId: 143,
         },
         forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "Invalid Surah Reference",
            body: "Please specify a valid surah number or name.",
            thumbnailUrl: conf.URL, // Replace with a suitable thumbnail URL
            sourceUrl: conf.GURL,
            mediaType: 1,
            showAdAttribution: true,
          },
        },
      });
    }
    
    const data = response.data.data;
    const messageText = `
ᬑ *NJABULO JB QURAN SURAH* ᬒ

*🕌 Quran: The Holy Book*
📜 *Surah:* 🕌❤️${data.number}: ${data.asma.ar.long} (${data.asma.en.long})❤️🕌
📝 *Type:* ${data.type.en}
🏮 *Number of verses:* ${data.ayahCount}
🔮 *Explanation (Urdu):* ${data.tafsir.id}
🔮 *Explanation (English):* ${data.tafsir.en}

*_Powered by ${conf.OWNER_NAME}* `;
    
    await zk.sendMessage(dest, {
      text: messageText,
      contextInfo: {
        isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363345407274799@newsletter',
         newsletterName: "NJABULO JB",
         serverMessageId: 143,
         },
         forwardingScore: 999, // Score to indicate it has been forwarded
        externalAdReply: {
          title: "NJABULO JB QURAN SURAH",
          body: `We're reading: ${data.asma.en.long}`,
          mediaType: 1,
          thumbnailUrl: conf.URL, 
          sourceUrl: conf.GURL,
          showAdAttribution: true, 
        },
      },
    }, { quoted: ms });
    
  } catch (error) {
    console.error("Error fetching Quran passage:", error);
    await repondre("API request failed. Please try again later.", {
      contextInfo: {
        isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363345407274799@newsletter',
         newsletterName: "NJABULO JB",
         serverMessageId: 143,
         },
         forwardingScore: 999, // Score to indicate it has been forwarded
        externalAdReply: {
          title: "Error Fetching Quran Passage",
          body: "Please try again later.",
          thumbnailUrl: "https://files.catbox.moe/058ggv.jpg", // Replace with a suitable thumbnail URL
          sourceUrl: conf.GURL,
          mediaType: 1,
          showAdAttribution: true,
        },
      },
    });
  }
});
