"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "❄", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://github.com/tryphonee/MTALEE-TMD1';
  const img = 'https://files.catbox.moe/ejm45q.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*𝗛𝗶, 𝗜 𝗮𝗺* *𝗠𝗮𝘁𝗲𝗹𝗲𝗲.*\n  
🎲 *𝗣𝗮𝗶𝗿 𝗰𝗼𝗱* https://timnasa-session-id-etyy.onrender.com/
♦ *𝗥𝗲𝗽𝗼:* ${data.html_url}
🌟 *𝗦𝘁𝗮𝗿𝘀:* ${repoInfo.stars}
🪡 *𝗙𝗼𝗿𝗸𝘀:* ${repoInfo.forks}
🎯 *𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:* ${releaseDate}
✅ *𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗼𝗻:* ${repoInfo.lastUpdate}
💫 *𝗢𝘄𝗻𝗲𝗿:* *𝗠𝗮𝘁𝗲𝗹𝗲𝗲*
📡 *𝗪𝗰𝗵𝗮𝗻𝗻𝗲𝗹* https://whatsapp.com/channel/0029VatokI45EjxufALmY32X
__________________________________
            *𝚳𝚫𝚻𝚵𝐋𝚵𝚵-𝚻𝚳𝐃*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
