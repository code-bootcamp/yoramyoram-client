import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Input01 from "../../commons/inputs/Join/Input01.index";
import { CHECK_TOKEN, CREATE_USER, SEND_TOKEN } from "./JoinPage.query";
import * as S from "./JoinPage.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { joinSchema } from "./JoinPage.validation";
import { ChangeEvent, useEffect, useState } from "react";
import { Address } from "react-daum-postcode";
import { ErrorMessage } from "../../commons/inputs/Join/Input01.styles";
import { Modal } from "antd";

interface IData {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  add_detail: string;
  passwordCheck: string;
  phoneFirst: string;
  phoneSecond: string;
  phoneThird: string;
  phoneToken: string;
  role?: string;
}

export default function JoinPageUI() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [sendTokentoPhone] = useMutation(SEND_TOKEN);
  const [checkTokenPhone] = useMutation(CHECK_TOKEN);
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [addressName, setAddressName] = useState("");
  const [type, setType] = useState<string>("");
  const { register, handleSubmit, formState, getValues, watch, setValue } =
    useForm<IData>({
      resolver: yupResolver(joinSchema),
      mode: "onChange",
    });

  //=================================
  const watchAll = Object.values(watch());

  useEffect(() => {
    if (watchAll.every((el) => el)) {
    } else {
    }
  }, [watchAll]);
  // console.log(watchAll);
  //===================================

  const onClickUSERType = (e: ChangeEvent<HTMLInputElement>) => {
    setValue("role", e.currentTarget.value);
  };

  const onClickADMINType = (e: ChangeEvent<HTMLInputElement>) => {
    setValue("role", e.currentTarget.value);
  };

  const PhoneFirst = getValues("phoneFirst");
  const PhoneSecond = getValues("phoneSecond");
  const PhoneThird = getValues("phoneThird");
  const phone = PhoneFirst + PhoneSecond + PhoneThird;

  const phoneToken = getValues("phoneToken");

  const onCompleteAddressSearch = (address: Address) => {
    setAddressName(address.address);
    setZipcode(address.zonecode);
    setIsOpen((prev) => !prev);
    setValue("address", address.address);
  };
  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  //타이머
  //===========================================================

  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const [isCountdown, setIsCountdown] = useState(false);

  useEffect(() => {
    if (isCountdown === false) return;

    const timer = setInterval(() => {
      if (Number(seconds) > 0) {
        setSeconds(Number(seconds) - 1);
      }

      if (Number(seconds) === 0) {
        if (Number(minutes) === 0) {
          clearInterval(timer);
          setMinutes(3);
          setSeconds(0);
          setIsCountdown(false);
          Modal.warning({ content: "인증시간 초과" });
        } else {
          setMinutes(Number(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [minutes, seconds, isCountdown]);
  //=========================================================

  const sendNumBtn = async () => {
    try {
      await sendTokentoPhone({
        variables: {
          phone: phone,
        },
      });
      Modal.info({ content: "인증번호 발송" });
      if (isCountdown) {
        setIsCountdown(false);
        setIsCountdown(true);
      }
      setIsCountdown(true); // countdown 시작
    } catch (errer) {
      Modal.warning({ content: "인증번호 전송실패" });
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
      Modal.success({
        content: "인증 완료",
        afterClose() {
          setIsCountdown(false);
          setMinutes(3);
          setSeconds(0);
        },
      });
    } catch (error) {
      Modal.warning({ content: "인증번호가 일치하지 않습니다" });
    }
  };

  const createUserSubmit = async (data: IData) => {
    const {
      passwordCheck,
      phoneFirst,
      phoneSecond,
      phoneThird,
      phoneToken,
      ...value
    } = data;
    try {
      await createUser({
        variables: {
          createUserInput: {
            ...value,
            phone: phone,
            role: "USER",
          },
        },
      });
      Modal.success({
        content: "회원가입을 해주셔서 감사합니다.",
        afterClose() {
          void router.push("/");
        },
      });
    } catch (error) {
      Modal.warning({ content: "이미 등록하신 회원입니다." });
    }
  };

  return (
    <>
      {isOpen && (
        <S.AddressModal
          visible={true}
          onCancel={() => setIsOpen(false)}
          onOk={() => setIsOpen(false)}
        >
          <S.AddressSearchInput onComplete={onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Container>
        <S.TitleWrapper>
          <S.Title>Join Us</S.Title>
          <S.TitleCon>Yoram Yoram 회원 가입</S.TitleCon>
        </S.TitleWrapper>
        <S.Form onSubmit={handleSubmit(createUserSubmit)}>
          {/* <S.JoinTypeBox>
            <S.Label>가입유형</S.Label>
            <span> 관리자 </span>
            <S.JoinTypeInput
              type="radio"
              value="ADMIN"
              name="type"
              onChange={onClickADMINType}
            />
            <span>일반회원</span>
            <S.JoinTypeInput
              type="radio"
              value="USER"
              name="type"
              onChange={onClickUSERType}
            />
          </S.JoinTypeBox> */}
          <Input01
            type="text"
            title="이름"
            placeholder="이름을 입력하세요."
            register={register("name")}
            errorMessage={formState.errors.name?.message}
          />
          <Input01
            type="text"
            title="이메일"
            placeholder="이메일을 입력하세요."
            register={register("email")}
            errorMessage={formState.errors.email?.message}
          />
          <Input01
            type="password"
            title="비밀번호"
            placeholder="영문 대소문자/숫자/특수문자 중 2가지 이상 조합,10~16자"
            register={register("password")}
            errorMessage={formState.errors.password?.message}
          />
          <Input01
            type="password"
            title="비밀번호 확인"
            placeholder="영문 대소문자/숫자/특수문자 중  2가지 이상 조합,10~16자"
            register={register("passwordCheck")}
            errorMessage={formState.errors.passwordCheck?.message}
          />
          <S.PhoneNumber>
            <S.Label>휴대폰번호</S.Label>
            <S.PhoneNumber2>
              <S.PhoneWrap>
                <S.PhoneSelect {...register("phoneFirst")}>
                  <option value="010">010</option>
                  <option value="011">011</option>
                </S.PhoneSelect>
                <S.PhoneInput {...register("phoneSecond")} maxLength={4} />
                <S.PhoneInput {...register("phoneThird")} maxLength={4} />
              </S.PhoneWrap>
              <S.CertNumber onClick={sendNumBtn} type="button">
                인증번호 전송
              </S.CertNumber>
            </S.PhoneNumber2>
          </S.PhoneNumber>
          <S.InputWrapper>
            <S.Label>인증번호</S.Label>
            <S.CertNumberInput type="text" {...register("phoneToken")} />
            <S.CertNumberButton type="button" onClick={checkNumBtn}>
              인증확인
            </S.CertNumberButton>
            <S.CountDown>
              {`${String(minutes).padStart(2, "0")} : ${String(
                seconds
              ).padStart(2, "0")}`}
            </S.CountDown>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>주소</S.Label>
            <S.AddressNumberInput readOnly value={zipcode} type="text" />
            <S.AddressNumberButton onClick={onClickAddressSearch} type="button">
              우편번호 찾기
            </S.AddressNumberButton>
          </S.InputWrapper>
          <S.AddressInputWrapper>
            <S.Label></S.Label>
            <S.AddressInputBox>
              <S.AddressInput
                type="text"
                value={addressName}
                readOnly
                placeholder="주소를 입력하세요"
                {...register("address")}
              />
              <ErrorMessage>{formState.errors.address?.message}</ErrorMessage>
            </S.AddressInputBox>
          </S.AddressInputWrapper>
          <S.AddressInputWrapper>
            <S.Label></S.Label>
            <S.AddressInputBox>
              <S.AddressInput
                type="text"
                placeholder="상세주소를 입력하세요"
                {...register("add_detail")}
              />
              <ErrorMessage>
                {formState.errors.add_detail?.message}
              </ErrorMessage>
            </S.AddressInputBox>
          </S.AddressInputWrapper>

          <S.JoinButtonWrapper>
            <S.JoinButton>회원가입</S.JoinButton>
          </S.JoinButtonWrapper>
        </S.Form>
      </S.Container>
    </>
  );
}
