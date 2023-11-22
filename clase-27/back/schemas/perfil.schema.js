import yup from 'yup';

const perfil = yup.object({
    name: yup.string().trim().required().min(3).max(50),
    email: yup.string().trim().required().email(),
    avatar: yup.string().trim().required().url(),
})

export { perfil }