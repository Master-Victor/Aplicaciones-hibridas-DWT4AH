import yup from 'yup'

const cafeSchemaCreate = yup.object({
    name: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().required(),
    tags: yup.array().of(yup.string()).required(),
  });

  const cafeSchemaPatch = yup.object({
    name: yup.string(),
    price: yup.number(),
    description: yup.string(),
    tags: yup.array().of(yup.string()),
  });
  

  export {
    cafeSchemaCreate,
    cafeSchemaPatch
  }