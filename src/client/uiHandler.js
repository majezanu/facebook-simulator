import { EVENTS } from '../common/constants';

export default (socketClient) => {
    socketClient.emit(EVENTS.TEST, {value: 'Hello socket'});
    const message = document.getElementById('message');
    const username = document.getElementById('username');
    const sendMessage = document.getElementById('send-message');
    const messages = document.getElementById('message-list');
    const users = document.getElementById('users');
    sendMessage.addEventListener('click', () => {
        const msg = message.value;
        if(msg)
            socketClient.emit(EVENTS.SEND_MESSAGE, {
                value: message.value,
                username: username.value
            });
            message.value = '';
    });
    return {
        messages,
        users
    };
}