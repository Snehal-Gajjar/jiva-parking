import { createContext } from 'react'
import { CurrentUser, NULL_USER } from './auth'

export const CurrentUserContext = createContext<{ handleUser: () => void }>({
    handleUser: () => {
        return
    }
})