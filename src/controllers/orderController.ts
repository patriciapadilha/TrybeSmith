import { Request, Response } from 'express';
import orderService from '../services/orderService';

const getAllOrders = async (req: Request, res: Response): Promise<Response> => {
  const results = await orderService.getAllOrders();
  return res.status(200).json(results);
};
  
export default {
  getAllOrders,
};