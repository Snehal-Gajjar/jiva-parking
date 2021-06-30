export const registerUrl = (): string => {
    return `/signup`;
};

export const loginUrl = (): string => {
    return '/signin'
}

export const vehicles = (): string => {
    return '/vehicles'
}

export const vehicle_add = (): string => {
    return '/vehicle_add'
}

export const vehicle_brands = (): string => {
    return '/vehicle_brands'
}

export const vehicle_categories = (): string => {
    return '/vehicle_categories'
}

export const vehicle_models = (brandId: string): string => {
    return `/vehicle_models/${brandId}`
}

export const vehicle_delete = (carID: string): string => {
    return `/vehicle_delete/${carID}`
}

export const vehicle_update = (): string => {
    return '/vehicle_update'
}

export const profile = (): string => {
    return '/profile'
}

export const transaction_add = (): string => {
    return '/transaction_add'
}

export const transaction_update = (): string => {
    return '/transaction_update'
}

export const near_parking = (): string => {
    return '/near_parking'
}

export const parking_detail = (id: string): string => {
    return `/parking_detail/${id}`
}

export const parking_aminities = (): string => {
    return '/parking_aminities'
}

export const parking_option = (): string => {
    return '/parking_option'
}

export const payment_detail = (): string => {
    return '/payment_detail'
}

export const user_notification = (): string => {
    return '/user_notification'
}

export const advertisement = (): string => {
    return '/advertisement'
}

export const wallet_history = (): string => {
    return '/wallet_history'
}

export const booking_history = (): string => {
    return '/booking_history'
}

export const booking_add = ():string => {
    return '/booking_add'
}

export const booking_update = ():string => {
    return '/booking_update'
}