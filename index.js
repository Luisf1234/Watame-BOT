//WATAME-BOT

const {
WAConnection,
MessageType,
Presence, 
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
ChatModification,
waChatKey,
WA_DEFAULT_EPHEMERAL,
mentionedJid,
processTime
} = require('@adiwajshing/baileys')
const fs = require('fs')
const axios = require("axios")
const speed = require('performance-now')
const request = require('request')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const loli = new lolis()
const chalk = require('chalk');
const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { addMetadata } = require('./lib/exif.js')
const Exif = require('./exif.js')
const exif = new Exif()
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const trava = JSON.parse(fs.readFileSync('./src/trava.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const { nsfwmenu } = require('./src/nsfwmenu')
const { idiomas } = require('./src/idiomas')
const { isFiltered, addFilter } = require('./lib/antispam')
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const user2 = JSON.parse(fs.readFileSync('./database/json/user2.json'))
const ban = JSON.parse(fs.readFileSync('./database/json/banned.json'))
const { ind } = require('./language')
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const {
	limitawal,
	memberlimit,
	cr,
	BotPrefix,
	author,
	pack
} = settingan

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

ConfuMods = [`51931655706@s.whatsapp.net`] 
prefix = '#'
hardi = 'hardianto'
blocked = []
fake = '🌸Watame-BOT🌸'
fakeimage = fs.readFileSync(`./media/confu.jpeg`)
numbernye = '10'
public = true
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:🔰Manuel🔰\n' 
            + 'ORG:🌸Watame-BOT🌸;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=51931655706:+51931655706\n' 
            + 'END:VCARD' 

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]


const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')


const {
	getRegisteredRandomId,
	addRegisteredUser,    
	createSerial,
	checkRegisteredUser,
    bannadd,
    checkban
    
} = require('./lib/register.js')

               const addRegisteredUser2 = (userid, sender) => {
            const obj = { id: userid, name: sender }
            user2.push(sender)		
            fs.writeFileSync('./database/json/user2.json', JSON.stringify(_registered))
        } 			           
/*[-> ATM & Limit <-]*/
const {
	addATM,
	addKoinUser,
	checkATMuser,
	bayarLimit,
	confirmATM,
	addwaifu,
	limitAdd
} = require('./lib/limitatm.js')
const BarBarKey = 'IDxO1TFYnKADlX4pxcHa'
const VhtearKey = '1BlnApiIkyPake'
const XteamKey = 'd39b4b3fc7dba'
const TobzApi = 'Bidmzz1sJ2L1TKyqaMEU'
const ZeksApi = '🌸Watame-BOT🌸'
const LolKey = 'save123'
lolkey = 'Asyapikeycanz'
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos`
}
function tanggal(){
myMonths = ["Enero","Febrero","marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Deciembre"];
			myDays = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}
async function starts() {
	const cnf = new WAConnection()
	cnf.version = [2, 2143, 3]
	cnf.logger.level = 'warn'
	console.log(banner.string)
	cnf.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea el Qr'))
	})

	fs.existsSync('./cnf.json') && cnf.loadAuthInfo('./cnf.json')
	cnf.on('connecting', () => {
		start('2', 'Cargando UwU')
	})
	cnf.on('open', () => {
		success('2', 'Listo 7u7')
	})
	await cnf.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./cnf.json', JSON.stringify(cnf.base64EncodedAuthInfo(), null, '\t'))
cnf.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        cnf.sendMessage(callerId, "Sistema de bloqueo automático, nada de llamadas! (・–・;)ゞ", MessageType.text)
        await sleep(4000)
        await cnf.blockUser(callerId, "add") 
})
	cnf.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
cnf.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await cnf.groupMetadata(anu.jid)
		
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await cnf.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/Rgn07Kt/20210702-082122.jpg'
				}
				teks = `❤️¡Bienvenid@ al grupo!❤️

══════════ ◖◍◗
     
Hola! •🌸• @${num.split('@')[0]}

══════════ ◖◍◗


Es grato para nosotros darte la bienvenida y agradecerte por preferir ser parte de esta comunidad, puedes comunicar de cualquier duda a los administradores, disfruta de tu estadía en el grupo 😸❤️



🌸⊳ Por favor, lee las reglas para evitar conflictos 😊

🌸⊳ Entra a la descripción del grupo para informate ✅

🌸⊳Puedes interactuar conmigo tanto por interno como de forma grupal usando *#menu*💠`
				let buff = await getBuffer(ppimg)
				cnf.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})
	

	cnf.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		//if (!mek.key.fromMe) return
		global.prefix
			global.blocked
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message 
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey 
			const { text, extendedText, contact, caption, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
      const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
      const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
        
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
				const command = body.trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
			
			

			mess = {
				wait: 'En corto te doy tu pedido, espera',
				nsfwoff: 'LA FUNCION NSFW NO ESTÁ ACTIVA! 🚫',
				success: '¡Listo!',
				wrongFormat: 'Escribe Bien 🙂',
				waitmusic: 'Espera, Estoy buscando tu música!',
				waitimg: 'Espera, lo ago lo mas rapido que puedo',
				banned: 'Lo siento, ya no puedes utilizarme por ordenes de mi creador',
				musica: 'Espera un momento, estoy buscando tu musica',
			imageoff: 'No tengo permitido enviar fotos',
				error: {
					stick: 'Error',
				errostick: 'Error',
				Iv: 'Tu enlace no funciona al parecer'
				},
				only: {
					group: 'ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS',
					ownerG: 'Este Comando Solo Puede Ser Usado Por El Dueño Del Grupo',
					ownerB: 'Este comando solo lo puede utilizar mi creador, tu no (・–・;)ゞ',
					admin: 'No eres admin 😸',
					Badmin: 'Necesito ser admin para poder usar estos comandos 😕'
				}
			}
			const botNumber = cnf.user.jid			
			const isGroup = from.endsWith('@g.us')
			const tescuk = ["0@s.whatsapp.net"]
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await cnf.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
            const isAntilink = isGroup ? antilink.includes(from) : false
            const senderme = mek.participant
			const itsMe = sender == botNumber ? true : false
			const isWelkom = isGroup ? welkom.includes(from) : false
		    const isUser2 = user2.includes(sender)
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isTrava = isGroup ? trava.includes(from) : false
				    const senderNumber = sender.split("@")[0]
const groupDesc = isGroup ? groupMetadata.desc : ''
			const totalchat = await cnf.chats.all()			
	 	const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            			const isBanned = ban.includes(sender)
            const isLevelingOn = isGroup ? _leveling.includes(from) : false						
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ConfuMods.includes(sender)
			const button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
			const isMe = botNumber.includes(senderme)
			let pushname = cnf.contacts[sender] != undefined ? cnf.contacts[sender].vname || cnf.contacts[sender].notify: undefined
			const q = args.join(' ')
			let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				cnf.sendMessage(from, teks, text, {quoted: mek})
			}
			const sendMess = (hehe, teks) => {
				cnf.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? cnf.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : cnf.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
					    const costum = (pesan, tipe, target, target2) => {
			cnf.sendMessage(from, pesan, tipe, { contextInfo: { forwardingScore: 400, isForwarded: true } , quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) },message: { conversation: `${target2}` }}})
			}
			const costumimg = ( pesan , tipe, target , caption) => {
			cnf.sendMessage(from, pesan , tipe , {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: {"imageMessage":{url: 'https://mmg.whatsapp.net/d/f/Ahj0ACnTjSHHm6-HjqAUBYiCu2-85zMZp_-EhiXlsd6A.enc',mimetype: 'image/jpeg',caption: `${caption}`,fileSha256: '0Pk0qJyQFn9FCtslZrydJHRQDKryjYcdP7I3CmRrHRs=',fileLength: '20696',height: 360,width: 382,mediaKey: 'N43d/3GY7GYQpgBymb9qFY5O9iNDXuBirXsNZk+X61I=',fileEncSha256: 'IdFM58vy8URV+IUmOqAY3OZsvCN6Px8gaJlRCElqhd4=',directPath: '/v/t62.7118-24/35174026_475909656741093_8174708112574209693_n.enc?oh=2a690b130cf8f912a9ca35f366558743&oe=6061F0C6',mediaKeyTimestamp: '1614240917',jpegThumbnail: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMASAMBIgACEQEDEQH/xAAwAAADAAMBAAAAAAAAAAAAAAAABAUBAwYCAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAoy6kcWS2eH8miq17B553Thh1BgyTY9iULYfndGBmbSwNEV3eWXpjwZElG09WJckXCj8sWBVc1ZKXj2ZYaoWHnc67K3PbKwtZOqzLrzdQAg5fWFRUeCNTQG2pEKJ0wCD/xAAoEAACAgIBAQkAAwEAAAAAAAABAgADBBEScQUQEyEiMTJBYSNRYmP/2gAIAQEAAT8AaZzfEdwWcGMTE1jNv3M1ozDb+SD2jTO+Yigk6A3KqhseIdfkroTYbXQRrkVuJOplKEuOpjtpxF+IjTO+YnZoBvj4pa/msHtMnHZrgymZ6hCnSJsDl+ys7rTpGmevxMwLFS/1fcA7iNzPsDXaH1NccYH+2lJ1SnSNMlOdcbY6iYGa9g4OJzXW9zI7SBJrpjqxsA9zMkcMetf2V7NKD/McgAkxsis7EcA2fkxkqSkaYbMGRu3hr0x6q6ckufaUMpsexj0ma4Y0qDKhqlektyntXiQO4qWI0PONVZWNsNTmZwewekEwo1fpYaMZdvWf2DYrXoO/ARWLNL6VuXiYcSsuK9eXGYtHhM/nsTPVQgb7iDkydRCNBYYx1Ozj6nmSStRIgJ8UH/nMJiTZs/c7RPwExhu+vrH+p//EAB4RAAIBBAMBAAAAAAAAAAAAAAABAhAREjIhMDFC/9oACAECAQE/AOpJsxEqIj4TfNqXygIWpLc+ZEdBH//EAB4RAAICAgIDAAAAAAAAAAAAAAABAjEQETJBAxJx/9oACAEDAQE/AHWVeHQtYrDaNkno7GOzxP10xzWipDHZHidx+EuQz//Z',scansSidecar: 'choizTOCOFXo21QcOR/IlCehTFztHGnB3xo4F4d/kwmxSJJIbMmvxg==',scanLengths: [Array],midQualityFileSha256: '68OHK4IyhiKDNgNAZ3SoXsngzYENebQkV4b/RwhhYIY=',midQualityFileEncSha256: '2EYOLCXx+aqg9RyP6xJYChQNbEjXZmc0EcSwHzoyXx0='}}}})
			}

 		idttt = []
	    players1 = []
	    players11 = []
	    players2 = []
	    gilir = []
	    gilirr = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players11.push(t.player11)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    gilirr.push(t.gilirr)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
isPlayer11 = isGroup ? players11.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		      
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    if(mime === "document/pdf"){
                        type = MessageType.document
                        mime = Mimetype.pdf
                    }
                    cnf.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
         
          /*[-- function check limit --]*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return cnf.sendMessage(from,`Su límite de solicitudes ha expirado`, text,{ quoted: mek})
                            cnf.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        cnf.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				} 
		
			/*[-- limit end --]*/
            const isLimit = (sender) =>{ 
          	if (isOwner ) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    cnf.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}
     	   
     	   /*[-- auto out form gc if member under limit --]*/
 	       if (isGroup) {
				try {
					const getmemex = groupMembers.length	
				    if (getmemex <= memberlimit) {
					reply(`Lo siento, los miembros del grupo no han cumplido con los requisitos. Miembros mínimos: ${memberlimit}`)					
 	                           cnf.groupLeave(from) 			  
							cnf.updatePresence(from, Presence.composing)						
				    }
		       } catch (err) { console.error(err)  }
 	       }

const fakethumb = (teks, yes) => {
            cnf.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./sticker/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakestatus = (teks) => {
            cnf.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./sticker/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    },
                    contextInfo: {
                      "forwardingScore": 999, "isForwarded": true
                    }
                }
            })
        }
        const faketokoforwaded = (teks) => {
	anu = {
	  key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./sticker/thumb.jpeg`)
					},
					"title": `Hola ${pushname}, ${ucapanWaktu}`,
					"retailerId": "Confu bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	cnf.sendMessage(from, teks, text, {
	  quoted: anu,
	  contextInfo:{
	    "forwardingScore": 999, "isForwarded": true
	  }
	})
}

	const fspam = {
		key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
		"contactMessage": {
		"displayName": `${pushname} NO SPAM!!`,
		"vcard": 'BEGIN:VCARD\n' +
    		'Version:3.0\n' +
    		'TEL;type=CELL;type=VOICE;waid=51931655706:+51931655706\n' +
		'item1.X-ABLabel:Celular' +
    		'END:VCARD'
		}
		}
		}

        const fakegroup = (teks) => {
            cnf.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./sticker/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }


const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/cnf.jpeg')}}}
            


const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/cnf.jpeg`)} } }


const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/cnf.jpeg`)
					},
					"title": fake,
					"description": "🌸Watame-BOT🌸",
					"currencyCode": "USD",
					"priceAmount1000": "1000000000",
					"retailerId": "Confu",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const uploadImages = (buffData, type) => {
    
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}

        const isImage = type == 'imageMessage'
        const isVideo = type == 'videoMessage'
        const isAudio = type == 'audioMessage'
        const isSticker = type == 'stickerMessage'
        const isContact = type == 'contactMessage'
        const isLocation = type == 'locationMessage'
        
	const isTexto = type == 'textMessage'
        
        typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = "Image"
        else if (isVideo) typeMessage = "Video"
        else if (isAudio) typeMessage = "Audio"
        else if (isSticker) typeMessage = "Sticker"
        else if (isContact) typeMessage = "Contact"
        else if (isLocation) typeMessage = "Location"
	else if (isTexto) typeMessage = "text"

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 



   if (itsMe){
     if(chats.toLowerCase() == `${prefix}self`){
       public = false
       cnf.sendMessage(from, `Success`, `ESTADO : UNO MISMO`)
     }
     if (chats.toLowerCase() == 'status'){
       cnf.sendMessage(from, `STATUS : ${public ? 'PUBLICO' : 'UNO MISMO'}`)
     }
   }
   
  if (!public){
    if (!mek.key.fromMe) return
  }
  

		if (!isGroup && isCmd) console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(pushname))
        	if (isGroup && isCmd) console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(pushname), chalk.greenBright("en el grupo"), chalk.keyword("yellow")(groupName))
	
	    	if (isBanned && isCmd && !isOwner) {
		reply('*¡Has tenido demasiadas interacciones por hoy!*')
        	return console.log(chalk.greenBright("├"), chalk.keyword("magenta")("[ USUARIO BANEADO ]"), chalk.whiteBright(`${command}`), chalk.greenBright("de"), chalk.keyword("yellow")(pushname))
        	}
	
		if (isCmd && isFiltered(from) && !isGroup) {
        	console.log(chalk.greenBright("├"), chalk.keyword("red")("[ SPAM ]"), chalk.whiteBright(`${command}`), chalk.greenBright("de"), chalk.keyword("yellow")(senderNumber))
        	return cnf.sendMessage(from, `🙂 Porfavor ${pushname}...\n\nMás lento, espera 5 segundos para poder usar otros comandos.`, MessageType.text, {quoted: fspam})
		}
        
        	if (isCmd && isFiltered(from) && isGroup) {
        	console.log(chalk.greenBright("├"), chalk.keyword("red")("[ SPAM ]"), chalk.whiteBright(`${command}`), chalk.greenBright("de"), chalk.keyword("yellow")(senderNumber))
        	return cnf.sendMessage(from, `Por favor ${pushname}, espera 5 segundos para poder usar otros comandos, gracias.`, MessageType.text, {quoted: fspam})
		}
	   
	   
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
               
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})
			}
 
			switch(command) {
			
							case prefix+'registrar':
							if (isBanned) return  reply(mess.banned)
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('La edad debe ser un número!!')
                if (namaUser.length >= 30) return reply(`¿Por qué tu nombre es tan largo?`)
                if (umurUser > 40) return reply(`Tu edad es demasiado mayor, máximo 40 años`)
                if (umurUser < 12) return reply(`Eres demasiado joven, mínimo 12 años`)
                try {
					ppimg = await cnf.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
					daftarimg = await getBuffer(ppimg)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await cnf.sendMessage(from, daftarimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await cnf.sendMessage(from, daftarimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
				addFilter(from)
          break
			
case prefix+'tictactoe':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (args.length < 1) return reply('Etiqueta a tu oponente ⚔️')
if (isTTT) return reply('Hay un juego en este grupo, espere')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta al objetivo del oponente')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
gilir = player2
id = from
ky_ttt.push({player1,player2,id,angka,gilir})
cnf.sendMessage(from, `*🎳 Iniciar un juego de Tictactoe 🎲*
[@${player2.split('@')[0]}] Te desafían a convertirte en un oponente del juego🔥
Escribe Y/N para aceptar o rechazar el juego.
Escriba ${prefix}delttt, para reiniciar los juegos grupales.`, text, {contextInfo: {mentionedJid: [player2]}})
addFilter(from)
break

case prefix+'delltictactoe':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isTTT) return reply('No hay juegos en este grupo')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Listo UwU')
addFilter(from)
break			

case prefix+'menu':
if (isBanned) return  reply(mess.banned)
const watigm =['confu.jpeg','cnf.jpeg','Watame01.jpg','Watame02.jpg','Watame03.jpg','Watame04.jpg','Watame06.jpg','Watame07.jpg','Watame08.jpg','Watame09.jpg','Watame10.jpg']
const igmm = watigm[Math.floor(Math.random() * watigm.length)]
wew = fs.readFileSync(`./media/${igmm}`)
const sosGay = checkATMuser(sender)   
lzain = ` ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╭✦┅╡ MENU PRINCIPAL ╞┅✦╮*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣NUEVO*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}nh*
*╟*๛ _Adjunta el código de manga_
*╟ ❒ ${prefix}phub*
*╟*๛ _Simula un comentario en PH_
*╟ ❒ ${prefix}darling*
*╟*๛ _NSFW +18_
*╟ ❒ ${prefix}inst*
*╟*๛ _Videos y reels de Instagram_
*╟ ❒ ${prefix}tiktok*
*╟*๛ _Descarga videos sin marca de agua_
*╟ ❒ ${prefix}twitter (video)*
*╟*๛ _Descarga con el enlace de Twitter_
*╟ ❒ ${prefix}wpanime*
*╟*๛ _Actualizado y mejorado_
*╟ ❒ ${prefix}spoti*
*╟*๛ _Coloca el enlace a la canción_
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣PRINCIPAL*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}ayuda*
*╟*๛ _Comenta tus dudas al creador_
*╟ ❒ ${prefix}tts*
*╟*๛ _Envía un mensaje de voz_
*╟ ❒ ${prefix}attp*
*╟*๛ _Crea un sticker con el texto_
*╟ ❒ ${prefix}sticker*
*╟*๛ _Imagen, gif o video (máximo 6s)_
*╟ ❒ ${prefix}meme*
*╟ ❒ ${prefix}idiomas (tts)*
*╟*๛ _Lenguaje del mensaje de voz_
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣DESCARGAS*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}nh*
*╟*๛ _Adjunta el código de manga_
*╟ ❒ ${prefix}spoti*
*╟*๛ _Descarga música de spotify_
*╟ ❒ ${prefix}gimage*
*╟*๛ _Busca en imágenes de google_
*╟ ❒ ${prefix}inst*
*╟*๛ _Videos y reels de Instagram_
*╟ ❒ ${prefix}tiktok*
*╟*๛ _Descarga videos sin marca de agua_
*╟ ❒ ${prefix}telesticker*
*╟*๛ _Descarga los stickers de Telegram_
*╟ ❒ ${prefix}play (audio)*
*╟ ❒ ${prefix}play2 (video)*
*╟*๛ _Descargas con el enlace de Youtube_
*╟ ❒ ${prefix}twitter (video)*
*╟*๛ _Descargas con el enlace de Twitter_
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣OTAKU*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟*๛ _Solicita imágenes_
*╟ ❒ ${prefix}loli*
*╟ ❒ ${prefix}kiss*
*╟ ❒ ${prefix}yaoi*
*╟ ❒ ${prefix}feed*
*╟ ❒ ${prefix}poke*
*╟ ❒ ${prefix}neko*
*╟ ❒ ${prefix}waifu*
*╟ ❒ ${prefix}invitar*
*╟ ❒ ${prefix}avatar*
*╟ ❒ ${prefix}kanna*
*╟ ❒ ${prefix}anime*
*╟ ❒ ${prefix}patpat*
*╟ ❒ ${prefix}abrazo*
*╟ ❒ ${prefix}nekogif*
*╟ ❒ ${prefix}wpanime*
*╟ ❒ ${prefix}abofetear*
*╟ ❒ ${prefix}wallpaper*
*╟ ❒ ${prefix}cosquillas*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣REACCIONES*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟*๛ _Etiqueta a alguien para..._
*╟ ❒ ${prefix}besar @*
*╟ ❒ ${prefix}patear @*
*╟ ❒ ${prefix}abrazar @*
*╟ ❒ ${prefix}palmaditas @*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣ADMINS*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟*๛ _1: Activar_
*╟*๛ _0: Desactivar_
*╟ ❒ ${prefix}info*
*╟*๛ _Información de Watame_
*╟ ❒ ${prefix}ping*
*╟*๛ _Tiempo de actividad y respuesta_
*╟ ❒ ${prefix}notif*
*╟*๛ _Notifica a todos los miembros_
*╟ ❒ ${prefix}todos*
*╟*๛ _Menciona a todos los miembros_
*╟ ❒ ${prefix}kick @*
*╟*๛ _Expulsión del grupo_
*╟ ❒ ${prefix}chatlist*
*╟*๛ _Lista de chats de Watame_
*╟ ❒ ${prefix}getbio @*
*╟*๛ _Biografía del usuario_
*╟ ❒ ${prefix}linkgroup*
*╟*๛ _Enlace del grupo_
*╟ ❒ ${prefix}listadmin*
*╟*๛ _Lista de administradores_
*╟ ❒ ${prefix}promover @*
*╟*๛ _Convierte en administrador_
*╟ ❒ ${prefix}degradar @*
*╟*๛ _Elimina como administrador_
*╟ ❒ ${prefix}listonline*
*╟*๛ _Menciona a todos en linea_
*╟ ❒ ${prefix}antilink [1/0]*
*╟*๛ _Expulsa a quienes envíen enlaces_
*╟ ❒ ${prefix}welcome [1/0]*
*╟*๛ _Bienvenida a nuevos miembros_
*╟ ❒ ${prefix}grupo [abrir/cerrar]*
*╟*๛ _Abre o cierra el grupo_
*╟ ❒ ${prefix}status*
*╟*๛ _Estado de las solicitudes_
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣NSFW*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟*๛ _Lista de comandos +18_
*╟ ❒ ${prefix}nsfwmenu*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣GAMES*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟*๛ _Preuba suerte al jugar_
*╟ ❒ ${prefix}gay*
*╟ ❒ ${prefix}reto*
*╟ ❒ ${prefix}lesbi*
*╟ ❒ ${prefix}juego*
*╟ ❒ ${prefix}charlie*
*╟ ❒ ${prefix}verdad*
*╟ ❒ ${prefix}rankfeo*
*╟ ❒ ${prefix}tictactoe*
*╟ ❒ ${prefix}rankgay*
*╟ ❒ ${prefix}ranklindo*
*╟ ❒ ${prefix}ranksexy*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣CREADOR*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟*๛ _Imágen con el texto escrito_
*╟*๛ _(Usa solo letras sin tildes)_
*╟ ❒ ${prefix}ice*
*╟ ❒ ${prefix}box*
*╟ ❒ ${prefix}phub*
*╟ ❒ ${prefix}love*
*╟ ❒ ${prefix}toxic*
*╟ ❒ ${prefix}love2*
*╟ ❒ ${prefix}blood*
*╟ ❒ ${prefix}luxury*
*╟ ❒ ${prefix}bokeh*
*╟ ❒ ${prefix}blood2*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣OTROS*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}getpic @*
*╟*๛ _Obtén el perfil de la persona_
*╟ ❒ ${prefix}perfil*
*╟*๛ _Estado de cuenta_
*╟ ❒ ${prefix}wame*
*╟*๛ _Tu enlace directo de Whatsapp_
*╟ ❒ ${prefix}frases*
*╟ ❒ ${prefix}piropos*
*╟ ❒ ${prefix}toimg*
*╟*๛ _Convierte un sticker en imágen_
*╟ ❒ ${prefix}tomp3*
*╟*๛ _Convierte un video en audio_
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠ೋ━ೋ✧ೋ━ೋ┓*
*║        🌸Watame🌸*
*┗ೋ━ೋ✧ೋ━ೋ┛*
*║*
*┠━➣NOTA:*
_Si alguna función no responde espera algunas horas hasta que se reestablesca o ponte encontacto con el creador._`
cnf.sendMessage(from, wew, image,{contextInfo: {forwardingScore : 0, isForwarded: false},sendEphemeral: false, caption:lzain})
addFilter(from)
break

case prefix+'spoti':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (args.length < 1) return reply('Adjunta el enlace de la canción😾')
stify = args.join(" ")
spot = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=c9b3628121d4a8adfbff2e11&url=${stify}`)
infospoti = `❒═════❬ *SPOTIFY* ❭═════╾❒
├‣ *Título* : 
┴
${spot.result.title}
┬
├‣ *Artista* : 
┴
${spot.result.artists}
┬
├‣ *Duración* : 
┴
${spot.result.duration} Segundos
┬
❒═════════════════╾❒`
buffer = await getBuffer(spot.result.thumbnail)
dspoti = await getBuffer(spot.result.link)
cnf.sendMessage(from, buffer, image, {quoted: freply, caption: infospoti })
cnf.sendMessage(from, dspoti, audio, {mimetype: 'audio/mp4', filename: `${spot.result.title}.mp3`})
addFilter(from)
break

case prefix+'nh':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (args.length < 1) return reply('Adjunta el código 😾')   
nhbus = args.join(" ")
nhent = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${nhbus}?apikey=c9b3628121d4a8adfbff2e11`)
buffer = await getBuffer(nhent.result)
cnf.sendMessage(from, buffer, document, { mimetype: 'document/pdf', filename: `NHentai${nhbus}.pdf` })
addFilter(from)
break

case prefix+'gimage':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (args.length < 1) return reply('Coloca una palabra para la búsqueda 🤦‍♂️')
gima = args.join(" ")
mage = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=c9b3628121d4a8adfbff2e11&query=${gima}, {method: 'get'}`)
const googlei =['Aquí tienes 💕🦈','Pedido entregado 🕊']
const gimag = googlei[Math.floor(Math.random() * googlei.length)]
cnf.sendMessage(from, mage, image, { caption: gimag, quoted: mek })
addFilter(from)
break

case prefix+'telesticker':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (args.length < 1) return reply('Adjunta el enlace 😾')   
teles = args.join(" ")
teleg = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=c9b3628121d4a8adfbff2e11&url=${teles}`)
dteles = teleg.result.sticker
for (sticker_ in dteles) {buffer = await getBuffer(dteles[sticker_])
await cnf.sendMessage(from, buffer, sticker)}
addFilter(from)
break

case prefix+'start':
if (isBanned) return  reply(mess.banned)
if (!isOwner) return reply(mess.only.ownerB)
reply(`*╭═┅╡🌸WATAME🌸╞┅═╮*\n*╟ ╳*\n*╟ ❒ Iniciando...!*\n*╟ ❒ Usa #menu para ver*\n        *el menú de opciones!*\n*╟ ╳*\n*┠ೋ━ೋ✧ೋ━ೋ┓*\n*║        ✨EN LINEA✨*\n*┗ೋ━ೋ✧ೋ━ೋ┛*`)
addFilter(from)
break

case prefix+'ban':
if (!isOwner) return reply(mess.only.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Por favor etiqueta!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) return reply('etiqueta')
const Bb = [`${body.slice(6)}`]
ban.push(`${Bb}@s.whatsapp.net`)		
fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
reply(`El numero ${body.slice(4)} ah sido baneado ya no podra utilizarme`)
addFilter(from)
break

case prefix+ 'ranklindo':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
tuh = fs.readFileSync(`./stik/lindo.jpg`)
jds = []
const YDDY = groupMembers
const JSJ = groupMembers
const TAAT = groupMembers
const SG = YDDY[Math.floor(Math.random() * YDDY.length)]
const SOOD = JSJ[Math.floor(Math.random() * JSJ.length)]
const HDH = TAAT[Math.floor(Math.random() * TAAT.length)]
AJ = `●❯────────────────❮●\nTop de los más lindos del grupo \n@${SG.jid.split('@')[0]} \n😳\n@${SOOD.jid.split('@')[0]}\n😘\n@${HDH.jid.split('@')[0]}\n●❯────────────────❮●`                  
jds.push(SG.jid)
jds.push(SOOD.jid)
jds.push(HDH.jid)
cnf.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${AJ}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
addFilter(from)
break

case prefix+ 'rankgay':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
tuh = fs.readFileSync(`./stik/gay.jpg`)
jds = []
const Z11 = groupMembers
const U11 = groupMembers
const T11 = groupMembers
const F11 = Z11[Math.floor(Math.random() * Z11.length)]
const G22 = U11[Math.floor(Math.random() * U11.length)]
const H33 = T11[Math.floor(Math.random() * T11.length)]
D11 = `●❯────────────────❮●\nTop de los más gays del grupo 🌈\n@${F11.jid.split('@')[0]} \n🏳️‍🌈\n@${G22.jid.split('@')[0]}\n🏳️‍🌈\n@${H33.jid.split('@')[0]}\n●❯────────────────❮●`                  
jds.push(F11.jid)
jds.push(G22.jid)
jds.push(H33.jid)
cnf.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${D11}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}})
addFilter(from)
break

case prefix+ 'rankfeo':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
tuh = fs.readFileSync(`./stik/lindo.jpg`)
const YDDDY = groupMembers
const JJSJ = groupMembers
const TAAET = groupMembers
const SSG = YDDDY[Math.floor(Math.random() * YDDDY.length)]           
const SSOOD = JJSJ[Math.floor(Math.random() * JJSJ.length)]
const HDDDH = TAAET[Math.floor(Math.random() * TAAET.length)]
jds = []
AJ = `●❯────────────────❮●\nTop de los mas feos del grupo\n@${SSG.jid.split('@')[0]} \n🥸\n@${SSOOD.jid.split('@')[0]}\n🤓\n@${HDDDH.jid.split('@')[0]}\n●❯────────────────❮●`                  
jds.push(SSG.jid)
jds.push(SSOOD.jid)
jds.push(HDDDH.jid)
cnf.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${AJ}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}})
addFilter(from)
break

case prefix+ 'ranksexy':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
tuh = fs.readFileSync(`./stik/lindo.jpg`)
const Z111 = groupMembers
const U111 = groupMembers
const T111 = groupMembers
const F111 = Z111[Math.floor(Math.random() * Z111.length)]  
const G222 = U111[Math.floor(Math.random() * U111.length)]
const H333 = T111[Math.floor(Math.random() * T111.length)]          
jds = []
D11 = `●❯────────────────❮●\nTop de los mas sexis del grupo\n@${F111.jid.split('@')[0]} \n💃\n@${G222.jid.split('@')[0]}\n🕺\n@${H333.jid.split('@')[0]}\n●❯────────────────❮●`                  
jds.push(F111.jid)
jds.push(G222.jid)
jds.push(H333.jid)
cnf.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${D11}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}})
addFilter(from)
break

'Para volver a activar los comandos NSFW solo para admins utiliza: (if (!isNsfw) return reply(mess.nsfwoff))'

case prefix+'nsfwmenu':
if (isBanned) return  reply(mess.banned)
cnf.sendMessage(from, nsfwmenu(prefix, sender), text, {quoted: freply})
addFilter(from)
break

case prefix+'idiomas':
if (isBanned) return  reply(mess.banned)
cnf.sendMessage(from, idiomas(prefix, sender), text, {quoted: mek})
addFilter(from)
break

case prefix+'avatar':
if (isBanned) return  reply(mess.banned)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
anu = await axios.get('https://nekos.life/api/v2/img/avatar')
avatars = await getBuffer(anu.data.url)
cnf.sendMessage(from, avatars, image, {quoted: mek, caption: 'Linda foto no?' })
addFilter(from)
break
			    
case prefix+'antilink':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Escribe 1 para activar')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('Ya está activo')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Activado correctamente✔️')
cnf.sendMessage(from,`*🚫Antilink ha sido ativado, si envían enlaces serán eliminados del grupo🚫*`, text)
} else if (Number(args[0]) === 0) {
if (!isAntiLink) return reply('*Desactivado*')
var ini = antilink.indexOf(from)
antilink.splice(ini, 1)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
reply('Desactivado correctamente ✔️')
} else {
reply('Escribe 1 para activar o 0 para desactivar')
}
addFilter(from)
break

case prefix+'anime':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
const nime =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊'];
const anim = nime[Math.floor(Math.random() * nime.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
cnf.sendMessage(from,media,image, { caption: anim, quoted: mek })
}
)
.catch((error) => {
console.log(error); 
}
)
});
addFilter(from)
break

case prefix+'pussy':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/pussy')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('error')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break

case prefix+'abrazo':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/cuddle')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('error')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break

case prefix+'cosquillas':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/tickle')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('error')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break

case prefix+'abofetear':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/slap')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('error')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break

case prefix+'nekogif':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/ngif')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('error')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break

case prefix+'patpat':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/pat')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('error')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break

case prefix+'bjgif':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/bj')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('error')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break

case prefix+'invitar':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/feed')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('error')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break

case prefix+'feet':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/feetg')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('error')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break

case prefix+'lesbhentai':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/les')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('error')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break

case prefix+'pussyimage':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
pusiimg = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
bufpusy = await getBuffer(pusiimg.data.url)
cnf.sendMessage(from, bufpusy, MessageType.image, {quoted: mek})
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break

case prefix+'solo':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/solog')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('Perdón, tuvimos un error 🙁')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break

case prefix+'kuni':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/kuni')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('Perdón, tuvimos un error 🙁')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break

case prefix+'classic':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/classic')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('Perdón, tuvimos un error 🙁')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break

case prefix+'hentaigif':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/Random_hentai_gif')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('Perdón, tuvimos un error 🙁')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break
					
case prefix+'yuri':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
yuriz = await axios.get('https://nekos.life/api/v2/img/yuri')
bupyuri = await getBuffer(yuriz.data.url)
const yurix =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const bpyuri = yurix[Math.floor(Math.random() * yurix.length)]
cnf.sendMessage(from, bupyuri, image, { caption: bpyuri, quoted: mek })
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break

case prefix+'femdom':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
fem = await axios.get('https://nekos.life/api/v2/img/femdom')
bpfem = await getBuffer(fem.data.url)
const femx =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const femdom = femx[Math.floor(Math.random() * femx.length)]
cnf.sendMessage(from, bpfem, image, { caption: femdom, quoted: mek })
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break

case prefix+'eroyuri':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
yurixz = await axios.get('https://nekos.life/api/v2/img/eroyuri')
yurixzx = await getBuffer(yurixz.data.url)
const eroyurx =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const eroyur = eroyurx[Math.floor(Math.random() * eroyurx.length)]
cnf.sendMessage(from, yurixzx, image, { caption: eroyur, quoted: mek })
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break

case prefix+'tits':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
tits = await axios.get('https://nekos.life/api/v2/img/tits')
botits = await getBuffer(tits.data.url)
const yurit =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const bptits = yurit[Math.floor(Math.random() * yurit.length)]
cnf.sendMessage(from, botits, image, { caption: bptits, quoted: mek })
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break

case prefix+'neko':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
nekoo = await axios.get('https://nekos.life/api/v2/img/neko')
nekko = await getBuffer(nekoo.data.url)
const nneko =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const nnko = nneko[Math.floor(Math.random() * nneko.length)]
cnf.sendMessage(from, nekko, image, { caption: nnko, quoted: mek })
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break

case prefix+'futanari':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
futa1 = await axios.get('https://nekos.life/api/v2/img/futanari')
futa2 = await getBuffer(futa1.data.url)
cnf.sendMessage(from, futa2, image, { quoted: mek, caption: 'Aquí tienes 💕🦈'})
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break

case prefix+'oppai':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/boobs')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('E-error ⊙﹏⊙')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break

case prefix+'kiss':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/kiss')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('E-error ⊙﹏⊙')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break
					
case prefix+'anal':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/anal')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('E-error ⊙﹏⊙')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break
					
case prefix+'pwankg':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/pwankg')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('E-error ⊙﹏⊙')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break
					
case prefix+'ero':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
eronz = await axios.get('https://nekos.life/api/v2/img/eron')
buferon = await getBuffer(eronz.data.url)
const deci =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const fr = deci[Math.floor(Math.random() * deci.length)]
cnf.sendMessage(from, buferon, image, { caption: fr, quoted: mek })
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break

case prefix+'cumimage':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
cumz = await axios.get('https://nekos.life/api/v2/img/cum_jpg')
bufcum = await getBuffer(cumz.data.url)
const cumj =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const fccr = cumj[Math.floor(Math.random() * cumj.length)]
cnf.sendMessage(from, bufcum, image, { caption: fccr, quoted: mek })
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break

case prefix+'erokemo':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
eronk = await axios.get('https://nekos.life/api/v2/img/erokemo')
buferok = await getBuffer(eronk.data.url)
const decix =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const frx = decix[Math.floor(Math.random() * decix.length)]
cnf.sendMessage(from, buferok, image, { caption: frx, quoted: mek })
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break
					
case prefix+'cum':
if (isBanned) return  reply(mess.banned)        
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/cum')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=10 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('error')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break
					
case prefix+'antilink':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('Ya estaba activo!')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Se activo con exito ✔️️')
} else if (Number(args[0]) === 0) {
antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Se desactivo con éxito la función de bienvenida en este grupo (・o・)️')
} else {
reply('1 para activar, 0 para desactivar')
}
addFilter(from)
break

case prefix+'toimg':
if (isBanned) return  reply(mess.banned)          
if (!isQuotedSticker) return reply('Responde a un sticker!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await cnf.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Hubo un fallo, por favor intentalo de nuevo ')
buffer = fs.readFileSync(ran)
fakethumb(buffer,'Listo 🙂')
fs.unlinkSync(ran)
})
addFilter(from)
break

case prefix+'getpic':
if (isBanned) return  reply(mess.banned)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
try {
pic = await cnf.getProfilePicture(mentioned[0])
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
cnf.sendMessage(from, thumb, MessageType.image, {quoted: mek, caption: `Listo 🙂`})}
addFilter(from)
break

case prefix+'shutdown':
if (isBanned) return  reply(mess.banned)
if (!isGroupAdmins) return reply(mess.only.admin)
await cnf.sendMessage(from, `Bye...\n_🌸Watame-BOT🌸 apagandose..._`, text,{quoted : freply})
await sleep(3000)
cnf.close()
addFilter(from)
break
				
case prefix+'getbio':
if (isBanned) return  reply(mess.banned)
if (!isGroupAdmins) return reply(mess.only.admin)
var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
var p = await cnf.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("No tiene Biografía /.\ ")
}
addFilter(from)
break
				
case prefix+'attp':
if (isBanned) return  reply(mess.banned)
if (args.length < 1) return reply(`¿Y el texto? Ù.Ú\n*Ejemplo ${prefix}attp Monogatari*`)
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
cnf.sendMessage(from, attp2, sticker, {quoted: freply})
addFilter(from)
break 

case prefix+'sticker':
if (isBanned) return  reply(mess.banned)	
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await cnf.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buff = fs.readFileSync(ran)
cnf.sendMessage(from, buff, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await cnf.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Error`)
})
.on('end', function () {
console.log('Finish')
buff = fs.readFileSync(ran)
cnf.sendMessage(from, buff, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await cnf.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Error')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
buff = fs.readFileSync(ranw)
cnf.sendMessage(from, buff, sticker, {quoted: mek})
})
})
/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await cnf.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.on('start', function (cmd) {
console.log('Started :', cmd)
})
.on('error', function (err) {
fs.unlinkSync(media)
console.log('Error :', err)
})
.on('end', function () {
console.log('Finish')
fs.unlinkSync(media)
buff = fs.readFileSync(ran)
cnf.sendMessage(from, buff, sticker, {quoted: mek})
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)*/
} else {
reply(`Etiqueta una imagen o video (máximo: 6 segundos)👈`)
}
addFilter(from)
addFilter(from)
break

case prefix+'ping':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isGroupAdmins) return reply(mess.only.admin)
uptime = process.uptime()
const timestampi = speed();
const latensip = speed() - timestampi
anjink =`◪ Encendido
├ *Nombre : 🌸Watame-BOT🌸*
├ *Runtime :*
├  ${kyun(uptime)}
├ *Speed :*
├  ${latensip.toFixed(4)} Second
└─────────────`
cnf.sendMessage(from, anjink, text,{quoted : freply})
addFilter(from)
break

case prefix+'ayuda':
if (isBanned) return  reply(mess.banned)
ayudda =`┌─────┤AYUDA├─────
├ *Nombre : 🌸Watame-BOT🌸*
│
├ *Creador : 🔰Manuel🔰*
│
├ *Número: +51931655706*
│
├ *Grupo Oficial :*
├‣ https://chat.whatsapp.com/FP2KKGk4cim8UZ1r7SNbDQ
└────────────────`
cnf.sendMessage(from, ayudda, text,{quoted : freply})
addFilter(from)
break

case prefix+'info':
if (isBanned) return  reply(mess.banned)
me = cnf.user
uptime = process.uptime()
teks = `┌─────┤𝐈𝐍𝐅𝐎├─────
├‣ *Nombre* : 
├‣🌸Watame-BOT🌸
│
├‣ *Número del bot* : 
├‣@${me.jid.split('@')[0]}
│
├‣ *Dueño* : 🔰Manuel🔰 
├‣ *Número* : +51931655706
│
├‣ *Tiempo activo* : 
├‣${kyun(uptime)}
│
├‣ *Total de chats* : 
├‣${totalchat.length}
└─────────────`
weww = fs.readFileSync(`./media/cnf.jpeg`)
cnf.sendMessage(from, weww, image, {
caption: teks, contextInfo: {
mentionedJid: [me.jid]}})
addFilter(from)
break

case  prefix+'nekopoi':          
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('error')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
fs.unlinkSync(rano)
})
addFilter(from)
break
					
case prefix+'poke':
if (isBanned) return  reply(mess.banned)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await axios.get('https://nekos.life/api/v2/img/poke')
exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('E-error ⊙﹏⊙')
buffer = fs.readFileSync(rano)
cnf.sendMessage(from, buffer, MessageType.sticker, { quoted: mek })
fs.unlinkSync(rano)
})
addFilter(from)
break

case prefix+'trap':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
trapss = await axios.get('https://nekos.life/api/v2/img/trap')
traps2 = await getBuffer(trapss.data.url)
cnf.sendMessage(from, traps2, image, { quoted: mek, caption: 'Aquí tienes 💕🦈'})
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break

case prefix+'gay':
if (isBanned) return  reply(mess.banned)
const gay =['Eres 0% gay' , 'Eres 1% gay' , 'Eres 2% gay' , 'Eres 3% gay' , 'Eres 4% gay' , 'Eres 5% gay' , 'Eres 6% gay' , 'Eres 7% gay' , 'Eres 8% gay' , 'Eres 9% gay' , 'Eres 10% gay' , 'Eres 11% gay' , 'Eres 12% gay' , 'Eres 13% gay' , 'Eres 14% gay' , 'Eres 15% gay' , 'Eres 16% gay' , 'Eres 17% gay' , 'Eres 18% gay' , 'Eres 19% gay' , 'Eres 20% gay' , 'Eres 21% gay' , 'Eres 22% gay' , 'Eres 23% gay' , 'Eres 24% gay' , 'Eres 25% gay' , 'Eres 26% gay' , 'Eres 27% gay' , 'Eres 28% gay' , 'Eres 29% gay' , 'Eres 30% gay' , 'Eres 31% gay' , 'Eres 32% gay' , 'Eres 33% gay' , 'Eres 34% gay' , 'Eres 35% gay' , 'Eres 36% gay' , 'Eres 37% gay' , 'Eres 38% gay' , 'Eres 39% gay' , 'Eres 40% gay' , 'Eres 41% gay' , 'Eres 42% gay' , 'Eres 43% gay' , 'Eres 44% gay' , 'Eres 45% gay' , 'Eres 46% gay' , 'Eres 47% gay' , 'Eres 48% gay' , 'Eres 49% gay' , 'Eres 50% gay' , 'Eres 51% gay' , 'Eres 52% gay' , 'Eres 53% gay' , 'Eres 54% gay' , 'Eres 55% gay' , 'Eres 56% gay' , 'Eres 57% gay' , 'Eres 58% gay' , 'Eres 59% gay' , 'Eres 60% gay' , 'Eres 61% gay' , 'Eres 62% gay' , 'Eres 63% gay' , 'Eres 64% gay' , 'Eres 65% gay' , 'Eres 66% gay' , 'Eres 67% gay' , 'Eres 68% gay' , 'Eres 69% gay' , 'Eres 70% gay' , 'Eres 71% gay' , 'Eres 72% gay' , 'Eres 73% gay' , 'Eres 74% gay' , 'Eres 75% gay' , 'Eres 76% gay' , 'Eres 77% gay' , 'Eres 78% gay' , 'Eres 79% gay' , 'Eres 80% gay' , 'Eres 81% gay' , 'Eres 82% gay' , 'Eres 83% gay' , 'Eres 84% gay' , 'Eres 85% gay' , 'Eres 86% gay' , 'Eres 87% gay' , 'Eres 88% gay' , 'Eres 89% gay' , 'Eres 90% gay' , 'Eres 91% gay' , 'Eres 92% gay' , 'Eres 93% gay' , 'Eres 94% gay' , 'Eres 95% gay' , 'Eres 96% gay' , 'Eres 97% gay' , 'Eres 98% gay' , 'Eres 99% gay' , 'Eres 100% gay']									
const gai = gay[Math.floor(Math.random() * gay.length)]
wiw = fs.readFileSync(`./src/8.jpg`)
cnf.sendMessage(from, wiw, image, { quoted: mek, caption: '*¿Que tan gay eres?*\n\n'+ gai })
addFilter(from)
break
					
case prefix+'foxgirl':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
breast2 = await axios.get('https://nekos.life/api/v2/img/fox_girl')
bupboobs = await getBuffer(breast2.data.url)
const foxc =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const wfoxgirl = foxc[Math.floor(Math.random() * foxc.length)]
cnf.sendMessage(from, bupboobs, image, { caption: wfoxgirl, quoted: mek })
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break
					
case prefix+'blowjob':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
breast20 = await axios.get('https://nekos.life/api/v2/img/blowjob')
bupboobs1 = await getBuffer(breast20.data.url)
const bdecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const bfrase = bdecir[Math.floor(Math.random() * bdecir.length)]
cnf.sendMessage(from, bupboobs1, image, { caption: bfrase, quoted: mek })
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break

case prefix+'nekoh':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
neko20 = await axios.get('https://nekos.life/api/v2/img/lewdkemo')
neko1 = await getBuffer(neko20.data.url)
const nedecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const knfrase = nedecir[Math.floor(Math.random() * nedecir.length)]
cnf.sendMessage(from, neko1, image, { caption: knfrase, quoted: mek })
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break

case prefix+'patas':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
buffer = await getBuffer(res.url)
const lklk =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const fkfk = lklk[Math.floor(Math.random() * lklk.length)]
cnf.sendMessage(from, buffer, image, { caption: fkfk, quoted: mek })
addFilter(from)
break

case prefix+'thighs':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animethighss`, {method: 'get'})
buffer = await getBuffer(res.url)
const lll =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const frse = lll[Math.floor(Math.random() * lll.length)]
cnf.sendMessage(from, buffer, image, { caption: frse, quoted: mek })					
addFilter(from)
break

case prefix+'linkgroup':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await cnf.groupInviteCode (from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink del grupo : *${groupName}*`
cnf.sendMessage(from, yeh, text, {quoted: freply})
addFilter(from)
break
			       
case prefix+'grupo':
if (isBanned) return  reply(mess.banned)		  
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins) return reply(mess.only.admin)		
if (args[0] === 'abrir') {
reply(`\`\`\`✓Abierto con éxito\`\`\` *${groupMetadata.subject}*`)
cnf.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'cerrar') {
reply(`\`\`\`✓Chat deshabilitado temporalmente en\`\`\` *${groupMetadata.subject}*`)
cnf.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
addFilter(from)
break
					
case prefix+'chatlist':
if (isBanned) return  reply(mess.banned)
if (!isGroupAdmins) return reply(mess.only.admin)
cnf.updatePresence(from, Presence.composing)
cnf.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted  : freply})
addFilter(from)
break
				
case prefix+'listadmin':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
teks = `Lista de facheritos *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
addFilter(from)
break
					
case prefix+'promover':
if (isBanned) return  reply(mess.banned)  
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Pedido recibido, te conviertes en administrador! :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
cnf.groupMakeAdmin(from, mentioned)
} else {
mentions(`Ahora eres admin U~U @${mentioned[0].split('@')[0]}`)
cnf.groupMakeAdmin(from, mentioned)
}
addFilter(from)
break

case prefix+'degradar':
if (isBanned) return  reply(mess.banned)                 			  
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Pedido recibido, ya no eres administrador :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
cnf.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Okey ya no eres admin ~ UnU @${mentioned[0].split('@')[0]}`, mentioned, true)
cnf.groupDemoteAdmin(from, mentioned)
}
addFilter(from)
break

case prefix+'halloween':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
confu = args.join(' ')
if (args.length < 1) return reply('En dónde está el texto?')
if (args.length > 10) return reply('Maximo 10 letras')
sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${confu}&apikey=Ikyy69`)
addFilter(from)
break
      
case prefix+'vampire':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)	
confu = args.join(' ')
if (args.length < 1) return reply('En dónde está el texto?')
if (args.length > 10) return reply('Maximo 10 letras')
piro = sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${confu}&apikey=Ikyy69`)
if (piro.error) return reply(piro.error)
addFilter(from)
break  
      
case prefix+'codetxt':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)   	        
confu = args.join(' ')
if (args.length < 1) return reply('En dónde está el texto?')
if (args.length > 10) return reply('Maximo 10 letras')
sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${confu}&apikey=Ikyy69`)
addFilter(from)
break
				
case prefix+'express':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)      		      
confu = args.join(' ')
if (args.length < 1) return reply('En dónde está el texto?')
if (args.length > 10) return reply('Maximo 10 letras')
sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${confu}&apikey=Ikyy69`)
addFilter(from)
break

case prefix+'blackbird':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
confu = args.join(' ')
if (args.length < 1) return reply('En dónde está el texto?')
if (args.length > 10) return reply('Maximo 10 letras')
sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${confu}&apikey=Ikyy69`)
addFilter(from)
break

case prefix+'text3d':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
confu = args.join(' ')
if (args.length < 1) return reply('En dónde está el texto?')
if (args.length > 10) return reply('Maximo 10 letras')
sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${confu}&apikey=Ikyy69`)
addFilter(from)
break
	
case prefix+'warrior':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)           
confu = args.join(' ')
if (args.length < 1) return reply('En dónde está el texto?')
if (args.length > 10) return reply('Maximo 10 letras')
sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${confu}&apikey=Ikyy69`)
addFilter(from)
break
					
case prefix+'lolihentai':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const dest =['https://thumbs2.imgbox.com/fa/2e/IAwGlxs7_t.png','https://thumbs2.imgbox.com/54/b9/K7jt4NiL_t.jpg','https://thumbs2.imgbox.com/68/1f/VHKzH1Ug_t.jpg','https://thumbs2.imgbox.com/9a/85/yK1Jrw1C_t.jpg','https://thumbs2.imgbox.com/fe/13/lM4wKuZ3_t.jpg','https://thumbs2.imgbox.com/2e/3b/lahnOxtE_t.jpg','https://thumbs2.imgbox.com/89/17/txew6JlE_t.jpg','https://thumbs2.imgbox.com/bc/28/QEFpgMQt_t.jpg','https://thumbs2.imgbox.com/a8/0d/dZvi4vOC_t.png','https://thumbs2.imgbox.com/01/04/Uhz91XzV_t.png','https://thumbs2.imgbox.com/1b/21/46NBVL3z_t.jpg','https://thumbs2.imgbox.com/13/34/DngYd4sp_t.png','https://thumbs2.imgbox.com/23/83/VsLGMtVT_t.jpg','https://thumbs2.imgbox.com/7f/de/z8cIfKGy_t.jpg','https://thumbs2.imgbox.com/0b/72/8WFlzNoe_t.jpg','https://thumbs2.imgbox.com/31/22/LuOKdTyQ_t.jpg','https://thumbs2.imgbox.com/8b/e2/SRUjDsvy_t.jpg','https://thumbs2.imgbox.com/e6/80/z6GjCbZj_t.jpg','https://thumbs2.imgbox.com/60/7c/sCW8g3SN_t.jpg','https://thumbs2.imgbox.com/9c/07/CgDfqigp_t.jpg','https://thumbs2.imgbox.com/5c/1e/eXMNMEzq_t.jpg','https://thumbs2.imgbox.com/c7/53/a3QDP0Ld_t.jpg','https://thumbs2.imgbox.com/38/a6/8AqZZczG_t.jpg','https://thumbs2.imgbox.com/84/4a/3MCcaYoA_t.jpg','https://thumbs2.imgbox.com/14/f6/APWzt28b_t.jpg','https://thumbs2.imgbox.com/af/5d/FHmcijct_t.jpg','https://thumbs2.imgbox.com/04/0c/tv6aZwuA_t.jpg','https://thumbs2.imgbox.com/4e/52/xd3QdqHD_t.jpg','https://thumbs2.imgbox.com/1b/3c/FBusYXNL_t.jpg','https://thumbs2.imgbox.com/6c/b6/Q1LIkage_t.jpg','https://thumbs2.imgbox.com/3c/b7/gLzeUWnK_t.jpg','https://thumbs2.imgbox.com/6a/4e/4Y8nsbtX_t.jpg','https://thumbs2.imgbox.com/8b/a3/eJpKnZIA_t.jpg','https://thumbs2.imgbox.com/20/4e/muVPzbUR_t.jpg','https://thumbs2.imgbox.com/96/77/DP64RSex_t.jpg','https://thumbs2.imgbox.com/9a/19/sg7xk7pN_t.jpg','https://thumbs2.imgbox.com/98/05/uuP6GYDi_t.jpg','https://thumbs2.imgbox.com/fd/50/v3lD7QCn_t.jpg','https://thumbs2.imgbox.com/f3/5e/SlpgYB4k_t.jpg','https://thumbs2.imgbox.com/31/61/8evNZtIC_t.jpg','https://thumbs2.imgbox.com/54/68/SG1CHLrp_t.jpg','https://thumbs2.imgbox.com/8a/2d/NsG3IH97_t.jpg','https://thumbs2.imgbox.com/99/86/SnvFsKnz_t.jpg','https://thumbs2.imgbox.com/1c/29/lfu6ZAwN_t.jpg','https://thumbs2.imgbox.com/44/bc/hfejTWaQ_t.jpg','https://thumbs2.imgbox.com/5a/a9/urUSiNhA_t.jpg','https://thumbs2.imgbox.com/1c/9b/qdRUi9k3_t.jpg','https://thumbs2.imgbox.com/9a/9c/99Y8eQNt_t.jpg','https://thumbs2.imgbox.com/6d/b6/3E7pVaWL_t.jpg','https://thumbs2.imgbox.com/c2/cc/zNgps2gW_t.jpg','https://thumbs2.imgbox.com/4b/57/PQmRfG26_t.jpg','https://thumbs2.imgbox.com/18/ed/dQCsy2FF_t.jpg','https://thumbs2.imgbox.com/77/d3/8bjRK7U9_t.jpg','https://thumbs2.imgbox.com/9c/d8/3EKCADx9_t.jpg','https://thumbs2.imgbox.com/3f/e4/x6igKgLU_t.jpg','https://thumbs2.imgbox.com/bb/30/FfnVcSql_t.jpg','https://thumbs2.imgbox.com/06/44/VXlpRkb0_t.jpg','https://thumbs2.imgbox.com/c3/81/kdT5RVQ7_t.jpg','https://thumbs2.imgbox.com/03/e7/vpzmhfQn_t.jpg','https://thumbs2.imgbox.com/3b/c7/WbtVfNg3_t.jpg','https://thumbs2.imgbox.com/66/a2/t9iP20Q2_t.jpg','https://thumbs2.imgbox.com/52/b8/AmcggKTi_t.jpg','https://thumbs2.imgbox.com/ba/b7/Q7jZ4uSF_t.jpg','https://thumbs2.imgbox.com/ec/30/5bKyT40W_t.jpg','https://thumbs2.imgbox.com/58/ee/pKcc5Oo5_t.jpg','https://thumbs2.imgbox.com/12/fd/RUQpz4Yz_t.jpg','https://thumbs2.imgbox.com/aa/ef/gBqtaAIA_t.jpg','https://thumbs2.imgbox.com/70/f8/3OjbhjOI_t.jpg','https://thumbs2.imgbox.com/5a/62/YGingUWM_t.jpg','https://thumbs2.imgbox.com/5e/1a/yvWE1apR_t.jpg','https://thumbs2.imgbox.com/b2/d4/RsHakCgl_t.jpg','https://thumbs2.imgbox.com/9e/39/nDULAIxQ_t.jpg','https://thumbs2.imgbox.com/85/b3/xNEnT3R4_t.jpg','https://thumbs2.imgbox.com/85/da/VXaFcNcO_t.jpg','https://thumbs2.imgbox.com/aa/f3/qKuoOVUU_t.jpg','https://thumbs2.imgbox.com/17/f5/tg4zqaPg_t.jpg','https://thumbs2.imgbox.com/80/a1/dTbBIQLp_t.jpg','https://thumbs2.imgbox.com/b7/94/YF0YLOuQ_t.jpg','https://thumbs2.imgbox.com/e1/d8/YY01kgLa_t.jpg','https://thumbs2.imgbox.com/2f/0e/mWzOu7Vx_t.jpg','https://thumbs2.imgbox.com/b6/61/CACoYq1B_t.jpg','https://thumbs2.imgbox.com/c0/31/5v9CQKQ4_t.jpg','https://thumbs2.imgbox.com/3e/95/DlsFbB3R_t.jpg','https://thumbs2.imgbox.com/78/24/uAAu21k5_t.jpg','https://thumbs2.imgbox.com/dc/22/kf6V4EmS_t.jpg','https://thumbs2.imgbox.com/07/31/lfDnWDHv_t.jpg','https://thumbs2.imgbox.com/09/a4/KzYkfMc6_t.jpg','https://thumbs2.imgbox.com/5a/df/RZfi0wUa_t.jpg','https://thumbs2.imgbox.com/20/62/BJCVubHe_t.jpg','https://thumbs2.imgbox.com/ff/59/NvIM06ca_t.jpg','https://thumbs2.imgbox.com/04/8e/7brJ16cQ_t.jpg','https://thumbs2.imgbox.com/09/43/XvANAfMD_t.jpg','https://thumbs2.imgbox.com/6e/5d/zpLxUaHj_t.jpg','https://thumbs2.imgbox.com/8c/b4/cYIUcpTi_t.jpg','https://thumbs2.imgbox.com/fb/55/Ur7CsSob_t.jpg','https://thumbs2.imgbox.com/71/62/orHOuu5t_t.jpg','https://thumbs2.imgbox.com/74/26/A7rD7r2T_t.jpg','https://thumbs2.imgbox.com/c9/70/BF1PenD4_t.jpg','https://thumbs2.imgbox.com/3e/2a/JHLt8kei_t.jpg','https://thumbs2.imgbox.com/40/9a/mUMGFZST_t.jpg','https://thumbs2.imgbox.com/48/c1/xho3bvk9_t.jpg','https://thumbs2.imgbox.com/eb/71/2N61ITSP_t.jpg','https://thumbs2.imgbox.com/e3/c2/u9S72YLI_t.jpg','https://thumbs2.imgbox.com/30/84/m7RJQ5Sj_t.jpg','https://thumbs2.imgbox.com/dd/96/37Rmje4G_t.jpg','https://thumbs2.imgbox.com/11/21/v93Mk6V2_t.jpg','https://thumbs2.imgbox.com/86/2c/HYeVuwYr_t.jpg','https://thumbs2.imgbox.com/e4/b0/Yyjhrptr_t.jpg','https://thumbs2.imgbox.com/f8/90/jRMA7BVj_t.jpg','https://thumbs2.imgbox.com/7c/7c/wQBkVicp_t.jpg','https://thumbs2.imgbox.com/11/6a/ysrrKLQA_t.jpg','https://thumbs2.imgbox.com/ff/9f/2670UYOE_t.jpg','https://thumbs2.imgbox.com/6c/57/7fewT6Gc_t.jpg','https://thumbs2.imgbox.com/af/c9/3YilkJTT_t.jpg','https://thumbs2.imgbox.com/2c/9f/vivQXhvy_t.jpg','https://thumbs2.imgbox.com/c9/c0/hU60xmd4_t.jpg','https://thumbs2.imgbox.com/16/92/dRmTFIMp_t.jpg','https://thumbs2.imgbox.com/86/03/yLPtLIFw_t.jpg','https://thumbs2.imgbox.com/5b/c9/3dPRjCNk_t.jpg','https://thumbs2.imgbox.com/05/e9/0KVOFZF3_t.jpg','https://thumbs2.imgbox.com/43/fb/LyLWmQTa_t.jpg','https://thumbs2.imgbox.com/35/6f/1XFma9fk_t.jpg','https://thumbs2.imgbox.com/79/f9/mv8QCVbA_t.jpg','https://thumbs2.imgbox.com/12/07/Uu5svoSb_t.jpg','https://thumbs2.imgbox.com/f2/a3/N0QS8JHe_t.jpg','https://thumbs2.imgbox.com/f1/49/F1fQs6Pp_t.jpg','https://thumbs2.imgbox.com/0e/b5/csl8SP9N_t.jpg','https://thumbs2.imgbox.com/f8/53/RJMDxMYF_t.jpg','https://thumbs2.imgbox.com/2b/53/CJb0Mnli_t.jpg','https://thumbs2.imgbox.com/19/78/TIyXPzWQ_t.jpg','https://thumbs2.imgbox.com/c1/70/wMGWSl4J_t.jpg','https://thumbs2.imgbox.com/96/b7/HbxBFg72_t.jpg','https://thumbs2.imgbox.com/80/0a/yTWmCdPK_t.jpg','https://thumbs2.imgbox.com/b6/b0/OMcl6yFp_t.jpg','https://thumbs2.imgbox.com/7d/54/ubPf2IWu_t.jpg','https://thumbs2.imgbox.com/5a/af/6PFRzGDq_t.jpg','https://thumbs2.imgbox.com/42/93/S1nAqLT5_t.jpg','https://thumbs2.imgbox.com/89/48/cHGZrxCy_t.jpg','https://thumbs2.imgbox.com/29/a2/UlNJy5I1_t.jpg','https://thumbs2.imgbox.com/a3/c3/WIHrQGMg_t.jpg','https://thumbs2.imgbox.com/b1/69/A5GyXe2M_t.jpg','https://thumbs2.imgbox.com/7d/32/QHOvCQbp_t.jpg','https://thumbs2.imgbox.com/6a/da/eYfZ2ZcK_t.jpg','https://thumbs2.imgbox.com/37/ba/Z6G1pVP5_t.jpg','https://thumbs2.imgbox.com/8a/3e/DqS3RMZf_t.jpg','https://thumbs2.imgbox.com/64/fa/0KpcScNJ_t.jpg','https://thumbs2.imgbox.com/48/40/p45b6z7x_t.jpg','https://thumbs2.imgbox.com/a4/da/X2xAj2Wb_t.jpg','https://thumbs2.imgbox.com/88/7f/oxom3Wqc_t.jpg','https://thumbs2.imgbox.com/5d/67/1vaUtyEM_t.jpg','https://thumbs2.imgbox.com/0b/0a/upsVEzyL_t.jpg','https://thumbs2.imgbox.com/b6/de/rLFC5hD5_t.jpg','https://thumbs2.imgbox.com/f5/12/53I01fZe_t.jpg','https://thumbs2.imgbox.com/4a/47/PzQE4Kcc_t.jpg','https://thumbs2.imgbox.com/1e/a4/yFFD1TSc_t.jpg','https://thumbs2.imgbox.com/fb/f0/Kdec72JV_t.jpg','https://thumbs2.imgbox.com/c3/34/yXNdn482_t.jpg','https://thumbs2.imgbox.com/34/d1/VWQw7AQ0_t.jpg','https://thumbs2.imgbox.com/dc/6c/PhbRDQPv_t.jpg','https://thumbs2.imgbox.com/03/a1/C9eLvTqR_t.jpg','https://thumbs2.imgbox.com/39/ae/2jCINLhI_t.jpg','https://thumbs2.imgbox.com/d6/83/LUHHnJ2d_t.jpg','https://thumbs2.imgbox.com/e3/96/JRSUcv9h_t.jpg','https://thumbs2.imgbox.com/9c/42/TX6FdnG7_t.jpg','https://thumbs2.imgbox.com/33/8f/1LuHhos9_t.jpg','https://thumbs2.imgbox.com/5a/ae/RfHOSV0R_t.jpg','https://thumbs2.imgbox.com/cf/e7/8toQ2RZo_t.jpg','https://thumbs2.imgbox.com/58/19/Do6DmGzt_t.jpg','https://thumbs2.imgbox.com/33/1b/m6kGz6di_t.jpg','https://thumbs2.imgbox.com/72/54/9w3qqVNg_t.jpg','https://thumbs2.imgbox.com/ad/68/4brAU2GV_t.jpg','https://thumbs2.imgbox.com/e0/f2/6ViKtQKw_t.jpg','https://thumbs2.imgbox.com/59/f0/GWqrHvyv_t.jpg','https://thumbs2.imgbox.com/58/76/j6VhGg4E_t.jpg','https://thumbs2.imgbox.com/a0/81/shl7Oaky_t.jpg','https://thumbs2.imgbox.com/1b/10/vrDTDOV9_t.jpg','https://thumbs2.imgbox.com/09/a0/hOO6lyjB_t.jpg','https://thumbs2.imgbox.com/c3/93/Rvh0xd7R_t.jpg','https://thumbs2.imgbox.com/d3/1e/xTergnDF_t.jpg','https://thumbs2.imgbox.com/74/30/jBxB09pW_t.jpg','https://thumbs2.imgbox.com/34/16/zyG2mzb9_t.jpg','https://thumbs2.imgbox.com/42/af/YygPJWxy_t.jpg','https://thumbs2.imgbox.com/67/83/BL87lFtn_t.jpg','https://thumbs2.imgbox.com/ea/68/WAmcisdq_t.jpg','https://thumbs2.imgbox.com/9e/54/Q7DdhoNL_t.jpg','https://thumbs2.imgbox.com/17/7d/CWvQ0u3G_t.jpg','https://thumbs2.imgbox.com/c8/91/smNqJHiO_t.jpg','https://thumbs2.imgbox.com/74/d7/MgfdaCo5_t.jpg','https://thumbs2.imgbox.com/22/7a/CsQBOx4O_t.jpg','https://thumbs2.imgbox.com/c6/59/IJ632PwT_t.jpg','https://thumbs2.imgbox.com/d6/1a/eOI8UI84_t.jpg','https://thumbs2.imgbox.com/5f/f9/rctO9Wsh_t.jpg','https://thumbs2.imgbox.com/cb/34/Eqjwn6vV_t.jpg','https://thumbs2.imgbox.com/a0/06/1zcCoceP_t.jpg']
let petan = dest[Math.floor(Math.random() * dest.length)]
lolihentai = await getBuffer(petan)
cnf.sendMessage(from, lolihentai, image, {quoted: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
break
		
case prefix+'sakura':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
const saku =['https://i.ibb.co/tCjfyP1/42.jpg','https://i.ibb.co/QDwhvmd/37.jpg','https://i.ibb.co/XsV6JMF/15.jpg','https://i.ibb.co/51kyLsw/36.jpg','https://i.ibb.co/YRYHKmG/14.jpg','https://i.ibb.co/tm0NYYM/39.jpg','https://i.ibb.co/G5twXCz/17.jpg','https://i.ibb.co/jDQG3KL/16.jpg','https://i.ibb.co/N1MsmBg/38.jpg','https://i.ibb.co/x226p3B/33.jpg','https://i.ibb.co/kJ0kvkK/32.jpg','https://i.ibb.co/KKtQCv5/35.jpg','https://i.ibb.co/6NFfgYD/13.jpg','https://i.ibb.co/FBV26M5/12.jpg','https://i.ibb.co/4V4bNhv/34.jpg','https://i.ibb.co/2ZtKK7Y/3.jpg','https://i.ibb.co/mSsFYpp/19.jpg','https://i.ibb.co/99yhr61/41.jpg','https://i.ibb.co/wM0wpph/18.jpg','https://i.ibb.co/NSdt9M2/40.jpg','https://i.ibb.co/5GsQ0M0/21.jpg','https://i.ibb.co/nD3fXdp/20.jpg','https://i.ibb.co/kKzsVC2/26.jpg','https://i.ibb.co/9TLrHKq/4.jpg','https://i.ibb.co/dLd11N2/25.jpg','https://i.ibb.co/xHcBCF6/1.jpg','https://i.ibb.co/XScSFRt/28.jpg','https://i.ibb.co/6mkfG4k/6.jpg','https://i.ibb.co/f8X0QxH/5.jpg','https://i.ibb.co/xMDxFhW/27.jpg','https://i.ibb.co/BsGDBM9/22.jpg','https://i.ibb.co/zP3yPvQ/44.jpg','https://i.ibb.co/rtsrbLw/43.jpg','https://i.ibb.co/KmwN3jq/2.jpg','https://i.ibb.co/xXGSvLf/46.jpg','https://i.ibb.co/Jr6QGh7/24.jpg','https://i.ibb.co/MfKYGfP/45.jpg','https://i.ibb.co/G0kXbvR/23.jpg','https://i.ibb.co/nRDZpHx/11.jpg','https://i.ibb.co/hBrPSrb/8.jpg','https://i.ibb.co/RCP18Qd/30.jpg','https://i.ibb.co/DD3jjCV/7.jpg','https://i.ibb.co/YD54YbH/29.jpg','https://i.ibb.co/JQ6Q7vS/10.jpg','https://i.ibb.co/B2bDnd4/31.jpg','https://i.ibb.co/HY0mxbt/9.jpg']
let ra = saku[Math.floor(Math.random() * saku.length)]
sakura = await getBuffer(ra)
cnf.sendMessage(from, sakura, image, {quoted: mek, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
break
					
case prefix+'hero':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
const ura =['https://img.nickpic.host/q1hKQ1.jpg',
'https://img.nickpic.host/q1h8rW.jpg',
'https://img.nickpic.host/q1hzkc.jpg',
'https://img.nickpic.host/q1hwMz.jpg',
'https://img.nickpic.host/q1h1ZA.jpg',
'https://img.nickpic.host/q1hD5G.jpg',
'https://img.nickpic.host/q1hMAp.jpg',
'https://img.nickpic.host/q1hRzY.jpg',
'https://img.nickpic.host/q1hiNf.jpg',
'https://img.nickpic.host/q1hto6.jpg',
'https://img.nickpic.host/q1hYVj.jpg',
'https://img.nickpic.host/q1hNoJ.jpg',
'https://img.nickpic.host/q1hVAn.jpg',
'https://img.nickpic.host/q1hf7s.jpg',
'https://img.nickpic.host/q1h0Z2.jpg',
'https://img.nickpic.host/q1h95Q.jpg',
'https://img.nickpic.host/q1heRx.jpg',
'https://img.nickpic.host/q1hLsO.jpg',
'https://img.nickpic.host/q1hkkN.jpg',
'https://img.nickpic.host/q1hPUm.jpg',
'https://img.nickpic.host/q1hTV8.jpg',
'https://img.nickpic.host/q1hZpq.jpg',
'https://img.nickpic.host/q1hy7D.jpg',
'https://img.nickpic.host/q1hdAd.jpg',
'https://img.nickpic.host/q16oRM.jpg',
'https://img.nickpic.host/q16Gd5.jpg',
'https://img.nickpic.host/q16m5P.jpg',
'https://img.nickpic.host/q16pJF.jpg',
'https://img.nickpic.host/q16xse.jpg',
'https://img.nickpic.host/q16BUX.jpg',
'https://img.nickpic.host/q16bfb.jpg',
'https://img.nickpic.host/q16spf.jpg',
'https://img.nickpic.host/q163E6.jpg',
'https://img.nickpic.host/q16F8p.jpg',
'https://img.nickpic.host/q16adY.jpg',
'https://img.nickpic.host/q16lSA.jpg',
'https://img.nickpic.host/q1651G.jpg',
'https://img.nickpic.host/q16SJz.jpg',
'https://img.nickpic.host/q16g3c.jpg',
'https://img.nickpic.host/q16qUW.jpg',
'https://img.nickpic.host/q16uf1.jpg',
'https://img.nickpic.host/q16Evj.jpg',
'https://img.nickpic.host/q16OEJ.jpg',
'https://img.nickpic.host/q16h8n.jpg',
'https://img.nickpic.host/q166ys.jpg',
'https://img.nickpic.host/q16QS2.jpg',
'https://img.nickpic.host/q16U1Q.jpg',
'https://img.nickpic.host/q16XLx.jpg',
'https://img.nickpic.host/q16n3N.jpg',
'https://img.nickpic.host/q16tXO.jpg',
'https://img.nickpic.host/q161v8.jpg',
'https://img.nickpic.host/q16M0m.jpg',
'https://img.nickpic.host/q164Oq.jpg',
'https://img.nickpic.host/q16wyD.jpg',
'https://img.nickpic.host/q16D8d.jpg',
'https://img.nickpic.host/q167c5.jpg',
'https://img.nickpic.host/q1681P.jpg',
'https://img.nickpic.host/q16KLM.jpg',
'https://img.nickpic.host/q16HFF.jpg',
'https://img.nickpic.host/q16NXe.jpg',
'https://img.nickpic.host/q16V0X.jpg',
'https://img.nickpic.host/q162Of.jpg',
'https://img.nickpic.host/q160xb.jpg',
'https://img.nickpic.host/q169K6.jpg',
'https://img.nickpic.host/q16kGp.jpg',
'https://img.nickpic.host/q16JcY.jpg',
'https://img.nickpic.host/q16PPG.jpg',
'https://img.nickpic.host/q16L4A.jpg',
'https://img.nickpic.host/q16WFz.jpg',
'https://img.nickpic.host/q16Zic.jpg',
'https://img.nickpic.host/q16d0W.jpg',
'https://img.nickpic.host/q1CGx1.jpg',
'https://img.nickpic.host/q1CIhj.jpg',
'https://img.nickpic.host/q1CmKJ.jpg',
'https://img.nickpic.host/q1CpGn.jpg',
'https://img.nickpic.host/q1Cvgs.jpg',
'https://img.nickpic.host/q1Cx42.jpg',
'https://img.nickpic.host/q1CBPQ.jpg',
'https://img.nickpic.host/q1Crax.jpg',
'https://img.nickpic.host/q1CsiN.jpg',
'https://img.nickpic.host/q1C32O.jpg',
'https://img.nickpic.host/q1CaBm.jpg',
'https://img.nickpic.host/q1Cjh8.jpg',
'https://img.nickpic.host/q1ClYq.jpg',
'https://img.nickpic.host/q1CSGd.jpg',
'https://img.nickpic.host/q1CcgD.jpg',
'https://img.nickpic.host/q1CgD5.jpg',
'https://img.nickpic.host/q1CqPP.jpg',
'https://img.nickpic.host/q1CAaM.jpg',
'https://img.nickpic.host/q1CEnF.jpg',
'https://img.nickpic.host/q1CO2e.jpg',
'https://img.nickpic.host/q1C6BX.jpg',
'https://img.nickpic.host/q1CC6b.jpg',
'https://img.nickpic.host/q1CQYf.jpg',
'https://img.nickpic.host/q1CXI6.jpg',
'https://img.nickpic.host/q1Ciqp.jpg',
'https://img.nickpic.host/q1CnDY.jpg',
'https://img.nickpic.host/q1CtTA.jpg',
'https://img.nickpic.host/q1CRjG.jpg',
'https://img.nickpic.host/q1C1nz.jpg',
'https://img.nickpic.host/q1C49c.jpg',
'https://img.nickpic.host/q1CwBW.jpg',
'https://img.nickpic.host/q1Cz61.jpg',
'https://img.nickpic.host/q1C7Hj.jpg',
'https://img.nickpic.host/q1CKIJ.jpg',
'https://img.nickpic.host/q1CYqn.jpg',
'https://img.nickpic.host/q1CHws.jpg',
'https://img.nickpic.host/q1CNT2.jpg',
'https://img.nickpic.host/q1CfjQ.jpg',
'https://img.nickpic.host/q1C0tx.jpg',
'https://img.nickpic.host/q1C29N.jpg',
'https://img.nickpic.host/q1CebO.jpg',
'https://img.nickpic.host/q1CkCm.jpg',
'https://img.nickpic.host/q1CJH8.jpg',
'https://img.nickpic.host/q1CPmq.jpg',
'https://img.nickpic.host/q1CTqd.jpg',
'https://img.nickpic.host/q1CWwD.jpg',
'https://img.nickpic.host/q1CZW5.jpg',
'https://img.nickpic.host/q1CyjP.jpg',
'https://img.nickpic.host/q1QGtM.jpg',
'https://img.nickpic.host/q1QIeF.jpg',
'https://img.nickpic.host/q1Qobe.jpg',
'https://img.nickpic.host/q1QpCX.jpg',
'https://img.nickpic.host/q1QvNb.jpg',
'https://img.nickpic.host/q1QBmf.jpg',
'https://img.nickpic.host/q1Qbu6.jpg',
'https://img.nickpic.host/q1Qrzp.jpg',
'https://img.nickpic.host/q1QsWY.jpg',
'https://img.nickpic.host/q1QFlA.jpg',
'https://img.nickpic.host/q1QaMG.jpg',
'https://img.nickpic.host/q1Qjez.jpg',
'https://img.nickpic.host/q1Q5rc.jpg',
'https://img.nickpic.host/q1QSCW.jpg',
'https://img.nickpic.host/q1QcN1.jpg',
'https://img.nickpic.host/q1Qqoj.jpg',
'https://img.nickpic.host/q1QuuJ.jpg',
'https://img.nickpic.host/q1QAzn.jpg',
'https://img.nickpic.host/q1QEZs.jpg',
'https://img.nickpic.host/q1Qhl2.jpg',
'https://img.nickpic.host/q1Q6MQ.jpg',
'https://img.nickpic.host/q1QCkx.jpg',
'https://img.nickpic.host/q1QUrN.jpg',
'https://img.nickpic.host/q1QXQO.jpg',
'https://img.nickpic.host/q1QiVm.jpg',
'https://img.nickpic.host/q1Qto8.jpg',
'https://img.nickpic.host/q1QMAq.jpg',
'https://img.nickpic.host/q1QRzd.jpg',
'https://img.nickpic.host/q1Q1ZD.jpg',
'https://img.nickpic.host/q1QD55.jpg',
'https://img.nickpic.host/q1QwMP.jpg',
'https://img.nickpic.host/q1QzkM.jpg',
'https://img.nickpic.host/q1Q8sF.jpg',
'https://img.nickpic.host/q1QKQe.jpg',
'https://img.nickpic.host/q1QYVX.jpg',
'https://img.nickpic.host/q1QNpb.jpg',
'https://img.nickpic.host/q1QVAf.jpg',
'https://img.nickpic.host/q1Qf76.jpg',
'https://img.nickpic.host/q1Q0dp.jpg',
'https://img.nickpic.host/q1Q95Y.jpg',
'https://img.nickpic.host/q1QeRA.jpg',
'https://img.nickpic.host/q1QkJG.jpg',
'https://img.nickpic.host/q1QLsz.jpg',
'https://img.nickpic.host/q1QPUc.jpg',
'https://img.nickpic.host/q1QTVW.jpg',
'https://img.nickpic.host/q1QZp1.jpg',
'https://img.nickpic.host/q1QdEj.jpg',
'https://img.nickpic.host/q1Qy7J.jpg',
'https://img.nickpic.host/q1UGdn.jpg',
'https://img.nickpic.host/q1UmSs.jpg',
'https://img.nickpic.host/q1UoR2.jpg',
'https://img.nickpic.host/q1Ux3x.jpg',
'https://img.nickpic.host/q1UpJQ.jpg',
'https://img.nickpic.host/q1UBUN.jpg',
'https://img.nickpic.host/q1UbfO.jpg',
'https://img.nickpic.host/q1Usvm.jpg',
'https://img.nickpic.host/q1U3E8.jpg',
'https://img.nickpic.host/q1UF8q.jpg',
'https://img.nickpic.host/q1UlSD.jpg',
'https://img.nickpic.host/q1Uadd.jpg',
'https://img.nickpic.host/q1U515.jpg',
'https://img.nickpic.host/q1USJP.jpg',
'https://img.nickpic.host/q1Ug3M.jpg',
'https://img.nickpic.host/q1UqXF.jpg',
'https://img.nickpic.host/q1Uufe.jpg',
'https://img.nickpic.host/q1UEvX.jpg',
'https://img.nickpic.host/q1UOOb.jpg',
'https://img.nickpic.host/q1Uh8f.jpg',
'https://img.nickpic.host/q1U6y6.jpg',
'https://img.nickpic.host/q1UQcp.jpg',
'https://img.nickpic.host/q1UU1Y.jpg',
'https://img.nickpic.host/q1UXLA.jpg',
'https://img.nickpic.host/q1UnFG.jpg',
'https://img.nickpic.host/q1UtXz.jpg',
'https://img.nickpic.host/q1UM0c.jpg',
'https://img.nickpic.host/q1U1vW.jpg',
'https://img.nickpic.host/q1U4O1.jpg',
'https://img.nickpic.host/q1UDKj.jpg',
'https://img.nickpic.host/q1UwyJ.jpg',
'https://img.nickpic.host/q1U7cn.jpg',
'https://img.nickpic.host/q1U84s.jpg',
'https://img.nickpic.host/q1UKL2.jpg',
'https://img.nickpic.host/q1UHFQ.jpg',
'https://img.nickpic.host/q1UNix.jpg',
'https://img.nickpic.host/q1UV0N.jpg',
'https://img.nickpic.host/q1U0xO.jpg',
'https://img.nickpic.host/q1U2hm.jpg',
'https://img.nickpic.host/q1U9K8.jpg',
'https://img.nickpic.host/q1UkGq.jpg',
'https://img.nickpic.host/q1UJcd.jpg',
'https://img.nickpic.host/q1UL4D.jpg',
'https://img.nickpic.host/q1UPP5.jpg',
'https://img.nickpic.host/q1UWFP.jpg',
'https://img.nickpic.host/q1UZiM.jpg',
'https://img.nickpic.host/q1Ud2F.jpg',
'https://img.nickpic.host/q1XGxe.jpg',
'https://img.nickpic.host/q1XIhX.jpg',
'https://img.nickpic.host/q1XmYb.jpg',
'https://img.nickpic.host/q1Xvg6.jpg',
'https://img.nickpic.host/q1XpGf.jpg',
'https://img.nickpic.host/q1XBPY.jpg',
'https://img.nickpic.host/q1XxDp.jpg',
'https://img.nickpic.host/q1XraA.jpg',
'https://img.nickpic.host/q1XsnG.jpg',
'https://img.nickpic.host/q1X32z.jpg',
'https://img.nickpic.host/q1XaBc.jpg',
'https://img.nickpic.host/q1XjhW.jpg',
'https://img.nickpic.host/q1XlY1.jpg',
'https://img.nickpic.host/q1XSIj.jpg',
'https://img.nickpic.host/q1XcgJ.jpg',
'https://img.nickpic.host/q1XgDn.jpg',
'https://img.nickpic.host/q1XqTs.jpg',
'https://img.nickpic.host/q1XAa2.jpg',
'https://img.nickpic.host/q1XEnQ.jpg',
'https://img.nickpic.host/q1XO9x.jpg',
'https://img.nickpic.host/q1X6BN.jpg',
'https://img.nickpic.host/q1XC6O.jpg',
'https://img.nickpic.host/q1XXI8.jpg',
'https://img.nickpic.host/q1XQHm.jpg',
'https://img.nickpic.host/q1Xiqq.jpg',
'https://img.nickpic.host/q1XnDd.jpg',
'https://img.nickpic.host/q1XtTD.jpg',
'https://img.nickpic.host/q1XRj5.jpg',
'https://img.nickpic.host/q1X1nP.jpg',
'https://img.nickpic.host/q1XKmb.jpg',
'https://img.nickpic.host/q1X49M.jpg',
'https://img.nickpic.host/q1XwbF.jpg',
'https://img.nickpic.host/q1X7HX.jpg',
'https://img.nickpic.host/q1Xz6e.jpg',
'https://img.nickpic.host/q1XYqf.jpg',
'https://img.nickpic.host/q1XHw6.jpg',
'https://img.nickpic.host/q1XNWp.jpg',
'https://img.nickpic.host/q1XfjY.jpg',
'https://img.nickpic.host/q1X0tA.jpg',
'https://img.nickpic.host/q1Xebz.jpg',
'https://img.nickpic.host/q1X2eG.jpg',
'https://img.nickpic.host/q1XkCc.jpg',
'https://img.nickpic.host/q1XJHW.jpg',
'https://img.nickpic.host/q1XPm1.jpg',
'https://img.nickpic.host/q1XTuj.jpg',
'https://img.nickpic.host/q1XWwJ.jpg',
'https://img.nickpic.host/q1XZWn.jpg',
'https://img.nickpic.host/q1Xyls.jpg',
'https://img.nickpic.host/q1iGt2.jpg',
'https://img.nickpic.host/q1iIeQ.jpg',
'https://img.nickpic.host/q1iorx.jpg',
'https://img.nickpic.host/q1iBom.jpg',
'https://img.nickpic.host/q1ivNO.jpg',
'https://img.nickpic.host/q1ipCN.jpg',
'https://img.nickpic.host/q1ibu8.jpg',
'https://img.nickpic.host/q1irzq.jpg',
'https://img.nickpic.host/q1iFlD.jpg',
'https://img.nickpic.host/q1isWd.jpg',
'https://img.nickpic.host/q1iaM5.jpg',
'https://img.nickpic.host/q1ijeP.jpg',
'https://img.nickpic.host/q1i5rM.jpg',
'https://img.nickpic.host/q1iSQF.jpg',
'https://img.nickpic.host/q1icNe.jpg',
'https://img.nickpic.host/q1iqoX.jpg',
'https://img.nickpic.host/q1iuAb.jpg',
'https://img.nickpic.host/q1iAzf.jpg',
'https://img.nickpic.host/q1iEZ6.jpg',
'https://img.nickpic.host/q1i6MY.jpg',
'https://img.nickpic.host/q1ih5p.jpg',
'https://img.nickpic.host/q1iCkA.jpg',
'https://img.nickpic.host/q1iUsG.jpg',
'https://img.nickpic.host/q1iXQz.jpg',
'https://img.nickpic.host/q1iiVc.jpg',
'https://img.nickpic.host/q1itoW.jpg',
'https://img.nickpic.host/q1iMA1.jpg',
'https://img.nickpic.host/q1iR7j.jpg',
'https://img.nickpic.host/q1i1ZJ.jpg',
'https://img.nickpic.host/q1iD5n.jpg',
'https://img.nickpic.host/q1iwRs.jpg',
'https://img.nickpic.host/q1izk2.jpg',
'https://img.nickpic.host/q1i8sQ.jpg',
'https://img.nickpic.host/q1iKUx.jpg',
'https://img.nickpic.host/q1iNpO.jpg',
'https://img.nickpic.host/q1iYVN.jpg',
'https://img.nickpic.host/q1iVEm.jpg',
'https://img.nickpic.host/q1if78.jpg',
'https://img.nickpic.host/q1i0dq.jpg',
'https://img.nickpic.host/q1ieRD.jpg',
'https://img.nickpic.host/q1i95d.jpg',
'https://img.nickpic.host/q1ikJ5.jpg',
'https://img.nickpic.host/q1iLsP.jpg',
'https://img.nickpic.host/q1iPUM.jpg',
'https://img.nickpic.host/q1iZpe.jpg',
'https://img.nickpic.host/q1iTfF.jpg',
'https://img.nickpic.host/q1idEX.jpg',
'https://img.nickpic.host/q1iy8b.jpg',
'https://img.nickpic.host/q1nGdf.jpg',
'https://img.nickpic.host/q1nmS6.jpg',
'https://img.nickpic.host/q1no1p.jpg',
'https://img.nickpic.host/q1npJY.jpg',
'https://img.nickpic.host/q1nBXG.jpg',
'https://img.nickpic.host/q1nsvc.jpg',
'https://img.nickpic.host/q1nx3A.jpg',
'https://img.nickpic.host/q1nbfz.jpg',
'https://img.nickpic.host/q1n3EW.jpg',
'https://img.nickpic.host/q1nayj.jpg',
'https://img.nickpic.host/q1nF81.jpg',
'https://img.nickpic.host/q1n51n.jpg',
'https://img.nickpic.host/q1nlSJ.jpg',
'https://img.nickpic.host/q1nSLs.jpg',
'https://img.nickpic.host/q1nqXQ.jpg',
'https://img.nickpic.host/q1ng32.jpg',
'https://img.nickpic.host/q1nu0x.jpg',
'https://img.nickpic.host/q1nEvN.jpg',
'https://img.nickpic.host/q1nOOO.jpg',
'https://img.nickpic.host/q1n6y8.jpg',
'https://img.nickpic.host/q1nhKm.jpg',
'https://img.nickpic.host/q1nXLD.jpg',
'https://img.nickpic.host/q1nQcq.jpg',
'https://img.nickpic.host/q1nU1d.jpg',
'https://img.nickpic.host/q1nnF5.jpg',
'https://img.nickpic.host/q1ntXP.jpg',
'https://img.nickpic.host/q1n1xF.jpg',
'https://img.nickpic.host/q1nM0M.jpg',
'https://img.nickpic.host/q1n4Oe.jpg',
'https://img.nickpic.host/q1n7cf.jpg',
'https://img.nickpic.host/q1nzGb.jpg',
'https://img.nickpic.host/q1nDKX.jpg',
'https://img.nickpic.host/q1n846.jpg',
'https://img.nickpic.host/q1nHFY.jpg',
'https://img.nickpic.host/q1nKPp.jpg',
'https://img.nickpic.host/q1nNiA.jpg',
'https://img.nickpic.host/q1n0xz.jpg',
'https://img.nickpic.host/q1nV2G.jpg',
'https://img.nickpic.host/q1n2hc.jpg',
'https://img.nickpic.host/q1n9KW.jpg',
'https://img.nickpic.host/q1nJgj.jpg',
'https://img.nickpic.host/q1nkG1.jpg',
'https://img.nickpic.host/q1nL4J.jpg',
'https://img.nickpic.host/q1nPPn.jpg',
'https://img.nickpic.host/q1nZi2.jpg',
'https://img.nickpic.host/q1nWas.jpg',
'https://img.nickpic.host/q1nd2Q.jpg',
'https://img.nickpic.host/q1tGBx.jpg',
'https://img.nickpic.host/q1tIhN.jpg',
'https://img.nickpic.host/q1tmYO.jpg',
'https://img.nickpic.host/q1tpIm.jpg',
'https://img.nickpic.host/q1tBPd.jpg',
'https://img.nickpic.host/q1tvg8.jpg',
'https://img.nickpic.host/q1txDq.jpg',
'https://img.nickpic.host/q1traD.jpg']
let dek = ura[Math.floor(Math.random() * ura.length)]
hero = await getBuffer(dek)
const dkk =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const fsfs = dkk[Math.floor(Math.random() * dkk.length)]
cnf.sendMessage(from, hero, image, { caption: fsfs, quoted: mek })
addFilter(from)
break
					
case prefix+'nintendo':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
const sasu =['https://img.nickpic.host/q10CJP.jpg',
'https://img.nickpic.host/q10615.jpg',
'https://img.nickpic.host/q10hSD.jpg',
'https://img.nickpic.host/q10Edd.jpg',
'https://img.nickpic.host/q10A8q.jpg',
'https://img.nickpic.host/q10cfO.jpg',
'https://img.nickpic.host/q10SUN.jpg',
'https://img.nickpic.host/q10uE8.jpg',
'https://img.nickpic.host/q1053x.jpg',
'https://img.nickpic.host/q10qvm.jpg',
'https://img.nickpic.host/q10XXF.jpg',
'https://img.nickpic.host/q10U3M.jpg',
'https://img.nickpic.host/q10ife.jpg',
'https://img.nickpic.host/q10tvX.jpg',
'https://img.nickpic.host/q10MOb.jpg',
'https://img.nickpic.host/q10R8f.jpg',
'https://img.nickpic.host/q101y6.jpg',
'https://img.nickpic.host/q10Dcp.jpg',
'https://img.nickpic.host/q10w1Y.jpg',
'https://img.nickpic.host/q10zLA.jpg',
'https://img.nickpic.host/q108FG.jpg',
'https://img.nickpic.host/q10KXz.jpg',
'https://img.nickpic.host/q10Y0c.jpg',
'https://img.nickpic.host/q10NvW.jpg',
'https://img.nickpic.host/q10VO1.jpg',
'https://img.nickpic.host/q10fKj.jpg',
'https://img.nickpic.host/q100yJ.jpg',
'https://img.nickpic.host/q109cn.jpg',
'https://img.nickpic.host/q10e4s.jpg',
'https://img.nickpic.host/q10kL2.jpg',
'https://img.nickpic.host/q10LFQ.jpg',
'https://img.nickpic.host/q10Pix.jpg',
'https://img.nickpic.host/q10T0N.jpg',
'https://img.nickpic.host/q10ZxO.jpg',
'https://img.nickpic.host/q10dhm.jpg',
'https://img.nickpic.host/q10yK8.jpg',
'https://img.nickpic.host/q12IGq.jpg',
'https://img.nickpic.host/q12mcd.jpg',
'https://img.nickpic.host/q12o4D.jpg',
'https://img.nickpic.host/q12pP5.jpg',
'https://img.nickpic.host/q12xFP.jpg',
'https://img.nickpic.host/q12BiM.jpg',
'https://img.nickpic.host/q12b2F.jpg',
'https://img.nickpic.host/q12sxe.jpg',
'https://img.nickpic.host/q123hX.jpg',
'https://img.nickpic.host/q12FYb.jpg',
'https://img.nickpic.host/q12lg6.jpg',
'https://img.nickpic.host/q12jGf.jpg',
'https://img.nickpic.host/q125Dp.jpg',
'https://img.nickpic.host/q12SPY.jpg',
'https://img.nickpic.host/q12gaA.jpg',
'https://img.nickpic.host/q12qnG.jpg',
'https://img.nickpic.host/q12u2z.jpg',
'https://img.nickpic.host/q12EBc.jpg',
'https://img.nickpic.host/q12OhW.jpg',
'https://img.nickpic.host/q12hY1.jpg',
'https://img.nickpic.host/q12CIj.jpg',
'https://img.nickpic.host/q12QgJ.jpg',
'https://img.nickpic.host/q12UDn.jpg',
'https://img.nickpic.host/q12XTs.jpg',
'https://img.nickpic.host/q12na2.jpg',
'https://img.nickpic.host/q12tnQ.jpg',
'https://img.nickpic.host/q12M9x.jpg',
'https://img.nickpic.host/q121BN.jpg',
'https://img.nickpic.host/q1246O.jpg',
'https://img.nickpic.host/q12DHm.jpg',
'https://img.nickpic.host/q127qq.jpg',
'https://img.nickpic.host/q12zI8.jpg',
'https://img.nickpic.host/q128Dd.jpg',
'https://img.nickpic.host/q12KTD.jpg',
'https://img.nickpic.host/q12Hj5.jpg',
'https://img.nickpic.host/q12NnP.jpg',
'https://img.nickpic.host/q12V9M.jpg',
'https://img.nickpic.host/q120bF.jpg',
'https://img.nickpic.host/q1226e.jpg',
'https://img.nickpic.host/q129HX.jpg',
'https://img.nickpic.host/q12kmb.jpg',
'https://img.nickpic.host/q12Jqf.jpg',
'https://img.nickpic.host/q12Lw6.jpg',
'https://img.nickpic.host/q12PWp.jpg',
'https://img.nickpic.host/q12WjY.jpg',
'https://img.nickpic.host/q12ZtA.jpg',
'https://img.nickpic.host/q12deG.jpg',
'https://img.nickpic.host/q19Gbz.jpg',
'https://img.nickpic.host/q19ICc.jpg',
'https://img.nickpic.host/q19mHW.jpg',
'https://img.nickpic.host/q19pm1.jpg',
'https://img.nickpic.host/q19vuj.jpg',
'https://img.nickpic.host/q19xwJ.jpg',
'https://img.nickpic.host/q19BWn.jpg',
'https://img.nickpic.host/q19rls.jpg',
'https://img.nickpic.host/q19arx.jpg',
'https://img.nickpic.host/q19st2.jpg',
'https://img.nickpic.host/q193eQ.jpg',
'https://img.nickpic.host/q19jCN.jpg',
'https://img.nickpic.host/q19gzq.jpg',
'https://img.nickpic.host/q19lNO.jpg',
'https://img.nickpic.host/q19cu8.jpg',
'https://img.nickpic.host/q19Som.jpg',
'https://img.nickpic.host/q19qWd.jpg',
'https://img.nickpic.host/q19AlD.jpg',
'https://img.nickpic.host/q19OeP.jpg',
'https://img.nickpic.host/q19EM5.jpg',
'https://img.nickpic.host/q196rM.jpg',
'https://img.nickpic.host/q19CQF.jpg',
'https://img.nickpic.host/q19QNe.jpg',
'https://img.nickpic.host/q19XoX.jpg',
'https://img.nickpic.host/q19iAb.jpg',
'https://img.nickpic.host/q19nzf.jpg',
'https://img.nickpic.host/q19tZ6.jpg',
'https://img.nickpic.host/q19R5p.jpg',
'https://img.nickpic.host/q191MY.jpg',
'https://img.nickpic.host/q19wsG.jpg',
'https://img.nickpic.host/q194kA.jpg',
'https://img.nickpic.host/q19zQz.jpg',
'https://img.nickpic.host/q197Vc.jpg',
'https://img.nickpic.host/q19KoW.jpg',
'https://img.nickpic.host/q19YA1.jpg',
'https://img.nickpic.host/q19H7j.jpg',
'https://img.nickpic.host/q19NZJ.jpg',
'https://img.nickpic.host/q19f5n.jpg',
'https://img.nickpic.host/q190Rs.jpg',
'https://img.nickpic.host/q192k2.jpg',
'https://img.nickpic.host/q19esQ.jpg',
'https://img.nickpic.host/q19kUx.jpg',
'https://img.nickpic.host/q19JVN.jpg',
'https://img.nickpic.host/q19PpO.jpg',
'https://img.nickpic.host/q19TEm.jpg',
'https://img.nickpic.host/q19Zdq.jpg',
'https://img.nickpic.host/q19W78.jpg',
'https://img.nickpic.host/q19y5d.jpg',
'https://img.nickpic.host/q1eGRD.jpg',
'https://img.nickpic.host/q1eIJ5.jpg',
'https://img.nickpic.host/q1eosP.jpg',
'https://img.nickpic.host/q1epUM.jpg',
'https://img.nickpic.host/q1evfF.jpg',
'https://img.nickpic.host/q1eBpe.jpg',
'https://img.nickpic.host/q1ebEX.jpg',
'https://img.nickpic.host/q1er8b.jpg',
'https://img.nickpic.host/q1esdf.jpg',
'https://img.nickpic.host/q1eFS6.jpg',
'https://img.nickpic.host/q1ea1p.jpg',
'https://img.nickpic.host/q1ejJY.jpg',
'https://img.nickpic.host/q1e53A.jpg',
'https://img.nickpic.host/q1eSXG.jpg',
'https://img.nickpic.host/q1ecfz.jpg',
'https://img.nickpic.host/q1eqvc.jpg',
'https://img.nickpic.host/q1euEW.jpg',
'https://img.nickpic.host/q1eA81.jpg',
'https://img.nickpic.host/q1eEyj.jpg',
'https://img.nickpic.host/q1ehSJ.jpg',
'https://img.nickpic.host/q1e61n.jpg',
'https://img.nickpic.host/q1eCLs.jpg',
'https://img.nickpic.host/q1eU32.jpg',
'https://img.nickpic.host/q1eXXQ.jpg',
'https://img.nickpic.host/q1ei0x.jpg',
'https://img.nickpic.host/q1etvN.jpg',
'https://img.nickpic.host/q1eMOO.jpg',
'https://img.nickpic.host/q1eRKm.jpg',
'https://img.nickpic.host/q1e1y8.jpg',
'https://img.nickpic.host/q1eDcq.jpg',
'https://img.nickpic.host/q1ew1d.jpg',
'https://img.nickpic.host/q1ezLD.jpg',
'https://img.nickpic.host/q1e8F5.jpg',
'https://img.nickpic.host/q1eKXP.jpg',
'https://img.nickpic.host/q1eY0M.jpg',
'https://img.nickpic.host/q1eNxF.jpg',
'https://img.nickpic.host/q1eVOe.jpg',
'https://img.nickpic.host/q1efKX.jpg',
'https://img.nickpic.host/q1e2Gb.jpg',
'https://img.nickpic.host/q1e9cf.jpg',
'https://img.nickpic.host/q1ee46.jpg',
'https://img.nickpic.host/q1ekPp.jpg',
'https://img.nickpic.host/q1ePiA.jpg',
'https://img.nickpic.host/q1eLFY.jpg',
'https://img.nickpic.host/q1eT2G.jpg',
'https://img.nickpic.host/q1eZxz.jpg',
'https://img.nickpic.host/q1edhc.jpg',
'https://img.nickpic.host/q1eyKW.jpg',
'https://img.nickpic.host/q1kIG1.jpg',
'https://img.nickpic.host/q1kmgj.jpg',
'https://img.nickpic.host/q1ko4J.jpg',
'https://img.nickpic.host/q1kpPn.jpg',
'https://img.nickpic.host/q1kxas.jpg',
'https://img.nickpic.host/q1kBi2.jpg',
'https://img.nickpic.host/q1kb2Q.jpg',
'https://img.nickpic.host/q1ksBx.jpg',
'https://img.nickpic.host/q1k3hN.jpg',
'https://img.nickpic.host/q1kFYO.jpg',
'https://img.nickpic.host/q1kjIm.jpg',
'https://img.nickpic.host/q1klg8.jpg',
'https://img.nickpic.host/q1k5Dq.jpg',
'https://img.nickpic.host/q1kSPd.jpg',
'https://img.nickpic.host/q1kgaD.jpg',
'https://img.nickpic.host/q1kqn5.jpg',
'https://img.nickpic.host/q1ku2P.jpg',
'https://img.nickpic.host/q1kEBM.jpg',
'https://img.nickpic.host/q1kO6F.jpg',
'https://img.nickpic.host/q1khYe.jpg',
'https://img.nickpic.host/q1kCIX.jpg',
'https://img.nickpic.host/q1kUDf.jpg',
'https://img.nickpic.host/q1kQqb.jpg',
'https://img.nickpic.host/q1kXT6.jpg',
'https://img.nickpic.host/q1knjp.jpg',
'https://img.nickpic.host/q1ktnY.jpg',
'https://img.nickpic.host/q1kM9A.jpg',
'https://img.nickpic.host/q1k1bG.jpg',
'https://img.nickpic.host/q1k46z.jpg',
'https://img.nickpic.host/q1kDHc.jpg',
'https://img.nickpic.host/q1kzIW.jpg',
'https://img.nickpic.host/q1k7q1.jpg',
'https://img.nickpic.host/q1k8wj.jpg',
'https://img.nickpic.host/q1kKTJ.jpg',
'https://img.nickpic.host/q1kHjn.jpg',
'https://img.nickpic.host/q1kNts.jpg',
'https://img.nickpic.host/q1kV92.jpg',
'https://img.nickpic.host/q1k0bQ.jpg',
'https://img.nickpic.host/q1k2Cx.jpg',
'https://img.nickpic.host/q1k9HN.jpg',
'https://img.nickpic.host/q1kkmO.jpg',
'https://img.nickpic.host/q1kJum.jpg',
'https://img.nickpic.host/q1kLw8.jpg',
'https://img.nickpic.host/q1kPWq.jpg',
'https://img.nickpic.host/q1kWjd.jpg',
'https://img.nickpic.host/q1kZtD.jpg',
'https://img.nickpic.host/q1kde5.jpg',
'https://img.nickpic.host/q1JGbP.jpg',
'https://img.nickpic.host/q1JICM.jpg',
'https://img.nickpic.host/q1JmNF.jpg',
'https://img.nickpic.host/q1Jpme.jpg',
'https://img.nickpic.host/q1JvuX.jpg',
'https://img.nickpic.host/q1Jxzb.jpg',
'https://img.nickpic.host/q1JBWf.jpg',
'https://img.nickpic.host/q1Jrl6.jpg',
'https://img.nickpic.host/q1JsMp.jpg',
'https://img.nickpic.host/q1J3eY.jpg',
'https://img.nickpic.host/q1JarA.jpg',
'https://img.nickpic.host/q1JjQG.jpg',
'https://img.nickpic.host/q1JlNz.jpg',
'https://img.nickpic.host/q1JSoc.jpg',
'https://img.nickpic.host/q1JcuW.jpg',
'https://img.nickpic.host/q1Jgz1.jpg',
'https://img.nickpic.host/q1JqZj.jpg',
'https://img.nickpic.host/q1JAlJ.jpg',
'https://img.nickpic.host/q1JEMn.jpg',
'https://img.nickpic.host/q1JOks.jpg',
'https://img.nickpic.host/q1J6r2.jpg',
'https://img.nickpic.host/q1JCQQ.jpg',
'https://img.nickpic.host/q1JQVx.jpg',
'https://img.nickpic.host/q1JXoN.jpg',
'https://img.nickpic.host/q1JiAO.jpg',
'https://img.nickpic.host/q1Jn7m.jpg',
'https://img.nickpic.host/q1JtZ8.jpg',
'https://img.nickpic.host/q1JR5q.jpg',
'https://img.nickpic.host/q1J4kD.jpg',
'https://img.nickpic.host/q1JzQP.jpg',
'https://img.nickpic.host/q1J7VM.jpg',
'https://img.nickpic.host/q1JKpF.jpg',
'https://img.nickpic.host/q1JH7X.jpg',
'https://img.nickpic.host/q1JNdb.jpg',
'https://img.nickpic.host/q1Jf5f.jpg',
'https://img.nickpic.host/q1J0R6.jpg',
'https://img.nickpic.host/q1J2Jp.jpg',
'https://img.nickpic.host/q1JesY.jpg',
'https://img.nickpic.host/q1JJfG.jpg',
'https://img.nickpic.host/q1JkUA.jpg',
'https://img.nickpic.host/q1JTEc.jpg',
'https://img.nickpic.host/q1JW7W.jpg',
'https://img.nickpic.host/q1JZd1.jpg',
'https://img.nickpic.host/q1JySj.jpg',
'https://img.nickpic.host/q1LGRJ.jpg',
'https://img.nickpic.host/q1LIJn.jpg',
'https://img.nickpic.host/q1Lo3s.jpg',
'https://img.nickpic.host/q1LpU2.jpg',
'https://img.nickpic.host/q1LvfQ.jpg',
'https://img.nickpic.host/q1LBvx.jpg',
'https://img.nickpic.host/q1LbEN.jpg',
'https://img.nickpic.host/q1Lr8O.jpg',
'https://img.nickpic.host/q1Lsym.jpg',
'https://img.nickpic.host/q1LFS8.jpg',
'https://img.nickpic.host/q1La1q.jpg',
'https://img.nickpic.host/q1LjJd.jpg',
'https://img.nickpic.host/q1L53D.jpg',
'https://img.nickpic.host/q1LSX5.jpg',
'https://img.nickpic.host/q1LqvM.jpg',
'https://img.nickpic.host/q1LcfP.jpg',
'https://img.nickpic.host/q1LuOF.jpg',
'https://img.nickpic.host/q1LA8e.jpg',
'https://img.nickpic.host/q1LEyX.jpg',
'https://img.nickpic.host/q1Lhcb.jpg',
'https://img.nickpic.host/q1L61f.jpg',
'https://img.nickpic.host/q1LUFp.jpg',
'https://img.nickpic.host/q1LCL6.jpg',
'https://img.nickpic.host/q1LXXY.jpg',
'https://img.nickpic.host/q1Li0A.jpg',
'https://img.nickpic.host/q1LtxG.jpg',
'https://img.nickpic.host/q1LMOz.jpg',
'https://img.nickpic.host/q1LRKc.jpg',
'https://img.nickpic.host/q1L1yW.jpg',
'https://img.nickpic.host/q1LDc1.jpg',
'https://img.nickpic.host/q1Lw4j.jpg',
'https://img.nickpic.host/q1LzLJ.jpg',
'https://img.nickpic.host/q1L8Fn.jpg',
'https://img.nickpic.host/q1LKis.jpg',
'https://img.nickpic.host/q1LY02.jpg',
'https://img.nickpic.host/q1LNxQ.jpg',
'https://img.nickpic.host/q1LVhx.jpg',
'https://img.nickpic.host/q1L9gm.jpg',
'https://img.nickpic.host/q1LfKN.jpg',
'https://img.nickpic.host/q1L2GO.jpg',
'https://img.nickpic.host/q1LkPq.jpg',
'https://img.nickpic.host/q1Le48.jpg',
'https://img.nickpic.host/q1LLFd.jpg',
'https://img.nickpic.host/q1LPiD.jpg',
'https://img.nickpic.host/q1LT25.jpg',
'https://img.nickpic.host/q1LdhM.jpg',
'https://img.nickpic.host/q1LyYF.jpg',
'https://img.nickpic.host/q1LZxP.jpg',
'https://img.nickpic.host/q1PIGe.jpg',
'https://img.nickpic.host/q1PmgX.jpg',
'https://img.nickpic.host/q1PoDb.jpg',
'https://img.nickpic.host/q1PpPf.jpg',
'https://img.nickpic.host/q1Pxa6.jpg',
'https://img.nickpic.host/q1PBnp.jpg',
'https://img.nickpic.host/q1Pb2Y.jpg',
'https://img.nickpic.host/q1PsBA.jpg',
'https://img.nickpic.host/q1P36G.jpg',
'https://img.nickpic.host/q1PFYz.jpg',
'https://img.nickpic.host/q1PjIc.jpg',
'https://img.nickpic.host/q1PlgW.jpg',
'https://img.nickpic.host/q1P5D1.jpg',
'https://img.nickpic.host/q1PSTj.jpg',
'https://img.nickpic.host/q1Pqnn.jpg',
'https://img.nickpic.host/q1PgaJ.jpg',
'https://img.nickpic.host/q1Pu9s.jpg',
'https://img.nickpic.host/q1PEB2.jpg',
'https://img.nickpic.host/q1PO6Q.jpg',
'https://img.nickpic.host/q1PCIN.jpg',
'https://img.nickpic.host/q1PhHx.jpg',
'https://img.nickpic.host/q1PQqO.jpg',
'https://img.nickpic.host/q1PUwm.jpg',
'https://img.nickpic.host/q1PXT8.jpg',
'https://img.nickpic.host/q1Pnjq.jpg',
'https://img.nickpic.host/q1Ptnd.jpg',
'https://img.nickpic.host/q1PM9D.jpg',
'https://img.nickpic.host/q1P46P.jpg',
'https://img.nickpic.host/q1P1b5.jpg',
'https://img.nickpic.host/q1PDHM.jpg',
'https://img.nickpic.host/q1PzmF.jpg',
'https://img.nickpic.host/q1P7qe.jpg',
'https://img.nickpic.host/q1P8wX.jpg',
'https://img.nickpic.host/q1PKWb.jpg',
'https://img.nickpic.host/q1PHjf.jpg',
'https://img.nickpic.host/q1PNt6.jpg',
'https://img.nickpic.host/q1PVep.jpg',
'https://img.nickpic.host/q1P0bY.jpg',
'https://img.nickpic.host/q1P2CA.jpg',
'https://img.nickpic.host/q1P9NG.jpg',
'https://img.nickpic.host/q1Pkmz.jpg',
'https://img.nickpic.host/q1PJuc.jpg']
let ke = sasu[Math.floor(Math.random() * sasu.length)]
ninte = await getBuffer(ke)
const sic =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const sese = sic[Math.floor(Math.random() * sic.length)]
cnf.sendMessage(from, ninte, image, { caption: sese, quoted: mek })
addFilter(from)
break

case prefix+'uzaki':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
const uza =['https://img.nickpic.host/q1HiuD.jpg',
'https://img.nickpic.host/q1HXmd.jpg',
'https://img.nickpic.host/q1HQNq.jpg',
'https://img.nickpic.host/q1HCC8.jpg',
'https://img.nickpic.host/q1HEtN.jpg',
'https://img.nickpic.host/q1H6rm.jpg',
'https://img.nickpic.host/q1HOeO.jpg',
'https://img.nickpic.host/q1HAlx.jpg',
'https://img.nickpic.host/q1Hgw2.jpg',
'https://img.nickpic.host/q1HqWQ.jpg',
'https://img.nickpic.host/q1Hnz5.jpg',
'https://img.nickpic.host/q1HtWP.jpg',
'https://img.nickpic.host/q1HRlM.jpg',
'https://img.nickpic.host/q1H1MF.jpg',
'https://img.nickpic.host/q1H4ee.jpg',
'https://img.nickpic.host/q1HwrX.jpg',
'https://img.nickpic.host/q1H7Nf.jpg',
'https://img.nickpic.host/q1HKo6.jpg',
'https://img.nickpic.host/q1HzQb.jpg',
'https://img.nickpic.host/q1HYAp.jpg',
'https://img.nickpic.host/q1HHzY.jpg',
'https://img.nickpic.host/q1HNZA.jpg',
'https://img.nickpic.host/q1Hf5G.jpg',
'https://img.nickpic.host/q1H0Mz.jpg',
'https://img.nickpic.host/q1H2kc.jpg',
'https://img.nickpic.host/q1HerW.jpg',
'https://img.nickpic.host/q1HkQ1.jpg',
'https://img.nickpic.host/q1HJVj.jpg',
'https://img.nickpic.host/q1HPoJ.jpg',
'https://img.nickpic.host/q1HTAn.jpg',
'https://img.nickpic.host/q1HW7s.jpg',
'https://img.nickpic.host/q1HZZ2.jpg',
'https://img.nickpic.host/q1Hy5Q.jpg',
'https://img.nickpic.host/q1NGRx.jpg',
'https://img.nickpic.host/q1NIkN.jpg',
'https://img.nickpic.host/q1NosO.jpg',
'https://img.nickpic.host/q1NpUm.jpg',
'https://img.nickpic.host/q1NvV8.jpg',
'https://img.nickpic.host/q1NBpq.jpg',
'https://img.nickpic.host/q1NbAd.jpg',
'https://img.nickpic.host/q1Nr7D.jpg',
'https://img.nickpic.host/q1Nsd5.jpg',
'https://img.nickpic.host/q1NF5P.jpg',
'https://img.nickpic.host/q1NaRM.jpg',
'https://img.nickpic.host/q1NjJF.jpg',
'https://img.nickpic.host/q1N5se.jpg',
'https://img.nickpic.host/q1NSUX.jpg',
'https://img.nickpic.host/q1Ncfb.jpg',
'https://img.nickpic.host/q1Nqpf.jpg',
'https://img.nickpic.host/q1NuE6.jpg',
'https://img.nickpic.host/q1NA8p.jpg',
'https://img.nickpic.host/q1NEdY.jpg',
'https://img.nickpic.host/q1NhSA.jpg',
'https://img.nickpic.host/q1N61G.jpg',
'https://img.nickpic.host/q1NCJz.jpg',
'https://img.nickpic.host/q1NU3c.jpg',
'https://img.nickpic.host/q1NXUW.jpg',
'https://img.nickpic.host/q1Nif1.jpg',
'https://img.nickpic.host/q1Ntvj.jpg',
'https://img.nickpic.host/q1NMEJ.jpg',
'https://img.nickpic.host/q1NR8n.jpg',
'https://img.nickpic.host/q1N1ys.jpg',
'https://img.nickpic.host/q1NDS2.jpg',
'https://img.nickpic.host/q1Nw1Q.jpg',
'https://img.nickpic.host/q1NzLx.jpg',
'https://img.nickpic.host/q1N83N.jpg',
'https://img.nickpic.host/q1NKXO.jpg',
'https://img.nickpic.host/q1NNv8.jpg',
'https://img.nickpic.host/q1NY0m.jpg',
'https://img.nickpic.host/q1NVOq.jpg',
'https://img.nickpic.host/q1Nf8d.jpg',
'https://img.nickpic.host/q1N0yD.jpg',
'https://img.nickpic.host/q1N9c5.jpg',
'https://img.nickpic.host/q1Ne1P.jpg',
'https://img.nickpic.host/q1NkLM.jpg',
'https://img.nickpic.host/q1NLFF.jpg',
'https://img.nickpic.host/q1NPXe.jpg',
'https://img.nickpic.host/q1NT0X.jpg',
'https://img.nickpic.host/q1NZxb.jpg',
'https://img.nickpic.host/q1NdOf.jpg',
'https://img.nickpic.host/q1NyK6.jpg',
'https://img.nickpic.host/q1VIGp.jpg',
'https://img.nickpic.host/q1VmcY.jpg',
'https://img.nickpic.host/q1Vo4A.jpg',
'https://img.nickpic.host/q1VpPG.jpg',
'https://img.nickpic.host/q1VxFz.jpg',
'https://img.nickpic.host/q1VBic.jpg',
'https://img.nickpic.host/q1Vb0W.jpg',
'https://img.nickpic.host/q1V3hj.jpg',
'https://img.nickpic.host/q1Vsx1.jpg',
'https://img.nickpic.host/q1VFKJ.jpg',
'https://img.nickpic.host/q1Vlgs.jpg',
'https://img.nickpic.host/q1VjGn.jpg',
'https://img.nickpic.host/q1VSPQ.jpg',
'https://img.nickpic.host/q1V542.jpg',
'https://img.nickpic.host/q1Vgax.jpg',
'https://img.nickpic.host/q1VqiN.jpg',
'https://img.nickpic.host/q1VEBm.jpg',
'https://img.nickpic.host/q1Vu2O.jpg',
'https://img.nickpic.host/q1VOh8.jpg',
'https://img.nickpic.host/q1VhYq.jpg',
'https://img.nickpic.host/q1VCGd.jpg',
'https://img.nickpic.host/q1VQgD.jpg',
'https://img.nickpic.host/q1VUD5.jpg',
'https://img.nickpic.host/q1VXPP.jpg',
'https://img.nickpic.host/q1VnaM.jpg',
'https://img.nickpic.host/q1VtnF.jpg',
'https://img.nickpic.host/q1VM2e.jpg',
'https://img.nickpic.host/q1V46b.jpg',
'https://img.nickpic.host/q1V1BX.jpg',
'https://img.nickpic.host/q1VDYf.jpg',
'https://img.nickpic.host/q1V7qp.jpg',
'https://img.nickpic.host/q1VzI6.jpg',
'https://img.nickpic.host/q1V8DY.jpg',
'https://img.nickpic.host/q1VKTA.jpg',
'https://img.nickpic.host/q1VHjG.jpg',
'https://img.nickpic.host/q1VV9c.jpg',
'https://img.nickpic.host/q1VNnz.jpg',
'https://img.nickpic.host/q1V261.jpg',
'https://img.nickpic.host/q1V0BW.jpg',
'https://img.nickpic.host/q1VkIJ.jpg',
'https://img.nickpic.host/q1V9Hj.jpg',
'https://img.nickpic.host/q1VJqn.jpg',
'https://img.nickpic.host/q1VLws.jpg',
'https://img.nickpic.host/q1VPT2.jpg',
'https://img.nickpic.host/q1VZtx.jpg',
'https://img.nickpic.host/q1VWjQ.jpg',
'https://img.nickpic.host/q1Vd9N.jpg',
'https://img.nickpic.host/q1fGbO.jpg',
'https://img.nickpic.host/q1fICm.jpg',
'https://img.nickpic.host/q1fpmq.jpg',
'https://img.nickpic.host/q1fmH8.jpg',
'https://img.nickpic.host/q1fvqd.jpg',
'https://img.nickpic.host/q1fxwD.jpg',
'https://img.nickpic.host/q1fBW5.jpg',
'https://img.nickpic.host/q1fstM.jpg',
'https://img.nickpic.host/q1frjP.jpg',
'https://img.nickpic.host/q1f3eF.jpg',
'https://img.nickpic.host/q1fabe.jpg',
'https://img.nickpic.host/q1fjCX.jpg',
'https://img.nickpic.host/q1flNb.jpg',
'https://img.nickpic.host/q1fSmf.jpg',
'https://img.nickpic.host/q1fcu6.jpg',
'https://img.nickpic.host/q1fgzp.jpg',
'https://img.nickpic.host/q1fAlA.jpg',
'https://img.nickpic.host/q1fqWY.jpg',
'https://img.nickpic.host/q1fEMG.jpg',
'https://img.nickpic.host/q1fOez.jpg',
'https://img.nickpic.host/q1f6rc.jpg',
'https://img.nickpic.host/q1fCCW.jpg',
'https://img.nickpic.host/q1fQN1.jpg',
'https://img.nickpic.host/q1fXoj.jpg',
'https://img.nickpic.host/q1fiuJ.jpg',
'https://img.nickpic.host/q1fnzn.jpg',
'https://img.nickpic.host/q1ftZs.jpg',
'https://img.nickpic.host/q1f1MQ.jpg',
'https://img.nickpic.host/q1fRl2.jpg',
'https://img.nickpic.host/q1f4kx.jpg',
'https://img.nickpic.host/q1fwrN.jpg',
'https://img.nickpic.host/q1fzQO.jpg']
let ki = uza[Math.floor(Math.random() * uza.length)]
uzaki = await getBuffer(ki)
const chan =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const kich = chan[Math.floor(Math.random() * chan.length)]
cnf.sendMessage(from, uzaki, image, { caption: kich, quoted: mek })
addFilter(from)
break

case prefix+'hardcore':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
const hard =['https://images2.imgbox.com/22/e4/8TlGS9AD_o.jpg','https://images2.imgbox.com/2e/c5/Yg75xKVD_o.jpg','https://images2.imgbox.com/f9/dd/0rmJGHSd_o.jpg','https://images2.imgbox.com/cc/97/kPer1x0C_o.jpg','https://images2.imgbox.com/33/11/uToROkZb_o.jpg','https://images2.imgbox.com/c0/2c/W4npduHE_o.jpg','https://images2.imgbox.com/8c/4b/8i0ggI5p_o.jpg','https://images2.imgbox.com/69/50/2kHhYrlK_o.jpg','https://images2.imgbox.com/fe/44/qdJmqtuh_o.jpg','https://images2.imgbox.com/0c/9e/xyMelcl5_o.jpg','https://images2.imgbox.com/a1/5d/0DfrATrO_o.jpg','https://images2.imgbox.com/c3/06/6vZNrhTT_o.jpg','https://images2.imgbox.com/56/cb/gi7kMG3p_o.jpg','https://images2.imgbox.com/64/e5/3l9f6QbX_o.jpg','https://images2.imgbox.com/77/05/IC6VxGd7_o.jpg','https://images2.imgbox.com/63/60/wtU6tikf_o.jpg','https://images2.imgbox.com/38/ec/7WS5v37w_o.jpg','https://images2.imgbox.com/c1/cf/iYC8QYDd_o.jpg','https://images2.imgbox.com/b3/fd/5jq1sGdG_o.jpg','https://images2.imgbox.com/91/47/L6b1I6tQ_o.jpg','https://images2.imgbox.com/ea/59/iUVJI7Ov_o.jpg','https://images2.imgbox.com/59/62/LXQ9nBN0_o.jpg','https://images2.imgbox.com/f1/30/u1wjp3G3_o.jpg','https://images2.imgbox.com/f8/dc/OCeIGLWU_o.jpg','https://images2.imgbox.com/15/17/aMWA5wTz_o.jpg','https://images2.imgbox.com/86/6a/MHeVnCLR_o.jpg','https://images2.imgbox.com/64/ff/PJTnIQFJ_o.jpg','https://images2.imgbox.com/57/4a/wW0dhisN_o.jpg','https://images2.imgbox.com/4f/20/kHD2Cg2O_o.jpg','https://images2.imgbox.com/8d/83/9Ul3avZp_o.jpg','https://images2.imgbox.com/29/e2/1CziWTB6_o.jpg','https://images2.imgbox.com/dd/47/YXI1ybTw_o.jpg','https://images2.imgbox.com/67/ce/XdW9AKqf_o.jpg','https://images2.imgbox.com/f2/66/jFe0L8zS_o.jpg','https://images2.imgbox.com/f3/dc/SXelsvoJ_o.jpg','https://images2.imgbox.com/00/49/FHIpUzCN_o.jpg','https://images2.imgbox.com/f1/ad/GJtUOokC_o.jpg','https://images2.imgbox.com/8b/d4/L29qW9ti_o.jpg','https://images2.imgbox.com/e3/25/MGYDTrc0_o.jpg','https://images2.imgbox.com/b1/0e/9bPFme3A_o.jpg','https://images2.imgbox.com/80/a6/WMP2N6gJ_o.jpg','https://images2.imgbox.com/88/b0/9YZiHxtA_o.jpg','https://images2.imgbox.com/f7/06/4mS9Po2i_o.jpg','https://images2.imgbox.com/af/1c/lYu7Qxtr_o.jpg','https://images2.imgbox.com/bb/49/o5Puq8vG_o.jpg','https://images2.imgbox.com/61/9a/xkV5cXtc_o.jpg','https://images2.imgbox.com/1d/11/wG8rhAKD_o.jpg','https://images2.imgbox.com/d1/7a/A3ciO8sm_o.jpg','https://images2.imgbox.com/e9/f2/HoHwxdiY_o.jpg','https://images2.imgbox.com/e9/e7/ZgCKmZod_o.jpg','https://images2.imgbox.com/8e/a1/VMf9w4QG_o.jpg','https://images2.imgbox.com/f1/c6/8aT3u4Dv_o.jpg','https://images2.imgbox.com/be/79/lWmB7rsk_o.jpg','https://images2.imgbox.com/ca/90/6EkcfYRX_o.jpg','https://images2.imgbox.com/80/8f/vqnETfma_o.jpg','https://images2.imgbox.com/ee/5a/55WBDfF1_o.jpg','https://images2.imgbox.com/ce/79/EF2RhVWo_o.jpg','https://images2.imgbox.com/a3/51/MinQ1lew_o.jpg','https://images2.imgbox.com/9b/ef/qHRMU5p1_o.jpg','https://images2.imgbox.com/be/5b/yVDygb0B_o.pnghttps://images2.imgbox.com/82/7e/LSnstUdE_o.pnghttps://images2.imgbox.com/20/34/qrLs7RFi_o.pnghttps://images2.imgbox.com/a2/67/opmFTmj2_o.pnghttps://images2.imgbox.com/15/62/dJ01vhkP_o.pnghttps://images2.imgbox.com/bd/51/xnup8Jg7_o.pnghttps://images2.imgbox.com/8c/02/VZMKUojO_o.pnghttps://images2.imgbox.com/66/ef/IUsxbWir_o.pnghttps://images2.imgbox.com/d4/59/nAJvzkTk_o.pnghttps://images2.imgbox.com/d6/02/6oYku1mK_o.pnghttps://images2.imgbox.com/20/22/VCversLb_o.pnghttps://images2.imgbox.com/0a/40/uF8wlkP3_o.pnghttps://images2.imgbox.com/86/22/DsCDxaT0_o.pnghttps://images2.imgbox.com/a5/0e/AF7TIUpD_o.pnghttps://images2.imgbox.com/f0/35/ZykjHTRw_o.pnghttps://images2.imgbox.com/63/e7/5mrJGqMA_o.pnghttps://images2.imgbox.com/9f/50/bvLT4bvo_o.pnghttps://images2.imgbox.com/ed/b1/GAGhixjY_o.pnghttps://images2.imgbox.com/18/b3/iRixioS4_o.jpg','https://images2.imgbox.com/40/6e/UJGmIfz6_o.pnghttps://images2.imgbox.com/ee/68/Og8pLAfh_o.pnghttps://images2.imgbox.com/28/69/x2BYd3aN_o.jpg','https://images2.imgbox.com/12/7f/YPJVK2V2_o.pnghttps://images2.imgbox.com/dc/cc/MuZvxcyX_o.jpg','https://images2.imgbox.com/14/8e/KSlK15Cd_o.jpg','https://images2.imgbox.com/b2/23/Mt4ozqNR_o.jpg','https://images2.imgbox.com/fe/d1/I6ucWp2z_o.jpg','https://images2.imgbox.com/60/66/IjLRxW0l_o.jpg','https://images2.imgbox.com/0d/68/OITukUMo_o.jpg','https://images2.imgbox.com/75/68/gg1uKfNv_o.jpg','https://images2.imgbox.com/43/06/tfTjvGa0_o.jpg','https://images2.imgbox.com/52/ea/QNdZaMn4_o.jpg','https://images2.imgbox.com/22/22/jPJmDpSM_o.jpg','https://images2.imgbox.com/08/96/qKNrmErZ_o.jpg','https://images2.imgbox.com/10/8a/KHdNRThM_o.jpg','https://images2.imgbox.com/ab/93/zESKBNRb_o.jpg','https://images2.imgbox.com/81/69/9QQfvbIN_o.jpg','https://images2.imgbox.com/26/ff/ekeJBAMG_o.jpg','https://images2.imgbox.com/3c/23/ZVDSZSZH_o.jpg','https://images2.imgbox.com/29/40/2HFbS4Jg_o.jpg','https://images2.imgbox.com/fb/ef/Ye2QAr4M_o.jpg','https://images2.imgbox.com/b4/f9/AcQmsLdb_o.jpg','https://images2.imgbox.com/d7/4b/lLUMd8GC_o.jpg',
'https://images2.imgbox.com/d7/36/FdAANnHy_o.jpg','https://images2.imgbox.com/06/26/ftq9AgQ3_o.jpg','https://images2.imgbox.com/d2/b6/nGCSVEM2_o.jpg','https://images2.imgbox.com/56/f7/HDPDTyIE_o.jpg','https://images2.imgbox.com/c9/fc/OveuvW3w_o.jpg','https://images2.imgbox.com/0b/36/gnpHKxlL_o.jpg','https://images2.imgbox.com/c1/1a/FTmQlLmI_o.jpg','https://images2.imgbox.com/e9/2d/MO0dvlOs_o.jpg','https://images2.imgbox.com/c8/a0/kE1HWr1J_o.jpg','https://images2.imgbox.com/96/e1/JjzeuMav_o.jpg','https://images2.imgbox.com/03/47/Ofx2EDQ1_o.jpg','https://images2.imgbox.com/05/77/JP8HSJbz_o.jpg','https://images2.imgbox.com/88/74/XJ09uLK7_o.jpg','https://images2.imgbox.com/48/dd/MsDsCY98_o.jpg','https://images2.imgbox.com/0b/20/4eLqg1XN_o.jpg','https://images2.imgbox.com/ba/bd/MpKdPmhR_o.jpg','https://images2.imgbox.com/10/bf/KduY2fuV_o.jpg','https://images2.imgbox.com/c2/84/bWonSasV_o.jpg','https://images2.imgbox.com/06/63/o2rU4oNs_o.jpg','https://images2.imgbox.com/34/2f/emoDyvEi_o.jpg','https://images2.imgbox.com/31/79/Q7LwkiEG_o.jpg','https://images2.imgbox.com/b0/65/tMHswPk3_o.jpg','https://images2.imgbox.com/8d/a8/hrgfrOaA_o.jpg','https://images2.imgbox.com/9f/2e/WUBghzNZ_o.jpg','https://images2.imgbox.com/26/10/wD7L6X96_o.jpg','https://images2.imgbox.com/64/11/RiJOnnjA_o.jpg','https://images2.imgbox.com/e4/75/D1KsDteF_o.jpg','https://images2.imgbox.com/12/77/aXgdENcO_o.jpg','https://images2.imgbox.com/fc/8c/ZX4YTTGX_o.jpg','https://images2.imgbox.com/3c/e3/I3PzkcjJ_o.jpg','https://images2.imgbox.com/2b/79/E7AsjwY6_o.jpg','https://images2.imgbox.com/51/94/3NglMYhv_o.jpg','https://images2.imgbox.com/03/94/BnaWDIdN_o.jpg','https://images2.imgbox.com/63/33/tDlF8jGk_o.jpg','https://images2.imgbox.com/e9/aa/9pRoLXOe_o.jpg','https://images2.imgbox.com/34/94/x6VJ0mXz_o.jpg','https://images2.imgbox.com/b3/b4/ABFqIkDZ_o.jpg','https://images2.imgbox.com/7e/31/wW6FhnlO_o.jpg','https://images2.imgbox.com/36/66/ZMFukcjr_o.jpg','https://images2.imgbox.com/d9/5e/KHBkWiIj_o.jpg','https://images2.imgbox.com/cb/d4/fB1ZQTgw_o.jpg','https://images2.imgbox.com/1f/33/tPdOAB3f_o.jpg','https://images2.imgbox.com/82/bf/1AHbSsK8_o.jpg','https://images2.imgbox.com/b0/3d/G9FqO7OP_o.jpg','https://images2.imgbox.com/e3/57/e3ljQK8e_o.jpg','https://images2.imgbox.com/2a/f9/3Go1SHll_o.jpg','https://images2.imgbox.com/59/f7/MNhQVi4A_o.jpg','https://images2.imgbox.com/a8/95/VAXyliJl_o.jpg','https://images2.imgbox.com/a8/8c/0Uc54iF6_o.jpg','https://images2.imgbox.com/7d/c3/IQo8eVAS_o.jpg','https://images2.imgbox.com/32/6f/mlLT7xfh_o.jpg','https://images2.imgbox.com/09/86/anT3XEGY_o.jpg','https://images2.imgbox.com/b3/4e/aHDLce9g_o.jpg','https://images2.imgbox.com/6c/03/nBDDQBXi_o.jpg','https://images2.imgbox.com/e0/b9/vxPZ1NUJ_o.jpg','https://images2.imgbox.com/b5/06/8lAqMB9p_o.jpg','https://images2.imgbox.com/2b/fe/hMJ1joqK_o.jpg','https://images2.imgbox.com/f8/41/qJmHaSBc_o.jpg','https://images2.imgbox.com/cf/8b/BHdtsAf0_o.jpg','https://images2.imgbox.com/b2/cd/bC6cVQu4_o.jpg','https://images2.imgbox.com/23/f7/dL4YoC7C_o.jpg','https://images2.imgbox.com/4d/94/ExQqzPiy_o.jpg','https://images2.imgbox.com/9c/99/609wFnJh_o.jpg','https://images2.imgbox.com/dc/01/jQLUc0Ym_o.jpg','https://images2.imgbox.com/33/6f/he7cSAUe_o.jpg','https://images2.imgbox.com/d1/a0/bkS0NUY2_o.jpg','https://images2.imgbox.com/f8/23/LfFlEsUd_o.jpg','https://images2.imgbox.com/30/80/ESExoiXH_o.jpg','https://images2.imgbox.com/2f/72/EKa3AO6y_o.jpg','https://images2.imgbox.com/3d/8f/9VT9qtdo_o.jpg','https://images2.imgbox.com/03/92/5zuacszK_o.jpg','https://images2.imgbox.com/59/af/bffd6qUH_o.jpg','https://images2.imgbox.com/9c/69/mmTsrYeo_o.jpg','https://images2.imgbox.com/ac/54/GugseMkO_o.jpg','https://images2.imgbox.com/ed/0a/Pb6EbdVK_o.jpg','https://images2.imgbox.com/df/09/khBQtMHD_o.jpg','https://images2.imgbox.com/a5/23/BsCvdh6y_o.jpg','https://images2.imgbox.com/bf/8a/0pSwAGSy_o.jpg','https://images2.imgbox.com/c8/b7/LZpYsr5p_o.jpg','https://images2.imgbox.com/1e/18/AM9YUvQi_o.jpg','https://images2.imgbox.com/47/47/Pq07Vlan_o.jpg','https://images2.imgbox.com/f1/49/4lrhzUPM_o.jpg','https://images2.imgbox.com/4f/22/tk5gxLrj_o.jpg','https://images2.imgbox.com/fa/c6/QBFOBwrU_o.jpg','https://images2.imgbox.com/29/9d/hHuM56Ay_o.jpg','https://images2.imgbox.com/24/78/VGS2OV3s_o.jpg','https://images2.imgbox.com/98/23/6t7d4HMn_o.jpg','https://images2.imgbox.com/cc/fe/IpbdbfuH_o.jpg','https://images2.imgbox.com/fb/3e/vMWlz3Eh_o.jpg','https://images2.imgbox.com/10/6c/zWYFK3k1_o.jpg','https://images2.imgbox.com/f1/54/nvdhttWK_o.jpg','https://images2.imgbox.com/d3/c8/dmwEPMj1_o.jpg','https://images2.imgbox.com/d1/f2/o2U5yKtH_o.jpg','https://images2.imgbox.com/3e/38/jii3aDD7_o.jpg','https://images2.imgbox.com/84/86/zmqLDoHR_o.jpg','https://images2.imgbox.com/b4/3d/1eTObRPx_o.jpg','https://images2.imgbox.com/2c/a4/vThUj4dW_o.jpg','https://images2.imgbox.com/bb/c3/2aiSTbbK_o.jpg','https://images2.imgbox.com/65/b4/bEXOkScQ_o.jpg','https://images2.imgbox.com/64/99/UTaUWF55_o.jpg','https://images2.imgbox.com/5c/29/hP6SGtxO_o.jpg','https://images2.imgbox.com/34/de/REn9CAhz_o.jpg',
'https://images2.imgbox.com/eb/d8/rrKZ01gJ_o.jpg','https://images2.imgbox.com/56/5f/Zv7Emzhk_o.jpg','https://images2.imgbox.com/71/34/kAovKtvq_o.jpg','https://images2.imgbox.com/a0/86/4gKrbSVx_o.jpg','https://images2.imgbox.com/f9/ef/muh5avwf_o.jpg','https://images2.imgbox.com/ba/66/gKRNDD6g_o.jpg','https://images2.imgbox.com/d1/91/v3mVyFKR_o.jpg','https://images2.imgbox.com/50/f7/5esmWPpX_o.jpg','https://images2.imgbox.com/8b/b6/6xJhfD62_o.jpg','https://images2.imgbox.com/28/dc/60m0vdPU_o.jpg','https://images2.imgbox.com/3b/af/H9C5cdA0_o.jpg','https://images2.imgbox.com/cd/da/k9HybKDN_o.jpg','https://images2.imgbox.com/e6/1c/M51b3J4q_o.jpg','https://images2.imgbox.com/a0/f0/lYaFaHxH_o.jpg','https://images2.imgbox.com/42/3e/Rh5BtwA3_o.jpg','https://images2.imgbox.com/32/94/Z7riOhsv_o.jpg','https://images2.imgbox.com/ac/63/adfzPkI6_o.jpg','https://images2.imgbox.com/08/12/nd3vwdZM_o.jpg','https://images2.imgbox.com/28/5d/7tqaHYat_o.jpg','https://images2.imgbox.com/18/de/vFBiVvCF_o.jpg','https://images2.imgbox.com/92/58/nRIJQBos_o.jpg','https://images2.imgbox.com/07/f3/QCkgY4k1_o.jpg','https://images2.imgbox.com/63/13/n2icUoyE_o.jpg','https://images2.imgbox.com/df/31/NhkB9gFz_o.jpg','https://images2.imgbox.com/dd/63/VOokPVLq_o.jpg','https://images2.imgbox.com/c0/fa/2fnAMHv5_o.jpg','https://images2.imgbox.com/9f/d0/uW0o1GY1_o.jpg','https://images2.imgbox.com/4d/a7/RjT3Hnfv_o.jpg','https://images2.imgbox.com/09/d4/oTl21bL9_o.jpg','https://images2.imgbox.com/4d/da/YzH3lX8N_o.jpg','https://images2.imgbox.com/4d/75/pRevG1mq_o.jpg','https://images2.imgbox.com/ed/a6/pB58Qfv0_o.jpg','https://images2.imgbox.com/ff/ec/N7hZtvOS_o.jpg','https://images2.imgbox.com/79/48/kLmFcVsl_o.jpg','https://images2.imgbox.com/05/52/bcOzBg9h_o.jpg','https://images2.imgbox.com/3b/16/vyK3tgel_o.jpg','https://images2.imgbox.com/92/89/gkrlbEHy_o.jpg','https://images2.imgbox.com/e7/58/4m4o0bAR_o.jpg','https://images2.imgbox.com/60/61/C7gaznFN_o.jpg','https://images2.imgbox.com/3a/41/RPV8t7iz_o.jpg','https://images2.imgbox.com/09/39/4CdtwK6t_o.jpg','https://images2.imgbox.com/ce/f2/yk3IosKS_o.jpg','https://images2.imgbox.com/7c/15/kNlXdnZD_o.jpg','https://images2.imgbox.com/20/0d/rmnuOpuz_o.jpg','https://images2.imgbox.com/b7/07/ujrVmfaH_o.jpg','https://images2.imgbox.com/e5/f8/B1LS6L9p_o.jpg','https://images2.imgbox.com/38/2d/VWVFR9vJ_o.jpg','https://images2.imgbox.com/a3/99/drz8lHMk_o.jpg','https://images2.imgbox.com/95/00/spxjq1NT_o.jpg','https://images2.imgbox.com/84/c6/XdwZ3ROz_o.jpg','https://images2.imgbox.com/5c/49/b38qhvoe_o.jpg','https://images2.imgbox.com/33/b2/xmm6AVRX_o.jpg','https://images2.imgbox.com/1e/d1/YjUacM3k_o.jpg','https://images2.imgbox.com/38/aa/VmCXB5qY_o.jpg','https://images2.imgbox.com/9a/a8/3Mcm1KN5_o.jpg','https://images2.imgbox.com/87/84/MKmjQwUn_o.jpg','https://images2.imgbox.com/a1/94/D90MWCR2_o.jpg','https://images2.imgbox.com/6e/32/dbcLy0Rn_o.jpg','https://images2.imgbox.com/b2/28/tD4nWOka_o.jpg','https://images2.imgbox.com/71/bd/qWqJXRFo_o.jpg','https://images2.imgbox.com/a8/92/oocysRPQ_o.jpg','https://images2.imgbox.com/54/a6/zyKJDixs_o.jpg','https://images2.imgbox.com/d3/8d/0wdQ8LQa_o.jpg','https://images2.imgbox.com/b6/aa/ewO2BOR3_o.jpg','https://images2.imgbox.com/aa/a5/NsgmCJlV_o.jpg','https://images2.imgbox.com/75/46/GqHaiAlc_o.jpg','https://images2.imgbox.com/aa/97/XsSbvIZu_o.jpg','https://images2.imgbox.com/dd/ec/w4pmiuVy_o.jpg','https://images2.imgbox.com/a0/d9/CSeIEiLR_o.jpg','https://images2.imgbox.com/19/dc/xI8geAHK_o.jpg','https://images2.imgbox.com/76/ee/Q6mWx3Ty_o.jpg','https://images2.imgbox.com/70/49/7BhwMgZb_o.jpg','https://images2.imgbox.com/15/31/4mmfL6gx_o.jpg','https://images2.imgbox.com/a2/9f/igqhzOku_o.jpg','https://images2.imgbox.com/cb/4d/XW2DgOia_o.jpg','https://images2.imgbox.com/cb/63/eYV6mRsK_o.jpg','https://images2.imgbox.com/30/2e/a1Vq5MF9_o.jpg','https://images2.imgbox.com/56/12/isLsjVNC_o.jpg','https://images2.imgbox.com/b1/6b/RSXieWHm_o.jpg','https://images2.imgbox.com/0e/82/c3prD2FW_o.jpg','https://images2.imgbox.com/b8/10/7nkz5S4L_o.jpg','https://images2.imgbox.com/66/47/T7JSaKmV_o.jpg','https://images2.imgbox.com/d4/9d/SBQd9xCs_o.jpg','https://images2.imgbox.com/a0/ef/omUBBxYR_o.jpg','https://images2.imgbox.com/83/77/NXCaSnef_o.jpg','https://images2.imgbox.com/19/e4/KxcwA8YR_o.jpg','https://images2.imgbox.com/f9/05/D9X8jaGz_o.jpg','https://images2.imgbox.com/05/49/Umm6dXum_o.jpg','https://images2.imgbox.com/44/5c/bGxN7ETv_o.jpg','https://images2.imgbox.com/3d/02/8MiEwAXy_o.jpg','https://images2.imgbox.com/1f/ae/4FcJsUPb_o.jpg','https://images2.imgbox.com/3c/34/encnsMXz_o.jpg','https://images2.imgbox.com/0b/75/bxzVBMua_o.jpg','https://images2.imgbox.com/9a/63/Vel5s25o_o.jpg','https://images2.imgbox.com/a9/16/ilOZsNLo_o.jpg','https://images2.imgbox.com/1a/4a/pKZXgXX3_o.jpg','https://images2.imgbox.com/f0/12/uovZVepp_o.jpg','https://images2.imgbox.com/57/48/kOcOiVyU_o.jpg','https://images2.imgbox.com/62/20/I9Pzt2vG_o.jpg','https://images2.imgbox.com/95/85/lNnFlcok_o.jpg','https://images2.imgbox.com/fb/e0/DcRjMJ1B_o.jpg','https://images2.imgbox.com/d1/6b/vnLDlxys_o.jpg',
'https://images2.imgbox.com/38/8f/C46UtK0C_o.jpg','https://images2.imgbox.com/05/b5/uR6aB3lM_o.jpg','https://images2.imgbox.com/64/fd/qjNxwo3O_o.jpg','https://images2.imgbox.com/44/09/hB65Hrn7_o.jpg','https://images2.imgbox.com/cb/2a/D7QXqV3f_o.jpg','https://images2.imgbox.com/95/86/MniVgixC_o.jpg','https://images2.imgbox.com/c2/03/RCv2s9VO_o.jpg','https://images2.imgbox.com/19/06/H0aS1OVV_o.jpg','https://images2.imgbox.com/89/b7/c6eczGXW_o.jpg','https://thumbs2.imgbox.com/13/80/mpeDF7Pb_t.jpg','https://thumbs2.imgbox.com/50/64/6wCWzOXT_t.jpg','https://thumbs2.imgbox.com/08/42/7b4sBSiu_t.jpg','https://thumbs2.imgbox.com/72/81/VCIBRQw2_t.jpg','https://thumbs2.imgbox.com/32/d4/oSHGulZn_t.jpg','https://thumbs2.imgbox.com/37/7e/qV6sP9v7_t.jpg','https://thumbs2.imgbox.com/17/dd/Hm76zIZO_t.jpg','https://thumbs2.imgbox.com/40/3c/sSdIjuhd_t.jpg','https://thumbs2.imgbox.com/e8/09/h8CJOK1V_t.jpg','https://thumbs2.imgbox.com/b4/f4/aR4VeCFj_t.jpg','https://thumbs2.imgbox.com/2a/7d/VywLBESN_t.jpg','https://thumbs2.imgbox.com/24/e5/uFwTUcN0_t.jpg','https://thumbs2.imgbox.com/87/0a/Lkie8xD5_t.jpg','https://thumbs2.imgbox.com/c8/29/e7zAI8Gb_t.jpg','https://thumbs2.imgbox.com/f7/8c/6TzORnLR_t.jpg','https://thumbs2.imgbox.com/59/aa/i5miJPWC_t.jpg','https://thumbs2.imgbox.com/46/81/1RkTtBmD_t.jpg','https://thumbs2.imgbox.com/47/ed/fRInr3Et_t.jpg','https://thumbs2.imgbox.com/52/93/QC6mPago_t.jpg','https://thumbs2.imgbox.com/a6/5a/AW8UqRaZ_t.jpg','https://thumbs2.imgbox.com/f4/f0/yXW4Sis9_t.jpg','https://thumbs2.imgbox.com/d7/f8/RNXNnLSF_t.jpg','https://thumbs2.imgbox.com/31/d3/eMBb5rVu_t.jpg','https://thumbs2.imgbox.com/e3/9d/FLbfOtLn_t.jpg','https://thumbs2.imgbox.com/35/93/FbXVr0Hi_t.jpg','https://thumbs2.imgbox.com/8f/9e/Dywr8UDj_t.jpg','https://thumbs2.imgbox.com/76/bd/78rES4KK_t.jpg','https://thumbs2.imgbox.com/24/f8/y5IXhzV0_t.jpg','https://thumbs2.imgbox.com/c7/59/GadDM10p_t.jpg','https://thumbs2.imgbox.com/25/64/Bk88YMHd_t.jpg','https://thumbs2.imgbox.com/be/fa/NiFckiql_t.jpg','https://thumbs2.imgbox.com/96/a9/D9urxTRF_t.jpg','https://thumbs2.imgbox.com/65/e1/eOH7tbFL_t.jpg','https://thumbs2.imgbox.com/c4/34/S8ahMqh6_t.jpg','https://thumbs2.imgbox.com/be/c3/bvclKuE5_t.jpg','https://thumbs2.imgbox.com/46/61/AwzvKZ0q_t.jpg','https://thumbs2.imgbox.com/08/67/mxi0jkHh_t.jpg','https://thumbs2.imgbox.com/ba/d1/tvnscMkF_t.jpg','https://thumbs2.imgbox.com/e4/68/b7Jrav3j_t.jpg','https://thumbs2.imgbox.com/cc/55/BLES4ujw_t.jpg','https://thumbs2.imgbox.com/79/9d/ESkaLTHg_t.jpg','https://thumbs2.imgbox.com/d8/35/8iiXIdHf_t.jpg','https://thumbs2.imgbox.com/56/20/OigKIPL3_t.jpg','https://thumbs2.imgbox.com/47/ec/Y5VMK7K4_t.jpg','https://thumbs2.imgbox.com/12/75/dcmoQIu6_t.jpg','https://thumbs2.imgbox.com/f8/ee/c9S0POM9_t.jpg','https://thumbs2.imgbox.com/ab/b6/XyUO10D5_t.jpg','https://thumbs2.imgbox.com/29/2c/SeO9xXHD_t.jpg','https://thumbs2.imgbox.com/c8/e9/wmTO2cJL_t.jpg','https://thumbs2.imgbox.com/cd/66/qWFCx7iF_t.jpg','https://thumbs2.imgbox.com/1d/58/cAx4y8fD_t.jpg','https://thumbs2.imgbox.com/12/ec/fSx7xmeB_t.jpg','https://thumbs2.imgbox.com/14/7f/0Q6msydQ_t.jpg','https://thumbs2.imgbox.com/eb/a3/s6VKAGFD_t.jpg','https://thumbs2.imgbox.com/b2/fe/3QDuWs38_t.jpg','https://thumbs2.imgbox.com/55/ee/vz0qC5qv_t.jpg','https://thumbs2.imgbox.com/ac/5f/NbmqUlA1_t.jpg','https://thumbs2.imgbox.com/0c/72/g7TSs2pF_t.jpg','https://thumbs2.imgbox.com/fe/39/ZsQFx1HR_t.jpg','https://thumbs2.imgbox.com/ec/2a/cCFKYOdY_t.jpg','https://thumbs2.imgbox.com/cf/4f/ge2DFFbX_t.jpg','https://thumbs2.imgbox.com/3b/88/0uWqkqLM_t.jpg','https://thumbs2.imgbox.com/8d/31/CZJHwJbZ_t.jpg','https://thumbs2.imgbox.com/ff/17/1rBO6iIo_t.jpg','https://thumbs2.imgbox.com/36/ac/ZrgWmxvM_t.jpg','https://thumbs2.imgbox.com/2c/70/OuzkDXF7_t.jpg','https://thumbs2.imgbox.com/8d/ad/1of1yYLF_t.jpg','https://thumbs2.imgbox.com/b6/e7/Y8y0GP49_t.jpg','https://thumbs2.imgbox.com/d4/5d/opKk2GVU_t.jpg','https://thumbs2.imgbox.com/d0/0d/GFSa1mj6_t.jpg','https://thumbs2.imgbox.com/df/cd/A8SG2hok_t.jpg','https://thumbs2.imgbox.com/c5/9e/78t532Sb_t.jpg','https://thumbs2.imgbox.com/20/28/8DRGuqsk_t.jpg','https://thumbs2.imgbox.com/72/12/PxPHp4P7_t.jpg','https://thumbs2.imgbox.com/bf/90/8Hyuw9VX_t.jpg','https://thumbs2.imgbox.com/22/ff/w1a7TubF_t.jpg','https://thumbs2.imgbox.com/01/a3/VPLAw2D4_t.jpg','https://thumbs2.imgbox.com/d7/03/ZrP3zL8i_t.jpg','https://thumbs2.imgbox.com/a2/b1/uSx3ipZF_t.jpg','https://thumbs2.imgbox.com/69/5b/ZQRGm06y_t.jpg','https://thumbs2.imgbox.com/cf/d5/uwvuymSr_t.jpg','https://thumbs2.imgbox.com/9f/5f/QSJfeMmK_t.jpg','https://thumbs2.imgbox.com/df/52/WoFDs9Sf_t.jpg','https://thumbs2.imgbox.com/c4/8a/OGsZQ33q_t.jpg','https://thumbs2.imgbox.com/ba/2b/eslvXH8S_t.jpg','https://thumbs2.imgbox.com/ae/52/uEyogZja_t.jpg','https://thumbs2.imgbox.com/4f/a5/nRU3uyxi_t.jpg','https://thumbs2.imgbox.com/29/ca/pZ1AXkyi_t.jpg','https://thumbs2.imgbox.com/8c/e3/nsso4p4I_t.jpg','https://thumbs2.imgbox.com/ad/cb/Gder3yUa_t.jpg','https://thumbs2.imgbox.com/a4/13/agxecGF9_t.jpg','https://thumbs2.imgbox.com/b7/de/i5Wgq6xg_t.jpg','https://thumbs2.imgbox.com/e0/1e/VRWtVTx0_t.jpg',
'https://thumbs2.imgbox.com/36/c1/TP2yIoQ4_t.jpg','https://thumbs2.imgbox.com/67/54/ZJbSYagO_t.jpg','https://thumbs2.imgbox.com/d8/93/tUvxKK5n_t.jpg','https://thumbs2.imgbox.com/4e/0c/K1ERBLEZ_t.jpg','https://thumbs2.imgbox.com/e5/90/ooGrrXU1_t.jpg','https://thumbs2.imgbox.com/46/93/BcwfsMHG_t.jpg','https://thumbs2.imgbox.com/1b/8d/b8xTvlzp_t.jpg','https://thumbs2.imgbox.com/03/75/FfFzIKHY_t.jpg','https://thumbs2.imgbox.com/ca/17/9dRdqbps_t.jpg','https://thumbs2.imgbox.com/51/af/74RadXOp_t.jpg','https://thumbs2.imgbox.com/31/10/m2p4MP5I_t.jpg','https://thumbs2.imgbox.com/46/93/T3qJbY97_t.jpg','https://thumbs2.imgbox.com/63/34/rA8gixk7_t.jpg','https://thumbs2.imgbox.com/32/b2/OxhtqgkG_t.jpg','https://thumbs2.imgbox.com/a4/8e/1vzq7RaJ_t.jpg','https://thumbs2.imgbox.com/ac/9f/yLOyi4wd_t.jpg','https://thumbs2.imgbox.com/8f/bd/3ZMV6bDW_t.jpg','https://thumbs2.imgbox.com/81/e9/uLaAGAjJ_t.jpg','https://thumbs2.imgbox.com/3a/2f/XE2y9rZg_t.jpg','https://thumbs2.imgbox.com/d6/0d/XBj7tbzV_t.jpg','https://thumbs2.imgbox.com/93/f3/3d8c3yyU_t.jpg','https://thumbs2.imgbox.com/f8/b3/NAOBoxOc_t.jpg','https://thumbs2.imgbox.com/3e/55/qNsjgMvf_t.jpg','https://thumbs2.imgbox.com/a6/c1/ZafSP1oj_t.jpg','https://thumbs2.imgbox.com/e7/2c/eLkzsS5k_t.jpg','https://thumbs2.imgbox.com/45/52/kjaiHwjq_t.jpg','https://thumbs2.imgbox.com/fb/6c/r7CRgML7_t.jpg','https://thumbs2.imgbox.com/35/65/bpaUWSjt_t.jpg','https://thumbs2.imgbox.com/62/71/M67glRow_t.jpg','https://thumbs2.imgbox.com/8c/74/VcwkyH8O_t.jpg','https://thumbs2.imgbox.com/af/42/qEQ9LDli_t.jpg','https://thumbs2.imgbox.com/85/c8/FOPp0Lml_t.jpg','https://thumbs2.imgbox.com/59/bc/KTp1Ew8R_t.jpg','https://thumbs2.imgbox.com/a0/1c/KSE3hRe2_t.jpg','https://thumbs2.imgbox.com/e1/f4/v9pfTYKi_t.jpg','https://thumbs2.imgbox.com/41/c9/O66na7bW_t.jpg','https://thumbs2.imgbox.com/e8/7a/wWZ8Ie2e_t.jpg','https://thumbs2.imgbox.com/94/dd/cfSGWB8M_t.jpg','https://thumbs2.imgbox.com/d6/7f/pvCZv2bR_t.jpg','https://thumbs2.imgbox.com/91/29/wOCVGa4q_t.jpg','https://thumbs2.imgbox.com/0d/a1/SKh6NLse_t.jpg','https://thumbs2.imgbox.com/00/28/jKm7CPRf_t.jpg','https://thumbs2.imgbox.com/46/b1/4sTc4fbo_t.jpg','https://thumbs2.imgbox.com/9c/27/aOmeVMKm_t.jpg','https://thumbs2.imgbox.com/69/19/iRBWhJHk_t.jpg','https://thumbs2.imgbox.com/66/fd/nQrdhmsu_t.jpg','https://thumbs2.imgbox.com/76/74/AlVMCtjD_t.jpg','https://thumbs2.imgbox.com/a4/97/OVuQ6a3a_t.jpg','https://thumbs2.imgbox.com/3f/24/8PCCmLu1_t.jpg','https://thumbs2.imgbox.com/31/f3/kg1LhRNX_t.jpg','https://thumbs2.imgbox.com/82/90/DGlfXAiB_t.jpg','https://thumbs2.imgbox.com/14/44/cJyknWkV_t.jpg','https://thumbs2.imgbox.com/71/b0/e0urIOn9_t.jpg','https://thumbs2.imgbox.com/67/7e/VCHdYbwe_t.jpg','https://thumbs2.imgbox.com/0b/92/oaG9IVz2_t.jpg','https://thumbs2.imgbox.com/7f/33/ACSsR8UD_t.jpg','https://thumbs2.imgbox.com/91/55/YTK5JnZb_t.jpg','https://thumbs2.imgbox.com/e2/da/qyPOY5d4_t.jpg','https://thumbs2.imgbox.com/e0/31/nFZGZJXN_t.jpg','https://thumbs2.imgbox.com/a5/38/B63qd5P8_t.jpg','https://thumbs2.imgbox.com/b0/3c/liHedCd9_t.jpg','https://thumbs2.imgbox.com/ab/24/3XS0BeUf_t.jpg','https://thumbs2.imgbox.com/25/f1/JUxTfz7p_t.jpg','https://thumbs2.imgbox.com/69/2f/eFH95Xzf_t.jpg','https://thumbs2.imgbox.com/b3/74/uIuTGylr_t.jpg','https://thumbs2.imgbox.com/a0/e3/m23zV0Kr_t.jpg','https://thumbs2.imgbox.com/3a/a8/YuyM5yNr_t.jpg','https://thumbs2.imgbox.com/81/a1/RXGxmCgY_t.jpg','https://thumbs2.imgbox.com/c0/37/HIfZUrhh_t.jpg','https://thumbs2.imgbox.com/09/1b/QKbw4IBu_t.jpg','https://thumbs2.imgbox.com/06/37/437ZqjFP_t.jpg','https://thumbs2.imgbox.com/6b/72/nQGKIgyh_t.jpg','https://thumbs2.imgbox.com/c5/cd/TM2AleyH_t.jpg','https://thumbs2.imgbox.com/90/00/BBlthdmL_t.jpg','https://thumbs2.imgbox.com/b7/2c/vKBg08sQ_t.jpg','https://thumbs2.imgbox.com/57/a1/mSmxEC89_t.jpg','https://thumbs2.imgbox.com/cf/63/oieTQsSe_t.jpg','https://thumbs2.imgbox.com/61/a7/hfw7Fzwf_t.jpg','https://images2.imgbox.com/d2/24/MGXJln4f_o.jpg','https://images2.imgbox.com/48/14/ETXkzb0z_o.jpg','https://images2.imgbox.com/02/a0/CTtAyv3z_o.jpg','https://images2.imgbox.com/23/17/xi6GP4gg_o.jpg','https://images2.imgbox.com/0c/e5/D3XzbcmD_o.jpg','https://images2.imgbox.com/90/44/YVEYI8CJ_o.jpg','https://images2.imgbox.com/f9/d5/Jrlqb02T_o.jpg','https://images2.imgbox.com/41/c5/wP1zY9zO_o.jpg','https://images2.imgbox.com/e2/d9/2pbjA6uj_o.jpg','https://images2.imgbox.com/a3/15/UJCZn8JO_o.jpg','https://images2.imgbox.com/ad/9c/0wR11TCz_o.jpg','https://images2.imgbox.com/60/32/fRgeLi6j_o.jpg','https://images2.imgbox.com/68/93/7FgtujJq_o.jpg','https://images2.imgbox.com/b5/1a/yfA7r3fj_o.jpg','https://images2.imgbox.com/46/da/pgopgwoW_o.jpg','https://images2.imgbox.com/9b/31/OHDcowS8_o.jpg','https://images2.imgbox.com/6b/45/a93Rjm00_o.jpg','https://images2.imgbox.com/83/e4/Fe0A8g02_o.jpg','https://images2.imgbox.com/64/6c/4Bm4mEem_o.jpg','https://images2.imgbox.com/18/d1/03oFMsUR_o.jpg','https://images2.imgbox.com/5c/c3/WI83hE7L_o.jpg','https://images2.imgbox.com/3d/c7/2t27PLpL_o.jpg','https://images2.imgbox.com/5e/f4/ZrNOXklh_o.jpg','https://images2.imgbox.com/05/a4/HxWKO9YH_o.jpg',
'https://images2.imgbox.com/9a/c5/iH3iCxj7_o.jpg','https://images2.imgbox.com/6a/54/kmHMhGXL_o.jpg','https://images2.imgbox.com/8a/fc/VeL5GbRe_o.jpg','https://images2.imgbox.com/d8/2a/f8JIpe7A_o.jpg','https://images2.imgbox.com/56/77/qENlaFVy_o.jpg','https://images2.imgbox.com/c8/bb/i3aEsYHd_o.jpg']
let coreh = hard[Math.floor(Math.random() * hard.length)]
hardcore = await getBuffer(coreh)
const hkre =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const hark = hkre[Math.floor(Math.random() * hkre.length)]
cnf.sendMessage(from, hardcore, image, { caption: hark, quoted: mek })
addFilter(from)
break

case prefix+'konosuba':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)			  
const kono =['https://img.nickpic.host/q4MGFn.jpg',
'https://img.nickpic.host/q4tdLJ.jpg',
'https://img.nickpic.host/q4tZ4j.jpg',
'https://img.nickpic.host/q4tWc1.jpg',
'https://img.nickpic.host/q4tPyW.jpg',
'https://img.nickpic.host/q4tJOz.jpg',
'https://img.nickpic.host/q4tLKc.jpg',
'https://img.nickpic.host/q4tkxG.jpg',
'https://img.nickpic.host/q4t90A.jpg',
'https://img.nickpic.host/q4t2XY.jpg',
'https://img.nickpic.host/q4Mm02.jpg',
'https://img.nickpic.host/q4MIis.jpg',
'https://img.nickpic.host/q4MxKN.jpg',
'https://img.nickpic.host/q4MpxQ.jpg',
'https://img.nickpic.host/q4Mvhx.jpg',
'https://img.nickpic.host/q4MbGO.jpg',
'https://img.nickpic.host/q4Mrgm.jpg',
'https://img.nickpic.host/q4M3Pq.jpg',
'https://img.nickpic.host/q4Ms48.jpg',
'https://img.nickpic.host/q4MaFd.jpg',
'https://img.nickpic.host/q4Ml25.jpg',
'https://img.nickpic.host/q4MjiD.jpg',
'https://img.nickpic.host/q4MSxP.jpg',
'https://img.nickpic.host/q4MchM.jpg',
'https://img.nickpic.host/q4MgYF.jpg',
'https://img.nickpic.host/q4MuGe.jpg',
'https://img.nickpic.host/q4MAgX.jpg',
'https://img.nickpic.host/q4MEDb.jpg',
'https://img.nickpic.host/q4MOPf.jpg',
'https://img.nickpic.host/q4M6a6.jpg',
'https://img.nickpic.host/q4MCnp.jpg',
'https://img.nickpic.host/q4MQ2Y.jpg',
'https://img.nickpic.host/q4MXBA.jpg',
'https://img.nickpic.host/q4Mi6G.jpg',
'https://img.nickpic.host/q4MnYz.jpg',
'https://img.nickpic.host/q4MMIc.jpg',
'https://img.nickpic.host/q4M1D1.jpg',
'https://img.nickpic.host/q4MRgW.jpg',
'https://img.nickpic.host/q4M4Tj.jpg',
'https://img.nickpic.host/q4MwaJ.jpg',
'https://img.nickpic.host/q4Mznn.jpg',
'https://img.nickpic.host/q4M79s.jpg',
'https://img.nickpic.host/q4MKB2.jpg',
'https://img.nickpic.host/q4MY6Q.jpg',
'https://img.nickpic.host/q4MHHx.jpg',
'https://img.nickpic.host/q4MfqO.jpg',
'https://img.nickpic.host/q4MVIN.jpg',
'https://img.nickpic.host/q4M0wm.jpg',
'https://img.nickpic.host/q4M2T8.jpg',
'https://img.nickpic.host/q4Mejq.jpg',
'https://img.nickpic.host/q4MJ9D.jpg',
'https://img.nickpic.host/q4Mknd.jpg',
'https://img.nickpic.host/q4MPb5.jpg',
'https://img.nickpic.host/q4MT6P.jpg',
'https://img.nickpic.host/q4Myqe.jpg',
'https://img.nickpic.host/q4MdmF.jpg',
'https://img.nickpic.host/q4MWHM.jpg',
'https://img.nickpic.host/q4RIWb.jpg',
'https://img.nickpic.host/q4RGwX.jpg',
'https://img.nickpic.host/q4Rojf.jpg',
'https://img.nickpic.host/q4Rpt6.jpg',
'https://img.nickpic.host/q4RBbY.jpg',
'https://img.nickpic.host/q4RbCA.jpg',
'https://img.nickpic.host/q4Rvep.jpg',
'https://img.nickpic.host/q4RrNG.jpg',
'https://img.nickpic.host/q4R3mz.jpg',
'https://img.nickpic.host/q4RFuc.jpg',
'https://img.nickpic.host/q4RawW.jpg',
'https://img.nickpic.host/q4RjW1.jpg',
'https://img.nickpic.host/q4Rcen.jpg',
'https://img.nickpic.host/q4R5lj.jpg',
'https://img.nickpic.host/q4RStJ.jpg',
'https://img.nickpic.host/q4Rqrs.jpg',
'https://img.nickpic.host/q4RuC2.jpg',
'https://img.nickpic.host/q4RhuN.jpg',
'https://img.nickpic.host/q4RANQ.jpg',
'https://img.nickpic.host/q4ROox.jpg',
'https://img.nickpic.host/q4RCZm.jpg',
'https://img.nickpic.host/q4R6zO.jpg',
'https://img.nickpic.host/q4RUl8.jpg',
'https://img.nickpic.host/q4RXMq.jpg',
'https://img.nickpic.host/q4Ried.jpg',
'https://img.nickpic.host/q4RMQ5.jpg',
'https://img.nickpic.host/q4RtrD.jpg',
'https://img.nickpic.host/q4R4oM.jpg',
'https://img.nickpic.host/q4RRNP.jpg',
'https://img.nickpic.host/q4RDAF.jpg',
'https://img.nickpic.host/q4Rwze.jpg',
'https://img.nickpic.host/q4RzZX.jpg',
'https://img.nickpic.host/q4RKMf.jpg',
'https://img.nickpic.host/q4R85b.jpg',
'https://img.nickpic.host/q4RYk6.jpg',
'https://img.nickpic.host/q4RVQY.jpg',
'https://img.nickpic.host/q4RNsp.jpg',
'https://img.nickpic.host/q4RfVA.jpg',
'https://img.nickpic.host/q4R9Az.jpg',
'https://img.nickpic.host/q4Re7c.jpg',
'https://img.nickpic.host/q4R2pG.jpg',
'https://img.nickpic.host/q4RL51.jpg',
'https://img.nickpic.host/q4RkZW.jpg',
'https://img.nickpic.host/q4RPRj.jpg',
'https://img.nickpic.host/q4RTkJ.jpg',
'https://img.nickpic.host/q4RyV2.jpg',
'https://img.nickpic.host/q4RZsn.jpg',
'https://img.nickpic.host/q4RdUs.jpg',
'https://img.nickpic.host/q41IpQ.jpg',
'https://img.nickpic.host/q41mEx.jpg',
'https://img.nickpic.host/q41o7N.jpg',
'https://img.nickpic.host/q41pdO.jpg',
'https://img.nickpic.host/q41xSm.jpg',
'https://img.nickpic.host/q41BR8.jpg',
'https://img.nickpic.host/q41ssd.jpg',
'https://img.nickpic.host/q41bJq.jpg',
'https://img.nickpic.host/q413UD.jpg',
'https://img.nickpic.host/q41lEM.jpg',
'https://img.nickpic.host/q41Ff5.jpg',
'https://img.nickpic.host/q41jpP.jpg',
'https://img.nickpic.host/q41Sde.jpg',
'https://img.nickpic.host/q4158F.jpg',
'https://img.nickpic.host/q41gSX.jpg',
'https://img.nickpic.host/q41q1b.jpg',
'https://img.nickpic.host/q41uJf.jpg',
'https://img.nickpic.host/q41OXp.jpg',
'https://img.nickpic.host/q41E36.jpg',
'https://img.nickpic.host/q41CvA.jpg',
'https://img.nickpic.host/q41hfY.jpg',
'https://img.nickpic.host/q41QOG.jpg',
'https://img.nickpic.host/q41Xyc.jpg',
'https://img.nickpic.host/q41U8z.jpg',
'https://img.nickpic.host/q41nSW.jpg',
'https://img.nickpic.host/q41MLj.jpg',
'https://img.nickpic.host/q41t11.jpg',
'https://img.nickpic.host/q4113J.jpg',
'https://img.nickpic.host/q414Xn.jpg',
'https://img.nickpic.host/q41D0s.jpg',
'https://img.nickpic.host/q417OQ.jpg',
'https://img.nickpic.host/q41zv2.jpg',
'https://img.nickpic.host/q418Kx.jpg',
'https://img.nickpic.host/q41KyN.jpg',
'https://img.nickpic.host/q41HcO.jpg',
'https://img.nickpic.host/q41N4m.jpg',
'https://img.nickpic.host/q41VL8.jpg',
'https://img.nickpic.host/q412Xd.jpg',
'https://img.nickpic.host/q410Fq.jpg',
'https://img.nickpic.host/q41LKM.jpg',
'https://img.nickpic.host/q4190D.jpg',
'https://img.nickpic.host/q41TGF.jpg',
'https://img.nickpic.host/q41kx5.jpg',
'https://img.nickpic.host/q41JOP.jpg',
'https://img.nickpic.host/q41Wce.jpg',
'https://img.nickpic.host/q41Z4X.jpg',
'https://img.nickpic.host/q41dPb.jpg',
'https://img.nickpic.host/q44GFf.jpg',
'https://img.nickpic.host/q44xYG.jpg',
'https://img.nickpic.host/q44pxY.jpg',
'https://img.nickpic.host/q44Ii6.jpg',
'https://img.nickpic.host/q44m2p.jpg',
'https://img.nickpic.host/q44vhA.jpg',
'https://img.nickpic.host/q44bGz.jpg',
'https://img.nickpic.host/q44rgc.jpg',
'https://img.nickpic.host/q44aaj.jpg',
'https://img.nickpic.host/q44s4W.jpg',
'https://img.nickpic.host/q44jiJ.jpg',
'https://img.nickpic.host/q443P1.jpg',
'https://img.nickpic.host/q44SBs.jpg',
'https://img.nickpic.host/q44l2n.jpg',
'https://img.nickpic.host/q44ch2.jpg',
'https://img.nickpic.host/q44gYQ.jpg',
'https://img.nickpic.host/q44AgN.jpg',
'https://img.nickpic.host/q44uIx.jpg',
'https://img.nickpic.host/q44EDO.jpg',
'https://img.nickpic.host/q44OTm.jpg',
'https://img.nickpic.host/q446a8.jpg',
'https://img.nickpic.host/q44Q2d.jpg',
'https://img.nickpic.host/q44Cnq.jpg',
'https://img.nickpic.host/q44i65.jpg',
'https://img.nickpic.host/q44XBD.jpg',
'https://img.nickpic.host/q44nYP.jpg',
'https://img.nickpic.host/q44MIM.jpg',
'https://img.nickpic.host/q44RqF.jpg',
'https://img.nickpic.host/q441De.jpg',
'https://img.nickpic.host/q444TX.jpg',
'https://img.nickpic.host/q44wjb.jpg',
'https://img.nickpic.host/q44znf.jpg',
'https://img.nickpic.host/q44HHA.jpg',
'https://img.nickpic.host/q44796.jpg',
'https://img.nickpic.host/q44Kbp.jpg',
'https://img.nickpic.host/q44Y6Y.jpg',
'https://img.nickpic.host/q44VmG.jpg',
'https://img.nickpic.host/q44fqz.jpg',
'https://img.nickpic.host/q440wc.jpg',
'https://img.nickpic.host/q442TW.jpg',
'https://img.nickpic.host/q44ej1.jpg',
'https://img.nickpic.host/q44ktj.jpg',
'https://img.nickpic.host/q44J9J.jpg',
'https://img.nickpic.host/q44Pbn.jpg',
'https://img.nickpic.host/q44TCs.jpg',
'https://img.nickpic.host/q44WH2.jpg',
'https://img.nickpic.host/q44dmQ.jpg',
'https://img.nickpic.host/q44yux.jpg',
'https://img.nickpic.host/q4DGwN.jpg',
'https://img.nickpic.host/q4DIWO.jpg',
'https://img.nickpic.host/q4Dolm.jpg',
'https://img.nickpic.host/q4Dpt8.jpg',
'https://img.nickpic.host/q4Dveq.jpg',
'https://img.nickpic.host/q4DBbd.jpg',
'https://img.nickpic.host/q4DrN5.jpg',
'https://img.nickpic.host/q4DbCD.jpg',
'https://img.nickpic.host/q4DFuM.jpg',
'https://img.nickpic.host/q4D3mP.jpg',
'https://img.nickpic.host/q4DazF.jpg',
'https://img.nickpic.host/q4DjWe.jpg',
'https://img.nickpic.host/q4D5lX.jpg',
'https://img.nickpic.host/q4Dqr6.jpg',
'https://img.nickpic.host/q4DSMb.jpg',
'https://img.nickpic.host/q4Dcef.jpg',
'https://img.nickpic.host/q4DuQp.jpg',
'https://img.nickpic.host/q4DhAG.jpg',
'https://img.nickpic.host/q4DANY.jpg',
'https://img.nickpic.host/q4DOoA.jpg',
'https://img.nickpic.host/q4D6zz.jpg',
'https://img.nickpic.host/q4DUlW.jpg',
'https://img.nickpic.host/q4DCZc.jpg',
'https://img.nickpic.host/q4DXM1.jpg',
'https://img.nickpic.host/q4Dikj.jpg',
'https://img.nickpic.host/q4DtrJ.jpg',
'https://img.nickpic.host/q4DMQn.jpg',
'https://img.nickpic.host/q4DRVs.jpg',
'https://img.nickpic.host/q4DDAQ.jpg',
'https://img.nickpic.host/q4D4o2.jpg',
'https://img.nickpic.host/q4Dw7x.jpg',
'https://img.nickpic.host/q4DzZN.jpg',
'https://img.nickpic.host/q4D85O.jpg',
'https://img.nickpic.host/q4DKRm.jpg',
'https://img.nickpic.host/q4DYk8.jpg',
'https://img.nickpic.host/q4DfVD.jpg',
'https://img.nickpic.host/q4DNsq.jpg',
'https://img.nickpic.host/q4DVQd.jpg',
'https://img.nickpic.host/q4D2p5.jpg',
'https://img.nickpic.host/q4D9AP.jpg',
'https://img.nickpic.host/q4De7M.jpg',
'https://img.nickpic.host/q4DkdF.jpg',
'https://img.nickpic.host/q4DL5e.jpg',
'https://img.nickpic.host/q4DPRX.jpg',
'https://img.nickpic.host/q4DTJb.jpg',
'https://img.nickpic.host/q4DZsf.jpg',
'https://img.nickpic.host/q4DdU6.jpg',
'https://img.nickpic.host/q4Dyfp.jpg',
'https://img.nickpic.host/q4wIpY.jpg',
'https://img.nickpic.host/q4wmEA.jpg',
'https://img.nickpic.host/q4wo8G.jpg',
'https://img.nickpic.host/q4wpdz.jpg',
'https://img.nickpic.host/q4wxSc.jpg',
'https://img.nickpic.host/q4wBRW.jpg',
'https://img.nickpic.host/q4wbJ1.jpg',
'https://img.nickpic.host/q4ws3j.jpg',
'https://img.nickpic.host/q4wFfn.jpg',
'https://img.nickpic.host/q4w3UJ.jpg',
'https://img.nickpic.host/q4wjvs.jpg',
'https://img.nickpic.host/q4w58Q.jpg',
'https://img.nickpic.host/q4wlE2.jpg',
'https://img.nickpic.host/q4wSyx.jpg',
'https://img.nickpic.host/q4wgSN.jpg',
'https://img.nickpic.host/q4wq1O.jpg',
'https://img.nickpic.host/q4wuLm.jpg',
'https://img.nickpic.host/q4wE38.jpg',
'https://img.nickpic.host/q4wOXq.jpg',
'https://img.nickpic.host/q4whfd.jpg',
'https://img.nickpic.host/q4wCvD.jpg',
'https://img.nickpic.host/q4wU8P.jpg',
'https://img.nickpic.host/q4wQO5.jpg',
'https://img.nickpic.host/q4wXyM.jpg',
'https://img.nickpic.host/q4wncF.jpg',
'https://img.nickpic.host/q4wMLX.jpg',
'https://img.nickpic.host/q4wt1e.jpg',
'https://img.nickpic.host/q4w4Xf.jpg',
'https://img.nickpic.host/q4w1Fb.jpg',
'https://img.nickpic.host/q4w7OY.jpg',
'https://img.nickpic.host/q4wD06.jpg',
'https://img.nickpic.host/q4wzxp.jpg',
'https://img.nickpic.host/q4wYGG.jpg',
'https://img.nickpic.host/q4w8KA.jpg',
'https://img.nickpic.host/q4wN4c.jpg',
'https://img.nickpic.host/q4wHcz.jpg',
'https://img.nickpic.host/q4wVLW.jpg',
'https://img.nickpic.host/q4w2ij.jpg',
'https://img.nickpic.host/q4w0F1.jpg',
'https://img.nickpic.host/q4wkxn.jpg',
'https://img.nickpic.host/q4w90J.jpg',
'https://img.nickpic.host/q4wJhs.jpg',
'https://img.nickpic.host/q4wLK2.jpg',
'https://img.nickpic.host/q4wTGQ.jpg',
'https://img.nickpic.host/q4wZ4N.jpg',
'https://img.nickpic.host/q4wWgx.jpg',
'https://img.nickpic.host/q4wdPO.jpg',
'https://img.nickpic.host/q4zGam.jpg',
'https://img.nickpic.host/q4zIi8.jpg',
'https://img.nickpic.host/q4zpxd.jpg',
'https://img.nickpic.host/q4zm2q.jpg',
'https://img.nickpic.host/q4zvhD.jpg',
'https://img.nickpic.host/q4zxY5.jpg',
'https://img.nickpic.host/q4zrgM.jpg',
'https://img.nickpic.host/q4zsDF.jpg',
'https://img.nickpic.host/q4zbGP.jpg',
'https://img.nickpic.host/q4z3Pe.jpg',
'https://img.nickpic.host/q4zaaX.jpg',
'https://img.nickpic.host/q4zl2f.jpg',
'https://img.nickpic.host/q4zjnb.jpg',
'https://img.nickpic.host/q4zSB6.jpg',
'https://img.nickpic.host/q4zc6p.jpg',
'https://img.nickpic.host/q4zgYY.jpg',
'https://img.nickpic.host/q4zuIA.jpg',
'https://img.nickpic.host/q4zAqG.jpg',
'https://img.nickpic.host/q4zEDz.jpg',
'https://img.nickpic.host/q4zOTc.jpg',
'https://img.nickpic.host/q4z6aW.jpg',
'https://img.nickpic.host/q4zQ9j.jpg',
'https://img.nickpic.host/q4zCn1.jpg',
'https://img.nickpic.host/q4zXBJ.jpg',
'https://img.nickpic.host/q4zi6n.jpg',
'https://img.nickpic.host/q4znHs.jpg',
'https://img.nickpic.host/q4zRqQ.jpg',
'https://img.nickpic.host/q4zMI2.jpg',
'https://img.nickpic.host/q4z1wx.jpg',
'https://img.nickpic.host/q4z4TN.jpg',
'https://img.nickpic.host/q4zwjO.jpg',
'https://img.nickpic.host/q4z798.jpg',
'https://img.nickpic.host/q4zztm.jpg',
'https://img.nickpic.host/q4zKbq.jpg',
'https://img.nickpic.host/q4zY6d.jpg',
'https://img.nickpic.host/q4zHHD.jpg',
'https://img.nickpic.host/q4zfqP.jpg',
'https://img.nickpic.host/q4zVm5.jpg',
'https://img.nickpic.host/q4z0wM.jpg',
'https://img.nickpic.host/q4zeje.jpg',
'https://img.nickpic.host/q4z2WF.jpg',
'https://img.nickpic.host/q4zJeb.jpg',
'https://img.nickpic.host/q4zktX.jpg',
'https://img.nickpic.host/q4zPbf.jpg',
'https://img.nickpic.host/q4zTC6.jpg',
'https://img.nickpic.host/q4zWNp.jpg',
'https://img.nickpic.host/q4zyuA.jpg',
'https://img.nickpic.host/q4zdmY.jpg',
'https://img.nickpic.host/q47GzG.jpg',
'https://img.nickpic.host/q47IWz.jpg',
'https://img.nickpic.host/q47ptW.jpg',
'https://img.nickpic.host/q47olc.jpg',
'https://img.nickpic.host/q47ve1.jpg',
'https://img.nickpic.host/q47Brj.jpg',
'https://img.nickpic.host/q47bCJ.jpg',
'https://img.nickpic.host/q473os.jpg',
'https://img.nickpic.host/q47rNn.jpg',
'https://img.nickpic.host/q47azQ.jpg',
'https://img.nickpic.host/q47Fu2.jpg',
'https://img.nickpic.host/q47jZx.jpg',
'https://img.nickpic.host/q47SMO.jpg',
'https://img.nickpic.host/q475lN.jpg',
'https://img.nickpic.host/q47qr8.jpg',
'https://img.nickpic.host/q47ckm.jpg',
'https://img.nickpic.host/q47uQq.jpg',
'https://img.nickpic.host/q47ANd.jpg',
'https://img.nickpic.host/q47hA5.jpg',
'https://img.nickpic.host/q47OoD.jpg',
'https://img.nickpic.host/q476zP.jpg',
'https://img.nickpic.host/q47CZM.jpg',
'https://img.nickpic.host/q47XMe.jpg',
'https://img.nickpic.host/q47U5F.jpg',
'https://img.nickpic.host/q47MQf.jpg',
'https://img.nickpic.host/q47tsb.jpg',
'https://img.nickpic.host/q47RV6.jpg',
'https://img.nickpic.host/q47ikX.jpg',
'https://img.nickpic.host/q474pp.jpg',
'https://img.nickpic.host/q47DAY.jpg',
'https://img.nickpic.host/q47w7A.jpg',
'https://img.nickpic.host/q47zdG.jpg',
'https://img.nickpic.host/q4785z.jpg',
'https://img.nickpic.host/q47YkW.jpg',
'https://img.nickpic.host/q47KRc.jpg',
'https://img.nickpic.host/q47Ns1.jpg',
'https://img.nickpic.host/q47VUj.jpg',
'https://img.nickpic.host/q47fVJ.jpg',
'https://img.nickpic.host/q472pn.jpg',
'https://img.nickpic.host/q479Es.jpg',
'https://img.nickpic.host/q47kdQ.jpg',
'https://img.nickpic.host/q47e72.jpg',
'https://img.nickpic.host/q47LSx.jpg',
'https://img.nickpic.host/q47PRN.jpg',
'https://img.nickpic.host/q47dU8.jpg',
'https://img.nickpic.host/q47TJO.jpg',
'https://img.nickpic.host/q47Z3m.jpg',
'https://img.nickpic.host/q47yfq.jpg',
'https://img.nickpic.host/q48Ipd.jpg',
'https://img.nickpic.host/q48o85.jpg',
'https://img.nickpic.host/q48mED.jpg',
'https://img.nickpic.host/q48pdP.jpg',
'https://img.nickpic.host/q48xSM.jpg',
'https://img.nickpic.host/q48B1F.jpg',
'https://img.nickpic.host/q48bJe.jpg',
'https://img.nickpic.host/q48s3X.jpg',
'https://img.nickpic.host/q483Xb.jpg',
'https://img.nickpic.host/q48Fff.jpg',
'https://img.nickpic.host/q48jv6.jpg',
'https://img.nickpic.host/q48lOp.jpg',
'https://img.nickpic.host/q4858Y.jpg',
'https://img.nickpic.host/q48SyA.jpg',
'https://img.nickpic.host/q48gcG.jpg',
'https://img.nickpic.host/q48uLc.jpg',
'https://img.nickpic.host/q48q1z.jpg',
'https://img.nickpic.host/q48E3W.jpg',
'https://img.nickpic.host/q48OX1.jpg',
'https://img.nickpic.host/q48h0j.jpg',
'https://img.nickpic.host/q48CvJ.jpg',
'https://img.nickpic.host/q48QOn.jpg',
'https://img.nickpic.host/q48UKs.jpg',
'https://img.nickpic.host/q48Xy2.jpg',
'https://img.nickpic.host/q48ncQ.jpg',
'https://img.nickpic.host/q48t4x.jpg',
'https://img.nickpic.host/q48MLN.jpg',
'https://img.nickpic.host/q481FO.jpg',
'https://img.nickpic.host/q484im.jpg']
let dark = kono[Math.floor(Math.random() * kono.length)]
konosuba = await getBuffer(dark)
const kodecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const kofrase = kodecir[Math.floor(Math.random() * kodecir.length)]
cnf.sendMessage(from, konosuba, image, { caption: kofrase, quoted: mek })
addFilter(from)
break
					
case prefix+'dbz':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)			  
const dragon =['https://img.nickpic.host/q1MbuW.jpg',
'https://img.nickpic.host/q1MvNz.jpg',
'https://img.nickpic.host/q1MpQG.jpg',
'https://img.nickpic.host/q1MorA.jpg',
'https://img.nickpic.host/q1MIeY.jpg',
'https://img.nickpic.host/q1MGMp.jpg',
'https://img.nickpic.host/q1tWzb.jpg',
'https://img.nickpic.host/q1tyl6.jpg',
'https://img.nickpic.host/q1tZWf.jpg',
'https://img.nickpic.host/q1tTuX.jpg',
'https://img.nickpic.host/q1MBoc.jpg',
'https://img.nickpic.host/q1Mrz1.jpg',
'https://img.nickpic.host/q1MsZj.jpg',
'https://img.nickpic.host/q1MFlJ.jpg',
'https://img.nickpic.host/q1MaMn.jpg',
'https://img.nickpic.host/q1Mjks.jpg',
'https://img.nickpic.host/q1M5r2.jpg',
'https://img.nickpic.host/q1MSQQ.jpg',
'https://img.nickpic.host/q1McVx.jpg',
'https://img.nickpic.host/q1MqoN.jpg',
'https://img.nickpic.host/q1MuAO.jpg',
'https://img.nickpic.host/q1MA7m.jpg',
'https://img.nickpic.host/q1MEZ8.jpg',
'https://img.nickpic.host/q1Mh5q.jpg',
'https://img.nickpic.host/q1M6Md.jpg',
'https://img.nickpic.host/q1MCkD.jpg',
'https://img.nickpic.host/q1MUs5.jpg',
'https://img.nickpic.host/q1MXQP.jpg',
'https://img.nickpic.host/q1MiVM.jpg',
'https://img.nickpic.host/q1MtpF.jpg',
'https://img.nickpic.host/q1MMAe.jpg',
'https://img.nickpic.host/q1MR7X.jpg',
'https://img.nickpic.host/q1M1db.jpg',
'https://img.nickpic.host/q1MD5f.jpg',
'https://img.nickpic.host/q1MwR6.jpg',
'https://img.nickpic.host/q1MzJp.jpg',
'https://img.nickpic.host/q1M8sY.jpg',
'https://img.nickpic.host/q1MKUA.jpg',
'https://img.nickpic.host/q1MYfG.jpg',
'https://img.nickpic.host/q1MNpz.jpg',
'https://img.nickpic.host/q1MVEc.jpg',
'https://img.nickpic.host/q1Mf7W.jpg',
'https://img.nickpic.host/q1M0d1.jpg',
'https://img.nickpic.host/q1M9Sj.jpg',
'https://img.nickpic.host/q1MeRJ.jpg',
'https://img.nickpic.host/q1MkJn.jpg',
'https://img.nickpic.host/q1ML3s.jpg',
'https://img.nickpic.host/q1MPU2.jpg',
'https://img.nickpic.host/q1MTfQ.jpg',
'https://img.nickpic.host/q1MZvx.jpg',
'https://img.nickpic.host/q1MdEN.jpg',
'https://img.nickpic.host/q1My8O.jpg',
'https://img.nickpic.host/q1RGym.jpg',
'https://img.nickpic.host/q1RmS8.jpg',
'https://img.nickpic.host/q1Ro1q.jpg',
'https://img.nickpic.host/q1RpJd.jpg',
'https://img.nickpic.host/q1Rx3D.jpg',
'https://img.nickpic.host/q1RBX5.jpg',
'https://img.nickpic.host/q1RbfP.jpg',
'https://img.nickpic.host/q1RsvM.jpg',
'https://img.nickpic.host/q1R3OF.jpg',
'https://img.nickpic.host/q1RF8e.jpg',
'https://img.nickpic.host/q1RayX.jpg',
'https://img.nickpic.host/q1Rlcb.jpg',
'https://img.nickpic.host/q1R51f.jpg',
'https://img.nickpic.host/q1RSL6.jpg',
'https://img.nickpic.host/q1RgFp.jpg',
'https://img.nickpic.host/q1RqXY.jpg',
'https://img.nickpic.host/q1Ru0A.jpg',
'https://img.nickpic.host/q1RExG.jpg',
'https://img.nickpic.host/q1ROOz.jpg',
'https://img.nickpic.host/q1RhKc.jpg',
'https://img.nickpic.host/q1R6yW.jpg',
'https://img.nickpic.host/q1RQc1.jpg',
'https://img.nickpic.host/q1RU4j.jpg',
'https://img.nickpic.host/q1RXLJ.jpg',
'https://img.nickpic.host/q1RnFn.jpg',
'https://img.nickpic.host/q1Rtis.jpg',
'https://img.nickpic.host/q1RM02.jpg',
'https://img.nickpic.host/q1R1xQ.jpg',
'https://img.nickpic.host/q1R4hx.jpg',
'https://img.nickpic.host/q1RDKN.jpg',
'https://img.nickpic.host/q1RzGO.jpg',
'https://img.nickpic.host/q1R7gm.jpg',
'https://img.nickpic.host/q1R848.jpg',
'https://img.nickpic.host/q1RKPq.jpg',
'https://img.nickpic.host/q1RHFd.jpg',
'https://img.nickpic.host/q1RNiD.jpg',
'https://img.nickpic.host/q1RV25.jpg',
'https://img.nickpic.host/q1R0xP.jpg',
'https://img.nickpic.host/q1R2hM.jpg',
'https://img.nickpic.host/q1R9YF.jpg',
'https://img.nickpic.host/q1RkGe.jpg',
'https://img.nickpic.host/q1RJgX.jpg',
'https://img.nickpic.host/q1RPPf.jpg',
'https://img.nickpic.host/q1RLDb.jpg',
'https://img.nickpic.host/q1RWa6.jpg',
'https://img.nickpic.host/q1RZnp.jpg',
'https://img.nickpic.host/q11GBA.jpg',
'https://img.nickpic.host/q11I6G.jpg',
'https://img.nickpic.host/q1Rd2Y.jpg',
'https://img.nickpic.host/q11mYz.jpg',
'https://img.nickpic.host/q11pIc.jpg',
'https://img.nickpic.host/q11xD1.jpg',
'https://img.nickpic.host/q11vgW.jpg',
'https://img.nickpic.host/q11BTj.jpg',
'https://img.nickpic.host/q11raJ.jpg',
'https://img.nickpic.host/q11snn.jpg',
'https://img.nickpic.host/q11aB2.jpg',
'https://img.nickpic.host/q1139s.jpg',
'https://img.nickpic.host/q11j6Q.jpg',
'https://img.nickpic.host/q11lHx.jpg',
'https://img.nickpic.host/q11SIN.jpg',
'https://img.nickpic.host/q11gwm.jpg',
'https://img.nickpic.host/q11cqO.jpg',
'https://img.nickpic.host/q11qT8.jpg',
'https://img.nickpic.host/q11Ajq.jpg',
'https://img.nickpic.host/q11End.jpg',
'https://img.nickpic.host/q116b5.jpg',
'https://img.nickpic.host/q11O9D.jpg',
'https://img.nickpic.host/q11C6P.jpg',
'https://img.nickpic.host/q11QHM.jpg',
'https://img.nickpic.host/q11XmF.jpg',
'https://img.nickpic.host/q11nwX.jpg',
'https://img.nickpic.host/q11iqe.jpg',
'https://img.nickpic.host/q11tWb.jpg',
'https://img.nickpic.host/q11Rjf.jpg',
'https://img.nickpic.host/q111t6.jpg',
'https://img.nickpic.host/q114ep.jpg',
'https://img.nickpic.host/q117NG.jpg',
'https://img.nickpic.host/q11wbY.jpg',
'https://img.nickpic.host/q11zCA.jpg',
'https://img.nickpic.host/q11Kmz.jpg',
'https://img.nickpic.host/q11Yuc.jpg',
'https://img.nickpic.host/q11HwW.jpg',
'https://img.nickpic.host/q11NW1.jpg',
'https://img.nickpic.host/q11flj.jpg',
'https://img.nickpic.host/q110tJ.jpg',
'https://img.nickpic.host/q112en.jpg',
'https://img.nickpic.host/q11ers.jpg',
'https://img.nickpic.host/q11kC2.jpg',
'https://img.nickpic.host/q11JNQ.jpg',
'https://img.nickpic.host/q11Pox.jpg',
'https://img.nickpic.host/q11TuN.jpg',
'https://img.nickpic.host/q11yl8.jpg',
'https://img.nickpic.host/q11WzO.jpg',
'https://img.nickpic.host/q14GMq.jpg',
'https://img.nickpic.host/q14Ied.jpg',
'https://img.nickpic.host/q14orD.jpg',
'https://img.nickpic.host/q14pQ5.jpg',
'https://img.nickpic.host/q14vNP.jpg',
'https://img.nickpic.host/q14BoM.jpg',
'https://img.nickpic.host/q14bAF.jpg',
'https://img.nickpic.host/q14rze.jpg',
'https://img.nickpic.host/q14sZX.jpg',
'https://img.nickpic.host/q14aMf.jpg',
'https://img.nickpic.host/q14F5b.jpg',
'https://img.nickpic.host/q14jk6.jpg',
'https://img.nickpic.host/q145sp.jpg',
'https://img.nickpic.host/q14cVA.jpg',
'https://img.nickpic.host/q14qpG.jpg',
'https://img.nickpic.host/q14SQY.jpg',
'https://img.nickpic.host/q14uAz.jpg',
'https://img.nickpic.host/q14A7c.jpg',
'https://img.nickpic.host/q14h51.jpg',
'https://img.nickpic.host/q14EZW.jpg',
'https://img.nickpic.host/q146Rj.jpg',
'https://img.nickpic.host/q14CkJ.jpg',
'https://img.nickpic.host/q14Usn.jpg',
'https://img.nickpic.host/q14XUs.jpg',
'https://img.nickpic.host/q14iV2.jpg',
'https://img.nickpic.host/q14tpQ.jpg',
'https://img.nickpic.host/q14MEx.jpg',
'https://img.nickpic.host/q141dO.jpg',
'https://img.nickpic.host/q14R7N.jpg',
'https://img.nickpic.host/q14DSm.jpg',
'https://img.nickpic.host/q14wR8.jpg',
'https://img.nickpic.host/q148sd.jpg',
'https://img.nickpic.host/q14zJq.jpg',
'https://img.nickpic.host/q14KUD.jpg',
'https://img.nickpic.host/q14Yf5.jpg',
'https://img.nickpic.host/q14NpP.jpg',
'https://img.nickpic.host/q14VEM.jpg',
'https://img.nickpic.host/q14f8F.jpg',
'https://img.nickpic.host/q140de.jpg',
'https://img.nickpic.host/q149SX.jpg',
'https://img.nickpic.host/q14e1b.jpg',
'https://img.nickpic.host/q14kJf.jpg',
'https://img.nickpic.host/q14L36.jpg',
'https://img.nickpic.host/q14PXp.jpg',
'https://img.nickpic.host/q14TfY.jpg',
'https://img.nickpic.host/q14ZvA.jpg',
'https://img.nickpic.host/q14dOG.jpg',
'https://img.nickpic.host/q14y8z.jpg',
'https://img.nickpic.host/q1DGyc.jpg',
'https://img.nickpic.host/q1DmSW.jpg',
'https://img.nickpic.host/q1Do11.jpg',
'https://img.nickpic.host/q1DpLj.jpg',
'https://img.nickpic.host/q1Dx3J.jpg',
'https://img.nickpic.host/q1DBXn.jpg',
'https://img.nickpic.host/q1Db0s.jpg',
'https://img.nickpic.host/q1Dsv2.jpg',
'https://img.nickpic.host/q1D3OQ.jpg',
'https://img.nickpic.host/q1DFKx.jpg',
'https://img.nickpic.host/q1DayN.jpg',
'https://img.nickpic.host/q1DlcO.jpg',
'https://img.nickpic.host/q1D54m.jpg',
'https://img.nickpic.host/q1DSL8.jpg',
'https://img.nickpic.host/q1DgFq.jpg',
'https://img.nickpic.host/q1DqXd.jpg',
'https://img.nickpic.host/q1Du0D.jpg',
'https://img.nickpic.host/q1DEx5.jpg',
'https://img.nickpic.host/q1DOOP.jpg',
'https://img.nickpic.host/q1DhKM.jpg',
'https://img.nickpic.host/q1DCGF.jpg',
'https://img.nickpic.host/q1DQce.jpg',
'https://img.nickpic.host/q1DU4X.jpg',
'https://img.nickpic.host/q1DXPb.jpg',
'https://img.nickpic.host/q1Dti6.jpg',
'https://img.nickpic.host/q1DnFf.jpg',
'https://img.nickpic.host/q1DM2p.jpg',
'https://img.nickpic.host/q1D1xY.jpg',
'https://img.nickpic.host/q1D4hA.jpg',
'https://img.nickpic.host/q1DzGz.jpg',
'https://img.nickpic.host/q1DDYG.jpg',
'https://img.nickpic.host/q1D7gc.jpg',
'https://img.nickpic.host/q1D84W.jpg',
'https://img.nickpic.host/q1DHaj.jpg',
'https://img.nickpic.host/q1DKP1.jpg',
'https://img.nickpic.host/q1DNiJ.jpg',
'https://img.nickpic.host/q1DV2n.jpg',
'https://img.nickpic.host/q1D0Bs.jpg',
'https://img.nickpic.host/q1D9YQ.jpg',
'https://img.nickpic.host/q1D2h2.jpg',
'https://img.nickpic.host/q1DkIx.jpg',
'https://img.nickpic.host/q1DJgN.jpg',
'https://img.nickpic.host/q1DLDO.jpg',
'https://img.nickpic.host/q1DPTm.jpg',
'https://img.nickpic.host/q1DWa8.jpg',
'https://img.nickpic.host/q1DZnq.jpg',
'https://img.nickpic.host/q1wI65.jpg',
'https://img.nickpic.host/q1wGBD.jpg',
'https://img.nickpic.host/q1Dd2d.jpg',
'https://img.nickpic.host/q1wmYP.jpg',
'https://img.nickpic.host/q1wpIM.jpg',
'https://img.nickpic.host/q1wvqF.jpg',
'https://img.nickpic.host/q1wxDe.jpg',
'https://img.nickpic.host/q1wBTX.jpg',
'https://img.nickpic.host/q1wsnf.jpg',
'https://img.nickpic.host/q1wrjb.jpg',
'https://img.nickpic.host/q1w396.jpg',
'https://img.nickpic.host/q1wj6Y.jpg',
'https://img.nickpic.host/q1wabp.jpg',
'https://img.nickpic.host/q1wlHA.jpg',
'https://img.nickpic.host/q1wSmG.jpg',
'https://img.nickpic.host/q1wcqz.jpg',
'https://img.nickpic.host/q1wqTW.jpg',
'https://img.nickpic.host/q1wgwc.jpg',
'https://img.nickpic.host/q1wAj1.jpg',
'https://img.nickpic.host/q1wEtj.jpg',
'https://img.nickpic.host/q1wO9J.jpg',
'https://img.nickpic.host/q1wCCs.jpg',
'https://img.nickpic.host/q1w6bn.jpg',
'https://img.nickpic.host/q1wQH2.jpg',
'https://img.nickpic.host/q1wXmQ.jpg',
'https://img.nickpic.host/q1wiux.jpg',
'https://img.nickpic.host/q1wnwN.jpg',
'https://img.nickpic.host/q1wtWO.jpg',
'https://img.nickpic.host/q1wRlm.jpg',
'https://img.nickpic.host/q1w1t8.jpg',
'https://img.nickpic.host/q1w4eq.jpg',
'https://img.nickpic.host/q1wwbd.jpg',
'https://img.nickpic.host/q1wzCD.jpg',
'https://img.nickpic.host/q1w7N5.jpg',
'https://img.nickpic.host/q1wKmP.jpg',
'https://img.nickpic.host/q1wYuM.jpg',
'https://img.nickpic.host/q1wHzF.jpg',
'https://img.nickpic.host/q1wNWe.jpg',
'https://img.nickpic.host/q1wflX.jpg',
'https://img.nickpic.host/q1w0Mb.jpg',
'https://img.nickpic.host/q1w2ef.jpg',
'https://img.nickpic.host/q1wer6.jpg',
'https://img.nickpic.host/q1wkQp.jpg',
'https://img.nickpic.host/q1wJNY.jpg',
'https://img.nickpic.host/q1wPoA.jpg',
'https://img.nickpic.host/q1wTAG.jpg',
'https://img.nickpic.host/q1wWzz.jpg',
'https://img.nickpic.host/q1wZZc.jpg',
'https://img.nickpic.host/q1wylW.jpg',
'https://img.nickpic.host/q1zIkj.jpg',
'https://img.nickpic.host/q1zGM1.jpg',
'https://img.nickpic.host/q1zorJ.jpg',
'https://img.nickpic.host/q1zpQn.jpg',
'https://img.nickpic.host/q1zvVs.jpg',
'https://img.nickpic.host/q1zBo2.jpg',
'https://img.nickpic.host/q1zbAQ.jpg',
'https://img.nickpic.host/q1zr7x.jpg',
'https://img.nickpic.host/q1zsZN.jpg',
'https://img.nickpic.host/q1zF5O.jpg',
'https://img.nickpic.host/q1zaRm.jpg',
'https://img.nickpic.host/q1zjk8.jpg',
'https://img.nickpic.host/q1z5sq.jpg',
'https://img.nickpic.host/q1zSQd.jpg',
'https://img.nickpic.host/q1zcVD.jpg',
'https://img.nickpic.host/q1zqp5.jpg',
'https://img.nickpic.host/q1zuAP.jpg',
'https://img.nickpic.host/q1zA7M.jpg',
'https://img.nickpic.host/q1zEdF.jpg',
'https://img.nickpic.host/q1zh5e.jpg',
'https://img.nickpic.host/q1z6RX.jpg',
'https://img.nickpic.host/q1zCJb.jpg',
'https://img.nickpic.host/q1zXU6.jpg',
'https://img.nickpic.host/q1zUsf.jpg',
'https://img.nickpic.host/q1zifp.jpg',
'https://img.nickpic.host/q1ztpY.jpg',
'https://img.nickpic.host/q1zMEA.jpg',
'https://img.nickpic.host/q1zR8G.jpg',
'https://img.nickpic.host/q1z1dz.jpg',
'https://img.nickpic.host/q1zDSc.jpg',
'https://img.nickpic.host/q1zwRW.jpg',
'https://img.nickpic.host/q1zzJ1.jpg',
'https://img.nickpic.host/q1z83j.jpg',
'https://img.nickpic.host/q1zKUJ.jpg',
'https://img.nickpic.host/q1zYfn.jpg',
'https://img.nickpic.host/q1zVE2.jpg',
'https://img.nickpic.host/q1zNvs.jpg',
'https://img.nickpic.host/q1zf8Q.jpg',
'https://img.nickpic.host/q1z0yx.jpg',
'https://img.nickpic.host/q1z9SN.jpg',
'https://img.nickpic.host/q1zkLm.jpg',
'https://img.nickpic.host/q1ze1O.jpg',
'https://img.nickpic.host/q1zL38.jpg',
'https://img.nickpic.host/q1zPXq.jpg',
'https://img.nickpic.host/q1zTfd.jpg',
'https://img.nickpic.host/q1zdO5.jpg',
'https://img.nickpic.host/q1zZvD.jpg',
'https://img.nickpic.host/q17GyM.jpg',
'https://img.nickpic.host/q1zy8P.jpg',
'https://img.nickpic.host/q17mcF.jpg',
'https://img.nickpic.host/q17pLX.jpg',
'https://img.nickpic.host/q17o1e.jpg',
'https://img.nickpic.host/q17BXf.jpg',
'https://img.nickpic.host/q17xFb.jpg',
'https://img.nickpic.host/q17b06.jpg',
'https://img.nickpic.host/q173OY.jpg',
'https://img.nickpic.host/q17sxp.jpg',
'https://img.nickpic.host/q17jGG.jpg',
'https://img.nickpic.host/q17FKA.jpg',
'https://img.nickpic.host/q17lcz.jpg',
'https://img.nickpic.host/q1754c.jpg',
'https://img.nickpic.host/q17SLW.jpg',
'https://img.nickpic.host/q17qij.jpg',
'https://img.nickpic.host/q17gF1.jpg',
'https://img.nickpic.host/q17Exn.jpg',
'https://img.nickpic.host/q17u0J.jpg',
'https://img.nickpic.host/q17Ohs.jpg',
'https://img.nickpic.host/q17hK2.jpg',
'https://img.nickpic.host/q17CGQ.jpg',
'https://img.nickpic.host/q17U4N.jpg',
'https://img.nickpic.host/q17Qgx.jpg',
'https://img.nickpic.host/q17nam.jpg',
'https://img.nickpic.host/q17XPO.jpg',
'https://img.nickpic.host/q17ti8.jpg',
'https://img.nickpic.host/q17M2q.jpg',
'https://img.nickpic.host/q171xd.jpg',
'https://img.nickpic.host/q17DY5.jpg',
'https://img.nickpic.host/q174hD.jpg',
'https://img.nickpic.host/q177gM.jpg',
'https://img.nickpic.host/q17zGP.jpg',
'https://img.nickpic.host/q178DF.jpg',
'https://img.nickpic.host/q17KPe.jpg',
'https://img.nickpic.host/q17HaX.jpg',
'https://img.nickpic.host/q17V2f.jpg',
'https://img.nickpic.host/q17Nnb.jpg',
'https://img.nickpic.host/q1726p.jpg',
'https://img.nickpic.host/q170B6.jpg',
'https://img.nickpic.host/q17kIA.jpg',
'https://img.nickpic.host/q179YY.jpg',
'https://img.nickpic.host/q17JqG.jpg',
'https://img.nickpic.host/q17LDz.jpg',
'https://img.nickpic.host/q17PTc.jpg',
'https://img.nickpic.host/q17Zn1.jpg',
'https://img.nickpic.host/q17WaW.jpg',
'https://img.nickpic.host/q17d9j.jpg',
'https://img.nickpic.host/q18I6n.jpg',
'https://img.nickpic.host/q18GBJ.jpg',
'https://img.nickpic.host/q18pI2.jpg',
'https://img.nickpic.host/q18mHs.jpg',
'https://img.nickpic.host/q18xwx.jpg',
'https://img.nickpic.host/q18vqQ.jpg',
'https://img.nickpic.host/q18BTN.jpg',
'https://img.nickpic.host/q18rjO.jpg',
'https://img.nickpic.host/q18stm.jpg',
'https://img.nickpic.host/q18abq.jpg',
'https://img.nickpic.host/q18398.jpg',
'https://img.nickpic.host/q18j6d.jpg',
'https://img.nickpic.host/q18lHD.jpg',
'https://img.nickpic.host/q18cqP.jpg',
'https://img.nickpic.host/q18Sm5.jpg',
'https://img.nickpic.host/q18gwM.jpg',
'https://img.nickpic.host/q18qWF.jpg',
'https://img.nickpic.host/q18Aje.jpg',
'https://img.nickpic.host/q18EtX.jpg',
'https://img.nickpic.host/q18Oeb.jpg',
'https://img.nickpic.host/q18CC6.jpg',
'https://img.nickpic.host/q186bf.jpg',
'https://img.nickpic.host/q18QNp.jpg',
'https://img.nickpic.host/q18iuA.jpg',
'https://img.nickpic.host/q18XmY.jpg',
'https://img.nickpic.host/q18nzG.jpg',
'https://img.nickpic.host/q18tWz.jpg',
'https://img.nickpic.host/q18Rlc.jpg',
'https://img.nickpic.host/q184e1.jpg',
'https://img.nickpic.host/q181tW.jpg',
'https://img.nickpic.host/q18zCJ.jpg',
'https://img.nickpic.host/q187Nn.jpg',
'https://img.nickpic.host/q18wrj.jpg',
'https://img.nickpic.host/q18Kos.jpg',
'https://img.nickpic.host/q18Yu2.jpg',
'https://img.nickpic.host/q18NZx.jpg',
'https://img.nickpic.host/q18HzQ.jpg',
'https://img.nickpic.host/q18flN.jpg',
'https://img.nickpic.host/q180MO.jpg',
'https://img.nickpic.host/q182km.jpg',
'https://img.nickpic.host/q18er8.jpg',
'https://img.nickpic.host/q18kQq.jpg',
'https://img.nickpic.host/q18JNd.jpg',
'https://img.nickpic.host/q18TA5.jpg',
'https://img.nickpic.host/q18ZZM.jpg',
'https://img.nickpic.host/q18PoD.jpg',
'https://img.nickpic.host/q18y5F.jpg',
'https://img.nickpic.host/q18WzP.jpg',
'https://img.nickpic.host/q1KGMe.jpg',
'https://img.nickpic.host/q1KIkX.jpg',
'https://img.nickpic.host/q1KpQf.jpg',
'https://img.nickpic.host/q1Kosb.jpg',
'https://img.nickpic.host/q1KvV6.jpg',
'https://img.nickpic.host/q1KBpp.jpg',
'https://img.nickpic.host/q1KbAY.jpg',
'https://img.nickpic.host/q1Kr7A.jpg',
'https://img.nickpic.host/q1KsdG.jpg',
'https://img.nickpic.host/q1KF5z.jpg',
'https://img.nickpic.host/q1KjkW.jpg',
'https://img.nickpic.host/q1KSUj.jpg',
'https://img.nickpic.host/q1KaRc.jpg',
'https://img.nickpic.host/q1K5s1.jpg',
'https://img.nickpic.host/q1KcVJ.jpg',
'https://img.nickpic.host/q1Kqpn.jpg',
'https://img.nickpic.host/q1KuEs.jpg',
'https://img.nickpic.host/q1KEdQ.jpg',
'https://img.nickpic.host/q1KA72.jpg',
'https://img.nickpic.host/q1KhSx.jpg',
'https://img.nickpic.host/q1K6RN.jpg',
'https://img.nickpic.host/q1KXU8.jpg',
'https://img.nickpic.host/q1KCJO.jpg',
'https://img.nickpic.host/q1KU3m.jpg',
'https://img.nickpic.host/q1Kifq.jpg',
'https://img.nickpic.host/q1Ktpd.jpg',
'https://img.nickpic.host/q1KR85.jpg',
'https://img.nickpic.host/q1KMED.jpg',
'https://img.nickpic.host/q1K1dP.jpg',
'https://img.nickpic.host/q1KDSM.jpg',
'https://img.nickpic.host/q1Kw1F.jpg',
'https://img.nickpic.host/q1KzJe.jpg',
'https://img.nickpic.host/q1K83X.jpg',
'https://img.nickpic.host/q1KKXb.jpg',
'https://img.nickpic.host/q1KYff.jpg',
'https://img.nickpic.host/q1Kf8Y.jpg',
'https://img.nickpic.host/q1KNv6.jpg',
'https://img.nickpic.host/q1KVOp.jpg',
'https://img.nickpic.host/q1K0yA.jpg',
'https://img.nickpic.host/q1K9cG.jpg',
'https://img.nickpic.host/q1Ke1z.jpg',
'https://img.nickpic.host/q1KkLc.jpg',
'https://img.nickpic.host/q1KL3W.jpg',
'https://img.nickpic.host/q1KT0j.jpg',
'https://img.nickpic.host/q1KPX1.jpg',
'https://img.nickpic.host/q1KZvJ.jpg',
'https://img.nickpic.host/q1KyKs.jpg',
'https://img.nickpic.host/q1KdOn.jpg',
'https://img.nickpic.host/q1YGy2.jpg',
'https://img.nickpic.host/q1YmcQ.jpg',
'https://img.nickpic.host/q1YpLN.jpg',
'https://img.nickpic.host/q1Yo4x.jpg',
'https://img.nickpic.host/q1YxFO.jpg',
'https://img.nickpic.host/q1Yb08.jpg',
'https://img.nickpic.host/q1Ysxq.jpg',
'https://img.nickpic.host/q1YBim.jpg',
'https://img.nickpic.host/q1Y3Od.jpg',
'https://img.nickpic.host/q1YjG5.jpg',
'https://img.nickpic.host/q1YFKD.jpg',
'https://img.nickpic.host/q1YlcP.jpg',
'https://img.nickpic.host/q1Y54M.jpg',
'https://img.nickpic.host/q1YgFe.jpg',
'https://img.nickpic.host/q1YSPF.jpg',
'https://img.nickpic.host/q1Yu2b.jpg',
'https://img.nickpic.host/q1YqiX.jpg',
'https://img.nickpic.host/q1YExf.jpg',
'https://img.nickpic.host/q1YhYp.jpg',
'https://img.nickpic.host/q1YOh6.jpg',
'https://img.nickpic.host/q1YQgA.jpg',
'https://img.nickpic.host/q1YCGY.jpg',
'https://img.nickpic.host/q1YXPz.jpg',
'https://img.nickpic.host/q1YUDG.jpg',
'https://img.nickpic.host/q1Ynac.jpg',
'https://img.nickpic.host/q1YtiW.jpg',
'https://img.nickpic.host/q1Y1Bj.jpg',
'https://img.nickpic.host/q1YM21.jpg',
'https://img.nickpic.host/q1Y4hJ.jpg',
'https://img.nickpic.host/q1YDYn.jpg',
'https://img.nickpic.host/q1YzIs.jpg',
'https://img.nickpic.host/q1Y7g2.jpg',
'https://img.nickpic.host/q1Y8DQ.jpg',
'https://img.nickpic.host/q1YKTx.jpg',
'https://img.nickpic.host/q1YHaN.jpg',
'https://img.nickpic.host/q1YNnO.jpg',
'https://img.nickpic.host/q1Y26q.jpg',
'https://img.nickpic.host/q1YV9m.jpg',
'https://img.nickpic.host/q1Y0B8.jpg',
'https://img.nickpic.host/q1Y9Yd.jpg',
'https://img.nickpic.host/q1YJq5.jpg',
'https://img.nickpic.host/q1YPTM.jpg',
'https://img.nickpic.host/q1YkID.jpg',
'https://img.nickpic.host/q1YLDP.jpg',
'https://img.nickpic.host/q1YWjF.jpg',
'https://img.nickpic.host/q1YZne.jpg',
'https://img.nickpic.host/q1Yd9X.jpg',
'https://img.nickpic.host/q1HGbb.jpg',
'https://img.nickpic.host/q1HI6f.jpg',
'https://img.nickpic.host/q1HmH6.jpg']
let zuper = dragon[Math.floor(Math.random() * dragon.length)]
dbz = await getBuffer(zuper)
const del =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const dra = del[Math.floor(Math.random() * del.length)]
cnf.sendMessage(from, dbz, image, { caption: dra, quoted: mek })
addFilter(from)
break

case prefix+'dragonmaid':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)	  
const kann1 =['https://thumbs2.imgbox.com/c3/50/W0nbyCiS_t.png','https://thumbs2.imgbox.com/1c/7e/eRKQM45h_t.png','https://thumbs2.imgbox.com/94/8c/n2HjLePg_t.png','https://thumbs2.imgbox.com/fb/40/1xoF42v7_t.jpg','https://thumbs2.imgbox.com/19/02/K0IX8hNa_t.jpg','https://thumbs2.imgbox.com/3f/d8/uRpYYcm8_t.png','https://thumbs2.imgbox.com/ba/80/CICva0aP_t.jpg','https://thumbs2.imgbox.com/b9/7d/CvycWvaU_t.jpg','https://thumbs2.imgbox.com/3d/c8/SqA7bfKo_t.png','https://thumbs2.imgbox.com/74/f1/p6Q2xF5q_t.jpg','https://thumbs2.imgbox.com/be/e0/ldpbCJ6H_t.jpg','https://thumbs2.imgbox.com/f1/7d/qzRkTeX4_t.jpg','https://thumbs2.imgbox.com/1e/e4/poS3YwtE_t.jpg','https://thumbs2.imgbox.com/97/a8/DZzNj5yS_t.jpg','https://thumbs2.imgbox.com/a8/ca/NsFoQzTs_t.jpg','https://thumbs2.imgbox.com/8f/fa/Y5tVVGHC_t.png','https://thumbs2.imgbox.com/6f/4b/tKYSwpfa_t.png','https://thumbs2.imgbox.com/b7/7e/fTVi8j7s_t.png','https://thumbs2.imgbox.com/e4/dd/Q1byz4yl_t.png','https://thumbs2.imgbox.com/7c/0a/21hsTItk_t.png','https://thumbs2.imgbox.com/37/cc/WSqqb2D8_t.png','https://thumbs2.imgbox.com/fc/d1/SrbH5osA_t.jpg','https://thumbs2.imgbox.com/c6/22/40gRorOM_t.jpg','https://thumbs2.imgbox.com/41/3a/A2XF4FmP_t.jpg','https://thumbs2.imgbox.com/21/d2/6ssoYzWf_t.jpg','https://thumbs2.imgbox.com/39/13/g8amI9nB_t.jpg','https://thumbs2.imgbox.com/45/6c/5dX3DBvi_t.png','https://thumbs2.imgbox.com/a9/e3/cBMKcM7Z_t.jpg','https://thumbs2.imgbox.com/fd/d6/I2q9Yfnx_t.jpg','https://thumbs2.imgbox.com/ac/f5/uaDOma9k_t.png','https://thumbs2.imgbox.com/e9/70/H4tblvok_t.png','https://thumbs2.imgbox.com/c7/e6/vOmepkiL_t.jpg','https://thumbs2.imgbox.com/a2/b8/DhJzdDQ1_t.png','https://thumbs2.imgbox.com/47/48/Bkn2zTlM_t.png','https://thumbs2.imgbox.com/45/f8/VUjBT9Od_t.png','https://thumbs2.imgbox.com/ac/d7/t3CZAlzY_t.png','https://thumbs2.imgbox.com/9a/a8/Y3LM0VhA_t.png','https://thumbs2.imgbox.com/24/c9/4Zcr85Kl_t.jpg','https://thumbs2.imgbox.com/e5/cb/vIUyszpn_t.jpg','https://thumbs2.imgbox.com/99/65/eUEAL0oA_t.jpg','https://thumbs2.imgbox.com/a3/57/inUZgudl_t.jpg','https://thumbs2.imgbox.com/0b/a5/ozNaJUrd_t.jpg','https://thumbs2.imgbox.com/8d/09/ibQRs98c_t.jpg','https://thumbs2.imgbox.com/f9/d6/89s3qb8i_t.jpg','https://thumbs2.imgbox.com/da/4c/M8MoIK9y_t.png','https://thumbs2.imgbox.com/04/86/MZ6skBnr_t.png','https://thumbs2.imgbox.com/20/98/53nfepSJ_t.png','https://thumbs2.imgbox.com/0b/1a/vlIOWEyp_t.jpg','https://thumbs2.imgbox.com/b0/54/f9fwEVfL_t.jpg','https://thumbs2.imgbox.com/c1/30/Z2ETtqEU_t.jpg','https://thumbs2.imgbox.com/a5/1e/qo9dEQ5a_t.png','https://thumbs2.imgbox.com/84/a2/CYaDEgPj_t.png','https://thumbs2.imgbox.com/fe/22/q9JzqCO3_t.png','https://thumbs2.imgbox.com/d0/69/FAVSP4Ss_t.png','https://thumbs2.imgbox.com/23/78/n2doRD3t_t.jpg','https://thumbs2.imgbox.com/d8/6c/U41ZiO5X_t.jpg','https://thumbs2.imgbox.com/a9/a0/rqqdeGVx_t.jpg','https://thumbs2.imgbox.com/ab/2e/rsYB4Y6A_t.jpg','https://thumbs2.imgbox.com/11/45/7uXtgyKe_t.jpg','https://thumbs2.imgbox.com/3b/32/H0Ya7cUn_t.png','https://thumbs2.imgbox.com/5d/f4/b2P6cjCt_t.png','https://thumbs2.imgbox.com/4f/81/tvkVn5Hn_t.png','https://thumbs2.imgbox.com/43/1b/jtmtlfe7_t.jpg','https://thumbs2.imgbox.com/67/97/7S2DdXHA_t.jpg','https://thumbs2.imgbox.com/8a/f7/BpVQpcBE_t.jpg','https://thumbs2.imgbox.com/70/ee/zkqzWjhR_t.jpg','https://thumbs2.imgbox.com/62/43/TqlOi3jG_t.jpg','https://thumbs2.imgbox.com/d1/46/cpDa5C9D_t.png','https://thumbs2.imgbox.com/3b/ec/x9XkTiH6_t.png','https://thumbs2.imgbox.com/c5/e2/jwPVsinf_t.jpg','https://thumbs2.imgbox.com/b0/6d/2VmbZV2z_t.jpg','https://thumbs2.imgbox.com/94/3a/APSsvIo5_t.jpg','https://thumbs2.imgbox.com/7d/f4/p4Xk7dPR_t.jpg','https://thumbs2.imgbox.com/52/6d/PPg9ofqP_t.jpg','https://thumbs2.imgbox.com/d6/e7/LQyChVJf_t.png','https://thumbs2.imgbox.com/76/79/dhfraor0_t.jpg','https://thumbs2.imgbox.com/16/d6/HztRvyuy_t.png','https://thumbs2.imgbox.com/77/44/IIovfh4D_t.png','https://thumbs2.imgbox.com/6a/40/uHRW9j8g_t.jpg','https://thumbs2.imgbox.com/19/e5/Ig21htAV_t.jpg','https://thumbs2.imgbox.com/65/53/CwlYBU5u_t.jpg','https://thumbs2.imgbox.com/f7/96/uKYFpkBJ_t.png','https://thumbs2.imgbox.com/62/ec/ydHACUrY_t.jpg','https://thumbs2.imgbox.com/e6/d9/ZgMkweH7_t.png','https://thumbs2.imgbox.com/7c/88/6xAMjMR1_t.png','https://thumbs2.imgbox.com/1d/e9/uWtow5Ni_t.png','https://thumbs2.imgbox.com/4f/1a/ODXFuq53_t.png','https://thumbs2.imgbox.com/b2/ac/NGFlZ0SI_t.png','https://thumbs2.imgbox.com/ae/c5/6DxLRkt7_t.png','https://thumbs2.imgbox.com/d7/b1/UBrsnELc_t.png','https://thumbs2.imgbox.com/f3/ce/upVivvjU_t.jpg','https://thumbs2.imgbox.com/f8/6e/kCerOOc1_t.jpg','https://thumbs2.imgbox.com/d0/c7/hap8Ppbx_t.jpg','https://thumbs2.imgbox.com/2e/b7/VaIG06vL_t.jpg','https://thumbs2.imgbox.com/b7/e0/tgTHCRmP_t.jpg','https://thumbs2.imgbox.com/a3/8b/Y2MQYU4T_t.jpg','https://thumbs2.imgbox.com/28/6f/sO3YkQe4_t.jpg','https://thumbs2.imgbox.com/b9/9c/xFCTMoWZ_t.jpg','https://thumbs2.imgbox.com/15/c6/sxcs5YE4_t.jpg','https://thumbs2.imgbox.com/f8/d0/gesgZcHM_t.png','https://thumbs2.imgbox.com/f2/e7/kUCBol6R_t.jpg','https://thumbs2.imgbox.com/dc/a8/ORbTcAYa_t.jpg','https://thumbs2.imgbox.com/e3/0a/CCSJyyWk_t.png','https://thumbs2.imgbox.com/2e/f4/Vgvs6qZz_t.png','https://thumbs2.imgbox.com/d2/8c/pnSkrq3U_t.png','https://thumbs2.imgbox.com/23/2a/6DLkhqc2_t.png','https://thumbs2.imgbox.com/b5/18/qYkREeuv_t.png','https://thumbs2.imgbox.com/a0/5b/yefbDYIT_t.jpg','https://thumbs2.imgbox.com/7b/54/an1BA5DF_t.jpg','https://thumbs2.imgbox.com/4b/d8/69k3VPBg_t.jpg','https://thumbs2.imgbox.com/17/6d/QJAKFFtB_t.png','https://thumbs2.imgbox.com/d2/46/h8IA1N7s_t.jpg','https://thumbs2.imgbox.com/2d/19/qSk5ElhM_t.jpg','https://thumbs2.imgbox.com/14/9f/qwFXPRwp_t.jpg','https://thumbs2.imgbox.com/87/4c/EfqMoysA_t.png','https://thumbs2.imgbox.com/76/9b/2o0rgHs1_t.jpg','https://thumbs2.imgbox.com/6b/6e/1Zxg1mXW_t.png','https://thumbs2.imgbox.com/55/b2/zW7ANd0I_t.png','https://thumbs2.imgbox.com/c5/2b/dBoogGuP_t.jpg','https://thumbs2.imgbox.com/1e/7d/df8rlSk6_t.jpg','https://thumbs2.imgbox.com/24/d5/6WQDK9Ik_t.jpg','https://thumbs2.imgbox.com/7a/ed/1Hy3whrD_t.jpg','https://thumbs2.imgbox.com/99/64/5OG1FFpO_t.png','https://thumbs2.imgbox.com/d9/19/bnx3hMaU_t.jpg','https://thumbs2.imgbox.com/a9/76/pHedzXmB_t.png','https://thumbs2.imgbox.com/aa/25/N0MRxOsp_t.jpg','https://thumbs2.imgbox.com/f9/1e/PYPOsEMM_t.jpg','https://thumbs2.imgbox.com/b3/3d/tx9FVXDt_t.jpg','https://thumbs2.imgbox.com/e6/16/h6ZsIbrz_t.jpg','https://thumbs2.imgbox.com/c3/7c/aWWjCQvm_t.jpg','https://thumbs2.imgbox.com/e5/ff/V2os6m1a_t.png','https://thumbs2.imgbox.com/4a/de/lkjewr6n_t.jpg','https://thumbs2.imgbox.com/80/a5/zDHowJHM_t.jpg','https://thumbs2.imgbox.com/f5/4f/9Dz59mv9_t.png','https://thumbs2.imgbox.com/3d/f6/wnhnn6jQ_t.png','https://thumbs2.imgbox.com/86/d0/6gVGdANA_t.jpg','https://thumbs2.imgbox.com/b7/09/gni5VzfE_t.png','https://thumbs2.imgbox.com/0d/14/67opLf6Z_t.jpg','https://thumbs2.imgbox.com/86/f6/8DQOpAGj_t.jpg','https://thumbs2.imgbox.com/96/7d/ncFyaivM_t.jpg','https://thumbs2.imgbox.com/a5/09/1NkLESVo_t.jpg','https://thumbs2.imgbox.com/00/8c/BvEp5pOW_t.png','https://thumbs2.imgbox.com/92/ba/sEkseer4_t.png','https://thumbs2.imgbox.com/85/c6/Mh2sg9q6_t.jpg','https://thumbs2.imgbox.com/02/4a/w1T1Demk_t.jpg','https://thumbs2.imgbox.com/47/3a/vlVPh2ZO_t.jpg','https://thumbs2.imgbox.com/02/11/5pfL9Pmw_t.png','https://thumbs2.imgbox.com/2e/99/Q2uINWHr_t.png','https://thumbs2.imgbox.com/63/c0/9swlJ6sH_t.png','https://thumbs2.imgbox.com/19/d7/J8dFALM3_t.png','https://thumbs2.imgbox.com/91/2b/HqNe4Sat_t.png','https://thumbs2.imgbox.com/d9/5e/2Jveo0Id_t.png','https://thumbs2.imgbox.com/8e/75/vgfZzbC2_t.png','https://thumbs2.imgbox.com/b1/3b/CDaebCl9_t.jpg','https://thumbs2.imgbox.com/75/cd/1M8RTTRx_t.jpg','https://thumbs2.imgbox.com/cd/0e/9RztSG1s_t.png','https://thumbs2.imgbox.com/fa/86/eOscGVqu_t.jpg','https://thumbs2.imgbox.com/57/25/BwiVCsdc_t.png','https://thumbs2.imgbox.com/a7/47/I6BGWNsp_t.jpg','https://thumbs2.imgbox.com/dd/16/X1k58w22_t.jpg','https://thumbs2.imgbox.com/56/d9/ryB14pyX_t.png','https://thumbs2.imgbox.com/10/9d/S6AJJEkE_t.jpg','https://thumbs2.imgbox.com/41/fd/3tj2WgDT_t.jpg','https://thumbs2.imgbox.com/1e/d2/zPuzQVMz_t.jpg','https://thumbs2.imgbox.com/9c/0d/81bDZMpv_t.jpg','https://thumbs2.imgbox.com/b2/6d/npTa4Gku_t.jpg','https://thumbs2.imgbox.com/17/cc/OJBUngSp_t.jpg','https://thumbs2.imgbox.com/ea/fe/rDuNLnyn_t.jpg','https://thumbs2.imgbox.com/29/0a/Sdt9NAvp_t.jpg','https://thumbs2.imgbox.com/f4/39/Ig5whd20_t.jpg','https://thumbs2.imgbox.com/d7/1e/Kl7wRIwL_t.jpg','https://thumbs2.imgbox.com/a5/45/suV0WX0m_t.jpg','https://thumbs2.imgbox.com/6b/ae/xjvEBTQm_t.jpg','https://thumbs2.imgbox.com/16/ee/P8gCFtTL_t.png','https://thumbs2.imgbox.com/e6/b2/u49UXQqo_t.jpg','https://thumbs2.imgbox.com/d8/6c/aNBkGmFl_t.jpg','https://thumbs2.imgbox.com/7d/33/StRhJtKD_t.jpg','https://thumbs2.imgbox.com/f2/6c/RgLf7une_t.jpg','https://thumbs2.imgbox.com/c5/ce/xSuB4AUs_t.jpg','https://thumbs2.imgbox.com/eb/f9/va4R7U1D_t.jpg','https://thumbs2.imgbox.com/10/c3/W5LWNDz5_t.jpg','https://thumbs2.imgbox.com/59/06/8ruE7pdf_t.jpg','https://thumbs2.imgbox.com/f1/1f/Ol26YhUz_t.jpg','https://thumbs2.imgbox.com/cc/36/AEsinpqz_t.jpg','https://thumbs2.imgbox.com/ad/12/VxrNueD4_t.png','https://thumbs2.imgbox.com/7f/93/jJXZLOTw_t.png','https://thumbs2.imgbox.com/dc/25/ve344UQp_t.png','https://thumbs2.imgbox.com/86/92/iWKRCm2w_t.jpg','https://thumbs2.imgbox.com/ff/4e/L9HJXt18_t.jpg','https://thumbs2.imgbox.com/07/50/vc8SLQhx_t.jpg','https://thumbs2.imgbox.com/28/56/yViredeD_t.jpg','https://thumbs2.imgbox.com/5e/58/64VTXBdH_t.png','https://thumbs2.imgbox.com/1a/2e/KdO9iSDl_t.png','https://thumbs2.imgbox.com/8e/51/ycknmFQn_t.png','https://thumbs2.imgbox.com/b7/59/hpiWYJ2n_t.png','https://thumbs2.imgbox.com/68/71/63bMNgEa_t.png','https://thumbs2.imgbox.com/3c/70/eEep55Ze_t.jpg','https://thumbs2.imgbox.com/ab/b9/wHlIi1Zo_t.png','https://thumbs2.imgbox.com/62/33/DN1ig3X7_t.jpg',
	      'https://thumbs2.imgbox.com/12/ec/ZQzdK9BQ_t.jpg','https://thumbs2.imgbox.com/a9/be/junuPrKe_t.jpg','https://thumbs2.imgbox.com/de/09/MuEBCUme_t.png','https://thumbs2.imgbox.com/fe/e2/XpWRwPKF_t.jpg','https://thumbs2.imgbox.com/5c/7f/aIANZHIE_t.jpg','https://thumbs2.imgbox.com/d7/f6/NVMEeTme_t.png','https://thumbs2.imgbox.com/66/61/6QLSjP0W_t.jpg','https://thumbs2.imgbox.com/2c/3c/TeEauHib_t.png','https://thumbs2.imgbox.com/dc/83/ZI1B7duC_t.png','https://thumbs2.imgbox.com/69/bc/JDyZKDeq_t.jpg','https://thumbs2.imgbox.com/d5/96/lfdGO6CE_t.jpg','https://thumbs2.imgbox.com/51/75/FqqViJL6_t.jpg','https://thumbs2.imgbox.com/96/7a/kr3WrIKV_t.jpg','https://thumbs2.imgbox.com/48/30/pwppc3PB_t.jpg','https://thumbs2.imgbox.com/99/7f/PnNFArpr_t.png','https://thumbs2.imgbox.com/58/e8/7lWSqPF2_t.jpg','https://thumbs2.imgbox.com/aa/44/FhGu2IdQ_t.jpg','https://thumbs2.imgbox.com/ac/e8/96XwDcGW_t.jpg','https://thumbs2.imgbox.com/95/ac/znyJoftK_t.jpg','https://thumbs2.imgbox.com/d0/3f/kBVANzaJ_t.png','https://thumbs2.imgbox.com/34/00/yIZQMsVI_t.png','https://thumbs2.imgbox.com/44/25/euFMdhWE_t.jpg','https://thumbs2.imgbox.com/ad/d7/Id6UREkp_t.jpg','https://thumbs2.imgbox.com/6a/cc/N8zXdK0W_t.jpg','https://thumbs2.imgbox.com/f9/ca/MktEPjBW_t.jpg','https://thumbs2.imgbox.com/dd/05/IouOMVdM_t.jpg','https://thumbs2.imgbox.com/e7/70/5gA5K6nS_t.png','https://thumbs2.imgbox.com/70/0e/lzhMNPBr_t.png','https://thumbs2.imgbox.com/f8/29/gHN1BqnM_t.png','https://thumbs2.imgbox.com/5f/43/75N1yQla_t.jpg','https://thumbs2.imgbox.com/92/3e/2wWwCwdk_t.jpg','https://thumbs2.imgbox.com/5f/a3/RcQQYsoe_t.png','https://thumbs2.imgbox.com/31/91/FMyyOnPo_t.png','https://thumbs2.imgbox.com/02/3a/eiSlIa8R_t.jpg','https://thumbs2.imgbox.com/27/d7/nyFQyOqN_t.png','https://thumbs2.imgbox.com/a1/97/3Ad6rJja_t.jpg','https://thumbs2.imgbox.com/82/fd/WrMwQbBg_t.jpg','https://thumbs2.imgbox.com/65/dc/mxjTAxEr_t.png','https://thumbs2.imgbox.com/d6/fb/WbGisRT6_t.png','https://thumbs2.imgbox.com/2b/98/Iy4kYMex_t.png','https://thumbs2.imgbox.com/d4/e0/VrbaSsgc_t.jpg','https://thumbs2.imgbox.com/39/c5/xyNop7XV_t.png','https://thumbs2.imgbox.com/0d/39/a4ahUJZK_t.png','https://thumbs2.imgbox.com/99/7b/fx3OHSAk_t.png','https://thumbs2.imgbox.com/6a/03/xxF6KuK5_t.jpg','https://thumbs2.imgbox.com/31/24/DTbjXRGU_t.jpg','https://thumbs2.imgbox.com/de/2a/AJ6touSl_t.jpg','https://thumbs2.imgbox.com/c3/2d/iKPQPGaQ_t.jpg','https://thumbs2.imgbox.com/74/df/eXBxAWiu_t.png','https://thumbs2.imgbox.com/62/7d/j6jtp327_t.jpg','https://thumbs2.imgbox.com/24/61/7hWm0ihI_t.jpg','https://thumbs2.imgbox.com/67/a1/tzP5Kn6B_t.jpg','https://thumbs2.imgbox.com/6a/74/vDuK8cJk_t.png','https://thumbs2.imgbox.com/55/3e/QOeIqRlH_t.jpg','https://thumbs2.imgbox.com/84/1c/2Qbuhr3L_t.jpg','https://thumbs2.imgbox.com/3e/ee/pDvNm6Ho_t.jpg','https://thumbs2.imgbox.com/49/10/qq7kyJ3Z_t.jpg','https://thumbs2.imgbox.com/58/1c/pY48AzfG_t.jpg','https://thumbs2.imgbox.com/59/d0/h0pHZ9xl_t.jpg','https://thumbs2.imgbox.com/6a/1e/zkGHidwC_t.png','https://thumbs2.imgbox.com/f0/9c/tCddslgS_t.png','https://thumbs2.imgbox.com/37/d2/utHX5tD0_t.jpg','https://thumbs2.imgbox.com/dc/e1/0FzRH9pC_t.jpg','https://thumbs2.imgbox.com/b9/89/OWs9CbeQ_t.jpg','https://thumbs2.imgbox.com/31/9d/YHIHoRz2_t.jpg','https://thumbs2.imgbox.com/94/a9/84LiadXV_t.png','https://thumbs2.imgbox.com/9d/98/veZ6xM0U_t.jpg','https://thumbs2.imgbox.com/6f/4e/l6T3y9h3_t.jpg','https://thumbs2.imgbox.com/07/d4/xtMVn1vU_t.jpg','https://thumbs2.imgbox.com/d0/73/WSjQ1yob_t.jpg','https://thumbs2.imgbox.com/33/7d/1gXL5oiv_t.jpg','https://thumbs2.imgbox.com/d1/61/nDhfhwJp_t.jpg','https://thumbs2.imgbox.com/9a/67/RlAlRi4o_t.jpg','https://thumbs2.imgbox.com/05/f2/UDEYbQLS_t.jpg','https://thumbs2.imgbox.com/b7/44/apZqUa5v_t.jpg','https://thumbs2.imgbox.com/19/3a/tjC5DjtE_t.png','https://thumbs2.imgbox.com/16/74/IIFQLEFj_t.png','https://thumbs2.imgbox.com/31/1a/Rp2vPcpd_t.png','https://thumbs2.imgbox.com/da/56/Ivr8We0L_t.png','https://thumbs2.imgbox.com/f4/9c/fTvqIWPy_t.png','https://thumbs2.imgbox.com/5d/56/lyZ0Z5UR_t.png','https://thumbs2.imgbox.com/f9/81/cYkzbtY4_t.jpg','https://thumbs2.imgbox.com/ec/a9/vaIi4O12_t.jpg','https://thumbs2.imgbox.com/21/b8/Brnrpr3h_t.jpg','https://thumbs2.imgbox.com/cf/a1/ArI94dqN_t.jpg','https://thumbs2.imgbox.com/ed/c1/HwT1J1v5_t.jpg','https://thumbs2.imgbox.com/bb/96/4toIvjaJ_t.jpg','https://thumbs2.imgbox.com/70/63/Luu1WJ73_t.png','https://thumbs2.imgbox.com/9d/33/Q0zPjk5N_t.jpg','https://thumbs2.imgbox.com/b2/76/KYNZo1bZ_t.jpg','https://thumbs2.imgbox.com/7f/c4/5TnsdgdV_t.jpg','https://thumbs2.imgbox.com/57/d5/4WC14oGG_t.jpg','https://thumbs2.imgbox.com/b1/39/GYalrYmb_t.jpg','https://thumbs2.imgbox.com/8d/9d/Kn1anv1G_t.jpg','https://thumbs2.imgbox.com/59/ae/jjF8zF55_t.jpg','https://thumbs2.imgbox.com/a4/f0/RbY1jaoh_t.jpg','https://thumbs2.imgbox.com/23/90/3dqT7IAn_t.jpg','https://thumbs2.imgbox.com/38/72/lwl0PlKs_t.png','https://thumbs2.imgbox.com/b0/5a/ZAzdcLZV_t.jpg','https://thumbs2.imgbox.com/e8/b0/CWXJ5hKf_t.png','https://thumbs2.imgbox.com/ca/20/tNXdEPaT_t.jpg','https://thumbs2.imgbox.com/89/d3/rSoE46v7_t.jpg','https://thumbs2.imgbox.com/f4/b2/1jBXCEiB_t.jpg','https://thumbs2.imgbox.com/29/f9/GyFGU18o_t.jpg','https://thumbs2.imgbox.com/fc/e8/BbSSUNDc_t.jpg','https://thumbs2.imgbox.com/00/0a/1hxXbdqX_t.jpg','https://thumbs2.imgbox.com/7d/bb/LyRNAukm_t.jpg','https://thumbs2.imgbox.com/d6/53/C2yyNV3w_t.jpg','https://thumbs2.imgbox.com/73/b6/NTgza9qo_t.jpg','https://thumbs2.imgbox.com/c2/d0/jSFrqub5_t.jpg','https://thumbs2.imgbox.com/6a/be/aX6FgPEk_t.jpg','https://thumbs2.imgbox.com/9f/82/CqqPrmdl_t.jpg','https://thumbs2.imgbox.com/10/22/I2EmoKNY_t.jpg','https://thumbs2.imgbox.com/8a/9c/CvHnNoE1_t.jpg','https://thumbs2.imgbox.com/3c/d7/rtuVFFxe_t.jpg','https://thumbs2.imgbox.com/d5/7f/qfJ8bWCM_t.jpg','https://thumbs2.imgbox.com/e4/77/D2BV55j7_t.jpg','https://thumbs2.imgbox.com/d6/71/9oK6BBAa_t.jpg','https://thumbs2.imgbox.com/c6/85/RkRUqcjP_t.jpg','https://thumbs2.imgbox.com/65/66/u0nCOBkJ_t.jpg','https://thumbs2.imgbox.com/05/e5/uANoWTWE_t.jpg','https://thumbs2.imgbox.com/f0/69/h6h0hbkX_t.png','https://thumbs2.imgbox.com/81/b8/XtPNDRJb_t.jpg','https://thumbs2.imgbox.com/69/12/JBgkS8T0_t.jpg','https://thumbs2.imgbox.com/9f/d3/dh3azH0z_t.png','https://thumbs2.imgbox.com/61/8d/NNG0e1Fl_t.png','https://thumbs2.imgbox.com/18/bb/dpIMzrfL_t.jpg','https://thumbs2.imgbox.com/a2/5f/kKCOrOVp_t.png','https://thumbs2.imgbox.com/95/64/j8Gk45N2_t.jpg','https://thumbs2.imgbox.com/2a/b9/Tf1yGz81_t.png','https://thumbs2.imgbox.com/16/7f/dMUWBjvV_t.jpg','https://thumbs2.imgbox.com/42/1d/I5GIysKZ_t.png','https://thumbs2.imgbox.com/09/14/T7RODmOl_t.png','https://thumbs2.imgbox.com/e5/73/yh6oYEsn_t.png','https://thumbs2.imgbox.com/50/96/vXue2DT6_t.jpg','https://thumbs2.imgbox.com/c0/5f/1TnOIrzI_t.png','https://thumbs2.imgbox.com/a2/8d/tn0vM25A_t.jpg','https://thumbs2.imgbox.com/c9/a5/xvhameMn_t.jpg','https://thumbs2.imgbox.com/44/68/3DoLzJCB_t.jpg','https://thumbs2.imgbox.com/27/cb/12KUhata_t.png','https://thumbs2.imgbox.com/ce/e7/k2xTJwxU_t.png','https://thumbs2.imgbox.com/b6/ca/mBfmqLp2_t.png','https://thumbs2.imgbox.com/81/70/5iOzeMT1_t.jpg','https://thumbs2.imgbox.com/ad/87/Jb1M1xaM_t.png','https://thumbs2.imgbox.com/39/23/Bw7kFWqc_t.png','https://thumbs2.imgbox.com/c7/98/ioprD872_t.png','https://thumbs2.imgbox.com/94/dd/r0grKLPc_t.png','https://thumbs2.imgbox.com/0c/1e/jVWePPum_t.jpg','https://thumbs2.imgbox.com/1d/17/agwr3nyl_t.png','https://thumbs2.imgbox.com/6b/60/cadR1Oil_t.jpg','https://thumbs2.imgbox.com/cd/f3/8diCty8G_t.jpg','https://thumbs2.imgbox.com/db/9b/j6aB7U0N_t.jpg','https://thumbs2.imgbox.com/a0/1e/aONOOWfw_t.jpg','https://thumbs2.imgbox.com/6a/98/YkLesbzh_t.png','https://thumbs2.imgbox.com/d5/a7/cc7dGWDQ_t.jpg','https://thumbs2.imgbox.com/2b/3c/LX0Us1ZF_t.png','https://thumbs2.imgbox.com/28/1f/YkzSrbdV_t.jpg','https://thumbs2.imgbox.com/f1/8c/N5gceQxX_t.jpg','https://thumbs2.imgbox.com/cf/77/toeIFc0e_t.png','https://thumbs2.imgbox.com/7c/75/xGMgJ4Tp_t.png','https://thumbs2.imgbox.com/a9/c3/0tjMOOtV_t.jpg','https://thumbs2.imgbox.com/2f/f4/VdvQmI4z_t.jpg','https://thumbs2.imgbox.com/08/6c/3OZlXyW0_t.png','https://thumbs2.imgbox.com/09/57/JHJe5Oz3_t.jpg','https://thumbs2.imgbox.com/2e/cf/8GKgwZvH_t.jpg','https://thumbs2.imgbox.com/26/c6/bS37xiBj_t.png','https://thumbs2.imgbox.com/9c/e4/UNzMg0UX_t.jpg','https://thumbs2.imgbox.com/68/f2/63GfT2LM_t.png','https://thumbs2.imgbox.com/c6/93/1RPqmihZ_t.png','https://thumbs2.imgbox.com/82/e5/EZsCuZCC_t.png','https://thumbs2.imgbox.com/1e/f2/FgWUodDG_t.png','https://thumbs2.imgbox.com/88/12/8r7jnoHg_t.jpg','https://thumbs2.imgbox.com/c5/a3/a9yakzoC_t.jpg','https://thumbs2.imgbox.com/b3/3b/o4dQzGgR_t.png','https://thumbs2.imgbox.com/5b/6f/A11WAseV_t.jpg','https://thumbs2.imgbox.com/06/26/K8p5JukE_t.png','https://thumbs2.imgbox.com/77/a3/KmqHh3OU_t.png','https://thumbs2.imgbox.com/82/71/QlSQi0uR_t.png','https://thumbs2.imgbox.com/52/db/MYnzUtL6_t.jpg','https://thumbs2.imgbox.com/9d/15/HPxPIkAp_t.png','https://thumbs2.imgbox.com/28/2c/w3n2lq8n_t.png','https://thumbs2.imgbox.com/2e/4b/iqr7uwYc_t.png','https://thumbs2.imgbox.com/4e/b3/924hXIlW_t.png','https://thumbs2.imgbox.com/ba/6e/bR4HUdME_t.jpg','https://thumbs2.imgbox.com/c8/dd/KnOFwqs4_t.jpg','https://thumbs2.imgbox.com/fd/15/CxQzRvsJ_t.jpg','https://thumbs2.imgbox.com/2f/7f/CfjlZGHQ_t.jpg','https://thumbs2.imgbox.com/6d/a5/El6wfkaY_t.jpg','https://thumbs2.imgbox.com/55/61/dzFUsi6V_t.png']
let elm = kann1[Math.floor(Math.random() * kann1.length)]
dragonmaid = await getBuffer(elm)
const drdecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const drfrase = drdecir[Math.floor(Math.random() * drdecir.length)]
cnf.sendMessage(from, dragonmaid, image, { caption: drfrase, quoted: mek })
addFilter(from)
break

case prefix+'rezero':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)	  
const emili =['https://thumbs2.imgbox.com/19/4a/edf0FwgZ_t.jpg','https://thumbs2.imgbox.com/d7/5d/bbU6knYB_t.jpg','https://thumbs2.imgbox.com/a4/34/cEHE2rAR_t.jpg','https://thumbs2.imgbox.com/e6/99/4i27uXF0_t.jpg','https://thumbs2.imgbox.com/de/d2/jU5euhKK_t.jpg','https://thumbs2.imgbox.com/e5/02/Jbd8KvBA_t.jpg','https://thumbs2.imgbox.com/a2/31/YfUiBxWp_t.jpg','https://thumbs2.imgbox.com/92/ff/nuM6fMce_t.jpg','https://thumbs2.imgbox.com/d4/61/bzwm3Waj_t.jpg','https://thumbs2.imgbox.com/c0/23/ghUp2OZk_t.jpg','https://thumbs2.imgbox.com/17/be/Q0VlSdKr_t.jpg','https://thumbs2.imgbox.com/95/42/CyymhFKx_t.jpg','https://thumbs2.imgbox.com/f1/3d/fOnqmYwS_t.jpg','https://thumbs2.imgbox.com/99/2d/tkWOfT69_t.jpg','https://thumbs2.imgbox.com/e0/58/u3mTZGWP_t.jpg','https://thumbs2.imgbox.com/52/e9/ygOUrxaB_t.jpg','https://thumbs2.imgbox.com/4f/58/j5e5GVqW_t.jpg','https://thumbs2.imgbox.com/e5/0d/Cpp3D7qx_t.jpg','https://thumbs2.imgbox.com/1b/8e/rGOS3foe_t.jpg','https://thumbs2.imgbox.com/82/4e/tyLcnIp0_t.jpg','https://thumbs2.imgbox.com/74/8e/OXwQ2fxv_t.jpg','https://thumbs2.imgbox.com/34/17/HdyWoEEk_t.jpg','https://thumbs2.imgbox.com/b3/ab/KgwABjrM_t.jpg','https://thumbs2.imgbox.com/98/23/2F83DE7r_t.jpg','https://thumbs2.imgbox.com/13/b0/ukfSLWVM_t.jpg','https://thumbs2.imgbox.com/82/f2/rIsv7XP8_t.jpg','https://thumbs2.imgbox.com/0b/f3/rHzFslO9_t.jpg','https://thumbs2.imgbox.com/8e/3c/1oPRXMjD_t.jpg','https://thumbs2.imgbox.com/b7/f5/W3WEAEhP_t.jpg','https://thumbs2.imgbox.com/e4/d2/QghLwi2D_t.jpg','https://thumbs2.imgbox.com/a5/83/LLq7CUga_t.jpg','https://thumbs2.imgbox.com/5d/c1/C6eydPdB_t.jpg','https://thumbs2.imgbox.com/6c/1f/WYQAKa0k_t.jpg','https://thumbs2.imgbox.com/d8/88/R0yUnTEc_t.jpg','https://thumbs2.imgbox.com/5c/3e/P5u6XP3Q_t.jpg','https://thumbs2.imgbox.com/d6/24/7X77H4Ak_t.jpg','https://thumbs2.imgbox.com/fd/2f/KatD7ovL_t.jpg','https://thumbs2.imgbox.com/7f/bc/YPU2A8nG_t.jpg','https://thumbs2.imgbox.com/a8/11/hKPyNwTi_t.jpg','https://thumbs2.imgbox.com/71/a3/s2quwzM7_t.jpg','https://thumbs2.imgbox.com/48/f6/oTv8544O_t.jpg','https://thumbs2.imgbox.com/fa/c1/HC2dazgf_t.jpg','https://thumbs2.imgbox.com/33/c0/JPAtH4Lo_t.jpg','https://thumbs2.imgbox.com/2a/71/9CxMzUSb_t.jpg','https://thumbs2.imgbox.com/fb/70/g0CUlW7N_t.jpg','https://thumbs2.imgbox.com/20/57/lux7b0BA_t.jpg','https://thumbs2.imgbox.com/2f/49/qbqD837L_t.jpg','https://thumbs2.imgbox.com/ee/97/e639fIkz_t.jpg','https://thumbs2.imgbox.com/37/30/iTXaMid6_t.jpg','https://thumbs2.imgbox.com/f4/c1/T7KaGxYb_t.jpg','https://thumbs2.imgbox.com/32/2c/dLTQwYqT_t.jpg','https://thumbs2.imgbox.com/0a/6a/HPCylNNK_t.jpg','https://thumbs2.imgbox.com/37/f9/4fUtCU65_t.jpg','https://thumbs2.imgbox.com/48/cf/dJPVVj2a_t.jpg','https://thumbs2.imgbox.com/2b/36/Z7uiqUJY_t.jpg','https://thumbs2.imgbox.com/6f/b8/ei2ySKdd_t.jpg','https://thumbs2.imgbox.com/29/df/Ll75QFGv_t.jpg','https://thumbs2.imgbox.com/13/cb/AWFMVhsZ_t.jpg','https://thumbs2.imgbox.com/f4/e8/1s294UpL_t.jpg','https://thumbs2.imgbox.com/eb/c8/XBbaW7R7_t.jpg','https://thumbs2.imgbox.com/32/e2/NnWbpa5e_t.jpg','https://thumbs2.imgbox.com/2b/d1/rcM3eh8T_t.jpg','https://thumbs2.imgbox.com/a6/24/Lw1ULoP0_t.jpg','https://thumbs2.imgbox.com/f7/9e/pS5i4SHb_t.jpg','https://thumbs2.imgbox.com/88/1c/AZOvvQhk_t.jpg','https://thumbs2.imgbox.com/c2/65/oXLw117U_t.jpg','https://thumbs2.imgbox.com/1e/b2/fVmxPfBP_t.jpg','https://thumbs2.imgbox.com/42/18/NllfUwov_t.jpg','https://thumbs2.imgbox.com/b4/a5/gLLDT5qn_t.jpg','https://thumbs2.imgbox.com/a2/66/206SYz6P_t.jpg','https://thumbs2.imgbox.com/9c/23/5QaYqUiO_t.jpg','https://thumbs2.imgbox.com/50/9a/UvGSKqg8_t.jpg','https://thumbs2.imgbox.com/ab/cc/YRk7KlEj_t.jpg','https://thumbs2.imgbox.com/aa/bb/BznMyaBG_t.jpg','https://thumbs2.imgbox.com/68/a5/CWNnA6Sr_t.jpg','https://thumbs2.imgbox.com/7d/f9/g9neCFuT_t.jpg','https://thumbs2.imgbox.com/7a/dd/17RhTNHB_t.jpg','https://thumbs2.imgbox.com/1d/09/IET9cRC0_t.jpg','https://thumbs2.imgbox.com/6a/9d/HHh48jSV_t.jpg','https://thumbs2.imgbox.com/4a/7d/S6qF4N96_t.jpg','https://thumbs2.imgbox.com/32/eb/a1VzTFR1_t.jpg','https://thumbs2.imgbox.com/d0/49/8c2PW8MD_t.jpg','https://thumbs2.imgbox.com/fb/05/he8yZtdt_t.jpg','https://thumbs2.imgbox.com/2e/e9/pdlE2G4B_t.jpg','https://thumbs2.imgbox.com/7d/89/fPd2owDT_t.jpg','https://thumbs2.imgbox.com/55/3a/dLgBvl84_t.jpg','https://thumbs2.imgbox.com/a2/24/7UPDBToL_t.jpg','https://thumbs2.imgbox.com/c2/22/eIxK4BcY_t.jpg','https://thumbs2.imgbox.com/ae/00/qRMpH34I_t.jpg','https://thumbs2.imgbox.com/5e/8e/BSxF36tn_t.jpg','https://thumbs2.imgbox.com/ea/6c/9m16NXBE_t.jpg','https://thumbs2.imgbox.com/29/e1/heEBSeHG_t.jpg','https://thumbs2.imgbox.com/9d/7a/eZjRvH27_t.jpg','https://thumbs2.imgbox.com/b9/b0/YQSY9dNu_t.jpg','https://thumbs2.imgbox.com/5e/a6/ZetLzEWw_t.jpg','https://thumbs2.imgbox.com/62/f3/1UjK4ffd_t.jpg','https://thumbs2.imgbox.com/18/58/XcnJT8w2_t.jpg','https://thumbs2.imgbox.com/33/06/S0BefeS6_t.jpg','https://thumbs2.imgbox.com/fc/07/eFZ9QhoR_t.jpg','https://thumbs2.imgbox.com/42/b2/7hLY7keM_t.jpg','https://thumbs2.imgbox.com/5f/4b/ytnxMZ1k_t.jpg','https://thumbs2.imgbox.com/50/02/CoQgcZtO_t.jpg','https://thumbs2.imgbox.com/6c/32/NzvQ0CPK_t.jpg','https://thumbs2.imgbox.com/7f/91/Pb6lwgXK_t.jpg','https://thumbs2.imgbox.com/d0/f9/anLTFVJb_t.jpg','https://thumbs2.imgbox.com/5c/42/bINGig29_t.jpg','https://thumbs2.imgbox.com/de/79/EuNMwv6B_t.jpg','https://thumbs2.imgbox.com/b8/1f/D315nUXH_t.jpg','https://thumbs2.imgbox.com/95/cd/I2DiCB2R_t.jpg','https://thumbs2.imgbox.com/4e/bb/sBkeOboJ_t.jpg','https://thumbs2.imgbox.com/2a/28/gu9Rmo1T_t.jpg','https://thumbs2.imgbox.com/2d/47/Z6zpz7uz_t.jpg','https://thumbs2.imgbox.com/62/bf/OsIMahiD_t.jpg','https://thumbs2.imgbox.com/81/2d/jXcSgSIe_t.jpg','https://thumbs2.imgbox.com/d7/33/DeDJ4Gl3_t.jpg','https://thumbs2.imgbox.com/99/7c/SimXbRjt_t.jpg','https://thumbs2.imgbox.com/e3/42/5IJGjzUX_t.jpg','https://thumbs2.imgbox.com/50/58/CPWXNl2w_t.jpg','https://thumbs2.imgbox.com/2a/86/Jsx5E3hI_t.jpg','https://thumbs2.imgbox.com/cc/1a/qgWtgQD7_t.jpg','https://thumbs2.imgbox.com/72/f8/IGFVeCKD_t.jpg','https://thumbs2.imgbox.com/04/91/NxgHMHtV_t.jpg','https://thumbs2.imgbox.com/51/ee/0TTpwPUE_t.jpg','https://thumbs2.imgbox.com/31/49/0UaDnW86_t.jpg','https://thumbs2.imgbox.com/bf/20/JraCCKHD_t.jpg','https://thumbs2.imgbox.com/36/d9/g3AWWRJi_t.jpg','https://thumbs2.imgbox.com/82/59/bG8KYCC4_t.jpg','https://thumbs2.imgbox.com/db/66/DK4sP9Ye_t.jpg','https://thumbs2.imgbox.com/76/84/NB34xF2y_t.jpg','https://thumbs2.imgbox.com/cb/49/MEjUwHPx_t.jpg','https://thumbs2.imgbox.com/84/76/6l3m1wui_t.jpg','https://thumbs2.imgbox.com/6a/3a/n8LJkzUT_t.jpg','https://thumbs2.imgbox.com/2d/c0/PdXqiNsc_t.jpg','https://thumbs2.imgbox.com/3a/4e/IIgLSmcH_t.jpg','https://thumbs2.imgbox.com/10/e7/VjacjBiS_t.jpg','https://thumbs2.imgbox.com/3f/3d/eJReh3gW_t.jpg','https://thumbs2.imgbox.com/b2/71/dvjIuTcv_t.jpg','https://thumbs2.imgbox.com/f4/36/kQdatCOH_t.jpg','https://thumbs2.imgbox.com/87/bd/m2GZPOcv_t.jpg','https://thumbs2.imgbox.com/d6/4a/lrjPGqn1_t.jpg','https://thumbs2.imgbox.com/43/87/rxxQuLXw_t.jpg','https://thumbs2.imgbox.com/4c/2d/oBlBAWGY_t.jpg','https://thumbs2.imgbox.com/e8/d7/Od1GUIwt_t.jpg','https://thumbs2.imgbox.com/1b/f4/6gSo2udQ_t.jpg','https://thumbs2.imgbox.com/84/d2/KmjXVEjx_t.jpg','https://thumbs2.imgbox.com/bf/f0/a90QYhsL_t.jpg','https://thumbs2.imgbox.com/1e/9b/Y2OiMSRP_t.jpg','https://thumbs2.imgbox.com/24/c9/r2h9aBuj_t.jpg','https://thumbs2.imgbox.com/01/ce/OwsZsQB8_t.jpg','https://thumbs2.imgbox.com/de/f4/eVW9x9pz_t.jpg','https://thumbs2.imgbox.com/5e/9c/UJUTBSpg_t.jpg','https://thumbs2.imgbox.com/a6/f8/TzBaKEeO_t.jpg','https://thumbs2.imgbox.com/9e/bb/HvDWEtt6_t.jpg','https://thumbs2.imgbox.com/c7/8d/CR1NYUGJ_t.jpg','https://thumbs2.imgbox.com/d3/e3/JlqXSaKM_t.jpg','https://thumbs2.imgbox.com/8b/12/zWRvUGUC_t.jpg','https://thumbs2.imgbox.com/5c/e8/lLbgIFsk_t.jpg','https://thumbs2.imgbox.com/64/8d/csR031BF_t.jpg','https://thumbs2.imgbox.com/b2/f7/aFxwnyO7_t.jpg','https://thumbs2.imgbox.com/55/77/Qdo23rXs_t.jpg','https://thumbs2.imgbox.com/b7/14/2z7cg0X1_t.jpg','https://thumbs2.imgbox.com/b7/af/qCmVp91i_t.jpg','https://thumbs2.imgbox.com/5b/5e/SXP7ZZm6_t.jpg','https://thumbs2.imgbox.com/f7/0d/EV00FZUi_t.jpg','https://thumbs2.imgbox.com/46/f2/z4c4i62i_t.jpg','https://thumbs2.imgbox.com/c5/c8/QWkPMgEI_t.jpg','https://thumbs2.imgbox.com/a5/ff/L9dbWZGq_t.jpg','https://thumbs2.imgbox.com/32/b0/sZK27axC_t.jpg','https://thumbs2.imgbox.com/36/ba/hTG2BQ7w_t.jpg','https://thumbs2.imgbox.com/c7/84/gCxzcIPC_t.jpg','https://thumbs2.imgbox.com/5c/39/hvNM3jAK_t.jpg','https://thumbs2.imgbox.com/a4/fc/ovNYuxNU_t.jpg','https://thumbs2.imgbox.com/57/7a/ydCLRce9_t.jpg','https://thumbs2.imgbox.com/a9/8e/qkzRd5Sh_t.jpg','https://thumbs2.imgbox.com/25/65/8u7Vj7vr_t.jpg','https://thumbs2.imgbox.com/56/62/U8aNtU1d_t.jpg','https://thumbs2.imgbox.com/8e/be/aqip6ufO_t.jpg','https://thumbs2.imgbox.com/d9/b9/veRe0fxH_t.jpg','https://thumbs2.imgbox.com/1b/66/I0POtqOj_t.jpg','https://thumbs2.imgbox.com/36/3c/d9tVzvyh_t.jpg','https://thumbs2.imgbox.com/47/59/8LCIvaWG_t.jpg','https://thumbs2.imgbox.com/9d/16/1CKSpRp7_t.jpg','https://thumbs2.imgbox.com/69/1b/D4iJC7Lt_t.jpg','https://thumbs2.imgbox.com/5f/39/ZwZj0VNE_t.jpg','https://thumbs2.imgbox.com/27/e1/3FUss09N_t.jpg','https://thumbs2.imgbox.com/ec/9d/9xUzIGND_t.jpg','https://thumbs2.imgbox.com/6a/0d/KYYflbTn_t.jpg','https://thumbs2.imgbox.com/62/5a/TFARb5qy_t.jpg','https://thumbs2.imgbox.com/a2/e4/cTz7Lu2F_t.jpg','https://thumbs2.imgbox.com/9e/d1/SVBq7Oux_t.jpg','https://thumbs2.imgbox.com/28/38/O4ZCQxF9_t.jpg','https://thumbs2.imgbox.com/94/54/Z5flJhkv_t.jpg','https://thumbs2.imgbox.com/7c/8d/R1zwJegK_t.jpg','https://thumbs2.imgbox.com/d3/53/MudD0C02_t.jpg','https://thumbs2.imgbox.com/cb/88/rSW0L3Yi_t.jpg','https://thumbs2.imgbox.com/39/6f/R0dP2Abh_t.jpg','https://thumbs2.imgbox.com/4b/d7/yzypGIcN_t.jpg','https://thumbs2.imgbox.com/4a/7b/uOs3t2yC_t.jpg','https://thumbs2.imgbox.com/e0/04/pdArJEer_t.jpg',
	      'https://thumbs2.imgbox.com/8a/f4/kLNaUKyT_t.jpg','https://thumbs2.imgbox.com/52/1d/UJzAeNnE_t.jpg','https://thumbs2.imgbox.com/9d/7e/uj9YQEDg_t.jpg','https://thumbs2.imgbox.com/5c/15/Lwy6561d_t.jpg','https://thumbs2.imgbox.com/df/4e/R1sANX4g_t.jpg','https://thumbs2.imgbox.com/a8/80/iPf58IrR_t.jpg','https://thumbs2.imgbox.com/8e/04/dUVxu9xz_t.jpg','https://thumbs2.imgbox.com/ab/c0/TZXm9ifj_t.jpg','https://thumbs2.imgbox.com/fb/5f/iKi4NRUb_t.jpg','https://thumbs2.imgbox.com/1d/77/HjZo8hsK_t.jpg','https://thumbs2.imgbox.com/6a/81/kLhk96Fv_t.jpg','https://thumbs2.imgbox.com/fa/94/Jkik2GIz_t.jpg','https://thumbs2.imgbox.com/db/56/B3rM3IwQ_t.jpg','https://thumbs2.imgbox.com/d6/59/v2hhHxTO_t.jpg','https://thumbs2.imgbox.com/ec/a2/wxpoJZkU_t.jpg','https://thumbs2.imgbox.com/90/10/Kd8mFM2e_t.jpg','https://thumbs2.imgbox.com/41/41/Yq6E1cKY_t.jpg','https://thumbs2.imgbox.com/88/db/RMaU7PRx_t.jpg','https://thumbs2.imgbox.com/f3/27/OHugZ8do_t.jpg','https://thumbs2.imgbox.com/fe/e9/EWQDLuBk_t.jpg','https://thumbs2.imgbox.com/a5/94/HoiG6tC4_t.jpg','https://thumbs2.imgbox.com/e1/70/K9hb26RW_t.jpg','https://thumbs2.imgbox.com/70/b2/8RvaH0dP_t.jpg','https://thumbs2.imgbox.com/9d/23/HkEVPa43_t.jpg','https://thumbs2.imgbox.com/ac/8d/O2UyJJVV_t.jpg','https://thumbs2.imgbox.com/66/bb/5uPCV88O_t.jpg','https://thumbs2.imgbox.com/99/66/cgtYwnbV_t.jpg','https://thumbs2.imgbox.com/81/be/BDtTWZ4Z_t.jpg','https://thumbs2.imgbox.com/dc/d2/aCpzhmMr_t.jpg','https://thumbs2.imgbox.com/cf/2b/wRWGX6FG_t.jpg','https://thumbs2.imgbox.com/1a/5d/xAGfYLvR_t.jpg','https://thumbs2.imgbox.com/8e/03/3kC8fQ54_t.jpg','https://thumbs2.imgbox.com/47/1d/Ip5moAYp_t.jpg','https://thumbs2.imgbox.com/72/13/WAchG9bo_t.jpg','https://thumbs2.imgbox.com/be/b8/Yc5amWsh_t.jpg','https://thumbs2.imgbox.com/cf/60/XVKOiASx_t.jpg','https://thumbs2.imgbox.com/0a/39/4Zskz1vo_t.jpg','https://thumbs2.imgbox.com/b1/f6/e0570Af0_t.jpg','https://thumbs2.imgbox.com/60/59/dlvxl8HW_t.jpg','https://thumbs2.imgbox.com/6d/4f/z1JeEWoc_t.jpg','https://thumbs2.imgbox.com/ae/15/Gy9TCrzW_t.jpg','https://thumbs2.imgbox.com/9c/02/D1AHBgDB_t.jpg','https://thumbs2.imgbox.com/1e/e5/TZlo2si9_t.jpg','https://thumbs2.imgbox.com/fb/30/v23tdlH9_t.jpg','https://thumbs2.imgbox.com/e5/21/ytS6EeLd_t.jpg','https://thumbs2.imgbox.com/9a/b3/WeBdzY1P_t.jpg','https://thumbs2.imgbox.com/08/e5/uBr5fwNd_t.jpg','https://thumbs2.imgbox.com/16/64/odhv9s1r_t.jpg','https://thumbs2.imgbox.com/b7/79/AhmHKKRw_t.jpg','https://thumbs2.imgbox.com/95/08/SATC9xHW_t.jpg','https://thumbs2.imgbox.com/7e/85/xqmLLQAw_t.jpg','https://thumbs2.imgbox.com/13/33/HrY4WbOa_t.jpg','https://thumbs2.imgbox.com/0d/11/31hOZz5i_t.jpg','https://thumbs2.imgbox.com/42/c4/IzO9pFDc_t.jpg','https://thumbs2.imgbox.com/83/9c/VOJ7hImd_t.jpg','https://thumbs2.imgbox.com/17/0b/HmEW1wGs_t.jpg','https://thumbs2.imgbox.com/ba/f7/ClxEZhbj_t.jpg','https://thumbs2.imgbox.com/5a/b8/OgkR4zgl_t.jpg','https://thumbs2.imgbox.com/b8/4f/uROKnxNj_t.jpg','https://thumbs2.imgbox.com/19/81/Hg6jxEKo_t.jpg','https://thumbs2.imgbox.com/87/b2/r6Cq3MFl_t.jpg','https://thumbs2.imgbox.com/1a/9b/JqDYkv1v_t.jpg','https://thumbs2.imgbox.com/58/a7/7XkFbxgB_t.jpg','https://thumbs2.imgbox.com/36/84/b2jVScvp_t.jpg','https://thumbs2.imgbox.com/90/b5/dz2YKg0Y_t.jpg','https://thumbs2.imgbox.com/26/e2/JZ1COCgU_t.jpg','https://thumbs2.imgbox.com/fb/7a/sbvwl733_t.jpg','https://thumbs2.imgbox.com/7b/99/ZjFzHZlK_t.jpg','https://thumbs2.imgbox.com/ac/d5/MfubmTrc_t.jpg','https://thumbs2.imgbox.com/e6/5f/NfDMh3lT_t.jpg','https://thumbs2.imgbox.com/1c/bf/jpeYRIxU_t.jpg','https://thumbs2.imgbox.com/97/be/xCsuU96x_t.jpg','https://thumbs2.imgbox.com/4c/c2/Vtg8s2N3_t.jpg','https://thumbs2.imgbox.com/49/60/7vy720xo_t.jpg','https://thumbs2.imgbox.com/e7/af/Mtoehjea_t.jpg','https://thumbs2.imgbox.com/8c/7b/ujFUbIJE_t.jpg','https://thumbs2.imgbox.com/9e/d6/mOWbVVdr_t.jpg','https://thumbs2.imgbox.com/85/af/O8OLBRWd_t.jpg','https://thumbs2.imgbox.com/d0/5a/PLoNgB0b_t.jpg','https://thumbs2.imgbox.com/24/b7/rxy7jkFv_t.jpg','https://thumbs2.imgbox.com/61/a5/9vzbb7ow_t.jpg','https://thumbs2.imgbox.com/fd/c3/KSr0iUOc_t.jpg','https://thumbs2.imgbox.com/18/6c/1ZErjI29_t.jpg','https://thumbs2.imgbox.com/f5/5d/bf3grvn5_t.jpg','https://thumbs2.imgbox.com/2c/a0/luPsTwu2_t.jpg','https://thumbs2.imgbox.com/fb/5d/PS3u3ctR_t.jpg','https://thumbs2.imgbox.com/eb/1b/BO7NhWNE_t.jpg','https://thumbs2.imgbox.com/99/e4/H8oKU7Lz_t.jpg','https://thumbs2.imgbox.com/35/c9/SeKM5ksa_t.jpg','https://thumbs2.imgbox.com/d3/1a/ojbuRTpi_t.jpg','https://thumbs2.imgbox.com/4d/72/oOC807tI_t.jpg','https://thumbs2.imgbox.com/3b/1a/HugauoMB_t.jpg','https://thumbs2.imgbox.com/b5/92/gB91C0ep_t.jpg','https://thumbs2.imgbox.com/5a/2e/bEU3MAaJ_t.jpg','https://thumbs2.imgbox.com/0f/52/qY3slnqH_t.jpg','https://thumbs2.imgbox.com/44/90/uU9291TC_t.jpg','https://thumbs2.imgbox.com/53/b3/CRsa8A37_t.jpg','https://thumbs2.imgbox.com/ef/4f/GjWeJaRa_t.jpg','https://thumbs2.imgbox.com/f8/08/NqJdsA7g_t.jpg','https://thumbs2.imgbox.com/c0/ad/DlJzdmdp_t.jpg','https://thumbs2.imgbox.com/fd/70/c5kOSd5Q_t.jpg','https://thumbs2.imgbox.com/f8/74/V5iTzU3m_t.jpg','https://thumbs2.imgbox.com/0d/cf/LyNbdR8q_t.jpg','https://thumbs2.imgbox.com/16/04/dQaFZPw0_t.jpg','https://thumbs2.imgbox.com/b4/26/kwzkorYm_t.jpg','https://thumbs2.imgbox.com/51/6b/5szfks3Z_t.jpg','https://thumbs2.imgbox.com/59/30/6neW80n3_t.jpg','https://thumbs2.imgbox.com/28/dd/yiKoNZCM_t.jpg','https://thumbs2.imgbox.com/4d/48/UBacGTag_t.jpg','https://thumbs2.imgbox.com/51/7f/TdIhRkz6_t.jpg','https://thumbs2.imgbox.com/0f/20/Vn8zNd11_t.jpg','https://thumbs2.imgbox.com/cf/c3/3Odj4Qjd_t.jpg','https://thumbs2.imgbox.com/c4/2e/2k5Pxulc_t.jpg','https://thumbs2.imgbox.com/f4/06/ObMaMtpB_t.jpg','https://thumbs2.imgbox.com/fb/9f/WnZ5APaS_t.jpg','https://thumbs2.imgbox.com/c6/90/vQeCnZsm_t.jpg','https://thumbs2.imgbox.com/80/a3/cgNNfqob_t.jpg','https://thumbs2.imgbox.com/4a/d6/qTnI2l9E_t.jpg','https://thumbs2.imgbox.com/fd/14/kRhv7fvA_t.jpg','https://thumbs2.imgbox.com/ae/8c/XuTTb7gI_t.jpg','https://thumbs2.imgbox.com/60/4a/1Ay8yHWh_t.jpg','https://thumbs2.imgbox.com/17/bc/L2kgPrXE_t.jpg','https://thumbs2.imgbox.com/66/5c/7v9X8XM6_t.jpg','https://thumbs2.imgbox.com/ad/da/G5rXK0yw_t.jpg','https://thumbs2.imgbox.com/97/26/YH77uxIl_t.jpg','https://thumbs2.imgbox.com/7d/2f/TwPwINfe_t.jpg','https://thumbs2.imgbox.com/9e/da/h2zsg3x8_t.jpg','https://thumbs2.imgbox.com/82/03/m20Q812M_t.jpg','https://thumbs2.imgbox.com/ce/52/WJXiQdqa_t.jpg','https://thumbs2.imgbox.com/c8/e6/5QELcUJy_t.jpg','https://thumbs2.imgbox.com/73/08/nfaQzVOJ_t.jpg','https://thumbs2.imgbox.com/6a/1f/CchLsiMu_t.jpg','https://thumbs2.imgbox.com/7e/e9/bGr6U5E4_t.jpg','https://thumbs2.imgbox.com/1f/a8/y4E3hcDQ_t.jpg','https://thumbs2.imgbox.com/ca/24/WaStuOcl_t.jpg','https://thumbs2.imgbox.com/e6/3e/9Fh7VfR1_t.jpg','https://thumbs2.imgbox.com/76/0b/8zw15gnc_t.jpg','https://thumbs2.imgbox.com/73/e7/RyIT8q1L_t.jpg','https://thumbs2.imgbox.com/42/63/PcrmpIYs_t.jpg','https://thumbs2.imgbox.com/c5/e6/x2tpK7A7_t.jpg','https://thumbs2.imgbox.com/76/a8/Zba1rZoq_t.jpg','https://thumbs2.imgbox.com/71/24/AlvJGFP8_t.jpg','https://thumbs2.imgbox.com/27/b5/PuE1ABh5_t.jpg','https://thumbs2.imgbox.com/d4/97/SoXDZ2M1_t.jpg','https://thumbs2.imgbox.com/a9/15/nxLldjgD_t.jpg','https://thumbs2.imgbox.com/48/20/4GT21ThG_t.jpg','https://thumbs2.imgbox.com/c5/db/3Somx05L_t.jpg','https://thumbs2.imgbox.com/59/70/0G6d44wX_t.jpg','https://thumbs2.imgbox.com/56/8f/lxcpPmM9_t.jpg','https://thumbs2.imgbox.com/92/bb/5Hc7odwG_t.jpg','https://thumbs2.imgbox.com/4c/5e/FHLY6akf_t.jpg','https://thumbs2.imgbox.com/50/26/wsDbC7sN_t.jpg','https://thumbs2.imgbox.com/0e/e4/WavtTmlI_t.jpg','https://thumbs2.imgbox.com/dd/00/punYQn4A_t.jpg','https://thumbs2.imgbox.com/09/cc/0JlTQPf4_t.jpg','https://thumbs2.imgbox.com/51/08/BI3pokmd_t.jpg','https://thumbs2.imgbox.com/78/f0/JHiwBexu_t.jpg','https://thumbs2.imgbox.com/5f/2c/ZJ1KtdST_t.jpg','https://thumbs2.imgbox.com/0b/2f/fDrdzAbc_t.jpg','https://thumbs2.imgbox.com/f8/30/bxMnfT0l_t.jpg','https://thumbs2.imgbox.com/6a/30/A33QgZNH_t.jpg','https://thumbs2.imgbox.com/16/34/HEpCCIKk_t.jpg','https://thumbs2.imgbox.com/5e/4b/mZDwvhrQ_t.jpg','https://thumbs2.imgbox.com/e6/7d/io82FzEa_t.jpg','https://thumbs2.imgbox.com/8c/98/bjjILJ9P_t.jpg','https://thumbs2.imgbox.com/42/7f/3Y8IFYFH_t.jpg','https://thumbs2.imgbox.com/61/73/2CQzZSHU_t.jpg','https://thumbs2.imgbox.com/eb/f2/359G1DxU_t.jpg','https://thumbs2.imgbox.com/26/f5/tPoDmfkh_t.jpg','https://thumbs2.imgbox.com/11/4b/7Z0bAVDe_t.jpg','https://thumbs2.imgbox.com/25/f3/Y2Iagl52_t.jpg','https://thumbs2.imgbox.com/68/87/c3tluyj4_t.jpg','https://thumbs2.imgbox.com/34/65/wMlA2dMx_t.jpg','https://thumbs2.imgbox.com/09/27/Zc6txYI5_t.jpg','https://thumbs2.imgbox.com/c8/8c/1IvIBRTH_t.jpg','https://thumbs2.imgbox.com/98/5e/pfnJv6kX_t.jpg','https://thumbs2.imgbox.com/01/51/T8gyLPL4_t.jpg','https://thumbs2.imgbox.com/21/67/ClWF0rvJ_t.jpg','https://thumbs2.imgbox.com/17/8b/QhRM2NAw_t.jpg','https://thumbs2.imgbox.com/50/b5/zKEM7zyD_t.jpg','https://thumbs2.imgbox.com/46/88/6I1wIUjz_t.jpg','https://thumbs2.imgbox.com/62/9c/R9GjWmSh_t.jpg','https://thumbs2.imgbox.com/d0/b8/j2JEUShX_t.jpg','https://thumbs2.imgbox.com/df/ff/KvcDlBJo_t.jpg','https://thumbs2.imgbox.com/a7/53/c14BFQOM_t.jpg','https://thumbs2.imgbox.com/f7/02/LSNXhbMn_t.jpg','https://thumbs2.imgbox.com/74/19/oQMyKgfz_t.jpg','https://thumbs2.imgbox.com/7e/30/cN7W78Rl_t.jpg','https://thumbs2.imgbox.com/3a/23/jvxRCZIY_t.jpg','https://thumbs2.imgbox.com/a4/f4/JqtRHk2p_t.jpg','https://thumbs2.imgbox.com/4f/ae/AFegOpZX_t.jpg','https://thumbs2.imgbox.com/36/eb/LQUeBEkn_t.jpg','https://thumbs2.imgbox.com/48/0c/EpAGGZDY_t.jpg','https://thumbs2.imgbox.com/1b/e9/gmfGobOi_t.jpg','https://thumbs2.imgbox.com/2a/08/yRoYaFMS_t.jpg','https://thumbs2.imgbox.com/c7/9c/IMjto1HM_t.jpg','https://thumbs2.imgbox.com/c2/e8/FQOdGwJP_t.jpg','https://thumbs2.imgbox.com/4e/8f/maNLR1Jb_t.jpg','https://thumbs2.imgbox.com/b6/48/IM9P1tGa_t.jpg',
	      'https://thumbs2.imgbox.com/6a/da/u7TfIQQQ_t.jpg','https://thumbs2.imgbox.com/87/27/3Z25YBvZ_t.jpg','https://thumbs2.imgbox.com/9f/da/MsLRQC8R_t.jpg','https://thumbs2.imgbox.com/2f/b3/1wEzVZnp_t.jpg','https://thumbs2.imgbox.com/1d/2d/lEMmCcdU_t.jpg','https://thumbs2.imgbox.com/8c/bf/gS3CgfCg_t.jpg','https://thumbs2.imgbox.com/c6/87/EwglN5hV_t.jpg','https://thumbs2.imgbox.com/ae/85/mCHZw7VI_t.jpg','https://thumbs2.imgbox.com/df/76/uqfRG61b_t.jpg','https://thumbs2.imgbox.com/cb/5e/jihgwXmy_t.jpg','https://thumbs2.imgbox.com/88/59/vVXGY0nS_t.jpg','https://thumbs2.imgbox.com/74/99/UGuGmwNM_t.jpg','https://thumbs2.imgbox.com/f0/d7/678YdVFp_t.jpg','https://thumbs2.imgbox.com/41/d3/IceCoiQB_t.jpg','https://thumbs2.imgbox.com/ae/47/Yklv3CPo_t.jpg','https://thumbs2.imgbox.com/ae/85/nzPnUCGk_t.jpg','https://thumbs2.imgbox.com/91/e0/mg1U4MvD_t.jpg','https://thumbs2.imgbox.com/f8/38/66q8Zn2l_t.jpg','https://thumbs2.imgbox.com/5a/dd/bnui5nOp_t.jpg','https://thumbs2.imgbox.com/17/f5/FRSh10Fy_t.jpg','https://thumbs2.imgbox.com/26/b6/qNE3T75B_t.jpg','https://thumbs2.imgbox.com/4f/92/4OX6RPQs_t.jpg','https://thumbs2.imgbox.com/9e/cd/g8Dl3sRa_t.jpg','https://thumbs2.imgbox.com/f9/5f/gdllDhqg_t.jpg','https://thumbs2.imgbox.com/e4/9b/wvC49cXP_t.jpg','https://thumbs2.imgbox.com/6c/d8/hZobazRc_t.jpg','https://thumbs2.imgbox.com/cb/c2/lB5W3QDT_t.jpg','https://thumbs2.imgbox.com/1a/09/rDcHN6qJ_t.jpg','https://thumbs2.imgbox.com/a0/9d/yx6rgX48_t.jpg','https://thumbs2.imgbox.com/c1/4f/Q4oDwi2g_t.jpg','https://thumbs2.imgbox.com/60/dc/7poHq9UK_t.jpg','https://thumbs2.imgbox.com/04/64/SsQBIj3h_t.jpg','https://thumbs2.imgbox.com/69/70/Fwj7EZ0r_t.jpg','https://thumbs2.imgbox.com/7b/df/SjfuGdGC_t.jpg','https://thumbs2.imgbox.com/3e/37/qj2jFnpt_t.jpg','https://thumbs2.imgbox.com/aa/86/vpfD5Pjx_t.jpg','https://thumbs2.imgbox.com/7a/7d/XVxVYksL_t.jpg','https://thumbs2.imgbox.com/ee/97/dzkF6RPK_t.jpg','https://thumbs2.imgbox.com/eb/d2/ikJWWi4s_t.jpg','https://thumbs2.imgbox.com/6c/6a/R6HMorCS_t.jpg','https://thumbs2.imgbox.com/b2/83/DLAjVo4y_t.jpg','https://thumbs2.imgbox.com/66/75/ITroXTjF_t.jpg','https://thumbs2.imgbox.com/c6/9c/csaoPJjk_t.jpg','https://thumbs2.imgbox.com/4c/b2/h25zGFkP_t.jpg','https://thumbs2.imgbox.com/95/85/aRkN65ns_t.jpg','https://thumbs2.imgbox.com/54/50/5EjPVox3_t.jpg','https://thumbs2.imgbox.com/2b/6d/w1z22fFr_t.jpg','https://thumbs2.imgbox.com/78/2b/EoedcaNR_t.jpg','https://thumbs2.imgbox.com/e3/fb/GvgggFOQ_t.jpg','https://thumbs2.imgbox.com/ff/4c/RtrdzQLw_t.jpg','https://thumbs2.imgbox.com/84/a0/1y3Y8QO0_t.jpg','https://thumbs2.imgbox.com/76/3d/uZ42RguQ_t.jpg','https://thumbs2.imgbox.com/a8/2a/UIxOFLuo_t.jpg','https://thumbs2.imgbox.com/59/43/UkV156PJ_t.jpg','https://thumbs2.imgbox.com/39/47/jqeHIQk0_t.jpg','https://thumbs2.imgbox.com/26/93/RmnFiT36_t.jpg','https://thumbs2.imgbox.com/bd/09/5lWv2s1L_t.jpg','https://thumbs2.imgbox.com/3e/e5/w2PuKSId_t.jpg','https://thumbs2.imgbox.com/e3/ce/BOsE0gVS_t.jpg','https://thumbs2.imgbox.com/d9/f0/Emi8f2Jt_t.jpg','https://thumbs2.imgbox.com/36/b9/Q6k7sZJd_t.jpg','https://thumbs2.imgbox.com/bf/84/SwWq9wAF_t.jpg','https://thumbs2.imgbox.com/2c/6d/iYEnC0ZB_t.jpg','https://thumbs2.imgbox.com/59/bd/ioxllYp9_t.jpg','https://thumbs2.imgbox.com/50/75/OHC5r3Ke_t.jpg','https://thumbs2.imgbox.com/f8/7d/DCAvvnh3_t.jpg','https://thumbs2.imgbox.com/af/ed/4d5phyrJ_t.jpg','https://thumbs2.imgbox.com/50/3c/Llf8B4BD_t.jpg','https://thumbs2.imgbox.com/1d/3e/0SinLo85_t.jpg','https://thumbs2.imgbox.com/07/a5/tYIohZLA_t.jpg','https://thumbs2.imgbox.com/20/07/G5STtPcA_t.jpg','https://thumbs2.imgbox.com/ba/6e/eIrQPE7s_t.jpg','https://thumbs2.imgbox.com/84/47/nTAgMCWW_t.jpg','https://thumbs2.imgbox.com/f9/7b/uauHb043_t.jpg','https://thumbs2.imgbox.com/95/2e/8a4mLVJZ_t.jpg','https://thumbs2.imgbox.com/92/a8/OGIm5i7Z_t.jpg','https://thumbs2.imgbox.com/05/a6/udBp4pgq_t.jpg','https://thumbs2.imgbox.com/c0/1d/23WjitHL_t.jpg','https://thumbs2.imgbox.com/de/d2/ffSqocpx_t.jpg','https://thumbs2.imgbox.com/fe/99/Ylfee5Cc_t.jpg','https://thumbs2.imgbox.com/ae/91/93rtdzHa_t.jpg','https://thumbs2.imgbox.com/c1/07/c43oO7dy_t.jpg','https://thumbs2.imgbox.com/74/19/rAWhWtKA_t.jpg','https://thumbs2.imgbox.com/e5/2f/9GNefvQp_t.jpg','https://thumbs2.imgbox.com/f5/3b/pLhftoAW_t.jpg','https://thumbs2.imgbox.com/22/42/DGVviEh9_t.jpg','https://thumbs2.imgbox.com/3f/f2/dBcvHOEX_t.jpg','https://thumbs2.imgbox.com/33/24/M7ZdpD30_t.jpg','https://thumbs2.imgbox.com/a5/6e/gm0KFUlT_t.jpg','https://thumbs2.imgbox.com/b8/77/R40kWnnQ_t.jpg','https://thumbs2.imgbox.com/ce/92/mpkQkIm6_t.jpg','https://thumbs2.imgbox.com/40/6c/fS1XgxuK_t.jpg','https://thumbs2.imgbox.com/8d/69/1rIFMmAw_t.jpg','https://thumbs2.imgbox.com/71/77/uRR9I7rH_t.jpg','https://thumbs2.imgbox.com/4f/a0/G3wr3WDQ_t.jpg','https://thumbs2.imgbox.com/f6/c3/v9SIGefZ_t.jpg','https://thumbs2.imgbox.com/65/f8/qZNa9h3c_t.jpg','https://thumbs2.imgbox.com/29/2c/Dvd3gHlS_t.jpg','https://thumbs2.imgbox.com/b4/ef/LPwsvPiQ_t.jpg','https://thumbs2.imgbox.com/96/01/jwX3Qr5u_t.jpg','https://thumbs2.imgbox.com/2c/63/BaZjax02_t.jpg','https://thumbs2.imgbox.com/87/f0/5oHx9Luj_t.jpg']
let rem = emili[Math.floor(Math.random() * emili.length)]
rezero = await getBuffer(rem)
const bnbn =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const puck = bnbn[Math.floor(Math.random() * bnbn.length)]
cnf.sendMessage(from, rezero, image, { caption: puck, quoted: mek })
addFilter(from)
break

case prefix+'darling':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)	  
const zero =['https://images2.imgbox.com/9a/59/8tpL9qWb_o.jpg','https://images2.imgbox.com/23/48/8RV8UZTK_o.jpg','https://images2.imgbox.com/b1/ab/zbQlVsrr_o.jpg','https://images2.imgbox.com/5f/cb/C5zXjvKo_o.jpg','https://images2.imgbox.com/4b/40/Js3QC78W_o.jpg','https://images2.imgbox.com/2e/41/TVBMRKjZ_o.jpg','https://images2.imgbox.com/f1/49/hAa2lN59_o.jpg','https://images2.imgbox.com/b6/b0/VoC2ESjT_o.jpg','https://images2.imgbox.com/eb/ef/2EYQGH8R_o.jpg','https://images2.imgbox.com/4f/5d/eMLIkzrk_o.jpg','https://images2.imgbox.com/4f/51/rketNg1N_o.jpg','https://images2.imgbox.com/5f/e5/Rnv7qyqD_o.jpg','https://images2.imgbox.com/9c/0b/6tCaa8Fn_o.jpg','https://images2.imgbox.com/c7/af/NKdT4pbf_o.jpg','https://images2.imgbox.com/68/80/68DauqW4_o.jpg','https://images2.imgbox.com/03/0b/xkg1NH1I_o.jpg','https://images2.imgbox.com/b9/6d/HN19KQsT_o.jpg','https://images2.imgbox.com/8e/13/PrL1oxdP_o.jpg','https://images2.imgbox.com/2f/98/ZnU5TAfq_o.jpg','https://images2.imgbox.com/fb/d3/Vbil8WZD_o.jpg','https://images2.imgbox.com/7e/f9/E0UjytOC_o.jpg','https://images2.imgbox.com/f2/dc/SCSy9tws_o.jpg','https://images2.imgbox.com/9b/69/7g6ciukS_o.jpg','https://images2.imgbox.com/a0/c4/YqzIvZul_o.jpg','https://images2.imgbox.com/3a/78/NxC8N1on_o.jpg','https://images2.imgbox.com/0e/90/MA83g2Z6_o.jpg','https://images2.imgbox.com/4f/80/HPOGZuL8_o.jpg','https://images2.imgbox.com/f7/36/gVZIT0Cp_o.jpg','https://images2.imgbox.com/12/21/Zz6O5gVg_o.jpg','https://images2.imgbox.com/7f/ba/wWkSqYwH_o.jpg','https://images2.imgbox.com/ff/5c/hbrzSS0B_o.jpg','https://images2.imgbox.com/4b/92/A5crY8OQ_o.jpg','https://images2.imgbox.com/fd/bd/Sn3O8owP_o.jpg','https://images2.imgbox.com/4f/6b/glWldBoc_o.jpg','https://images2.imgbox.com/6e/ff/a6ThThWS_o.jpg','https://images2.imgbox.com/32/76/fG7nls5k_o.jpg','https://images2.imgbox.com/c0/7d/I6eUkyBY_o.jpg','https://images2.imgbox.com/9f/fd/UtNlv67s_o.jpg','https://images2.imgbox.com/ca/08/NSUsqPgp_o.jpg','https://images2.imgbox.com/04/10/3f6EKIml_o.jpg','https://images2.imgbox.com/96/6a/woqVcfPe_o.jpg','https://images2.imgbox.com/9b/d7/mT5MpNS6_o.jpg','https://images2.imgbox.com/00/6f/ds1zDx8s_o.jpg','https://images2.imgbox.com/d4/08/rYrCmvAG_o.jpg','https://images2.imgbox.com/54/83/OKVTTTZI_o.jpg','https://images2.imgbox.com/ab/95/DhpqaXhY_o.jpg','https://images2.imgbox.com/f5/37/iDmn8DfF_o.jpg','https://images2.imgbox.com/4d/7e/upG7JNva_o.jpg','https://images2.imgbox.com/45/2a/DPWtCGqe_o.jpg','https://images2.imgbox.com/9a/2b/MfPg51Jl_o.jpg','https://images2.imgbox.com/8e/f9/CA7IaLrL_o.jpg','https://images2.imgbox.com/d3/96/m8U5Z8Ee_o.jpg','https://images2.imgbox.com/4c/65/NXBdcUl6_o.jpg','https://images2.imgbox.com/d9/d5/B2WwhZZy_o.jpg','https://images2.imgbox.com/48/ee/1p65P5ri_o.jpg','https://images2.imgbox.com/52/24/kza11YTV_o.jpg','https://images2.imgbox.com/a7/27/NSI2qh5f_o.jpg','https://images2.imgbox.com/6d/62/xhYiCwTc_o.jpg','https://images2.imgbox.com/2e/3e/JR04R9iK_o.jpg','https://images2.imgbox.com/cb/ea/m3sBPZtq_o.jpg','https://images2.imgbox.com/0b/a2/4dZc3c4W_o.jpg','https://images2.imgbox.com/4a/e3/oMJf0oBW_o.jpg','https://images2.imgbox.com/ca/6e/jMYyqDGY_o.jpg','https://images2.imgbox.com/78/4c/0g90PKFD_o.jpg','https://images2.imgbox.com/a3/4d/NM67k14a_o.jpg','https://images2.imgbox.com/5a/04/t3YqNujP_o.jpg','https://images2.imgbox.com/1b/51/9iudNI7X_o.jpg','https://images2.imgbox.com/0b/94/8M2H9FfH_o.jpg','https://images2.imgbox.com/cb/63/o7nWquiD_o.jpg','https://images2.imgbox.com/e9/7c/jJThIDyy_o.jpg','https://images2.imgbox.com/a8/d8/XjO2d6ia_o.jpg','https://images2.imgbox.com/5f/62/N0n9n0oo_o.jpg','https://images2.imgbox.com/19/9c/2QqgksT5_o.jpg','https://images2.imgbox.com/2c/0e/YVzDL7EE_o.jpg','https://images2.imgbox.com/e6/4d/4vj4aVLM_o.jpg','https://images2.imgbox.com/6e/db/oKZPH2PS_o.jpg','https://images2.imgbox.com/bf/f1/jWOVAT9t_o.jpg','https://images2.imgbox.com/8d/e7/VqX3Ssv5_o.jpg','https://images2.imgbox.com/73/d7/rsUw6IGI_o.jpg','https://images2.imgbox.com/e8/79/hyUBmOsS_o.jpg','https://images2.imgbox.com/bf/e8/VGMqB29P_o.jpg','https://images2.imgbox.com/80/a4/rGqURpNT_o.jpg','https://images2.imgbox.com/1b/30/FJgy2jmQ_o.jpg','https://images2.imgbox.com/7f/42/HktAKPIX_o.jpg','https://images2.imgbox.com/75/57/JsBemfKj_o.jpg','https://images2.imgbox.com/81/71/gSl5P3Uk_o.jpg','https://images2.imgbox.com/a4/62/3ezQBt66_o.jpg','https://images2.imgbox.com/c6/6c/0GLDKwBw_o.jpg','https://images2.imgbox.com/72/b2/qqLMHZf9_o.jpg','https://images2.imgbox.com/4c/e3/QFrPsLrt_o.jpg','https://images2.imgbox.com/cd/6a/hcC1Kyn6_o.jpg','https://images2.imgbox.com/e8/1f/5DBLm4Yh_o.jpg','https://images2.imgbox.com/80/ed/jy6kkdz5_o.jpg','https://images2.imgbox.com/7c/0b/BhVEozcp_o.jpg','https://images2.imgbox.com/10/69/T0fZB2of_o.jpg','https://images2.imgbox.com/e1/47/1uAnMuMK_o.jpg','https://images2.imgbox.com/be/cd/D2KPdJPE_o.jpg','https://images2.imgbox.com/20/10/S8C5Hh0S_o.jpg','https://images2.imgbox.com/8c/99/FK3LExGh_o.jpg','https://images2.imgbox.com/a8/67/BCCSmxXY_o.jpg','https://images2.imgbox.com/dd/0c/1m9uzoGF_o.jpg','https://images2.imgbox.com/23/ca/JY0Abuas_o.jpg','https://images2.imgbox.com/a7/3c/pEweEOMy_o.jpg','https://images2.imgbox.com/6b/6e/GsStfbEc_o.jpg','https://images2.imgbox.com/d6/75/1aRcVJIX_o.jpg','https://images2.imgbox.com/91/e0/Glocn2uy_o.jpg','https://images2.imgbox.com/01/58/IZROckxQ_o.jpg','https://images2.imgbox.com/68/c4/XhA1ZdA0_o.jpg','https://images2.imgbox.com/72/8b/CIAtWf5H_o.jpg','https://images2.imgbox.com/76/74/JvBvrUoF_o.jpg','https://images2.imgbox.com/e9/c7/XFKJwaeb_o.jpg','https://images2.imgbox.com/04/6d/H6LXOxTz_o.jpg','https://images2.imgbox.com/31/55/JvEiLKwT_o.jpg','https://images2.imgbox.com/25/9e/eu9CHk84_o.jpg','https://images2.imgbox.com/98/d1/DBgEGsm2_o.jpg','https://images2.imgbox.com/f9/f6/WUKPR4Pw_o.jpg','https://images2.imgbox.com/54/7a/pDQ3GVKI_o.jpg','https://images2.imgbox.com/40/04/FFtVlsVz_o.jpg','https://images2.imgbox.com/ce/af/7JJ7M3hl_o.jpg','https://images2.imgbox.com/09/d2/mO5nViNl_o.jpg','https://images2.imgbox.com/8e/62/FKEmrgHn_o.jpg','https://images2.imgbox.com/14/1a/yKKXf1cH_o.jpg','https://images2.imgbox.com/3b/96/NGa1lfYc_o.jpg','https://images2.imgbox.com/da/e6/CIEiImoA_o.jpg','https://images2.imgbox.com/fa/99/OD0gDzy5_o.jpg','https://images2.imgbox.com/94/0e/356YgXVl_o.jpg','https://images2.imgbox.com/09/1c/cy4RogfZ_o.jpg']
let hichi = zero[Math.floor(Math.random() * zero.length)]
two = await getBuffer(hichi)
const ttwo =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const virm = ttwo[Math.floor(Math.random() * ttwo.length)]
cnf.sendMessage(from, two, image, { caption: virm, quoted: mek })
addFilter(from)
break

case prefix+'kimetsu':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)			  
const kime =['https://thumbs2.imgbox.com/90/ec/Zy8EgWzQ_t.jpg','https://thumbs2.imgbox.com/f9/3c/llBVcbjq_t.jpg','https://thumbs2.imgbox.com/35/3f/jPC9Dt4X_t.jpg','https://thumbs2.imgbox.com/b6/37/HoJ2GbaW_t.jpg','https://thumbs2.imgbox.com/17/67/Mqg03ZOl_t.jpg','https://thumbs2.imgbox.com/62/23/fLfFHCwq_t.jpg','https://thumbs2.imgbox.com/b6/6a/FohpW8PK_t.jpg','https://thumbs2.imgbox.com/91/df/UPHCZ1WW_t.jpg','https://thumbs2.imgbox.com/8c/33/WWDfpe0n_t.jpg','https://thumbs2.imgbox.com/dd/91/YqIUJS3s_t.jpg','https://thumbs2.imgbox.com/5f/46/XpnJcSQe_t.jpg','https://thumbs2.imgbox.com/23/c6/06OH9z2N_t.jpg','https://thumbs2.imgbox.com/2e/44/o9ZD8qEt_t.jpg','https://thumbs2.imgbox.com/de/f2/iNquqSFm_t.jpg','https://thumbs2.imgbox.com/94/56/ayo5zhi2_t.jpg','https://thumbs2.imgbox.com/8b/f0/uYatJggY_t.jpg','https://thumbs2.imgbox.com/ea/53/IT2As2Sl_t.jpg','https://thumbs2.imgbox.com/d5/ec/4SrkZpDf_t.jpg','https://thumbs2.imgbox.com/a4/ab/1A5kzbSu_t.jpg','https://thumbs2.imgbox.com/51/2d/wdZqE3K8_t.jpg','https://thumbs2.imgbox.com/51/bd/OiTQOJel_t.jpg','https://thumbs2.imgbox.com/2e/f0/rqzgx6en_t.jpg','https://thumbs2.imgbox.com/2b/c7/W9Bvto07_t.jpg','https://thumbs2.imgbox.com/72/08/3Q704NXs_t.jpg','https://thumbs2.imgbox.com/eb/71/lAkqIYcp_t.jpg','https://thumbs2.imgbox.com/a9/d6/rPOmUGZ8_t.jpg','https://thumbs2.imgbox.com/3e/36/lgcv9EuO_t.jpg','https://thumbs2.imgbox.com/73/4c/wKWNRzWq_t.jpg','https://thumbs2.imgbox.com/fc/08/Vl1CmkK3_t.jpg','https://thumbs2.imgbox.com/a4/25/SqOtRdMm_t.jpg','https://thumbs2.imgbox.com/cc/8e/t2tVyfjX_t.jpg','https://thumbs2.imgbox.com/af/9e/4nWruqy9_t.jpg','https://thumbs2.imgbox.com/58/70/DYc2Tbyp_t.jpg','https://thumbs2.imgbox.com/99/f5/hFNGf9M1_t.jpg','https://thumbs2.imgbox.com/dc/13/jKsuBrmN_t.jpg','https://thumbs2.imgbox.com/e5/53/6MZIOJcd_t.jpg','https://thumbs2.imgbox.com/48/17/EXNa0ChM_t.jpg','https://thumbs2.imgbox.com/1a/35/vnlEeqqI_t.jpg','https://thumbs2.imgbox.com/22/b1/anPM03l9_t.jpg','https://thumbs2.imgbox.com/95/74/erHIaXp5_t.jpg','https://thumbs2.imgbox.com/f4/15/Ogy5OZQS_t.jpg','https://thumbs2.imgbox.com/f0/fd/YX1pVrbC_t.jpg','https://thumbs2.imgbox.com/46/8a/RCUdstEx_t.jpg','https://thumbs2.imgbox.com/a5/67/HIX3GuMg_t.jpg','https://thumbs2.imgbox.com/e4/cc/VnjE6BwG_t.jpg','https://thumbs2.imgbox.com/8e/2c/GQyWWuIh_t.jpg','https://thumbs2.imgbox.com/55/a1/rFA92fwk_t.jpg','https://thumbs2.imgbox.com/38/b7/UATIPSQ4_t.jpg','https://thumbs2.imgbox.com/71/7d/lzvX6qaz_t.jpg','https://thumbs2.imgbox.com/24/15/3EQDNHcK_t.jpg','https://thumbs2.imgbox.com/a7/8d/u3A6P0Yy_t.jpg','https://thumbs2.imgbox.com/d4/1e/L7ugSg1r_t.jpg','https://thumbs2.imgbox.com/d4/eb/PAJwq1Be_t.jpg','https://thumbs2.imgbox.com/94/fa/SmR5VMUA_t.jpg','https://thumbs2.imgbox.com/5b/a9/CnvbyGw2_t.jpg','https://thumbs2.imgbox.com/80/12/WmJyk9Yy_t.jpg','https://thumbs2.imgbox.com/fe/88/JCTdQDOm_t.jpg','https://thumbs2.imgbox.com/14/60/lSqN2QlL_t.jpg','https://thumbs2.imgbox.com/08/96/BUjgnbeJ_t.jpg','https://thumbs2.imgbox.com/bc/d5/490gpECt_t.jpg','https://thumbs2.imgbox.com/36/2f/F9yhRnU7_t.jpg','https://thumbs2.imgbox.com/22/6f/qp9cGzxh_t.jpg','https://thumbs2.imgbox.com/21/46/0mV6w6k7_t.jpg','https://thumbs2.imgbox.com/a4/db/jnytXtu3_t.jpg','https://thumbs2.imgbox.com/8a/62/aUrNa6N0_t.jpg','https://thumbs2.imgbox.com/c5/55/fstfpdlt_t.jpg','https://thumbs2.imgbox.com/22/a5/ZNiq1Kpb_t.jpg','https://thumbs2.imgbox.com/36/68/Dd6tdOBH_t.jpg','https://thumbs2.imgbox.com/ec/fe/ym8IYptN_t.png','https://thumbs2.imgbox.com/96/d4/KIKqEJJ9_t.jpg','https://thumbs2.imgbox.com/97/0c/AHCRW0qJ_t.jpg','https://thumbs2.imgbox.com/cd/ea/dVTUfZ69_t.jpg','https://thumbs2.imgbox.com/06/15/NyF5HcWC_t.jpg','https://thumbs2.imgbox.com/65/0d/pWqV7OpC_t.jpg','https://thumbs2.imgbox.com/50/2f/xN5y52BB_t.jpg','https://thumbs2.imgbox.com/fe/16/zNRZ6Mco_t.jpg','https://thumbs2.imgbox.com/8b/8a/woMrentV_t.jpg','https://thumbs2.imgbox.com/f8/1c/L12vKEIa_t.jpg','https://thumbs2.imgbox.com/3b/7c/PnGHoszG_t.jpg','https://thumbs2.imgbox.com/0f/e5/wvGxXHcL_t.jpg','https://thumbs2.imgbox.com/30/9d/NIaFbSwu_t.jpg','https://thumbs2.imgbox.com/c0/5e/TdbB0air_t.jpg','https://thumbs2.imgbox.com/6a/01/vaSnIowj_t.jpg','https://thumbs2.imgbox.com/07/02/0elA0Nxo_t.jpg','https://thumbs2.imgbox.com/34/fe/NM9l6HwV_t.jpg','https://thumbs2.imgbox.com/7c/6f/Lb3MVUNM_t.jpg','https://thumbs2.imgbox.com/58/3c/iBRngRK7_t.jpg','https://thumbs2.imgbox.com/38/24/dZbPcjb6_t.jpg','https://thumbs2.imgbox.com/cf/ca/2J4T9oyA_t.jpg','https://thumbs2.imgbox.com/51/a2/D4NV1NSV_t.jpg','https://thumbs2.imgbox.com/91/5a/Hvc0Ojd8_t.jpg','https://thumbs2.imgbox.com/09/f2/VQ1UUuTp_t.jpg','https://thumbs2.imgbox.com/39/2b/XlGmmzdY_t.jpg','https://thumbs2.imgbox.com/e1/b0/FvO30huB_t.jpg','https://thumbs2.imgbox.com/37/e2/p5HEHjD9_t.jpg','https://thumbs2.imgbox.com/1c/99/3YNo1KbA_t.jpg','https://thumbs2.imgbox.com/8d/39/6yhwSl33_t.jpg','https://thumbs2.imgbox.com/24/2b/tkzAMDJS_t.jpg','https://thumbs2.imgbox.com/28/69/rxcjZ0py_t.jpg','https://thumbs2.imgbox.com/24/68/MBI68uMo_t.jpg','https://thumbs2.imgbox.com/0f/5b/nEVnukBP_t.jpg','https://thumbs2.imgbox.com/cc/ce/NeXaJGbj_t.jpg','https://thumbs2.imgbox.com/85/29/Pf3zLJtd_t.jpg','https://thumbs2.imgbox.com/00/db/iS1sHhEh_t.jpg','https://thumbs2.imgbox.com/00/c7/YRIxltPG_t.jpg','https://thumbs2.imgbox.com/22/e4/XR6x18si_t.png','https://thumbs2.imgbox.com/6a/76/YpcNaUfd_t.jpg','https://thumbs2.imgbox.com/0b/f2/OOQm1lMd_t.jpg','https://thumbs2.imgbox.com/9f/4b/EP9eNi6k_t.jpg','https://thumbs2.imgbox.com/88/37/UvEK02al_t.jpg','https://thumbs2.imgbox.com/f3/15/S6rovPbK_t.png','https://thumbs2.imgbox.com/d4/95/Z3V9N7au_t.jpg','https://thumbs2.imgbox.com/01/42/rHlIcZBv_t.jpg','https://thumbs2.imgbox.com/8e/7a/kRrOCJgs_t.jpg','https://thumbs2.imgbox.com/28/ff/Qkkr543a_t.jpg','https://thumbs2.imgbox.com/e0/12/IY6zZ17x_t.jpg','https://thumbs2.imgbox.com/fb/eb/CfsNztnI_t.jpg','https://thumbs2.imgbox.com/a4/7c/yYrQsdMA_t.png','https://thumbs2.imgbox.com/81/8f/QSpCcNmV_t.jpg','https://thumbs2.imgbox.com/89/39/1G6M5ypx_t.jpg','https://thumbs2.imgbox.com/d6/f9/j80OoTMm_t.jpg','https://thumbs2.imgbox.com/ec/eb/MCXS5ef9_t.jpg','https://thumbs2.imgbox.com/2b/12/qNjZ8Hms_t.jpg','https://thumbs2.imgbox.com/31/12/J7Tuxr13_t.jpg','https://thumbs2.imgbox.com/87/80/nNj2dKK8_t.jpg','https://thumbs2.imgbox.com/f6/bc/p436FxKz_t.jpg','https://thumbs2.imgbox.com/91/3a/Zp4qWhOk_t.jpg','https://thumbs2.imgbox.com/a6/32/TDiAWDeg_t.jpg','https://thumbs2.imgbox.com/98/53/m1m4S7Sx_t.jpg','https://thumbs2.imgbox.com/83/19/vrS7aGTq_t.jpg','https://thumbs2.imgbox.com/95/a2/dBwUnVms_t.jpg','https://thumbs2.imgbox.com/0c/e2/DnJaRPoe_t.jpg','https://thumbs2.imgbox.com/b8/62/6wRfojA4_t.jpg','https://thumbs2.imgbox.com/c3/2a/Xcd5kZ01_t.jpg','https://thumbs2.imgbox.com/6e/a5/bPNoRB8t_t.jpg','https://thumbs2.imgbox.com/a3/c0/Wt3DZAE6_t.jpg','https://thumbs2.imgbox.com/59/d2/dnEjYim2_t.jpg','https://thumbs2.imgbox.com/fa/42/bW1RddCH_t.jpg','https://thumbs2.imgbox.com/33/ce/LB8XyRiw_t.jpg','https://thumbs2.imgbox.com/7b/4e/CLcOIj95_t.jpg','https://thumbs2.imgbox.com/38/37/9e13PNck_t.jpg','https://thumbs2.imgbox.com/4c/ef/4GPvOZth_t.jpg','https://thumbs2.imgbox.com/33/7c/X1oKGemf_t.jpg','https://thumbs2.imgbox.com/3a/f3/Ie2Cikog_t.jpg','https://thumbs2.imgbox.com/1f/d0/ZBpOm2jf_t.jpg','https://thumbs2.imgbox.com/1b/23/98xhx2Tz_t.jpg','https://thumbs2.imgbox.com/12/17/OawJY2zG_t.jpg','https://thumbs2.imgbox.com/19/b5/r4HTpUus_t.jpg','https://thumbs2.imgbox.com/be/6b/m39IE9eu_t.jpg','https://thumbs2.imgbox.com/03/13/fcMRQyie_t.jpg','https://thumbs2.imgbox.com/58/d6/WJxbPUyj_t.jpg','https://thumbs2.imgbox.com/2b/14/EYAXD17n_t.jpg','https://thumbs2.imgbox.com/cb/a5/jJYO2AxD_t.jpg','https://thumbs2.imgbox.com/55/df/B633yH0N_t.jpg','https://thumbs2.imgbox.com/ae/b3/hijKvkYm_t.jpg','https://thumbs2.imgbox.com/e1/2e/vSZ8pN4u_t.jpg','https://thumbs2.imgbox.com/ca/f1/PAxf8fWQ_t.jpg','https://thumbs2.imgbox.com/d1/c9/0FxMyvyP_t.jpg','https://thumbs2.imgbox.com/0d/b7/gC0cMOZJ_t.jpg','https://thumbs2.imgbox.com/2b/f9/g1Zq6QBG_t.jpg','https://thumbs2.imgbox.com/9e/1b/zQgOMzF9_t.jpg','https://thumbs2.imgbox.com/f7/06/wHVEzjEQ_t.jpg','https://thumbs2.imgbox.com/f6/58/DJN0y1sF_t.jpg','https://thumbs2.imgbox.com/94/c7/m4KKSBgp_t.jpg','https://thumbs2.imgbox.com/00/57/1dWqQZ3S_t.jpg','https://thumbs2.imgbox.com/8b/f7/wb6L0GeU_t.jpg','https://thumbs2.imgbox.com/2d/70/3KiDOoiS_t.jpg','https://thumbs2.imgbox.com/a8/4d/qyw2Q28g_t.jpg','https://thumbs2.imgbox.com/f4/2e/eJcyN9NQ_t.jpg','https://thumbs2.imgbox.com/8f/a7/zTiPiIPO_t.jpg','https://thumbs2.imgbox.com/b7/c0/gtntFaKo_t.jpg','https://thumbs2.imgbox.com/5f/6b/7cjW10tw_t.jpg','https://thumbs2.imgbox.com/24/e6/pNUY7NdC_t.jpg','https://thumbs2.imgbox.com/ff/67/uDAGkX7I_t.jpg','https://thumbs2.imgbox.com/47/9c/ZoHaYA7E_t.jpg','https://thumbs2.imgbox.com/e2/0e/Mr9mFxWk_t.jpg','https://thumbs2.imgbox.com/26/53/xjKd3lo7_t.jpg','https://thumbs2.imgbox.com/07/b9/OJFFfIhb_t.jpg','https://thumbs2.imgbox.com/f5/fc/74HzGKAP_t.jpg','https://thumbs2.imgbox.com/e4/07/hwOg86NR_t.jpg','https://thumbs2.imgbox.com/dd/fe/MWRVZt5M_t.jpg','https://thumbs2.imgbox.com/32/97/tegVjX0f_t.jpg','https://thumbs2.imgbox.com/ef/39/Dxj8luJN_t.jpg','https://thumbs2.imgbox.com/0d/55/8xM0VoXN_t.jpg','https://thumbs2.imgbox.com/66/de/oI5lpUld_t.jpg','https://thumbs2.imgbox.com/d5/47/ne6QYOkt_t.jpg','https://thumbs2.imgbox.com/02/a1/NTHEpS5v_t.jpg','https://thumbs2.imgbox.com/00/31/fCbwhm52_t.jpg','https://thumbs2.imgbox.com/49/d6/m2LxgGAx_t.jpg','https://thumbs2.imgbox.com/d1/12/JjZ0rP5o_t.jpg','https://thumbs2.imgbox.com/44/71/XEkSfT1w_t.jpg','https://thumbs2.imgbox.com/62/16/Uqxmu8N3_t.jpg','https://thumbs2.imgbox.com/d1/2d/doHDKGOw_t.jpg','https://thumbs2.imgbox.com/2a/c7/QMtvIm6h_t.jpg','https://thumbs2.imgbox.com/08/92/DnakDVoa_t.jpg','https://thumbs2.imgbox.com/8c/92/g7oqXdzm_t.jpg','https://thumbs2.imgbox.com/41/03/YqTB1cjk_t.jpg','https://thumbs2.imgbox.com/a6/0e/KxSbf69R_t.jpg','https://thumbs2.imgbox.com/a0/9c/obeMwUCM_t.jpg',
	     'https://thumbs2.imgbox.com/de/0c/S5rKGTvd_t.jpg','https://thumbs2.imgbox.com/57/82/i6IR6AAy_t.jpg','https://thumbs2.imgbox.com/b2/4a/CzibvoFO_t.jpg','https://thumbs2.imgbox.com/5d/71/qhoYDp3n_t.jpg','https://thumbs2.imgbox.com/3d/41/HLbBX7pQ_t.jpg','https://thumbs2.imgbox.com/53/a3/PQSzKOVM_t.jpg','https://thumbs2.imgbox.com/60/2d/D08EL1SN_t.jpg','https://thumbs2.imgbox.com/d6/e9/a5K2knK2_t.jpg','https://thumbs2.imgbox.com/0a/df/vLB5FYCO_t.jpg','https://thumbs2.imgbox.com/2e/5c/28TJsZLz_t.jpg','https://thumbs2.imgbox.com/68/2f/0eNfujhE_t.jpg','https://thumbs2.imgbox.com/b7/e5/js8hy8Ce_t.jpg','https://thumbs2.imgbox.com/40/6a/FJrSm46n_t.jpg','https://thumbs2.imgbox.com/59/88/Osk258B6_t.jpg','https://thumbs2.imgbox.com/1e/1e/8FbROPcE_t.jpg','https://thumbs2.imgbox.com/82/e8/59rpBp7z_t.jpg','https://thumbs2.imgbox.com/a7/ac/fIBKsjQa_t.jpg','https://thumbs2.imgbox.com/80/3a/qbTUwEUz_t.jpg','https://thumbs2.imgbox.com/f0/4a/wKVfzJTm_t.jpg','https://thumbs2.imgbox.com/81/d5/ooj93Yjg_t.jpg','https://thumbs2.imgbox.com/e4/36/jWVHCOiT_t.jpg','https://thumbs2.imgbox.com/49/d8/pUuBBmDd_t.jpg','https://thumbs2.imgbox.com/eb/fc/vd8pTjXx_t.jpg','https://thumbs2.imgbox.com/10/88/7ZtCCOB6_t.jpg','https://thumbs2.imgbox.com/67/fe/XWqXujU6_t.jpg','https://thumbs2.imgbox.com/fe/bb/9lIDMwCC_t.jpg','https://thumbs2.imgbox.com/86/06/N0bbQQgi_t.jpg','https://thumbs2.imgbox.com/dc/0a/fbRvLTag_t.jpg','https://thumbs2.imgbox.com/57/c2/c9dH6kCp_t.jpg','https://thumbs2.imgbox.com/f8/6f/CbyjlVA6_t.jpg','https://thumbs2.imgbox.com/27/d1/IYMTcFIM_t.jpg','https://thumbs2.imgbox.com/f9/c5/gWqQpvIk_t.jpg','https://thumbs2.imgbox.com/bc/7f/pOViEbgz_t.jpg','https://thumbs2.imgbox.com/e2/db/8Dw8wEtD_t.jpg','https://thumbs2.imgbox.com/96/e3/YSXQwTtw_t.jpg','https://thumbs2.imgbox.com/08/41/HemMox1U_t.jpg','https://thumbs2.imgbox.com/03/ca/gJQafyxh_t.jpg','https://thumbs2.imgbox.com/61/22/TbWpgB7i_t.jpg','https://thumbs2.imgbox.com/a9/e4/iHswDuij_t.jpg','https://thumbs2.imgbox.com/d8/d3/r7Ho3LNL_t.jpg','https://thumbs2.imgbox.com/f2/b3/MgCmfEMb_t.jpg','https://thumbs2.imgbox.com/40/4b/WmjU0d6a_t.jpg','https://thumbs2.imgbox.com/c9/91/EhtdIEWU_t.jpg','https://thumbs2.imgbox.com/e7/71/z7XHMqrb_t.jpg','https://thumbs2.imgbox.com/17/47/kehG6G7J_t.jpg','https://thumbs2.imgbox.com/98/96/S3OUsvZw_t.jpg','https://thumbs2.imgbox.com/3a/33/CFsR9Zsh_t.jpg','https://thumbs2.imgbox.com/3f/39/9L28AViu_t.jpg','https://thumbs2.imgbox.com/0c/9a/jdaTxjHD_t.jpg','https://thumbs2.imgbox.com/66/f0/X51JpfEg_t.jpg','https://thumbs2.imgbox.com/6b/6b/Hp2oPJrN_t.jpg','https://thumbs2.imgbox.com/b3/6c/g9010vAP_t.jpg','https://thumbs2.imgbox.com/59/1b/jPcADd43_t.jpg','https://thumbs2.imgbox.com/10/b9/xw12yoF1_t.jpg','https://thumbs2.imgbox.com/6b/32/bDIbiiWV_t.jpg','https://thumbs2.imgbox.com/23/07/lBpSZpVl_t.jpg','https://thumbs2.imgbox.com/af/fa/iS2PjG21_t.jpg','https://thumbs2.imgbox.com/e5/d5/rLc1bHaU_t.jpg','https://thumbs2.imgbox.com/f2/a4/Z8yyPeZb_t.jpg','https://thumbs2.imgbox.com/4c/41/lAJFgF41_t.png','https://thumbs2.imgbox.com/43/d2/ideBMmgB_t.jpg','https://thumbs2.imgbox.com/77/bb/L9G4QK4q_t.jpg','https://thumbs2.imgbox.com/8c/8a/QMPPTIog_t.jpg','https://thumbs2.imgbox.com/25/92/G4EcpwwZ_t.jpg','https://thumbs2.imgbox.com/70/3f/NqiFNB60_t.jpg','https://thumbs2.imgbox.com/af/d9/QUW49AsQ_t.jpg','https://thumbs2.imgbox.com/bc/96/KdDgfO18_t.jpg','https://thumbs2.imgbox.com/bd/97/ckj1Z6TE_t.jpg','https://thumbs2.imgbox.com/dd/cc/RoLzliqd_t.jpg','https://thumbs2.imgbox.com/b3/f4/xPDoX5yq_t.jpg','https://thumbs2.imgbox.com/af/82/zLWdoNUn_t.jpg','https://thumbs2.imgbox.com/cd/89/BfKrAsVf_t.jpg','https://thumbs2.imgbox.com/f7/aa/rEKeWQa5_t.jpg','https://thumbs2.imgbox.com/08/d4/K2pjwAHx_t.jpg','https://thumbs2.imgbox.com/a1/86/sW1SjnDO_t.jpg','https://thumbs2.imgbox.com/45/be/vMtBf2IA_t.jpg','https://thumbs2.imgbox.com/1b/a1/mF7iZ4Te_t.jpg','https://thumbs2.imgbox.com/8d/93/y6MMjyKc_t.jpg','https://thumbs2.imgbox.com/87/12/yE74KnNa_t.jpg','https://thumbs2.imgbox.com/5b/8c/urt7JYm8_t.jpg','https://thumbs2.imgbox.com/72/97/ohzx6LZd_t.jpg','https://thumbs2.imgbox.com/fc/1a/bX6KayJF_t.jpg','https://thumbs2.imgbox.com/8e/c1/EXcRrs8T_t.jpg','https://thumbs2.imgbox.com/f8/5c/wY7EK0VJ_t.jpg','https://thumbs2.imgbox.com/91/4d/JiHYcd0r_t.jpg','https://thumbs2.imgbox.com/11/96/xsY6JIia_t.jpg','https://thumbs2.imgbox.com/e3/c2/QefiH3xe_t.jpg','https://thumbs2.imgbox.com/6f/42/I6Ub6SeE_t.jpg','https://thumbs2.imgbox.com/f0/8a/99TXarKz_t.jpg','https://thumbs2.imgbox.com/c6/6d/3x2SbzoK_t.jpg','https://thumbs2.imgbox.com/82/44/yPZYH1Ls_t.jpg','https://thumbs2.imgbox.com/00/14/9B91aBKD_t.jpg','https://thumbs2.imgbox.com/5c/bf/Do6uVVoR_t.jpg','https://thumbs2.imgbox.com/43/1c/lp6Btz3q_t.jpg','https://thumbs2.imgbox.com/cb/df/gWspk35y_t.jpg','https://thumbs2.imgbox.com/50/d3/6l2xATLW_t.jpg','https://thumbs2.imgbox.com/6c/fb/4MZrC9Lq_t.jpg','https://thumbs2.imgbox.com/68/cd/ksHF8t4z_t.jpg','https://thumbs2.imgbox.com/5b/89/dH21ViBr_t.jpg','https://thumbs2.imgbox.com/e4/8d/nPjO1H0o_t.jpg','https://thumbs2.imgbox.com/ae/d7/Yv0G5HIR_t.jpg','https://thumbs2.imgbox.com/13/48/RJFr8mTU_t.jpg','https://thumbs2.imgbox.com/f3/46/GQAIpleV_t.jpg','https://thumbs2.imgbox.com/d0/52/0wrotHPE_t.jpg','https://thumbs2.imgbox.com/eb/3e/i62qlDdZ_t.jpg','https://thumbs2.imgbox.com/0f/05/x45gznDB_t.jpg','https://thumbs2.imgbox.com/76/0b/hjRyQxoN_t.jpg','https://thumbs2.imgbox.com/ee/27/3bTIxoPt_t.jpg','https://thumbs2.imgbox.com/eb/81/AxAW1Ack_t.jpg','https://thumbs2.imgbox.com/07/23/VsRcGmZV_t.jpg','https://thumbs2.imgbox.com/88/e9/BmQMbXfo_t.jpg','https://thumbs2.imgbox.com/48/b6/KndNiRA7_t.jpg','https://thumbs2.imgbox.com/ba/a3/gviJjQXw_t.jpg','https://thumbs2.imgbox.com/b5/24/9rgjKdZx_t.jpg','https://thumbs2.imgbox.com/fc/18/BXN64yoR_t.jpg','https://thumbs2.imgbox.com/d3/82/xf48grP0_t.jpg','https://thumbs2.imgbox.com/d0/20/V5AnXMeK_t.jpg','https://thumbs2.imgbox.com/20/49/nWd88x9M_t.jpg','https://thumbs2.imgbox.com/15/79/NM50wV1z_t.jpg','https://thumbs2.imgbox.com/0c/b3/x4KurBBZ_t.jpg','https://thumbs2.imgbox.com/7d/72/28WF3Gd9_t.jpg','https://thumbs2.imgbox.com/9d/d4/KUibOJCO_t.jpg','https://thumbs2.imgbox.com/34/51/k6ALSN1s_t.jpg','https://thumbs2.imgbox.com/ad/60/bYP2alsi_t.jpg','https://thumbs2.imgbox.com/19/ae/9hHwRz01_t.jpg','https://thumbs2.imgbox.com/5a/f9/CtwFTej1_t.jpg','https://thumbs2.imgbox.com/be/d0/sCkUgMPL_t.jpg','https://thumbs2.imgbox.com/85/00/61toosbG_t.jpg','https://thumbs2.imgbox.com/a3/8b/9TjpKq9q_t.jpg','https://thumbs2.imgbox.com/21/e5/Mk3UuqMJ_t.jpg','https://thumbs2.imgbox.com/61/2f/vyHFj6dN_t.jpg','https://thumbs2.imgbox.com/da/cc/o4xhJ9CD_t.jpg','https://thumbs2.imgbox.com/9a/03/sc3Rh7hx_t.jpg','https://thumbs2.imgbox.com/0e/73/Yltji5n6_t.jpg','https://thumbs2.imgbox.com/46/26/42ivVYq2_t.jpg','https://thumbs2.imgbox.com/ca/4b/SKiZoIoZ_t.jpg','https://thumbs2.imgbox.com/c9/b7/LBSqFnwf_t.jpg','https://thumbs2.imgbox.com/8d/4a/R6yHowTo_t.jpg','https://thumbs2.imgbox.com/35/00/TMVjkSj0_t.jpg','https://thumbs2.imgbox.com/be/bc/3871YZJU_t.jpg','https://thumbs2.imgbox.com/c7/a9/DkZS5YwO_t.jpg','https://thumbs2.imgbox.com/b9/bd/8GJzbJL2_t.jpg','https://thumbs2.imgbox.com/8a/5b/uqdsSEBk_t.jpg','https://thumbs2.imgbox.com/d2/84/bT8ZnEa9_t.jpg','https://thumbs2.imgbox.com/61/00/ZD9PkST9_t.jpg','https://thumbs2.imgbox.com/81/61/7dooK1Ki_t.jpg','https://thumbs2.imgbox.com/e9/68/OF7h1uMT_t.jpg','https://thumbs2.imgbox.com/07/70/dfmBlMml_t.jpg','https://thumbs2.imgbox.com/6a/2b/X6JKXNgt_t.jpg','https://thumbs2.imgbox.com/35/59/Rquaz0Mr_t.jpg','https://thumbs2.imgbox.com/6b/bd/iYexz6pH_t.jpg','https://thumbs2.imgbox.com/f9/f3/S4pDfTCp_t.jpg','https://thumbs2.imgbox.com/eb/f8/qzT3eu9u_t.jpg','https://thumbs2.imgbox.com/c9/42/hNomEtOM_t.jpg','https://thumbs2.imgbox.com/75/59/CCs1TlMo_t.jpg','https://thumbs2.imgbox.com/c8/c3/HRkvHjlE_t.jpg','https://thumbs2.imgbox.com/d2/99/WnF5OdL0_t.jpg','https://thumbs2.imgbox.com/c6/26/IDL99wEe_t.jpg','https://thumbs2.imgbox.com/9f/29/7sewkvkw_t.jpg','https://thumbs2.imgbox.com/b1/54/dtbdrJRD_t.jpg','https://thumbs2.imgbox.com/42/fa/k4B5IPHE_t.jpg','https://thumbs2.imgbox.com/3a/e8/ncrwDqLy_t.jpg','https://thumbs2.imgbox.com/65/1a/629i6CDF_t.jpg','https://thumbs2.imgbox.com/1d/3c/o3OJ5VLm_t.jpg','https://thumbs2.imgbox.com/b5/e1/pDIn1dJR_t.jpg','https://thumbs2.imgbox.com/76/a4/ex1sCO9y_t.jpg','https://thumbs2.imgbox.com/d2/93/oUFkHjdU_t.jpg','https://thumbs2.imgbox.com/0f/00/9TQuTzbi_t.jpg','https://thumbs2.imgbox.com/4f/07/BhGWeUbH_t.jpg','https://thumbs2.imgbox.com/90/fb/mPVvDxkq_t.jpg','https://thumbs2.imgbox.com/42/83/exjNspJM_t.jpg','https://thumbs2.imgbox.com/5f/2f/HRmFergL_t.jpg','https://thumbs2.imgbox.com/78/86/W9JlIwei_t.jpg','https://thumbs2.imgbox.com/6d/fe/964B79mC_t.jpg','https://thumbs2.imgbox.com/b2/4d/jPG7iqwL_t.jpg','https://thumbs2.imgbox.com/38/ef/f2781h2l_t.jpg','https://thumbs2.imgbox.com/e0/42/DA2huJPr_t.jpg','https://thumbs2.imgbox.com/91/cd/0mcmGw1s_t.jpg','https://thumbs2.imgbox.com/33/d3/XC0YiaRU_t.jpg','https://thumbs2.imgbox.com/82/29/kQ4gCd7m_t.jpg','https://thumbs2.imgbox.com/94/24/4uLLwRvo_t.jpg','https://thumbs2.imgbox.com/1d/57/1mwJDXG5_t.jpg','https://thumbs2.imgbox.com/42/c9/AqoCuWQI_t.jpg','https://thumbs2.imgbox.com/95/3c/bNvlhljU_t.jpg','https://thumbs2.imgbox.com/5d/b2/dSy4Ouni_t.jpg','https://thumbs2.imgbox.com/b6/41/a2bP2j1A_t.jpg','https://thumbs2.imgbox.com/44/7f/9UmnbHuZ_t.jpg','https://thumbs2.imgbox.com/7f/5b/Y56WZFsG_t.jpg','https://thumbs2.imgbox.com/b8/b0/cdTYs95M_t.jpg','https://thumbs2.imgbox.com/e9/40/xdxvUfDG_t.jpg','https://thumbs2.imgbox.com/46/e7/wrf3jqZI_t.jpg','https://thumbs2.imgbox.com/b1/46/Y4YvHK9s_t.jpg','https://thumbs2.imgbox.com/38/09/hQsRnXVe_t.jpg','https://thumbs2.imgbox.com/74/86/Xrr8koL0_t.jpg','https://thumbs2.imgbox.com/92/cb/NBXmAEOA_t.jpg','https://thumbs2.imgbox.com/52/aa/NFd4nRdO_t.jpg','https://thumbs2.imgbox.com/1d/ca/GFCi8wEH_t.jpg','https://thumbs2.imgbox.com/71/d8/5yOwpYFU_t.jpg','https://thumbs2.imgbox.com/35/e3/A8Stn79y_t.jpg',
	     'https://thumbs2.imgbox.com/31/b6/8cvzOG4R_t.jpg','https://thumbs2.imgbox.com/61/ff/H1BDuVVG_t.jpg','https://thumbs2.imgbox.com/e1/d4/BShXVdcz_t.jpg','https://thumbs2.imgbox.com/0b/a0/BtijhfOQ_t.jpg','https://thumbs2.imgbox.com/9d/43/ze8TIn6f_t.jpg','https://thumbs2.imgbox.com/1d/68/2nHngIdw_t.jpg','https://thumbs2.imgbox.com/cf/5c/Ot7JKB0t_t.jpg','https://thumbs2.imgbox.com/b0/81/uOXKRtJz_t.jpg','https://thumbs2.imgbox.com/ca/18/d5q4lti4_t.jpg','https://thumbs2.imgbox.com/e0/38/I3lmYuzI_t.jpg','https://thumbs2.imgbox.com/c0/bb/qrSWKsY3_t.jpg','https://thumbs2.imgbox.com/30/6d/dlSfloY9_t.jpg','https://thumbs2.imgbox.com/0c/4c/YgXaUrgN_t.jpg','https://thumbs2.imgbox.com/7f/b6/qXnqGmzc_t.jpg','https://thumbs2.imgbox.com/bf/40/nNh7BbB6_t.jpg','https://thumbs2.imgbox.com/49/a5/HTiUOSXh_t.jpg','https://thumbs2.imgbox.com/2f/ab/l9Yqwdoz_t.jpg','https://thumbs2.imgbox.com/57/a1/6Q75SNzH_t.jpg','https://thumbs2.imgbox.com/5e/9e/E9LzUTBs_t.jpg','https://thumbs2.imgbox.com/7a/3a/ASX0sEuV_t.jpg','https://thumbs2.imgbox.com/eb/ea/f4ORY1ch_t.jpg','https://thumbs2.imgbox.com/2e/ee/vJ8aosnu_t.jpg','https://thumbs2.imgbox.com/91/b3/acXMSj7K_t.jpg','https://thumbs2.imgbox.com/25/f0/fmNIpUhq_t.jpg','https://thumbs2.imgbox.com/47/1f/nXQJA86X_t.jpg','https://thumbs2.imgbox.com/d9/39/JH28eqw7_t.jpg','https://thumbs2.imgbox.com/50/05/eDb4MWrf_t.jpg','https://thumbs2.imgbox.com/c4/8b/2o10rg56_t.jpg','https://thumbs2.imgbox.com/27/84/g3N83sox_t.jpg','https://thumbs2.imgbox.com/a3/3c/RPPoPvJL_t.jpg','https://thumbs2.imgbox.com/89/be/TheLt70E_t.jpg','https://thumbs2.imgbox.com/d5/5e/baIqezkp_t.jpg','https://thumbs2.imgbox.com/8b/af/ZMCbRsBS_t.jpg','https://thumbs2.imgbox.com/3c/9b/hvTjK7C4_t.jpg','https://thumbs2.imgbox.com/2c/89/gwVIU8OC_t.jpg','https://thumbs2.imgbox.com/f4/3b/RTCA4XjL_t.jpg','https://thumbs2.imgbox.com/36/11/Vj8EogD2_t.jpg','https://thumbs2.imgbox.com/27/8f/RAeOT2uo_t.jpg','https://thumbs2.imgbox.com/8a/ce/Hz7mpA6H_t.jpg','https://thumbs2.imgbox.com/7f/72/39a2ynq8_t.jpg','https://thumbs2.imgbox.com/34/3a/7y0apbto_t.jpg','https://thumbs2.imgbox.com/33/3c/2Kq64QI5_t.jpg','https://thumbs2.imgbox.com/27/8c/c1t9q2OL_t.jpg','https://thumbs2.imgbox.com/ad/46/aLUvGUml_t.jpg','https://thumbs2.imgbox.com/3f/79/XefmE2kv_t.jpg','https://thumbs2.imgbox.com/2b/d9/UPbF8AmM_t.jpg','https://thumbs2.imgbox.com/f7/de/YWmzS28h_t.jpg','https://thumbs2.imgbox.com/d8/58/Ln7DODlg_t.jpg','https://thumbs2.imgbox.com/e2/c3/fLp8bSpa_t.jpg','https://thumbs2.imgbox.com/02/70/4eBCxpoj_t.jpg','https://thumbs2.imgbox.com/dc/26/dLzMV4SB_t.jpg','https://thumbs2.imgbox.com/18/b2/zrHwk1Oj_t.jpg','https://thumbs2.imgbox.com/44/cf/iAWBCbT5_t.jpg','https://thumbs2.imgbox.com/45/82/wIRiP9w2_t.jpg','https://thumbs2.imgbox.com/6e/c1/lBFFMehi_t.jpg','https://thumbs2.imgbox.com/89/18/vgPEyWB0_t.jpg','https://thumbs2.imgbox.com/8d/c4/vwilmVRh_t.jpg','https://thumbs2.imgbox.com/cf/27/9toeDOt0_t.jpg','https://thumbs2.imgbox.com/98/db/LB9x7CHX_t.jpg','https://thumbs2.imgbox.com/7f/5b/sSgDUTh2_t.jpg','https://thumbs2.imgbox.com/33/73/Qow64Jw7_t.jpg','https://thumbs2.imgbox.com/75/1f/qMBi1UXF_t.jpg','https://thumbs2.imgbox.com/10/de/Dp5o0pMj_t.jpg','https://thumbs2.imgbox.com/7e/69/bAqpr3pi_t.jpg','https://thumbs2.imgbox.com/5d/9d/h8Alxq5h_t.jpg','https://thumbs2.imgbox.com/e3/06/1X07PQOV_t.jpg','https://thumbs2.imgbox.com/0d/08/bFQ6aP8t_t.jpg','https://thumbs2.imgbox.com/1b/a8/0HYDoavp_t.jpg','https://thumbs2.imgbox.com/fa/62/dNKyE5nP_t.jpg','https://thumbs2.imgbox.com/06/62/U2wZuQ0G_t.jpg','https://thumbs2.imgbox.com/b9/17/aMJXAnVj_t.jpg','https://thumbs2.imgbox.com/9a/16/r3GUoQyA_t.jpg','https://thumbs2.imgbox.com/d2/40/8VQemEd8_t.jpg','https://thumbs2.imgbox.com/cf/21/Tev79xdA_t.jpg','https://thumbs2.imgbox.com/3c/57/Z0zW6YFh_t.jpg','https://thumbs2.imgbox.com/45/a3/6Bj8cLUE_t.jpg','https://thumbs2.imgbox.com/05/c3/Ubct2JCE_t.jpg','https://thumbs2.imgbox.com/5f/95/t22ycsQi_t.jpg','https://thumbs2.imgbox.com/95/f3/0Ja7lSu4_t.jpg','https://thumbs2.imgbox.com/17/95/RKUjy6iS_t.jpg','https://thumbs2.imgbox.com/6d/f9/Gj91y5Ce_t.jpg','https://thumbs2.imgbox.com/61/05/v9uL8nfs_t.jpg','https://thumbs2.imgbox.com/6c/36/WBxa7Oqt_t.jpg','https://thumbs2.imgbox.com/dc/ac/17RsHMvS_t.jpg','https://thumbs2.imgbox.com/61/09/UWRZDLSD_t.jpg','https://thumbs2.imgbox.com/92/c7/0Bh133VX_t.jpg','https://thumbs2.imgbox.com/b0/91/YXfqiRus_t.jpg','https://thumbs2.imgbox.com/56/07/7LnoGjAg_t.jpg','https://thumbs2.imgbox.com/98/06/MNb0hqm2_t.jpg','https://thumbs2.imgbox.com/d9/5d/bkU3GyH7_t.jpg','https://thumbs2.imgbox.com/cd/81/xkqjSq5v_t.jpg','https://thumbs2.imgbox.com/42/3b/QEaJtv93_t.jpg','https://thumbs2.imgbox.com/16/97/PWyGUg3o_t.jpg','https://thumbs2.imgbox.com/41/d4/ilWf1Kcg_t.jpg','https://thumbs2.imgbox.com/c4/fe/qzILtgxS_t.jpg','https://thumbs2.imgbox.com/b4/31/nAMUcGJQ_t.jpg','https://thumbs2.imgbox.com/86/d4/ehyXHRyL_t.jpg','https://thumbs2.imgbox.com/a6/5e/JqpBZMzj_t.jpg','https://thumbs2.imgbox.com/06/9f/WJogxzg1_t.jpg','https://thumbs2.imgbox.com/1e/fc/hydAONAn_t.jpg','https://thumbs2.imgbox.com/cd/52/BMdEneDS_t.jpg','https://thumbs2.imgbox.com/91/78/4rcFaG8z_t.jpg']
let kime2 = kime[Math.floor(Math.random() * kime.length)]
kimetsu = await getBuffer(kime2)
const kidecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const kifrase = kidecir[Math.floor(Math.random() * kidecir.length)]
cnf.sendMessage(from, kimetsu, image, { caption: kifrase, quoted: mek })
addFilter(from)
break
					
case prefix+'cosplay':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
const cosp1 =['https://thumbs2.imgbox.com/47/eb/6SE3t6Gt_t.jpg','https://thumbs2.imgbox.com/27/14/92WQYzYH_t.jpg','https://thumbs2.imgbox.com/7f/58/WB2lgbKV_t.jpg','https://thumbs2.imgbox.com/eb/54/8XgiGkJc_t.jpg','https://thumbs2.imgbox.com/c4/64/gM3Qsx7y_t.jpg','https://thumbs2.imgbox.com/05/d0/Zghdcivb_t.jpg','https://thumbs2.imgbox.com/e5/f2/t9A0TNcY_t.jpg','https://thumbs2.imgbox.com/71/92/uVYBmHfN_t.jpg','https://thumbs2.imgbox.com/3a/ec/v2UfCT4N_t.jpg','https://thumbs2.imgbox.com/b5/a2/tVHmhf0L_t.jpg','https://thumbs2.imgbox.com/ef/68/63S7lr2g_t.jpg','https://thumbs2.imgbox.com/85/10/DvwcMIYT_t.jpg','https://thumbs2.imgbox.com/a6/bc/AbmsvcLJ_t.jpg','https://thumbs2.imgbox.com/c9/ee/rFBQ9YJb_t.jpg','https://thumbs2.imgbox.com/b6/bb/dEcJSAE4_t.jpg','https://thumbs2.imgbox.com/7d/c9/wXnoqwPX_t.jpg','https://thumbs2.imgbox.com/d2/04/xZJyJwlu_t.jpg','https://thumbs2.imgbox.com/7d/60/rZzNs75k_t.jpg','https://thumbs2.imgbox.com/39/83/dqgDvVpL_t.jpg','https://thumbs2.imgbox.com/c3/bb/yhQTLpVi_t.jpg','https://thumbs2.imgbox.com/ec/c5/wGg3l6Gn_t.jpg','https://thumbs2.imgbox.com/f1/7d/J9tLq8ro_t.jpg','https://thumbs2.imgbox.com/61/9f/fSvteeKU_t.jpg','https://thumbs2.imgbox.com/4b/b3/kSErOktk_t.jpg','https://thumbs2.imgbox.com/e9/e1/tQmSDS5F_t.jpg','https://thumbs2.imgbox.com/74/d5/9ufC9HFD_t.jpg','https://thumbs2.imgbox.com/70/34/LLtA7IsD_t.jpg','https://thumbs2.imgbox.com/aa/4d/DD4bkdEz_t.jpg','https://thumbs2.imgbox.com/e4/c6/cGL5Gjy9_t.jpg','https://thumbs2.imgbox.com/33/32/ZKE7Imr6_t.jpg','https://thumbs2.imgbox.com/13/17/G5aUR82M_t.jpg','https://thumbs2.imgbox.com/5e/de/g834eSt1_t.jpg','https://thumbs2.imgbox.com/cc/bb/kG0MvPZg_t.jpg','https://thumbs2.imgbox.com/44/93/GDzWdgwM_t.jpg','https://thumbs2.imgbox.com/e9/9f/4gpCUuX0_t.jpg','https://thumbs2.imgbox.com/39/c5/RyB5psqM_t.jpg','https://thumbs2.imgbox.com/65/a2/mmW2jpXy_t.jpg','https://thumbs2.imgbox.com/93/5c/tEAalxaM_t.jpg','https://thumbs2.imgbox.com/73/c9/TS0ph19G_t.jpg','https://thumbs2.imgbox.com/0c/0d/Owu31Bjk_t.jpg','https://thumbs2.imgbox.com/33/fc/dsfLRTWX_t.jpg','https://thumbs2.imgbox.com/d5/ad/EUdzx4uX_t.jpg','https://thumbs2.imgbox.com/4f/46/a7Ebpeis_t.jpg','https://thumbs2.imgbox.com/6d/b3/PEHXfY21_t.jpg','https://thumbs2.imgbox.com/25/aa/q2JWUKen_t.jpg','https://thumbs2.imgbox.com/f7/1e/zZb1D27O_t.jpg','https://thumbs2.imgbox.com/ef/78/JimUB71o_t.jpg','https://thumbs2.imgbox.com/a4/44/agXvAems_t.jpg','https://thumbs2.imgbox.com/43/a2/sUymyLv3_t.jpg','https://thumbs2.imgbox.com/d0/b0/rC1VCxNi_t.jpg','https://thumbs2.imgbox.com/04/a9/UcgEOF5C_t.jpg','https://thumbs2.imgbox.com/35/39/jpn5qt8T_t.jpg','https://thumbs2.imgbox.com/29/1a/9KwJVEuV_t.jpg','https://thumbs2.imgbox.com/99/78/0HioJocE_t.jpg','https://thumbs2.imgbox.com/a1/88/zOwXW8cV_t.jpg','https://thumbs2.imgbox.com/b7/99/Lhu8AnXs_t.jpg','https://thumbs2.imgbox.com/68/5c/AcohPfBo_t.jpg','https://thumbs2.imgbox.com/8f/d8/3kfFhKVK_t.jpg','https://thumbs2.imgbox.com/e5/f2/dgHXoVCa_t.jpg','https://thumbs2.imgbox.com/6e/99/3TNc3YqQ_t.jpg','https://thumbs2.imgbox.com/67/31/0RljxpLQ_t.jpg','https://thumbs2.imgbox.com/71/15/TpP4I9pr_t.jpg','https://thumbs2.imgbox.com/99/f6/SIcoJG70_t.jpg','https://thumbs2.imgbox.com/6f/23/Ym0sfFCP_t.jpg','https://thumbs2.imgbox.com/7f/cf/OM0l8Ris_t.jpg','https://thumbs2.imgbox.com/5d/82/k3dLENzb_t.jpg','https://thumbs2.imgbox.com/b3/0e/JNCN8vvn_t.jpg','https://thumbs2.imgbox.com/e2/ea/DW8PfkvH_t.jpg','https://thumbs2.imgbox.com/73/e3/HF1vhF9d_t.jpg','https://thumbs2.imgbox.com/ae/5d/9mKF6792_t.jpg','https://thumbs2.imgbox.com/da/1d/4gHbjgwY_t.jpg','https://thumbs2.imgbox.com/90/3c/LUFvN7p2_t.jpg','https://thumbs2.imgbox.com/57/af/a3uomKIL_t.jpg','https://thumbs2.imgbox.com/05/4f/XnLdYusC_t.jpg','https://thumbs2.imgbox.com/a0/71/63wKJz1w_t.jpg','https://thumbs2.imgbox.com/66/d0/0zEsIQl6_t.jpg','https://thumbs2.imgbox.com/fb/0d/1RRRyOCL_t.jpg','https://thumbs2.imgbox.com/84/2f/KI8hPy4I_t.jpg','https://thumbs2.imgbox.com/24/0d/b6CYTY3m_t.jpg','https://thumbs2.imgbox.com/f7/73/3yrncEZL_t.jpg','https://thumbs2.imgbox.com/8b/aa/VAAVUTAx_t.jpg','https://thumbs2.imgbox.com/3e/b9/cKkYyqB3_t.jpg','https://thumbs2.imgbox.com/df/71/ZTy18HPc_t.jpg','https://thumbs2.imgbox.com/4d/79/9cNgRjrE_t.jpg','https://thumbs2.imgbox.com/d3/15/VfLqmEOX_t.jpg','https://thumbs2.imgbox.com/f3/f5/0dg3ipBU_t.jpg','https://thumbs2.imgbox.com/2f/f0/SjyDlSqH_t.jpg','https://thumbs2.imgbox.com/7b/75/QgdzRWqs_t.jpg','https://thumbs2.imgbox.com/08/f4/a1keC1qp_t.jpg','https://thumbs2.imgbox.com/e2/0e/EbDLk2UE_t.jpg','https://thumbs2.imgbox.com/24/a3/X3KD7rfp_t.jpg','https://thumbs2.imgbox.com/c5/af/TauKvdhi_t.jpg','https://thumbs2.imgbox.com/8c/e7/UeVejTZl_t.jpg','https://thumbs2.imgbox.com/f0/4d/LysNkNvC_t.jpg','https://thumbs2.imgbox.com/8a/01/pk988jzR_t.jpg','https://thumbs2.imgbox.com/1a/d4/eyTOya0I_t.jpg','https://thumbs2.imgbox.com/ee/96/ISu1K2s6_t.jpg','https://thumbs2.imgbox.com/d4/cf/S7amh4in_t.jpg','https://thumbs2.imgbox.com/87/56/l3iAvSAI_t.jpg','https://thumbs2.imgbox.com/e5/3c/BkDaFlry_t.jpg','https://thumbs2.imgbox.com/25/b6/9zcTsnkZ_t.jpg','https://thumbs2.imgbox.com/5d/00/5NCZfPkJ_t.jpg','https://thumbs2.imgbox.com/70/14/AxW86fnp_t.jpg','https://thumbs2.imgbox.com/d1/d6/ashSNbxv_t.jpg','https://thumbs2.imgbox.com/0b/7a/BKuyPGDI_t.jpg','https://thumbs2.imgbox.com/10/7a/FXRoqCiG_t.jpg','https://thumbs2.imgbox.com/5f/e1/CviVI3f6_t.jpg','https://thumbs2.imgbox.com/0c/18/GtbMIGiV_t.jpg','https://thumbs2.imgbox.com/38/ce/gYZjhK5e_t.jpg','https://thumbs2.imgbox.com/4f/5e/ZBFIBoUW_t.jpg','https://thumbs2.imgbox.com/10/23/Cr1NWTXi_t.jpg','https://thumbs2.imgbox.com/cd/9a/nRIg5ry0_t.jpg','https://thumbs2.imgbox.com/f3/fc/T8ei1FEo_t.jpg','https://thumbs2.imgbox.com/68/e4/ullLu7t5_t.jpg','https://thumbs2.imgbox.com/53/67/qEkvtWP5_t.jpg','https://thumbs2.imgbox.com/38/a5/5GWSUBi8_t.jpg','https://thumbs2.imgbox.com/46/28/0lRvrrMk_t.jpg','https://thumbs2.imgbox.com/ee/05/oKcxjzUO_t.jpg','https://thumbs2.imgbox.com/f9/89/45Br4uyh_t.jpg','https://thumbs2.imgbox.com/4a/ed/71bpqTao_t.jpg','https://thumbs2.imgbox.com/c6/49/Bx0glpd4_t.jpg','https://thumbs2.imgbox.com/91/ac/mxMjZ4sp_t.jpg','https://thumbs2.imgbox.com/80/94/fuATHyUY_t.jpg','https://thumbs2.imgbox.com/ed/00/mcdWypTh_t.jpg','https://thumbs2.imgbox.com/9a/16/koxIF7jv_t.jpg','https://thumbs2.imgbox.com/59/0a/btlWX5fd_t.jpg','https://thumbs2.imgbox.com/9f/57/12lo03Es_t.jpg','https://thumbs2.imgbox.com/85/64/zpqWgwPG_t.jpg','https://thumbs2.imgbox.com/2a/69/lcorFbDO_t.jpg','https://thumbs2.imgbox.com/24/21/6SY8TjMx_t.jpg','https://thumbs2.imgbox.com/11/bb/M6PPfs4n_t.jpg','https://thumbs2.imgbox.com/54/f3/NevW1z4s_t.jpg','https://thumbs2.imgbox.com/d4/62/1dQMKkbw_t.jpg','https://thumbs2.imgbox.com/2b/f6/Zq8iUBvb_t.jpg','https://thumbs2.imgbox.com/5e/48/SsMOoAvt_t.jpg','https://thumbs2.imgbox.com/e0/96/KtqVNlY2_t.jpg','https://thumbs2.imgbox.com/ee/30/m637BksW_t.jpg','https://thumbs2.imgbox.com/f5/8d/TsxC5R1G_t.jpg','https://thumbs2.imgbox.com/82/02/ORnfiUXN_t.jpg','https://thumbs2.imgbox.com/97/dd/effLm90g_t.jpg','https://thumbs2.imgbox.com/40/aa/UKQQ6bzb_t.jpg','https://thumbs2.imgbox.com/6b/c9/xOrQQm47_t.jpg','https://thumbs2.imgbox.com/4b/9b/zQ4vi09I_t.jpg','https://thumbs2.imgbox.com/4a/52/beGOlotx_t.jpg','https://thumbs2.imgbox.com/26/ae/17BvhNWg_t.jpg','https://thumbs2.imgbox.com/a0/58/nPnwN6ik_t.jpg','https://thumbs2.imgbox.com/84/50/Z2QqkBvC_t.jpg','https://thumbs2.imgbox.com/4e/0d/zNWobejQ_t.jpg','https://thumbs2.imgbox.com/37/6e/lK6JYPDH_t.jpg','https://thumbs2.imgbox.com/e2/0d/2OxnNDcM_t.jpg','https://thumbs2.imgbox.com/f0/a1/gmytRG40_t.jpg','https://thumbs2.imgbox.com/a4/b3/LKDgR9Ok_t.jpg','https://thumbs2.imgbox.com/b0/cd/nyq5ftSI_t.jpg','https://thumbs2.imgbox.com/b2/65/dpNtwx73_t.jpg','https://thumbs2.imgbox.com/e6/69/RxKKlyYu_t.jpg','https://thumbs2.imgbox.com/e3/7b/R1wo4HJc_t.jpg','https://thumbs2.imgbox.com/a5/e1/kEJEc6MM_t.jpg','https://thumbs2.imgbox.com/aa/b1/IGMDTQ27_t.jpg','https://thumbs2.imgbox.com/ab/e1/3wtNPqgE_t.jpg','https://thumbs2.imgbox.com/8b/93/yf11HK6q_t.jpg','https://thumbs2.imgbox.com/aa/bb/jUTEEW30_t.jpg','https://thumbs2.imgbox.com/41/74/7brHx0Di_t.jpg','https://thumbs2.imgbox.com/74/34/XYmf77a3_t.jpg','https://thumbs2.imgbox.com/cb/fc/pxvZwzx1_t.jpg','https://thumbs2.imgbox.com/39/fa/bpwub5iX_t.jpg','https://thumbs2.imgbox.com/c3/fb/NHIQjBVW_t.jpg','https://thumbs2.imgbox.com/a9/3b/s1LotT9m_t.jpg','https://thumbs2.imgbox.com/5c/0d/QVZjvTKC_t.jpg','https://thumbs2.imgbox.com/08/c6/3FyvAoMa_t.jpg','https://thumbs2.imgbox.com/4e/6d/4GQuS7ir_t.jpg','https://thumbs2.imgbox.com/70/4f/lWqo8p7Z_t.jpg','https://thumbs2.imgbox.com/6b/a3/A51Srcwq_t.jpg','https://thumbs2.imgbox.com/ae/0c/5kei2ipL_t.jpg','https://thumbs2.imgbox.com/2f/c4/T76WxmVW_t.jpg','https://thumbs2.imgbox.com/12/1b/CNwozC5U_t.jpg','https://thumbs2.imgbox.com/99/72/5FQz1mJ4_t.jpg','https://thumbs2.imgbox.com/17/69/hHHKauG7_t.jpg','https://thumbs2.imgbox.com/24/c9/4KeecCt4_t.jpg','https://thumbs2.imgbox.com/e3/fa/ol2Whk2r_t.jpg','https://thumbs2.imgbox.com/42/01/8AGJp1Gv_t.jpg','https://thumbs2.imgbox.com/c5/63/SdAmdU84_t.jpg','https://thumbs2.imgbox.com/63/42/JrVR2ljw_t.jpg','https://thumbs2.imgbox.com/16/38/VhBjddnm_t.jpg','https://thumbs2.imgbox.com/12/ea/l3PPdARs_t.jpg','https://thumbs2.imgbox.com/0b/41/ksohvJOT_t.jpg','https://thumbs2.imgbox.com/3d/4b/H6rHjlDI_t.jpg','https://thumbs2.imgbox.com/f1/bb/m7O0quiy_t.jpg','https://thumbs2.imgbox.com/87/bf/oc1Casme_t.jpg','https://thumbs2.imgbox.com/63/ed/A2NZHdjr_t.jpg','https://thumbs2.imgbox.com/3d/09/2G4p8Rqv_t.jpg','https://thumbs2.imgbox.com/c6/2b/3Jof8kgR_t.jpg','https://thumbs2.imgbox.com/6e/2d/Zh3OWxHN_t.jpg','https://thumbs2.imgbox.com/fa/bf/9KYXTp2V_t.jpg','https://thumbs2.imgbox.com/80/52/N7lY20a0_t.jpg','https://thumbs2.imgbox.com/fe/f2/3J8kCJqt_t.jpg','https://thumbs2.imgbox.com/bf/7d/SLUT2CYH_t.jpg','https://thumbs2.imgbox.com/07/e7/wdEwghzK_t.jpg','https://thumbs2.imgbox.com/e5/51/gvFEhzez_t.jpg','https://thumbs2.imgbox.com/aa/2c/RNfp41E4_t.jpg',
	      'https://thumbs2.imgbox.com/fd/9c/bq3ji85a_t.jpg','https://thumbs2.imgbox.com/c7/e9/lxorJn1O_t.jpg','https://thumbs2.imgbox.com/fe/12/DCmA27Zg_t.jpg','https://thumbs2.imgbox.com/e2/c4/QnjJwuPw_t.jpg','https://thumbs2.imgbox.com/34/85/QWSu5rD3_t.jpg','https://thumbs2.imgbox.com/82/f8/GWNrT6xD_t.jpg','https://thumbs2.imgbox.com/82/f5/OXMt8LAH_t.jpg','https://thumbs2.imgbox.com/53/d0/aNUYh8r1_t.jpg','https://thumbs2.imgbox.com/37/fc/GTkXI3SW_t.jpg','https://thumbs2.imgbox.com/f8/3c/5p2cWsjV_t.jpg','https://thumbs2.imgbox.com/a8/1d/uqfiVTHE_t.jpg','https://thumbs2.imgbox.com/91/dc/ciaPOa2M_t.jpg','https://thumbs2.imgbox.com/a3/49/r8dPNUwZ_t.jpg','https://thumbs2.imgbox.com/31/5b/ZNInJSq5_t.jpg','https://thumbs2.imgbox.com/8e/fe/MJVcZxhJ_t.jpg','https://thumbs2.imgbox.com/e1/2d/kJ5sE4Sf_t.jpg','https://thumbs2.imgbox.com/ef/6c/eTZOwicK_t.jpg','https://thumbs2.imgbox.com/b5/0f/QG0NymGT_t.jpg','https://thumbs2.imgbox.com/e9/83/zmtyoMJZ_t.jpg','https://thumbs2.imgbox.com/82/96/c91WNav6_t.jpg','https://thumbs2.imgbox.com/e9/3c/OPlEBiCH_t.jpg','https://thumbs2.imgbox.com/54/e9/nvoHjjRp_t.jpg','https://thumbs2.imgbox.com/19/f0/YZEeDAop_t.jpg','https://thumbs2.imgbox.com/d6/34/mvIjHbPg_t.jpg','https://thumbs2.imgbox.com/62/c5/yw9hu6kx_t.jpg','https://thumbs2.imgbox.com/85/fd/B1f1gKmr_t.jpg','https://thumbs2.imgbox.com/cd/3d/EmvPylu1_t.jpg','https://thumbs2.imgbox.com/f6/3d/cK7lznPK_t.jpg','https://thumbs2.imgbox.com/86/f2/wFSFYdQV_t.jpg','https://thumbs2.imgbox.com/0e/64/6NQo6Tjk_t.jpg','https://thumbs2.imgbox.com/32/7e/Yezfd3rg_t.jpg','https://thumbs2.imgbox.com/67/08/LzoUeH52_t.jpg','https://thumbs2.imgbox.com/6f/c3/5gyRxK0j_t.jpg','https://thumbs2.imgbox.com/a5/70/iI6hj7uQ_t.jpg','https://thumbs2.imgbox.com/ab/fa/nPvT5g97_t.jpg','https://thumbs2.imgbox.com/33/65/izOwRbvI_t.jpg','https://thumbs2.imgbox.com/fd/07/SOoRF0r2_t.jpg','https://thumbs2.imgbox.com/2b/49/y5DyZRZc_t.jpg','https://thumbs2.imgbox.com/0f/55/kUjYHrnv_t.jpg','https://thumbs2.imgbox.com/5f/3e/fAHoLICb_t.jpg','https://thumbs2.imgbox.com/ea/2d/GiwhVBTt_t.jpg','https://thumbs2.imgbox.com/b1/f8/ouIUU0wR_t.jpg','https://thumbs2.imgbox.com/9d/38/TUDSw6rw_t.jpg','https://thumbs2.imgbox.com/a6/3c/Xv9Xwnny_t.jpg','https://thumbs2.imgbox.com/f7/e7/G519zJ6P_t.jpg','https://thumbs2.imgbox.com/7e/f4/rHzAMb1P_t.jpg','https://thumbs2.imgbox.com/1f/d4/jM9lo0WS_t.jpg','https://thumbs2.imgbox.com/00/45/jiI4Nvyy_t.jpg','https://thumbs2.imgbox.com/3a/da/a2E24HsG_t.jpg','https://thumbs2.imgbox.com/e2/e7/GdtTaX2x_t.jpg','https://thumbs2.imgbox.com/ec/6e/5TmenCYq_t.jpg','https://thumbs2.imgbox.com/62/44/nPZhfl7H_t.jpg','https://thumbs2.imgbox.com/1b/0e/opKTe9D5_t.jpg','https://thumbs2.imgbox.com/0d/dd/UR7Rcwwj_t.jpg','https://thumbs2.imgbox.com/38/2c/R9a32YpX_t.jpg','https://thumbs2.imgbox.com/fd/4d/0gckTGEF_t.jpg','https://thumbs2.imgbox.com/a5/e8/HV0zspZD_t.jpg','https://thumbs2.imgbox.com/4d/e2/H0jEky1u_t.jpg','https://thumbs2.imgbox.com/4a/e6/LZu9wins_t.jpg','https://thumbs2.imgbox.com/6c/bb/thxAq8ac_t.jpg','https://thumbs2.imgbox.com/99/96/ZS1hhPHV_t.jpg','https://thumbs2.imgbox.com/e0/c4/BFcSeQ52_t.jpg','https://thumbs2.imgbox.com/fd/fe/mcRejUv9_t.jpg','https://thumbs2.imgbox.com/a0/cc/nzOK1KSc_t.jpg','https://thumbs2.imgbox.com/c9/4d/DwRHzN7x_t.jpg','https://thumbs2.imgbox.com/2f/0b/zxdK53IP_t.jpg','https://thumbs2.imgbox.com/8d/bc/IWUpFHdH_t.jpg','https://thumbs2.imgbox.com/37/ff/7IEw0F5W_t.jpg','https://thumbs2.imgbox.com/5e/58/MxbPS7Mp_t.jpg','https://thumbs2.imgbox.com/67/1e/MPCr2pKK_t.jpg','https://thumbs2.imgbox.com/20/78/8vNaHKoR_t.jpg','https://thumbs2.imgbox.com/41/49/70LJrf6s_t.jpg','https://thumbs2.imgbox.com/37/2f/VZ9i5H3F_t.jpg','https://thumbs2.imgbox.com/79/70/fQzTgbCf_t.jpg','https://thumbs2.imgbox.com/68/71/DsGOY9IF_t.jpg','https://thumbs2.imgbox.com/f4/66/Z0nB3yK4_t.jpg','https://thumbs2.imgbox.com/aa/73/TDAtnwGQ_t.jpg','https://thumbs2.imgbox.com/92/c7/SsrGuEE3_t.jpg','https://thumbs2.imgbox.com/bc/12/4I1Jm0ue_t.jpg','https://thumbs2.imgbox.com/36/ca/qT42CxbN_t.jpg','https://thumbs2.imgbox.com/49/06/GK4yWQ52_t.jpg','https://thumbs2.imgbox.com/2a/51/3n2Xp4wF_t.jpg','https://thumbs2.imgbox.com/5f/6e/QQcqsvpM_t.jpg','https://thumbs2.imgbox.com/1d/d4/RAbems20_t.jpg','https://thumbs2.imgbox.com/c8/99/XAhunAX2_t.jpg','https://thumbs2.imgbox.com/85/17/St1QuhII_t.jpg','https://thumbs2.imgbox.com/13/50/wF1HAzmV_t.jpg','https://thumbs2.imgbox.com/e0/6c/VyPWsWfl_t.jpg','https://thumbs2.imgbox.com/1b/a2/43MXeZ4e_t.jpg','https://thumbs2.imgbox.com/d4/ba/yWxROteT_t.jpg','https://thumbs2.imgbox.com/5f/6a/8J75evEc_t.jpg','https://thumbs2.imgbox.com/22/7b/iRJIrJIf_t.jpg','https://thumbs2.imgbox.com/31/86/dp0Nk9er_t.jpg','https://thumbs2.imgbox.com/b1/95/MP1wchL9_t.jpg','https://thumbs2.imgbox.com/be/9d/wtT37h5I_t.jpg','https://thumbs2.imgbox.com/a1/75/rrWP9nLL_t.jpg','https://thumbs2.imgbox.com/2f/d1/1DgUINBj_t.jpg','https://thumbs2.imgbox.com/df/38/aCIYN6LK_t.jpg','https://thumbs2.imgbox.com/6d/57/UFPd9Rw6_t.jpg','https://thumbs2.imgbox.com/9e/18/qNZUTmUz_t.jpg','https://thumbs2.imgbox.com/3d/3f/9BPGBERU_t.jpg','https://thumbs2.imgbox.com/1f/1b/Mi9KTrOO_t.jpg','https://thumbs2.imgbox.com/7b/ff/fTyqkteH_t.jpg','https://thumbs2.imgbox.com/68/0b/Xey8nqGK_t.jpg','https://thumbs2.imgbox.com/f0/62/FiSu9xRy_t.jpg','https://thumbs2.imgbox.com/e6/b2/5DumKHeJ_t.jpg','https://thumbs2.imgbox.com/a6/35/cIb7Y7JV_t.jpg','https://thumbs2.imgbox.com/c3/a5/UVDJBwsD_t.jpg','https://thumbs2.imgbox.com/f8/57/zpQd4dCz_t.jpg','https://thumbs2.imgbox.com/65/6f/cITGECHd_t.jpg','https://thumbs2.imgbox.com/64/bb/rudTOrhl_t.jpg','https://thumbs2.imgbox.com/29/c2/yFYtLSIb_t.jpg','https://thumbs2.imgbox.com/aa/32/VpS8xCed_t.jpg','https://thumbs2.imgbox.com/04/63/jgmMtBsJ_t.jpg','https://thumbs2.imgbox.com/e0/3e/1dezZPrq_t.jpg','https://thumbs2.imgbox.com/7c/b5/q1YiHoe5_t.jpg','https://thumbs2.imgbox.com/cf/1f/C8TMwn6d_t.jpg','https://thumbs2.imgbox.com/a4/27/jKEFA8qC_t.jpg','https://thumbs2.imgbox.com/76/58/LbjUdHAk_t.jpg','https://thumbs2.imgbox.com/d0/45/ZLNEQDE2_t.jpg','https://thumbs2.imgbox.com/55/47/tRbkqwcA_t.jpg','https://thumbs2.imgbox.com/c5/f3/cHTReE53_t.jpg','https://thumbs2.imgbox.com/f9/b7/1RoWJ0An_t.jpg','https://thumbs2.imgbox.com/7d/ff/QJeMXxT2_t.jpg','https://thumbs2.imgbox.com/da/3d/Li8hJx7o_t.jpg','https://thumbs2.imgbox.com/4a/d7/GwZOpioT_t.jpg','https://thumbs2.imgbox.com/0f/65/tRbB3Zwe_t.jpg','https://thumbs2.imgbox.com/a6/cf/M02IHSFv_t.jpg','https://thumbs2.imgbox.com/6b/b3/pMaArAxQ_t.jpg','https://thumbs2.imgbox.com/b6/28/EZk2PpTp_t.jpg','https://thumbs2.imgbox.com/ef/73/oSzViy7K_t.jpg','https://thumbs2.imgbox.com/ce/57/G6KyblQq_t.jpg','https://thumbs2.imgbox.com/64/cd/HOFlParp_t.jpg','https://thumbs2.imgbox.com/2e/7f/8pGFdoIR_t.jpg','https://thumbs2.imgbox.com/24/4d/O0dWkbot_t.jpg','https://thumbs2.imgbox.com/86/df/EPvVGqm5_t.jpg','https://thumbs2.imgbox.com/bf/c6/MIp4LNN8_t.jpg','https://thumbs2.imgbox.com/ca/cb/VEu8QHDZ_t.jpg','https://thumbs2.imgbox.com/5d/39/l0eIHidi_t.jpg','https://thumbs2.imgbox.com/58/88/cLPGsNhg_t.jpg','https://thumbs2.imgbox.com/a3/40/firgExZI_t.jpg','https://thumbs2.imgbox.com/b4/20/QP5psLRK_t.jpg','https://thumbs2.imgbox.com/76/cd/6xnZEOJV_t.jpg','https://thumbs2.imgbox.com/19/af/L1LnkB7G_t.jpg','https://thumbs2.imgbox.com/84/d7/ueGsqQHu_t.jpg','https://thumbs2.imgbox.com/d8/b4/UgjXRYk1_t.jpg','https://thumbs2.imgbox.com/cf/c4/f3MZPMTU_t.jpg','https://thumbs2.imgbox.com/e0/ab/thy7M8N0_t.jpg','https://thumbs2.imgbox.com/5d/17/riUy5Dra_t.jpg','https://thumbs2.imgbox.com/ee/8c/JVQz07mR_t.jpg','https://thumbs2.imgbox.com/0f/72/7MWpozEA_t.jpg','https://thumbs2.imgbox.com/ff/a4/9A5M93CJ_t.jpg','https://thumbs2.imgbox.com/df/b7/cw66GVEc_t.jpg','https://thumbs2.imgbox.com/33/5c/NvyHm7Ig_t.jpg','https://thumbs2.imgbox.com/63/1e/LeJcbFGh_t.jpg','https://thumbs2.imgbox.com/19/93/GY4u7tC8_t.jpg','https://thumbs2.imgbox.com/0a/b9/4LbGk5nE_t.jpg','https://thumbs2.imgbox.com/ac/8e/iacAyn12_t.jpg','https://thumbs2.imgbox.com/42/2b/4O25q7Tu_t.jpg','https://thumbs2.imgbox.com/67/19/eYHrOaHD_t.jpg','https://thumbs2.imgbox.com/36/1b/KMimpl4f_t.jpg','https://thumbs2.imgbox.com/76/be/LMzk3Vnj_t.jpg','https://thumbs2.imgbox.com/2d/9c/tDvGmmNt_t.jpg','https://thumbs2.imgbox.com/1c/77/rZlgBDYD_t.jpg','https://thumbs2.imgbox.com/8e/04/rYAtLJn5_t.jpg','https://thumbs2.imgbox.com/a6/31/7BVtokHj_t.jpg','https://thumbs2.imgbox.com/27/9f/JAn0BgSr_t.jpg','https://thumbs2.imgbox.com/13/f6/BJKSnbn5_t.jpg','https://thumbs2.imgbox.com/96/34/ENReXz1a_t.jpg','https://thumbs2.imgbox.com/0b/31/a6kfXHBk_t.jpg','https://thumbs2.imgbox.com/08/02/9jx5GTo1_t.jpg','https://thumbs2.imgbox.com/d8/98/YXKp7pcF_t.jpg','https://thumbs2.imgbox.com/1a/fd/yIsvIGXV_t.jpg','https://thumbs2.imgbox.com/e8/72/q8wg0G7o_t.jpg','https://thumbs2.imgbox.com/0e/32/xVpArrqS_t.jpg','https://thumbs2.imgbox.com/7c/b6/qD6nI0P5_t.jpg','https://thumbs2.imgbox.com/aa/a3/s9PRg0m3_t.jpg','https://thumbs2.imgbox.com/ac/70/dW3U2J6Y_t.jpg','https://thumbs2.imgbox.com/68/26/phgGfzr0_t.jpg','https://thumbs2.imgbox.com/53/e6/nKjue4aQ_t.jpg','https://thumbs2.imgbox.com/8a/d2/GhESEoig_t.jpg','https://thumbs2.imgbox.com/d1/52/q5cUB2kK_t.jpg','https://thumbs2.imgbox.com/c5/1d/zEN35h1m_t.jpg','https://thumbs2.imgbox.com/38/44/GUmlKcLk_t.jpg','https://thumbs2.imgbox.com/65/8a/LZL1YyTY_t.jpg','https://thumbs2.imgbox.com/a9/aa/SXWgnRb8_t.jpg','https://thumbs2.imgbox.com/c4/b2/pmqRsBQk_t.jpg','https://thumbs2.imgbox.com/be/d4/x8YBsgPm_t.jpg','https://thumbs2.imgbox.com/fb/b5/W0wWmlo8_t.jpg','https://thumbs2.imgbox.com/ee/99/6tK3Z2xW_t.jpg','https://thumbs2.imgbox.com/53/af/CpJB0OdW_t.jpg','https://thumbs2.imgbox.com/6d/76/i3IxmFjA_t.jpg','https://thumbs2.imgbox.com/ab/0d/cYbDGFpj_t.jpg','https://thumbs2.imgbox.com/15/e6/ZVRVO6op_t.jpg','https://thumbs2.imgbox.com/1f/a6/LyfNt1gm_t.jpg','https://thumbs2.imgbox.com/c1/72/mBA1IDqF_t.jpg','https://thumbs2.imgbox.com/c7/bd/O9kdwogp_t.jpg','https://thumbs2.imgbox.com/d3/d2/ipI0p03N_t.jpg','https://thumbs2.imgbox.com/36/23/anufreBe_t.jpg',
	      'https://thumbs2.imgbox.com/d3/fd/3PvnJRen_t.jpg','https://thumbs2.imgbox.com/30/de/dAjBD7gF_t.jpg','https://thumbs2.imgbox.com/40/af/zbp1Dovw_t.jpg','https://thumbs2.imgbox.com/7c/a8/cutv9wKi_t.jpg','https://thumbs2.imgbox.com/11/8b/qV5jdWKJ_t.jpg','https://thumbs2.imgbox.com/9d/66/bTWVEhMF_t.jpg','https://thumbs2.imgbox.com/2a/a6/pAYJ8zQD_t.jpg','https://thumbs2.imgbox.com/03/cc/inlg0mlU_t.jpg','https://thumbs2.imgbox.com/d7/9d/u44YR0Dj_t.jpg','https://thumbs2.imgbox.com/ea/9d/TJd150Gt_t.jpg','https://thumbs2.imgbox.com/89/55/JMMeqbqO_t.jpg','https://thumbs2.imgbox.com/e3/95/08XWqxaK_t.jpg','https://thumbs2.imgbox.com/c6/18/eaOlQp2U_t.jpg','https://thumbs2.imgbox.com/95/0b/ZrxnmNHI_t.jpg','https://thumbs2.imgbox.com/c2/61/Qt5HKshU_t.jpg','https://thumbs2.imgbox.com/76/73/BnKRGaWp_t.jpg','https://thumbs2.imgbox.com/80/a1/BRmpgUaw_t.jpg','https://thumbs2.imgbox.com/e1/2a/WGN5cqER_t.jpg','https://thumbs2.imgbox.com/dd/31/2jMnqTNi_t.jpg','https://thumbs2.imgbox.com/3f/92/dGKMEBM5_t.jpg','https://thumbs2.imgbox.com/5f/34/saHbideu_t.jpg','https://thumbs2.imgbox.com/2b/26/ACsA0oeo_t.jpg','https://thumbs2.imgbox.com/1a/0d/DI767Z4W_t.jpg','https://thumbs2.imgbox.com/3c/d9/DHZBpSFO_t.jpg','https://thumbs2.imgbox.com/80/4f/ren77k3E_t.jpg','https://thumbs2.imgbox.com/b7/34/55hDRvaT_t.jpg','https://thumbs2.imgbox.com/30/11/O3OdAIDM_t.jpg','https://thumbs2.imgbox.com/b8/80/uGXceXjD_t.jpg','https://thumbs2.imgbox.com/f0/3a/7iMzjirj_t.jpg','https://thumbs2.imgbox.com/2d/2a/pZPaQ8Ru_t.jpg','https://thumbs2.imgbox.com/9d/f0/U6SYuc3E_t.jpg','https://thumbs2.imgbox.com/96/1b/9jHsCWVK_t.jpg','https://thumbs2.imgbox.com/b9/38/yqPVX8Jd_t.jpg','https://thumbs2.imgbox.com/b9/7f/XF0wYSDE_t.jpg','https://thumbs2.imgbox.com/37/10/hEFjGmS4_t.jpg','https://thumbs2.imgbox.com/c2/35/T590nmMe_t.jpg','https://thumbs2.imgbox.com/fa/6d/rwDtmixP_t.jpg','https://thumbs2.imgbox.com/d3/2b/bVqfUG05_t.jpg','https://thumbs2.imgbox.com/5d/d3/fdwnum0X_t.jpg','https://thumbs2.imgbox.com/63/d9/ZD5VHL69_t.jpg','https://thumbs2.imgbox.com/ed/bc/T6YBJupy_t.jpg','https://thumbs2.imgbox.com/ac/b4/RjYHg2pK_t.jpg','https://thumbs2.imgbox.com/a0/9d/l8fgt1TV_t.jpg','https://thumbs2.imgbox.com/fc/d0/bKzchSct_t.jpg','https://thumbs2.imgbox.com/5b/ca/VqwXCBcC_t.jpg','https://thumbs2.imgbox.com/77/8f/DMt0UffK_t.jpg','https://thumbs2.imgbox.com/60/45/cJE2gk3k_t.jpg','https://thumbs2.imgbox.com/24/f6/FBiXXza4_t.jpg','https://thumbs2.imgbox.com/d9/ec/tL7SDJ0m_t.jpg','https://thumbs2.imgbox.com/03/33/AHGkqgi7_t.jpg','https://thumbs2.imgbox.com/2f/cf/nM8x8uML_t.jpg','https://thumbs2.imgbox.com/2b/ae/O3BWqPcK_t.jpg','https://thumbs2.imgbox.com/be/86/7XilwZ9I_t.jpg','https://thumbs2.imgbox.com/08/4d/6E8xidA8_t.jpg','https://thumbs2.imgbox.com/cd/34/MFUIzTMj_t.jpg','https://thumbs2.imgbox.com/9d/5c/V0Va0DHs_t.jpg','https://thumbs2.imgbox.com/f7/12/2khBgGP1_t.jpg','https://thumbs2.imgbox.com/c3/db/ciHo7TNn_t.jpg','https://thumbs2.imgbox.com/a7/e5/MjVmXqui_t.jpg','https://thumbs2.imgbox.com/2b/05/QqcqvXsY_t.jpg','https://thumbs2.imgbox.com/c2/eb/YRDiCIvY_t.jpg','https://thumbs2.imgbox.com/b6/b2/S4R3YV14_t.jpg','https://thumbs2.imgbox.com/53/db/F6P4SsPM_t.jpg','https://thumbs2.imgbox.com/b3/bb/9nsmzlQZ_t.jpg','https://thumbs2.imgbox.com/2d/ea/ed7RAVkl_t.jpg','https://thumbs2.imgbox.com/15/06/BXUAm9oP_t.jpg','https://thumbs2.imgbox.com/03/9b/o5TAM80a_t.jpg','https://thumbs2.imgbox.com/49/95/7nBSgbfF_t.jpg','https://thumbs2.imgbox.com/a9/53/DGEb8kI5_t.jpg','https://thumbs2.imgbox.com/ea/4d/z2NbHQgg_t.jpg','https://thumbs2.imgbox.com/01/5d/JRNmvrsQ_t.jpg','https://thumbs2.imgbox.com/92/72/PS1T4p1O_t.jpg','https://thumbs2.imgbox.com/43/36/MAd4Fo3Z_t.jpg','https://thumbs2.imgbox.com/8a/fc/EVgBqQ4j_t.jpg','https://thumbs2.imgbox.com/18/cd/9vq57mJ4_t.jpg','https://thumbs2.imgbox.com/71/9c/tNmxPPO8_t.jpg','https://thumbs2.imgbox.com/c5/0d/ck8ID9SD_t.jpg','https://thumbs2.imgbox.com/5c/3a/6Qp5LRZw_t.jpg','https://thumbs2.imgbox.com/b7/b3/i6wqqX9I_t.jpg','https://thumbs2.imgbox.com/09/2b/52a0yH3o_t.jpg','https://thumbs2.imgbox.com/49/dc/q7yO4zzs_t.jpg','https://thumbs2.imgbox.com/92/8c/4jMI3luO_t.jpg','https://thumbs2.imgbox.com/db/ee/2kNibcO9_t.jpg','https://thumbs2.imgbox.com/25/50/ywF6Pz45_t.jpg','https://thumbs2.imgbox.com/81/07/oSQfTthv_t.jpg','https://thumbs2.imgbox.com/19/b2/Il5DnglD_t.jpg','https://thumbs2.imgbox.com/56/67/xSYtnrDW_t.jpg','https://thumbs2.imgbox.com/72/21/k9OQxOka_t.jpg','https://thumbs2.imgbox.com/69/99/Y5aaajnt_t.jpg','https://thumbs2.imgbox.com/0e/4b/RmPSQMpE_t.jpg','https://thumbs2.imgbox.com/09/c0/8K35BHbr_t.jpg','https://thumbs2.imgbox.com/c9/e7/xTbxaBaG_t.jpg','https://thumbs2.imgbox.com/bc/e1/3qE0x0hM_t.jpg','https://thumbs2.imgbox.com/25/58/EaMI0AeP_t.jpg','https://thumbs2.imgbox.com/bc/87/QAXfSzii_t.jpg','https://thumbs2.imgbox.com/bc/8a/mTXnrLNQ_t.jpg','https://thumbs2.imgbox.com/78/19/sAvJ9A1n_t.jpg','https://thumbs2.imgbox.com/04/1a/9RlOQxyE_t.jpg','https://thumbs2.imgbox.com/a6/47/oRAz0B9L_t.jpg','https://thumbs2.imgbox.com/61/31/b0F10Rca_t.jpg','https://thumbs2.imgbox.com/39/ee/wk06yqjT_t.jpg','https://thumbs2.imgbox.com/a7/96/giU5u9n3_t.jpg']
let im = cosp1[Math.floor(Math.random() * cosp1.length)]
cosplay = await getBuffer(im)
const cosdecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const cosfrase = cosdecir[Math.floor(Math.random() * cosdecir.length)]
cnf.sendMessage(from, cosplay, image, { caption: cosfrase, quoted: mek })
addFilter(from)
break
					
case prefix+'genshin':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)	  
const gen1 =['https://img.nickpic.host/q4pOJF.jpg',
'https://img.nickpic.host/q4pERM.jpg',
'https://img.nickpic.host/q4pA5P.jpg',
'https://img.nickpic.host/q4pg7D.jpg',
'https://img.nickpic.host/q4pqd5.jpg',
'https://img.nickpic.host/q4pSpq.jpg',
'https://img.nickpic.host/q4plV8.jpg',
'https://img.nickpic.host/q4pjUm.jpg',
'https://img.nickpic.host/q4pcAd.jpg',
'https://img.nickpic.host/q4pasO.jpg',
'https://img.nickpic.host/q4p6se.jpg',
'https://img.nickpic.host/q4pRSA.jpg',
'https://img.nickpic.host/q4pCUX.jpg',
'https://img.nickpic.host/q4pQfb.jpg',
'https://img.nickpic.host/q4pXpf.jpg',
'https://img.nickpic.host/q4piE6.jpg',
'https://img.nickpic.host/q4pn8p.jpg',
'https://img.nickpic.host/q4ptdY.jpg',
'https://img.nickpic.host/q4p11G.jpg',
'https://img.nickpic.host/q4p4Jz.jpg',
'https://img.nickpic.host/q4pw3c.jpg',
'https://img.nickpic.host/q4pzUW.jpg',
'https://img.nickpic.host/q4p7f1.jpg',
'https://img.nickpic.host/q4p2Lx.jpg',
'https://img.nickpic.host/q4pKvj.jpg',
'https://img.nickpic.host/q4pYEJ.jpg',
'https://img.nickpic.host/q4pH8n.jpg',
'https://img.nickpic.host/q4pNys.jpg',
'https://img.nickpic.host/q4pfS2.jpg',
'https://img.nickpic.host/q4p01Q.jpg',
'https://img.nickpic.host/q4pe3N.jpg',
'https://img.nickpic.host/q4pkXO.jpg',
'https://img.nickpic.host/q4pJ0m.jpg',
'https://img.nickpic.host/q4pPv8.jpg',
'https://img.nickpic.host/q4pTOq.jpg',
'https://img.nickpic.host/q4voFF.jpg',
'https://img.nickpic.host/q4pW8d.jpg',
'https://img.nickpic.host/q4pZyD.jpg',
'https://img.nickpic.host/q4pyc5.jpg',
'https://img.nickpic.host/q4vG1P.jpg',
'https://img.nickpic.host/q4vILM.jpg',
'https://img.nickpic.host/q4vpXe.jpg',
'https://img.nickpic.host/q4vv0X.jpg',
'https://img.nickpic.host/q4vBxb.jpg',
'https://img.nickpic.host/q4vbOf.jpg',
'https://img.nickpic.host/q4vrK6.jpg',
'https://img.nickpic.host/q4vc0W.jpg',
'https://img.nickpic.host/q4v3Gp.jpg',
'https://img.nickpic.host/q4vFcY.jpg',
'https://img.nickpic.host/q4va4A.jpg',
'https://img.nickpic.host/q4vjPG.jpg',
'https://img.nickpic.host/q4v5Fz.jpg',
'https://img.nickpic.host/q4vSic.jpg',
'https://img.nickpic.host/q4vqx1.jpg',
'https://img.nickpic.host/q4vuhj.jpg',
'https://img.nickpic.host/q4vAKJ.jpg',
'https://img.nickpic.host/q4vOGn.jpg',
'https://img.nickpic.host/q4vhgs.jpg',
'https://img.nickpic.host/q4vtBm.jpg',
'https://img.nickpic.host/q4v642.jpg',
'https://img.nickpic.host/q4vCPQ.jpg',
'https://img.nickpic.host/q4vUax.jpg',
'https://img.nickpic.host/q4vi2O.jpg',
'https://img.nickpic.host/q4vXiN.jpg',
'https://img.nickpic.host/q4vMh8.jpg',
'https://img.nickpic.host/q4vRYq.jpg',
'https://img.nickpic.host/q4v4Gd.jpg',
'https://img.nickpic.host/q4vDgD.jpg',
'https://img.nickpic.host/q4vwD5.jpg',
'https://img.nickpic.host/q4vNBX.jpg',
'https://img.nickpic.host/q4vzPP.jpg',
'https://img.nickpic.host/q4v8aM.jpg',
'https://img.nickpic.host/q4vKnF.jpg',
'https://img.nickpic.host/q4vY2e.jpg',
'https://img.nickpic.host/q4vV6b.jpg',
'https://img.nickpic.host/q4vfYf.jpg',
'https://img.nickpic.host/q4v2I6.jpg',
'https://img.nickpic.host/q4v9qp.jpg',
'https://img.nickpic.host/q4veDY.jpg',
'https://img.nickpic.host/q4vZBW.jpg',
'https://img.nickpic.host/q4vkTA.jpg',
'https://img.nickpic.host/q4vLjG.jpg',
'https://img.nickpic.host/q4vPnz.jpg',
'https://img.nickpic.host/q4vT9c.jpg',
'https://img.nickpic.host/q4vd61.jpg',
'https://img.nickpic.host/q4vyHj.jpg',
'https://img.nickpic.host/q4xIIJ.jpg',
'https://img.nickpic.host/q4xmqn.jpg',
'https://img.nickpic.host/q4xows.jpg',
'https://img.nickpic.host/q4xsbO.jpg',
'https://img.nickpic.host/q4xpT2.jpg',
'https://img.nickpic.host/q4xxjQ.jpg',
'https://img.nickpic.host/q4xb9N.jpg',
'https://img.nickpic.host/q4xBtx.jpg',
'https://img.nickpic.host/q4x3Cm.jpg',
'https://img.nickpic.host/q4xFH8.jpg',
'https://img.nickpic.host/q4xjmq.jpg',
'https://img.nickpic.host/q4xlqd.jpg',
'https://img.nickpic.host/q4x5wD.jpg',
'https://img.nickpic.host/q4xEbe.jpg',
'https://img.nickpic.host/q4xSW5.jpg',
'https://img.nickpic.host/q4xgjP.jpg',
'https://img.nickpic.host/q4xqtM.jpg',
'https://img.nickpic.host/q4xueF.jpg',
'https://img.nickpic.host/q4xOCX.jpg',
'https://img.nickpic.host/q4xhNb.jpg',
'https://img.nickpic.host/q4xQu6.jpg',
'https://img.nickpic.host/q4xCmf.jpg',
'https://img.nickpic.host/q4xUzp.jpg',
'https://img.nickpic.host/q4x4CW.jpg',
'https://img.nickpic.host/q4xXWY.jpg',
'https://img.nickpic.host/q4xnlA.jpg',
'https://img.nickpic.host/q4xtMG.jpg',
'https://img.nickpic.host/q4xMez.jpg',
'https://img.nickpic.host/q4x1rc.jpg',
'https://img.nickpic.host/q4xDN1.jpg',
'https://img.nickpic.host/q4xzoj.jpg',
'https://img.nickpic.host/q4x7uJ.jpg',
'https://img.nickpic.host/q4x8zn.jpg',
'https://img.nickpic.host/q4xKZs.jpg',
'https://img.nickpic.host/q4x2QO.jpg',
'https://img.nickpic.host/q4xHl2.jpg',
'https://img.nickpic.host/q4xNMQ.jpg',
'https://img.nickpic.host/q4xVkx.jpg',
'https://img.nickpic.host/q4x0rN.jpg',
'https://img.nickpic.host/q4x9Vm.jpg',
'https://img.nickpic.host/q4xko8.jpg',
'https://img.nickpic.host/q4xJAq.jpg',
'https://img.nickpic.host/q4xLzd.jpg',
'https://img.nickpic.host/q4BIQe.jpg',
'https://img.nickpic.host/q4xW55.jpg',
'https://img.nickpic.host/q4xPZD.jpg',
'https://img.nickpic.host/q4xZMP.jpg',
'https://img.nickpic.host/q4BGsF.jpg',
'https://img.nickpic.host/q4xdkM.jpg',
'https://img.nickpic.host/q4BmVX.jpg',
'https://img.nickpic.host/q4Bx76.jpg',
'https://img.nickpic.host/q4Bppb.jpg',
'https://img.nickpic.host/q4BvAf.jpg',
'https://img.nickpic.host/q4BBdp.jpg',
'https://img.nickpic.host/q4Basz.jpg',
'https://img.nickpic.host/q4Br5Y.jpg',
'https://img.nickpic.host/q4BsRA.jpg',
'https://img.nickpic.host/q4B3JG.jpg',
'https://img.nickpic.host/q4BjUc.jpg',
'https://img.nickpic.host/q4BlVW.jpg',
'https://img.nickpic.host/q4BcEj.jpg',
'https://img.nickpic.host/q4BSp1.jpg',
'https://img.nickpic.host/q4Bg7J.jpg',
'https://img.nickpic.host/q4B63x.jpg',
'https://img.nickpic.host/q4Bqdn.jpg',
'https://img.nickpic.host/q4BASs.jpg',
'https://img.nickpic.host/q4BER2.jpg',
'https://img.nickpic.host/q4BOJQ.jpg',
'https://img.nickpic.host/q4BCUN.jpg',
'https://img.nickpic.host/q4BXvm.jpg',
'https://img.nickpic.host/q4BQfO.jpg',
'https://img.nickpic.host/q4BiE8.jpg',
'https://img.nickpic.host/q4BRSD.jpg',
'https://img.nickpic.host/q4Bn8q.jpg',
'https://img.nickpic.host/q4B115.jpg',
'https://img.nickpic.host/q4Btdd.jpg',
'https://img.nickpic.host/q4B4JP.jpg',
'https://img.nickpic.host/q4Bw3M.jpg',
'https://img.nickpic.host/q4BzXF.jpg',
'https://img.nickpic.host/q4BH8f.jpg',
'https://img.nickpic.host/q4BKvX.jpg',
'https://img.nickpic.host/q4BYOb.jpg',
'https://img.nickpic.host/q4B7fe.jpg',
'https://img.nickpic.host/q4Bfcp.jpg',
'https://img.nickpic.host/q4BNy6.jpg',
'https://img.nickpic.host/q4B01Y.jpg',
'https://img.nickpic.host/q4B2LA.jpg',
'https://img.nickpic.host/q4BkXz.jpg',
'https://img.nickpic.host/q4BeFG.jpg',
'https://img.nickpic.host/q4BJ0c.jpg',
'https://img.nickpic.host/q4BPvW.jpg',
'https://img.nickpic.host/q4bG4s.jpg',
'https://img.nickpic.host/q4BTO1.jpg',
'https://img.nickpic.host/q4BWKj.jpg',
'https://img.nickpic.host/q4bIL2.jpg',
'https://img.nickpic.host/q4BZyJ.jpg',
'https://img.nickpic.host/q4Bycn.jpg',
'https://img.nickpic.host/q4boFQ.jpg',
'https://img.nickpic.host/q4bv0N.jpg',
'https://img.nickpic.host/q4bpix.jpg',
'https://img.nickpic.host/q4bBxO.jpg',
'https://img.nickpic.host/q4bFcd.jpg',
'https://img.nickpic.host/q4bbhm.jpg',
'https://img.nickpic.host/q4brK8.jpg',
'https://img.nickpic.host/q4b3Gq.jpg',
'https://img.nickpic.host/q4ba4D.jpg',
'https://img.nickpic.host/q4bjP5.jpg',
'https://img.nickpic.host/q4b5FP.jpg',
'https://img.nickpic.host/q4bSiM.jpg',
'https://img.nickpic.host/q4bqxe.jpg',
'https://img.nickpic.host/q4bc2F.jpg',
'https://img.nickpic.host/q4bAYb.jpg',
'https://img.nickpic.host/q4buhX.jpg',
'https://img.nickpic.host/q4bhg6.jpg',
'https://img.nickpic.host/q4b6Dp.jpg',
'https://img.nickpic.host/q4bOGf.jpg',
'https://img.nickpic.host/q4bi2z.jpg',
'https://img.nickpic.host/q4bCPY.jpg',
'https://img.nickpic.host/q4bXnG.jpg',
'https://img.nickpic.host/q4bUaA.jpg',
'https://img.nickpic.host/q4btBc.jpg',
'https://img.nickpic.host/q4bMhW.jpg',
'https://img.nickpic.host/q4b4Ij.jpg',
'https://img.nickpic.host/q4bRY1.jpg',
'https://img.nickpic.host/q4bDgJ.jpg',
'https://img.nickpic.host/q4bwDn.jpg',
'https://img.nickpic.host/q4bzTs.jpg',
'https://img.nickpic.host/q4bKnQ.jpg',
'https://img.nickpic.host/q4b8a2.jpg',
'https://img.nickpic.host/q4bfHm.jpg',
'https://img.nickpic.host/q4bY9x.jpg',
'https://img.nickpic.host/q4bNBN.jpg',
'https://img.nickpic.host/q4bV6O.jpg',
'https://img.nickpic.host/q4b9qq.jpg',
'https://img.nickpic.host/q4b2I8.jpg',
'https://img.nickpic.host/q4beDd.jpg',
'https://img.nickpic.host/q4bkTD.jpg',
'https://img.nickpic.host/q4bLj5.jpg',
'https://img.nickpic.host/q4bPnP.jpg',
'https://img.nickpic.host/q4bT9M.jpg',
'https://img.nickpic.host/q4bZbF.jpg',
'https://img.nickpic.host/q4bd6e.jpg',
'https://img.nickpic.host/q4row6.jpg',
'https://img.nickpic.host/q4byHX.jpg',
'https://img.nickpic.host/q4rmqf.jpg',
'https://img.nickpic.host/q4rImb.jpg',
'https://img.nickpic.host/q4rpWp.jpg',
'https://img.nickpic.host/q4rxjY.jpg',
'https://img.nickpic.host/q4rBtA.jpg',
'https://img.nickpic.host/q4rbeG.jpg',
'https://img.nickpic.host/q4rsbz.jpg',
'https://img.nickpic.host/q4rluj.jpg',
'https://img.nickpic.host/q4r3Cc.jpg',
'https://img.nickpic.host/q4rjm1.jpg',
'https://img.nickpic.host/q4rFHW.jpg',
'https://img.nickpic.host/q4r5wJ.jpg',
'https://img.nickpic.host/q4rgls.jpg',
'https://img.nickpic.host/q4rSWn.jpg',
'https://img.nickpic.host/q4rqt2.jpg',
'https://img.nickpic.host/q4rOCN.jpg',
'https://img.nickpic.host/q4rueQ.jpg',
'https://img.nickpic.host/q4rErx.jpg',
'https://img.nickpic.host/q4rhNO.jpg',
'https://img.nickpic.host/q4rCom.jpg',
'https://img.nickpic.host/q4rUzq.jpg',
'https://img.nickpic.host/q4rQu8.jpg',
'https://img.nickpic.host/q4rMeP.jpg',
'https://img.nickpic.host/q4r1rM.jpg',
'https://img.nickpic.host/q4rXWd.jpg',
'https://img.nickpic.host/q4rtM5.jpg',
'https://img.nickpic.host/q4rnlD.jpg',
'https://img.nickpic.host/q4r4QF.jpg',
'https://img.nickpic.host/q4rDNe.jpg',
'https://img.nickpic.host/q4r7Ab.jpg',
'https://img.nickpic.host/q4r8zf.jpg',
'https://img.nickpic.host/q4rKZ6.jpg',
'https://img.nickpic.host/q4rzoX.jpg',
'https://img.nickpic.host/q4rH5p.jpg',
'https://img.nickpic.host/q4rNMY.jpg',
'https://img.nickpic.host/q4rVkA.jpg',
'https://img.nickpic.host/q4r0sG.jpg',
'https://img.nickpic.host/q4r2Qz.jpg',
'https://img.nickpic.host/q4r9Vc.jpg',
'https://img.nickpic.host/q4rkoW.jpg',
'https://img.nickpic.host/q4rJA1.jpg',
'https://img.nickpic.host/q4rL7j.jpg',
'https://img.nickpic.host/q4rPZJ.jpg',
'https://img.nickpic.host/q4rW5n.jpg',
'https://img.nickpic.host/q4rZRs.jpg',
'https://img.nickpic.host/q4sGsQ.jpg',
'https://img.nickpic.host/q4rdk2.jpg',
'https://img.nickpic.host/q4sIUx.jpg',
'https://img.nickpic.host/q4smVN.jpg',
'https://img.nickpic.host/q4sBdq.jpg',
'https://img.nickpic.host/q4sppO.jpg',
'https://img.nickpic.host/q4sx78.jpg',
'https://img.nickpic.host/q4svEm.jpg',
'https://img.nickpic.host/q4sr5d.jpg',
'https://img.nickpic.host/q4ssRD.jpg',
'https://img.nickpic.host/q4s3J5.jpg',
'https://img.nickpic.host/q4sasP.jpg',
'https://img.nickpic.host/q4sjUM.jpg',
'https://img.nickpic.host/q4sSpe.jpg',
'https://img.nickpic.host/q4slfF.jpg',
'https://img.nickpic.host/q4sAS6.jpg',
'https://img.nickpic.host/q4scEX.jpg',
'https://img.nickpic.host/q4sg8b.jpg',
'https://img.nickpic.host/q4sqdf.jpg',
'https://img.nickpic.host/q4sOJY.jpg',
'https://img.nickpic.host/q4sE1p.jpg',
'https://img.nickpic.host/q4s63A.jpg',
'https://img.nickpic.host/q4sCXG.jpg',
'https://img.nickpic.host/q4sQfz.jpg',
'https://img.nickpic.host/q4sXvc.jpg',
'https://img.nickpic.host/q4sn81.jpg',
'https://img.nickpic.host/q4styj.jpg',
'https://img.nickpic.host/q4siEW.jpg',
'https://img.nickpic.host/q4sRSJ.jpg',
'https://img.nickpic.host/q4s11n.jpg',
'https://img.nickpic.host/q4sw32.jpg',
'https://img.nickpic.host/q4s4Ls.jpg',
'https://img.nickpic.host/q4szXQ.jpg',
'https://img.nickpic.host/q4s70x.jpg',
'https://img.nickpic.host/q4sKvN.jpg',
'https://img.nickpic.host/q4sYOO.jpg',
'https://img.nickpic.host/q4sHKm.jpg',
'https://img.nickpic.host/q4s2LD.jpg',
'https://img.nickpic.host/q4sfcq.jpg',
'https://img.nickpic.host/q4sNy8.jpg',
'https://img.nickpic.host/q4seF5.jpg',
'https://img.nickpic.host/q4s01d.jpg',
'https://img.nickpic.host/q4sJ0M.jpg',
'https://img.nickpic.host/q4skXP.jpg',
'https://img.nickpic.host/q4sPxF.jpg',
'https://img.nickpic.host/q4sTOe.jpg',
'https://img.nickpic.host/q4sdGb.jpg',
'https://img.nickpic.host/q4sWKX.jpg',
'https://img.nickpic.host/q4sycf.jpg',
'https://img.nickpic.host/q43IPp.jpg',
'https://img.nickpic.host/q43G46.jpg',
'https://img.nickpic.host/q43oFY.jpg',
'https://img.nickpic.host/q43bhc.jpg',
'https://img.nickpic.host/q43v2G.jpg',
'https://img.nickpic.host/q43piA.jpg',
'https://img.nickpic.host/q43Bxz.jpg',
'https://img.nickpic.host/q43rKW.jpg',
'https://img.nickpic.host/q43Fgj.jpg',
'https://img.nickpic.host/q433G1.jpg',
'https://img.nickpic.host/q43a4J.jpg',
'https://img.nickpic.host/q43jPn.jpg',
'https://img.nickpic.host/q435as.jpg',
'https://img.nickpic.host/q43uhN.jpg',
'https://img.nickpic.host/q43Si2.jpg',
'https://img.nickpic.host/q43qBx.jpg',
'https://img.nickpic.host/q43c2Q.jpg',
'https://img.nickpic.host/q43AYO.jpg',
'https://img.nickpic.host/q43OIm.jpg',
'https://img.nickpic.host/q43hg8.jpg',
'https://img.nickpic.host/q436Dq.jpg',
'https://img.nickpic.host/q43CPd.jpg',
'https://img.nickpic.host/q43M6F.jpg',
'https://img.nickpic.host/q43UaD.jpg',
'https://img.nickpic.host/q43RYe.jpg',
'https://img.nickpic.host/q43Xn5.jpg',
'https://img.nickpic.host/q43tBM.jpg',
'https://img.nickpic.host/q434IX.jpg',
'https://img.nickpic.host/q43Dqb.jpg',
'https://img.nickpic.host/q43wDf.jpg',
'https://img.nickpic.host/q43zT6.jpg',
'https://img.nickpic.host/q43KnY.jpg',
'https://img.nickpic.host/q438jp.jpg',
'https://img.nickpic.host/q43Y9A.jpg',
'https://img.nickpic.host/q43V6z.jpg',
'https://img.nickpic.host/q43fHc.jpg',
'https://img.nickpic.host/q43NbG.jpg',
'https://img.nickpic.host/q432IW.jpg',
'https://img.nickpic.host/q439q1.jpg',
'https://img.nickpic.host/q43ewj.jpg',
'https://img.nickpic.host/q43kTJ.jpg',
'https://img.nickpic.host/q43Ljn.jpg',
'https://img.nickpic.host/q43Pts.jpg',
'https://img.nickpic.host/q43T92.jpg',
'https://img.nickpic.host/q43dCx.jpg',
'https://img.nickpic.host/q43ZbQ.jpg',
'https://img.nickpic.host/q43yHN.jpg',
'https://img.nickpic.host/q4FImO.jpg',
'https://img.nickpic.host/q4FpWq.jpg',
'https://img.nickpic.host/q4Fmum.jpg',
'https://img.nickpic.host/q4Fow8.jpg',
'https://img.nickpic.host/q4Fxjd.jpg',
'https://img.nickpic.host/q4FBtD.jpg',
'https://img.nickpic.host/q4Fbe5.jpg',
'https://img.nickpic.host/q4FsbP.jpg',
'https://img.nickpic.host/q4F3CM.jpg',
'https://img.nickpic.host/q4Fjme.jpg',
'https://img.nickpic.host/q4FFNF.jpg',
'https://img.nickpic.host/q4FSWf.jpg',
'https://img.nickpic.host/q4F5zb.jpg',
'https://img.nickpic.host/q4FluX.jpg',
'https://img.nickpic.host/q4FqMp.jpg',
'https://img.nickpic.host/q4Fgl6.jpg',
'https://img.nickpic.host/q4FErA.jpg',
'https://img.nickpic.host/q4FueY.jpg',
'https://img.nickpic.host/q4FOQG.jpg',
'https://img.nickpic.host/q4FCoc.jpg',
'https://img.nickpic.host/q4FhNz.jpg',
'https://img.nickpic.host/q4FQuW.jpg',
'https://img.nickpic.host/q4FUz1.jpg',
'https://img.nickpic.host/q4FXZj.jpg',
'https://img.nickpic.host/q4FnlJ.jpg',
'https://img.nickpic.host/q4FMks.jpg',
'https://img.nickpic.host/q4FtMn.jpg',
'https://img.nickpic.host/q4F4QQ.jpg',
'https://img.nickpic.host/q4F1r2.jpg',
'https://img.nickpic.host/q4FDVx.jpg',
'https://img.nickpic.host/q4FzoN.jpg',
'https://img.nickpic.host/q4F7AO.jpg',
'https://img.nickpic.host/q4FKZ8.jpg',
'https://img.nickpic.host/q4F87m.jpg',
'https://img.nickpic.host/q4FH5q.jpg',
'https://img.nickpic.host/q4FNMd.jpg',
'https://img.nickpic.host/q4F0s5.jpg',
'https://img.nickpic.host/q4FVkD.jpg',
'https://img.nickpic.host/q4F2QP.jpg',
'https://img.nickpic.host/q4F9VM.jpg',
'https://img.nickpic.host/q4FPdb.jpg',
'https://img.nickpic.host/q4FJAe.jpg',
'https://img.nickpic.host/q4FkpF.jpg',
'https://img.nickpic.host/q4FL7X.jpg',
'https://img.nickpic.host/q4FW5f.jpg',
'https://img.nickpic.host/q4FdJp.jpg',
'https://img.nickpic.host/q4FZR6.jpg',
'https://img.nickpic.host/q4aIUA.jpg',
'https://img.nickpic.host/q4aGsY.jpg',
'https://img.nickpic.host/q4avEc.jpg',
'https://img.nickpic.host/q4amfG.jpg',
'https://img.nickpic.host/q4appz.jpg',
'https://img.nickpic.host/q4ax7W.jpg',
'https://img.nickpic.host/q4arSj.jpg',
'https://img.nickpic.host/q4asRJ.jpg',
'https://img.nickpic.host/q4aBd1.jpg',
'https://img.nickpic.host/q4a3Jn.jpg',
'https://img.nickpic.host/q4aa3s.jpg',
'https://img.nickpic.host/q4ajU2.jpg',
'https://img.nickpic.host/q4alfQ.jpg',
'https://img.nickpic.host/q4acEN.jpg',
'https://img.nickpic.host/q4aE1q.jpg',
'https://img.nickpic.host/q4aqym.jpg',
'https://img.nickpic.host/q4aAS8.jpg',
'https://img.nickpic.host/q4aOJd.jpg',
'https://img.nickpic.host/q4aCX5.jpg',
'https://img.nickpic.host/q4a63D.jpg',
'https://img.nickpic.host/q4aQfP.jpg',
'https://img.nickpic.host/q4aXvM.jpg',
'https://img.nickpic.host/q4an8e.jpg',
'https://img.nickpic.host/q4aiOF.jpg',
'https://img.nickpic.host/q4atyX.jpg',
'https://img.nickpic.host/q4a11f.jpg',
'https://img.nickpic.host/q4aRcb.jpg',
'https://img.nickpic.host/q4a4L6.jpg',
'https://img.nickpic.host/q4awFp.jpg',
'https://img.nickpic.host/q4azXY.jpg',
'https://img.nickpic.host/q4aYOz.jpg',
'https://img.nickpic.host/q4a70A.jpg',
'https://img.nickpic.host/q4aKxG.jpg',
'https://img.nickpic.host/q4aHKc.jpg',
'https://img.nickpic.host/q4afc1.jpg',
'https://img.nickpic.host/q4a04j.jpg',
'https://img.nickpic.host/q4aNyW.jpg',
'https://img.nickpic.host/q4a2LJ.jpg',
'https://img.nickpic.host/q4aeFn.jpg',
'https://img.nickpic.host/q4akis.jpg',
'https://img.nickpic.host/q4aJ02.jpg',
'https://img.nickpic.host/q4aWKN.jpg',
'https://img.nickpic.host/q4aThx.jpg',
'https://img.nickpic.host/q4aPxQ.jpg',
'https://img.nickpic.host/q4adGO.jpg',
'https://img.nickpic.host/q4jG48.jpg',
'https://img.nickpic.host/q4aygm.jpg',
'https://img.nickpic.host/q4jIPq.jpg',
'https://img.nickpic.host/q4joFd.jpg',
'https://img.nickpic.host/q4jpiD.jpg',
'https://img.nickpic.host/q4jBxP.jpg',
'https://img.nickpic.host/q4jv25.jpg',
'https://img.nickpic.host/q4jbhM.jpg',
'https://img.nickpic.host/q4jrYF.jpg',
'https://img.nickpic.host/q4jFgX.jpg',
'https://img.nickpic.host/q4jaDb.jpg',
'https://img.nickpic.host/q4j3Ge.jpg',
'https://img.nickpic.host/q4jjPf.jpg',
'https://img.nickpic.host/q4j5a6.jpg',
'https://img.nickpic.host/q4jSnp.jpg',
'https://img.nickpic.host/q4jc2Y.jpg',
'https://img.nickpic.host/q4jqBA.jpg',
'https://img.nickpic.host/q4ju6G.jpg',
'https://img.nickpic.host/q4jAYz.jpg',
'https://img.nickpic.host/q4jOIc.jpg',
'https://img.nickpic.host/q4j6D1.jpg',
'https://img.nickpic.host/q4jhgW.jpg',
'https://img.nickpic.host/q4jCTj.jpg',
'https://img.nickpic.host/q4jUaJ.jpg',
'https://img.nickpic.host/q4jXnn.jpg',
'https://img.nickpic.host/q4ji9s.jpg',
'https://img.nickpic.host/q4jtB2.jpg',
'https://img.nickpic.host/q4jRHx.jpg',
'https://img.nickpic.host/q4jM6Q.jpg',
'https://img.nickpic.host/q4j4IN.jpg',
'https://img.nickpic.host/q4jDqO.jpg',
'https://img.nickpic.host/q4jwwm.jpg',
'https://img.nickpic.host/q4j8jq.jpg',
'https://img.nickpic.host/q4jzT8.jpg',
'https://img.nickpic.host/q4jKnd.jpg',
'https://img.nickpic.host/q4jY9D.jpg',
'https://img.nickpic.host/q4jNb5.jpg',
'https://img.nickpic.host/q4jV6P.jpg',
'https://img.nickpic.host/q4jfHM.jpg',
'https://img.nickpic.host/q4j2mF.jpg',
'https://img.nickpic.host/q4j9qe.jpg',
'https://img.nickpic.host/q4jewX.jpg',
'https://img.nickpic.host/q4jLjf.jpg',
'https://img.nickpic.host/q4jkWb.jpg',
'https://img.nickpic.host/q4jPt6.jpg',
'https://img.nickpic.host/q4jTep.jpg',
'https://img.nickpic.host/q4jZbY.jpg',
'https://img.nickpic.host/q4jyNG.jpg',
'https://img.nickpic.host/q4jdCA.jpg',
'https://img.nickpic.host/q4lImz.jpg',
'https://img.nickpic.host/q4lmuc.jpg',
'https://img.nickpic.host/q4lpW1.jpg',
'https://img.nickpic.host/q4lxlj.jpg',
'https://img.nickpic.host/q4lowW.jpg',
'https://img.nickpic.host/q4lBtJ.jpg',
'https://img.nickpic.host/q4lben.jpg',
'https://img.nickpic.host/q4lsrs.jpg',
'https://img.nickpic.host/q4l3C2.jpg',
'https://img.nickpic.host/q4lFNQ.jpg',
'https://img.nickpic.host/q4ljox.jpg',
'https://img.nickpic.host/q4lluN.jpg',
'https://img.nickpic.host/q4l5zO.jpg',
'https://img.nickpic.host/q4lSZm.jpg',
'https://img.nickpic.host/q4lgl8.jpg',
'https://img.nickpic.host/q4lqMq.jpg',
'https://img.nickpic.host/q4lued.jpg',
'https://img.nickpic.host/q4lErD.jpg',
'https://img.nickpic.host/q4lOQ5.jpg',
'https://img.nickpic.host/q4lhNP.jpg',
'https://img.nickpic.host/q4lCoM.jpg',
'https://img.nickpic.host/q4lQAF.jpg',
'https://img.nickpic.host/q4lUze.jpg',
'https://img.nickpic.host/q4lXZX.jpg',
'https://img.nickpic.host/q4ln5b.jpg',
'https://img.nickpic.host/q4ltMf.jpg',
'https://img.nickpic.host/q4lMk6.jpg',
'https://img.nickpic.host/q4l1sp.jpg',
'https://img.nickpic.host/q4l4QY.jpg',
'https://img.nickpic.host/q4lDVA.jpg',
'https://img.nickpic.host/q4lzpG.jpg',
'https://img.nickpic.host/q4l7Az.jpg',
'https://img.nickpic.host/q4l87c.jpg',
'https://img.nickpic.host/q4lKZW.jpg',
'https://img.nickpic.host/q4lH51.jpg',
'https://img.nickpic.host/q4lNRj.jpg',
'https://img.nickpic.host/q4lVkJ.jpg',
'https://img.nickpic.host/q4l0sn.jpg',
'https://img.nickpic.host/q4l2Us.jpg',
'https://img.nickpic.host/q4l9V2.jpg',
'https://img.nickpic.host/q4lkpQ.jpg',
'https://img.nickpic.host/q4lJEx.jpg',
'https://img.nickpic.host/q4lPdO.jpg',
'https://img.nickpic.host/q4lWSm.jpg',
'https://img.nickpic.host/q4lZR8.jpg',
'https://img.nickpic.host/q4ldJq.jpg',
'https://img.nickpic.host/q45Gsd.jpg',
'https://img.nickpic.host/q45ppP.jpg',
'https://img.nickpic.host/q45IUD.jpg',
'https://img.nickpic.host/q45mf5.jpg',
'https://img.nickpic.host/q45vEM.jpg',
'https://img.nickpic.host/q45x8F.jpg',
'https://img.nickpic.host/q45Bde.jpg',
'https://img.nickpic.host/q45rSX.jpg',
'https://img.nickpic.host/q45s1b.jpg',
'https://img.nickpic.host/q453Jf.jpg',
'https://img.nickpic.host/q45a36.jpg',
'https://img.nickpic.host/q45jXp.jpg',
'https://img.nickpic.host/q45cOG.jpg',
'https://img.nickpic.host/q45lfY.jpg',
'https://img.nickpic.host/q45SvA.jpg',
'https://img.nickpic.host/q45g8z.jpg',
'https://img.nickpic.host/q45qyc.jpg',
'https://img.nickpic.host/q45E11.jpg',
'https://img.nickpic.host/q45ASW.jpg',
'https://img.nickpic.host/q45OLj.jpg',
'https://img.nickpic.host/q4563J.jpg',
'https://img.nickpic.host/q45Xv2.jpg',
'https://img.nickpic.host/q45Q0s.jpg',
'https://img.nickpic.host/q45CXn.jpg',
'https://img.nickpic.host/q45nKx.jpg',
'https://img.nickpic.host/q45iOQ.jpg',
'https://img.nickpic.host/q45tyN.jpg',
'https://img.nickpic.host/q45RcO.jpg',
'https://img.nickpic.host/q454L8.jpg',
'https://img.nickpic.host/q4514m.jpg',
'https://img.nickpic.host/q4570D.jpg',
'https://img.nickpic.host/q45zXd.jpg',
'https://img.nickpic.host/q45wFq.jpg',
'https://img.nickpic.host/q45VGF.jpg',
'https://img.nickpic.host/q45Kx5.jpg',
'https://img.nickpic.host/q45HKM.jpg',
'https://img.nickpic.host/q45YOP.jpg',
'https://img.nickpic.host/q45fce.jpg',
'https://img.nickpic.host/q452Pb.jpg',
'https://img.nickpic.host/q4504X.jpg',
'https://img.nickpic.host/q45eFf.jpg',
'https://img.nickpic.host/q45ki6.jpg',
'https://img.nickpic.host/q45J2p.jpg',
'https://img.nickpic.host/q45ThA.jpg',
'https://img.nickpic.host/q45PxY.jpg',
'https://img.nickpic.host/q45dGz.jpg',
'https://img.nickpic.host/q45WYG.jpg',
'https://img.nickpic.host/q45ygc.jpg',
'https://img.nickpic.host/q4SIP1.jpg',
'https://img.nickpic.host/q4SG4W.jpg',
'https://img.nickpic.host/q4Soaj.jpg',
'https://img.nickpic.host/q4SpiJ.jpg']
let imp = gen1[Math.floor(Math.random() * gen1.length)]
genshin = await getBuffer(imp)
const gedecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const gefrase = gedecir[Math.floor(Math.random() * gedecir.length)]
cnf.sendMessage(from, genshin, image, { caption: gefrase, quoted: mek })
addFilter(from)
break
					
case prefix+'hinata':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)	  
const hioi =['https://i.ibb.co/9rCvP8r/17.jpg','https://i.ibb.co/fdfHsvC/16.jpg','https://i.ibb.co/yqVzKwz/15.jpg','https://i.ibb.co/nsYzNVY/37.jpg','https://i.ibb.co/1qBSX68/14.jpg','https://i.ibb.co/x23ZS3m/36.jpg','https://i.ibb.co/9YW7H64/38.jpg','https://i.ibb.co/R6X2jFN/2.jpg','https://i.ibb.co/vkXYxQB/24.jpg','https://i.ibb.co/H4Vyy7m/1.jpg','https://i.ibb.co/KWh45C6/23.jpg','https://i.ibb.co/LS3MHDR/22.jpg','https://i.ibb.co/KVVwvkR/21.jpg','https://i.ibb.co/3Bsc4WB/20.jpg','https://i.ibb.co/87T9WSz/19.jpg','https://i.ibb.co/smpVwmM/18.jpg','https://i.ibb.co/s2f15XK/40.jpg','https://i.ibb.co/tBVm0g0/39.jpg','https://i.ibb.co/t8BTdYz/7.jpg','https://i.ibb.co/3RZfKrc/6.jpg','https://i.ibb.co/nR6RgQm/5.jpg','https://i.ibb.co/Tw184KP/27.jpg','https://i.ibb.co/Y04L6YH/4.jpg','https://i.ibb.co/6DjvwQj/26.jpg','https://i.ibb.co/t4jCPqS/3.jpg','https://i.ibb.co/WyD7LrT/25.jpg','https://i.ibb.co/B3S6Vwq/13.jpg','https://i.ibb.co/r0rkhhZ/35.jpg','https://i.ibb.co/bmCkXqm/12.jpg','https://i.ibb.co/ZJjJMPj/34.jpg','https://i.ibb.co/LQG8jrP/11.jpg','https://i.ibb.co/f9yGMFj/33.jpg','https://i.ibb.co/25Mftyb/10.jpg','https://i.ibb.co/C2vG2HJ/32.jpg','https://i.ibb.co/BVRFVwy/9.jpg','https://i.ibb.co/1ZXw3gY/31.jpg','https://i.ibb.co/7S0Tnht/8.jpg','https://i.ibb.co/GC1zzxh/30.jpg','https://i.ibb.co/80JkbbD/29.jpg','https://i.ibb.co/G5qKBmR/28.jpg']
let na = hioi[Math.floor(Math.random() * hioi.length)]
ta = await getBuffer(na)
const hidecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const hifrase = hidecir[Math.floor(Math.random() * hidecir.length)]
cnf.sendMessage(from, ta, image, { caption: hifrase, quoted: mek })
addFilter(from)
break
					
case prefix+'naruto':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const naru =['https://img.nickpic.host/q4Si96.jpg',
'https://img.nickpic.host/q4SXnf.jpg',
'https://img.nickpic.host/q4SUjb.jpg',
'https://img.nickpic.host/q4SCTX.jpg',
'https://img.nickpic.host/q4S6De.jpg',
'https://img.nickpic.host/q4ShqF.jpg',
'https://img.nickpic.host/q4SOIM.jpg',
'https://img.nickpic.host/q4Su65.jpg',
'https://img.nickpic.host/q4SAYP.jpg',
'https://img.nickpic.host/q4SqBD.jpg',
'https://img.nickpic.host/q4Stbp.jpg',
'https://img.nickpic.host/q4SM6Y.jpg',
'https://img.nickpic.host/q4SRHA.jpg',
'https://img.nickpic.host/q4S4mG.jpg',
'https://img.nickpic.host/q4SDqz.jpg',
'https://img.nickpic.host/q4SzTW.jpg',
'https://img.nickpic.host/q4Swwc.jpg',
'https://img.nickpic.host/q4S8j1.jpg',
'https://img.nickpic.host/q4SKtj.jpg',
'https://img.nickpic.host/q4SY9J.jpg',
'https://img.nickpic.host/q4SNbn.jpg',
'https://img.nickpic.host/q4SVCs.jpg',
'https://img.nickpic.host/q4SfH2.jpg',
'https://img.nickpic.host/q4S2mQ.jpg',
'https://img.nickpic.host/q4S9ux.jpg',
'https://img.nickpic.host/q4SewN.jpg',
'https://img.nickpic.host/q4SkWO.jpg',
'https://img.nickpic.host/q4SLlm.jpg',
'https://img.nickpic.host/q4SPt8.jpg',
'https://img.nickpic.host/q4STeq.jpg',
'https://img.nickpic.host/q4SZbd.jpg',
'https://img.nickpic.host/q4SdCD.jpg',
'https://img.nickpic.host/q4SyN5.jpg',
'https://img.nickpic.host/q4cImP.jpg',
'https://img.nickpic.host/q4cmuM.jpg',
'https://img.nickpic.host/q4cozF.jpg',
'https://img.nickpic.host/q4cpWe.jpg',
'https://img.nickpic.host/q4cxlX.jpg',
'https://img.nickpic.host/q4cBMb.jpg',
'https://img.nickpic.host/q4cbef.jpg',
'https://img.nickpic.host/q4csr6.jpg',
'https://img.nickpic.host/q4cFNY.jpg',
'https://img.nickpic.host/q4c3Qp.jpg',
'https://img.nickpic.host/q4cjoA.jpg',
'https://img.nickpic.host/q4clAG.jpg',
'https://img.nickpic.host/q4c5zz.jpg',
'https://img.nickpic.host/q4cglW.jpg',
'https://img.nickpic.host/q4cSZc.jpg',
'https://img.nickpic.host/q4cqM1.jpg',
'https://img.nickpic.host/q4cukj.jpg',
'https://img.nickpic.host/q4cErJ.jpg',
'https://img.nickpic.host/q4cOQn.jpg',
'https://img.nickpic.host/q4chVs.jpg',
'https://img.nickpic.host/q4cCo2.jpg',
'https://img.nickpic.host/q4cQAQ.jpg',
'https://img.nickpic.host/q4cU7x.jpg',
'https://img.nickpic.host/q4cXZN.jpg',
'https://img.nickpic.host/q4cn5O.jpg',
'https://img.nickpic.host/q4ctRm.jpg',
'https://img.nickpic.host/q4cMk8.jpg',
'https://img.nickpic.host/q4c1sq.jpg',
'https://img.nickpic.host/q4cDVD.jpg',
'https://img.nickpic.host/q4c4Qd.jpg',
'https://img.nickpic.host/q4czp5.jpg',
'https://img.nickpic.host/q4c7AP.jpg',
'https://img.nickpic.host/q4c87M.jpg',
'https://img.nickpic.host/q4cKdF.jpg',
'https://img.nickpic.host/q4cH5e.jpg',
'https://img.nickpic.host/q4cVJb.jpg',
'https://img.nickpic.host/q4cNRX.jpg',
'https://img.nickpic.host/q4c0sf.jpg',
'https://img.nickpic.host/q4c2U6.jpg',
'https://img.nickpic.host/q4ckpY.jpg',
'https://img.nickpic.host/q4cJEA.jpg',
'https://img.nickpic.host/q4c9fp.jpg',
'https://img.nickpic.host/q4cL8G.jpg',
'https://img.nickpic.host/q4cPdz.jpg',
'https://img.nickpic.host/q4cWSc.jpg',
'https://img.nickpic.host/q4cZRW.jpg',
'https://img.nickpic.host/q4cdJ1.jpg',
'https://img.nickpic.host/q4gG3j.jpg',
'https://img.nickpic.host/q4gIUJ.jpg',
'https://img.nickpic.host/q4gmfn.jpg',
'https://img.nickpic.host/q4gpvs.jpg',
'https://img.nickpic.host/q4gvE2.jpg',
'https://img.nickpic.host/q4gx8Q.jpg',
'https://img.nickpic.host/q4gByx.jpg',
'https://img.nickpic.host/q4gs1O.jpg',
'https://img.nickpic.host/q4grSN.jpg',
'https://img.nickpic.host/q4g3Lm.jpg',
'https://img.nickpic.host/q4ga38.jpg',
'https://img.nickpic.host/q4gjXq.jpg',
'https://img.nickpic.host/q4gSvD.jpg',
'https://img.nickpic.host/q4glfd.jpg',
'https://img.nickpic.host/q4gcO5.jpg',
'https://img.nickpic.host/q4gg8P.jpg',
'https://img.nickpic.host/q4gqyM.jpg',
'https://img.nickpic.host/q4gAcF.jpg',
'https://img.nickpic.host/q4gE1e.jpg',
'https://img.nickpic.host/q4gOLX.jpg',
'https://img.nickpic.host/q4g6Fb.jpg',
'https://img.nickpic.host/q4gCXf.jpg',
'https://img.nickpic.host/q4gQ06.jpg',
'https://img.nickpic.host/q4gXxp.jpg',
'https://img.nickpic.host/q4giOY.jpg',
'https://img.nickpic.host/q4gnKA.jpg',
'https://img.nickpic.host/q4gMGG.jpg',
'https://img.nickpic.host/q4gRcz.jpg',
'https://img.nickpic.host/q4g14c.jpg',
'https://img.nickpic.host/q4g4LW.jpg',
'https://img.nickpic.host/q4gwF1.jpg',
'https://img.nickpic.host/q4gzij.jpg',
'https://img.nickpic.host/q4g70J.jpg',
'https://img.nickpic.host/q4gYhs.jpg',
'https://img.nickpic.host/q4gKxn.jpg',
'https://img.nickpic.host/q4gHK2.jpg',
'https://img.nickpic.host/q4gVGQ.jpg',
'https://img.nickpic.host/q4gfgx.jpg',
'https://img.nickpic.host/q4g04N.jpg',
'https://img.nickpic.host/q4g2PO.jpg',
'https://img.nickpic.host/q4geam.jpg',
'https://img.nickpic.host/q4gki8.jpg',
'https://img.nickpic.host/q4gJ2q.jpg',
'https://img.nickpic.host/q4gPxd.jpg',
'https://img.nickpic.host/q4gThD.jpg',
'https://img.nickpic.host/q4gWY5.jpg',
'https://img.nickpic.host/q4gdGP.jpg',
'https://img.nickpic.host/q4qGDF.jpg',
'https://img.nickpic.host/q4gygM.jpg',
'https://img.nickpic.host/q4qIPe.jpg',
'https://img.nickpic.host/q4qoaX.jpg',
'https://img.nickpic.host/q4qpnb.jpg',
'https://img.nickpic.host/q4qBB6.jpg',
'https://img.nickpic.host/q4qv2f.jpg',
'https://img.nickpic.host/q4qb6p.jpg',
'https://img.nickpic.host/q4qrYY.jpg',
'https://img.nickpic.host/q4q3IA.jpg',
'https://img.nickpic.host/q4qFqG.jpg',
'https://img.nickpic.host/q4qaDz.jpg',
'https://img.nickpic.host/q4qjTc.jpg',
'https://img.nickpic.host/q4qSn1.jpg',
'https://img.nickpic.host/q4q5aW.jpg',
'https://img.nickpic.host/q4qc9j.jpg',
'https://img.nickpic.host/q4qqBJ.jpg',
'https://img.nickpic.host/q4qu6n.jpg',
'https://img.nickpic.host/q4qAHs.jpg',
'https://img.nickpic.host/q4qOI2.jpg',
'https://img.nickpic.host/q4qhqQ.jpg',
'https://img.nickpic.host/q4q6wx.jpg',
'https://img.nickpic.host/q4qCTN.jpg',
'https://img.nickpic.host/q4qUjO.jpg',
'https://img.nickpic.host/q4qXtm.jpg',
'https://img.nickpic.host/q4qi98.jpg',
'https://img.nickpic.host/q4qtbq.jpg',
'https://img.nickpic.host/q4qM6d.jpg',
'https://img.nickpic.host/q4qRHD.jpg',
'https://img.nickpic.host/q4q4m5.jpg',
'https://img.nickpic.host/q4qDqP.jpg',
'https://img.nickpic.host/q4qwwM.jpg',
'https://img.nickpic.host/q4qzWF.jpg',
'https://img.nickpic.host/q4q8je.jpg',
'https://img.nickpic.host/q4qKtX.jpg',
'https://img.nickpic.host/q4qYeb.jpg',
'https://img.nickpic.host/q4qNbf.jpg',
'https://img.nickpic.host/q4qVC6.jpg',
'https://img.nickpic.host/q4qfNp.jpg',
'https://img.nickpic.host/q4q2mY.jpg',
'https://img.nickpic.host/q4q9uA.jpg',
'https://img.nickpic.host/q4qezG.jpg',
'https://img.nickpic.host/q4qLlc.jpg',
'https://img.nickpic.host/q4qkWz.jpg',
'https://img.nickpic.host/q4qPtW.jpg',
'https://img.nickpic.host/q4qTe1.jpg',
'https://img.nickpic.host/q4qZrj.jpg',
'https://img.nickpic.host/q4qdCJ.jpg',
'https://img.nickpic.host/q4qyNn.jpg',
'https://img.nickpic.host/q4uIos.jpg',
'https://img.nickpic.host/q4umu2.jpg',
'https://img.nickpic.host/q4uozQ.jpg',
'https://img.nickpic.host/q4upZx.jpg',
'https://img.nickpic.host/q4uxlN.jpg',
'https://img.nickpic.host/q4uBMO.jpg',
'https://img.nickpic.host/q4usr8.jpg',
'https://img.nickpic.host/q4ubkm.jpg',
'https://img.nickpic.host/q4u3Qq.jpg',
'https://img.nickpic.host/q4uFNd.jpg',
'https://img.nickpic.host/q4ujoD.jpg',
'https://img.nickpic.host/q4ulA5.jpg',
'https://img.nickpic.host/q4u5zP.jpg',
'https://img.nickpic.host/q4uSZM.jpg',
'https://img.nickpic.host/q4ug5F.jpg',
'https://img.nickpic.host/q4uqMe.jpg',
'https://img.nickpic.host/q4uukX.jpg',
'https://img.nickpic.host/q4uEsb.jpg',
'https://img.nickpic.host/q4uOQf.jpg',
'https://img.nickpic.host/q4uhV6.jpg',
'https://img.nickpic.host/q4uCpp.jpg',
'https://img.nickpic.host/q4uQAY.jpg',
'https://img.nickpic.host/q4uU7A.jpg',
'https://img.nickpic.host/q4uXdG.jpg',
'https://img.nickpic.host/q4un5z.jpg',
'https://img.nickpic.host/q4u1s1.jpg',
'https://img.nickpic.host/q4utRc.jpg',
'https://img.nickpic.host/q4uMkW.jpg',
'https://img.nickpic.host/q4u4Uj.jpg',
'https://img.nickpic.host/q4uzpn.jpg',
'https://img.nickpic.host/q4uDVJ.jpg',
'https://img.nickpic.host/q4u7Es.jpg',
'https://img.nickpic.host/q4u872.jpg',
'https://img.nickpic.host/q4uKdQ.jpg',
'https://img.nickpic.host/q4uNRN.jpg',
'https://img.nickpic.host/q4uHSx.jpg',
'https://img.nickpic.host/q4u03m.jpg',
'https://img.nickpic.host/q4uVJO.jpg',
'https://img.nickpic.host/q4u2U8.jpg',
'https://img.nickpic.host/q4u9fq.jpg',
'https://img.nickpic.host/q4ukpd.jpg',
'https://img.nickpic.host/q4uJED.jpg',
'https://img.nickpic.host/q4uL85.jpg',
'https://img.nickpic.host/q4uPdP.jpg',
'https://img.nickpic.host/q4uWSM.jpg',
'https://img.nickpic.host/q4uZ1F.jpg',
'https://img.nickpic.host/q4udJe.jpg',
'https://img.nickpic.host/q4AG3X.jpg',
'https://img.nickpic.host/q4AIXb.jpg',
'https://img.nickpic.host/q4Amff.jpg',
'https://img.nickpic.host/q4Apv6.jpg',
'https://img.nickpic.host/q4AvOp.jpg',
'https://img.nickpic.host/q4Ax8Y.jpg',
'https://img.nickpic.host/q4AByA.jpg',
'https://img.nickpic.host/q4ArcG.jpg',
'https://img.nickpic.host/q4As1z.jpg',
'https://img.nickpic.host/q4A3Lc.jpg',
'https://img.nickpic.host/q4Aa3W.jpg',
'https://img.nickpic.host/q4AjX1.jpg',
'https://img.nickpic.host/q4Al0j.jpg',
'https://img.nickpic.host/q4ASvJ.jpg',
'https://img.nickpic.host/q4AcOn.jpg',
'https://img.nickpic.host/q4AgKs.jpg',
'https://img.nickpic.host/q4Aqy2.jpg',
'https://img.nickpic.host/q4AE4x.jpg',
'https://img.nickpic.host/q4AAcQ.jpg',
'https://img.nickpic.host/q4AOLN.jpg',
'https://img.nickpic.host/q4A6FO.jpg',
'https://img.nickpic.host/q4ACim.jpg',
'https://img.nickpic.host/q4AQ08.jpg',
'https://img.nickpic.host/q4AXxq.jpg',
'https://img.nickpic.host/q4AiOd.jpg',
'https://img.nickpic.host/q4AnKD.jpg',
'https://img.nickpic.host/q4AMG5.jpg']
let ruto = naru[Math.floor(Math.random() * naru.length)]
naruto = await getBuffer(ruto)
const nadecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const nafrase = nadecir[Math.floor(Math.random() * nadecir.length)]
cnf.sendMessage(from, naruto, image, { caption: nafrase, quoted: mek })
addFilter(from)
break

case prefix+'kanna':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const kann =['https://i.ibb.co/RB2jSkr/63.jpg','https://i.ibb.co/CQSRKYc/31.jpg','https://i.ibb.co/X3sB7qK/27.jpg','https://i.ibb.co/LvdXMxH/26.jpg','https://i.ibb.co/6skvJyS/29.jpg','https://i.ibb.co/CB9RY7B/28.jpg','https://i.ibb.co/VLC0PbX/23.jpg','https://i.ibb.co/HCfjWRq/22.jpg','https://i.ibb.co/mBJN78j/25.jpg','https://i.ibb.co/6PrFv4v/24.jpg','https://i.ibb.co/bs6R87r/30.jpg','https://i.ibb.co/XLkvDdh/64.jpg','https://i.ibb.co/HqwS259/42.jpg','https://i.ibb.co/XyWDLfJ/41.jpg','https://i.ibb.co/4WyX9wn/37.jpg','https://i.ibb.co/6s6r1Yp/67.jpg','https://i.ibb.co/pfBHGZR/36.jpg','https://i.ibb.co/XjcvyBQ/39.jpg','https://i.ibb.co/R2BFDjR/38.jpg','https://i.ibb.co/NVCKyhm/33.jpg','https://i.ibb.co/23Vn5Vz/62.jpg','https://i.ibb.co/CvW0Nv9/32.jpg','https://i.ibb.co/PQ21cvK/66.jpg','https://i.ibb.co/nfDLmw4/35.jpg','https://i.ibb.co/tQFQgGw/65.jpg','https://i.ibb.co/1Q9mW1N/34.jpg','https://i.ibb.co/FhgGV0c/1.jpg','https://i.ibb.co/VY22fZ8/40.jpg','https://i.ibb.co/0VnmKb6/51.jpg','https://i.ibb.co/L80NCmb/53.jpg','https://i.ibb.co/6NDxzg4/52.jpg','https://i.ibb.co/bg8gmjL/5.jpg','https://i.ibb.co/QrzTQnW/48.jpg','https://i.ibb.co/RPmtr7L/4.jpg','https://i.ibb.co/sQRbbk3/47.jpg','https://i.ibb.co/tqx3nDT/50.jpg','https://i.ibb.co/zfVK5DR/7.jpg','https://i.ibb.co/WWdKJZ9/6.jpg','https://i.ibb.co/vz9sN0k/49.jpg','https://i.ibb.co/y4dPxZ4/44.jpg','https://i.ibb.co/TYDJZZY/43.jpg','https://i.ibb.co/NjZ2MYP/3.jpg','https://i.ibb.co/SJ8wbjX/46.jpg','https://i.ibb.co/cymzyW7/2.jpg','https://i.ibb.co/gRqvK4g/45.jpg','https://i.ibb.co/163wWVZ/9.jpg','https://i.ibb.co/n6p2r0M/8.jpg','https://i.ibb.co/ZxkFydr/11.jpg','https://i.ibb.co/B6wFjYs/10.jpg','https://i.ibb.co/GxBK9MN/61.jpg','https://i.ibb.co/RTRJ4T4/16.jpg','https://i.ibb.co/Qj9NWyC/59.jpg','https://i.ibb.co/KWf968b/58.jpg','https://i.ibb.co/s2ScnfN/15.jpg','https://i.ibb.co/b68MsLz/18.jpg','https://i.ibb.co/kH89t5b/17.jpg','https://i.ibb.co/3syNdWb/60.jpg','https://i.ibb.co/gRDWxnZ/55.jpg','https://i.ibb.co/BtNSZ21/12.jpg','https://i.ibb.co/dQgzSMs/54.jpg','https://i.ibb.co/Twxf36Q/14.jpg','https://i.ibb.co/gjNqLNV/57.jpg','https://i.ibb.co/fXWqCJw/56.jpg','https://i.ibb.co/2P3YyK7/13.jpg','https://i.ibb.co/jT3vdd6/20.jpg','https://i.ibb.co/c6tt70b/19.jpg','https://i.ibb.co/k5pP9kg/21.jpg']
let nna = kann[Math.floor(Math.random() * kann.length)]
kana = await getBuffer(nna)
const kandecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const kanfrase = kandecir[Math.floor(Math.random() * kandecir.length)]
cnf.sendMessage(from, kana, image, { caption: kanfrase, quoted: mek })
addFilter(from)
break
					
case prefix+'pokemon':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const pokemss = ['https://thumbs2.imgbox.com/9c/2f/Wx8tQUkf_t.jpg','https://thumbs2.imgbox.com/c7/7d/EnYPNJtI_t.png','https://thumbs2.imgbox.com/59/93/PaHFjeK1_t.jpg','https://thumbs2.imgbox.com/05/24/ljDQEeNK_t.jpg','https://thumbs2.imgbox.com/f4/e0/XV01Nwwn_t.jpg','https://thumbs2.imgbox.com/11/08/zNfQTDjf_t.png','https://thumbs2.imgbox.com/60/94/WWGH5ZaV_t.png','https://thumbs2.imgbox.com/ef/de/SJCEODW6_t.png','https://thumbs2.imgbox.com/eb/14/rqAySiUn_t.png','https://thumbs2.imgbox.com/91/28/CyqpMOZQ_t.jpg','https://thumbs2.imgbox.com/05/72/rdRm90Hw_t.jpg','https://thumbs2.imgbox.com/ac/1c/bC21luBP_t.jpg','https://thumbs2.imgbox.com/3d/bd/VckToyFa_t.jpg','https://thumbs2.imgbox.com/2b/7f/BWOutsLV_t.jpg','https://thumbs2.imgbox.com/f7/f0/oFf8VJfc_t.jpg','https://thumbs2.imgbox.com/c6/ac/FxeZuaWB_t.jpg','https://thumbs2.imgbox.com/6e/84/lJgQfE0n_t.png','https://thumbs2.imgbox.com/c4/63/EajnmTGm_t.jpg','https://thumbs2.imgbox.com/09/26/15cjvtIk_t.jpg','https://thumbs2.imgbox.com/f0/ef/vWFoOokO_t.jpg','https://thumbs2.imgbox.com/a0/04/EOn4ZnMk_t.jpg','https://thumbs2.imgbox.com/fa/56/ZBydD0fY_t.png','https://thumbs2.imgbox.com/9b/3a/ZPuiF25J_t.png','https://thumbs2.imgbox.com/b9/4f/pMOFaD9N_t.png','https://thumbs2.imgbox.com/2d/a5/td6l2v81_t.jpg','https://thumbs2.imgbox.com/ac/30/XA6L2LvO_t.jpg','https://thumbs2.imgbox.com/aa/42/X6RkthKc_t.jpg','https://thumbs2.imgbox.com/59/09/30rtYBFr_t.jpg','https://thumbs2.imgbox.com/63/8a/fVwSzscm_t.jpg','https://thumbs2.imgbox.com/64/a5/NR0Urhg8_t.jpg','https://thumbs2.imgbox.com/1f/a4/ud7s8r3x_t.jpg','https://thumbs2.imgbox.com/85/d8/SR3JRHeh_t.jpg','https://thumbs2.imgbox.com/70/f5/0TY1jhGc_t.jpg','https://thumbs2.imgbox.com/a7/20/IOYhn2DD_t.jpg','https://thumbs2.imgbox.com/92/f9/jEfTFpPj_t.jpg','https://thumbs2.imgbox.com/a1/3b/aV4eVPKw_t.jpg','https://thumbs2.imgbox.com/37/0d/TCdCxtUp_t.jpg','https://thumbs2.imgbox.com/50/4b/NMSlYA6F_t.jpg','https://thumbs2.imgbox.com/9f/38/pjuKIKL2_t.jpg','https://thumbs2.imgbox.com/19/fe/VY2m9lL4_t.jpg','https://thumbs2.imgbox.com/ff/9a/OPaXNVD3_t.jpg','https://thumbs2.imgbox.com/f9/92/YFOcneYk_t.jpg','https://thumbs2.imgbox.com/ea/bc/nQ1JKpxq_t.jpg','https://thumbs2.imgbox.com/9e/ff/tzfbvzRU_t.jpg','https://thumbs2.imgbox.com/01/1a/VHw8bi4L_t.jpg','https://thumbs2.imgbox.com/df/ea/Yg2GMwpN_t.jpg','https://thumbs2.imgbox.com/3a/d8/DZV65kpc_t.jpg','https://thumbs2.imgbox.com/4a/09/ifiPvdWa_t.jpg','https://thumbs2.imgbox.com/ba/de/GHjXav8J_t.jpg','https://thumbs2.imgbox.com/8a/86/R4RNtNp2_t.jpg','https://thumbs2.imgbox.com/e0/27/9x8dmgIZ_t.jpg','https://thumbs2.imgbox.com/11/e7/bqqX5nWK_t.png','https://thumbs2.imgbox.com/ff/74/vx7nZWTy_t.png','https://thumbs2.imgbox.com/bc/79/dAcYwLV4_t.jpg','https://thumbs2.imgbox.com/85/f8/yhRsVkfK_t.jpg','https://thumbs2.imgbox.com/83/e0/2l0qJHdr_t.jpg','https://thumbs2.imgbox.com/43/85/pS0X7LiC_t.jpg','https://thumbs2.imgbox.com/85/a4/gjrf6PB8_t.jpg','https://thumbs2.imgbox.com/b2/5a/Hxw6kHq4_t.jpg','https://thumbs2.imgbox.com/9f/b0/u4327q03_t.jpg','https://thumbs2.imgbox.com/c5/72/iMM96GXS_t.jpg','https://thumbs2.imgbox.com/65/98/T1mKUTQl_t.jpg','https://thumbs2.imgbox.com/b4/66/VWMrqwWP_t.jpg','https://thumbs2.imgbox.com/34/37/hyoJNYwO_t.jpg','https://thumbs2.imgbox.com/10/56/TdXKNZaE_t.jpg','https://thumbs2.imgbox.com/e3/de/4V1LHywL_t.jpg','https://thumbs2.imgbox.com/ee/49/tJeDA7vM_t.jpg','https://thumbs2.imgbox.com/ee/71/i9Ud2jap_t.jpg','https://thumbs2.imgbox.com/ce/1d/yFKErUWS_t.jpg','https://thumbs2.imgbox.com/d0/bc/NIs9g9hA_t.jpg','https://thumbs2.imgbox.com/24/4b/5kzMTBg8_t.jpg','https://thumbs2.imgbox.com/f0/66/oSb2R4XF_t.jpg','https://thumbs2.imgbox.com/d0/1d/aVIkejis_t.jpg','https://thumbs2.imgbox.com/f0/b4/mH0kCez1_t.jpg','https://thumbs2.imgbox.com/91/b0/Axi9VcYN_t.jpg','https://thumbs2.imgbox.com/11/28/T7D5DnzH_t.jpg','https://thumbs2.imgbox.com/60/87/EAG3ArbN_t.jpg','https://thumbs2.imgbox.com/d7/42/3NP7weQr_t.jpg','https://thumbs2.imgbox.com/61/4f/jaHknCqW_t.jpg','https://thumbs2.imgbox.com/e1/11/VQuC0Ffx_t.jpg','https://thumbs2.imgbox.com/10/0b/SJ9tn4zf_t.jpg','https://thumbs2.imgbox.com/30/fe/e3BIHyYY_t.jpg','https://thumbs2.imgbox.com/b8/c6/MtBcQVVa_t.jpg','https://thumbs2.imgbox.com/b7/b8/BngAEVTp_t.jpg','https://thumbs2.imgbox.com/b4/14/CF7I95Zt_t.jpg','https://thumbs2.imgbox.com/d2/c6/R5iIqntl_t.jpg','https://thumbs2.imgbox.com/56/e3/EOZy6AuL_t.jpg','https://thumbs2.imgbox.com/3e/d7/Im5TB05J_t.jpg','https://thumbs2.imgbox.com/8e/c4/orS4DtPh_t.jpg','https://thumbs2.imgbox.com/f4/54/30FyBZWP_t.jpg','https://thumbs2.imgbox.com/c3/1f/Mi1jLj4l_t.jpg','https://thumbs2.imgbox.com/90/27/tkdLkRLO_t.jpg','https://thumbs2.imgbox.com/07/4f/JsLnamZh_t.jpg','https://thumbs2.imgbox.com/21/4a/1TyhDvUw_t.jpg','https://thumbs2.imgbox.com/f4/92/8B0956vv_t.jpg','https://thumbs2.imgbox.com/5b/13/mbny3sjU_t.jpg','https://thumbs2.imgbox.com/a5/f4/JpQVktHg_t.jpg','https://thumbs2.imgbox.com/f4/49/h648eQDy_t.jpg','https://thumbs2.imgbox.com/07/f1/77SpgCvi_t.jpg','https://thumbs2.imgbox.com/0b/98/uvANnQD8_t.jpg','https://thumbs2.imgbox.com/06/79/Sa80Nd7T_t.jpg','https://thumbs2.imgbox.com/0f/65/FX9zqynh_t.jpg','https://thumbs2.imgbox.com/c0/26/ADztJfCg_t.jpg','https://thumbs2.imgbox.com/61/2b/wbiauMwN_t.jpg','https://thumbs2.imgbox.com/56/06/DMEduHkF_t.jpg','https://thumbs2.imgbox.com/59/52/sA2faIi6_t.jpg','https://thumbs2.imgbox.com/c3/77/ChARh2YB_t.jpg','https://thumbs2.imgbox.com/0a/eb/VNBXVqXV_t.jpg','https://thumbs2.imgbox.com/69/08/4jqpINMl_t.jpg','https://thumbs2.imgbox.com/cb/f1/Rx6n3VlM_t.jpg','https://thumbs2.imgbox.com/f1/60/3LA2rNi0_t.jpg','https://thumbs2.imgbox.com/7d/5d/tINqtuqn_t.jpg','https://thumbs2.imgbox.com/54/e1/VBSRPzYs_t.jpg','https://thumbs2.imgbox.com/a5/56/3QTwhbTt_t.jpg','https://thumbs2.imgbox.com/35/e8/8klPQaYJ_t.jpg','https://thumbs2.imgbox.com/f7/65/GuZ57eKj_t.jpg','https://thumbs2.imgbox.com/d3/f8/2fJ8aZoe_t.jpg','https://thumbs2.imgbox.com/e0/13/yzCnhLIQ_t.jpg','https://thumbs2.imgbox.com/a0/c0/pbn9Itu3_t.jpg','https://thumbs2.imgbox.com/61/0d/QQNqdIEh_t.png','https://thumbs2.imgbox.com/47/90/27hs5ZTr_t.png','https://thumbs2.imgbox.com/d9/df/MhegNoWY_t.png','https://thumbs2.imgbox.com/3f/e4/cG9IF17f_t.png','https://thumbs2.imgbox.com/86/c0/0BbnRlB9_t.png','https://thumbs2.imgbox.com/84/62/LRwf6Q4d_t.png','https://thumbs2.imgbox.com/c2/5d/3I0GRqRM_t.jpg','https://thumbs2.imgbox.com/94/a9/lwUYAvVu_t.png','https://thumbs2.imgbox.com/46/eb/hrhsKrXE_t.jpg','https://thumbs2.imgbox.com/49/a8/xCEopGaT_t.png','https://thumbs2.imgbox.com/1e/b6/aw2Mfsmx_t.png','https://thumbs2.imgbox.com/fc/92/edD8MxfN_t.png','https://thumbs2.imgbox.com/9e/ce/bXL8nnj1_t.png','https://thumbs2.imgbox.com/b2/eb/o7zdxZY3_t.png','https://thumbs2.imgbox.com/31/40/aEUWywOj_t.jpg','https://thumbs2.imgbox.com/07/f7/k6Wea41Z_t.jpg','https://thumbs2.imgbox.com/32/1c/VBeHnU9L_t.jpg','https://thumbs2.imgbox.com/fd/a8/1YQCqsfG_t.jpg','https://thumbs2.imgbox.com/af/46/wHDUvznB_t.png','https://thumbs2.imgbox.com/f2/ea/HyJPuia4_t.jpg','https://thumbs2.imgbox.com/f3/4d/D3nY1bfv_t.png','https://thumbs2.imgbox.com/d9/6b/RXg50QNo_t.png','https://thumbs2.imgbox.com/9f/2a/LLkiHeap_t.png','https://thumbs2.imgbox.com/df/13/txOps992_t.jpg','https://thumbs2.imgbox.com/bd/bf/kGDQgaYm_t.png','https://thumbs2.imgbox.com/42/f3/7igmd8Ow_t.png','https://thumbs2.imgbox.com/92/98/0ncra2oT_t.png','https://thumbs2.imgbox.com/da/ef/HcZgk2Fk_t.png','https://thumbs2.imgbox.com/f4/fd/LwITy1qv_t.png','https://thumbs2.imgbox.com/ca/c2/zsIMML6a_t.png','https://thumbs2.imgbox.com/7c/0f/cRIPDIVd_t.png','https://thumbs2.imgbox.com/0e/a7/WAzLAVkS_t.png','https://thumbs2.imgbox.com/8a/15/s8IGWPCL_t.jpg','https://thumbs2.imgbox.com/31/43/fcELK6mk_t.png','https://thumbs2.imgbox.com/d9/5b/uWbqJ9nF_t.jpg','https://thumbs2.imgbox.com/7b/d4/s4Z5jsMV_t.jpg','https://thumbs2.imgbox.com/61/0b/2ZSweRwU_t.jpg','https://thumbs2.imgbox.com/24/1e/PKRUAWm7_t.jpg','https://thumbs2.imgbox.com/d6/64/nLVAjSko_t.jpg','https://thumbs2.imgbox.com/9d/c2/UoQ2FMc3_t.jpg','https://thumbs2.imgbox.com/1b/c0/dQgUvcXI_t.jpg','https://thumbs2.imgbox.com/f1/c0/ygsq4OYP_t.jpg','https://thumbs2.imgbox.com/f1/91/Xm06rORa_t.jpg','https://thumbs2.imgbox.com/8d/02/TlKLqZqo_t.jpg','https://thumbs2.imgbox.com/08/02/o9KxTjlf_t.png','https://thumbs2.imgbox.com/7f/90/ACxYizGo_t.jpg','https://thumbs2.imgbox.com/0a/b2/GFJrXn8z_t.png','https://thumbs2.imgbox.com/44/e9/UBmfvNVe_t.png','https://thumbs2.imgbox.com/76/c4/keuCJd9Q_t.png','https://thumbs2.imgbox.com/83/e1/I0gvyAs1_t.png','https://thumbs2.imgbox.com/b9/b2/9yE9OznJ_t.png','https://thumbs2.imgbox.com/c4/02/cpOqlrAZ_t.png','https://thumbs2.imgbox.com/32/b0/kb18rcQo_t.png','https://thumbs2.imgbox.com/21/eb/C5bMzie0_t.png','https://thumbs2.imgbox.com/1a/cb/zDGMFxgp_t.png','https://thumbs2.imgbox.com/c8/53/SzSfaY4d_t.png','https://thumbs2.imgbox.com/38/84/rLbwonfE_t.png','https://thumbs2.imgbox.com/a6/54/WcWZLwMM_t.png','https://thumbs2.imgbox.com/b9/f5/vhOwLce4_t.png','https://thumbs2.imgbox.com/e3/97/hJ3BZYCF_t.png','https://thumbs2.imgbox.com/1e/1e/FOFus5OF_t.png','https://thumbs2.imgbox.com/ac/63/ysTxAPA8_t.png','https://thumbs2.imgbox.com/5b/6b/PmTKghRY_t.png','https://thumbs2.imgbox.com/24/02/Fa7AkHjv_t.png','https://thumbs2.imgbox.com/22/7c/KoIjnoiJ_t.png','https://thumbs2.imgbox.com/0c/ea/gy3OpUNg_t.png','https://thumbs2.imgbox.com/dc/e7/7tlJg9So_t.png','https://thumbs2.imgbox.com/74/e7/fNQtCVwg_t.png','https://thumbs2.imgbox.com/85/27/ZeTGiKSa_t.png','https://thumbs2.imgbox.com/75/e6/ZIsqCHAC_t.png','https://thumbs2.imgbox.com/05/2e/hjJlAWvn_t.png','https://thumbs2.imgbox.com/00/93/zSXdSivc_t.jpg','https://thumbs2.imgbox.com/ed/10/qFsQQpg9_t.jpg','https://thumbs2.imgbox.com/7d/bc/S1cDfdRK_t.png','https://thumbs2.imgbox.com/32/22/t1ICVzSb_t.jpg','https://thumbs2.imgbox.com/a8/3a/twhY8Hfd_t.jpg','https://thumbs2.imgbox.com/fa/ba/tPAQecss_t.jpg','https://thumbs2.imgbox.com/8e/d8/pUQjCfW5_t.jpg','https://thumbs2.imgbox.com/e8/1d/3tqTxL3Z_t.jpg','https://thumbs2.imgbox.com/aa/c8/R6BXQPhk_t.png',
		 'https://thumbs2.imgbox.com/bf/ae/qhrBZjFL_t.jpg','https://thumbs2.imgbox.com/9b/2e/WRgNx1QA_t.jpg','https://thumbs2.imgbox.com/3d/b6/zXrw5Ei6_t.jpg','https://thumbs2.imgbox.com/15/2b/nmbryWa0_t.jpg','https://thumbs2.imgbox.com/de/e3/9qcHiDqK_t.jpg','https://thumbs2.imgbox.com/0f/43/a5I83FQd_t.jpg','https://thumbs2.imgbox.com/a4/cf/RSKiKFxH_t.jpg','https://thumbs2.imgbox.com/c4/a4/GZAg98g3_t.jpg','https://thumbs2.imgbox.com/5b/52/29JPJQa6_t.jpg','https://thumbs2.imgbox.com/11/62/DC7gBSfi_t.jpg','https://thumbs2.imgbox.com/67/bd/17ibwNTO_t.jpg','https://thumbs2.imgbox.com/ce/56/TJlyXUbC_t.jpg','https://thumbs2.imgbox.com/d3/06/zYJ83l5b_t.png','https://thumbs2.imgbox.com/d9/68/8gL7OZoG_t.jpg','https://thumbs2.imgbox.com/83/d8/LHVVsuFh_t.png','https://thumbs2.imgbox.com/c5/46/9Oh18O5g_t.jpg','https://thumbs2.imgbox.com/90/c0/R20yHRbJ_t.png','https://thumbs2.imgbox.com/e0/31/PWhZ4elS_t.png','https://thumbs2.imgbox.com/5c/34/BB7knJeE_t.png','https://thumbs2.imgbox.com/44/28/V9en94ug_t.png','https://thumbs2.imgbox.com/e7/04/rVuuE7b3_t.png','https://thumbs2.imgbox.com/c2/ea/gFionnEF_t.png','https://thumbs2.imgbox.com/15/aa/adUaf7gn_t.png','https://thumbs2.imgbox.com/9c/e4/ftp1nJGF_t.png','https://thumbs2.imgbox.com/73/91/BXiyQZIL_t.png','https://thumbs2.imgbox.com/0d/3d/XA3Riw51_t.png','https://thumbs2.imgbox.com/d8/f5/3wPXSq5Y_t.png','https://thumbs2.imgbox.com/15/34/IMuIbTZ1_t.png','https://thumbs2.imgbox.com/80/6a/mAKPSlWV_t.png','https://thumbs2.imgbox.com/cd/b8/B99fNF4X_t.png','https://thumbs2.imgbox.com/bb/3b/AspgQgLm_t.jpg','https://thumbs2.imgbox.com/11/21/DIRmPuQj_t.jpg','https://thumbs2.imgbox.com/e6/cf/caacsZSy_t.jpg','https://thumbs2.imgbox.com/1f/9f/T5pMI2fv_t.jpg','https://thumbs2.imgbox.com/d7/23/s0C8L65M_t.jpg','https://thumbs2.imgbox.com/46/1d/rZ4lwYxM_t.jpg','https://thumbs2.imgbox.com/e1/21/LFjjfgaw_t.jpg','https://thumbs2.imgbox.com/20/9d/LTzTfLKz_t.jpg','https://thumbs2.imgbox.com/4d/76/fq2eEz3A_t.jpg','https://thumbs2.imgbox.com/a6/44/tXeo1B2X_t.jpg','https://thumbs2.imgbox.com/0a/a7/EPYhrsuh_t.jpg','https://thumbs2.imgbox.com/27/02/LSqlR0C5_t.jpg','https://thumbs2.imgbox.com/54/7d/LQt8hb8l_t.jpg','https://thumbs2.imgbox.com/49/94/EIit8xH9_t.jpg','https://thumbs2.imgbox.com/fe/a0/WXqmOBcO_t.png','https://thumbs2.imgbox.com/48/cb/zhTx7OLZ_t.jpg','https://thumbs2.imgbox.com/df/ad/QoIX81vw_t.jpg','https://thumbs2.imgbox.com/58/d5/ZVZ9jC2M_t.jpg','https://thumbs2.imgbox.com/aa/cf/AvMOAt83_t.jpg','https://thumbs2.imgbox.com/17/c3/GADA78WS_t.jpg','https://thumbs2.imgbox.com/05/38/KhpfWiE4_t.jpg','https://thumbs2.imgbox.com/d8/3d/pVUuVRsV_t.jpg','https://thumbs2.imgbox.com/ce/3e/6ZAFBdpA_t.jpg','https://thumbs2.imgbox.com/c9/a1/2hiewNzR_t.jpg','https://thumbs2.imgbox.com/f8/9a/stfTN4wN_t.png','https://thumbs2.imgbox.com/37/b7/uFJDvSQj_t.png','https://thumbs2.imgbox.com/01/64/aBkbGwZe_t.png','https://thumbs2.imgbox.com/69/3d/LlefNrwd_t.png','https://thumbs2.imgbox.com/9e/54/yWc6El9A_t.jpg','https://thumbs2.imgbox.com/c5/59/OD2QzNoP_t.jpg','https://thumbs2.imgbox.com/94/0f/lYMUqPnb_t.jpg','https://thumbs2.imgbox.com/d0/28/hBt4vyDl_t.jpg','https://thumbs2.imgbox.com/24/05/j4QO8wjA_t.jpg','https://thumbs2.imgbox.com/52/fb/IPQt1JLk_t.jpg','https://thumbs2.imgbox.com/20/5b/iDXDTiFn_t.jpg','https://thumbs2.imgbox.com/00/32/MGx4O5NZ_t.jpg','https://thumbs2.imgbox.com/f5/13/mOrrxtyb_t.jpg','https://thumbs2.imgbox.com/cc/e8/D4pbRbCA_t.jpg','https://thumbs2.imgbox.com/84/00/MjBNM5y5_t.jpg','https://thumbs2.imgbox.com/81/86/VOxLYvpa_t.jpg','https://thumbs2.imgbox.com/06/55/kykC3YhA_t.png','https://thumbs2.imgbox.com/ba/e8/DvJ8m4Dx_t.jpg','https://thumbs2.imgbox.com/e7/de/FWVhwCgB_t.jpg','https://thumbs2.imgbox.com/37/eb/xsAAWnln_t.jpg','https://thumbs2.imgbox.com/42/9e/GOmIzjen_t.png','https://thumbs2.imgbox.com/fd/c4/aQ5ICofQ_t.png','https://thumbs2.imgbox.com/19/44/HZdai7ud_t.png','https://thumbs2.imgbox.com/3e/50/zj2giry9_t.png','https://thumbs2.imgbox.com/1b/8c/MRmN02hc_t.jpg','https://thumbs2.imgbox.com/8c/79/frhZPcX8_t.jpg','https://thumbs2.imgbox.com/f3/3c/cM2KEYH8_t.jpg','https://thumbs2.imgbox.com/e9/01/GN72J0Lm_t.jpg','https://thumbs2.imgbox.com/01/9f/AsFA4XGv_t.jpg','https://thumbs2.imgbox.com/ca/d6/PNxpM4sO_t.jpg','https://thumbs2.imgbox.com/c8/79/LOl14wX9_t.jpg','https://thumbs2.imgbox.com/d3/90/ojCjZDko_t.jpg','https://thumbs2.imgbox.com/d5/cf/F5tnthJz_t.jpg','https://thumbs2.imgbox.com/ba/f1/46GPhQJM_t.jpg','https://thumbs2.imgbox.com/47/4e/gS5jNdfS_t.jpg','https://thumbs2.imgbox.com/ae/81/ImYzUmBN_t.jpg','https://thumbs2.imgbox.com/38/58/As9f9yvQ_t.png','https://thumbs2.imgbox.com/ed/c0/lzo7eTBP_t.png','https://thumbs2.imgbox.com/11/00/JpXEqj8P_t.png','https://thumbs2.imgbox.com/a0/a7/NcxrKMP5_t.png','https://thumbs2.imgbox.com/a1/b2/TKr4eveL_t.png','https://thumbs2.imgbox.com/9f/0f/EXH5kbFy_t.png','https://thumbs2.imgbox.com/1e/47/sPyahFla_t.png','https://thumbs2.imgbox.com/bc/bc/o0wr2x03_t.jpg','https://thumbs2.imgbox.com/f1/ad/u2ZfAC2u_t.jpg','https://thumbs2.imgbox.com/a2/9e/gkkASf5Q_t.jpg','https://thumbs2.imgbox.com/8e/4a/iZ6io27J_t.jpg','https://thumbs2.imgbox.com/fd/72/2QrIqJFy_t.png','https://thumbs2.imgbox.com/50/d4/EE2YT0sy_t.png','https://thumbs2.imgbox.com/3d/cb/LBXuubxM_t.png','https://thumbs2.imgbox.com/58/ff/ndarHam4_t.png','https://thumbs2.imgbox.com/8a/82/55uXOt6e_t.png','https://thumbs2.imgbox.com/d5/65/gmXg0ckX_t.png','https://thumbs2.imgbox.com/b8/7b/K0gv1XAQ_t.png','https://thumbs2.imgbox.com/62/7f/hci8XTqU_t.png','https://thumbs2.imgbox.com/dd/2a/mvUI0D9f_t.png','https://thumbs2.imgbox.com/6f/38/eVRVPla9_t.png','https://thumbs2.imgbox.com/fd/b9/ayS9IihU_t.png','https://thumbs2.imgbox.com/f0/28/qjqr8EMI_t.png','https://thumbs2.imgbox.com/32/8d/IC1XaHeu_t.png','https://thumbs2.imgbox.com/08/59/ZQeczQOe_t.png','https://thumbs2.imgbox.com/2f/8b/vY71Jer1_t.png','https://thumbs2.imgbox.com/7d/c8/uVnoFMKP_t.jpg','https://thumbs2.imgbox.com/93/82/qAbcjxAN_t.jpg','https://thumbs2.imgbox.com/25/79/gQcbA8QE_t.png','https://thumbs2.imgbox.com/ce/29/C4jGlrck_t.jpg','https://thumbs2.imgbox.com/c9/07/m9EUJBNo_t.png','https://thumbs2.imgbox.com/52/d3/GRCd2iNt_t.png','https://thumbs2.imgbox.com/6c/86/zXE2Gyzj_t.jpg','https://thumbs2.imgbox.com/17/ca/0o2PeVRq_t.jpg','https://thumbs2.imgbox.com/ba/90/pUsiN59b_t.png','https://thumbs2.imgbox.com/a9/fc/4xp0XL0l_t.jpg','https://thumbs2.imgbox.com/52/1e/qiR4YRBy_t.jpg','https://thumbs2.imgbox.com/1e/5b/QBPB0Oe1_t.jpg','https://thumbs2.imgbox.com/e9/18/dtN2EavK_t.jpg','https://thumbs2.imgbox.com/bb/74/MHLqPxTX_t.jpg','https://thumbs2.imgbox.com/7a/91/fgcS1r1J_t.jpg','https://thumbs2.imgbox.com/94/29/8mhailjW_t.jpg','https://thumbs2.imgbox.com/a1/4a/6FDdvL2C_t.jpg','https://thumbs2.imgbox.com/36/39/PxeQL7fv_t.jpg','https://thumbs2.imgbox.com/16/51/fHFynfm0_t.jpg','https://thumbs2.imgbox.com/d9/b3/giTdIQ8Q_t.jpg','https://thumbs2.imgbox.com/61/c8/FL2YEVx7_t.jpg','https://thumbs2.imgbox.com/10/3a/PZPtL45l_t.png','https://thumbs2.imgbox.com/7f/d2/xAc7ZaFa_t.png','https://thumbs2.imgbox.com/e6/08/ep8Y3wp6_t.png','https://thumbs2.imgbox.com/d5/16/WGHTtENl_t.png','https://thumbs2.imgbox.com/4b/98/Z7QnsTlS_t.png','https://thumbs2.imgbox.com/9b/9f/JgdC0fzR_t.png','https://thumbs2.imgbox.com/9b/48/nxctRWqT_t.png','https://thumbs2.imgbox.com/12/99/L9tH5R2a_t.jpg','https://thumbs2.imgbox.com/a8/25/RdYA6NrR_t.jpg','https://thumbs2.imgbox.com/2b/94/Bb439atU_t.jpg','https://thumbs2.imgbox.com/dd/ce/KnIxYdGl_t.jpg','https://thumbs2.imgbox.com/9e/e3/EHyjFzkI_t.png','https://thumbs2.imgbox.com/43/af/nHGSfFOI_t.png','https://thumbs2.imgbox.com/b2/ea/5IygCNty_t.jpg','https://thumbs2.imgbox.com/81/ff/5pT5sX7W_t.jpg','https://thumbs2.imgbox.com/2e/f9/kmhDxCXT_t.png','https://thumbs2.imgbox.com/6e/ec/nhQvbtAq_t.png','https://thumbs2.imgbox.com/73/16/cHtQTIst_t.png','https://thumbs2.imgbox.com/52/34/zdm1tGlP_t.png','https://thumbs2.imgbox.com/22/ca/eMsbSDdm_t.png','https://thumbs2.imgbox.com/47/35/SoWMyME2_t.jpg','https://thumbs2.imgbox.com/75/67/jYromplB_t.jpg','https://thumbs2.imgbox.com/b5/36/EYwoQZnA_t.jpg','https://thumbs2.imgbox.com/60/73/aGc8LmZF_t.jpg','https://thumbs2.imgbox.com/05/c1/3JzoSPQj_t.jpg','https://thumbs2.imgbox.com/ed/36/H0KhWnGA_t.png','https://thumbs2.imgbox.com/9f/ac/9t4sER2Z_t.png','https://thumbs2.imgbox.com/67/d4/BVXb0jlW_t.png','https://thumbs2.imgbox.com/e2/42/5o1wYXhW_t.png','https://thumbs2.imgbox.com/ee/59/NxSkRVNu_t.png','https://thumbs2.imgbox.com/02/03/xFgB56Sg_t.png','https://thumbs2.imgbox.com/b7/54/ecLzzk0u_t.png','https://thumbs2.imgbox.com/57/6a/tWKeMdvn_t.png','https://thumbs2.imgbox.com/04/3c/sHCxxoxQ_t.png','https://thumbs2.imgbox.com/2f/ca/Kgb7fscR_t.jpg','https://thumbs2.imgbox.com/dd/1d/0qfW8tNh_t.jpg','https://thumbs2.imgbox.com/d3/a7/OpqKc9bu_t.png','https://thumbs2.imgbox.com/ac/d2/n1suzU54_t.jpg','https://thumbs2.imgbox.com/05/d9/38HI5WNT_t.png','https://thumbs2.imgbox.com/20/26/qswQSOjt_t.png','https://thumbs2.imgbox.com/34/cf/WFGDsvG0_t.jpg','https://thumbs2.imgbox.com/ae/97/Xsjikyce_t.jpg','https://thumbs2.imgbox.com/2a/67/wKuUNPvs_t.jpg','https://thumbs2.imgbox.com/8d/e0/z1Asxkba_t.png','https://thumbs2.imgbox.com/5c/9d/EiLiNir1_t.jpg','https://thumbs2.imgbox.com/5d/3b/V8shc716_t.jpg','https://thumbs2.imgbox.com/25/b0/sdvrloji_t.png','https://thumbs2.imgbox.com/c3/4f/geFQAIN3_t.jpg','https://thumbs2.imgbox.com/b2/83/Cj0x4kZ3_t.png','https://thumbs2.imgbox.com/30/49/nmDOwgRV_t.png','https://thumbs2.imgbox.com/ae/f6/6dGElDSo_t.jpg','https://thumbs2.imgbox.com/54/3a/hqbgdXN0_t.png','https://thumbs2.imgbox.com/df/5d/6PrIaJJP_t.jpg','https://thumbs2.imgbox.com/54/a9/3JwYNLyh_t.png','https://thumbs2.imgbox.com/e6/56/hcv1XqpM_t.jpg','https://thumbs2.imgbox.com/2b/96/DNQO9Q4c_t.png','https://thumbs2.imgbox.com/07/d5/8AcMjBb5_t.png','https://thumbs2.imgbox.com/a0/d4/JK4zENnE_t.png','https://thumbs2.imgbox.com/de/c8/4tSqmGGU_t.jpg','https://thumbs2.imgbox.com/1b/39/HVD7WG8N_t.png','https://thumbs2.imgbox.com/d4/d5/Wr47bGBR_t.png','https://thumbs2.imgbox.com/ff/0a/r8r7GfX3_t.png',
		 'https://thumbs2.imgbox.com/c3/39/IKfP2Z9e_t.jpg','https://thumbs2.imgbox.com/45/5b/pKFd28Hf_t.png','https://thumbs2.imgbox.com/c9/08/o0QL01lt_t.png','https://thumbs2.imgbox.com/7d/aa/wE6RSl4y_t.png','https://thumbs2.imgbox.com/4b/5e/VaS7aGJb_t.jpg','https://thumbs2.imgbox.com/0a/4f/O10tUUVR_t.png','https://thumbs2.imgbox.com/32/6e/gXarIA0i_t.jpg','https://thumbs2.imgbox.com/82/7e/ka0NfODV_t.jpg','https://thumbs2.imgbox.com/d0/51/ikJkRLlT_t.png','https://thumbs2.imgbox.com/3e/58/j51k9l7v_t.png','https://thumbs2.imgbox.com/4a/7a/my4yjXmS_t.jpg','https://thumbs2.imgbox.com/cc/a7/X4TAMrve_t.jpg','https://thumbs2.imgbox.com/25/ef/Ch78Uw9I_t.jpg','https://thumbs2.imgbox.com/3b/1c/O3i6Rvbj_t.png','https://thumbs2.imgbox.com/52/41/s66W6viP_t.jpg','https://thumbs2.imgbox.com/5e/27/ojL41aV1_t.jpg','https://thumbs2.imgbox.com/e3/5e/k9yJ7YKC_t.png','https://thumbs2.imgbox.com/b5/87/GfeI3SFO_t.png','https://thumbs2.imgbox.com/f9/07/ZPE57FWY_t.png','https://thumbs2.imgbox.com/f4/7a/8FwWmb73_t.jpg','https://thumbs2.imgbox.com/87/36/XS5hYwKo_t.jpg','https://thumbs2.imgbox.com/2f/d0/YTOsEZM3_t.png','https://thumbs2.imgbox.com/87/6a/FibIVszP_t.png','https://thumbs2.imgbox.com/3d/5a/b27wl7gr_t.png','https://thumbs2.imgbox.com/13/63/15FrN29I_t.png','https://thumbs2.imgbox.com/d9/ab/KmYpTMUh_t.png','https://thumbs2.imgbox.com/7f/2d/boLmnwaF_t.jpg','https://thumbs2.imgbox.com/1e/8c/Pz4qSt9o_t.png','https://thumbs2.imgbox.com/87/78/cYIFaDH8_t.jpg','https://thumbs2.imgbox.com/60/fc/sXew0LbR_t.jpg','https://thumbs2.imgbox.com/67/50/v8Fi4cgy_t.png','https://thumbs2.imgbox.com/47/d1/RvdW75ho_t.png','https://thumbs2.imgbox.com/1d/bd/BNjMKjIX_t.jpg','https://thumbs2.imgbox.com/33/6d/sJWa3DBw_t.jpg']
let pokes = pokemss[Math.floor(Math.random() * pokemss.length)]
pokemon = await getBuffer(pokes)
const decir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const frase = decir[Math.floor(Math.random() * decir.length)]
cnf.sendMessage(from, pokemon, image, { caption: frase, quoted: mek })
addFilter(from)
break

case prefix+'toloveru':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const loves = ['https://img.nickpic.host/q4APBj.jpg',
'https://img.nickpic.host/q4AJ21.jpg',
'https://img.nickpic.host/q4Aeac.jpg',
'https://img.nickpic.host/q4AkiW.jpg',
'https://img.nickpic.host/q4A2Pz.jpg',
'https://img.nickpic.host/q4AYh6.jpg',
'https://img.nickpic.host/q4AfgA.jpg',
'https://img.nickpic.host/q4A0DG.jpg',
'https://img.nickpic.host/q4AHYp.jpg',
'https://img.nickpic.host/q4AVGY.jpg',
'https://img.nickpic.host/q4AThJ.jpg',
'https://img.nickpic.host/q4AWYn.jpg',
'https://img.nickpic.host/q4AdIs.jpg',
'https://img.nickpic.host/q4Ayg2.jpg',
'https://img.nickpic.host/q4EGDQ.jpg',
'https://img.nickpic.host/q4EITx.jpg',
'https://img.nickpic.host/q4EoaN.jpg',
'https://img.nickpic.host/q4EpnO.jpg',
'https://img.nickpic.host/q4Ev9m.jpg',
'https://img.nickpic.host/q4EBB8.jpg',
'https://img.nickpic.host/q4Eb6q.jpg',
'https://img.nickpic.host/q4ErYd.jpg',
'https://img.nickpic.host/q4E3ID.jpg',
'https://img.nickpic.host/q4EFq5.jpg',
'https://img.nickpic.host/q4EaDP.jpg',
'https://img.nickpic.host/q4EjTM.jpg',
'https://img.nickpic.host/q4E5jF.jpg',
'https://img.nickpic.host/q4ESne.jpg',
'https://img.nickpic.host/q4Ec9X.jpg',
'https://img.nickpic.host/q4Eqbb.jpg',
'https://img.nickpic.host/q4Eu6f.jpg',
'https://img.nickpic.host/q4EAH6.jpg',
'https://img.nickpic.host/q4EOmp.jpg',
'https://img.nickpic.host/q4EhqY.jpg',
'https://img.nickpic.host/q4E6wA.jpg',
'https://img.nickpic.host/q4ECWG.jpg',
'https://img.nickpic.host/q4EUjz.jpg',
'https://img.nickpic.host/q4EXtc.jpg',
'https://img.nickpic.host/q4Ei9W.jpg',
'https://img.nickpic.host/q4Etb1.jpg',
'https://img.nickpic.host/q4EMCj.jpg',
'https://img.nickpic.host/q4ERHJ.jpg',
'https://img.nickpic.host/q4E4mn.jpg',
'https://img.nickpic.host/q4EDus.jpg',
'https://img.nickpic.host/q4Eww2.jpg',
'https://img.nickpic.host/q4EzWQ.jpg',
'https://img.nickpic.host/q4E8lx.jpg',
'https://img.nickpic.host/q4EKtN.jpg',
'https://img.nickpic.host/q4EYeO.jpg',
'https://img.nickpic.host/q4ENrm.jpg',
'https://img.nickpic.host/q4EVC8.jpg',
'https://img.nickpic.host/q4EfNq.jpg',
'https://img.nickpic.host/q4E2md.jpg',
'https://img.nickpic.host/q4E9uD.jpg',
'https://img.nickpic.host/q4Eez5.jpg',
'https://img.nickpic.host/q4EkWP.jpg',
'https://img.nickpic.host/q4EPMF.jpg',
'https://img.nickpic.host/q4ELlM.jpg',
'https://img.nickpic.host/q4EZrX.jpg',
'https://img.nickpic.host/q4ETee.jpg',
'https://img.nickpic.host/q4EdQb.jpg',
'https://img.nickpic.host/q4OIo6.jpg',
'https://img.nickpic.host/q4EyNf.jpg',
'https://img.nickpic.host/q4OmAp.jpg',
'https://img.nickpic.host/q4OozY.jpg',
'https://img.nickpic.host/q4OpZA.jpg',
'https://img.nickpic.host/q4Ox5G.jpg',
'https://img.nickpic.host/q4OBMz.jpg',
'https://img.nickpic.host/q4Obkc.jpg',
'https://img.nickpic.host/q4OsrW.jpg',
'https://img.nickpic.host/q4O3Q1.jpg',
'https://img.nickpic.host/q4OFVj.jpg',
'https://img.nickpic.host/q4OjoJ.jpg',
'https://img.nickpic.host/q4OlAn.jpg',
'https://img.nickpic.host/q4O57s.jpg',
'https://img.nickpic.host/q4OSZ2.jpg',
'https://img.nickpic.host/q4Og5Q.jpg',
'https://img.nickpic.host/q4OqRx.jpg',
'https://img.nickpic.host/q4OukN.jpg',
'https://img.nickpic.host/q4OEsO.jpg',
'https://img.nickpic.host/q4OOUm.jpg',
'https://img.nickpic.host/q4OhV8.jpg',
'https://img.nickpic.host/q4OCpq.jpg',
'https://img.nickpic.host/q4OQAd.jpg',
'https://img.nickpic.host/q4OU7D.jpg',
'https://img.nickpic.host/q4OXd5.jpg',
'https://img.nickpic.host/q4On5P.jpg',
'https://img.nickpic.host/q4OtRM.jpg',
'https://img.nickpic.host/q4OMJF.jpg',
'https://img.nickpic.host/q4O1se.jpg',
'https://img.nickpic.host/q4O4UX.jpg',
'https://img.nickpic.host/q4ODfb.jpg',
'https://img.nickpic.host/q4Ozpf.jpg',
'https://img.nickpic.host/q4O7E6.jpg',
'https://img.nickpic.host/q4O88p.jpg',
'https://img.nickpic.host/q4OHSA.jpg',
'https://img.nickpic.host/q4OKdY.jpg',
'https://img.nickpic.host/q4ON1G.jpg',
'https://img.nickpic.host/q4OVJz.jpg',
'https://img.nickpic.host/q4O03c.jpg',
'https://img.nickpic.host/q4O2UW.jpg',
'https://img.nickpic.host/q4O9f1.jpg',
'https://img.nickpic.host/q4Okvj.jpg',
'https://img.nickpic.host/q4OJEJ.jpg',
'https://img.nickpic.host/q4OL8n.jpg',
'https://img.nickpic.host/q4OPys.jpg',
'https://img.nickpic.host/q4OWS2.jpg',
'https://img.nickpic.host/q4OZ1Q.jpg',
'https://img.nickpic.host/q4hG3N.jpg',
'https://img.nickpic.host/q4hIXO.jpg',
'https://img.nickpic.host/q4hm0m.jpg',
'https://img.nickpic.host/q4hpv8.jpg',
'https://img.nickpic.host/q4hvOq.jpg',
'https://img.nickpic.host/q4hx8d.jpg',
'https://img.nickpic.host/q4hByD.jpg',
'https://img.nickpic.host/q4hrc5.jpg',
'https://img.nickpic.host/q4hs1P.jpg',
'https://img.nickpic.host/q4h3LM.jpg',
'https://img.nickpic.host/q4haFF.jpg',
'https://img.nickpic.host/q4hjXe.jpg',
'https://img.nickpic.host/q4hl0X.jpg',
'https://img.nickpic.host/q4hSxb.jpg',
'https://img.nickpic.host/q4hcOf.jpg',
'https://img.nickpic.host/q4hgK6.jpg',
'https://img.nickpic.host/q4huGp.jpg',
'https://img.nickpic.host/q4hAcY.jpg',
'https://img.nickpic.host/q4hE4A.jpg',
'https://img.nickpic.host/q4hOPG.jpg',
'https://img.nickpic.host/q4h6Fz.jpg',
'https://img.nickpic.host/q4hCic.jpg',
'https://img.nickpic.host/q4hQ0W.jpg',
'https://img.nickpic.host/q4hihj.jpg',
'https://img.nickpic.host/q4hXx1.jpg',
'https://img.nickpic.host/q4hnKJ.jpg',
'https://img.nickpic.host/q4hMGn.jpg',
'https://img.nickpic.host/q4hRgs.jpg',
'https://img.nickpic.host/q4h142.jpg',
'https://img.nickpic.host/q4h4PQ.jpg',
'https://img.nickpic.host/q4hziN.jpg',
'https://img.nickpic.host/q4hwax.jpg',
'https://img.nickpic.host/q4h72O.jpg',
'https://img.nickpic.host/q4hKBm.jpg',
'https://img.nickpic.host/q4hYh8.jpg',
'https://img.nickpic.host/q4hHYq.jpg',
'https://img.nickpic.host/q4hVGd.jpg',
'https://img.nickpic.host/q4hfgD.jpg',
'https://img.nickpic.host/q4h0D5.jpg',
'https://img.nickpic.host/q4h2PP.jpg',
'https://img.nickpic.host/q4heaM.jpg',
'https://img.nickpic.host/q4hknF.jpg',
'https://img.nickpic.host/q4hJ2e.jpg',
'https://img.nickpic.host/q4hPBX.jpg',
'https://img.nickpic.host/q4hT6b.jpg',
'https://img.nickpic.host/q4hWYf.jpg',
'https://img.nickpic.host/q4hdI6.jpg',
'https://img.nickpic.host/q4hyqp.jpg',
'https://img.nickpic.host/q46GDY.jpg',
'https://img.nickpic.host/q46ITA.jpg',
'https://img.nickpic.host/q46ojG.jpg',
'https://img.nickpic.host/q46pnz.jpg',
'https://img.nickpic.host/q46v9c.jpg',
'https://img.nickpic.host/q46b61.jpg',
'https://img.nickpic.host/q46BBW.jpg',
'https://img.nickpic.host/q463IJ.jpg',
'https://img.nickpic.host/q46rHj.jpg',
'https://img.nickpic.host/q46Fqn.jpg',
'https://img.nickpic.host/q46jT2.jpg',
'https://img.nickpic.host/q46aws.jpg',
'https://img.nickpic.host/q465jQ.jpg',
'https://img.nickpic.host/q46Stx.jpg',
'https://img.nickpic.host/q46c9N.jpg',
'https://img.nickpic.host/q46qbO.jpg',
'https://img.nickpic.host/q46uCm.jpg',
'https://img.nickpic.host/q46Omq.jpg',
'https://img.nickpic.host/q46AH8.jpg',
'https://img.nickpic.host/q46hqd.jpg',
'https://img.nickpic.host/q466wD.jpg',
'https://img.nickpic.host/q46UjP.jpg',
'https://img.nickpic.host/q46CW5.jpg',
'https://img.nickpic.host/q46XtM.jpg',
'https://img.nickpic.host/q46tbe.jpg',
'https://img.nickpic.host/q46ieF.jpg',
'https://img.nickpic.host/q46RNb.jpg',
'https://img.nickpic.host/q46MCX.jpg',
'https://img.nickpic.host/q464mf.jpg',
'https://img.nickpic.host/q46Du6.jpg',
'https://img.nickpic.host/q46wzp.jpg',
'https://img.nickpic.host/q46zWY.jpg',
'https://img.nickpic.host/q468lA.jpg',
'https://img.nickpic.host/q46KMG.jpg',
'https://img.nickpic.host/q46Nrc.jpg',
'https://img.nickpic.host/q46Yez.jpg',
'https://img.nickpic.host/q46VCW.jpg',
'https://img.nickpic.host/q46fN1.jpg',
'https://img.nickpic.host/q462oj.jpg',
'https://img.nickpic.host/q46ezn.jpg',
'https://img.nickpic.host/q469uJ.jpg',
'https://img.nickpic.host/q46kZs.jpg',
'https://img.nickpic.host/q46Ll2.jpg',
'https://img.nickpic.host/q46Tkx.jpg',
'https://img.nickpic.host/q46PMQ.jpg',
'https://img.nickpic.host/q46ZrN.jpg',
'https://img.nickpic.host/q46dQO.jpg',
'https://img.nickpic.host/q46yVm.jpg',
'https://img.nickpic.host/q4CIo8.jpg',
'https://img.nickpic.host/q4Cozd.jpg',
'https://img.nickpic.host/q4CpZD.jpg',
'https://img.nickpic.host/q4CmAq.jpg',
'https://img.nickpic.host/q4Cx55.jpg',
'https://img.nickpic.host/q4CBMP.jpg',
'https://img.nickpic.host/q4CssF.jpg',
'https://img.nickpic.host/q4CbkM.jpg',
'https://img.nickpic.host/q4C3Qe.jpg',
'https://img.nickpic.host/q4CFVX.jpg',
'https://img.nickpic.host/q4Cjpb.jpg',
'https://img.nickpic.host/q4ClAf.jpg',
'https://img.nickpic.host/q4C576.jpg',
'https://img.nickpic.host/q4CSdp.jpg',
'https://img.nickpic.host/q4Cg5Y.jpg',
'https://img.nickpic.host/q4CqRA.jpg',
'https://img.nickpic.host/q4CuJG.jpg',
'https://img.nickpic.host/q4CEsz.jpg',
'https://img.nickpic.host/q4COUc.jpg',
'https://img.nickpic.host/q4ChVW.jpg',
'https://img.nickpic.host/q4CCp1.jpg',
'https://img.nickpic.host/q4CQEj.jpg',
'https://img.nickpic.host/q4CU7J.jpg',
'https://img.nickpic.host/q4CXdn.jpg',
'https://img.nickpic.host/q4CnSs.jpg',
'https://img.nickpic.host/q4CtR2.jpg',
'https://img.nickpic.host/q4CMJQ.jpg',
'https://img.nickpic.host/q4C4UN.jpg',
'https://img.nickpic.host/q4C13x.jpg',
'https://img.nickpic.host/q4CDfO.jpg',
'https://img.nickpic.host/q4Czvm.jpg',
'https://img.nickpic.host/q4C7E8.jpg',
'https://img.nickpic.host/q4CKdd.jpg',
'https://img.nickpic.host/q4C88q.jpg',
'https://img.nickpic.host/q4CHSD.jpg',
'https://img.nickpic.host/q4CN15.jpg',
'https://img.nickpic.host/q4CVJP.jpg',
'https://img.nickpic.host/q4C03M.jpg',
'https://img.nickpic.host/q4C2XF.jpg',
'https://img.nickpic.host/q4C9fe.jpg',
'https://img.nickpic.host/q4CkvX.jpg',
'https://img.nickpic.host/q4CJOb.jpg',
'https://img.nickpic.host/q4CL8f.jpg',
'https://img.nickpic.host/q4CPy6.jpg',
'https://img.nickpic.host/q4CWcp.jpg',
'https://img.nickpic.host/q4CdLA.jpg',
'https://img.nickpic.host/q4CZ1Y.jpg',
'https://img.nickpic.host/q4QIXz.jpg',
'https://img.nickpic.host/q4QGFG.jpg',
'https://img.nickpic.host/q4Qm0c.jpg',
'https://img.nickpic.host/q4QpvW.jpg',
'https://img.nickpic.host/q4QvO1.jpg',
'https://img.nickpic.host/q4QByJ.jpg',
'https://img.nickpic.host/q4QxKj.jpg',
'https://img.nickpic.host/q4Qrcn.jpg',
'https://img.nickpic.host/q4Qs4s.jpg',
'https://img.nickpic.host/q4Q3L2.jpg',
'https://img.nickpic.host/q4Qjix.jpg',
'https://img.nickpic.host/q4QaFQ.jpg',
'https://img.nickpic.host/q4Ql0N.jpg',
'https://img.nickpic.host/q4QSxO.jpg',
'https://img.nickpic.host/q4Qchm.jpg',
'https://img.nickpic.host/q4QgK8.jpg',
'https://img.nickpic.host/q4QuGq.jpg',
'https://img.nickpic.host/q4QAcd.jpg',
'https://img.nickpic.host/q4QE4D.jpg',
'https://img.nickpic.host/q4QOP5.jpg',
'https://img.nickpic.host/q4Q6FP.jpg',
'https://img.nickpic.host/q4QQ2F.jpg',
'https://img.nickpic.host/q4QCiM.jpg',
'https://img.nickpic.host/q4QihX.jpg',
'https://img.nickpic.host/q4QXxe.jpg',
'https://img.nickpic.host/q4QnYb.jpg',
'https://img.nickpic.host/q4QMGf.jpg',
'https://img.nickpic.host/q4QRg6.jpg',
'https://img.nickpic.host/q4Q1Dp.jpg',
'https://img.nickpic.host/q4QznG.jpg',
'https://img.nickpic.host/q4QwaA.jpg',
'https://img.nickpic.host/q4Q4PY.jpg',
'https://img.nickpic.host/q4QKBc.jpg',
'https://img.nickpic.host/q4Q72z.jpg',
'https://img.nickpic.host/q4QYhW.jpg',
'https://img.nickpic.host/q4QHY1.jpg',
'https://img.nickpic.host/q4QVIj.jpg',
'https://img.nickpic.host/q4QfgJ.jpg',
'https://img.nickpic.host/q4Q0Dn.jpg',
'https://img.nickpic.host/q4Q2Ts.jpg',
'https://img.nickpic.host/q4Qea2.jpg',
'https://img.nickpic.host/q4QknQ.jpg',
'https://img.nickpic.host/q4QPBN.jpg',
'https://img.nickpic.host/q4QT6O.jpg',
'https://img.nickpic.host/q4QJ9x.jpg',
'https://img.nickpic.host/q4QWHm.jpg',
'https://img.nickpic.host/q4QdI8.jpg',
'https://img.nickpic.host/q4UGDd.jpg',
'https://img.nickpic.host/q4Qyqq.jpg',
'https://img.nickpic.host/q4UITD.jpg',
'https://img.nickpic.host/q4Uoj5.jpg',
'https://img.nickpic.host/q4UpnP.jpg',
'https://img.nickpic.host/q4UBbF.jpg',
'https://img.nickpic.host/q4Uv9M.jpg',
'https://img.nickpic.host/q4Ub6e.jpg',
'https://img.nickpic.host/q4UrHX.jpg',
'https://img.nickpic.host/q4U3mb.jpg',
'https://img.nickpic.host/q4Uaw6.jpg',
'https://img.nickpic.host/q4UFqf.jpg',
'https://img.nickpic.host/q4UjWp.jpg',
'https://img.nickpic.host/q4U5jY.jpg',
'https://img.nickpic.host/q4UStA.jpg',
'https://img.nickpic.host/q4Uqbz.jpg',
'https://img.nickpic.host/q4UceG.jpg',
'https://img.nickpic.host/q4UuCc.jpg',
'https://img.nickpic.host/q4UAHW.jpg',
'https://img.nickpic.host/q4UOm1.jpg',
'https://img.nickpic.host/q4Uhuj.jpg',
'https://img.nickpic.host/q4U6wJ.jpg',
'https://img.nickpic.host/q4UCWn.jpg',
'https://img.nickpic.host/q4UUls.jpg',
'https://img.nickpic.host/q4UXt2.jpg',
'https://img.nickpic.host/q4UieQ.jpg',
'https://img.nickpic.host/q4Utrx.jpg',
'https://img.nickpic.host/q4UMCN.jpg',
'https://img.nickpic.host/q4URNO.jpg',
'https://img.nickpic.host/q4U4om.jpg',
'https://img.nickpic.host/q4UDu8.jpg',
'https://img.nickpic.host/q4UzWd.jpg',
'https://img.nickpic.host/q4Uwzq.jpg',
'https://img.nickpic.host/q4U8lD.jpg',
'https://img.nickpic.host/q4UKM5.jpg',
'https://img.nickpic.host/q4UYeP.jpg',
'https://img.nickpic.host/q4UVQF.jpg',
'https://img.nickpic.host/q4UNrM.jpg',
'https://img.nickpic.host/q4UfNe.jpg',
'https://img.nickpic.host/q4U2oX.jpg',
'https://img.nickpic.host/q4U9Ab.jpg',
'https://img.nickpic.host/q4UkZ6.jpg',
'https://img.nickpic.host/q4Uezf.jpg',
'https://img.nickpic.host/q4UL5p.jpg',
'https://img.nickpic.host/q4UTkA.jpg',
'https://img.nickpic.host/q4UPMY.jpg',
'https://img.nickpic.host/q4UdQz.jpg',
'https://img.nickpic.host/q4UZsG.jpg',
'https://img.nickpic.host/q4UyVc.jpg',
'https://img.nickpic.host/q4XmA1.jpg',
'https://img.nickpic.host/q4XIoW.jpg',
'https://img.nickpic.host/q4XpZJ.jpg',
'https://img.nickpic.host/q4Xo7j.jpg',
'https://img.nickpic.host/q4Xx5n.jpg',
'https://img.nickpic.host/q4Xbk2.jpg',
'https://img.nickpic.host/q4XBRs.jpg',
'https://img.nickpic.host/q4X3Ux.jpg',
'https://img.nickpic.host/q4XssQ.jpg',
'https://img.nickpic.host/q4XFVN.jpg',
'https://img.nickpic.host/q4XlEm.jpg',
'https://img.nickpic.host/q4XjpO.jpg',
'https://img.nickpic.host/q4XSdq.jpg',
'https://img.nickpic.host/q4X578.jpg',
'https://img.nickpic.host/q4Xg5d.jpg',
'https://img.nickpic.host/q4XqRD.jpg',
'https://img.nickpic.host/q4XuJ5.jpg',
'https://img.nickpic.host/q4XOUM.jpg',
'https://img.nickpic.host/q4XEsP.jpg',
'https://img.nickpic.host/q4XhfF.jpg',
'https://img.nickpic.host/q4XCpe.jpg',
'https://img.nickpic.host/q4XU8b.jpg',
'https://img.nickpic.host/q4XQEX.jpg',
'https://img.nickpic.host/q4XXdf.jpg',
'https://img.nickpic.host/q4XnS6.jpg',
'https://img.nickpic.host/q4Xt1p.jpg',
'https://img.nickpic.host/q4X13A.jpg',
'https://img.nickpic.host/q4XMJY.jpg',
'https://img.nickpic.host/q4X4XG.jpg',
'https://img.nickpic.host/q4XDfz.jpg',
'https://img.nickpic.host/q4X7EW.jpg',
'https://img.nickpic.host/q4Xzvc.jpg',
'https://img.nickpic.host/q4X881.jpg',
'https://img.nickpic.host/q4XKyj.jpg',
'https://img.nickpic.host/q4XHSJ.jpg',
'https://img.nickpic.host/q4XN1n.jpg',
'https://img.nickpic.host/q4XVLs.jpg',
'https://img.nickpic.host/q4X032.jpg',
'https://img.nickpic.host/q4X2XQ.jpg',
'https://img.nickpic.host/q4X90x.jpg',
'https://img.nickpic.host/q4XkvN.jpg',
'https://img.nickpic.host/q4XJOO.jpg',
'https://img.nickpic.host/q4XLKm.jpg',
'https://img.nickpic.host/q4XPy8.jpg',
'https://img.nickpic.host/q4XWcq.jpg',
'https://img.nickpic.host/q4XZ1d.jpg',
'https://img.nickpic.host/q4XdLD.jpg',
'https://img.nickpic.host/q4iGF5.jpg',
'https://img.nickpic.host/q4iIXP.jpg',
'https://img.nickpic.host/q4im0M.jpg',
'https://img.nickpic.host/q4ipxF.jpg',
'https://img.nickpic.host/q4ibGb.jpg',
'https://img.nickpic.host/q4ixKX.jpg',
'https://img.nickpic.host/q4ivOe.jpg',
'https://img.nickpic.host/q4ircf.jpg',
'https://img.nickpic.host/q4is46.jpg',
'https://img.nickpic.host/q4iaFY.jpg',
'https://img.nickpic.host/q4i3Pp.jpg',
'https://img.nickpic.host/q4ijiA.jpg',
'https://img.nickpic.host/q4il2G.jpg',
'https://img.nickpic.host/q4iSxz.jpg',
'https://img.nickpic.host/q4ichc.jpg',
'https://img.nickpic.host/q4igKW.jpg',
'https://img.nickpic.host/q4iuG1.jpg',
'https://img.nickpic.host/q4iAgj.jpg',
'https://img.nickpic.host/q4iOPn.jpg',
'https://img.nickpic.host/q4iQ2Q.jpg',
'https://img.nickpic.host/q4iE4J.jpg',
'https://img.nickpic.host/q4i6as.jpg',
'https://img.nickpic.host/q4iCi2.jpg',
'https://img.nickpic.host/q4iXBx.jpg',
'https://img.nickpic.host/q4iihN.jpg',
'https://img.nickpic.host/q4iRg8.jpg',
'https://img.nickpic.host/q4inYO.jpg',
'https://img.nickpic.host/q4iMIm.jpg',
'https://img.nickpic.host/q4iwaD.jpg',
'https://img.nickpic.host/q4i1Dq.jpg',
'https://img.nickpic.host/q4i4Pd.jpg',
'https://img.nickpic.host/q4izn5.jpg',
'https://img.nickpic.host/q4i72P.jpg',
'https://img.nickpic.host/q4iKBM.jpg',
'https://img.nickpic.host/q4iHYe.jpg',
'https://img.nickpic.host/q4iY6F.jpg',
'https://img.nickpic.host/q4ifqb.jpg',
'https://img.nickpic.host/q4iVIX.jpg',
'https://img.nickpic.host/q4i0Df.jpg',
'https://img.nickpic.host/q4i2T6.jpg',
'https://img.nickpic.host/q4iejp.jpg',
'https://img.nickpic.host/q4iJ9A.jpg',
'https://img.nickpic.host/q4iknY.jpg',
'https://img.nickpic.host/q4iT6z.jpg',
'https://img.nickpic.host/q4iWHc.jpg',
'https://img.nickpic.host/q4iPbG.jpg',
'https://img.nickpic.host/q4idIW.jpg',
'https://img.nickpic.host/q4iyq1.jpg',
'https://img.nickpic.host/q4nITJ.jpg',
'https://img.nickpic.host/q4nGwj.jpg',
'https://img.nickpic.host/q4nojn.jpg',
'https://img.nickpic.host/q4npts.jpg',
'https://img.nickpic.host/q4nv92.jpg',
'https://img.nickpic.host/q4nbCx.jpg',
'https://img.nickpic.host/q4nBbQ.jpg',
'https://img.nickpic.host/q4nrHN.jpg',
'https://img.nickpic.host/q4n3mO.jpg',
'https://img.nickpic.host/q4nFum.jpg',
'https://img.nickpic.host/q4njWq.jpg',
'https://img.nickpic.host/q4naw8.jpg',
'https://img.nickpic.host/q4n5jd.jpg',
'https://img.nickpic.host/q4nStD.jpg',
'https://img.nickpic.host/q4nce5.jpg',
'https://img.nickpic.host/q4nuCM.jpg',
'https://img.nickpic.host/q4nqbP.jpg',
'https://img.nickpic.host/q4nANF.jpg',
'https://img.nickpic.host/q4nOme.jpg',
'https://img.nickpic.host/q4n6zb.jpg',
'https://img.nickpic.host/q4nhuX.jpg',
'https://img.nickpic.host/q4nCWf.jpg',
'https://img.nickpic.host/q4nUl6.jpg',
'https://img.nickpic.host/q4nXMp.jpg',
'https://img.nickpic.host/q4ntrA.jpg',
'https://img.nickpic.host/q4nieY.jpg',
'https://img.nickpic.host/q4nMQG.jpg',
'https://img.nickpic.host/q4nRNz.jpg',
'https://img.nickpic.host/q4n4oc.jpg',
'https://img.nickpic.host/q4nwz1.jpg',
'https://img.nickpic.host/q4nDuW.jpg',
'https://img.nickpic.host/q4nzZj.jpg',
'https://img.nickpic.host/q4n8lJ.jpg']
let tolo = loves[Math.floor(Math.random() * loves.length)]
loveru = await getBuffer(tolo)
const decirl =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const frasel = decirl[Math.floor(Math.random() * decirl.length)]
cnf.sendMessage(from, loveru, image, { caption: frasel, quoted: mek })
addFilter(from)
break

case prefix+'hentai':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const hent = ['https://images2.imgbox.com/0b/62/3PiDw6CW_o.jpg','https://images2.imgbox.com/f4/79/tBKvMHs7_o.jpg','https://images2.imgbox.com/1a/6f/8NMDyhkk_o.jpg','https://images2.imgbox.com/64/af/A54emmf3_o.jpg','https://images2.imgbox.com/6c/c2/N5I384Bc_o.jpg','https://images2.imgbox.com/07/9f/XUcITnvd_o.jpg','https://images2.imgbox.com/96/a8/2CleHt1X_o.jpg','https://images2.imgbox.com/95/99/u69XjEak_o.jpg','https://images2.imgbox.com/b9/bd/RPGShgVM_o.jpg','https://images2.imgbox.com/a4/53/II5QsMD0_o.jpg','https://images2.imgbox.com/2f/2d/JQQXdRPv_o.jpg','https://images2.imgbox.com/5e/c4/dVgAclFs_o.jpg','https://images2.imgbox.com/ee/0a/LjLoghgz_o.jpg','https://images2.imgbox.com/e8/c1/FctytgJR_o.jpg','https://images2.imgbox.com/ee/b1/mInfzeL8_o.jpg','https://images2.imgbox.com/4c/10/lgZwBZoV_o.jpg','https://images2.imgbox.com/67/ba/9pJ7EtoU_o.jpg','https://images2.imgbox.com/15/54/iqiScVta_o.jpg','https://images2.imgbox.com/8f/9c/G7dYdWUJ_o.jpg','https://images2.imgbox.com/c9/af/gXcVnYum_o.jpg','https://images2.imgbox.com/a2/24/qWKYPY0B_o.jpg','https://images2.imgbox.com/2b/fc/1DD5qjZA_o.jpg','https://images2.imgbox.com/fd/8b/dwxaEOrH_o.jpg','https://images2.imgbox.com/88/dd/jLZ9YFe4_o.jpg','https://images2.imgbox.com/26/ca/LzrmkXfZ_o.jpg','https://images2.imgbox.com/f9/07/dwJGLVpr_o.jpg','https://images2.imgbox.com/f1/0a/PFP6KEqf_o.jpg','https://images2.imgbox.com/ff/cf/Ng0HRMUZ_o.jpg','https://images2.imgbox.com/89/3c/rvWlINci_o.jpg','https://images2.imgbox.com/5c/50/tcF8N0yc_o.jpg','https://images2.imgbox.com/b9/90/Ql6KIyBr_o.jpg','https://images2.imgbox.com/c9/ff/5XUiLxMi_o.jpg','https://images2.imgbox.com/5d/60/pwBtwdnm_o.jpg','https://images2.imgbox.com/78/df/9L1rx8l3_o.jpg','https://images2.imgbox.com/00/2c/oTCRpBWX_o.jpg','https://images2.imgbox.com/60/9e/74vKrAwd_o.jpg','https://images2.imgbox.com/7e/9c/jM5TZKtk_o.jpg','https://images2.imgbox.com/10/b3/YBwC2XOD_o.jpg','https://images2.imgbox.com/11/91/VtHknp6D_o.jpg','https://images2.imgbox.com/7c/e4/p1bHYDSf_o.jpg','https://images2.imgbox.com/c8/6c/00HOmHdO_o.jpg','https://images2.imgbox.com/fa/53/XxM7FeTx_o.jpg','https://images2.imgbox.com/40/41/m3PNOzU2_o.jpg','https://images2.imgbox.com/13/a0/KLGTAqvu_o.jpg','https://images2.imgbox.com/29/af/PMt3tJkW_o.jpg','https://images2.imgbox.com/5f/7e/0FEQXkJI_o.jpg','https://images2.imgbox.com/fb/b0/5TAWWu5X_o.jpg','https://images2.imgbox.com/ef/f4/IohvYvt1_o.jpg','https://images2.imgbox.com/db/bd/1D9kp7ZK_o.jpg','https://images2.imgbox.com/ee/5e/hD7LEQj2_o.jpg','https://images2.imgbox.com/df/7a/4MtqgEn4_o.jpg','https://images2.imgbox.com/3e/06/GLQsbJe3_o.jpg','https://images2.imgbox.com/80/e0/8s5ezZsz_o.jpg','https://images2.imgbox.com/ca/5e/eodv8lnU_o.jpg','https://images2.imgbox.com/17/20/Xp2aotS5_o.jpg','https://images2.imgbox.com/e3/a7/nssoWrU7_o.jpg','https://images2.imgbox.com/f2/a4/Ye9exCTr_o.jpg','https://images2.imgbox.com/bc/1f/pt8nQEa3_o.jpg','https://images2.imgbox.com/be/70/fhEq2N0J_o.jpg','https://images2.imgbox.com/15/4d/CacLxcr8_o.jpg','https://images2.imgbox.com/cc/c1/rBIzwVtD_o.jpg','https://images2.imgbox.com/4e/8a/Gq1QzZlo_o.jpg','https://images2.imgbox.com/71/e8/ovRlUOLi_o.jpg','https://images2.imgbox.com/82/bd/ut1PUm7Y_o.jpg','https://images2.imgbox.com/b9/12/oADHIuFc_o.jpg','https://images2.imgbox.com/80/b6/5Qx2hHwu_o.jpg','https://images2.imgbox.com/84/11/SoqiByfa_o.jpg','https://images2.imgbox.com/11/b8/EHtUhwj9_o.jpg','https://images2.imgbox.com/9c/55/j4JBEZ4i_o.jpg','https://images2.imgbox.com/68/5e/n7o2JqI6_o.jpg','https://images2.imgbox.com/3f/c0/epQ5tGY8_o.jpg','https://images2.imgbox.com/22/9b/4VuTcngY_o.jpg','https://images2.imgbox.com/09/3e/hTWGsSkf_o.jpg','https://images2.imgbox.com/56/03/Xdwbcit5_o.jpg','https://images2.imgbox.com/82/99/X1ZMhCiW_o.jpg','https://images2.imgbox.com/12/d6/bp83AKQ5_o.jpg','https://images2.imgbox.com/e4/16/qWLwB8dc_o.jpg','https://images2.imgbox.com/5a/83/7HM5bY4Q_o.jpg','https://images2.imgbox.com/0b/ed/pRGDmEIj_o.jpg','https://images2.imgbox.com/a6/f9/V2xzm21x_o.jpg','https://images2.imgbox.com/46/20/FgCdimVd_o.jpg','https://images2.imgbox.com/8b/3e/DiBiVYYs_o.jpg','https://images2.imgbox.com/0d/8c/G15eQVQL_o.jpg','https://images2.imgbox.com/09/64/wy3aR6jc_o.jpg','https://images2.imgbox.com/9c/3d/ufAHvgYh_o.jpg','https://images2.imgbox.com/9a/8e/Ms1NY3BU_o.jpg','https://images2.imgbox.com/4f/9f/8nx3t5zI_o.jpg','https://images2.imgbox.com/4e/5f/mx8pyEjA_o.jpg','https://images2.imgbox.com/2e/c4/Eslu5fMh_o.jpg','https://images2.imgbox.com/09/40/biK7G6TW_o.jpg','https://images2.imgbox.com/08/e2/imsv1YSu_o.jpg','https://images2.imgbox.com/d9/86/mi1VZ6mj_o.jpg','https://images2.imgbox.com/e3/5c/zstpuJsZ_o.jpg','https://images2.imgbox.com/0c/d8/CRIYjQlZ_o.jpg','https://images2.imgbox.com/ef/f2/A7sFj38F_o.jpg','https://images2.imgbox.com/e2/66/9aFyeiYU_o.jpg','https://images2.imgbox.com/6c/ac/chDF7oOb_o.jpg','https://images2.imgbox.com/d7/58/iaMND9oJ_o.jpg','https://images2.imgbox.com/9e/23/QNMC1HBP_o.jpg','https://images2.imgbox.com/de/97/KZD0W2cc_o.jpg','https://images2.imgbox.com/e7/95/aancG07o_o.jpg','https://images2.imgbox.com/42/f3/dYCx1JKy_o.jpg','https://images2.imgbox.com/4e/07/OAles1tJ_o.jpg','https://images2.imgbox.com/94/70/aZFgezYi_o.jpg','https://images2.imgbox.com/c8/29/tIZP0EA0_o.jpg','https://images2.imgbox.com/ff/76/1DccxnjB_o.jpg','https://images2.imgbox.com/ec/35/AGwJ3bBq_o.jpg','https://images2.imgbox.com/04/cc/9PD7fpVR_o.jpg','https://images2.imgbox.com/47/58/LFY3GF5U_o.jpg','https://images2.imgbox.com/c9/ef/q5MmoHz7_o.jpg','https://images2.imgbox.com/55/4f/qpphsAkg_o.jpg','https://images2.imgbox.com/2c/84/m1kP1pZ1_o.jpg','https://images2.imgbox.com/48/84/2WGnsGEI_o.jpg','https://images2.imgbox.com/e5/d4/yccWnHlz_o.jpg','https://images2.imgbox.com/3f/44/uf1i3BWO_o.jpg','https://images2.imgbox.com/1c/38/JzDx39xd_o.jpg','https://images2.imgbox.com/dc/53/a6iB5kL6_o.jpg','https://images2.imgbox.com/ba/aa/aMvBnwyD_o.jpg','https://images2.imgbox.com/37/cc/uQRRKrwx_o.jpg','https://images2.imgbox.com/b0/9c/sD0vSHQe_o.jpg','https://images2.imgbox.com/ea/ef/RToYLvjW_o.jpg','https://images2.imgbox.com/14/2b/ha2fCCpc_o.jpg','https://images2.imgbox.com/4c/cc/na0GPJOW_o.jpg','https://images2.imgbox.com/99/83/bCOQVUgK_o.jpg','https://images2.imgbox.com/15/ea/kxthnpaN_o.jpg','https://images2.imgbox.com/48/88/s5soZ7EV_o.jpg','https://images2.imgbox.com/b4/8e/NhNfsVZ5_o.jpg','https://images2.imgbox.com/dd/d6/Q7MkbjTp_o.jpg','https://images2.imgbox.com/88/95/AjPGr5fp_o.jpg','https://images2.imgbox.com/5a/69/eiEMzI6L_o.jpg','https://images2.imgbox.com/6f/56/GpKaHSZ4_o.jpg','https://images2.imgbox.com/26/9b/Nn1z7DHt_o.jpg','https://images2.imgbox.com/51/41/ZAb2ap7R_o.jpg','https://images2.imgbox.com/3f/a0/DB7Dw4bv_o.jpg','https://images2.imgbox.com/3f/01/0YVTX2V8_o.jpg','https://images2.imgbox.com/f8/7d/DX4tDz1X_o.jpg','https://images2.imgbox.com/94/58/JSJLdSNK_o.jpg','https://images2.imgbox.com/e6/9c/gtp455JX_o.jpg','https://images2.imgbox.com/d3/ec/nqIsXCos_o.jpg','https://images2.imgbox.com/a3/77/KNEUxfzw_o.jpg','https://images2.imgbox.com/ea/2e/bbg4LHMh_o.jpg','https://images2.imgbox.com/d6/cb/fYlgemZV_o.jpg','https://images2.imgbox.com/e8/af/jZIZauQM_o.jpg','https://images2.imgbox.com/50/8b/73fMozxo_o.jpg','https://images2.imgbox.com/98/60/f5NbMEer_o.jpg','https://images2.imgbox.com/5c/2e/RFZGRkhp_o.jpg','https://images2.imgbox.com/53/31/aZJGf1xm_o.jpg','https://images2.imgbox.com/9d/f2/nMRDLPMV_o.jpg','https://images2.imgbox.com/db/eb/r4gFKhWR_o.jpg','https://images2.imgbox.com/e5/f1/0vuQ2t3s_o.jpg','https://images2.imgbox.com/8a/d9/7KWq4flU_o.jpg','https://images2.imgbox.com/2e/42/fDCiEGO0_o.jpg','https://images2.imgbox.com/83/f1/xrxBCmZ4_o.jpg','https://images2.imgbox.com/07/14/48ddJM6N_o.jpg','https://images2.imgbox.com/b8/c1/pOPQyyUF_o.jpg','https://images2.imgbox.com/cb/22/RjmJRrxt_o.jpg','https://images2.imgbox.com/18/96/dmKFcezc_o.jpg','https://images2.imgbox.com/a3/a5/S6EzBmIe_o.jpg','https://images2.imgbox.com/4e/20/UXwxzTb7_o.jpg','https://images2.imgbox.com/49/ab/lUPkGj4d_o.jpg','https://images2.imgbox.com/9c/cd/LsjP8RPJ_o.jpg','https://images2.imgbox.com/a1/4d/PWhIBsCC_o.jpg','https://images2.imgbox.com/4a/94/erOjNTPA_o.jpg','https://images2.imgbox.com/43/02/lYr8qZsv_o.jpg','https://images2.imgbox.com/ab/eb/DKDoLId0_o.jpg','https://images2.imgbox.com/85/ab/1W4HF4gv_o.jpg','https://images2.imgbox.com/21/1f/hUb0diqj_o.jpg','https://images2.imgbox.com/a6/e8/EoxEf0vM_o.jpg','https://images2.imgbox.com/d2/c3/LuYbuL9A_o.jpg','https://images2.imgbox.com/68/41/8UYOvl4t_o.jpg','https://images2.imgbox.com/96/f9/ixz0tCeB_o.jpg','https://images2.imgbox.com/32/bf/0IThNmh7_o.jpg','https://images2.imgbox.com/45/f3/9jgUb1jA_o.jpg','https://images2.imgbox.com/da/ce/HmEr5ZbT_o.jpg','https://images2.imgbox.com/8d/00/w25YgIlg_o.jpg','https://images2.imgbox.com/6b/46/VlwNJC6R_o.jpg','https://images2.imgbox.com/23/3a/7ImVMDWk_o.jpg','https://images2.imgbox.com/00/27/EubMrRQx_o.jpg','https://images2.imgbox.com/17/fb/4kCyeAQx_o.jpg','https://images2.imgbox.com/30/5d/qmUtLZNW_o.jpg','https://images2.imgbox.com/d7/12/tjW5bPrT_o.jpg','https://images2.imgbox.com/f8/0e/ffEXKkrI_o.jpg','https://images2.imgbox.com/8e/bd/I8a9UJYN_o.jpg','https://images2.imgbox.com/2b/9e/e8tlN7oa_o.jpg','https://images2.imgbox.com/6b/b7/AKLjFZdA_o.jpg','https://images2.imgbox.com/8d/58/l6tu4ARk_o.jpg','https://images2.imgbox.com/00/4a/cqSjseHs_o.jpg','https://images2.imgbox.com/17/49/vbk238cr_o.jpg','https://images2.imgbox.com/4b/5a/AEOEq3UW_o.jpg','https://images2.imgbox.com/66/3c/wG78jg7B_o.jpg','https://images2.imgbox.com/da/fe/AtemJuOI_o.jpg','https://images2.imgbox.com/5a/83/qroredTT_o.jpg','https://images2.imgbox.com/ce/08/bcBAM9rW_o.jpg','https://images2.imgbox.com/1e/3f/nvlsyJQ4_o.jpg','https://images2.imgbox.com/ad/24/mz9CCnoC_o.jpg','https://images2.imgbox.com/16/08/engoUSYD_o.jpg','https://images2.imgbox.com/8e/26/VqeQvVKI_o.jpg','https://images2.imgbox.com/5c/45/i8L46WBC_o.jpg','https://images2.imgbox.com/45/8d/krQkky6j_o.jpg','https://images2.imgbox.com/29/3d/yX3uq5NG_o.jpg',
	      'https://images2.imgbox.com/d0/05/TCNuiGtt_o.jpg','https://images2.imgbox.com/9d/68/a698eVsl_o.jpg','https://images2.imgbox.com/07/5e/B4ikejMk_o.jpg','https://images2.imgbox.com/c4/7d/Qa5ETDYD_o.jpg','https://images2.imgbox.com/12/9f/3g0RfKTb_o.jpg','https://images2.imgbox.com/d6/9a/sZYry6Al_o.jpg','https://images2.imgbox.com/0c/91/u2bFQkqX_o.jpg','https://images2.imgbox.com/d1/06/5a7MHKa9_o.jpg','https://images2.imgbox.com/e7/32/aJ9yJxlg_o.jpg','https://images2.imgbox.com/ba/84/X1bEhXyb_o.jpg','https://images2.imgbox.com/55/23/6niVNZk1_o.jpg','https://images2.imgbox.com/e2/ac/QpHPJxqW_o.jpg','https://images2.imgbox.com/ea/d4/iPmzxQhU_o.jpg','https://images2.imgbox.com/11/4b/24RsoJHn_o.jpg','https://images2.imgbox.com/0c/3b/51KED4lB_o.jpg','https://images2.imgbox.com/a4/b0/xpJOIOzH_o.jpg','https://images2.imgbox.com/aa/90/c0UH1xJB_o.jpg','https://images2.imgbox.com/fc/49/84QkhfaM_o.jpg','https://images2.imgbox.com/19/a0/RZzm13dC_o.jpg','https://images2.imgbox.com/76/d0/v2i7uWHL_o.jpg','https://images2.imgbox.com/4e/1b/xAq8lYj9_o.jpg','https://images2.imgbox.com/48/c9/2nBjBI7O_o.jpg','https://images2.imgbox.com/99/bf/fTPOw7Zd_o.jpg','https://images2.imgbox.com/81/c8/plOolvKJ_o.jpg','https://images2.imgbox.com/68/26/unAo8WhV_o.jpg','https://images2.imgbox.com/d4/29/9yi9f1w9_o.jpg','https://images2.imgbox.com/91/8a/BO7XU0tA_o.jpg','https://images2.imgbox.com/19/78/phKf3WsR_o.jpg','https://images2.imgbox.com/4c/9a/VnPVI9Jd_o.jpg','https://images2.imgbox.com/4e/67/3dZNBItg_o.jpg','https://images2.imgbox.com/63/c3/JzO2Gnrj_o.jpg','https://images2.imgbox.com/a7/04/xeS6Zydz_o.jpg','https://images2.imgbox.com/4f/9c/LgSrkmlT_o.jpg','https://images2.imgbox.com/d5/24/isMY2edH_o.jpg','https://images2.imgbox.com/a3/a3/y3CBr8Ht_o.jpg','https://images2.imgbox.com/d5/c8/ihgCZ6Px_o.jpg','https://images2.imgbox.com/48/9c/kkr1BEAC_o.jpg','https://images2.imgbox.com/a3/fa/QRLuhqjB_o.jpg','https://images2.imgbox.com/d0/b4/Nw9PHsa6_o.jpg','https://images2.imgbox.com/db/0b/mzl8wx0Z_o.jpg','https://images2.imgbox.com/f7/b0/VeKQWegW_o.jpg','https://images2.imgbox.com/7f/d1/6BKT1OnS_o.jpg','https://images2.imgbox.com/1f/43/AUDR6rC0_o.jpg','https://images2.imgbox.com/46/99/bO2B8QrQ_o.jpg','https://images2.imgbox.com/5b/22/PBzouW11_o.jpg','https://images2.imgbox.com/82/25/wdYBA8vi_o.jpg','https://images2.imgbox.com/43/a7/8LhABVoO_o.jpg','https://images2.imgbox.com/17/6c/tpDWzZW0_o.jpg','https://images2.imgbox.com/77/a7/wHINSLoH_o.jpg','https://images2.imgbox.com/53/1e/9rdFKR03_o.jpg','https://images2.imgbox.com/34/59/kb983Gih_o.jpg','https://images2.imgbox.com/b6/ef/k7KeDYcb_o.jpg','https://images2.imgbox.com/03/f7/0pfHc7Iv_o.jpg','https://images2.imgbox.com/2a/62/vDSQc3o0_o.jpg','https://images2.imgbox.com/67/0c/9BFngfv3_o.jpg','https://images2.imgbox.com/54/a1/uK9D6Sj0_o.jpg','https://images2.imgbox.com/fe/97/MMmvnIjC_o.jpg','https://images2.imgbox.com/83/08/6z84yGVJ_o.jpg','https://images2.imgbox.com/c0/9c/NOIY6NjZ_o.jpg','https://images2.imgbox.com/f8/73/CcxDzYzc_o.jpg','https://images2.imgbox.com/1c/97/Ga1mgNL1_o.jpg','https://images2.imgbox.com/f5/45/ZSmwI66s_o.jpg','https://images2.imgbox.com/9b/b7/AhBvf6Z1_o.jpg','https://images2.imgbox.com/6b/b2/1C8iYeRo_o.jpg','https://images2.imgbox.com/df/32/hSldvfFn_o.jpg','https://images2.imgbox.com/83/3d/fi7aqhMI_o.jpg','https://images2.imgbox.com/35/2d/qLRXNQor_o.jpg','https://images2.imgbox.com/c6/d1/BIrGDVxD_o.jpg','https://images2.imgbox.com/a1/fc/OTva459B_o.jpg','https://images2.imgbox.com/dd/76/Tppbyffd_o.jpg','https://images2.imgbox.com/14/c3/syUkBRrd_o.jpg','https://images2.imgbox.com/2d/8c/r57B5KjZ_o.jpg','https://images2.imgbox.com/bf/92/NIYD3U6b_o.jpg','https://images2.imgbox.com/eb/0b/TdwjNQam_o.jpg','https://images2.imgbox.com/cb/a8/jUVlkfEC_o.jpg','https://images2.imgbox.com/e0/47/IMY4bdCm_o.jpg','https://images2.imgbox.com/6d/22/UW0rbFbt_o.jpg','https://images2.imgbox.com/82/50/dA9XJTnC_o.jpg','https://images2.imgbox.com/b1/6e/Z9Ve2AOO_o.jpg','https://images2.imgbox.com/33/4a/pqSamg1q_o.jpg','https://images2.imgbox.com/4f/d3/x2eIJ3Mr_o.jpg','https://images2.imgbox.com/38/6b/Rolbt9mA_o.jpg','https://images2.imgbox.com/c7/41/guLJeE7m_o.jpg','https://images2.imgbox.com/48/a4/PwNXC39y_o.jpg','https://images2.imgbox.com/89/ee/FnoSw7W8_o.jpg','https://images2.imgbox.com/40/b7/vvqDxpF2_o.jpg','https://images2.imgbox.com/b3/68/3cHe77F5_o.jpg','https://images2.imgbox.com/d4/c7/nXrsqDwe_o.jpg','https://images2.imgbox.com/aa/1f/cmwGh0X3_o.jpg','https://images2.imgbox.com/67/ce/WEJUzwrh_o.jpg','https://images2.imgbox.com/65/af/pqp5ionR_o.jpg','https://images2.imgbox.com/43/81/GIr3R5B8_o.jpg','https://images2.imgbox.com/aa/55/rFAqeNL4_o.jpg','https://images2.imgbox.com/d5/47/wNNmuFoO_o.jpg','https://images2.imgbox.com/c1/47/hn4DrwYg_o.jpg','https://images2.imgbox.com/2d/6f/iRyhT0kI_o.jpg','https://images2.imgbox.com/95/11/AaIADwqR_o.jpg','https://images2.imgbox.com/5f/71/hMCiMIYN_o.jpg','https://images2.imgbox.com/95/56/pWS95fis_o.jpg','https://images2.imgbox.com/aa/47/2HkfLVUK_o.jpg','https://images2.imgbox.com/34/07/Uj1S7UDr_o.jpg','https://images2.imgbox.com/74/04/PeO14jVv_o.jpg','https://images2.imgbox.com/93/09/J0lgfagu_o.jpg','https://images2.imgbox.com/d8/1b/q0T5n97R_o.jpg','https://images2.imgbox.com/aa/68/e1vMTrmd_o.jpg','https://images2.imgbox.com/70/a3/C8MbHtas_o.jpg','https://images2.imgbox.com/72/41/trtp2Qu7_o.jpg','https://images2.imgbox.com/82/e6/oYgNzKCf_o.jpg','https://images2.imgbox.com/f5/c2/HOvSSnSh_o.jpg','https://images2.imgbox.com/cb/16/wghgw1wd_o.jpg','https://images2.imgbox.com/7b/e5/lOV0qKNw_o.jpg','https://images2.imgbox.com/b5/90/d7XU1HlS_o.jpg','https://images2.imgbox.com/e9/ef/XvfalMUQ_o.jpg','https://images2.imgbox.com/fe/39/crsqivhl_o.jpg','https://images2.imgbox.com/b7/72/RXd1VaR2_o.jpg','https://images2.imgbox.com/94/ec/9cpAig7R_o.jpg','https://images2.imgbox.com/c3/78/YxLRL1c1_o.jpg','https://images2.imgbox.com/78/9b/NjKxUqrF_o.jpg','https://images2.imgbox.com/10/cb/O0ZeKf6y_o.jpg','https://images2.imgbox.com/4f/bb/3lEGuVFo_o.jpg','https://images2.imgbox.com/c5/98/pkDkAJgM_o.jpg','https://images2.imgbox.com/c7/fa/fiRrgZrH_o.jpg','https://images2.imgbox.com/bd/17/IhcmM2JB_o.jpg','https://images2.imgbox.com/c2/b5/tRfevu4w_o.jpg','https://images2.imgbox.com/e9/bd/gh8GxP6d_o.jpg','https://images2.imgbox.com/6f/64/mMcRLsz8_o.jpg','https://images2.imgbox.com/4e/cb/9fM6gceb_o.jpg','https://images2.imgbox.com/19/f2/hVbAFk13_o.jpg','https://images2.imgbox.com/df/02/5n775lhV_o.jpg','https://images2.imgbox.com/df/e4/LvRyj43D_o.jpg','https://images2.imgbox.com/bf/19/qK4rELS2_o.jpg','https://images2.imgbox.com/fd/34/3lQ2LfOA_o.jpg','https://images2.imgbox.com/ae/f2/P2glhygu_o.jpg','https://images2.imgbox.com/69/f9/rbCllM8n_o.jpg','https://images2.imgbox.com/9d/50/kO2UKNJU_o.jpg','https://images2.imgbox.com/52/36/NwekL1A9_o.jpg','https://images2.imgbox.com/92/62/T9L7d3MS_o.jpg','https://images2.imgbox.com/f7/2a/CdwMR3Tx_o.jpg','https://images2.imgbox.com/ee/95/PPWhqgov_o.jpg','https://images2.imgbox.com/5d/95/K3xBPs4V_o.jpg','https://images2.imgbox.com/79/21/jvdm5YQP_o.jpg','https://images2.imgbox.com/a8/03/wtaHAPTa_o.jpg','https://images2.imgbox.com/6d/36/sRQMHFyx_o.jpg','https://images2.imgbox.com/8e/44/A4GBrAOs_o.jpg','https://images2.imgbox.com/95/37/7eXM1JO4_o.jpg','https://images2.imgbox.com/99/c6/vQhgiDr9_o.jpg','https://images2.imgbox.com/72/35/3p4wEtOZ_o.jpg','https://images2.imgbox.com/a4/55/mwpyOhsZ_o.jpg','https://images2.imgbox.com/b2/7e/rrmgwf7E_o.jpg','https://images2.imgbox.com/a4/3e/PydJuaqp_o.jpg','https://images2.imgbox.com/19/56/tnzNZ98R_o.jpg','https://images2.imgbox.com/8e/5f/oE5YPx6x_o.jpg','https://images2.imgbox.com/51/cd/wnkN11FG_o.jpg','https://images2.imgbox.com/04/59/nRpY4pFE_o.jpg','https://images2.imgbox.com/d3/f3/iDnsuVwX_o.jpg','https://images2.imgbox.com/1c/97/jxYvsKXe_o.jpg','https://images2.imgbox.com/d8/b1/nEctZWmd_o.jpg','https://images2.imgbox.com/a9/94/ksXInmuS_o.jpg','https://images2.imgbox.com/61/e9/Omlwz0Mz_o.jpg','https://images2.imgbox.com/68/7b/mGYnIfUk_o.jpg','https://images2.imgbox.com/f7/24/k5pEhrz4_o.jpg','https://images2.imgbox.com/4c/0a/OuPjbIrI_o.jpg','https://images2.imgbox.com/06/7e/cqMIMXIa_o.jpg','https://images2.imgbox.com/90/7e/Y14hz1j4_o.jpg','https://images2.imgbox.com/8e/2c/OnP26upX_o.jpg','https://images2.imgbox.com/bc/fb/0ytI6Sa0_o.jpg','https://images2.imgbox.com/39/07/sss8YkFw_o.jpg','https://images2.imgbox.com/b5/38/JBXSbODW_o.jpg','https://images2.imgbox.com/8c/9e/UsThZJde_o.jpg','https://images2.imgbox.com/e1/02/udvZS5fZ_o.jpg','https://images2.imgbox.com/80/eb/vC31l0m5_o.jpg','https://images2.imgbox.com/81/d0/jfMZpHoo_o.jpg','https://images2.imgbox.com/4e/17/JL1bS0Lh_o.jpg','https://images2.imgbox.com/6e/0b/DKLlOdqp_o.jpg','https://images2.imgbox.com/47/c2/gxpPCXue_o.jpg','https://images2.imgbox.com/55/24/vNFSMeAb_o.jpg','https://images2.imgbox.com/e2/28/uEfEQz3v_o.jpg','https://images2.imgbox.com/7e/de/nB87hNQQ_o.jpg','https://images2.imgbox.com/8f/f9/U40f8V4U_o.jpg','https://images2.imgbox.com/68/a4/QVk1I3XA_o.jpg','https://images2.imgbox.com/17/5c/7T8Ld2Ka_o.jpg','https://images2.imgbox.com/cd/76/af33olhM_o.jpg','https://images2.imgbox.com/26/a9/KHsJ6BvE_o.jpg','https://images2.imgbox.com/da/14/Qg6wL22M_o.jpg','https://images2.imgbox.com/42/74/ajwn1LZw_o.jpg','https://images2.imgbox.com/15/8e/t37vND9I_o.jpg','https://images2.imgbox.com/38/b7/klFXD9LK_o.jpg','https://images2.imgbox.com/b4/ef/bryt1ogH_o.jpg','https://images2.imgbox.com/81/c2/wopNbahA_o.jpg','https://images2.imgbox.com/36/73/F8Yhrxe9_o.jpg','https://images2.imgbox.com/16/c4/6I78GsjU_o.jpg','https://images2.imgbox.com/26/d0/48PV0NPq_o.jpg','https://images2.imgbox.com/17/0b/DebSCLNm_o.jpg','https://images2.imgbox.com/c1/df/XutqopDG_o.jpg','https://images2.imgbox.com/25/c5/19uQgJT9_o.jpg','https://images2.imgbox.com/9f/60/srqYh71g_o.jpg','https://images2.imgbox.com/cf/31/DlkqP3uF_o.jpg','https://images2.imgbox.com/44/3f/jspz6QOv_o.jpg','https://images2.imgbox.com/51/9f/ckWYKV28_o.jpg','https://images2.imgbox.com/48/45/OP1bpoEE_o.jpg',
	      'https://images2.imgbox.com/55/83/JAP9oLAW_o.jpg','https://images2.imgbox.com/fe/ba/c8xnuijT_o.jpg','https://images2.imgbox.com/3f/99/CEFBrbeS_o.jpg','https://images2.imgbox.com/2f/c8/RUoMMbrE_o.jpg','https://images2.imgbox.com/11/19/mIpDozr1_o.jpg','https://images2.imgbox.com/f7/5d/5PzYiTMn_o.jpg','https://images2.imgbox.com/13/52/HjtPILA5_o.jpg','https://images2.imgbox.com/c4/09/EmYaw1fO_o.jpg','https://images2.imgbox.com/f7/e8/5HuSG2sj_o.jpg','https://images2.imgbox.com/c6/fe/NsVv2wM9_o.jpg','https://images2.imgbox.com/3b/da/lSo1kSpX_o.jpg','https://images2.imgbox.com/27/aa/trgFzx1t_o.jpg','https://images2.imgbox.com/cc/ca/WNxUWzI3_o.jpg','https://images2.imgbox.com/3f/3e/wU7cEUti_o.jpg','https://images2.imgbox.com/90/97/8CKVZowR_o.jpg','https://images2.imgbox.com/21/52/h99THdXS_o.jpg','https://images2.imgbox.com/03/52/eaFIb0dm_o.jpg','https://images2.imgbox.com/54/01/1kRw0lX0_o.jpg','https://images2.imgbox.com/b3/04/0yQWslYk_o.jpg','https://images2.imgbox.com/4c/dd/MO5SLSs8_o.jpg','https://images2.imgbox.com/25/11/qHoJ0DdS_o.jpg','https://images2.imgbox.com/8d/b1/R3pSRuFC_o.jpg','https://images2.imgbox.com/b1/1e/OgyM2mzD_o.jpg','https://images2.imgbox.com/c9/2c/vsADzIaU_o.jpg','https://images2.imgbox.com/96/cc/sKazPJzY_o.jpg','https://images2.imgbox.com/32/fe/fBEZNSRP_o.jpg','https://images2.imgbox.com/ea/27/rOlv1tg7_o.jpg','https://images2.imgbox.com/4c/13/TTNXgQZW_o.jpg','https://images2.imgbox.com/6e/f9/a4nudC2D_o.jpg','https://images2.imgbox.com/95/de/O3NPmgzr_o.jpg','https://images2.imgbox.com/69/fa/TWWesjPv_o.jpg','https://images2.imgbox.com/ec/19/cP1UTFyb_o.jpg','https://images2.imgbox.com/4f/a6/rfpQWiC6_o.jpg','https://images2.imgbox.com/32/80/JnHnznF8_o.jpg','https://images2.imgbox.com/c9/f6/OMCr2GFp_o.jpg','https://images2.imgbox.com/fe/a7/VacbcPj5_o.jpg','https://images2.imgbox.com/7b/ff/5sSsgd7g_o.jpg','https://images2.imgbox.com/a0/4d/m7Km8Bdi_o.jpg','https://images2.imgbox.com/25/cf/27lhpMIH_o.jpg','https://images2.imgbox.com/fc/c1/hSLLAsKa_o.jpg','https://images2.imgbox.com/63/ba/X4uOh4t3_o.jpg','https://images2.imgbox.com/12/f4/oYC1wDGu_o.jpg','https://images2.imgbox.com/94/60/jZhjxnwv_o.jpg','https://images2.imgbox.com/ce/54/EceNb9fW_o.jpg','https://images2.imgbox.com/0d/b4/6Gdq20DM_o.jpg','https://images2.imgbox.com/a8/6f/HgxiOvAV_o.jpg','https://images2.imgbox.com/fe/a0/RVyzsv89_o.jpg','https://images2.imgbox.com/89/e9/D0t8UMmP_o.jpg','https://images2.imgbox.com/9a/55/HmbZDFKS_o.jpg','https://images2.imgbox.com/a4/e3/g4OcSL3E_o.jpg','https://images2.imgbox.com/ea/64/AFTPx9A5_o.jpg','https://images2.imgbox.com/01/5e/QI0ezUMP_o.jpg','https://images2.imgbox.com/c2/73/xIX1mdwb_o.jpg','https://images2.imgbox.com/1b/bb/ky5gOhta_o.jpg','https://images2.imgbox.com/93/c2/5Oo93YrE_o.jpg','https://images2.imgbox.com/e8/d4/LnkertmT_o.jpg','https://images2.imgbox.com/01/da/CAumqRzv_o.jpg','https://images2.imgbox.com/37/84/WfKhVBqu_o.jpg','https://images2.imgbox.com/ae/fc/N5oSfv0O_o.jpg','https://images2.imgbox.com/10/3f/8WXOtE81_o.jpg','https://images2.imgbox.com/50/ab/vQKN9Twu_o.jpg','https://images2.imgbox.com/00/43/66xH9GJw_o.jpg','https://images2.imgbox.com/10/79/A5MOoo2f_o.jpg','https://images2.imgbox.com/e4/ee/Eus8ORan_o.jpg','https://images2.imgbox.com/ac/ab/ZAEFH5JK_o.jpg','https://images2.imgbox.com/7b/71/f0vWPSr6_o.jpg','https://images2.imgbox.com/62/a1/fbmVY0VL_o.jpg','https://images2.imgbox.com/46/8f/PO8DuOrc_o.jpg','https://images2.imgbox.com/7f/d9/CYsU0gq0_o.jpg','https://images2.imgbox.com/16/3d/TfcMTFTC_o.jpg','https://images2.imgbox.com/c7/08/8v025W1R_o.jpg','https://images2.imgbox.com/30/1e/NOr9pNLG_o.jpg','https://images2.imgbox.com/4b/51/7XXCo6rq_o.jpg','https://images2.imgbox.com/74/91/3gp0neBb_o.jpg','https://images2.imgbox.com/a9/9d/3KBDTY02_o.jpg','https://images2.imgbox.com/5a/15/d8ZXJWZy_o.jpg','https://images2.imgbox.com/3d/30/H4G6EQHj_o.jpg','https://images2.imgbox.com/22/06/VsTaUGFU_o.jpg','https://images2.imgbox.com/46/ef/mw4IdlLq_o.jpg','https://images2.imgbox.com/de/df/9aliZest_o.jpg','https://images2.imgbox.com/73/53/ezUTUNeH_o.jpg','https://images2.imgbox.com/f8/df/TAcdluBB_o.jpg','https://images2.imgbox.com/8c/41/9vYqrpYO_o.jpg','https://images2.imgbox.com/4e/0a/3GeWaTmI_o.jpg','https://images2.imgbox.com/2b/43/00GC6Ytd_o.jpg','https://images2.imgbox.com/f3/a3/79GAKXTC_o.jpg','https://images2.imgbox.com/60/b2/JPfnlvRT_o.jpg','https://images2.imgbox.com/00/dc/EdRcuW9Y_o.jpg','https://images2.imgbox.com/73/73/7CJ2PX1F_o.jpg','https://images2.imgbox.com/0a/fd/xjGVTSMX_o.jpg','https://images2.imgbox.com/29/9e/BAVEKEfT_o.jpg','https://images2.imgbox.com/d1/cf/OuHAoP6j_o.jpg','https://images2.imgbox.com/36/ba/osQn66Gi_o.jpg','https://images2.imgbox.com/ce/a9/xAsUIXsl_o.jpg','https://images2.imgbox.com/7c/08/P0gtj6rs_o.jpg','https://images2.imgbox.com/25/ec/Xv1xnJnQ_o.jpg','https://images2.imgbox.com/c8/62/VEuIudjg_o.jpg','https://images2.imgbox.com/4c/90/2zsU2feb_o.jpg','https://images2.imgbox.com/51/81/3ejNxrui_o.jpg','https://images2.imgbox.com/a3/5c/Bfk8xw12_o.jpg']
let henta = hent[Math.floor(Math.random() * hent.length)]
hentai = await getBuffer(henta)
const dicho =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const frc = dicho[Math.floor(Math.random() * dicho.length)]
cnf.sendMessage(from, hentai, image, { caption: frc, quoted: mek })
addFilter(from)
break
					
case prefix+'meme':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const memess =['https://images2.imgbox.com/58/a7/pDTArwvo_o.jpg','https://images2.imgbox.com/b2/25/dFm0XuOs_o.jpg','https://images2.imgbox.com/79/13/Xv9JRrNf_o.jpg','https://images2.imgbox.com/2f/b9/6Lab2XYy_o.jpg','https://images2.imgbox.com/02/72/Qphe3Q9O_o.jpg','https://images2.imgbox.com/6c/89/pCe16kg9_o.jpg','https://images2.imgbox.com/c0/93/ZqOzI2kL_o.jpg','https://images2.imgbox.com/cf/de/nPTnouvP_o.jpg','https://images2.imgbox.com/7b/02/BMOYjnYB_o.jpg','https://images2.imgbox.com/d4/56/BSPgtLeR_o.jpg','https://images2.imgbox.com/3f/cd/oY57L08G_o.jpg','https://images2.imgbox.com/22/a6/o1B0q6Zw_o.jpg','https://images2.imgbox.com/57/66/QDQdacUN_o.jpg','https://images2.imgbox.com/e5/a8/eAxvSQPn_o.jpg','https://images2.imgbox.com/c7/74/GlDXvfAD_o.jpg','https://images2.imgbox.com/6d/a9/6tGGlKma_o.jpg','https://images2.imgbox.com/24/e7/GQCQrvW3_o.jpg','https://images2.imgbox.com/46/2d/arVqY5rD_o.jpg','https://images2.imgbox.com/7e/da/tiUG635l_o.jpg','https://images2.imgbox.com/f3/5b/9At6aRra_o.jpg','https://images2.imgbox.com/f9/21/81rjfGfn_o.jpg','https://images2.imgbox.com/58/3a/m5HN1a9q_o.jpg','https://images2.imgbox.com/51/7d/sfJ5MNT2_o.jpg','https://images2.imgbox.com/1b/91/RuuXEfnN_o.jpg','https://images2.imgbox.com/cb/0e/XXjDZ9xo_o.jpg','https://images2.imgbox.com/94/72/Mjd3iNze_o.jpg','https://images2.imgbox.com/55/21/WoUXj0rM_o.jpg','https://images2.imgbox.com/d2/4c/xIXE9Xc7_o.jpg','https://images2.imgbox.com/78/a5/eMLj1qXa_o.jpg','https://images2.imgbox.com/f4/bf/ENhS4GSD_o.jpg','https://images2.imgbox.com/4e/38/zNC8KX78_o.jpg','https://images2.imgbox.com/40/85/92YxL9pj_o.jpg','https://images2.imgbox.com/5b/76/LX7m2uC8_o.jpg','https://images2.imgbox.com/26/e1/LGa4PqOJ_o.jpg','https://images2.imgbox.com/3b/f4/uqU7Yxse_o.jpg','https://images2.imgbox.com/a4/a9/QR66ZII9_o.jpg','https://images2.imgbox.com/ec/35/xEodk122_o.jpg','https://images2.imgbox.com/46/3e/5ElNWmbS_o.jpg','https://images2.imgbox.com/17/df/SqZLlAVZ_o.jpg','https://images2.imgbox.com/16/05/73ELaTg4_o.jpg','https://images2.imgbox.com/88/00/sk1SxBpp_o.jpg','https://images2.imgbox.com/dc/a6/rMjLkauk_o.jpg','https://images2.imgbox.com/9d/2f/oy48zpfb_o.jpg','https://images2.imgbox.com/5d/74/kPwVtl2H_o.jpg','https://images2.imgbox.com/cb/6c/u3ATiVZ3_o.jpg','https://images2.imgbox.com/fe/3b/rqesp6YR_o.jpg','https://images2.imgbox.com/84/8b/OHUeRooQ_o.jpg','https://images2.imgbox.com/31/21/GMYX9mud_o.jpg','https://images2.imgbox.com/b7/01/Ix8C9gUb_o.jpg','https://images2.imgbox.com/43/78/JaB9Vt5t_o.jpg','https://images2.imgbox.com/05/1d/SIDpjtvM_o.jpg','https://images2.imgbox.com/da/ac/2pGXHgr4_o.jpg','https://images2.imgbox.com/bb/08/wWcihaBB_o.jpg','https://images2.imgbox.com/9f/8e/VmDSCPnB_o.jpg','https://images2.imgbox.com/7c/4d/b25OqAAS_o.jpg','https://images2.imgbox.com/bb/1e/8Icdogmw_o.jpg','https://images2.imgbox.com/3e/54/Lc1fx8w1_o.jpg','https://images2.imgbox.com/d9/f2/KYCJc4Yu_o.jpg','https://images2.imgbox.com/52/00/Y1dJRtdO_o.jpg','https://images2.imgbox.com/8e/8e/BxTTQIFf_o.jpg','https://images2.imgbox.com/c4/a6/AtEXTryy_o.jpg','https://images2.imgbox.com/27/15/oWDUapAw_o.jpg','https://images2.imgbox.com/bd/0c/SIEFrHC8_o.jpg','https://images2.imgbox.com/c0/78/Xt5lszIt_o.jpg','https://images2.imgbox.com/bc/e4/Kj8Gr05C_o.jpg','https://images2.imgbox.com/a5/1d/aUI5lD7D_o.jpg','https://images2.imgbox.com/3e/d9/XtOKMxYN_o.jpg','https://images2.imgbox.com/f2/5c/FQier7fk_o.jpg','https://images2.imgbox.com/5f/28/pOoZsRQf_o.jpg','https://images2.imgbox.com/cd/3c/Ovcox2sL_o.jpg','https://images2.imgbox.com/23/c8/QkJtsnQT_o.jpg','https://images2.imgbox.com/fd/3a/XeSh0cQm_o.jpg','https://images2.imgbox.com/be/88/DhFuRQWi_o.jpg','https://images2.imgbox.com/77/8d/EJ3JKVVv_o.jpg','https://images2.imgbox.com/d5/e5/JRrNpmFL_o.jpg','https://images2.imgbox.com/8a/e7/CgCGGoIn_o.jpg','https://images2.imgbox.com/9e/a6/XRJ6mG8h_o.jpg','https://images2.imgbox.com/93/0a/3hvw0lHW_o.jpg','https://images2.imgbox.com/1b/9d/0Yi9aFnl_o.jpg','https://images2.imgbox.com/f7/f7/KHAEKMgr_o.jpg','https://images2.imgbox.com/02/fb/YQKDdmxW_o.jpg','https://images2.imgbox.com/96/65/1AR0RwQG_o.jpg','https://images2.imgbox.com/75/c8/PaCtajZM_o.jpg','https://images2.imgbox.com/b8/7e/olGYQzib_o.jpg','https://images2.imgbox.com/48/c6/afjaffpk_o.jpg','https://images2.imgbox.com/77/a0/KY7SgrcA_o.jpg','https://images2.imgbox.com/e2/77/2vyXFQsy_o.jpg','https://images2.imgbox.com/35/7f/lUmWsX7s_o.jpg','https://images2.imgbox.com/b4/ad/L13NN6Vo_o.jpg','https://images2.imgbox.com/8f/ae/CHkISXVZ_o.jpg','https://images2.imgbox.com/f8/91/BCnU9kMe_o.jpg','https://images2.imgbox.com/c5/65/Q7P0Av4m_o.jpg','https://images2.imgbox.com/30/d7/jXis3KsS_o.jpg','https://images2.imgbox.com/2b/6c/tQ3Kez0s_o.jpg','https://images2.imgbox.com/c1/c8/wb6Lzx7M_o.jpg','https://images2.imgbox.com/25/4b/GwFATqnF_o.jpg','https://images2.imgbox.com/b7/6c/kR5T6t2Y_o.jpg','https://images2.imgbox.com/4c/e1/kqmFHf6Q_o.jpg','https://images2.imgbox.com/04/f0/AZ36tYu3_o.jpg','https://images2.imgbox.com/ed/07/Pz0BILqY_o.jpg','https://images2.imgbox.com/ef/48/AQSTMjyQ_o.jpg','https://images2.imgbox.com/b0/4a/QpZxbskR_o.jpg','https://images2.imgbox.com/0a/7b/7y0tbUCk_o.jpg','https://images2.imgbox.com/05/7d/Rz8TNttz_o.jpg','https://images2.imgbox.com/b7/73/CY7cBs1K_o.jpg','https://images2.imgbox.com/cf/f2/dl6gv5aW_o.jpg','https://images2.imgbox.com/16/e0/l7El4MU4_o.jpg','https://images2.imgbox.com/a1/c0/QHFvT8Dz_o.jpg','https://images2.imgbox.com/11/2f/LewEoLPz_o.jpg','https://images2.imgbox.com/d8/5d/PN1lLH0r_o.jpg','https://images2.imgbox.com/f0/b4/rZQsvfjY_o.jpg','https://images2.imgbox.com/bb/fe/F71uwPmL_o.jpg','https://images2.imgbox.com/27/58/lawCB9M1_o.jpg','https://images2.imgbox.com/59/a3/vwtNLJKR_o.jpg','https://images2.imgbox.com/ad/1a/THqZtQbC_o.jpg','https://images2.imgbox.com/70/b5/AsrB59o5_o.jpg','https://images2.imgbox.com/52/64/qflyj2Kl_o.jpg','https://images2.imgbox.com/51/6d/F7PbJ3m3_o.jpg','https://images2.imgbox.com/b7/aa/bZvGWrWQ_o.jpg','https://images2.imgbox.com/04/14/EROj4xBO_o.jpg','https://images2.imgbox.com/31/1f/8LcYN5GE_o.jpg','https://images2.imgbox.com/ed/20/x5sZYy7O_o.jpg','https://images2.imgbox.com/a1/65/gIB3ytHT_o.jpg','https://images2.imgbox.com/59/4e/pmmh50Ig_o.jpg','https://images2.imgbox.com/77/51/tA0kHiYy_o.jpg','https://images2.imgbox.com/3b/9d/lDaGlcYv_o.jpg','https://images2.imgbox.com/97/d5/61NeCbIe_o.jpg','https://images2.imgbox.com/14/b0/Krks9guu_o.jpg','https://images2.imgbox.com/1e/e7/0Jws6YIX_o.jpg','https://images2.imgbox.com/3a/49/p7AXifWt_o.jpg','https://images2.imgbox.com/e2/ee/uCJ5eUWb_o.jpg','https://images2.imgbox.com/ad/36/pRESLubh_o.jpg','https://images2.imgbox.com/00/40/OlH7GU8L_o.jpg','https://images2.imgbox.com/3f/3b/sQaPJ3no_o.jpg','https://images2.imgbox.com/6b/a6/43cTLFV4_o.jpg','https://images2.imgbox.com/4d/f1/lZekigwL_o.jpg','https://images2.imgbox.com/c5/e2/B2BHDbYI_o.jpg','https://images2.imgbox.com/d9/58/sRtbMXux_o.jpg','https://images2.imgbox.com/ed/a5/0lk0ILT2_o.jpg','https://images2.imgbox.com/75/5c/A5ONH73E_o.jpg','https://images2.imgbox.com/7e/50/YQXC3oAL_o.jpg','https://images2.imgbox.com/7c/c6/5h7RLZ4Q_o.jpg','https://images2.imgbox.com/1b/9e/HHKCa2Fh_o.jpg','https://images2.imgbox.com/0d/c3/FRfGRisu_o.jpg','https://images2.imgbox.com/58/5b/wmnXzjKf_o.jpg','https://images2.imgbox.com/99/84/BPohMs72_o.jpg','https://images2.imgbox.com/11/8a/mYI0E0ms_o.jpg','https://images2.imgbox.com/50/f0/OsDdKkyS_o.jpg','https://images2.imgbox.com/74/f2/DUjmPWBI_o.jpg','https://images2.imgbox.com/42/94/3F1KMSx9_o.jpg','https://images2.imgbox.com/69/4f/VxVUjbbZ_o.jpg','https://images2.imgbox.com/9d/48/sEWEOVnF_o.jpg','https://images2.imgbox.com/b7/4f/JMGtJRNz_o.jpg','https://images2.imgbox.com/10/04/XorCtwTJ_o.jpg','https://images2.imgbox.com/c8/d2/ZUCFZ47R_o.jpg','https://images2.imgbox.com/9d/0f/CivorCGz_o.jpg','https://images2.imgbox.com/81/28/ubC4Lqsz_o.jpg','https://images2.imgbox.com/d5/79/p42MLp7V_o.jpg','https://images2.imgbox.com/40/e2/7rdhjriX_o.jpg','https://images2.imgbox.com/12/1f/nI8g93r9_o.jpg','https://images2.imgbox.com/34/c3/ctDPdQAm_o.jpg','https://images2.imgbox.com/ce/5e/bcpyvkMS_o.jpg','https://images2.imgbox.com/22/a0/dUjQpeNy_o.jpg','https://images2.imgbox.com/01/8c/IQl8T7Ko_o.jpg','https://images2.imgbox.com/c9/b1/1pCgMx91_o.jpg','https://images2.imgbox.com/2d/78/iILWcxa1_o.jpg','https://images2.imgbox.com/0d/99/Xcc2mfHJ_o.jpg','https://images2.imgbox.com/d8/b6/QR0xgFxG_o.jpg','https://images2.imgbox.com/d3/cd/kvJEUqrD_o.jpg','https://images2.imgbox.com/a0/f2/jeeVREHL_o.jpg','https://images2.imgbox.com/2b/d4/XyPvel9y_o.jpg','https://images2.imgbox.com/ba/a9/ZHbbzCeP_o.jpg','https://images2.imgbox.com/c9/e9/LGchPb5m_o.jpg','https://images2.imgbox.com/fc/32/3Z2yy1Fs_o.jpg','https://images2.imgbox.com/d0/87/hazZBTsN_o.jpg','https://images2.imgbox.com/84/b1/bzvtMnrj_o.jpg','https://images2.imgbox.com/6c/12/MikR3uqd_o.jpg','https://images2.imgbox.com/a9/23/K5ZheaqJ_o.jpg','https://images2.imgbox.com/de/22/GnRLJyUA_o.jpg','https://images2.imgbox.com/77/89/SPhJf8yk_o.jpg','https://images2.imgbox.com/c8/ac/oXju9973_o.jpg','https://images2.imgbox.com/9b/98/pwDrgi2m_o.jpg','https://images2.imgbox.com/f8/da/YbUUjOd1_o.jpg','https://images2.imgbox.com/d7/c3/wFz55fIA_o.jpg','https://images2.imgbox.com/90/34/pnxfcA05_o.jpg','https://images2.imgbox.com/34/bf/jQ70s21m_o.jpg','https://images2.imgbox.com/54/7b/SJU3cG7y_o.jpg','https://images2.imgbox.com/dc/c6/KQzBZvV8_o.jpg','https://images2.imgbox.com/fe/ea/jKU1t3mU_o.jpg','https://images2.imgbox.com/fc/e2/m6SIeE3t_o.jpg','https://images2.imgbox.com/4a/b8/bQRsWbKH_o.jpg','https://images2.imgbox.com/53/5a/vUfzpMVq_o.jpg','https://images2.imgbox.com/a0/42/H7YO5BvB_o.jpg','https://images2.imgbox.com/a0/dd/c94JfWcg_o.jpg','https://images2.imgbox.com/d5/5d/A9AxmvmI_o.jpg','https://images2.imgbox.com/83/81/xCRzWXkG_o.jpg','https://images2.imgbox.com/db/97/nWxosZK0_o.jpg','https://images2.imgbox.com/6f/8e/FB1uCVGE_o.jpg','https://images2.imgbox.com/78/ea/6w8jLmWl_o.jpg',
	       'https://images2.imgbox.com/6e/36/wor7ijwQ_o.jpg','https://images2.imgbox.com/5e/bc/etsuJ52K_o.jpg','https://images2.imgbox.com/9e/43/tzo0pFMZ_o.jpg','https://images2.imgbox.com/09/bf/AggO1Jcr_o.jpg','https://images2.imgbox.com/23/f5/tvN140i8_o.jpg','https://images2.imgbox.com/78/42/m3MUmt6o_o.jpg','https://images2.imgbox.com/70/07/X7dN5fv9_o.jpg','https://images2.imgbox.com/09/48/HljZCqSP_o.jpg','https://images2.imgbox.com/8e/5c/XoeXlTSN_o.jpg','https://images2.imgbox.com/57/b3/mY9Fhk0u_o.jpg','https://images2.imgbox.com/d1/5b/UbsCzHzo_o.jpg','https://images2.imgbox.com/c1/ff/ZhGAodII_o.jpg','https://images2.imgbox.com/af/1f/utuEZmST_o.jpg','https://images2.imgbox.com/db/e2/0jDdAjep_o.jpg','https://images2.imgbox.com/fa/05/hAqTuIBa_o.jpg','https://images2.imgbox.com/9c/fc/Vjzq2TFf_o.jpg','https://images2.imgbox.com/66/65/81dUzEj0_o.jpg','https://images2.imgbox.com/ca/1c/E10nBzdz_o.jpg','https://images2.imgbox.com/bb/a4/4J5uHI3d_o.jpg','https://images2.imgbox.com/17/69/Bvb9StKx_o.jpg','https://images2.imgbox.com/9e/35/6Cju9ROR_o.jpg','https://images2.imgbox.com/79/1d/jYVn4z4s_o.jpg','https://images2.imgbox.com/3d/e0/aNpjpVxf_o.jpg','https://images2.imgbox.com/49/31/w0WRrOio_o.jpg','https://images2.imgbox.com/65/ee/jI4w8QX1_o.jpg','https://images2.imgbox.com/e7/be/R74miqGe_o.jpg','https://images2.imgbox.com/21/d3/SAav9xDL_o.jpg','https://images2.imgbox.com/60/c1/2aUxiCXq_o.jpg','https://images2.imgbox.com/54/a8/Ii2enRtw_o.jpg','https://images2.imgbox.com/c9/11/MLUG0g4w_o.jpg','https://images2.imgbox.com/0e/9e/AIHNcCNc_o.jpg','https://images2.imgbox.com/90/d9/VeRgJv4p_o.jpg','https://images2.imgbox.com/48/24/RX6IvILG_o.jpg','https://images2.imgbox.com/91/b2/wrXgWsFa_o.jpg','https://images2.imgbox.com/96/32/hxWbnEzf_o.jpg','https://images2.imgbox.com/dd/bf/FpXG6I6Z_o.jpg','https://images2.imgbox.com/b4/46/HE9aPJaZ_o.jpg','https://images2.imgbox.com/6e/33/BZr9pKft_o.jpg','https://images2.imgbox.com/b3/d1/bbWrpvjO_o.jpg','https://images2.imgbox.com/15/b1/5evUoukA_o.jpg','https://images2.imgbox.com/4d/0a/mtlP102g_o.jpg','https://images2.imgbox.com/06/4a/9dRAczNn_o.jpg','https://images2.imgbox.com/d3/47/3AxD0CJs_o.jpg','https://images2.imgbox.com/27/85/HkZAgNl4_o.jpg','https://images2.imgbox.com/4b/ca/rsU6obtZ_o.jpg','https://images2.imgbox.com/a1/64/esqBHrF0_o.jpg','https://images2.imgbox.com/83/98/K470b5KN_o.jpg','https://images2.imgbox.com/5f/6e/nZS9sdXz_o.jpg','https://images2.imgbox.com/66/94/ettUY2G4_o.jpg','https://images2.imgbox.com/c6/a5/yLaRF0uu_o.jpg','https://images2.imgbox.com/04/5f/UrZiNb7S_o.jpg','https://images2.imgbox.com/b0/3a/S97DcOWu_o.jpg','https://images2.imgbox.com/6b/19/B1IkMKy7_o.jpg','https://images2.imgbox.com/3c/60/9LT5WyQS_o.jpg','https://images2.imgbox.com/b7/e5/LHoWbvK3_o.jpg','https://images2.imgbox.com/2e/a8/TFGPuPNW_o.jpg','https://images2.imgbox.com/c5/c5/pTpK9imc_o.jpg','https://images2.imgbox.com/46/a2/keI2ebDN_o.jpg','https://images2.imgbox.com/66/d7/drCtp06y_o.jpg','https://images2.imgbox.com/a9/72/oFBSDrai_o.jpg','https://images2.imgbox.com/40/36/Kufpu1ba_o.jpg','https://images2.imgbox.com/b4/61/X0pO1lXE_o.jpg','https://images2.imgbox.com/eb/da/M80TqKuX_o.jpg','https://images2.imgbox.com/7b/61/8hwlOQOw_o.jpg','https://images2.imgbox.com/6c/f7/j6tdP0IX_o.jpg','https://images2.imgbox.com/c7/3e/VopIAbqE_o.jpg','https://images2.imgbox.com/52/29/o5LWlFhk_o.jpg','https://images2.imgbox.com/65/f5/WViZf2th_o.jpg','https://images2.imgbox.com/93/19/h7aUHCds_o.jpg','https://images2.imgbox.com/1e/8e/OSk0Rhto_o.jpg','https://images2.imgbox.com/58/98/zWWUN1pd_o.jpg','https://images2.imgbox.com/e9/da/N8n16psC_o.jpg','https://images2.imgbox.com/b2/75/Dr7h1CRR_o.jpg','https://images2.imgbox.com/68/38/a1WLt0Ke_o.jpg','https://images2.imgbox.com/15/9d/DF0BHya9_o.jpg','https://images2.imgbox.com/20/ef/1SjotcUs_o.jpg','https://images2.imgbox.com/b5/68/DakUmQDF_o.jpg','https://images2.imgbox.com/4b/87/wDbwoUk1_o.jpg','https://images2.imgbox.com/c9/1a/4hSebrEY_o.jpg','https://images2.imgbox.com/45/50/3NUAtofd_o.jpg','https://images2.imgbox.com/d7/31/7XjzjvLU_o.jpg','https://images2.imgbox.com/3e/99/K709jKU7_o.jpg','https://images2.imgbox.com/b2/5e/gYOlYEeQ_o.jpg','https://images2.imgbox.com/bf/94/Dm88bluP_o.jpg','https://images2.imgbox.com/9a/f8/snIm4Vv0_o.jpg','https://images2.imgbox.com/ff/fc/p1LVgzF7_o.jpg','https://images2.imgbox.com/a3/20/bgmEJAol_o.jpg','https://images2.imgbox.com/76/b1/FhqJg9pO_o.jpg','https://images2.imgbox.com/8d/42/Q4Zq7m3c_o.jpg','https://images2.imgbox.com/ca/da/9ZY11dIY_o.jpg','https://images2.imgbox.com/0b/63/IHLxfMQy_o.jpg','https://images2.imgbox.com/3d/3c/gxOoJB7v_o.jpg','https://images2.imgbox.com/ba/97/RXxEq9cS_o.jpg','https://images2.imgbox.com/6a/8d/8FZ6pxjv_o.jpg','https://images2.imgbox.com/1d/69/P0RRNZmU_o.jpg','https://images2.imgbox.com/83/3e/VPTKtvUO_o.jpg','https://images2.imgbox.com/76/b2/iOefSjKU_o.jpg','https://images2.imgbox.com/09/56/GXi2EqoI_o.jpg','https://images2.imgbox.com/a3/e9/BYftGrRL_o.jpg','https://images2.imgbox.com/8b/dc/fbEnzNkf_o.jpg','https://images2.imgbox.com/3f/0a/mRUo1JQV_o.jpg','https://images2.imgbox.com/ce/15/VAz25RWi_o.jpg','https://images2.imgbox.com/22/17/TcOudYCT_o.jpg','https://images2.imgbox.com/25/c9/Ep89vp4A_o.jpg','https://images2.imgbox.com/67/3f/vZljHGL8_o.jpg','https://images2.imgbox.com/12/de/ukqVFR7Q_o.jpg','https://images2.imgbox.com/ab/01/kifti8me_o.jpg','https://images2.imgbox.com/c7/cc/Zcb45Ful_o.jpg','https://images2.imgbox.com/f0/5c/uKZ4wAej_o.jpg','https://images2.imgbox.com/d5/a8/lyk7FmXM_o.jpg','https://images2.imgbox.com/77/ba/gngBJo7g_o.jpg','https://images2.imgbox.com/0a/6b/7onMmNFc_o.jpg','https://images2.imgbox.com/c1/e7/KEvhymdH_o.jpg','https://images2.imgbox.com/0c/4e/3wBSeR5X_o.jpg','https://images2.imgbox.com/62/60/UzdKE7eR_o.jpg','https://images2.imgbox.com/01/f6/ikPhrbhD_o.jpg','https://images2.imgbox.com/ba/e9/waHRtsks_o.jpg','https://images2.imgbox.com/58/e3/X7tmbwC3_o.jpg','https://images2.imgbox.com/57/58/b9d6FQm9_o.jpg','https://images2.imgbox.com/41/e4/72GfgUCj_o.jpg','https://images2.imgbox.com/10/bf/cKPiUUHE_o.jpg','https://images2.imgbox.com/50/d0/a9xBbYZb_o.jpg','https://images2.imgbox.com/5e/7e/teQAYCV7_o.jpg','https://images2.imgbox.com/dd/d0/RyjBrbWZ_o.jpg','https://images2.imgbox.com/e5/f7/3yXMckL1_o.jpg','https://images2.imgbox.com/97/5e/3oOoSxPJ_o.jpg','https://images2.imgbox.com/b2/8a/DfRuZuba_o.jpg','https://images2.imgbox.com/80/c0/Bx9dmlQB_o.jpg','https://images2.imgbox.com/18/7b/lzo917Z1_o.jpg','https://images2.imgbox.com/b2/a4/dnlUeZjh_o.jpg','https://images2.imgbox.com/4d/c7/wa81o77K_o.jpg','https://images2.imgbox.com/42/92/241ATvJK_o.jpg','https://images2.imgbox.com/88/03/fpyy4hs6_o.jpg','https://images2.imgbox.com/23/e6/vi6Rz5CA_o.jpg','https://images2.imgbox.com/77/3a/djDiVIjG_o.jpg','https://images2.imgbox.com/a6/f1/1BKyddVR_o.jpg','https://images2.imgbox.com/0c/80/dZkDbnDF_o.jpg','https://images2.imgbox.com/00/6f/DQWVO3Z6_o.jpg','https://images2.imgbox.com/60/93/TmeBp6vi_o.jpg','https://images2.imgbox.com/27/26/h2VKImIr_o.jpg','https://images2.imgbox.com/23/3f/H8ga0V8m_o.jpg','https://images2.imgbox.com/70/6f/BaHRjqrB_o.jpg','https://images2.imgbox.com/2c/4e/FeehXabr_o.jpg','https://images2.imgbox.com/da/33/xcYBvPcx_o.jpg','https://images2.imgbox.com/bb/1c/diIHZcKk_o.jpg','https://images2.imgbox.com/e7/80/3WHUJER8_o.jpg','https://images2.imgbox.com/02/f5/51teKDaw_o.jpg','https://images2.imgbox.com/56/85/eesRZtTj_o.jpg','https://images2.imgbox.com/39/5f/iwqqVesF_o.jpg','https://images2.imgbox.com/8e/8e/Ojd5om9i_o.jpg','https://images2.imgbox.com/e3/6f/mK7GIuxP_o.jpg','https://images2.imgbox.com/22/ab/CJKsVlnM_o.jpg','https://images2.imgbox.com/1e/c1/0sfqOTvu_o.jpg','https://images2.imgbox.com/59/07/okcP5YFl_o.jpg','https://images2.imgbox.com/eb/60/dkXi73B9_o.jpg','https://images2.imgbox.com/48/59/cjYVYG9y_o.jpg','https://images2.imgbox.com/74/ce/v7w3DMdu_o.jpg','https://images2.imgbox.com/7d/c1/IGXyIIGW_o.jpg','https://images2.imgbox.com/46/ac/utlE941Y_o.jpg','https://images2.imgbox.com/64/5c/FgonOEEv_o.jpg','https://images2.imgbox.com/11/e1/47zcckbs_o.jpg','https://images2.imgbox.com/67/84/v0SUVY6s_o.jpg','https://images2.imgbox.com/0f/ea/BgaUTiQN_o.jpg','https://images2.imgbox.com/e2/c1/23PQPp5e_o.jpg','https://images2.imgbox.com/72/8c/raen33Kr_o.jpg','https://images2.imgbox.com/18/7f/OngYdhY4_o.jpg','https://images2.imgbox.com/0b/ef/QNyiV1b7_o.jpg','https://images2.imgbox.com/bb/90/D3AekLB4_o.jpg','https://images2.imgbox.com/35/6b/Q0kiiBTe_o.jpg','https://images2.imgbox.com/e4/ec/rjKSYJE8_o.jpg','https://images2.imgbox.com/7e/04/090tz21I_o.jpg','https://images2.imgbox.com/9e/6c/TTrF5Pb5_o.jpg','https://images2.imgbox.com/9f/95/M6Xm3rJv_o.jpg','https://images2.imgbox.com/36/85/1VCzuKrK_o.jpg','https://images2.imgbox.com/76/85/4y6FEFnj_o.jpg','https://images2.imgbox.com/3e/f4/WaVQ8YGO_o.jpg','https://images2.imgbox.com/84/6a/8yOlcp2i_o.jpg','https://images2.imgbox.com/19/eb/l4Ks7Le0_o.jpg','https://images2.imgbox.com/b6/dc/BtOMlAWy_o.jpg','https://images2.imgbox.com/54/44/qjq128Yf_o.jpg','https://images2.imgbox.com/16/0a/ZSRVblh8_o.jpg','https://images2.imgbox.com/d2/cc/3Rfn8ZIE_o.jpg','https://images2.imgbox.com/a6/a0/aZYCuvlE_o.jpg','https://images2.imgbox.com/6c/7d/RV2QIQ1I_o.jpg','https://images2.imgbox.com/4c/f3/H399JQA6_o.jpg','https://images2.imgbox.com/45/ba/8IVNssIn_o.jpg','https://images2.imgbox.com/e2/93/mU54EfzR_o.jpg','https://images2.imgbox.com/49/d1/5ZFBCi3I_o.jpg','https://images2.imgbox.com/89/d9/hmBaENPu_o.jpg','https://images2.imgbox.com/da/f0/khyF5UHN_o.jpg','https://images2.imgbox.com/05/d3/TvwxJExr_o.jpg','https://images2.imgbox.com/24/75/JWc6s1c0_o.jpg','https://images2.imgbox.com/ee/fd/hbsPawYA_o.jpg','https://images2.imgbox.com/49/86/3wfPLDup_o.jpg','https://images2.imgbox.com/b5/6b/SbgkZDKa_o.jpg','https://images2.imgbox.com/04/5e/wAuUS7cr_o.jpg','https://images2.imgbox.com/f8/4a/O3OpuuID_o.jpg','https://images2.imgbox.com/83/fa/RylliQ4s_o.jpg','https://images2.imgbox.com/58/8c/rgDnNR5S_o.jpg',
	       'https://images2.imgbox.com/21/c5/hbJaURfe_o.jpg','https://images2.imgbox.com/60/8e/InNixy9d_o.jpg','https://images2.imgbox.com/42/4d/NKis3ygG_o.jpg','https://images2.imgbox.com/28/66/YaHpzjyC_o.jpg','https://images2.imgbox.com/dd/a5/oaG0FcFF_o.jpg','https://images2.imgbox.com/c0/3c/a7U00Hfk_o.jpg','https://images2.imgbox.com/2d/88/xidGt7rV_o.jpg','https://images2.imgbox.com/df/01/01vH5OMn_o.jpg','https://images2.imgbox.com/b7/fc/GHWHW2Fu_o.jpg','https://images2.imgbox.com/5f/32/natNZ7nH_o.jpg','https://images2.imgbox.com/37/20/QkJZl3wu_o.jpg','https://images2.imgbox.com/8c/64/352zRrVN_o.jpg','https://images2.imgbox.com/a3/a9/5UZgVObG_o.jpg','https://images2.imgbox.com/2e/6c/vM84nswq_o.jpg','https://images2.imgbox.com/d8/3f/CKRQF0Qi_o.jpg','https://images2.imgbox.com/c0/12/tYbap12z_o.jpg','https://images2.imgbox.com/2f/d2/ymr3EXVg_o.jpg','https://images2.imgbox.com/c2/77/ErG9JVGf_o.jpg','https://images2.imgbox.com/c3/b4/WI2nP3z4_o.jpg','https://images2.imgbox.com/d9/ba/N2t62Fgn_o.jpg','https://images2.imgbox.com/50/13/GSi2Aofw_o.jpg','https://images2.imgbox.com/3c/df/t8vpcu9U_o.jpg','https://images2.imgbox.com/95/ea/A1yqgLlH_o.jpg','https://images2.imgbox.com/3b/20/bDFopHsk_o.jpg','https://images2.imgbox.com/57/f9/yy09c6mp_o.jpg','https://images2.imgbox.com/e8/17/62qNSddW_o.jpg','https://images2.imgbox.com/80/37/MyvA9c9E_o.jpg','https://images2.imgbox.com/dc/45/4Kj1FiIW_o.jpg','https://images2.imgbox.com/ff/23/JqW1uAd4_o.jpg','https://images2.imgbox.com/e1/23/3qNHKFbw_o.jpg','https://images2.imgbox.com/a4/e9/KwgkqUAc_o.jpg','https://images2.imgbox.com/76/cd/tQ9cmj4U_o.jpg','https://images2.imgbox.com/40/60/BavUco4h_o.jpg','https://images2.imgbox.com/c3/77/iSbIGsCp_o.jpg','https://images2.imgbox.com/27/b3/pLxaZxAg_o.jpg','https://images2.imgbox.com/4a/89/20P53nUi_o.jpg','https://images2.imgbox.com/8f/c1/qnTJHSJn_o.jpg','https://images2.imgbox.com/7c/64/TYBDvHxD_o.jpg','https://images2.imgbox.com/d8/f7/qSWFBZEX_o.jpg','https://images2.imgbox.com/e6/37/JJznS9Qp_o.jpg','https://images2.imgbox.com/fd/a9/U9utdDH7_o.jpg','https://images2.imgbox.com/e9/eb/vlxKDO0e_o.jpg','https://images2.imgbox.com/0a/71/77MOq0Ar_o.jpg','https://images2.imgbox.com/96/ac/iXyFLMwa_o.jpg','https://images2.imgbox.com/8c/0d/PKzf2VDX_o.jpg','https://images2.imgbox.com/9a/fd/BMCauMv9_o.jpg','https://images2.imgbox.com/e3/bc/qpeANR8Q_o.jpg','https://images2.imgbox.com/d9/3f/TVTfevuJ_o.jpg','https://images2.imgbox.com/c7/43/UQmu07Yj_o.jpg','https://images2.imgbox.com/20/c3/dhGLjmWi_o.jpg','https://images2.imgbox.com/7f/cc/TYpbtsBH_o.jpg','https://images2.imgbox.com/8f/95/RNeyPjut_o.jpg','https://images2.imgbox.com/b3/30/QGiPSuxN_o.jpg','https://images2.imgbox.com/9b/95/08rgOjpZ_o.jpg','https://images2.imgbox.com/1b/04/5Ukfj3cB_o.jpg','https://images2.imgbox.com/55/9c/5JNj2U4X_o.jpg','https://images2.imgbox.com/c6/52/raXZuh88_o.jpg','https://images2.imgbox.com/10/eb/ef0bw8G1_o.jpg','https://images2.imgbox.com/6c/91/nRFXfLcR_o.jpg','https://images2.imgbox.com/5a/b3/xq3gfNkb_o.jpg','https://images2.imgbox.com/b8/73/pB5MlHhH_o.jpg','https://images2.imgbox.com/3c/e7/NBBeyYUc_o.jpg','https://images2.imgbox.com/60/32/nxrpCXpA_o.jpg','https://images2.imgbox.com/dd/90/nVSMoFNI_o.jpg']
let mems = memess[Math.floor(Math.random() * memess.length)]
memes = await getBuffer(mems)
cnf.sendMessage(from, memes, image, {quoted: mek})
addFilter(from)
break
					
case prefix+'loli':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)		  
const vu =['https://i.ibb.co/8jMFJLS/22.jpg','https://i.ibb.co/pbJknt8/21.jpg','https://i.ibb.co/3frJKPK/20.jpg','https://i.ibb.co/WgkfC3Q/63.jpg','https://i.ibb.co/zF0fqgC/29.jpg','https://i.ibb.co/KXYsk9C/62.jpg','https://i.ibb.co/jfvgcyH/28.jpg','https://i.ibb.co/9wL1fcL/61.jpg','https://i.ibb.co/7yyB3vZ/27.jpg','https://i.ibb.co/XSJTTj5/60.jpg','https://i.ibb.co/Y0zdDjr/26.jpg','https://i.ibb.co/m9RKKr8/25.jpg','https://i.ibb.co/Gnpwyw5/24.jpg','https://i.ibb.co/vJtTs6d/23.jpg','https://i.ibb.co/TKxmb60/9.jpg','https://i.ibb.co/4Y4xVXB/55.jpg','https://i.ibb.co/Y8Z3S4W/11.jpg','https://i.ibb.co/JFkNn6M/54.jpg','https://i.ibb.co/1bxFC4R/10.jpg','https://i.ibb.co/KNWqBFz/53.jpg','https://i.ibb.co/Jpbynx5/52.jpg','https://i.ibb.co/kcWPjhf/51.jpg','https://i.ibb.co/qrVHF8H/50.jpg','https://i.ibb.co/m9ywdqR/19.jpg','https://i.ibb.co/27JC0mY/18.jpg','https://i.ibb.co/9wzz02R/17.jpg','https://i.ibb.co/sj5bDQ9/16.jpg','https://i.ibb.co/4PpYwMp/59.jpg','https://i.ibb.co/yR686k4/15.jpg','https://i.ibb.co/t4HtmB9/58.jpg','https://i.ibb.co/yBCTWg4/14.jpg','https://i.ibb.co/qyD03cF/57.jpg','https://i.ibb.co/NxMy58Z/13.jpg','https://i.ibb.co/QrHwdPZ/56.jpg','https://i.ibb.co/PG8BK52/12.jpg','https://i.ibb.co/BP0tCsG/44.jpg','https://i.ibb.co/2vsGNB5/43.jpg','https://i.ibb.co/6wnNL3f/42.jpg','https://i.ibb.co/cQ41fW1/41.jpg','https://i.ibb.co/FHhsw0z/40.jpg','https://i.ibb.co/NrXpDSn/8.jpg','https://i.ibb.co/h9cT0ZJ/7.jpg','https://i.ibb.co/PT56Dqq/6.jpg','https://i.ibb.co/dkW7ZG8/49.jpg','https://i.ibb.co/wMMN45z/5.jpg','https://i.ibb.co/nnyG8zL/48.jpg','https://i.ibb.co/RPmtr7L/4.jpg','https://i.ibb.co/SnPPfXQ/47.jpg','https://i.ibb.co/JyY7rhP/3.jpg','https://i.ibb.co/w769bF3/46.jpg','https://i.ibb.co/FW1r8JJ/2.jpg','https://i.ibb.co/7WChLwT/45.jpg','https://i.ibb.co/fpc7vrg/1.jpg','https://i.ibb.co/JtTCzqt/69.jpg','https://i.ibb.co/FsPkRQy/68.jpg','https://i.ibb.co/N2bhjmN/67.jpg','https://i.ibb.co/ctcknwP/66.jpg','https://i.ibb.co/SBD95bq/65.jpg','https://i.ibb.co/Xtn32N7/64.jpg','https://i.ibb.co/pQ1Twkh/33.jpg','https://i.ibb.co/cYfHjHv/32.jpg','https://i.ibb.co/C2ZCRMv/31.jpg','https://i.ibb.co/sJBKymV/30.jpg','https://i.ibb.co/jL3X3vL/39.jpg','https://i.ibb.co/YjjHfwv/38.jpg','https://i.ibb.co/KsDTpy1/37.jpg','https://i.ibb.co/XDGCWLq/36.jpg','https://i.ibb.co/bs0RdwX/35.jpg','https://i.ibb.co/m5dg5KG/34.jpg']
let vuvu = vu[Math.floor(Math.random() * vu.length)]
kkj = await getBuffer(vuvu)
const lodecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const lofrase = lodecir[Math.floor(Math.random() * lodecir.length)]
cnf.sendMessage(from, kkj, image, { caption: lofrase, quoted: mek })
addFilter(from)
break
					
case prefix+'welcome':
if (isBanned) return  reply(mess.banned)
if (!isGroupAdmins) return reply(mess.only.admin)		  
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (args.length < 1) return reply('Quien eres? 7-7')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ya activo ')
welkom.push(from)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
reply('Activado✔️')} 
else if (Number(args[0]) === 0) {
welkom.splice(from, 1)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
reply('Desactivado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
addFilter(from)
break

case prefix+'kick':
if (isBanned) return  reply(mess.banned)	  
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins) return reply(mess.only.admin)		
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Orden recibida, emitida :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
cnf.groupRemove(from, mentioned)
} else {
mentions(`Orden recibida, emitida : @${mentioned[0].split('@')[0]}`, mentioned, true)
cnf.groupRemove(from, mentioned)
}
addFilter(from)
break 
          
case prefix+'tts':
if (isBanned) return  reply(mess.banned)          
if (args.length < 1) return jere.sendMessage(from, '¿Dónde está el código de idioma??', text, {quoted: mek})
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return jere.sendMessage(from, '¿Y el texto U.U?', text, {quoted: mek})
dtt = body.slice(7)
ranm = getRandom('.mp3')
dtt.length > 600
? reply('El texto es muy largo T×T')
: gtts.save(ranm, dtt, function() {
cnf.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
fs.unlinkSync(ranm)
})
addFilter(from)
break

case prefix+'listonline':
if (isBanned) return  reply(mess.banned)			  
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(cnf.chats.get(ido).presences), cnf.user.jid]
cnf.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
quoted: freply,
contextInfo: { mentionedJid: online }
})
addFilter(from)
break

case prefix+'notif':
if (isBanned) return  reply(mess.banned)
if (!isGroupAdmins) return reply(mess.only.admin)					  
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
teks = `Notificacion Dada Por: @${sender.split("@")[0]}\n*El mensaje es: ${body.slice(7)}*`
group = await cnf.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: teks,
contextInfo: {
mentionedJid: jids
},
quoted: freply
}
await cnf.sendMessage(from, options, text)
addFilter(from)
break
				
case prefix+'abrazar':
if (isBanned) return  reply(mess.banned)
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
abrazado = ment[0]
if (ment.length > 1) return reply('etiqueta')  
const abra = ['ab1','ab2','ab3','ab4','ab5','ab6','ab7','ab8','ab9','ab10']
const abras = abra[Math.floor(Math.random() * abra.length)]				
result = fs.readFileSync(`./sticker/reac/abra/${abras}.mp4`)
cnf.sendMessage(from, result, video)
cnf.sendMessage(from, `${pushname} está abrazando a @${abrazado.split('@')[0]}`, text, {contextInfo: {mentionedJid: [abrazado]}})
addFilter(from)
break

case prefix+'patear':
if (isBanned) return  reply(mess.banned)          
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
pateado = ment[0]
if (ment.length > 1) return reply('etiqueta')  
const pat = ['pat1','pat2','pat3','pat4','pat5']
const pate = pat[Math.floor(Math.random() * pat.length)]				
result = fs.readFileSync(`./sticker/reac/patad/${pate}.mp4`)
cnf.sendMessage(from, result, video)
cnf.sendMessage(from, `${pushname} está pateando a @${pateado.split('@')[0]}`, text, {contextInfo: {mentionedJid: [pateado]}})
addFilter(from)
break

case prefix+'palmaditas':
if (isBanned) return  reply(mess.banned)          
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
palmadas = ment[0]
if (ment.length > 1) return reply('etiqueta')  
const palm = ['pal1','pal2','pal3','pal4','pal5','pal6','pal7']
const palma = palm[Math.floor(Math.random() * palm.length)]				
result = fs.readFileSync(`./sticker/reac/palm/${palma}.mp4`)
cnf.sendMessage(from, result, video)
cnf.sendMessage(from, `${pushname} le ha dado unas palmaditas a @${palmadas.split('@')[0]}`, text, {contextInfo: {mentionedJid: [palmadas]}})
addFilter(from)
break
			
case prefix+'besar':
if (isBanned) return  reply(mess.banned)          
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
besado = ment[0]
if (ment.length > 1) return reply('etiqueta')  
const bes = ['bes1','bes2','bes3','bes4','bes5','bes6','bes7']
const beso = bes[Math.floor(Math.random() * bes.length)]				
result = fs.readFileSync(`./sticker/reac/beso/${beso}.mp4`)
cnf.sendMessage(from, result, video)
cnf.sendMessage(from, `${pushname} está besando a @${besado.split('@')[0]}`, text, {contextInfo: {mentionedJid: [besado]}})
addFilter(from)
break

case prefix+'status':
if (isBanned) return  reply(mess.banned)
anuapi = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=c9b3628121d4a8adfbff2e11`)
infoapi = `◪ API-KEY
├ *NOMBRE : 🔰Manuel🔰*
├ *LÍMITE:*
├  1000
├ *HOY*
├  ${anuapi.result.today}
└─────────────`
cnf.sendMessage(from, infoapi, text,{quoted : freply})
addFilter(from)
break

case prefix+'play':
if (isBanned) return  reply(mess.banned)          	  
if (args.length < 1) return reply('Coloca el enlace de la canción!')
play = body.slice(6)
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=oCHDwj8ggZGBGjU5WIaK5Rctu6c`)
if (anu.error) return reply(anu.error)
infomp3 = `❒═════❬ *𝐏𝐋𝐀𝐘* ❭═════╾❒
├‣ *Nombre* : 
┴
${anu.result.title}
┬
├‣ *Fuente* : 
┴
${anu.result.source}
┬
├‣ *Tamaño* : 
┴
${anu.result.size}
┬
❒═════════════════╾❒`
buffer = await getBuffer(anu.result.thumbnail)
lagu = await getBuffer(anu.result.url_audio)
cnf.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3 })
cnf.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`})
addFilter(from)
break

case prefix+'play2':  
if (args.length < 1) return reply('Coloca el enlace del video!')
play = args.join(" ")
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=oCHDwj8ggZGBGjU5WIaK5Rctu6c`)
if (anu.error) return reply(anu.error)
infomp3 = `❒═════❬ *𝐏𝐋𝐀𝐘2* ❭═════╾❒
├‣ *Nombre* : 
┴
${anu.result.title}
┬
├‣ *Fuente* : 
┴
${anu.result.source}
┬
├‣ *Tamaño* : 
┴
${anu.result.size}
┬
❒═════════════════╾❒`		
buffer = await getBuffer(anu.result.thumbnail)
buffer1 = await getBuffer(anu.result.url_video)
cnf.sendMessage(from, buffer, image, { caption: infomp3})
cnf.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Aquí tienes 💕🦈'})
addFilter(from)
break

case prefix+'twitter':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (args.length < 1) return reply('Adjunta el enlace 😾')
twiit = args.join(" ")
twiter = await fetchJson(`https://kocakz.herokuapp.com/api/media/twvid?url=${twiit}`)
nwtwk = ` Pedido entregado 🕊 `
buffer = await getBuffer(twiter.getVideo)
cnf.sendMessage(from, buffer, video, {quoted: freply ,caption: nwtwk})
break

case prefix+'fbook':
if (isBanned) return  reply(mess.banned)
if (args.length < 1) return reply('Adjunta el enlace 😾')    
facek = args.join(" ")
book = await fetchJson(`https://api.lolhuman.xyz/api/facebook2?apikey=c9b3628121d4a8adfbff2e11&url=${facek}`)
wing = ` Pedido entregado 🕊 `
buffer = await getBuffer(book.result)
cnf.sendMessage(from, buffer, video, {quoted : freply, caption: wing})
addFilter(from)
break

case prefix+'inst':
if (isBanned) return  reply(mess.banned)
if (args.length < 1) return reply('Adjunta el enlace 😾')    
tagr = args.join(" ")
insm = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=c9b3628121d4a8adfbff2e11&url=${tagr}`)
winsg = ` Pedido entregado 🕊 `
dinst = insm.result
for (result_ in dinst) {buffer = await getBuffer(dinst[result_])
await cnf.sendMessage(from, buffer, video, {quoted : freply, caption: winsg})}
addFilter(from)
break

case prefix+'tiktok':
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (isBanned) return  reply(mess.banned)
if (args.length < 1) return reply('Adjunta el enlace 😾')
tik = args.join(" ")
tok = await fetchJson(`https://hadi-api.herokuapp.com/api/tiktok?url=${tik}&apikey=b1eb05ffbf`)
nwtok = ` Pedido entregado 🕊 `
buffer = await getBuffer(tok.result.video.nowm)
cnf.sendMessage(from, buffer, video, {quoted : freply,caption: nwtok})
break

case prefix+'charlie':
if (isBanned) return  reply(mess.banned)
if (args.length < 1) return reply('Coloca tu pregunta junto al comando!')
const ch =['Si','No','No','Si','Si']
    const cha = ch[Math.floor(Math.random() * ch.length)]
reply(`𝐂𝐡𝐚𝐫𝐥𝐢𝐞 𝐂𝐡𝐚𝐫𝐥𝐢𝐞

𝐑𝐞𝐬𝐩𝐮𝐞𝐬𝐭𝐚 : ${cha}`)
addFilter(from)
break

case prefix+'tomp3':
if (isBanned) return  reply(mess.banned)          
if (!isQuotedVideo) return fakegroup('Etiqueta un video')
fakegroup(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await cnf.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return fakegroup(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
cnf.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
fs.unlinkSync(ran)
})
addFilter(from)
break

case prefix+'juego':
if (isBanned) return  reply(mess.banned)
reply(`𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨 :
𝑷𝑨𝑹𝑨 𝑱𝑼𝑮𝑨𝑹 𝑼𝑻𝑰𝑳𝑰𝒁𝑨 𝑼𝑵𝑶 𝑫𝑬 𝑬𝑺𝑻𝑶𝑺 𝑬𝑴𝑶𝑱𝑰𝑺
		    
𝑷𝑰𝑬𝑫𝑹𝑨 : #✊
		   
𝑷𝑨𝑷𝑬𝑳 : #✋
		   
𝑻𝑰𝑱𝑬𝑹𝑨 : #✌

𝗡𝗢𝗧𝗔: En este juego no se puede ganar coins️`)
addFilter(from)
break

case prefix+'✊':		
if (isBanned) return  reply(mess.banned)   
const piedra =[`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✋\n\n :) 𝑮𝒂𝒏𝒆 𝒉𝒖𝒎𝒂𝒏𝒐 𝒆𝒔𝒕𝒖𝒑𝒊𝒅𝒐`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✊\n\n :0 𝑬𝒎𝒑𝒂𝒕𝒆`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✌️\n\n :( 𝑮𝒂𝒏𝒂𝒔 𝒕𝒖`]
const jg = piedra[Math.floor(Math.random() * piedra.length)]
cnf.sendMessage(from, `𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨\n\n` + jg, text)
addFilter(from)
break
					
case prefix+'✋':
if (isBanned) return  reply(mess.banned)
const papel =[`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✋\n\n  :0 𝑬𝒎𝒑𝒂𝒕𝒆`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✊\n\n :( 𝑮𝒂𝒏𝒂?? 𝒕𝒖`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✌️\n\n :) 𝑮𝒂𝒏𝒆 𝒉𝒖𝒎𝒂𝒏𝒐 𝒆𝒔𝒕𝒖𝒑𝒊𝒅𝒐`]
const jggg = papel[Math.floor(Math.random() * papel.length)]
cnf.sendMessage(from, `𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰??𝑬𝑹𝑨\n\n` + jggg, text)
addFilter(from)
break
					
case prefix+'✌️': 
if (isBanned) return  reply(mess.banned)
const tijera =[`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✋\n\n:( 𝑮𝒂𝒏𝒂𝒔 𝒕𝒖`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✊\n\n :) 𝑮𝒂𝒏𝒆 𝒉𝒖𝒎𝒂𝒏𝒐 𝒆𝒔𝒕𝒖𝒑𝒊𝒅𝒐`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✌️\n\n:0 𝑬𝒎𝒑𝒂𝒕𝒆 `]
const jgg = tijera[Math.floor(Math.random() * tijera.length)]
cnf.sendMessage(from, `𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨\n\n` + jgg, text)
addFilter(from)
break

case prefix+'frases':
if (isBanned) return  reply(mess.banned)
cnf.updatePresence(from, Presence.composing) 
const fra =['El amor inmaduro dice: "te amo porque te necesito". El amor maduro dice: "te necesito porque te amo" (Erich Fromm)','La vida empieza cada cinco minutos (Andreu Buenafuente)','Donde las palabras fallan la música habla (Hans Christian Andersen)','Un buen viajante no tiene planes (Confucio)','Una vez aceptamos nuestros límites, vamos más allá de ello (Albert Einstein)','Lo que no nos mata nos hace más fuertes (Friedrich Nietzsche)','Si caminas solo, irás más rápido. Si caminas acompañado, llegarás más lejos.','Una vida llena de errores no solo es más honorable, sino que es más sabia que una vida gastada sin hacer nada','Es sencillo hacer que las cosas sean complicadas, pero difícil hacer que sean sencillas. F. Nietzsche','No pierdas nunca el sentido del humor y aprende a reírte de tus propios defectos','La preocupación es como una mecedora, te mantiene ocupado pero no te lleva a ninguna parte','El hombre que más ha vivido no es aquel que más años ha cumplido, sino aquel que más ha experimentado la vida','Si lo puedes soñar, lo puedes hacer','Lo imposible es el fantasma de los tímidos y el refugio de los cobardes','El camino que nos toca recorrer está lleno de sorpresas. Nunca vas a estar preparado para las que te toquen a ti, sean dichosas o sombrías, pues eso es parte de adquirir experiencia. Y descubrir cuán gratas o desafortunadas son las que te esperan, es algo nunca podrás evadir','La felicidad no es algo que pospones para el futuro, es algo que diseñas para el presente','El amigo ha de ser como el dinero, que antes de necesitarle, se sabe el valor que tiene','Tus acciones serán el reflejo de la manera que tienes de ver la vida y las que te van definir ante los demás. No las malgastes en cosas y actitudes que no valen la pena, solo tú puedes decidir la forma en la que quieres que te recuerden, porque no estarás en este mundo para siempre','El amor es lo que mueve al mundo aunque a veces parezca lo contrario. A las personas no nos haría mal recordar esto de vez en cuando','Nunca terminas de conocer a la gente. Tus amigos, tu familia y hasta tú mismo, pueden ocultar sorpresas que en la vida te podrías haber imaginado, tanto buenas como malas','Todos tenemos el mismo destino, en esencia no hay manera de diferenciarnos si nacemos para llorar y reír. Recuérdalo, todos tenemos los días contados, vive cada uno de tus días como si fueran el regalo más grande, porque nadie puede asegurarte el mañana','Mientras vivas vas a encontrarte con todo tipo de personas, tanto buenas como malas. Es imposible adivinar las intenciones que oculta alguien detrás de su comportamiento, pero descubrirlo es la tarea más interesante y peligrosa con la que te puedes llegar a topar','Los tiempos felices en la humanidad son las páginas vacías de la historia','La decepción después de un amor fallido, puede llegar a oprimir tu corazón hasta el punto de no dejarte respirar. Pero nadie se ha muerto de amor','No llores por la gente que se ha ido, enfócate en quienes se encuentran a tu lado en el presente y quédate con los buenas recuerdos de los que se marcharon','No debes enfocarte en el dolor que puedes sentir si alguien te ha falla. Si no eres capaz de perdonar una equivocación, entiérrala y sigue adelante','Amar es la aventura más grande en la que te puedes embarcar. Porque te puede hacer volar más alto de lo que jamás imaginarte y también ponerte los pies de la tierra']
const jys = fra[Math.floor(Math.random() * fra.length)]
ses = fs.readFileSync(`./media/cnf.jpeg`)
cnf.sendMessage(from, ses, image, { caption: '*ᖴᏒᏗᏕᏋᏕ ૮ᏬᏒᎥᎧᏕᏗᏕ👌*\n\n'+ jys, quoted: mek })
addFilter(from)
break

case prefix+'piropos':   
if (isBanned) return  reply(mess.banned)
	
cnf.updatePresence(from, Presence.composing)
const mary =['Algunos quieren ser ricos a través del dinero, otros del poder, pero lo que no saben, es que la única riqueza es tu amor verdadero.','Soñando contigo he tenido una revelación, ahora necesito que me hagas un hueco en tu corazón.','Aunque por tu corazón han pasado muchas personas, me gustaría que me hicieses un huequecito eterno, por pequeño que sea, por si pasa algo, para que no me olvides jamás.','Lo que siento por ti es tan inmenso que, para guardarlo, me haría falta otro universo.','me he convertido en un capitán pirata para asaltar tu corazón y robarle el amor.','Me preguntaste por qué te amaba y no pude responderte. Hoy entiendo que el amor verdadero es indescriptible, solo se puede sentir.','Ojalá fuese papel para poder envolverte, bombón.','Ansío besarte, abrazarte y no soltarte','A lo mejor mi hogar no es un palacio, pero me gustaría que tú fueses mi princesa.','Te amo demasiado, lo deseo todo contigo, por eso me vuelvo loc@, cuando tú no estás conmigo.','¿De casualidad tienes un mapa contigo? Porque tengo el interés de navegar por esa linda mirada','Desde que te he visto me he convertido un/a astronauta porque no he bajado de las galaxias','A pesar de que el cielo está lleno de estrellas, tú eres la más importante para mi','Si ser guapo fuera pcado, ya estarías haciendo penitencia','Los que dicen que Disneyland es el lugar más feliz del mundo no han estado junto a ti🥺','Si ser guapo matara, serías la bomba atómica😳','Si fuera gato, pasaría mis nueve vidas contigo','¿Y si nos comemos unos tacos y yo te a-taco a besos?']
const js = mary[Math.floor(Math.random() * mary.length)]
wew = fs.readFileSync(`./media/cnf.jpeg`)
cnf.sendMessage(from, wew, image, { caption: '*ᎮᎥᏒᎧᎮᎧᏕ👌*\n\n'+ js, quoted: mek })
addFilter(from)
break

case prefix+'toimg':
if (isBanned) return  reply(mess.banned)
if (!isQuotedSticker) return reply(' etiqueta un sticker')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await cnf.downloadAndSaveMediaMessage(encmedia)
ran= getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Fallo ')
buffer = fs.readFileSync(ran)
cnf.sendMessage(from, buffer, image, {quoted: mek, caption: '🌸Watame-BOT🌸'})
fs.unlinkSync(ran)
})
await limitAdd(sender) 
addFilter(from)
break

case prefix+'perfil':
if (isBanned) return  reply(mess.banned)
cnf.updatePresence(from, Presence.composing)
try {
profil = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
const uaangku = checkATMuser(sender)
profile = `╭─「 *PERFIL* 」
│• *Nombre:* ${pushname}
│• *Cuenta Activa:* ✅				
│• *Link:* wa.me/${sender.split("@")[0]}
╰─────────────────────`
buff = await getBuffer(profil)
cnf.sendMessage(from, buff, image, {quoted: mek, caption: profile})
addFilter(from)
break

case prefix+'phub':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
phubb = args.join(" ")
if (args.length < 1) return reply('En dónde está el texto?')
buff = await getBuffer(`https://api.zeks.me/api/phub?apikey=kka0xgL5FZOo9eOOJgZO1t31z1M&img=https://thumbs2.imgbox.com/8d/7c/0n7hB4zl_t.png&username=Anonimo&msg=${phubb}`, {method: 'get'})
cnf.sendMessage(from, buff, image, {quoted: mek})                  
.catch(err => {
return('E-error ⊙﹏⊙')
})
addFilter(from)
break  
					
case prefix+'wpanime':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (args.length < 1) return reply('Coloca el nombre del personaje o anime 😾')
wpnime = args.join(" ")
wpanim = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=c9b3628121d4a8adfbff2e11&query=${wpnime}`)
pnime = ` Pedido entregado 😽 `
buffer = await getBuffer(wpanim.result)
cnf.sendMessage(from, buffer, image, {quoted: mek ,caption: pnime})
break

case prefix+'yaoi':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const yao = ['https://images2.imgbox.com/b5/e3/8REoQQqH_o.jpg','https://images2.imgbox.com/6e/b8/hfk5kLOs_o.jpg','https://images2.imgbox.com/60/75/2HrSWH7V_o.jpg','https://images2.imgbox.com/0f/a7/ZsQDxSta_o.jpg','https://images2.imgbox.com/b2/fb/HARWkFuE_o.jpg','https://images2.imgbox.com/73/00/tx4x0w1e_o.jpg','https://images2.imgbox.com/6d/d7/DEtPUOBj_o.jpg','https://images2.imgbox.com/b9/73/ojTtpNYG_o.jpg','https://images2.imgbox.com/47/55/EZsUn7ej_o.jpg','https://images2.imgbox.com/d0/db/r6z6iaNc_o.jpg','https://images2.imgbox.com/f4/fa/l4zI78N6_o.jpg','https://images2.imgbox.com/f8/fa/dMO6MeSQ_o.jpg','https://images2.imgbox.com/b5/82/oMxXh3OH_o.jpg','https://images2.imgbox.com/8b/ff/FQfIrVV2_o.jpg','https://images2.imgbox.com/e1/ef/QRScaZvv_o.jpg','https://images2.imgbox.com/46/ab/oFxLmc7Z_o.jpg','https://images2.imgbox.com/af/b0/dLVRqzO1_o.jpg','https://images2.imgbox.com/09/22/AoWsytBF_o.jpg','https://images2.imgbox.com/ac/37/DWsiqidd_o.jpg','https://images2.imgbox.com/87/82/kQOi6rdm_o.jpg','https://images2.imgbox.com/13/fe/7bPTBoSx_o.jpg','https://images2.imgbox.com/10/c6/UfXEVMDs_o.jpg','https://images2.imgbox.com/97/24/wmGGZKLe_o.jpg','https://images2.imgbox.com/1e/36/qX29lPK9_o.jpg','https://images2.imgbox.com/d6/3b/ook6GXj5_o.jpg','https://images2.imgbox.com/3b/a1/Li13H5q5_o.jpg','https://images2.imgbox.com/b5/5f/X4ZgzJ6H_o.jpg','https://images2.imgbox.com/6b/b3/b9TqT8hk_o.jpg','https://images2.imgbox.com/5a/4e/OcrjP0R2_o.jpg','https://images2.imgbox.com/a9/b5/SJsg6Mti_o.jpg','https://images2.imgbox.com/e5/1b/k5nt7ADS_o.jpg','https://images2.imgbox.com/f2/0a/7PRNt1S6_o.jpg','https://images2.imgbox.com/e7/d0/ggbBvkUu_o.jpg','https://images2.imgbox.com/d4/32/l922kf5B_o.jpg','https://images2.imgbox.com/bf/57/9hvM8WsG_o.jpg','https://images2.imgbox.com/9e/36/MpPCjzoQ_o.jpg','https://images2.imgbox.com/79/cf/Rr24hfog_o.jpg','https://images2.imgbox.com/6f/16/RR2D0ViF_o.jpg','https://images2.imgbox.com/d7/a8/nR1XKA7B_o.jpg','https://images2.imgbox.com/a8/7f/2VrHvQbL_o.jpg','https://images2.imgbox.com/3a/b3/vKH2ZiYr_o.jpg','https://images2.imgbox.com/ea/9b/hgdim9sx_o.jpg','https://images2.imgbox.com/92/6e/KgWYZGx8_o.jpg','https://images2.imgbox.com/e6/27/VWMGgTpF_o.jpg','https://images2.imgbox.com/65/2e/Jbr0c6Bc_o.jpg','https://images2.imgbox.com/f7/97/uzMVQkOJ_o.jpg','https://images2.imgbox.com/0b/e1/gCaUGUnr_o.jpg','https://images2.imgbox.com/6b/46/X27NP9Y0_o.jpg','https://images2.imgbox.com/29/8e/nrD3gjwS_o.jpg','https://images2.imgbox.com/4e/86/iRCVhTDf_o.jpg','https://images2.imgbox.com/e3/45/lfNNMbMN_o.jpg','https://images2.imgbox.com/29/a1/8FmCR8M8_o.jpg','https://images2.imgbox.com/2b/16/Lfwve8te_o.jpg','https://images2.imgbox.com/ca/ac/dTPgtYcQ_o.jpeg','https://images2.imgbox.com/2f/6c/RUwcjudw_o.jpeg','https://images2.imgbox.com/e5/8b/WfH84AdO_o.jpeg']
let yaoii  = yao[Math.floor(Math.random() * yao.length)]   
yaoiii = await getBuffer(yaoii)           
const dsds =['Aquí tienes 💕🦈','Pedido entregado 🕊']
const frfr = dsds[Math.floor(Math.random() * dsds.length)]
cnf.sendMessage(from, yaoiii, image, { caption: frfr, quoted: mek })	       
addFilter(from)
break
					
case prefix+'todos':
if (isBanned) return  reply(mess.banned)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
var nom = mek.participant
members_id = []
teks = '\n'
for (let mem of groupMembers) {
teks += `├╼ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(`*▢ Grupo:*  ${groupName}\n*▢ Miembros:* ${groupMembers.length} \n*▢ Total De Admins:* ${groupAdmins.length}\n┌───⊷ *MENCIONES* ⊶`+teks+'└──✪ 🌸Watame-BOT🌸 ✪──⊷* ', members_id, true)
addFilter(from)
break
                     
case prefix+'wame':
if (isBanned) return  reply(mess.banned)
cnf.updatePresence(from, Presence.composing) 
options = {
text: `「 *LINK WHATSAPP* 」\n\nSolicitado por : @${sender.split("@s.whatsapp.net")[0]}\n\nSu link de Whatsapp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n`,
contextInfo: { mentionedJid: [sender] }
}
cnf.sendMessage(from, options, text, { quoted: mek } )
addFilter(from)
break

case prefix+'waifu':
if (isBanned) return  reply(mess.banned) 
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
waifu = await getBuffer(`https://api.lolhuman.xyz/api/random/waifu?apikey=c9b3628121d4a8adfbff2e11`, {method: 'get'})
const waiff =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊']
const wife = waiff[Math.floor(Math.random() * waiff.length)]
cnf.sendMessage(from, waifu, image, { caption: wife, quoted: mek })
addFilter(from)
break

case prefix+'blood':   
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
const apis9 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0','69ca7c7a6206090978680cbe','9e91ba5f31f1eb7c772f3100','715bbe735bd7e25872ef40d6','5453dae015e205a91b6994ff']
 const nepe9 = apis9[Math.floor(Math.random() * apis9.length)]
bpp = `${body.slice(7)}`
if (args.length < 1) return reply('En dónde está el texto?')
if (args.length > 10) return reply('Maximo 10 letras')
buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=${nepe9}&text=${bpp}`, {method: 'get'})
cnf.sendMessage(from, buff, image, {quoted: mek})                  
addFilter(from)
break  
                  
case prefix+'blood2':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
const apis8 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0','69ca7c7a6206090978680cbe','9e91ba5f31f1eb7c772f3100','715bbe735bd7e25872ef40d6','5453dae015e205a91b6994ff']
const nepe8 = apis8[Math.floor(Math.random() * apis8.length)]     
bpp1 = `${body.slice(8)}`
if (args.length < 1) return reply('En dónde está el texto?')
if (args.length > 10) return reply('Maximo 10 letras')
buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/horrorblood?apikey=${nepe8}&text=${bpp1}`, {method: 'get'})
cnf.sendMessage(from, buff, image, {quoted: mek})
addFilter(from)
break 
                   
case prefix+'bokeh':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
const apis7 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0','69ca7c7a6206090978680cbe','9e91ba5f31f1eb7c772f3100','715bbe735bd7e25872ef40d6','5453dae015e205a91b6994ff']
const nepe7 = apis7[Math.floor(Math.random() * apis7.length)]     
bpp2 = `${body.slice(7)}`
if (args.length < 1) return reply('En dónde está el texto?')
if (args.length > 10) return reply('Maximo 10 letras')         
buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/bokeh?apikey=${nepe7}&text=${bpp2}`, {method: 'get'})
cnf.sendMessage(from, buff, image, {quoted: mek})                
addFilter(from)
break 
                   
case prefix+'toxic':
if (isBanned) return  reply(mess.banned)      
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
const apis1 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0','69ca7c7a6206090978680cbe','9e91ba5f31f1eb7c772f3100','715bbe735bd7e25872ef40d6','5453dae015e205a91b6994ff']
const nepe1 = apis1[Math.floor(Math.random() * apis1.length)]    
bpp3 = `${body.slice(7)}`
if (args.length < 1) return reply('En dónde está el texto?')
if (args.length > 10) return reply('Maximo 10 letras')
buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/toxic?apikey=${nepe1}&text=${bpp3}`, {method: 'get'})
cnf.sendMessage(from, buff, image, {quoted: mek})        
addFilter(from)
break 
                   
case prefix+'ice':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
const apis =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0','69ca7c7a6206090978680cbe','9e91ba5f31f1eb7c772f3100','715bbe735bd7e25872ef40d6','5453dae015e205a91b6994ff']
const nepe = apis[Math.floor(Math.random() * apis.length)]                
bpp5 = `${body.slice(5)}`
if (args.length < 1) return reply('En dónde está el texto?')
if (args.length > 10) return reply('Maximo 10 letras')
buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/icecold?apikey=${nepe}&text=${bpp5}`, {method: 'get'})
cnf.sendMessage(from, buff, image, {quoted: mek})
addFilter(from)
break  
            
case prefix+'box':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
const apis2 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0','69ca7c7a6206090978680cbe','9e91ba5f31f1eb7c772f3100','715bbe735bd7e25872ef40d6','5453dae015e205a91b6994ff']
const nepe22 = apis2[Math.floor(Math.random() * apis2.length)]
bpp4 = `${body.slice(5)}`
if (args.length < 1) return reply('En dónde está el texto?')
if (args.length > 10) return reply('Maximo 10 letras')
buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/box3d?apikey=${nepe22}&text=${bpp4}`, {method: 'get'})
cnf.sendMessage(from, buff, image, {quoted: mek})
addFilter(from)
break 

case prefix+'love':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
const apis3 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0','69ca7c7a6206090978680cbe','9e91ba5f31f1eb7c772f3100','715bbe735bd7e25872ef40d6','5453dae015e205a91b6994ff']
const nepe33 = apis3[Math.floor(Math.random() * apis3.length)]           
bpp7 = `${body.slice(6)}`
if (args.length < 1) return reply('En dónde está el texto?')
if (args.length > 10) return reply('Maximo 10 letras')
buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/love?apikey=${nepe33}&text=${bpp7}`, {method: 'get'})
cnf.sendMessage(from, buff, image, {quoted: mek})
addFilter(from)
break

case prefix+'luxury':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
const apis4 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0','69ca7c7a6206090978680cbe','9e91ba5f31f1eb7c772f3100','715bbe735bd7e25872ef40d6','5453dae015e205a91b6994ff']
const nepe4 = apis4[Math.floor(Math.random() * apis4.length)]           
bpp6 = `${body.slice(8)}`
if (args.length < 1) return reply('En dónde está el texto?')
if (args.length > 10) return reply('Maximo 10 letras') 
buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/luxury?apikey=${nepe4}&text=${bpp6}`, {method: 'get'})
cnf.sendMessage(from, buff, image, {quoted: mek})
addFilter(from)
break 
                   
case prefix+'love2':
if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
if (isBanned) return  reply(mess.banned)
const apis5 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0','69ca7c7a6206090978680cbe','9e91ba5f31f1eb7c772f3100','715bbe735bd7e25872ef40d6','5453dae015e205a91b6994ff']
const nepe5 = apis5[Math.floor(Math.random() * apis5.length)]    
bpp8 = `${body.slice(7)}`
if (args.length < 1) return reply('En dónde está el texto?')
if (args.length > 10) return reply('Maximo 10 letras')
buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/lovemessage?apikey=${nepe5}&text=${bpp8}`, {method: 'get'})
cnf.sendMessage(from, buff, image, {quoted: mek})
addFilter(from)
break 
					
case prefix+'lesbi':
if (isBanned) return  reply(mess.banned)
const cuu =['Eres 0% Lesbi' , 'Eres 1% Lesbi' , 'Eres 2% Lesbi' , 'Eres 3% Lesbi' , 'Eres 4% Lesbi' , 'Eres 5% Lesbi' , 'Eres 6% Lesbi' , 'Eres 7% Lesbi' , 'Eres 8% Lesbi' , 'Eres 9% Lesbi' , 'Eres 10% Lesbi' , 'Eres 11% Lesbi' , 'Eres 12% Lesbi' , 'Eres 13% Lesbi' , 'Eres 14% Lesbi' , 'Eres 15% Lesbi' , 'Eres 16% Lesbi' , 'Eres 17% Lesbi' , 'Eres 18% Lesbi' , 'Eres 19% Lesbi' , 'Eres 20% Lesbi' , 'Eres 21% Lesbi' , 'Eres 22% Lesbi' , 'Eres 23% Lesbi' , 'Eres 24% Lesbi' , 'Eres 25% Lesbi' , 'Eres 26% Lesbi' , 'Eres 27% Lesbi' , 'Eres 28% Lesbi' , 'Eres 29% Lesbi' , 'Eres 30% Lesbi' , 'Eres 31% Lesbi' , 'Eres 32% Lesbi' , 'Eres 33% Lesbi' , 'Eres 34% Lesbi' , 'Eres 35% Lesbi' , 'Eres 36% Lesbi' , 'Eres 37% Lesbi' , 'Eres 38% Lesbi' , 'Eres 39% Lesbi' , 'Eres 40% Lesbi' , 'Eres 41% Lesbi' , 'Eres 42% Lesbi' , 'Eres 43% Lesbi' , 'Eres 44% Lesbi' , 'Eres 45% Lesbi' , 'Eres 46% Lesbi' , 'Eres 47% Lesbi' , 'Eres 48% Lesbi' , 'Eres 49% Lesbi' , 'Eres 50% Lesbi' , 'Eres 51% Lesbi' , 'Eres 52% Lesbi' , 'Eres 53% Lesbi' , 'Eres 54% Lesbi' , 'Eres 55% Lesbi' , 'Eres 56% Lesbi' , 'Eres 57% Lesbi' , 'Eres 58% Lesbi' , 'Eres 59% Lesbi' , 'Eres 60% Lesbi' , 'Eres 61% Lesbi' , 'Eres 62% Lesbi' , 'Eres 63% Lesbi' , 'Eres 64% Lesbi' , 'Eres 65% Lesbi' , 'Eres 66% Lesbi' , 'Eres 67% Lesbi' , 'Eres 68% Lesbi' , 'Eres 69% Lesbi' , 'Eres 70% Lesbi' , 'Eres 71% Lesbi' , 'Eres 72% Lesbi' , 'Eres 73% Lesbi' , 'Eres 74% Lesbi' , 'Eres 75% Lesbi' , 'Eres 76% Lesbi' , 'Eres 77% Lesbi' , 'Eres 78% Lesbi' , 'Eres 79% Lesbi' , 'Eres 80% Lesbi' , 'Eres 81% Lesbi' , 'Eres 82% Lesbi' , 'Eres 83% Lesbi' , 'Eres 84% Lesbi' , 'Eres 85% Lesbi' , 'Eres 86% Lesbi' , 'Eres 87% Lesbi' , 'Eres 88% Lesbi' , 'Eres 89% Lesbi' , 'Eres 90% Lesbi' , 'Eres 91% Lesbi' , 'Eres 92% Lesbi' , 'Eres 93% Lesbi' , 'Eres 94% Lesbi' , 'Eres 95% Lesbi' , 'Eres 96% Lesbi' , 'Eres 97% Lesbi' , 'Eres 98% Lesbi' , 'Eres 99% Lesbi' , 'Eres 100% Lesbi']														
const rii = cuu[Math.floor(Math.random() * cuu.length)]
wnw = fs.readFileSync(`./src/5.jpg`)						
cnf.sendMessage(from, wnw, image, { caption: '*¿Que tan lesbi eres?*\n\n'+ rii, quoted: mek })
addFilter(from)
break                                      

case prefix+'reto':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
const daare =['Te reto a poner en tu info de Whatsapp que te gusta Anuel por 24 horas','Te reto a decirle a tu crush que la amas y pasar captura en el grupo','Te reto a poner en tu estado que buscas pareja','Te reto a poner en tu perfil la foto de tu crush','Te reto a decirle a alguien que te gusta...','Te reto a mandar un audio cantando','Te reto mandar audio diciendo:"yamete kudasai"','Te reto a poner en tu info que te gusta tu vecina(o)','Te reto mandar una foto tuya sin taparte la cara','Te reto a decir que apodo tenias cuando eras un/a niñ@ aun','Te reto a enviar un vídeo bailando','Te reto a enviar el último meme que allas visto','Te reto a enviar tu canción favorita','Te reto a darme los datos de tu tarjeta 🥰','Te reto a decir que te husta BTS🤧']
const deer = daare[Math.floor(Math.random() * daare.length)]
wbw = fs.readFileSync(`./src/4.jpg`)
cnf.sendMessage(from, wbw, image, { quoted: mek, caption: '*Reto 😈*\n\n'+ deer })
addFilter(from)
break

case prefix+'verdad':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
const trrut =['Con quien de los que están aqui en el grupo te besarías? (etiqueta)','¿Alguna vez te ha gustado alguien? ¿Cuanto tiempo?','Alunga vez te llegó a gustar el/la herman@ de tu mejor amig@?','Cuantos años tienes?','Cuanto tiempo ah pasado desde que diste tu último beso?','Te gustan los chicos o las chicas o ambos?','Que opinas sobre BTS','Que opinas sobre los administradores','Tienes novio(a)?','Cuantas veces te as sentido ignorado(a) por tu pareja o insuficiente para el/ella?','Has tenido pensamientos impuros con algún familiar 😏?','Que opinas sobre mi?','Te gusta el grupo?']
const ttrrth = trrut[Math.floor(Math.random() * trrut.length)]
wuw = fs.readFileSync(`./src/6.jpg`)						
cnf.sendMessage(from, wuw, image, { caption: '*Verdad😇*\n\n'+ ttrrth, quoted: mek })
addFilter(from)
break

default:
}
		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Juego Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Turno de = @${tty.player1.split('@')[0]}`
  cnf.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
cnf.sendMessage(from, `@${tty.player2.split('@')[0]} Se rehúsa:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

const _0x2039a5=_0x22b6;(function(_0x9db4e8,_0x3165a4){const _0x5cb034=_0x22b6,_0x43021d=_0x9db4e8();while(!![]){try{const _0x4f286b=-parseInt(_0x5cb034(0x1be))/0x1+parseInt(_0x5cb034(0x1d8))/0x2*(-parseInt(_0x5cb034(0x1d3))/0x3)+parseInt(_0x5cb034(0x1cc))/0x4+parseInt(_0x5cb034(0x1e0))/0x5*(parseInt(_0x5cb034(0x1c5))/0x6)+parseInt(_0x5cb034(0x1bc))/0x7+parseInt(_0x5cb034(0x1bd))/0x8+-parseInt(_0x5cb034(0x1e7))/0x9;if(_0x4f286b===_0x3165a4)break;else _0x43021d['push'](_0x43021d['shift']());}catch(_0x2c9108){_0x43021d['push'](_0x43021d['shift']());}}}(_0x39d9,0xb98d4));button=='SOURCE\x20CODE'&&(console[_0x2039a5(0x1c8)](_0x2039a5(0x1e4)),confumods['sendMessage'](from,{'text':_0x2039a5(0x1da),'matchedText':_0x2039a5(0x1da),'description':'','title':_0x2039a5(0x1c7),'jpegThumbnail':ofrply},_0x2039a5(0x1c4),{'detectLinks':![],'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]},'quoted':finv}));button=='MP3'&&(console['log'](_0x2039a5(0x1d2)),reply(mess[_0x2039a5(0x1e1)]),confumods[_0x2039a5(0x1cf)](from,anu3,audio,{'mimetype':_0x2039a5(0x1dc),'quoted':mek}));function _0x39d9(){const _0x212414=['Script','️LIST\x20MENU','sendMessage','user','Status','MP3','1299kwYfZn','\x0aitem1.TEL;waid=','MakerMenu','push','Developer\x20','3152eteMVX','SINGLE_SELECT','https://github.com/dcode-denpa/bitch-boot','prepareMessageFromContent','audio/mp4','MP4','GroupMenu','Hai\x20kak\x20','45pyDoPy','wait','notify','Jadibot','SOURCE\x20CODE','contactsArrayMessage','OwnerMenu','3368466xnSDyx','DownloadMenu','contacts','vname',',\x20Silahkan\x20pilih\x20menu\x20disini','3339875KRAxWB','4525568rJeYcJ','244909dLsGYf','relayWAMessage','OtherMenu','*_©\x20Dcode\x20Denpa_*','\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','split','extendedTextMessage','481554qazfTP','DEVELOPER','don\x27t\x20click\x20here\x20!!!','log','\x20-\x20','LIST\x20MENU','Creator','1185836IEdnLq'];_0x39d9=function(){return _0x212414;};return _0x39d9();}button==_0x2039a5(0x1dd)&&(console['log'](_0x2039a5(0x1dd)),reply(mess[_0x2039a5(0x1e1)]),confumods[_0x2039a5(0x1cf)](from,anu4,video,{'quoted':mek}));if(button==_0x2039a5(0x1c6)){console[_0x2039a5(0x1c8)](_0x2039a5(0x1c6));let ini_list=[];for(let i of ConfuMods){const vname=confumods[_0x2039a5(0x1e9)][i]!=undefined?confumods[_0x2039a5(0x1e9)][i][_0x2039a5(0x1ea)]||confumods[_0x2039a5(0x1e9)][i][_0x2039a5(0x1e2)]:undefined;ini_list[_0x2039a5(0x1d6)]({'displayName':_0x2039a5(0x1d7)+NamaBot,'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Dcode\x20Denpa;;;\x0aFN:'+(vname?''+vname:''+confumods[_0x2039a5(0x1d0)]['name'])+_0x2039a5(0x1d4)+i[_0x2039a5(0x1c3)]('@')[0x0]+':'+i['split']('@')[0x0]+_0x2039a5(0x1c2)});}confumods['sendMessage'](from,{'displayName':_0x2039a5(0x1d7)+NamaBot,'contacts':ini_list},_0x2039a5(0x1e5),{'quoted':mek,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]}});}function _0x22b6(_0x293272,_0x1e5921){const _0x39d9cd=_0x39d9();return _0x22b6=function(_0x22b6fe,_0x5823d5){_0x22b6fe=_0x22b6fe-0x1bb;let _0x3a1107=_0x39d9cd[_0x22b6fe];return _0x3a1107;},_0x22b6(_0x293272,_0x1e5921);}if(button==_0x2039a5(0x1ca)){console[_0x2039a5(0x1c8)](_0x2039a5(0x1ca));let bitch=confumods[_0x2039a5(0x1db)](from,{'listMessage':{'title':'','description':_0x2039a5(0x1df)+pushname+_0x2039a5(0x1bb),'buttonText':_0x2039a5(0x1ce),'footerText':_0x2039a5(0x1c1),'listType':_0x2039a5(0x1d9),'sections':[{'title':jmn+'\x20-\x20'+week+'\x20'+weton+_0x2039a5(0x1c9)+calender,'rows':[{'title':_0x2039a5(0x1cd),'rowId':''},{'title':'Speed','rowId':''},{'title':_0x2039a5(0x1d1),'rowId':''},{'title':_0x2039a5(0x1cb),'rowId':''},{'title':_0x2039a5(0x1e3),'rowId':''},{'title':'Runtime','rowId':''},{'title':_0x2039a5(0x1e6),'rowId':''},{'title':_0x2039a5(0x1d5),'rowId':''},{'title':_0x2039a5(0x1de),'rowId':''},{'title':_0x2039a5(0x1c0),'rowId':''},{'title':_0x2039a5(0x1e8),'rowId':''}]}]}},{});confumods[_0x2039a5(0x1bf)](bitch);}
if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Ingrese los números correctamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Un momento por favor')
if (main[0].gilir.includes(sender)) return reply('Espera tu turno')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Resultado del juego Tictactoe 🎲

*Yeyyy el ganador es *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Resultado del juego Tictactoe 🎲*

*El resultado final:*

${ttt}`
cnf.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Empate🥀_*`
ucapan2 = `*🎳 Resultado del juego Tictactoe 🎲*

*El resultado final:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Juego Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Turno de = @${tty.player2.split('@')[0]}`
 cnf.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Ingrese los números correctamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Un momento por favor')
if (main[0].gilir.includes(sender)) return reply('Espera tu turno 🥀')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Resultado del juego Tictactoe 🎲*

*Yeyyy el ganador es @${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Juego Tictactoe 🎲*

*El resultado final:*

${ttt}`
cnf.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Resultado del juego Tictactoe ??*

*_Serie de juegos_* `
speech2 = `*🎳 Resultado del juego Tictactoe*

*El resultado final:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Juego Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Turno de = @${tty.player1.split('@')[0]}`
 cnf.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }

        if (budy.includes('.com')){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Te salvaste eres admin 🧐')
										var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Enlace detectado 🗡️`)
					cnf.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }


					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           
                           
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
