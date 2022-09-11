const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['212661809542']
global.premium = ['212661809542']
global.ownernomer = '212661809542'
global.ownername = 'ШHłТΞ HΛϾКΞЯS'
global.botname = '[ℒỒ9ᗰ𝐀ŊΞ 𝛃𝚯𝚪🤘]'
global.footer = '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷'
global.ig = 'https://github.com/KING-BOT-OFFICIAL'
global.region = 'Sri Lanka'
global.sc = 'https://github.com/KING-BOT-OFFICIAL/KING-BOT-MD'
global.myweb = 'https://youtube.com/channel/UCqoUjPvDdb0kjXNYdvPPpHQ'
global.packname = '[https://instagram.com/pr_fh_1?igshid=1nji9utqlm4nnK𝚰𝚴Ｇ 𝛃𝚯𝚪🤘]'
global.author = 'ШHłТΞ HΛϾКΞЯS'
global.sessionName = 'session'
global.prefa = ['','!','.','🇲🇦','⚙️','🤘']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'هاد لميزة ديال اصاط هيࢪ ديال ادمين😻!',
    botAdmin: 'لبوت هير ديال ادمين ازبي😻!',
    owner: 'هادي نقدࢪ نديࢪها هيࢪ انا ماشي نتا هه!',
    group: 'هادي ديࢪها فالڪࢪوبات ماشي هنا هه!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'تسنا دقيقة...',
    error: 'خطأ وقلة دࢪتي شي قلوة ماشي هي هاديك🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
