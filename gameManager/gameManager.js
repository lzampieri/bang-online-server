const utils = require('../utils')
const roles = require('./roles')
const cards = require('./cards')

function init(socket, theServer) {

    socket.on('startGame', (startGame) => {
        if ( !give_roles(theServer) ) socket.emit('noPlayers');
        else console.log("Game started");
    })
}

function give_roles(theServer) {
    var rolesArray = roles.config[ theServer.players.length ];
    if ( rolesArray ) {
        utils.shuffle(rolesArray);
        console.log(rolesArray);
        theServer.deck = utils.shuffle(cards.deck);

        for( var i=0; i < theServer.players.length; i++ ) {
            theServer.players[i].role = rolesArray[i];
            theServer.players[i].lifepoints = 4 + rolesArray[i].lifebonus;
            theServer.players[i].emit( 'startGame', {
                role: rolesArray[i].tipo,
                lifepoints: theServer.players[i].lifepoints,
                cards: theServer.getFromDeck(theServer.players[i].lifepoints)
            });
        }
        theServer.login_allowed = false;
        return true;
    } else {
        return false;
    }
}

module.exports = {init: init};