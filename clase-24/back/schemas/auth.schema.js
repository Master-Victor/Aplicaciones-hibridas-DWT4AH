import yup from 'yup'

const cuenta = yup.object({
    userName: yup.string().trim().required().min(6),
    password: yup.string().required().min(6),
})

export {
    cuenta
}