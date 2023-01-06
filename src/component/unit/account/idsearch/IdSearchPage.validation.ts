import * as yup from "yup";

export const IdSearchSchema = yup.object({
  name: yup.string().required(),
  phoneFirst: yup
    .string()
    .required()
    .matches(/^\d{2,3}$/),
  phoneSecond: yup.string().matches(/^\d{3,4}$/),
  phoneThird: yup
    .string()
    .required()
    .matches(/^\d{4}$/),
});
