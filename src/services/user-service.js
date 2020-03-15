import User from '../models/users';
import utils from '../utils/utils';
const canEnter = async (username, password) => {
    let user = await User.findOne({username}).select('+password');
    let token = null;
    
    if(user && utils.matchHash(password, user.password)){
      token = utils.createToken({user});
    }
    return token;
}

const register = async (name, email, username, password) => {
    const user = new User({
        name, email, username, password: utils.cryptPass(password)
    });
    try {
        const newUSer = await user.save();
        newUSer.password = undefined;
        return newUSer;
      } catch (err) {
        throw err;
      }
}

const list = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw err;
  }
}
const decodeToken = (err, decoded) => {
  if(err && !decoded) {
    return null;
  }
  return decoded.user;
}
const userFromToken = async (token) => {
  let userDecoded = utils.verifyToken(token, decodeToken);
  if(!userDecoded) {
    return null;
  }
  let user = await User.findById(userDecoded._id);
  if(!user) {
    return null;
  }
  return user;
}
const validateToken = async (token, socketId) => {
  let userDecoded = utils.verifyToken(token, decodeToken);
  if(!userDecoded) {
    return false;
  }
  let user = await User.findById(userDecoded._id);
  if(!user) {
    return false;
  }
  user.online = true;
  user.socketId = socketId;
  user.save();
  return true;
}

const getUserBy = async(query) => {
  let user = await User.findOne(query);
  return user;
}
export default { canEnter, register, list, validateToken, getUserBy, userFromToken };