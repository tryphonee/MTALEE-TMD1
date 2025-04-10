const { zokou } = require("../framework/zokou");
const axios = require("axios");

// Define the command with aliases
zokou({
  nomCom: "lyrics",
  aliases: ["mistari", "lyric"],
  reaction: '🎼',
  categorie: "search"
}, async (dest, zk, params) => {
  const { repondre: sendResponse, arg: commandArgs, ms } = params;
  const text = commandArgs.join(" ").trim();

  if (!text) {
    return sendResponse("Please provide a song name.");
  }

  const apiUrl = `https://api.davidcyriltech.my.id/lyrics?title=${encodeURIComponent(text)}`;

  try {
    const response = await axios.get(apiUrl);

    if (!response.data || !response.data.success || !response.data.result || !response.data.result.lyrics) {
      return sendResponse(`Sorry, I couldn't find any lyrics for "${text}".`);
    }

    const { title, artist, link, thumb, lyrics } = response.data.result;
    const imageUrl = thumb || "https://files.catbox.moe/7cce9r.jpg";

    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(imageResponse.data, 'binary');

    const caption = `╭──────────━⊷\n┋Title: ${title}\n┋Artist: ${artist}\n╰──────────━⊷\n${lyrics}`;

    await zk.sendMessage(
      dest,
      {
        image: imageBuffer,
        caption: caption
      },
      { quoted: ms }
    );

  } catch (error) {
    console.error(error); // Log the error for debugging
    sendResponse(`An error occurred while fetching the lyrics for "${text}".`);
  }
});
    
