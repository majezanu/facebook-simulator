import { EVENTS } from '../common/constants';

export default (socketClient, ui) => {
    socketClient.on(EVENTS.BROADCAST_MESSAGE, (data) => {
        console.log(EVENTS.BROADCAST_MESSAGE, data);
        ui.messages.innerHTML += `<p>${data.time} - ${data.username} said: ${data.value}</p>`
    });

    socketClient.on(EVENTS.BROADCAST_USERS, (data) => {
        ui.users.innerHTML = `<span> Usuarios activos: ${data}</span>`
    })
};