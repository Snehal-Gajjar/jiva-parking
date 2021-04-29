import { CarDetail } from "../screen/CarDetail"
import { Dashboard } from "../screen/Dashboard"
import { Login } from "../screen/Login"
import { NearByParking } from "../screen/NearByParking"
import { DetailPage } from "../screen/NearByParking/DetailPage"
import { Scanning } from "../screen/Scanning"
import { SignUp } from "../screen/SignUp"
import { Wallet } from "../screen/Wallet"

export const SCREENS = {
    SignUp: { title: 'SignUp', component: SignUp },
    Login: { title: 'Login', component: Login },
    Dashboard: { title: 'Dashboard', component: Dashboard },
    Scanning: { title: 'Scanning', component: Scanning },
    NearByParking: { title: 'NearByParking', component: NearByParking },
    Wallet: { title: 'Wallet', component: Wallet },
    CarDetail: { title: 'CarDetail', component: CarDetail },
    DetailPage: { title: 'Detail', component: DetailPage }
}

export default SCREENS