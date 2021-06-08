import { AUTHSCREENS, CARSCREENS, DRAWER, NEARBYPARKING, SCREENS } from "./Routes";

export type NearByRootParamList = {
    [P in keyof typeof NEARBYPARKING]: undefined;
};


export type CarRootParamList = {
    [P in keyof typeof CARSCREENS]: undefined;
};


export type RootDrawerParamList = {
    SignOut: undefined
} & {
        [P in keyof typeof SCREENS]: undefined;
    };

export type RootStackParamList = {
    [P in keyof typeof DRAWER]: undefined;
} &
    {
        [P in keyof typeof AUTHSCREENS]: undefined;
    };