require('./config')
require('./config2')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const path = require('path')
const ytdl = require("clash-wa-bot-ytdl");

var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
const ffmpeg = require("fluent-ffmpeg");

const fetch = require("node-fetch")

const { randomFancy, tiny } = require("@toxickichux/fancytext");
const os = require('os')
const fsx = require('fs-extra')
const jsobfus = require('javascript-obfuscator')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo} = require('./lib/converter')
const { exec, spawn, execSync } = require("child_process")
const qris = fs.readFileSync ('./media/qris.jpg')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/addlist');

// read database
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
    users: {},
    premium: {},
    banned: {},
    group: {},
    database: {},
    settings: {},
    donate: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
}

moment.tz.setDefault("Asia/Kolkata").locale("id")

module.exports = conn = async (conn, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await conn.decodeJid(conn.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
	    
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

        // Days
        const hariini = moment.tz('Asia/Kolkata').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Kolkata').format('HH : mm : ss')
        const wit = moment.tz('Asia/Kolkata').format('HH : mm : ss')
        const wita = moment.tz('Asia/Kolkata').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }


        
        const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': global.ownername,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;global.botname,;;;\nFN:global.botname\nitem1.TEL;waid=global.ownername:+${owner}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': global.thumb,
                    thumbnail: global.thumb,
                    sendEphemeral: true
                }   
            }
        }
       
      
     
      //mention
  
