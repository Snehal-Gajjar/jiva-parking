import * as yup from 'yup'

export const getInitialValue: () => { phone: string; } = () => ({
    phone: ''
})

export const commonValidationSchema = yup.object().shape({
    phone: yup.string().required('Phone is required')
})