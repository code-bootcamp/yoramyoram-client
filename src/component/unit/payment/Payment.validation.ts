import * as yup from "yup";

export const paymentSchema = yup.object({
  point: yup.number(),
});
