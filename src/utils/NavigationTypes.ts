import { AUTHSCREENS, ADDSCREEN, DRAWER, NEARBYPARKING, SCREENS } from "./Routes";
import { CarList } from "./types";

export type NearByRootParamList = {
    [P in keyof typeof NEARBYPARKING]: undefined;
};


export type CarRootParamList = {
    [P in keyof typeof ADDSCREEN]: undefined;
};


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
    };