const { zokou } = require("../farmworker/zokou")
//const { getGroupe } = require("../data/groupe")
const {ajouterOuMettreAJourJid,mettreAJourAction,verifierEtatJid} = require("../bdd/antilien")
const {atbajouterOuMettreAJourJid,atbverifierEtatJid} = require("../bdd/antibot")
const { search, download } = require("aptoide-scraper");
const fs = require("fs-extra");
const conf = require("../set");
const { default: axios } = require('axios');
//const { uploadImageToImgur } = require('../france/imgur');
const {getBinaryNodeChild, getBinaryNodeChildren} = require('@whiskeysockets/baileys').default;

zokou({
  nomCom: "vcfv",
  aliases: ["savecontact", "savecontacts"], // Adding aliases
  categorie: 'Group',
  reaction: "☘️"
}, async (dest, zk, commandeOptions) => {
  const { repondre, verifGroupe, verifAdmin, ms } = commandeOptions;
  const fs = require('fs');

  if (!verifAdmin) {
    repondre("You are not an admin here!");
    return;
  }

  if (!verifGroupe) {
    repondre("This command works in groups only");
    return;
  }

  try {
    let metadat = await zk.groupMetadata(dest);
    const partic = await metadat.participants;

    let vcard = '';
    let noPort = 0;

    for (let a of partic) {
      // Get the participant's phone number
      let phoneNumber = a.id.split("@")[0];

      // Use the participant's name or default to "[FMD] Phone Number" if no name is found
      let contactName = a.name || a.notify || `[my-family] +${phoneNumber}`;

      vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:${contactName}\nTEL;type=CELL;type=VOICE;waid=${phoneNumber}:+${phoneNumber}\nEND:VCARD\n`;
    }

    let cont = './contacts.vcf';

    await repondre(`A moment, *Njabulo Jb* is compiling ${partic.length} contacts into a vcf...`);

    await fs.writeFileSync(cont, vcard.trim());

    await zk.sendMessage(dest, {
      document: fs.readFileSync(cont),
      mimetype: 'text/vcard',
      fileName: `${metadat.subject}.Vcf`,
      caption: `ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ\n\nᴛᴏᴛᴀʟ ᴄᴏɴᴛᴀᴄᴛs : ${partic.length} \n\nᴠᴄғ ғᴏʀ : ${metadat.subject}\n\n> *ᴋᴇᴇᴘ ᴜsɪɴɢ ʙᴇʟᴛᴀʜ-ᴍᴅ*`, 
      contextInfo: {
         isForwarded: true,
         forwardedNewsletterMessageInfo: {
         newsletterJid: '120363345407274799@newsletter',
         newsletterName: "NJABULO JB",
         serverMessageId: 143,
         },
         forwardingScore: 999, // Score to indicate it has been forwarded
         externalAdReply: {
           title: "ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ",
           body: "fast via",
           thumbnailUrl: 'https://files.catbox.moe/cs7xfr.jpg', // Add thumbnail URL if required 
           sourceUrl: 'https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T', // Add source URL if necessary
           mediaType: 1,
           renderLargerThumbnail: true
        }
      }
    }, { ephemeralExpiration: 86400, quoted: ms });

    fs.unlinkSync(cont);
  } catch (error) {
    console.error("Error while creating or sending VCF:", error.message || error);
    repondre("An error occurred while creating or sending the VCF. Please try again.");
  }
});
  
