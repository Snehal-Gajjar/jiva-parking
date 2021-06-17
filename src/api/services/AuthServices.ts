import { Register } from '../../utils/types';
import Config from '../config'
import { advertisement, loginUrl, profile, registerUrl, user_notification, wallet_history } from '../endpoints';

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

export const notifications = () => {
    return Config(user_notification(), 'POST')
}

export const getAdvertisement = () => {
    return Config(advertisement(), 'POST')
}

export const bookinghistory = () => {
    return Config(wallet_history(), 'POST')
}