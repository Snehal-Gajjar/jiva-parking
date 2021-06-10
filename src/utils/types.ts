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
    fuel_type?: 'Petrol' | 'Diesel' | 'CNG' | 'LPG' | 'Electric'
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
} & Register