const socket = new WebSocket('wss://echo-ws-service.herokuapp.com');
const messageInput = document.querySelector('#message-input');
const chatArea = document.querySelector('.chat-area');
const sendButton = document.querySelector('#send-button');
const locationButton = document.querySelector('#location-button');

socket.onmessage = function(event) {
  const message = event.data;
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatArea.appendChild(messageElement);
};

sendButton.addEventListener('click', function() {
  const message = messageInput.value;
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatArea.appendChild(messageElement);
  socket.send(message);
  messageInput.value = '';
});

locationButton.addEventListener('click', function() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      const latitude = coords.latitude;
      const longitude = coords.longitude;
      const mapLink = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`;
      const locationElement = document.createElement('div');
      locationElement.innerHTML = `<a href="${mapLink}" target="_blank">Моя геолокация</a>`;
      chatArea.appendChild(locationElement);
   
    });
  } else {
    console.log("Геолокация недоступна");
  }
});