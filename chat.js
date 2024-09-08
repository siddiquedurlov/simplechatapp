const socket = io.connect('http://localhost:5000');

socket.on('message', function(msg) {
    const messages = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    messages.appendChild(messageElement);
});

function sendMessage() {
    const message = document.getElementById('message').value;
    socket.send(message);
    document.getElementById('message').value = '';
}
