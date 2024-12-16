import express from 'express';
import { registerUser, listUsers } from '../controllers/user.controller.js';
const router = express.Router();
router.post('/register', registerUser);
router.get('/', listUsers);
export default router;
