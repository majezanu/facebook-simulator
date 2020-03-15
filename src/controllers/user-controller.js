import userService from '../services/user-service';
import utils from '../utils/utils';

const authorize = (req, res) => {
    const {username, password} = req.body;
    let canEnter = userService.canEnter(username, password);
    if(!canEnter) {
        res.status(401).send({error: 'Unauthorized'});
    } 
    const user = userService.getUSer(username);
    const token = utils.createToken(user);
    res.send({
        token
    });
}

const register = async (req, res) => {
    const {name, email, username, password} = req.body;
    try{
        const user = await userService.register(name, email, username, password);
        res.status(201).json(user);
    }catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const list = async (req, res) => {
    try {
        const users = await userService.list();
        res.json(users)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
}

export default { authorize, register, list };