import { matches } from "lodash";
import * as yup from "yup";

export const schema = yup.object({
  name: yup
    .string()
    // .max(5, "5자 이내로 입력해주세요.")
    .required("상품명을 입력해주세요."),
  price: yup
    .number()
    // .matches(
    //   /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,8}$/,
    //   "비밀번호 형식이 맞지 않습니다."
    // )
    .required("가격을 입력해 주세요."),
  images: yup.string(),
});
