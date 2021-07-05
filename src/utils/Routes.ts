import { CarDetail } from "../screen/CarDetail"
import { Dashboard } from "../screen/Dashboard"
import { Login } from "../screen/Login"
import { NearByParking } from "../screen/NearByParking"
import { Scanning } from "../screen/Scanning"
import { SignUp } from "../screen/SignUp"
import { Wallet } from "../screen/Wallet"
import { AddCar } from "../screen/CarDetail/AddCar"
import { DrawerNavigator } from "../component/Navigations/CustomStackNavigation"
import React from "react"
import { Profile } from "../screen/Profile"
import { NotificationScreen } from "../screen/NotificationScreen"
import { BookingHistoryScreen } from "../screen/BookingHistoryScreen"
import { WalletPaymentScreen } from "../screen/WalletPaymentScreen"


export const SCREENS = {
    Dashboard: { title: 'Dashboard', component: Dashboard },
    Scanning: { title: 'Scanning', component: Scanning },
    Wallet: { title: 'Wallet', component: Wallet },
    CarDetail: { title: 'CarDetail', component: CarDetail },
    Profile: { title: 'Profile', component: Profile },
    BookingHistory: { title: 'BookingHistory', component: BookingHistoryScreen },
    Notification: { title: 'Notification', component: NotificationScreen },
}

export const AUTHSCREENS = {
    Login: { title: 'Login', component: Login },
    SignUp: { title: 'SignUp', component: SignUp },
}

export const DRAWER = {
    Drawer: { title: 'Drawer', component: DrawerNavigator },
}

export default SCREENS