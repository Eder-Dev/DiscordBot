const api = require('./services/api.js')
const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 

module.exports = class Bot{
	constructor(){
		client.on("ready", () => {
			console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
			console.log(client)
			client.user.setPresence({ game: { name: 'comando', type: 1, url: 'https://www.twitch.tv/pedroricardo'} });
			  //0 = Jogando
			  //  1 = Transmitindo
			  //  2 = Ouvindo
			  //  3 = Assistindo
		  });
		  
		  client.on("message", async message => {
		  
			  if(message.author.bot) return;
			  if(message.channel.type === "dm") return;
			  if(!message.content.startsWith(config.prefix)) return;
		  
			const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
			const comando = args.shift().toLowerCase();
			
		  
			switch(comando){
				case "ping":
				  console.log(message);
				  const m = await message.channel.send("Espere...");
				  message.reply(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms.`);
				   m.edit();
				   break;
				case "upload":
						var sit = '';
					  message.attachments.map(async function(img) {
						
						await message.channel.send("```"+sit+' = '+img.name+"  -  "+img.url+"```");
					  
				  });
				  
				  //message.attachments.attachment
				  //message.attachments.url
				  //message.attachments.proxyURL
				  break;
			  }
		  });
		  
		  client.login(config.token);
	}
}