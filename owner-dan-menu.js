const fs = require('fs')

global.namabot = "*STORE*"
global.namaowner = "𝙁𝙄𝙆𝙊𝙓𝘿"
global.footer_text = "© BOT" + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6283110933360']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay
Ovo
Dana
Gopay

Mau ganti payment? ketik .setpay
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\` 「 *OWNER MENU* 」 
│
│○ owner
│
╰❒

╭─❒ 「  *OWNER MENU*  」
│
│○ addsewa  
│○ delsewa  
│○ listsewa  
│○ ceksewa  
│
╰❒

「 *OWNER MENU* 」 
│
│○ pay
│○ setpay
│
╰❒

╭─❒ 「  *STORE MENU*  」
│
│○ list  
│○ addlist  
│○ updatelist  
│○ dellist  
│○ jeda  
│○ tambah  
│○ kurang  
│○ kali  
│○ bagi  
│○ setproses  
│○ changeproses  
│○ delsetproses  
│○ setdone  
│○ changedone  
│○ delsetdone  
│○ proses  
│○ done  
│○ setwelcome  
│○ changewelcome  
│○ delsetwelcome  
│○ setleft  
│○ changeleft  
│○ delsetleft  
│
╰❒

╭─❒ 「 *GROUP MENU* 」 
│
│○ antiwame  [on/off]
│○ antiwame2  [on/off]
│○ antilink  [on/off]
│○ antilink2  [on/off]
│○ welcome  [on/off]
│○ goodbye  [on/off]
│○ open
│○ close
│○ !hidetag  
│○ kick          
│
╰❒

「 *OWNER MENU* 」 
│
│○ stiker
│
╰❒

╭─❒ 「 *CEK ID MENU* 」 
│
│○ cekidff
│○ cekidml
│
╰❒
\`\`\`

🗿 YANG MAU SEWA JUGA SILAHKAN 
CHAT NOMOR INI 6283110933360
`
}