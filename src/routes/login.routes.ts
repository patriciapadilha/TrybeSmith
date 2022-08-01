import { Router } from 'express';
import userController from '../controllers/userController';

const routerLogin = Router();

routerLogin.post('/', userController.userLogin);

export default routerLogin;