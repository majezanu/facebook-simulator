import {EVENTS} from '../../../common/constants';
import moment from 'moment';
import userService from '../../services/user-service';
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
    socket.auth = false;
    socket.on(EVENTS.AUTHORIZE, (data) => {
        socket.auth = userService.validateToken(data.token, socket.id);
    });

    setTimeout(function(){
        if (!socket.auth) {
          console.log("Disconnecting socket ", socket.id);
          socket.disconnect(EVENTS.UNAUTHORIZED);
        }else {
            io.emit(EVENTS.NEW_USER_CONNECTED, userService.getUserBy({socketId:socket.id}));
            socket.emit(EVENTS.AUTHORIZE_SUCCESSFUL);
            console.log(`Socket ${socket.id} is connected`);
        }
    }, 2000);
    // console.log('Connect', socket.id);
    // socket.on(EVENTS.TEST, (data) =>{
    //     console.log('Test Connection', data);
    // });

    // socket.on(EVENTS.SEND_MESSAGE, (data) => {
    //     data.time = moment().calendar();
    //     console.log(EVENTS.SEND_MESSAGE,data);
    //     io.emit(EVENTS.BROADCAST_MESSAGE, data);
    //     onUserLogin(data.username, io);
    // });
}