if (global.ownermention) { if (m.chat) {
var audios = global.mentionaudio
var logo = global.mthumb
for (any in ownernumber)
if (m.text.includes(ownernumber[any])) {
const audio = audios[Math.floor(Math.random() * audios.length)]
const Audio = await getBuffer(audio)
let image1 = await getBuffer(logo)
let image2 = await getBuffer(logo)
var res = await toAudio(Audio, 'mp4')
conn.sendMessage(m.chat, {
audio: res,
mimetype: 'audio/mpeg', ptt: true,seconds: 99999999999,
waveform:  [
100,0,100,0,100,0,100
], 
contextInfo: {
				externalAdReply: {
				title: global.mtitle,
				body: global.mbody,
				mediaType: 2,
				thumbnail: image2,
				mediaUrl: global.murl,
				sourceUrl: global.murl,
				showAdAttribution: true,
      renderLargerThumbnail: global.largethumb
                }}
                },
                { quoted: fkontak})
}}}


        // Database Tambahan!!

        let prem = JSON.parse(fs.readFileSync('./database/premium.json'))
        let vnnya = JSON.parse(fs.readFileSync('./database/vnnya.json'))
        let db_error = JSON.parse(fs.readFileSync('./database/error.json'));
        let db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
 
        // Const Tambahan Sc Gw

        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        const getCase = (cases) => {
            return "case  "+`'${cases}'`+fs.readFileSync("./adrian.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
        }
        const totalFitur = () =>{
            var mytext = fs.readFileSync("./adrian.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        const sendvn = (teks) => {
            conn.sendMessage(m.chat, { audio: teks, mimetype: 'audio/mpeg', ptt: true,seconds: 360000000,
waveform:  [
100,0,100,0,100,0,100
],  }, { quoted: m })
        }

        for (let anju of vnnya) {
            if (budy === anju) {
                let buffer = fs.readFileSync(`./database/AUDIO/${anju}.mp3`)
                sendvn(buffer)
            }
        }
        
       

        // Function Created By ManzGans Alias Dryan ft .𝐗𝐓𝐑𝐀𝐌
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

function generateRandomPassword() {
    return Array(10).fill(null).map(() => (Math.random() * 16 | 0).toString(16)).join('');
}
        
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `ManzGans`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}


       
       adreply = async (teks) => {                                           
            conn.sendMessage(m.chat, { text: teks, contextInfo: { externalAdReply: {

title: global.botname,

sourceUrl: global.url,

mediaUrl: global.url,

mediaType: 1,

showAdAttribution: true,

renderLargerThumbnail: global.largethumb,

thumbnailUrl: global.thumb }}}, { quoted : m });
                                                                                                         }
                                                                                 newReply = async (teks) => {                                           
            conn.sendMessage(m.chat, { text: teks, contextInfo: { externalAdReply: {

title: global.botname,

sourceUrl: global.url,

mediaUrl: global.url,

mediaType: 1,

showAdAttribution: true,

renderLargerThumbnail: global.largethumb,

thumbnailUrl: global.thumb }}}, { quoted : fkontak });
                                                                                                         }

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let group = global.db.data.group[m.chat]
            if (typeof group !== 'object') global.db.data.group[m.chat] = {}
            if (group) {
                if (!('mute' in group)) group.mute = false
                if (!('antilink' in group)) group.antilink = false
                if (!('antilinkyt' in group)) group.antilinkyt = false
                if (!('antilinktt' in group)) group.antilinktt = false
                if (!('antivirtex' in group)) group.antivirtex = false
                if (!('antisettings' in group)) group.antisettings = true
                if (!('antilinkv2' in group)) group.antilinkv2 = false
            } else global.db.data.group[m.chat] = {
                mute: false,
                antilink: false,
                antilinkyt: false,
                antilinktt: false,
                antivirtex: false,
                antisettings: true,
                antilinkv2: true
            }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('autoread' in setting)) setting.autoread = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }

        } catch (err) {
            console.error(err)
        }
        // Public & Self
        if (!conn.public) {
            if (!m.key.fromMe) return
        }
        
        if (m.message) {
            if (global.db.data.settings[botNumber].autoread) {
            conn.readMessages([m.key])
            }
        }
        
        // Push Message To Console && Auto Read
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'PRIVATE CMD', m.chat))
        }
        
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	    if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await conn.updateProfileStatus(`ɪ ᴀᴍ global.botname | ᴀᴄᴛɪᴠᴇ ꜱɪɴᴄᴇ ${uptime} ⏳ | ᴍᴏᴅᴇ : ${conn.public ? 'Public-Mode' : 'Self-Mode'} | User : ${Object.keys(global.db.data.users).length}`).catch(_ => _)
		setting.status = new Date() * 1
	    }
	    }
	
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: conn.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        conn.ev.emit('messages.upsert', msg)
        }
        
        if (db.data.group[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                newReply(`「 ANTI LINK WHATSAPP 」\n\nKamu Terdeteksi Mengirim Link Group, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return newReply(`Ehh Bot Gak Admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return newReply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        if (db.data.group[m.chat].antilinkv2) {
            if (budy.match(`chat.whatsapp.com`)) {
                newReply(`「 ANTI LINK WHATSAPP 」\n\n*JANGAN SHARE GC LAIN!!!*`)
                if (!isBotAdmins) return newReply(`Ehh Bot Gak Admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return newReply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.sendMessage(m.chat, { delete: m.key })
            }
        }
        //Anti Link YouTube
        if (db.data.group[m.chat].antilinkyt) {
            if (budy.match(`https://youtu.be`)) {
                newReply(`「 ANTI LINK YOUTUBE 」\n\nKamu Terdeteksi Mengirim Link Youtube, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return newReply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Anti Link Tiktok
        if (db.data.group[m.chat].antilinktt) {
            if (budy.match(`https://vt.tiktok.com`)) {
                newReply(`「 ANTI LINK TIKTOK 」\n\nKamu Terdeteksi Mengirim Link TikTok, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return newReply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //AntiVirtex
        if (db.data.group[m.chat].antivirtex) {
            if (budy.length > 3500) {
                newReply(`Seseorang mengirim spam virus!! tandai sebagai membaca⚠️\n`.repeat(300))
                newReply(`「 ANTI VIRTEX 」\n\nKamu Terdeteksi Mengirim Virtex, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return newReply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        if (db.data.group[m.chat].antisettings) {
            if (budy.startsWith('wa.me/settings')) {
            conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            if (!isBotAdmins) return newReply(`Ehh Bot Gak Admin T_T`)
            conn.sendMessage(m.chat, { delete: m.key })
            }
        }
        // Mute Chat
        if (db.data.group[m.chat].mute && !isAdmins && !isCreator) {
            return
        }
        switch (command) {
        // Premium
        
        
        
        case 'paptt':
            if (!isPremium) return newReply(mess.prem)
            if (!q) return newReply(`Example ${prefix + command} foto/video`)
            let papttfoto = JSON.parse(fs.readFileSync('./lib/paptt-foto.json'))
            let papttvideo = JSON.parse(fs.readFileSync('./lib/paptt-video.json'))
            let titid1 = (pickRandom(papttfoto))
            let titid2 = (pickRandom(papttvideo))
            if (q == 'foto') {
                newReply("Foto Akan Dikirim Lewat Private Chat ( *PC* )")
                conn.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            } else if (q == 'video') {
                newReply("Video Akan Dikirim Lewat Private Chat ( *PC* )")
                conn.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🥵'}, { quoted: fkontak })
            }
        break
        
        case 'buatgc':
            if (!isPremium) return newReply(mess.prem)
            if (!text) return newReply('_Masukkan Nama Grup!_')
            try{
                newReply(mess.wait)
                let group = await conn.groupCreate(text, [m.sender])
                let link = await conn.groupInviteCode(group.gid)
                let url = 'https://chat.whatsapp.com/' + link;
                /// console.log(chalk.bold.red('Membuat Grup: ' + group.gid + '\nNama Grup: ' + text + '\n\nViolet'))
                newReply('_Berhasil Membuat Grup *' + text + '*_\n\n*Nama:* ' + text + '\n*ID:* ' + group.gid + '\n*Link:* ' + url)
            } catch (e) {
                let [namagc, partici] = text.split('|')
                if (!namagc) return newReply('Format Salah!!!')
                if (!partici) return newReply('Tag user sebagai member baru!')
                let mem = conn.parseMention(`@${parseInt(m.sender)} ${partici}`)
                let ha = await conn.groupCreate(namagc, mem).catch(console.error)
                console.log(JSON.stringify(ha));
                await newReply(`*GROUP CREATE*

\`\`\`Group Telah Dibuat @${m.sender.replace(/@.+/, '')}\`\`\`


${JSON.stringify(ha.participants)}`)
                conn.groupMakeAdmin(ha.gid, [m.sender])
                if (!isCreator) {
                    await conn.modifyChat(ha.gid, 'delete', {
                        includeStarred: false
                    }).catch(console.error)
                    conn.groupLeave(ha.gid)
                }
            }
        break
     
        case 'session':
            if (!isCreator) return newReply(mess.owner)
            newReply('Tunggu Sebentar, Sedang mengambil file sesi mu')
            let sesi = await fs.readFileSync('./session/creds.json')
            conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'creds.json' }, { quoted: m })
        break
        
        case 'autoread':
            if (!isCreator) return newReply(mess.owner)
            if (args.length < 1) return newReply(`type ${prefix + command} on/off`)
            if (q === 'on'){
                global.db.data.settings[botNumber].autoread = true
            newReply(`Berhasil mengubah autoread ke ${q}`)
            } else if (q === 'off'){
                global.db.data.settings[botNumber].autoread = false
            newReply(`Berhasil mengubah autoread ke ${q}`)
            }
        break
        
        case 'autobio':
            if(!isCreator) return newReply(mess.owner)
            if (args.length < 1) return newReply(`Example ${prefix + command} on/off`)
            if (q == 'on'){
                global.db.data.settings[botNumber].autobio = true
                newReply(`Successfully changed autoread to${q}`)
            } else if (q == 'off'){
                global.db.data.settings[botNumber].autobio = false
                newReply(`Successfully changed autoread to ${q}`)
            }
        break
        case '🎈' : {
        adreply("enthada myre")
        }
        break
        
        case 'public': {
                if (!isCreator) return newReply(mess.owner)
                conn.public = true
                newReply('Success Change To Public Mode')
        }
        break
        case 'self': {
                if (!isCreator) return newReply(mess.owner)
                conn.public = false
                newReply('Success Change To Self Mode')
            }
        break
        
        

        
        case 'enc': {
            if (!isCreator) return newReply(mess.owner)
            if (!q) return newReply(`Example ${prefix+command} const endi = require('endi')`)
            let meg = await obfus(q)
            newReply(`${meg.result}`)
        }
        break
        
        case 'pushcontact': {
          if (!text) return newReply(`Example ${prefix}${command} Hi myre`)
          if (!isCreator) return newReply(mess.owner)
          let get = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
          let count = get.length;
          let sentCount = 0;
          newReply('*_Sedang Push Kontak..._*');
          for (let i = 0; i < get.length; i++) {
            setTimeout(function() {
              conn.sendMessage(get[i], { text: text });
              count--;
              sentCount++;
              if (count === 0) {
                newReply(`*_All messages have been sent!_*:\n*_Number of sent messages:_* *_${sentCount}_*`);
              }
            }, i * 1000); // delay setiap pengiriman selama 1 detik
          }
        }
        break
        
        case 'addbgm':{
            if (!isCreator) return newReply(mess.owner)
            if (args.length < 1) return newReply('type any text')
            if (vnnya.includes(q)) return newReply("The name is already in use")
            let delb = await conn.downloadAndSaveMediaMessage(quoted)
            vnnya.push(q)
            await fsx.copy(delb, `./database/AUDIO/${q}.mp3`)
            fs.writeFileSync('./database/vnnya.json', JSON.stringify(vnnya))
            fs.unlinkSync(delb)
            newReply(`Success Adding Audio\nCheck by ${prefix}listbgm`)
        }
        break
        case 'delbgm':{
            if (!isCreator) return newReply(mess.owner)
            if (args.length < 1) return newReply('Enter query')
            if (!vnnya.includes(q)) return newReply("The name does not exist in the database")
            let wanu = vnnya.indexOf(q)
            vnnya.splice(wanu, 1)
            fs.writeFileSync('./database/vnnya.json', JSON.stringify(vnnya))
            fs.unlinkSync(`./database/AUDIO/${q}.mp3`)
            newReply(`Success delete bgm ${q}`)
        }
        break
        
        case 'listbgm':{
            let teksooo = '┌──⭓「 *LIST BGM* 」\n│\n'
            for (let x of vnnya) {
            teksooo += `│⭔ ${x}\n`
            }
            teksooo += `│\n└────────────⭓\n\n*Total ada : ${vnnya.length}*`
            newReply(teksooo)
        }
        break
        
        
        
       
        case 'myip': {
        if (!isCreator) return newReply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        newReply("🔎 My public IP address is: " + ip);
                    })
                })
            }
        break
        
        
        case 'chat': {
                if (!isCreator) return newReply(mess.owner)
                if (!q) return newReply('Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
                if (args[0] === 'mute') {
                    conn.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    conn.chatModify({ mute: null }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    conn.chatModify({ archive: true }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    conn.chatModify({ archive: false }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    conn.chatModify({ markRead: true }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    conn.chatModify({ markRead: false }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    conn.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                }
            }
        break
        
        case 'react': {
                if (!isCreator) return newReply(mess.owner)
                if (!args[0]) return newReply(`Example: ${prefix + command} Title`)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                conn.sendMessage(m.chat, reactionMessage)
            }
        break
        case 'shutdown': {
             if (!isCreator) return newReply(mess.owner)
			 newReply(`ok bye 🥲`)
             await sleep(3000)
             process.exit()
             }
        break
        case 'join': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply('where is the group link!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('Link Invalid!')
                newReply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
        }
        break
        case 'leave': {
                if (!isCreator) return newReply(mess.owner)
                await conn.groupLeave(m.chat).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
        }
        break
        case 'setexif': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                newReply(`successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
        }
        break
        case 'setpp':
        case 'setpp':
            case 'setppbot': {
            if (!isCreator) return newReply(mess.owner)
            if (!quoted) return newReply(`Send/Reply Image With Caption ${prefix + command}`)
            if (!/image/.test(mime)) return newReply(`Send/Reply Image With Caption ${prefix + command}`)
            if (/webp/.test(mime)) return newReply(`Send/Reply Image With Caption ${prefix + command}`)
            var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
            if (args[0] == 'full') {
            var { img } = await generateProfilePicture(medis)
            await conn.query({
            tag: 'iq',
            attrs: {
            to: botNumber,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            fs.unlinkSync(medis)
            reply(mess.success)
            } else {
            var memeg = await conn.updateProfilePicture(botNumber, { url: medis })
            fs.unlinkSync(medis)
            newReply(`Sukses`)
            }
            }
        break
        
        // Main Menu
        case 'owner': 
        case 'creator': {
                const vcard =
				'BEGIN:VCARD\n' + // metadata of the contact card
				'VERSION:3.0\n' +
				`FN:global.ownername\n` + // full name
				`ORG:global.botname\n` + // the organization of the contact
				`TEL;type=MSG;type=CELL;type=VOICE;waid=global.owmernumber:+global.ownernumber\n` + // WhatsApp ID + phone number
				'END:VCARD'
			conn.sendMessage(m.chat, {
				contacts: {
					displayName: global.ownername,
					contacts: [{ vcard }],
				},
			}, { quoted: fkontak})
               }
        break


case 'spamsms': {
if (!isCreator) return newReply(mess.owner)
const froms = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || q) {
if (froms.startsWith('08')) return newReply('Prefix number with +91')
if (froms == owner) return newReply('Cannot spam this number!')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS) BY IOX`);
});
}
} else newReply(`Use of spamsms target number/reply message*\nExample of spamsms +${nomorlu}`)
newReply(`Done sending sms`)
}
break
	    
	    
	    case 'tes':
	    
conn.sendMessage(m.chat, {audio: fs.readFileSync('./vn.mp3'), ptt: true, 
seconds: 4600000000000000000000,
waveform:  [
100,0,100,0,100,0,100
], 
 mimetype: 'audio/mpeg'}, { quoted: m })
 break
	    case 'ping' :
	    const start = new Date().getTime();
    const pari = await randomFancy("_*Checking Speed*_")
    await adreply(pari);
    const end = new Date().getTime();
    
      const kriz = await randomFancy( (end - start) + " *ms︎*")
    return await adreply(kriz);
    break
    
        case 'runtime': case 'uptime' :
            	
          const myr = randomFancy(`_*Runtime : ${runtime(process.uptime())}*_`)
adreply(myr)      
        break
        
        
        
        
        
        
        
        
        

            case 'sc':
            case 'script':
               adreply(`Script Bot ${global.botname} https://github.com/EX-SPARKY/X-BOT-MD`)
            break
        // Group Fitur
            case 'antilinkv2':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (args.length < 1) return newReply(`Example ${prefix + command} on/off`)
                if (q == 'on'){
                    global.db.data.group[m.chat].antilinkv2 = true
                    newReply(`Berhasil Mengaktifkan antilinkv2`)
                } else if (q == 'off'){
                    global.db.data.group[m.chat].antilinkv2 = false
                    newReply(`Berhasil Mematikan antilinkv2`)
                }
            break
            case 'kick': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'add': 
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins && !isCreator) return m.reply('Lah Dikira Admin Group Kali')
m.reply('fitur ini telah di hapus oleh owner di sebabkan rawan band jadi tambahin sndri aja dek!!')
break
            
            case 'promote': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'demote': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'block': {
                if (!isCreator) return newReply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.updateBlockStatus(users, 'block').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'unblock': {
                if (!isCreator) return newReply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.updateBlockStatus(users, 'unblock').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setname':
            case 'setsubject': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (!text) return 'Text ?'
                await conn.groupUpdateSubject(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setdesc':
            case 'setdesk': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (!text) return 'Text ?'
                await conn.groupUpdateDescription(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc': {
            if (!m.isGroup) return newReply(mess.group)
            if (!isAdmins) return newReply(mess.admin)
            if (!isBotAdmins) return newReply(mess.botAdmin)
            if (!quoted) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            if (!/image/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            if (/webp/.test(mime)) return newReply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
            var mediz = await conn.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
            if (args[0] == `/panjang`) {
            var { img } = await generateProfilePicture(mediz)
            await conn.query({
            tag: 'iq',
            attrs: {
            to: m.chat,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            fs.unlinkSync(mediz)
            reply(`Sukses`)
            } else {
            var memeg = await conn.updateProfilePicture(m.chat, { url: mediz })
            fs.unlinkSync(mediz)
            reply(`Sukses`)
            }
            }
            break
            case 'tagall': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let teks = `*👥 Tag All By Admin*
 
                 🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                
            }
            break
            case 'hidetag': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                conn.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            }
            break
            case 'totag': {
               if (!m.isGroup) return newReply(mess.group)
               if (!isBotAdmins) return mess.botAdmin
               if (!isAdmins) return mess.admin
               if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
               conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
            case 'antilink': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.group[m.chat].antilink) return newReply(`Sudah Aktif Sebelumnya 🕊️`)
                    db.data.group[m.chat].antilink = true
                    newReply(`Antilink Group WhatsApp Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.group[m.chat].antilink) return newReply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.group[m.chat].antilink = false
                    newReply(`Antilink Group WhatsApp Nonaktif 🕊️`)
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'antilinkyt': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.group[m.chat].antilinkyt) return newReply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.group[m.chat].antilinkyt = true
                    newReply(`Antilink YouTube Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.group[m.chat].antilinkyt) return newReply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.group[m.chat].antilinkyt = false
                    newReply(`Antilink YouTube Nonaktif 🕊️`)
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'antilinktt': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.group[m.chat].antilinktt) return newReply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.group[m.chat].antilinktt = true
                    newReply(`Antilink TikTok Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.group[m.chat].antilinktt) return newReply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.group[m.chat].antilinktt = false
                    newReply(`Antilink TikTok Nonaktif 🕊️`)
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'mutegc': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.group[m.chat].mute) return newReply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.group[m.chat].mute = true
                    newReply(`${ntiktok} telah di mute di group ini 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.group[m.chat].mute) return newReply(`Sudah Tidak Aktif Sebelumnya 🕊`)
                    db.data.group[m.chat].mute = false
                    newReply(`${ntiktok} telah di unmute di group ini 🕊️`)
                } else {
                   newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return `Text mana?\n\nContoh : ${prefix + command} Akame ><`
                let getGroups = await conn.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                newReply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑Sewa' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
                await conn.sendMessage(i,  txt, ntiktok, m, {quoted: fkontak})
                }
                newReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return `Text mana?\n\nContoh : ${prefix + command} Akame ><`
                let anu = await store.chats.all().map(v => v.id)
                newReply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		    for (let yoi of anu) {
		            await sleep(1500)
		            let txt = `「 Broadcast Bot 」\n\n${text}`
                    let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑Sewa' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
                    await conn.sendMessage(yoi,  txt, ntiktok, m, {quoted: fkontak})
            }
		    newReply('Sukses Broadcast')
            }
            break
            case 'group':
            case 'grup': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'announcement').then((res) => newReply(`Sukses Menutup Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => newReply(`Sukses Membuka Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else {
                  newReply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'unlocked').then((res) => newReply(`Sukses Membuka Edit Info Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'locked').then((res) => newReply(`Sukses Menutup Edit Info Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let response = await conn.groupInviteCode(m.chat)
                conn.sendText(m.chat, `👥 *INFO LINK GROUP*\n📛 *Nama :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m,  {
                    detectLink: true
                })
            }
            break
            case 'revoke': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                await conn.groupRevokeInvite(m.chat)
                    .then(res => {
                        newReply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                    }).catch((err) => newReply(jsonformat(err)))
                    }
            break
            case 'listonline':
            case 'liston': {
                if (!m.isGroup) newReply(mess.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                conn.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, {
                    mentions: online
                })
            }
            break
       
            
            
            
            
            
			
			
			
			case 'twtdl': {
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            newReply(`🚩 5 Limit Used`)
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				conn.sendMessage(m.chat, { video: { url: data.result.link[data.result.link.length - 1].link }, mimetype: 'video/mp4' })
			})
			
			}
			break
			
		    case 'fbdl': {
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 5
            newReply(`🚩 5 Limit Used`)
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				conn.sendMessage(m.chat, { video: { url: data.result }, mimetype: 'video/mp4' })
			})
			
			}
			break
			
			// Tools Fitur
            case 'hapus': 
            case 'delete': 
            case 'del': 
            case 'd': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                newReply(`🚩 1 Limit Used`)
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return newReply('Pesan tersebut bukan dikirim oleh bot!')
                conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            
            case 'q':
            case 'quoted': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1
                newReply(`🚩 1 Limit Used`)
                if (!m.quoted) return newReply('Reply Pesannya!!')
                let wokwol = await conn.serializeM(await m.getQuotedObj())
                if (!wokwol.quoted) return newReply('Pesan Yang Anda Reply Tidak Mengandung Reply')
                await wokwol.quoted.copyNForward(m.chat, true)
            }
            break
            
            case 'ebinary': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                newReply(`🚩 3 Limit Used`)
                let {
                    eBinary
                } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let eb = await eBinary(teks)
                newReply(eb)
            }
            break
            case 'dbinary': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                newReply(`🚩 3 Limit Used`)
                let {
                    dBinary
                } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let db = await dBinary(teks)
                newReply(db)
            }
            break
            
            case 'ss':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 3
            newReply(`🚩 3 Limit Used`)
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ssweb?apikey=${apikey}&url=${args[0]}`}, caption: `URL: ${args[0]}`}, { quoted: fkontak })
			break
			
		    case 'ssweb':
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 3
            newReply(`🚩 3 Limit Used`)
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/sswebfull?apikey=${apikey}&url=${args[0]}`}, caption: `URL: ${args[0]}`}, { quoted: m})
			break
			
		    case 'shortlink':
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 3
            newReply(`🚩 3 Limit Used`)
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
			axios.get(`https://api.lolhuman.xyz/api/ouoshortlink?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				newReply(data.result)
			})
			break
			
			// AI FITUR
			case 'aiimage': {
			if (!isPremium) return newReply(mess.prem)
            if (args.length == 0) return newReply(`Membuat gambar dari AI.\n\nContoh :\n${prefix+command} rumah mewah`)
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/dall-e?apikey=${apikey}&text=${args[0]}` }, caption: `${args[0]}` }, {quoted:m})
            }
            break
            
            case 'ai':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            newReply(`🚩 10 Limit Used`)
			if (args.length == 0) return newReply(`Example: ${prefix + command} ai adalah`)
			axios.get(`https://api.lolhuman.xyz/api/openai?apikey=${apikey}&text=${encodeURIComponent(full_args)}&user=${senderNumber}`).then(({ data }) => {
				newReply(data.result)
			})
			break
            
         
            
            case 'google': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                newReply(`🚩 5 Limit Used`)
                if (!text) return newReply(`Contoh : ${prefix + command} fatih arridho`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `• *Title* : ${g.title}\n`
                teks += `• *Description* : ${g.snippet}\n`
                teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                newReply(teks)
                })
                }
            break
            
            
            case 'info': {
                if (!m.quoted) newReply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return newReply('Pesan tersebut bukan dikirim oleh bot!')
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `👤 @${i.userJid.split('@')[0]}\n`
                    teks += `⏳ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}\n📈 *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                newReply(teks)
            }
            break
            

		
			
		    
			
			
			
		
			
		    
			case 'qc': {
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 7
            newReply(`🚩 7 Limit Used`)
            const { quote } = require('./lib/quote.js')
            if (!q) return ('Masukan Text')
            let ppnyauser = await await conn.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
            const rest = await quote(q, pushname, ppnyauser)
            newReply(mess.wait)
            conn.sendImageAsSticker(m.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
            }
            break
            
            
			case 'sticker':
            case 'stiker':
            case 's':{
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 10
                newReply(`🚩 10 Limit Used`)
                if (!quoted) return newReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                newReply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            
            case 'wm': case 'take': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                newReply(`🚩 7 Limit Used`)
if (!args.join(" ")) return adreply(`Example :\nwm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
conn.downloadAndSaveMediaMessage(quoted, "gifee")
conn.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return adreply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await (m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
adreply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
            
            
            
            case 'emojimix': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                newReply(`🚩 3 Limit Used`)
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return newReply(`Contoh : ${prefix + command} 😅+🤔`)
                if (!emoji2) return newReply(`Contoh : ${prefix + command} 😅+🤔`)
                newReply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            
            case 'emojimix2': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3
                newReply(`🚩 3 Limit Used`)
                if (!text) return newReply(`Contoh : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            
            
            case 'toimage': 
            case 'toimg': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2
            newReply(`🚩 2 Limit Used`)
                if (!/webp/.test(mime)) return newReply(`Reply sticker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                
            }
            break
	        case 'tomp4': 
	        case 'tovideo': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2
            newReply(`🚩 2 Limit Used`)
                if (!/webp/.test(mime)) return newReply(`Reply stiker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            
            case 'toaud': 
            case 'toaudio': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2
            newReply(`🚩 2 Limit Used`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
            newReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            
            }
            break
            
            case 'tomp3': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 9
            newReply(`🚩 9 Limit Used`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
            newReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ManzGans.mp3`}, { quoted : m })
            
            }
            break
            
            case 'tovn': 
            case 'toptt': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 8
            newReply(`🚩 8 Limit Used`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
            newReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            
            }
            break
            
            case 'togif': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                newReply(`🚩 5 Limit Used`)
                if (!/webp/.test(mime)) return newReply(`Reply stiker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            
	        case 'tourl': {
	            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                newReply(`🚩 5 Limit Used`)
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    newReply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    newReply(util.format(anu))
                }
                await fs.unlinkSync(media)
                
            }
            break
            
            // Stalk Fitur
            case 'igstalk': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            newReply(`🚩 10 Limit Used`)
			if (args.length == 0) return newReply(`Example: ${prefix + command} whyzzxy`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/stalkig/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.username}\n`
				caption += `Full Name : ${data.result.fullname}\n`
				caption += `Posts : ${data.result.posts}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Following : ${data.result.following}\n`
				caption += `Bio : ${data.result.bio}`
				conn.sendMessage(m.chat, { image: { url: data.result.photo_profile }, caption })
			})
			
			}
			break

            case 'ttstalk': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            newReply(`🚩 10 Limit Used`)
			if (args.length == 0) return newReply(`Example: ${prefix + command} dryan.pu`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.username}\n`
				caption += `Nickname : ${data.result.nickname}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Followings : ${data.result.followings}\n`
				caption += `Likes : ${data.result.likes}\n`
				caption += `Video : ${data.result.video}\n`
				caption += `Bio : ${data.result.bio}\n`
				conn.sendMessage(m.chat, { image: { url: data.result.user_picture }, caption })
			})
			
			}
			break
			
			case 'mlstalk': {
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            newReply(`🚩 10 Limit Used`)
			if (args.length == 0) return newReply(`Example: ${prefix + command} 84830127/2169`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/mobilelegend/${args[0]}?apikey=${apikey}`)
			newReply(data.result)
			
			}
			break
			
			case 'ghstalk': {
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            newReply(`🚩 10 Limit Used`)
			if (args.length == 0) return newReply(`Example: ${prefix + command} ManzGans`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/github/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Name : ${data.result.name}\n`
				caption += `Link : ${data.result.url}\n`
				caption += `Public Repo : ${data.result.public_repos}\n`
				caption += `Public Gists : ${data.result.public_gists}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Following : ${data.result.following}\n`
				caption += `Bio : ${data.result.bio}`
				conn.sendMessage(m.chat, { image: { url: data.result.avatar }, caption })
			})
			
			}
			break
			
		    case 'twstalk': {
		    if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 10
            newReply(`🚩 10 Limit Used`)
			if (args.length == 0) return newReply(`Example: ${prefix + command} jokowi`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/twitter/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.screen_name}\n`
				caption += `Name : ${data.result.name}\n`
				caption += `Tweet : ${data.result.tweet}\n`
				caption += `Joined : ${data.result.joined}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Following : ${data.result.following}\n`
				caption += `Like : ${data.result.like}\n`
				caption += `Description : ${data.result.description}`
				conn.sendMessage(m.chat, { image: { url: data.result.profile_picture }, caption })
			})
			
			}
			break
		
            

			
			
		
	        
	     
	        
	        

        
            

            
            
            
            
            /*
            case 'setcmd': {
                if (!m.quoted) return newReply('Reply Pesan!')
                if (!m.quoted.fileSha256) return newReply('SHA256 Hash Tidak Ditemukan ❎')
                if (!text) return newReply(`Untuk Command Apa?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return newReply('Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: +new Date,
                    locked: false,
                }
                newReply(mess.done)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return newReply(`Tidak Ada Hash`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return newReply('Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎')
                delete global.db.data.sticker[hash]
                newReply(mess.done)
            }
            break
            case 'listcmd': {
                let teks = `*List Hash 🚀*
Info: *bold* hash is Locked 🔒

*Hash ☕ :*
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                conn.sendText(m.chat, teks, m, {
                    mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
                })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return newReply(mess.owner)
                if (!m.quoted) return newReply('Reply Pesan!')
                if (!m.quoted.fileSha256) return newReply('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return newReply('Hash Not Found In Database')
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                newReply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) return newReply('Reply Message Yang Ingin Disave Di Database')
                if (!text) return newReply(`Contoh : ${prefix + command} Nama File`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return newReply(`'${text}' Telah Terdaftar Di List Pesan`)
                msgs[text.toLowerCase()] = quoted.fakeObj
                newReply(`Berhasil Menambahkan Pesan Di List Pesan Sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return newReply(`Contoh : ${prefix + command} File Name\n\nLihat List Pesan Dengan ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return newReply(`'${text}' Tidak Terdaftar Di List Pesan`)
                conn.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => {
                    return {
                        nama,
                        ...isi
                    }
                })
                let teks = 'LIST DATABASE 📂\n\n'
                for (let i of seplit) {
                    teks += `📛 *Name :* ${i.nama}`
                    teks += `🚀 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
                }
                newReply(teks)
            }
            break
            case 'delmsg':
            case 'deletemsg': {
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return newReply(`'${text}' tidak terdaftar didalam list pesan`)
                delete msgs[text.toLowerCase()]
                newReply(`Berhasil menghapus '${text}' dari list pesan`)
            }
            break
            */

            case 'menu':
    let menunya =`
  ☬ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☬ *Tanggal:* ${hariini}
  ☬ *Jam*: ${wib}
  ☬ *Bailyes:*: npm:baileysv2@9.0.2
  ☬ *Runtime:* ${runtime(process.uptime())}
  ☬ *Total User:* ${Object.keys(global.db.data.users).length}
  ☬ *Total Fitur:* ${totalFitur()}
  
Ӝ *I N F O  U S E R*

   ☬ *Name:* ${pushname}
   ☬ *Number:* ${m.sender.split('@')[0]}
   ☬ *Status:* ${isCreator ? "Owner" : "User"}
   ☬ *User:* ${isPremium ? 'Premium' : 'Gratisan'}
   ☬ *Limit:* ${isCreator ? 'Unlimited' : `${db.data.users[m.sender].limit}`}
   ${readmore}
Ӝ *O W N E R  M E N U*
◇ ‣ ${prefix}enc *<text>*
◇ ‣ ${prefix}spamsms
◇ ‣ ${prefix}call
◇ ‣ ${prefix}pushkontak *<text>*
◇ ‣ ${prefix}autoread *<on/off>*
◇ ‣ ${prefix}cekapikey *<apikey>*
◇ ‣ ${prefix}autobio *<on/off>*
◇ ‣ ${prefix}bcgc *<text>*
◇ ‣ ${prefix}bc *<text>*
◇ ‣ ${prefix}lockcmd *<text>*
◇ ‣ ${prefix}addprem *<@user>*
◇ ‣ ${prefix}delprem *<@user>*
◇ ‣ ${prefix}addvn *<sound>*
◇ ‣ ${prefix}delvn *<sound>*
◇ ‣ ${prefix}join *<link>*
◇ ‣ ${prefix}leave *only group*
◇ ‣ ${prefix}setexif *<package | author>*
◇ ‣ ${prefix}setppbot *<reply | caption>*
◇ ‣ ${prefix}setppbot full *<reply | caption>*
◇ ‣ ${prefix}setnamabot *<text>*
◇ ‣ ${prefix}setbiobot *<text>*
◇ ‣ ${prefix}block *<@user>*
◇ ‣ ${prefix}unblock *<@user>*
◇ ‣ ${prefix}ambilsesi
◇ ‣ ${prefix}ambilcase
◇ ‣ ${prefix}listpc
◇ ‣ ${prefix}listgc
◇ ‣ ${prefix}public
◇ ‣ ${prefix}self
◇ ‣ ${prefix}myip
◇ ‣ ${prefix}chat 
◇ ‣ ${prefix}shutdown
◇ ‣  >
◇ ‣  =>

Ӝ *C O N V E R T  M E N U*
◇ ‣ ${prefix}stiker *<image>*
◇ ‣ ${prefix}wm *<image>*
◇ ‣ ${prefix}smeme *<image>*
◇ ‣ ${prefix}emojimix *<😫>*
◇ ‣ ${prefix}emojimix2 *<😫+🥶>*
◇ ‣ ${prefix}toimage *<reply sticker>*
◇ ‣ ${prefix}tomp4 *<reply sticker>*
◇ ‣ ${prefix}toaudio *<video>*
◇ ‣ ${prefix}tomp3 *<video>*
◇ ‣ ${prefix}tovn *<video>*
◇ ‣ ${prefix}togif *<image>*
◇ ‣ ${prefix}tourl *<media>*

Ӝ *S T A L K E R  M E N U*
◇ ‣ ${prefix}igstalk *<username>*
◇ ‣ ${prefix}ttstalk *<username>*
◇ ‣ ${prefix}mlstalk *<username>*
◇ ‣ ${prefix}ghstalk *<username>*
◇ ‣ ${prefix}twstalk *<username>*

Ӝ *G R O U P  M E N U*
◇ ‣ ${prefix}kick *<@user>*
◇ ‣ ${prefix}add *<@user>*
◇ ‣ ${prefix}culik *<@user>*
◇ ‣ ${prefix}promote *<@user>*
◇ ‣ ${prefix}demote *<@user>*
◇ ‣ ${prefix}setname *<text>*
◇ ‣ ${prefix}setdesc *<text>*
◇ ‣ ${prefix}setppgc *<reply | caption>*
◇ ‣ ${prefix}tagall *<text>*
◇ ‣ ${prefix}hidetag *<text>*
◇ ‣ ${prefix}totag *<text>*
◇ ‣ ${prefix}antilink *<on/off>*
◇ ‣ ${prefix}antilinkv2 *<on/off>*
◇ ‣ ${prefix}antilinkyt *<on/off>*
◇ ‣ ${prefix}antilinktt *<on/off>*
◇ ‣ ${prefix}group *<close/open>*
◇ ‣ ${prefix}editinfo *<text>*
◇ ‣ ${prefix}mutegc
◇ ‣ ${prefix}ephemeral
◇ ‣ ${prefix}linkgc 
◇ ‣ ${prefix}revoke
◇ ‣ ${prefix}liston

Ӝ *F U N   M E N U*
◇ ‣ ${prefix}apakah *<text>*
◇ ‣ ${prefix}bisakah *<text>*
◇ ‣ ${prefix}bagaimanakah *<text>*
◇ ‣ ${prefix}rate *<text>*
◇ ‣ ${prefix}gantengcek *<text>*
◇ ‣ ${prefix}cekganteng *<text>*
◇ ‣ ${prefix}cantikcek *<text>*
◇ ‣ ${prefix}cekcantik *<text>*
◇ ‣ ${prefix}sangecek *<text>*
◇ ‣ ${prefix}ceksange *<text>*
◇ ‣ ${prefix}gaycek *<text>*
◇ ‣ ${prefix}cekgay *<text>*
◇ ‣ ${prefix}lesbicek *<text>*
◇ ‣ ${prefix}ceklesbi *<text>*
◇ ‣ ${prefix}kapankah *<text>*
◇ ‣ ${prefix}wangy *<text>*
◇ ‣ ${prefix}cekmati *<text>*
◇ ‣ ${prefix}halah *<text>*
◇ ‣ ${prefix}hilih *<text>*
◇ ‣ ${prefix}huluh *<text>*
◇ ‣ ${prefix}heleh *<text>*
◇ ‣ ${prefix}holoh *<text>*
   
Ӝ *M A I N  M E N U*
◇ ‣ ${prefix}owner
◇ ‣ ${prefix}ping
◇ ‣ ${prefix}speed
◇ ‣ ${prefix}menu
◇ ‣ ${prefix}script
◇ ‣ ${prefix}tqto
◇ ‣ ${prefix}runtime
◇ ‣ ${prefix}ceklimit
◇ ‣ ${prefix}buyprem
◇ ‣ ${prefix}totalfitur

Ӝ *P R I M B O N  M E N U*
◇ ‣ ${prefix}nomorhoki *<number>*
◇ ‣ ${prefix}artimimpi *<text>*
◇ ‣ ${prefix}artinama *<text>*
◇ ‣ ${prefix}ramaljodoh *<text>*
◇ ‣ ${prefix}ramaljodohbali *<text>*
◇ ‣ ${prefix}suamiistri *<text>*
◇ ‣ ${prefix}ramalcinta *<text>*
◇ ‣ ${prefix}cocoknama *<text>*
◇ ‣ ${prefix}pasangan *<text>*
◇ ‣ ${prefix}jadiannikah *<text>*
◇ ‣ ${prefix}sifatusaha *<text>*
◇ ‣ ${prefix}rezeki *<text>*
◇ ‣ ${prefix}pekerjaan *<text>*
◇ ‣ ${prefix}nasib *<text>*
◇ ‣ ${prefix}penyakit *<text>*
◇ ‣ ${prefix}tarot *<text>*
◇ ‣ ${prefix}fengshui *<text>*
◇ ‣ ${prefix}haribaik *<text>*
◇ ‣ ${prefix}harisangar *<text>*
◇ ‣ ${prefix}harisial *<text>*
◇ ‣ ${prefix}nagahari *<text>*
◇ ‣ ${prefix}arahrezeki *<text>*
◇ ‣ ${prefix}peruntungan *<text>*
◇ ‣ ${prefix}weton *<text>*
◇ ‣ ${prefix}karakter *<text>*
◇ ‣ ${prefix}keberuntungan *<text>*
◇ ‣ ${prefix}memancing *<text>*
◇ ‣ ${prefix}masasubur *<text>*
◇ ‣ ${prefix}zodiak *<birthday day>*
◇ ‣ ${prefix}shio
   
Ӝ *D A T A  M E N U*
◇ ‣ ${prefix}setcmd [reply sticker/pesan]
◇ ‣ ${prefix}listcmd
◇ ‣ ${prefix}delcmd [reply sticker/pesan]
◇ ‣ ${prefix}lockcmd
◇ ‣ ${prefix}addmsg
◇ ‣ ${prefix}listmsg
◇ ‣ ${prefix}getmsg
◇ ‣ ${prefix}delmsg

Ӝ *R A M D O N  M E N U*
◇ ‣ ${prefix}pokemon
◇ ‣ ${prefix}rize
◇ ‣ ${prefix}sagiri
◇ ‣ ${prefix}aesthetic
◇ ‣ ${prefix}anjing
◇ ‣ ${prefix}blankpink
◇ ‣ ${prefix}boneka
◇ ‣ ${prefix}hekel
◇ ‣ ${prefix}justina
◇ ‣ ${prefix}kpop
◇ ‣ ${prefix}kucing
◇ ‣ ${prefix}mobil
◇ ‣ ${prefix}motor
◇ ‣ ${prefix}pubg
◇ ‣ ${prefix}rose
◇ ‣ ${prefix}ryujin
◇ ‣ ${prefix}wallhp
◇ ‣ ${prefix}cyberspace
◇ ‣ ${prefix}mountain
◇ ‣ ${prefix}programming
◇ ‣ ${prefix}technology 
◇ ‣ ${prefix}couple

Ӝ *A S U P A N  M E N U*
◇ ‣ ${prefix}paptt *<foto/video>*
◇ ‣ ${prefix}bokep *<premium>*
◇ ‣ ${prefix}cecan
◇ ‣ ${prefix}china
◇ ‣ ${prefix}cogan
◇ ‣ ${prefix}indonesia
◇ ‣ ${prefix}japan
◇ ‣ ${prefix}korea
◇ ‣ ${prefix}malaysia
◇ ‣ ${prefix}thailand
◇ ‣ ${prefix}vietnam

Ӝ *T O O L S  M E N U*
◇ ‣ ${prefix}bass *<audio>*
◇ ‣ ${prefix}blown *<audio>*
◇ ‣ ${prefix}deep *<audio>*
◇ ‣ ${prefix}earrape *<audio>*
◇ ‣ ${prefix}fast *<audio>*
◇ ‣ ${prefix}fat *<audio>*
◇ ‣ ${prefix}nightcore *<audio>*
◇ ‣ ${prefix}reverse *<audio>*
◇ ‣ ${prefix}robot *<audio>*
◇ ‣ ${prefix}slow *<audio>*
◇ ‣ ${prefix}tupai *<audio>*
◇ ‣ ${prefix}delete *<text>*
◇ ‣ ${prefix}quoted *<text>*
◇ ‣ ${prefix}ebinary
◇ ‣ ${prefix}dbinary

Ӝ *C R E A T O R  I M A G E*
◇ ‣ ${prefix}tololsertifikat *<name>*
◇ ‣ ${prefix}bucinsertifikat *<name>*
◇ ‣ ${prefix}pacarsertifikat *<name>*
◇ ‣ ${prefix}ttp *<text>*
◇ ‣ ${prefix}attp *<text>*
◇ ‣ ${prefix}attp2 *<text>*
◇ ‣ ${prefix}qc *<text>*

Ӝ *I S L A M  M E N U*
◇ ‣ ${prefix}asmaulhusna
◇ ‣ ${prefix}alquranaudio
◇ ‣ ${prefix}alquran
◇ ‣ ${prefix}jadwalsolat
◇ ‣ ${prefix}kisahnabi
◇ ‣ ${prefix}listsurah
◇ ‣ ${prefix}iqro
◇ ‣ ${prefix}juzamma
◇ ‣ ${prefix}hadist
◇ ‣ ${prefix}tasfirsurah

Ӝ *D O W N  M E N U*
◇ ‣ ${prefix}ytplay *<name>*
◇ ‣ ${prefix}ytmp3 *<link>*
◇ ‣ ${prefix}ytmp4 *<link>*
◇ ‣ ${prefix}tiktok *<link>*
◇ ‣ ${prefix}tiktokaudio *<link>*
◇ ‣ ${prefix}igdl *<link>*
◇ ‣ ${prefix}igdl2 *<link>*
◇ ‣ ${prefix}twtdl *<link>*
◇ ‣ ${prefix}fbdl *<link>*
◇ ‣ ${prefix}gitclone *<link>*

Ӝ *E P H O T O _1_*
◇ ‣ ${prefix}wetglass *<text>*
◇ ‣ ${prefix}multicolor3d *<text>*
◇ ‣ ${prefix}watercolor *<text>*
◇ ‣ ${prefix}luxurygold *<text>*
◇ ‣ ${prefix}galaxywallpaper *<text>*
◇ ‣ ${prefix}lighttext *<text>*
◇ ‣ ${prefix}beautifulflower *<text>*
◇ ‣ ${prefix}puppycute *<text>*
◇ ‣ ${prefix}royaltext *<text>*
◇ ‣ ${prefix}heartshaped *<text>*
◇ ‣ ${prefix}birthdaycake *<text>*
◇ ‣ ${prefix}galaxystyle *<text>*
◇ ‣ ${prefix}hologram3d *<text>*
◇ ‣ ${prefix}greenneon *<text>*
◇ ‣ ${prefix}glossychrome *<text>*
◇ ‣ ${prefix}greenbush *<text>*
◇ ‣ ${prefix}metallogo *<text>*
◇ ‣ ${prefix}noeltext *<text>*
◇ ‣ ${prefix}glittergold *<text>*
◇ ‣ ${prefix}textcake *<text>*
◇ ‣ ${prefix}starsnight *<text>*
◇ ‣ ${prefix}wooden3d *<text>*
◇ ‣ ${prefix}textbyname *<text>*
◇ ‣ ${prefix}writegalacy *<text>*
◇ ‣ ${prefix}galaxybat *<text>*
◇ ‣ ${prefix}snow3d *<text>*
◇ ‣ ${prefix}birthdayday *<text>*
◇ ‣ ${prefix}goldplaybutton *<text>*
◇ ‣ ${prefix}silverplaybutton *<text>*
◇ ‣ ${prefix}freefire *<text>*

Ӝ *P H O T O  O X Y _1_*
◇ ‣ ${prefix}shadow
◇ ‣ ${prefix}cup
◇ ‣ ${prefix}cup1
◇ ‣ ${prefix}romance
◇ ‣ ${prefix}smoke
◇ ‣ ${prefix}burnpaper
◇ ‣ ${prefix}lovemessage
◇ ‣ ${prefix}undergrass
◇ ‣ ${prefix}love
◇ ‣ ${prefix}coffe
◇ ‣ ${prefix}woodheart
◇ ‣ ${prefix}woodenboard
◇ ‣ ${prefix}summer3d
◇ ‣ ${prefix}wolfmetal
◇ ‣ ${prefix}nature3d
◇ ‣ ${prefix}underwater
◇ ‣ ${prefix}golderrose
◇ ‣ ${prefix}summernature
◇ ‣ ${prefix}letterleaves
◇ ‣ ${prefix}glowingneon
◇ ‣ ${prefix}fallleaves
◇ ‣ ${prefix}flamming
◇ ‣ ${prefix}harrypotter
◇ ‣ ${prefix}carvedwood

Ӝ *T E X T  P R O _1_*
◇ ‣ ${prefix}blackpink *<text>*
◇ ‣ ${prefix}neon *<text>*
◇ ‣ ${prefix}greenneon *<text>*
◇ ‣ ${prefix}advanceglow *<text>*
◇ ‣ ${prefix}futureneon *<text>*
◇ ‣ ${prefix}sandwriting *<text>*
◇ ‣ ${prefix}sandsummer *<text>*
◇ ‣ ${prefix}sandengraved *<text>*
◇ ‣ ${prefix}metaldark *<text>*
◇ ‣ ${prefix}neonlight *<text>*
◇ ‣ ${prefix}holographic *<text>*
◇ ‣ ${prefix}text1917 *<text>*
◇ ‣ ${prefix}minion *<text>*
◇ ‣ ${prefix}deluxesilver *<text>*
◇ ‣ ${prefix}newyearcard *<text>*
◇ ‣ ${prefix}bloodfrosted *<text>*
◇ ‣ ${prefix}halloween *<text>*
◇ ‣ ${prefix}jokerlogo *<text>*
◇ ‣ ${prefix}fireworksparkle *<text>*
◇ ‣ ${prefix}natureleaves *<text>*
◇ ‣ ${prefix}bokeh *<text>*
◇ ‣ ${prefix}toxic *<text>*
◇ ‣ ${prefix}strawberry *<text>*
◇ ‣ ${prefix}box3d *<text>*
◇ ‣ ${prefix}roadwarning *<text>*
◇ ‣ ${prefix}breakwall *<text>*
◇ ‣ ${prefix}icecold *<text>*
◇ ‣ ${prefix}luxury *<text>*
◇ ‣ ${prefix}cloud *<text>*
◇ ‣ ${prefix}summersand *<text>*
◇ ‣ ${prefix}horrorblood *<text>*
◇ ‣ ${prefix}thunder *<text>*

Ӝ *T E X T  P R O _2_*
◇ ‣ ${prefix}pornhub *<text>*
◇ ‣ ${prefix}glitch *<text>*
◇ ‣ ${prefix}avenger *<text>*
◇ ‣ ${prefix}space *<text>*
◇ ‣ ${prefix}ninjalogo *<text>*
◇ ‣ ${prefix}marvelstudio *<text>*
◇ ‣ ${prefix}lionlogo *<text>*
◇ ‣ ${prefix}wolflogo *<text>*
◇ ‣ ${prefix}steel3d *<text>*
◇ ‣ ${prefix}wallgravity *<text>*

Ӝ *I N F O R M A T I O N*
◇ ‣ ${prefix}kbbi *<text>*
◇ ‣ ${prefix}brainly *<text>*
◇ ‣ ${prefix}roboguru *<text>*
◇ ‣ ${prefix}wikipedia *<text>*
◇ ‣ ${prefix}translate *<text>*
◇ ‣ ${prefix}google *<text>*
◇ ‣ ${prefix}gimage *<text>*
◇ ‣ ${prefix}jarak *<city1|city2>*
◇ ‣ ${prefix}kodepos *<city>*
◇ ‣ ${prefix}infocuaca *<city>*
◇ ‣ ${prefix}lirik *<song>*
◇ ‣ ${prefix}jadwaltv
◇ ‣ ${prefix}jadwaltvnow
◇ ‣ ${prefix}jadwalbola
◇ ‣ ${prefix}newsinfo
◇ ‣ ${prefix}cnnindonesia
◇ ‣ ${prefix}cnnnasional
◇ ‣ ${prefix}cnninternasional
◇ ‣ ${prefix}infogempa
◇ ‣ ${prefix}infochat

Ӝ *A N I M E  M E N U*
◇ ‣ ${prefix}genshin
◇ ‣ ${prefix}akira
◇ ‣ ${prefix}akiyama
◇ ‣ ${prefix}ana
◇ ‣ ${prefix}asuna
◇ ‣ ${prefix}ayuzawa
◇ ‣ ${prefix}boruto
◇ ‣ ${prefix}chitoge
◇ ‣ ${prefix}deidara
◇ ‣ ${prefix}doraemon
◇ ‣ ${prefix}elaina
◇ ‣ ${prefix}emilia
◇ ‣ ${prefix}erza
◇ ‣ ${prefix}gremory
◇ ‣ ${prefix}hestia
◇ ‣ ${prefix}hinata
◇ ‣ ${prefix}inori
◇ ‣ ${prefix}isuzu
◇ ‣ ${prefix}itachi
◇ ‣ ${prefix}itori
◇ ‣ ${prefix}kaga
◇ ‣ ${prefix}kagura
◇ ‣ ${prefix}kakasih
◇ ‣ ${prefix}kaori
◇ ‣ ${prefix}keneki
◇ ‣ ${prefix}kotori
◇ ‣ ${prefix}kurumi
◇ ‣ ${prefix}loli
◇ ‣ ${prefix}madara
◇ ‣ ${prefix}mikasa
◇ ‣ ${prefix}miku
◇ ‣ ${prefix}minato
◇ ‣ ${prefix}naruto
◇ ‣ ${prefix}nezuko
◇ ‣ ${prefix}onepiece
◇ ‣ ${prefix}sakura
◇ ‣ ${prefix}sasuke
◇ ‣ ${prefix}shina
◇ ‣ ${prefix}shinka
◇ ‣ ${prefix}shizuka
◇ ‣ ${prefix}shota
◇ ‣ ${prefix}toukachan
◇ ‣ ${prefix}tsunade
◇ ‣ ${prefix}yuki


Ӝ *M E M E  M E N U*
◇ ‣ ${prefix}darkjoke
◇ ‣ ${prefix}ramdommeme
◇ ‣ ${prefix}memeindo`
                conn.sendMessage(m.chat, {
                    image: fs.readFileSync('./media/menu.jpg'),
                    caption: menunya
                },
                {
                    quoted: fkontak
                })
await sleep(1000)
conn.sendMessage(m.chat, {audio: fs.readFileSync('./vn.mp3'), ptt: true, 
seconds: 360000000,
waveform:  [
100,0,100,0,100,0,100
], 
 mimetype: 'audio/mpeg'}, { quoted: m })
                break
                
                default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return newReply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return newReply(bang)
                    }
                    try {
                        newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        newReply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return newReply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await newReply(evaled)
                    } catch (err) {
                        await newReply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return newReply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return newReply(err)
                        if (stdout) return newReply(stdout)
                    })
                }
                
                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    conn.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
        }


    } catch (err) {
        console.log("Eror in that cmd adrian.js "+util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
