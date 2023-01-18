import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { updataPasswordPhoneState } from "../../../../commons/stores";
import { useMoveToPage } from "../../../commons/custom/useMoveToPage";
import Input02 from "../../../commons/inputs/accountsearch/input02.index";
import { FIND_USER_PASSWRD, SEND_TOKEN } from "./PasswordSearch.query";
import * as S from "./PasswordSearch.styles";

interface IData {
  name: string;
  email: string;
  phoneFirst: string;
  phoneSecond: string;
  phoneThird: string;
  phone: string;
  token: string;
}

export default function PaSearchPageUI() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [findUserPassword] = useMutation(FIND_USER_PASSWRD);
  const [sendTokentoPhone] = useMutation(SEND_TOKEN);
  const [, setUpdataPasswordPhoneState] = useRecoilState(
    updataPasswordPhoneState
  );
  const { register, handleSubmit, getValues, watch } = useForm<IData>({
    mode: "onChange",
  });

  const watchAll = Object.values(watch());

  useEffect(() => {
    if (watchAll.every((el) => el)) {
    } else {
    }
  }, [watchAll]);
  // console.log(watchAll);

  const PhoneFirst = getValues("phoneFirst");
  const PhoneSecond = getValues("phoneSecond");
  const PhoneThird = getValues("phoneThird");
  const phone = PhoneFirst + PhoneSecond + PhoneThird;

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

  const onClickFindPasswordSubmit = async (data: IData) => {
    const { phoneFirst, phoneSecond, phoneThird, ...value } = data;
    try {
      const result = await findUserPassword({
        variables: {
          ...value,
          phone,
        },
      });
      setUpdataPasswordPhoneState(phone);
      // console.log(result);
      void router.push("/account/password_reset");
    } catch (error) {
      Modal.warning({ content: "입력하신 정보를 다시한번 확인해주세요." });
    }
  };

  return (
    <S.Background>
      <S.Box>
        <S.SearchTitle>
          <S.SearchId onClick={onClickMoveToPage("/account/id_search")}>
            아이디 찾기{" "}
          </S.SearchId>{" "}
          <S.SearchLine>|</S.SearchLine>
          <S.SearchPa>비밀번호 찾기</S.SearchPa>
        </S.SearchTitle>
        <S.MainCon onSubmit={handleSubmit(onClickFindPasswordSubmit)}>
          <Input02 register={register("name")} title="이름" type="text" />
          <Input02 register={register("email")} title="이메일" type="text" />
          <S.PhoneNumberWrapper>
            <S.Label>휴대폰 번호</S.Label>
            <S.PhoneNumberBtnInputBox>
              <S.NumberBox>
                <S.PhoneNumber {...register("phoneFirst")}>
                  <option>010</option>
                  <option>011</option>
                </S.PhoneNumber>
                <S.PhoneNumber2
                  {...register("phoneSecond")}
                  maxLength={4}
                  type="text"
                />
                <S.PhoneNumber2
                  {...register("phoneThird")}
                  maxLength={4}
                  type="text"
                />
              </S.NumberBox>
              <S.CertNumber type="button" onClick={sendNumBtn}>
                인증번호 받기
              </S.CertNumber>
            </S.PhoneNumberBtnInputBox>
          </S.PhoneNumberWrapper>
          <S.CertificationBox>
            <Input02
              register={register("token")}
              type="text"
              title="인증하기"
            />
            <S.CountDown>
              {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
                2,
                "0"
              )}`}
            </S.CountDown>
          </S.CertificationBox>
          <S.PhoneSearch>
            이메일과 휴대폰 번호 인증을 통해 비밀번호를 찾을 수 있습니다.
          </S.PhoneSearch>
          <S.PhoneOk>인증하기</S.PhoneOk>
        </S.MainCon>
        <S.Info>
          <S.NoticeText>
            입력한 정보는 본인확인을 위해서 나이스평가정보에
            제공되며,본인확인용도 외에 사용하거나 저장되지 않습니다.
          </S.NoticeText>
        </S.Info>
        <S.Info>
          <S.NoticeText>
            위 방법으로 아이디/비밀번호를 찾으실 수 없는 경우 고객상담센터
            1234-5678로 문의바랍니다.
          </S.NoticeText>
        </S.Info>
      </S.Box>
    </S.Background>
  );
}
