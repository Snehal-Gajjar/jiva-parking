export interface Register {
    email?: string,
    full_name: string,
    phone: string,
    password: string,
    password_confirmation: string
}

export interface AddCarDetail {
    year?: string,
    registration_no?: string,
    vehicle_category_id?: string,
    vehicle_brand_id?: string
    vehicle_model_id?: string,
    fuel_type?: 'Fuel' | 'Petrol' | 'Diesel' | 'CNG' | 'LPG' | 'Electric'
}

export interface PUC {
    puc_no?: string,
    puc_date?: Date
    puc_expiry?: Date
}

export interface Insurance {
    insurance_policy_company?: string,
    insurance_policy_date?: Date
    insurance_policy_amount?: string,
    insurance_policy_type?: string,
    insurance_policy_expiry_date?: Date
    insurance_policy_no?: string
}

export type Car = AddCarDetail & PUC & Insurance

export type CarList = AddCarDetail & PUC & Insurance & {
    id?: string
    status?: string,
    brand?: string,
    icon?: string,
    category?: string,
    model?: string
}

export type ProfileUser = {
    id: string
    photo?: string
    wallet_amount: string
} & Register

export interface NearByFilter {
    search?: string,
    aminity_ids?: string,
    top?: string,
    use?: string,
    lat: string,
    long: string
}

export interface NearByParkingDetailParams {
    id: string,
    lat: string,
    long: string
}

export type Price = {
    id: string,
    parking_id: string,
    time: number,
    cost: string
}

export type NearByParkingDetail = {
    place: string
    distance: string,
    country: string,
    state: string,
    city: string,
    area: string,
    prices: Price[],
    description: string
} & MarkerData

export interface Amenities {
    id: string
    title: string,
    icon?: string
    checked?: boolean
}

export interface MarkerData {
    id: string,
    place: string,
    latitude: string,
    longitude: string,
    distance: string
    area: string,
    city: string
    base_amount?: string,
}

export interface Advertisement {
    title: string,
    content: string
    id: string
}

export interface Notification {
    title: string,
    notification_content: string
    id: string
    sending_schedule: string
}

export interface ParkingOptions {
    floors: string[],
    times: []
    id: string
}

export interface PaymentDetailParams {
    parking_id: string
    for_time: string
}

export type PaymentDetail = {
    is_vip: 0 | 1,
    total: number
    tax: number,
    extra_facilities: number,
    parking_charge: number,
    place_name: string,
    parking_details: NearByParkingDetail & { aminities: Amenities[] },
    vehicle_details: { registration_no: string }[]
}

export interface BookingHistoryData {
    place: string
    date: string
    amount: string
    status: string
    id: number
}

export interface WalletHistoryData {
    title: string
    date: string
    amount: string
    status: string
    id: number
}

export interface TransactionParams {
    amount: string
    source: string
}