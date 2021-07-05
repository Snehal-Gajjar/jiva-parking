import * as yup from 'yup'
import { AddCarDetail, CarList, Insurance, PUC } from '../../utils/types'

export const getInitialValue: (detail?: CarList) => AddCarDetail = (detail) => ({
    year: detail ? detail.year?.toString() : '',
    registration_no: detail ? detail.registration_no : '',
    vehicle_category_id: detail ? detail.vehicle_category_id : '',
    vehicle_brand_id: detail ? detail.vehicle_brand_id : '',
    vehicle_model_id: detail ? detail.vehicle_model_id : '',
    fuel_type: detail ? detail.fuel_type : ''
})

export const commonValidationSchema = yup.object().shape({
    registration_no: yup.string().required('Car number is required'),
    vehicle_category_id: yup.string().required('Type is required'),
    vehicle_brand_id: yup.string().required('Maker is required'),
    fuel_type: yup.string().required('Fuel type is required')
})

export const getPUCInitialValue: () => PUC = () => ({
    puc_no: '',
    puc_expiry: new Date(),
    puc_date: new Date()
})

export const getInsuranceInitialValue: () => Insurance = () => ({
    insurance_policy_amount: '',
    insurance_policy_company: '',
    insurance_policy_date: new Date(),
    insurance_policy_expiry_date: new Date(),
    insurance_policy_no: '',
    insurance_policy_type: ''
})

export const pucValidationSchema = yup.object().shape({
    puc_no: yup.string().required('PUC number is required'),
})

export const insuranceValidationSchema = yup.object().shape({
    insurance_policy_no: yup.string().required('Policy number is required'),
})