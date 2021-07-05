import axios, { Method } from 'axios';
import Config from '../utils/apiConfig';
import { extractCurrentUser } from '../utils/auth';

export default async (url: string, method?: Method, data?: any, auth?: boolean) => {
    let token = '';

    if (!auth) {
        const user = await extractCurrentUser()
        if (user) token = user.token as string
        console.log(token)
    }

    let requestData = {
        ...data,
        token
    }

    if (method === 'GET') {
        return axios.get(Config.REST_ENDPOINT + url, {
            params: {
                token,
                data
            },
        }).then((response) => {
            if (response.data.status && response.data.status === 'success') {
                return response.data
            } else {
                return Promise.reject(data);
            }
        })
    }

    return axios({
        url: Config.REST_ENDPOINT + url,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(requestData),
        method: method
    }).then((response) => {
        if (response.data.status && response.data.status === 'success') {
            console.log((response.data))
            return Promise.resolve(response.data)
        } else if (response.data.status && response.data.status === 'error') {
            return Promise.reject(response.data)
        } else {
            return Promise.reject(data);
        }
    })
};
