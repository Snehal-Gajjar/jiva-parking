import axios, { Method } from 'axios';
import Config from '../utils/apiConfig';
import storage from '../utils/storage';

export default (url: string, method?: Method, data?: any) => {

    let token = '';
    // storage.load({
    //     key: 'user',
    //     autoSync: true,
    //     syncInBackground: true
    // }).then(res => {
    //     const parsedneoUser = JSON.parse(res);
    //     token = parsedneoUser.token;
    // });

    return axios({
        url: Config.REST_ENDPOINT + url,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(data),
        method: method
    }).then((response) => {
        console.log(response.data)
        if (response.data.status && response.data.status === 'success') {
            return response.data
        } else {
            return Promise.reject(data);
        }
    })
};
