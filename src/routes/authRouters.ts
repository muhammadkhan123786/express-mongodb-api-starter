import { loginController } from '../controllers/authController';
import express from 'express';

const authRouters = express.Router();

authRouters.post('/login', loginController);

export default authRouters;
