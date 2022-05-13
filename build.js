const { SlashCommandBuilder } = require('@discordjs/builders');

// Raw data that can be used to register a slash command
const rawData = command.toJSON();
const command = new SlashCommandBuilder()
	.setName('info')
	.setDescription('Get Owner about a user!')
	.addUserOption(option => option.setName('Build').setDescription('Build'));