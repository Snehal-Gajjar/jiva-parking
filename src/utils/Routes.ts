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
import { AddCar } from "../screen/CarDetail/AddCar"
import { CarNavigator, DrawerNavigator, NearByParkingNavigator } from "../component/Navigations/CustomStackNavigation"
import React from "react"

export const ADDSCREEN = {
    AddCar: { title: 'AddCar', component: AddCar }
}

export const NEARBYPARKING = {
    NearByParking: { title: 'NearByParking', component: NearByParking },
    DetailPage: { title: 'Detail', component: DetailPage },
    PaymentScreen: { title: 'Payment', component: PaymentScreen },
    MapScreen: { title: 'Detail', component: SlotScreen },
}

export const SCREENS = {
    Dashboard: { title: 'Dashboard', component: Dashboard },
    Scanning: { title: 'Scanning', component: Scanning },
    NearByParking: { title: 'NearByParking', component: NearByParking },
    DetailPage: { title: 'Detail', component: DetailPage },
    PaymentScreen: { title: 'Payment', component: PaymentScreen },
    MapScreen: { title: 'Detail', component: SlotScreen },
    Wallet: { title: 'Wallet', component: Wallet },
    CarDetail: { title: 'CarDetail', component: CarDetail },
}

export const AUTHSCREENS = {
    Login: { title: 'Login', component: Login },
    SignUp: { title: 'SignUp', component: SignUp },
}

export const DRAWER = {
    Drawer: { title: 'Drawer', component: DrawerNavigator },
}

export default SCREENS