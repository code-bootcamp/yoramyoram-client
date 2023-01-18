import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { gql } from "@apollo/client";
import * as S from "./IdSearchPage.styles";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { findUserEmailState } from "../../../../commons/stores";
import { useMoveToPage } from "../../../commons/custom/useMoveToPage";
import { yupResolver } from "@hookform/resolvers/yup";
import { IdSearchSchema } from "./IdSearchPage.validation";

const FIND_USER_EMAIL = gql`
  query findUserEmail($name: String!, $phone: String!) {
    findUserEmail(name: $name, phone: $phone)
  }
`;

interface IValue {
  name: string;
  phoneFirst: string;
  phoneSecond: string;
  phoneThird: string;
}

export default function IdSearchPageUI() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const client = useApolloClient();
  const [UserEmailState, setUserEmailState] =
    useRecoilState(findUserEmailState);
  const { data } = useQuery(FIND_USER_EMAIL);

  const { register, handleSubmit, getValues, watch } = useForm<IValue>({
    resolver: yupResolver(IdSearchSchema),
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

  const onSubmitForm = async (value: IValue) => {
    const { phoneFirst, phoneSecond, phoneThird, ...restValue } = value;
    try {
      const result = await client.query({
        query: FIND_USER_EMAIL,
        variables: {
          ...restValue,
          phone,
        },
      });
      setUserEmailState(result.data.findUserEmail);

      void router.push("/account/id_search_success");
    } catch (error) {
      void router.push("/account/search_result");
    }
    // 입력하신 정보를 다시한번 확인해주세요 => 비밀번호 찾기 catch시
  };

  return (
    <S.Background>
      <S.Box>
        <S.SearchTitle>
          <S.SearchId>아이디 찾기 </S.SearchId> <S.SearchLine>|</S.SearchLine>
          <S.SearchPa onClick={onClickMoveToPage("/account/password_search")}>
            비밀번호 찾기
          </S.SearchPa>
        </S.SearchTitle>
        <S.MainCon onSubmit={handleSubmit(onSubmitForm)}>
          <S.Name>
            <S.NameLabel>이름</S.NameLabel>
            <S.NameIn {...register("name")} type="text" />
          </S.Name>
          <S.Phone>
            <S.PhoneTitle>휴대폰 번호</S.PhoneTitle>
            <S.PhoneNumber>
              <S.PhoneSelect {...register("phoneFirst")}>
                <option>선택</option>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
              </S.PhoneSelect>
              <S.PhoneNumber2
                {...register("phoneSecond")}
                type="text"
                maxLength={4}
              />
              <S.PhoneNumber2
                {...register("phoneThird")}
                type="text"
                maxLength={4}
              />
            </S.PhoneNumber>
          </S.Phone>
          <S.PhoneSearch>
            휴대폰 인증을 통해 아이디를 찾을 수 있습니다.
          </S.PhoneSearch>
          <div>
            <S.PhoneOk>아이디 찾기</S.PhoneOk>
          </div>
        </S.MainCon>
        <S.Info>
          <S.NoticeText>
            <span>
              입력한 정보는 본인확인을 위해서 나이스평가정보에
              제공되며,본인확인용도 외에 사용하거나 저장되지 않습니다.
            </span>
          </S.NoticeText>
        </S.Info>
        <S.Info>
          <S.NoticeText>
            <span>
              위 방법으로 아이디/비밀번호를 찾으실 수 없는 경우 고객상담센터
              1234- 5678로 문의바랍니다.
            </span>
          </S.NoticeText>
        </S.Info>
      </S.Box>
    </S.Background>
  );
}
