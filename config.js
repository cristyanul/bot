const mySecret = process.env['datokenbaby']
module.exports = {
    app: {
        px: '!',
        token: mySecret,
        playing: 'Tarkov with KoxCheats',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        discordPlayer: {}
    }
};