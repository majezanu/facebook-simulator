import express from 'express';
import userController from "../../controllers/user-controller";
const router = express.Router();

router.post('/login', userController.authorize);
router.post('', async (req, res) => userController.register(req, res));
router.get('', async (req,res) => userController.list(req, res));
export default router;