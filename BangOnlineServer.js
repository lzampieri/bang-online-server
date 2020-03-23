const utils = require('./utils')
const gameManager = require('./gameManager/gameManager');


class BangOnlineServer {
    // Base class: game status, properties, players, and login manager

    constructor(server) {
        // Declare properties
        this.players = [];
        this.last_reset = 0;
        this.io = null;
        this.login_allowed = false;
        this.deck = [];

        // Load of socket manager
        this.io = require('socket.io').listen(server);
        this.io.sockets.on('connection', (socket) => this.askForLogin(socket) );
    }

    askForLogin(socket) {
        // Ask to login
        if ( this.players.length == 0 ) this.login_allowed = true;
        if ( this.login_allowed ) {
            socket.emit('login', {text: "Inserisci username"} );
            // ... and wait for reply
            socket.on('login', (login) => {
                if(login.username == null || login.username.length < 3 ) socket.emit('login', {text: 'Username non valido.'});
                else if(this.players.map( (socket) => socket.username ).includes(login.username)) socket.emit('login', {text: 'Username già esistente.'});
                else this.addNewPlayer(socket, login.username);
            });
        }
        else {
            socket.emit('login_disallowed');
        }
    }

    addNewPlayer(socket, username) {
        // If it's the first player to connect, reset the game
        if( this.players.length == 0 ) this.resetGame();

        // Add player to players array
        socket.username = username;
        this.players.push( socket );
        console.log( username + " logged in" );
        this.resetClient();

        // Initialize socket for the game
        gameManager.init(socket, this);

        // Manage player disconnection
        socket.on('disconnect', () => {
            this.players = this.players.filter( (sock) => { return sock != socket; } );
            console.log( socket.username + " logged out" );
            this.resetClient();
        });    
    }

    resetGame() {
        this.last_reset = new Date();
    }

    resetClient() {
        this.io.sockets.emit('reset', {
            logged: this.players.map( (socket) => { return {username: socket.username}; }), 
            last_reset: utils.hourToString( this.last_reset )
        });
    }
}

module.exports = BangOnlineServer;