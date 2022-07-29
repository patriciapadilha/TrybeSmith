import { Router } from 'express';
import userController from '../controllers/userController';

const routerUsers = Router();

routerUsers.post('/', userController.createUser);

export default routerUsers;