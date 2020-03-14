import socketHandler from './socketHandler';
import uiHandler from './uiHandler';

const socketClient = io();

export default () => {
    const ui = uiHandler(socketClient);

    socketHandler(socketClient, ui);
}