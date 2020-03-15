import User from '../models/users';
import utils from '../utils/utils';
const canEnter = (username, password) => {
    let user = getUsers().find(user => user.username === username);
    return user && utils.matchHash(password, user.password) && user.active;
}

const register = async (name, email, username, password) => {
    const user = new User({
        name, email, username, password: utils.cryptPass(password)
    });
    try {
        const newUSer = await user.save();
        newUSer.password = undefined;
        console.log(newUSer);
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

export default { canEnter, register, list };