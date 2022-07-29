import jwt, { SignOptions } from 'jsonwebtoken';
import IUser from '../interfaces/user.interface';

const options: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = (user: IUser) => {
  const token = jwt.sign({ data: user }, 'MinhaSenhaNadaSecreta', options);
  return token;
};

export default createToken;
