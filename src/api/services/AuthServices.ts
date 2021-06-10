import { Register } from '../../utils/types';
import Config from '../config'
import { loginUrl, profile, registerUrl } from '../endpoints';

export const RegisterUser = (data: Register) => {
    return Config(registerUrl(), 'POST', data, true);
};

export const LoginUser = (data: {
    phone: string,
    password: string
}) => {
    return Config(loginUrl(), 'POST', data, true);
};

export const Profile = () => {
    return Config(profile(), 'GET');
};