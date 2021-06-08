import storage from "./storage"

export interface CurrentUser {
    loggedIn: boolean
    token?: string
}

export const NULL_USER = { loggedIn: false }

export const extractCurrentUser = () =>
    new Promise<CurrentUser>((resolve, reject) => {
        storage
            .load({
                key: 'user',
                autoSync: true,
                syncInBackground: true,
            })
            .then((res) => {
                const parsedneoUser = JSON.parse(res);
                const loggedIn = parsedneoUser.isUserLoggedIn
                const token = parsedneoUser.token;
                resolve({ loggedIn, token })
            }).catch(() => {
                reject(new Error('No user attributes'))
            });
    })