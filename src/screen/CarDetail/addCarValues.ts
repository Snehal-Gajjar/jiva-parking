import moment from 'moment'
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

export const getPUCInitialValue: (detail?: CarList) => PUC = (detail) => ({
    puc_no: detail ? detail.puc_no : '',
    puc_expiry: detail ? moment(detail.puc_expiry ? detail.puc_expiry : new Date()).toDate() : new Date(),
    puc_date: detail ? moment(detail.puc_date ? detail.puc_date : new Date()).toDate() : new Date()
})

export const getInsuranceInitialValue: (detail?: CarList) => Insurance = (detail) => ({
    insurance_policy_amount: detail ? detail.insurance_policy_amount : '',
    insurance_policy_company: detail ? detail.insurance_policy_company : '',
    insurance_policy_date: detail ? moment(detail.insurance_policy_date ? detail.insurance_policy_date : new Date()).toDate() : new Date(),
    insurance_policy_expiry_date: detail ? moment(detail.insurance_policy_expiry_date ? detail.insurance_policy_expiry_date : new Date()).toDate() : new Date(),
    insurance_policy_no: detail ? detail.insurance_policy_no : '',
    insurance_policy_type: detail ? detail.insurance_policy_type : ''
})

export const pucValidationSchema = yup.object().shape({
    puc_no: yup.string().required('PUC number is required'),
})

export const insuranceValidationSchema = yup.object().shape({
    insurance_policy_no: yup.string().required('Policy number is required'),
})