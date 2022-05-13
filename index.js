const  fs  =  require ( 'node:fs' ) ;
const  { Client , Intents }  =  require ( 'discord.js' ) ;
const  { token }  =  require ( './config.json' ) ;


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const eventFiles = stfs.readdirSync('./events').filter(file => file.endsWith('.js'));


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

	client.once('ready', c => {
		console.log(`Ready! Logged in as ${c.user.tag}`);
	});
	
	client.on('interactionCreate', interaction => {
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	});

	client.login(token);

	