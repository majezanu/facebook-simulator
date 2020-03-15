import openSocket from 'socket.io-client';
const  socket = openSocket({autoConnect:false});

const connect = () => socket.connect();

export default { connect, socket };