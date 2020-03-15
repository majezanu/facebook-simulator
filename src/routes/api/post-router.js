import express from 'express';
import controller from "../../controllers/post-controller";
const router = express.Router();

router.get('', async (req,res) => controller.list(req, res));
router.post('', async (req, res) => controller.register(req, res));
router.delete('/:id', async (req, res) => controller.deleteItem(req, res));
export default router;