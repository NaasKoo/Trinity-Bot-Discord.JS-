const { hyperlink, hideLinkEmbed } = require('@discordjs/builders');
const url = 'https://trinityrp.ca/';

const link = hyperlink('discord.js', url);
const hiddenEmbed = hideLinkEmbed(url)