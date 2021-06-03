import { Register } from '../../utils/types';
import Config from '../config'
import { loginUrl, registerUrl } from '../endpoints';

export const RegisterUser = (data: Register) => {
    return Config(registerUrl(), 'POST', data);
};

export const LoginUser = (data: {
    phone: string,
    password: string
}) => {
    return Config(loginUrl(), 'POST', data);
};