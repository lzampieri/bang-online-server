const utils = require('../utils')

function init(socket, theServer) {
    socket.on('startGame', (startGame) => {
        theServer.login_allowed = false;
        theServer.deck = utils.shuffle(startGame.deck);
        console.log("Game started");
        theServer.io.sockets.emit('gameStarted');
    })
}

module.exports = {init: init};