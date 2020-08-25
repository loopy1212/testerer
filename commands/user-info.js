const Discord = require('discord.js');

module.exports = {
    name: 'user-info',
    description: 'Shows user information on mentioned user.',   
    execute(message, args) {
        let mentionedMember =message.mentions.members.first();
        let mentionedUser = message.mentions.Users.first();

        const userEmbed = new Discord.RichEmbed()
        .setTitle('User information for ${mentionedUser.username}')
        .addField('이름:', '${mentionedUser.username}')
        .addField('ID:', '${mentionedUser.id}')
        .addField('서버 가입일:', '${mentionedMember.joinedAt}' )
        

        message.channel.send(userEmbed).catch(err => console.log(err))
    }
}