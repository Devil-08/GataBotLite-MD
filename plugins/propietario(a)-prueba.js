import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let users = m.sender.split`@`[0]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `*╭━━[ 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 | 𝙉𝙊𝙏𝙄𝘾𝙀 ]━━━⬣*\n*┃*\n*┃💌* ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`, '✅ *𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🎁 𝙄𝙣𝙛𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡', '.cuentasgb'],['🐈 𝙈𝙚𝙣𝙪', '.menu']], false, { 
contextInfo: { externalAdReply: {
title: '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 | 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨',
body: 'Super Bot WhatsApp', 
sourceUrl: `https://www.instagram.com/gata_dios`, 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})}
m.reply(`${iig} ✅ *El mensaje fue enviado a ${groups.length} Grupo(s)*\n*Es posible que no se haya enviado a todos los Grupos. Disculpe.*\n\n✅ *The message was sent to ${groups.length} Group's*\n*May not have been sent to all Groups. Excuse me.*`)
}
handler.help = ['broadcastgroup', 'prueba'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(prueba|pru)$/i
handler.rowner = true
handler.exp = 500
//handler.owner = true
export default handler
