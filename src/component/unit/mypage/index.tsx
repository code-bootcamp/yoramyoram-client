import { RightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import * as S from "./index.styles";

import WishList from "./wishList/WishList.index";
import { FETCH_LOGIN_USER } from "../../../component/commons/hooks/queries/useFetchLoginUser";
import { useQuery } from "@apollo/client";
import { PriceReg } from "../../../commons/library/util";

export default function Mypage() {
  const [mypage, setMyPage] = useState(true);
  const { data } = useQuery(FETCH_LOGIN_USER);
  const [level, setLevel] = useState("");
  const [levelImg, setLevelImg] = useState("");
  const [leftPoint, setLeftPoint] = useState("");
  const [nextLevel, setNextLevel] = useState("");
  const [isLeft, setIsLeft] = useState(true);

  useEffect(() => {
    if (data?.fetchLoginUser.point >= 20000) {
      setLevel("해바라기");
      setLevelImg("/mypage/flower.png");
      setIsLeft(false);
    } else if (data?.fetchLoginUser.point >= 15000) {
      setLevel("꽃봉오리");
      setLevelImg("/mypage/bud.png");
      setLeftPoint("20,000");
      setNextLevel("해바라기");
    } else if (data?.fetchLoginUser.point >= 10000) {
      setLevel("줄기");
      setLevelImg("/mypage/stem.png");
      setLeftPoint("15,000");
      setNextLevel("꽃봉오리");
    } else if (data?.fetchLoginUser.point >= 5000) {
      setLevel("새싹");
      setLevelImg("/mypage/sprout.png");
      setLeftPoint("10,000");
      setNextLevel("줄기");
    } else {
      setLevel("씨앗");
      setLevelImg("/mypage/seed.png");
      setLeftPoint("5,000");
      setNextLevel("새싹");
    }
  }, [data]);

  return (
    <>
      <S.Wrapper>
        <S.innerWrapper>
          <S.MypageTitle>My page</S.MypageTitle>
          <S.MypageBox>
            <S.UserBox>
              <S.UserImgBox>
                <S.MypageImg src={levelImg} />
              </S.UserImgBox>

              <S.UserInfoBox>
                <S.WelcomeText>
                  <span>{data?.fetchLoginUser.name}</span>님 안녕하세요.
                </S.WelcomeText>
                <S.RatingText>
                  <p>
                    {data?.fetchLoginUser.name}님은 현재{" "}
                    <S.Rating>{level}</S.Rating>등급 입니다.
                  </p>
                  {isLeft ? (
                    <p>
                      <S.PurposePoint>{leftPoint}p</S.PurposePoint> 달성하면{" "}
                      <S.Rating>{nextLevel}</S.Rating>등급으로 승급됩니다.
                    </p>
                  ) : (
                    <p>Yoram Yoram 최종 등급입니다.</p>
                  )}
                </S.RatingText>
              </S.UserInfoBox>
            </S.UserBox>
            <S.RightTextBox>
              <S.MobileDiv>
                <S.RightPointText>YORAM POINT</S.RightPointText>
                <div>
                  <S.AccumulatePoint>
                    {PriceReg(data?.fetchLoginUser.point)}
                  </S.AccumulatePoint>
                  p
                </div>
              </S.MobileDiv>
            </S.RightTextBox>
          </S.MypageBox>
          <S.ContentsBox>
            {/* <S.MyShopingSelectBox>
              <S.SelectBoxText>My쇼핑</S.SelectBoxText>
              <S.BtnBox>
                <S.SelectBtn onClick={() => setMyPage(true)}>
                  구매내역 <RightOutlined />
                </S.SelectBtn>
                <S.SelectBtn onClick={() => setMyPage(false)}>
                  위시리스트 <RightOutlined />
                </S.SelectBtn>
              </S.BtnBox>
            </S.MyShopingSelectBox> */}
            <WishList />
          </S.ContentsBox>
        </S.innerWrapper>
      </S.Wrapper>
    </>
  );
}
