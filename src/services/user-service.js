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