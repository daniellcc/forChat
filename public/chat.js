const socket = io();


const chat = document.getElementById('chat');

const msg = document.getElementById('msg');
const send = document.getElementById('send');

const form = document.getElementById('form');
let username = document.getElementById('username');
const saveUser = document.getElementById('save-user');

saveUser.addEventListener('click', e => {
  e.preventDefault();
  username.style.cursor = 'not-allowed';
  username = username.value;
  saveUser.style.display = 'none';
});

send.addEventListener('click', e => {
  e.preventDefault();
  socket.emit('message', {
    user: username,
    msg: msg.value
  });
});

socket.on('message', data => {
  chat.innerHTML += `
  <div class="card text-break py-1 px-2 my-1 mx-2" style="width: fit-content;max-width: 200px;">
    <small>${data.user}</small>
    <p>${data.msg}</p>
  </div>
  `;
});