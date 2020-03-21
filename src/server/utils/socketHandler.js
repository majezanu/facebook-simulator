import {EVENTS} from 'common/constants';
import moment from 'moment';
import userService from 'services/user-service';
import postService from 'services/post-service';
moment.locale('es-MX')

export default (io) => (socket) => {
    socket.auth = false;
    socket.on(EVENTS.AUTHORIZE, (data) => {
        socket.auth = userService.validateToken(data.token, socket.id);
    });

    socket.on(EVENTS.CREATE_POST, async (data) => {
        let post = await postService.register(data.content, data.token);
        io.emit(EVENTS.BROADCAST_POST, post);
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
    
}