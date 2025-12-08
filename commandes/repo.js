"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { zokou } = require("../framework/zokou");

zokou(
  { 
    nomCom: "repo", 
    catégorie: "Général", 
    reaction: "🌀", 
    nomFichier: __filename 
  },
  async (dest, zk, commandeOptions) => {
    const githubRepo = "https://api.github.com/repos/tryphonee/MTALEE-TMD1";
    const img = "https://files.catbox.moe/ejm45q.jpg";

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

        const releaseDate = new Date(data.created_at).toLocaleDateString("en-GB");
        const lastUpdateDate = new Date(data.updated_at).toLocaleDateString("en-GB");

        const gitdata = `

      *🔥 Welcome to MATELEE TMD*
📣 Support our channel: [(https://whatsapp.com/channel/0029VatokI45EjxufALmY32X)
_____________________________________

     *Repository Information*
🔗 *Repository Link:* ${data.html_url}
📅 *Last Updated:* ${lastUpdateDate}
______________________________________

    *Repository Stats* 
⭐️ *Stars:* ${repoInfo.stars}
🍴 *Forks:* ${repoInfo.forks}
📆 *Release Date:* ${releaseDate}
👤 *Owner:* ${repoInfo.owner}


╔═══════════════════
         *🔥 𝑝𝑜𝑤𝑒𝑟𝑒𝑑 𝑏𝑦 𝑄𝑎𝑟𝑡𝑑𝑒 🔥*
╚═══════════════════
        `;

        await zk.sendMessage(dest, { 
          image: { url: img }, 
          caption: gitdata 
        });
      } else {
        console.log("Could not fetch data from the repository.");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
);
