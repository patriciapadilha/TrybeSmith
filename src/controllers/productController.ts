import { Request, Response } from 'express';
import productService from '../services/productService';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const results = await productService.createProduct(req.body);
  const data = { id: results.insertId, name: req.body.name, amount: req.body.amount };
  return res.status(201).json(data);
};

const getAllProducts = async (req: Request, res: Response): Promise<Response> => {
  const results = await productService.getAllProducts();
  return res.status(200).json(results);
};

export default {
  createProduct,
  getAllProducts,
};