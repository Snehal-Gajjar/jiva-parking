import { Dashboard } from "../screen/Dashboard"
import { Login } from "../screen/Login"
import { Scanning } from "../screen/Scanning"
import { SignUp } from "../screen/SignUp"

export const SCREENS = {
    SignUp: { title: 'SignUp', component: SignUp },
    Login: { title: 'Login', component: Login },
    Dashboard: { title: 'Dashboard', component: Dashboard },
    Scanning: { title: 'Scanning', component: Scanning }
}

export default SCREENS