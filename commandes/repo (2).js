const axios = require('axios');
const moment = require("moment-timezone");
const { zokou } = require(__dirname + "/../framework/zokou");

// Use your WhatsApp channel JID here
const CHANNEL_JID = ""; // Example for WhatsApp JID

const formatNumber = (num) => num.toLocaleString();

const fetchGitHubRepoDetails = async () => {
    try {
        const repo = 'tryphonee/MTALEE-TMD1';
        const response = await axios.get(`https://api.github.com/repos/${repo}`);
        const { name, description, forks_count, stargazers_count, watchers_count, open_issues_count, owner, license } = response.data;
        return {
            name,
            description: description || "No description provided",
            forks: forks_count,
            stars: stargazers_count,
            watchers: watchers_count,
            issues: open_issues_count,
            owner: owner.login,
            license: license ? license.name : "No license",
            url: response.data.html_url,
        };
    } catch (error) {
        console.error("Error fetching GitHub repository details:", error.response?.data || error.message);
        return null;
    }
};

const commands = ["git", "repo", ";
script", "sc"];

commands.forEach((command) => {
    zokou({ nomCom: command, categorie: "GitHub" }, async (dest, zk, commandeOptions) => {
        let { repondre } = commandeOptions || {};

        const repoDetails = await fetchGitHubRepoDetails();

        if (!repoDetails) {
            (repondre || zk.sendMessage)(dest, { text: "❌ Failed to fetch GitHub repository information." });
            return;
        }

        const { name, description, forks, stars, watchers, issues, owner, license, url } = repoDetails;
        const currentTime = moment().format('DD/MM/YYYY HH:mm:ss');

        const infoMessage = `
🌐 *GitHub Repository Info* 💥🌐

💻 *Name:* ${name}
📜 *Description:* ${description}
⭐ *Stars:* ${formatNumber(stars)}
🍴 *Forks:* ${formatNumber(forks)}
👀 *Watchers:* ${formatNumber(watchers)}
❗ *Open Issues:* ${formatNumber(issues)}
👤 *Owner:* ${owner}
📄 *License:* ${license}

📅 *Fetched on:* ${currentTime}

🔗 *Channel JID:* ${CHANNEL_JID}
        `;

        try {
            // NO IMAGE: Only send text/caption messages
            await zk.sendMessage(dest, {
                text: `✨ Repository Highlights ✨\n\n🛠️ Developed by *matelee*\n📢 Stay updated\nChannel JID: ${CHANNEL_JID}\n\nRepo Url\n${url}`,
            });

            await zk.sendMessage(dest, { text: infoMessage });
        } catch (e) {
            console.log("❌ Error sending GitHub info:", e);
            (repondre || zk.sendMessage)(dest, { text: "❌ Error sending GitHub info: " + e.message });
        }
    });
});
