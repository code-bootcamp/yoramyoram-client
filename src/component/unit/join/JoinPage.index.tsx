import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import Input01 from "../../commons/inputs/Join/Input01.index";
import { CHECK_TOKEN, CREATE_USER, SEND_TOKEN } from "./JoinPage.query";
import * as S from "./JoinPage.styles";
interface IData {
  name?: string;
  email?: string;
  phone: string;
  address?: string;
  password?: string;
  add_detail?: string;
  birth?: string;
  passwordCheck?: string;
}

export default function JoinPageUI() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [sendTokentoPhone] = useMutation(SEND_TOKEN);
  const [checkTokenPhone] = useMutation(CHECK_TOKEN);
  const [test1, setTest1] = useState<string>("");
  const [test2, setTest2] = useState<string>("");
  const [test3, setTest3] = useState<string>("");
  const [phoneToken, setPhoneToken] = useState<string>("");
  const { register, handleSubmit, formState, setValue, getValues } =
    useForm<IData>({
      mode: "onChange",
    });

  const onChangeToken = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneToken(e.target.value);
    console.log(phoneToken);
  };

  const onChangeTest1 = (e: ChangeEvent<HTMLSelectElement>) => {
    setTest1(e.target.value);
    console.log(test1);
  };

  const onChangeTest2 = (e: ChangeEvent<HTMLInputElement>) => {
    setTest2(e.target.value);
    console.log(test2);
  };
  const onChangeTest3 = (e: ChangeEvent<HTMLInputElement>) => {
    setTest3(e.target.value);
    console.log(test3);
  };
  const phone = test1 + test2 + test3;

  const sendNumBtn = async () => {
    console.log(phone);
    try {
      await sendTokentoPhone({
        variables: {
          phone: phone,
        },
      });
    } catch (errer) {
      alert("인증번호 전송실패");
    }
  };

  const checkNumBtn = async () => {
    try {
      await checkTokenPhone({
        variables: {
          phone: phone,
          phoneToken: phoneToken,
        },
      });
      alert("인증완료");
    } catch (error) {
      alert("인증에 실패했습니다");
    }
  };

  const createUserSubmit = async (data: IData) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            name: data.name,
            email: data.email,
            phone: phone,
            address: data.address,
            password: data.password,
            add_detail: data.add_detail,
            birth: data.birth,
          },
        },
      });
      alert("회원가입을 해주셔서 감사합니다.");
      void router.push("/");
    } catch (error) {
      alert("회원가입 실패");
    }
  };

  return (
    <S.Background>
      <S.Container>
        <S.TitleWrapper>
          <S.Title>Join Us</S.Title>
          <S.TitleCon>Yoram Yoram 회원 가입</S.TitleCon>
        </S.TitleWrapper>
        <S.Form onSubmit={handleSubmit(createUserSubmit)}>
          <Input01
            type="text"
            title="이름"
            placeholder="이름을 입력하세요."
            register={register("name")}
          />
          <Input01
            type="text"
            title="이메일"
            placeholder="이메일을 입력하세요."
            register={register("email")}
          />
          <Input01
            type="password"
            title="비밀번호"
            placeholder="영문 대소문자/숫자/특수문자 중 2가지 이상 조합,10~16자"
            register={register("password")}
          />
          <Input01
            type="password"
            title="비밀번호 확인"
            placeholder="영문 대소문자/숫자/특수문자 중  2가지 이상 조합,10~16자"
            register={register("passwordCheck")}
          />
          <S.PhoneNumber>
            <S.Label>휴대폰번호</S.Label>
            <S.PhoneNumber2>
              <S.PhoneSelect onChange={onChangeTest1}>
                <option value="010">010</option>
                <option value="011">011</option>
              </S.PhoneSelect>
              <S.PhoneInput onChange={onChangeTest2} />
              <S.PhoneInput onChange={onChangeTest3} />
              <S.CertNumber onClick={sendNumBtn} type="button">
                인증번호 전송
              </S.CertNumber>
            </S.PhoneNumber2>
          </S.PhoneNumber>
          <S.CertNumberWrapper>
            <S.Label>인증번호</S.Label>
            <S.CertNumberInput type="text" onChange={onChangeToken} />
            <S.CertNumberButton type="button" onClick={checkNumBtn}>
              인증확인
            </S.CertNumberButton>
          </S.CertNumberWrapper>

          <S.AddressNumberWrapper>
            <S.Label>주소</S.Label>
            <S.AddressNumberInput type="text" />
            <S.AddressNumberButton type="button">
              우편번호 찾기
            </S.AddressNumberButton>
          </S.AddressNumberWrapper>
          <S.AddressInputWrapper>
            <S.Label></S.Label>
            <S.AddressInput
              type="text"
              placeholder="주소를 입력하세요"
              {...register("address")}
            />
          </S.AddressInputWrapper>
          <S.AddressInputWrapper>
            <S.Label></S.Label>
            <S.AddressInput
              type="text"
              placeholder="상세주소를 입력하세요"
              {...register("add_detail")}
            />
          </S.AddressInputWrapper>
          <input type="text" {...register("birth")} />

          <S.JoinButtonWrapper>
            <S.JoinButton>회원가입</S.JoinButton>
          </S.JoinButtonWrapper>
        </S.Form>
      </S.Container>
    </S.Background>
  );
}
