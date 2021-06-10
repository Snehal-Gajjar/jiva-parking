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