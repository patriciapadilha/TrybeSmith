import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/user.interface';
import connection from './connection';

const createUser = async (user: IUser): Promise<ResultSetHeader> => {
  const q = 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)';
  const values = [user.username, user.classe, user.level, user.password];

  const [result] = await connection.execute<ResultSetHeader>(q, values);
  return result;
};

export default {
  createUser,
};