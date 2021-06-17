import { AUTHSCREENS, DRAWER, SCREENS } from "./Routes";
import { CarList, NearByParkingDetailParams, PaymentDetailParams } from "./types";

export type RootDrawerParamList = {
    SignOut: undefined
} & {
        [P in keyof typeof SCREENS]: undefined;
    };

export type RootStackParamList = {
    [P in keyof typeof SCREENS]: undefined;
} &
    {
        [P in keyof typeof AUTHSCREENS]: undefined;
    } & {
        AddCar: { edit: boolean, carDetail: CarList }
        DetailPage: NearByParkingDetailParams,
        MapScreen: { parking_id: string },
        PaymentScreen: PaymentDetailParams,
    };