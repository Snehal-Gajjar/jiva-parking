import { AUTHSCREENS, DRAWER, SCREENS } from "./Routes";
import { CarList, NearByParkingDetailParams, PaymentDetailParams, ProfileUser } from "./types";

type PaymentScreenParam = {
    parking_id: string,
    floor_id: string,
    spot_id: string,
    for_date: string,
    for_time: string,
    from_time: any,
    is_vip: '1' | '0'
    lat: string,
    long: string
}

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
        NearByParking: {
            latlongdata: {
                lat: number;
                long: number;
            }
        },
        AddCar: { edit: boolean, carDetail: CarList }
        DetailPage: NearByParkingDetailParams,
        MapScreen: {
            parking_id: string, lat: string,
            long: string
        },
        PaymentScreen: PaymentScreenParam,
        BookingPaymentScreen: {
            booking: PaymentScreenParam & { amount: string },
            user: {
                wallet_amount: string,
                name: string,
                contact: string
            }
        },
        WalletPaymentScreen: {
            user: {
                wallet_amount: string,
                name: string,
                contact: string
            }
        }
    };