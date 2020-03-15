import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import socketio from 'socket.io';
import socketHandler from './src/server/utils/socketHandler';
import mongoose from 'mongoose';
import apiRouter from './src/routes/api/api-router';
import bodyParser from 'body-parser';
import {EVENTS} from './common/constants';
import bearerToken from 'express-bearer-token';

dotenv.config();
const env = process.env;
const app = express();
mongoose.connect(env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

app.use(bearerToken({headerKey: 'Bearer'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

server.listen(env.PORT, (req, res) => {
    console.log(`Server running on port: ${env.PORT}`);
    console.log('Press Ctrl + C for stop server');
});

const io = socketio(server);
io.set('transports', ['websockets', 'polling']);
io.on(EVENTS.CONNECTION, socketHandler(io));

app.use('/api',apiRouter);

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.use((req,res,nex) => {
    res.status(404);
    res.send('404 - Not Found');
})

