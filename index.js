import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import socketio from 'socket.io';
import socketHandler from './src/server/utils/socketHandler';
dotenv.config();
const env = process.env;
const app = express();

const server = http.createServer(app);
server.listen(env.PORT, (req, res) => {
    console.log(`Server running on port: ${env.PORT}`);
    console.log('Press Ctrl + C for stop server');
});

app.use(express.static('dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.set('views', './src/server/views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded());

const io = socketio(server );
io.set('transports', ['websockets', 'polling']);
io.on('connection', socketHandler(io));

app.get('/', (req,res)=>{
    res.render('home');
});

app.use((req,res,nex) => {
    res.status(404);
    res.send('404 - Not Found');
})

