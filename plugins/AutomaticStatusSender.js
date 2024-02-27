// Function({pattern: 'astatus ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {return;}));
const {Function} = require('../lib/');
Function({on: 'text' ,fromMe: false}, (async (message, match,client) => {
if (message.fromMe || !message.reply_message || message.quoted.chat !== 'status@broadcast') return;
var sends = ["Sent","Send","one","danna","ewnna","ewpm","send","sent","ewn","එවන්න","ඔනෙ","ඔන","දාන්න","දම්","එවපං","දහම්","එවපන්","දපන්","දාපන්","දාපම්","ඔනා","ඔනේ","එවහන්","One","දෙන්නකො","SEND","ewn"]
if (!message.reply_message.mtype == 'status@broadcast') return await message.send('_𝑪𝑨𝑵𝑻_𝑩𝑳𝑨𝑵𝑲_𝑩𝒀_𝑭𝑬𝑵𝑰𝑿_')
for (any in sends){
if (message.text.includes(sends[any])) {
return await client.forwardMessage(message.jid, message.quoted.data, {contextInfo:{ isForwarded: false}, quoted: m.data});
}
}
}));