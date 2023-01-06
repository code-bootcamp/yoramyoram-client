import * as yup from "yup";

export const signInSchema = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "이메일 아이디를 @까지 정확하게 입력해주세요."
    ),
  password: yup
    .string()
    .required("패스워드를 입력해주세요.")
    .matches(
      /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{10,}$/,
      "영문/숫자/특수문자 중 2가지 이상 조합 10~16자리의 비밀번호를 입력해주세요."
    ),
});
