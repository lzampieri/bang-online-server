const utils = require('../utils')
const roles = require('./roles')

function init(socket, theServer) {

    socket.on('startGame', (startGame) => {
        if ( !give_roles(theServer) ) socket.emit('noPlayers');
        else console.log("Game started");
        theServer.deck = utils.shuffle(startGame.deck);
    })
}

function give_roles(theServer) {
    var rolesArray = roles.config[ theServer.players.length ];
    if ( rolesArray ) {
        utils.shuffle(rolesArray);
        console.log(rolesArray);
        for( var i=0; i < theServer.players.length; i++ ) {
            theServer.players[i].role = rolesArray[i];
            theServer.players[i].emit( 'startGame', {role: rolesArray[i].tipo });
        }
        theServer.login_allowed = false;
        return true;
    } else {
        return false;
    }
}

module.exports = {init: init};