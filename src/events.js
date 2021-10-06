player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Track ${track.title} added in the queue ✅`);
});