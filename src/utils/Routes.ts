import { CarDetail } from "../screen/CarDetail"
import { Dashboard } from "../screen/Dashboard"
import { Login } from "../screen/Login"
import { NearByParking } from "../screen/NearByParking"
import { DetailPage } from "../screen/NearByParking/DetailPage"
import { SlotScreen } from "../screen/NearByParking/SlotScreen"
import { PaymentScreen } from "../screen/NearByParking/PaymentScreen"
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
    DetailPage: { title: 'Detail', component: DetailPage },
    PaymentScreen: { title: 'Payment', component: PaymentScreen },
    MapScreen: { title: 'Detail', component: SlotScreen }
}

export default SCREENS