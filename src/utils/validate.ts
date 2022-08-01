import IUser from '../interfaces/user.interface';
import HttpException from './http.exceptions';

const username = (user: IUser) => {
  if (!user.username) throw new HttpException(400, '"username" is required');
  if (typeof user.username !== 'string') {
    throw new HttpException(422, '"username" must be a string');
  }
  if (user.username.length <= 2) {
    throw new HttpException(422, '"username" length must be at least 3 characters long');
  }
  return true;
};

const classe = (user: IUser) => {
  if (!user.classe) throw new HttpException(400, '"classe" is required');
  if (typeof user.classe !== 'string') {
    throw new HttpException(422, '"classe" must be a string');
  }
  if (user.classe.length <= 2) {
    throw new HttpException(422, '"classe" length must be at least 3 characters long');
  }
  return true;
};

const level = (user: IUser) => {
  if (user.level <= 0) {
    throw new HttpException(422, '"level" must be greater than or equal to 1');
  }
  if (!user.level) throw new HttpException(400, '"level" is required');
  if (typeof user.level !== 'number') {
    throw new HttpException(422, '"level" must be a number');
  }
  return true;
};

const password = (user: IUser) => {
  if (!user.password) throw new HttpException(400, '"password" is required');
  if (typeof user.password !== 'string') {
    throw new HttpException(422, '"password" must be a string');
  }
  if (user.password.length < 8) {
    throw new HttpException(422, '"password" length must be at least 8 characters long');
  }
  return true;
};

export default {
  username,
  classe,
  level,
  password,
};