import IUser from '../interfaces/user.interface';
import userModel from '../models/userModel';
import HttpException from '../utils/http.exceptions';

const isValid = (user: IUser) => {
  if (!user) return false;
  if (typeof user.password !== 'string' || typeof user.classe !== 'string') return false;
  if (typeof user.level !== 'number') return false;
  return true;
};

const createUser = async (user: IUser): Promise<IUser> => {
  if (!isValid(user)) {
    throw new HttpException(400, 'Dados inválidos');
  }
  const data = await userModel.createUser(user);
  const newUser = {
    id: data.insertId,
    username: user.username,
    classe: user.classe,
    level: user.level,
    password: user.password,
  };
  return newUser;
};

export default {
  createUser,
};