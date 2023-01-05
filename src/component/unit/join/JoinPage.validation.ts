import * as yup from "yup";

export const joinSchema = yup.object({
  name: yup.string().required("이름을 입력해주세요"),
  email: yup
    .string()
    .required("이메일을 입력해주세요")
    .matches(
      // /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,3}$/,
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "형식에 맞게 입력해주세요."
    ),
  password: yup
    .string()
    .required("비밀번호를을 입력해주세요")
    .matches(
      /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{10,16}$/,
      "영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10~16자로 입력해주세요"
    ),
  passwordCheck: yup
    .string()
    .required("비밀번호를 확인해주세요.")
    .oneOf([yup.ref("password")], "패스워드가 일치하지 않습니다."),
  address: yup.string().required("주소을 입력해주세요"),
  add_detail: yup.string().required("상세주소을 입력해주세요"),
});
