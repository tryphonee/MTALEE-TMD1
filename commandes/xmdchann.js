const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 


zokou({ nomCom: 'channel',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '💗', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`suppσrt hєrє mч σwnєr вч fσllσw thís chαnnєl plєαsє :https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T`) 

   


  }
);

zokou({ nomCom: 'repos',
    desc: 'To check runtime',
    Categorie: 'User',
    reaction: '☘️', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*hєrє ís rєpσ fσr njαвulσ jв tαnks чσu suppσrt gívє stαr αnd fσrks* https://github.com/NjabuloJ/Njabulo-Jb`) 

   


  }
);
 
zokou({ nomCom: 'session',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '💗', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`hєrє ís sєssíσn ld вч ɳᴊᴀʙᴜʟᴏ ᴊʙ σғғɪᴄᴇ :https://njabulo-5778.onrender.com`) 

   


  }
);

