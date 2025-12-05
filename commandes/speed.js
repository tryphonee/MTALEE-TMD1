const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


zokou({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🚀', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    const { start} = new Date().getTime()
    return repondre('*ₘₐₜₑₗₑₑ ₚᵢₙg ₚₒₙg ₛₚₑₑd .₉₈%*\n ```' +98+ '``` *ᴍ/s*') 
    const { end } = new Date().getTime()
    await zok.sendMessage('*ᴍᴀᴛᴇʟᴇᴇ sᴘᴇᴇᴅ2 ɪs 99%!*\n ```' + (end - start) + '``` *ms*')
  }
)


