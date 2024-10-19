const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8989 });

const users = [];

// Function to broadcast messages to all connected clients except the sender
const broadcast = (data, ws) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN && client !== ws) {
            client.send(JSON.stringify(data));
        }
    });
};

wss.on('connection', (ws) => {
    let index;

    // When a message is received from a client
    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message); // Parse the incoming message
            switch (data.type) {
                case 'ADD_USER': {
                    index = users.length; // Set index for user
                    users.push({ name: data.name, id: index + 1 }); // Add user to the list
                    ws.send(JSON.stringify({
                        type: 'USERS_LIST',
                        users
                    }));
                    broadcast({
                        type: 'USERS_LIST',
                        users
                    }, ws);
                    break;
                }
                case 'ADD_MESSAGE':
                    // Broadcast the message to all users
                    broadcast({
                        type: 'ADD_MESSAGE',
                        message: data.message,
                        author: data.author
                    }, ws);
                    break;
                default:
                    console.error('Unknown message type:', data.type);
                    break;
            }
        } catch (error) {
            console.error('Error processing message:', error);
        }
    });

    // When a client disconnects
    ws.on('close', () => {
        if (index !== undefined) {
            users.splice(index, 1); // Remove user from the list
            broadcast({
                type: 'USERS_LIST',
                users
            }, ws);
        }
    });

    // Error handling for the WebSocket connection
    ws.on('error', (error) => {
        console.error('WebSocket error observed:', error);
    });
});

// Log when the server is running
console.log('WebSocket server is running on ws://localhost:8989');
