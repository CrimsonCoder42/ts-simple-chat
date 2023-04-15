import * as webSocket from 'ws';

const server = new webSocket.Server({ port: 8080 });

server.on('connection', socket => {
    console.log('Client connected');

    socket.on('message', message => {
        server.clients.forEach(client => {
            if (client.readyState === webSocket.OPEN) {
                client.send(`${message}`);
            }
        });
    });
});

console.log('socket initialized on port 8080');