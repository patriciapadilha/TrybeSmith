import { Request, Response } from 'express';
import userService from '../services/userService';
import createToken from '../middlewares/jwt';

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const result = await userService.createUser(req.body);
  const token = createToken(result);

  return res.status(201).json({ token });
};

export default {
  createUser,
};