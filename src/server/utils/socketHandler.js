import {EVENTS} from '../../common/constants';
import moment from 'moment';
moment.locale('es-MX')
const users = [];

const insertUser = (user) => users.push(user);

const onUserLogin = (user, socket) => {
    if(!users.includes(user)) {
        insertUser(user);
        socket.emit(EVENTS.BROADCAST_USERS, users.length);
        console.log(EVENTS.BROADCAST_USERS,users.length);
    }
}

export default (io) => (socket) => {
    socket.on(EVENTS.TEST, (data) =>{
        console.log('Test Connection', data);
    });

    socket.on(EVENTS.SEND_MESSAGE, (data) => {
        data.time = moment().calendar();
        console.log(EVENTS.SEND_MESSAGE,data);
        io.emit(EVENTS.BROADCAST_MESSAGE, data);
        onUserLogin(data.username, io);
    });
}