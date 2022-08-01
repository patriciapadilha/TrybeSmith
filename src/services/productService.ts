import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/product.interface';
import productModel from '../models/productModel';
import validate from '../utils/validate';

const createProduct = async (product: IProduct): Promise<ResultSetHeader> => {
  validate.name(product);
  validate.amount(product);
  
  const data = await productModel.createProduct(product);
  return data;
};

const getAllProducts = async (): Promise<IProduct[]> => {
  const data = await productModel.getAllProducts();
  return data;
};

export default {
  createProduct,
  getAllProducts,
};