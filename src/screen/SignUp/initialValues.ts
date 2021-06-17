import * as yup from 'yup'
import { Register } from '../../utils/types'

export const getInitialValue: () => Register = () => ({
    email: '',
    full_name: '',
    password: '',
    password_confirmation: '',
    phone: ''
})

export const commonValidationSchema = yup.object().shape({
    email: yup.string().email('Please enter valid email'),
    full_name: yup.string().required('Full Name is required'),
    phone: yup.string().required('Phone is required'),
    password: yup.string().required('Password is required').min(6, 'Password is too short - should be 6 chars minimum.'),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
})