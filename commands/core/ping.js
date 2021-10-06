const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`Ultimul ping calculat acum ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: false })}:  **${client.ws.ping}ms** 🛰️`);
    },
};