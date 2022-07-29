import { Request, Response } from 'express';
import productService from '../services/productService';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const results = await productService.createProduct(req.body);
  const data = { id: results.insertId, name: req.body.name, amount: req.body.amount };
  return res.status(201).json(data);
};

export default {
  createProduct,
};