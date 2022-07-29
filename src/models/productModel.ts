import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import IProduct from '../interfaces/product.interface';

const createProduct = async (product: IProduct): Promise<ResultSetHeader> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.Products ( name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);

  return result;
};

export default {
  createProduct,
};