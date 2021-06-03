import * as yup from 'yup'

export const getInitialValue: () => { phone: string; password: string } = () => ({
    password: '',
    phone: ''
})

export const commonValidationSchema = yup.object().shape({
    phone: yup.string().required('Phone is required'),
    password: yup.string().required('Password is required').min(6, 'Password is too short - should be 6 chars minimum.')
})