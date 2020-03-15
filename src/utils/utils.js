import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const SALT_ROUNDS = 12;
const TOKEN_EXPIRATION = 60;
const {TOKEN_SECRET} = process.env;

const matchHash = (plainPassword, hashedPassword) => bcrypt.compareSync(plainPassword, hashedPassword);

const createToken = (payload) => jwt.sign(payload, TOKEN_SECRET, {
    expiresIn: TOKEN_EXPIRATION
});

const cryptPass = (plainPassword) => bcrypt.hashSync(plainPassword, SALT_ROUNDS);

const verifyToken = (token, callback) => jwt.verify(token,TOKEN_SECRET, (err, decoded) => callback(err, decoded));

export default {matchHash, createToken, cryptPass, verifyToken};