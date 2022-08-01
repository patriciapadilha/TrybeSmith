import ILogin from '../interfaces/login.interface';
import IUser from '../interfaces/user.interface';
import userModel from '../models/userModel';
import HttpException from '../utils/http.exceptions';
import validate from '../utils/validate';

const createUser = async (user: IUser): Promise<IUser> => {
  validate.username(user);
  validate.password(user);
  validate.classe(user);
  validate.level(user);
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

const userLogin = async (userInfos: ILogin): Promise<IUser[]> => {
  if (!userInfos.username) throw new HttpException(400, '"username" is required');
  if (!userInfos.password) throw new HttpException(400, '"password" is required');
  const result = await userModel.userLogin(userInfos);
  console.log(result);
  if (result.length === 0) throw new HttpException(401, 'Username or password invalid');
  return result;
};

export default {
  createUser,
  userLogin,
};