import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/product.interface';
import productModel from '../models/productModel';
import HttpException from '../utils/http.exceptions';

const isValid = (product: IProduct) => {
  if (!product.name || typeof product.name !== 'string') return false;
  if (!product.amount || typeof product.amount !== 'string') return false;
  return true;
};

const createProduct = async (product: IProduct): Promise<ResultSetHeader> => {
  if (!isValid(product)) {
    throw new HttpException(400, 'Dados inválidos');
  }
  const data = await productModel.createProduct(product);
  
  return data;
};

export default {
  createProduct,
};