import { ResultSetHeader } from 'mysql2';
import ILogin from '../interfaces/login.interface';
import IUser from '../interfaces/user.interface';
import connection from './connection';

const createUser = async (user: IUser): Promise<ResultSetHeader> => {
  const q = 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)';
  const values = [user.username, user.classe, user.level, user.password];

  const [result] = await connection.execute<ResultSetHeader>(q, values);
  return result;
};

const userLogin = async (userInfos: ILogin): Promise<IUser[]> => {
  const q = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
  const values = [userInfos.username, userInfos.password];

  const [result] = await connection.execute(q, values);
  return result as IUser[];
};

export default {
  createUser,
  userLogin,
};