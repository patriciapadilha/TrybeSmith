import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from '../interfaces/product.interface';

const createProduct = async (product: IProduct): Promise<ResultSetHeader> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);

  return result;
};

const getAllProducts = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  
  const [results] = await connection.execute(query);
  return results as IProduct[];
};

export default {
  createProduct,
  getAllProducts,
};