import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("이름을 입력해주세요"),
  email: yup
    .string()
    .required("이메일을 입력해주세요")
    .matches(
      /^((\w+\-?)+@(\w+\.)*\w+)|("[\w\.]+"\s*<\s*(\w+\-?)+@(\w+\.)*\w+\s*>)$/,
      "형식에 맞게 입력해주세요."
    ),
  phone: yup.string().required("전화번호을 입력해주세요"),
  address: yup.string().required("주소을 입력해주세요"),
  password: yup.string().required("비밀번호를을 입력해주세요"),
  add_detail: yup.string().required("상세주소을 입력해주세요"),
  birth: yup.string().required("생일을 입력해주세요"),
});
