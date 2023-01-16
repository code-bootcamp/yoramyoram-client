import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { MoveToPageState } from "../../../commons/stores";
import * as S from "./About.styles";
export default function About() {
  const router = useRouter();
  const [moveToPage, setMoveToPage] = useRecoilState(MoveToPageState);

  const onClickMoveToKitchen = () => {
    void router.push("/products");
    setMoveToPage("Kitchen");
  };

  const onClickMoveToLife = () => {
    void router.push("/products");
    setMoveToPage("Life");
  };
  const onClickMoveToBathroom = () => {
    void router.push("/products");
    setMoveToPage("Bathroom");
  };
  const onClickMoveToWoman = () => {
    void router.push("/products");
    setMoveToPage("Woman");
  };
  const onClickMoveToPet = () => {
    void router.push("/products");
    setMoveToPage("Pet");
  };

  return (
    <>
      <S.Top>
        <S.Inner>
          <S.Title>Our Story</S.Title>
          <S.Subtitle>요람요람의 이야기를 들어보세요.</S.Subtitle>

          <S.Contents>
            <S.Left>
              <S.Img src="/about/ab1.png" />
              <S.LeftImg src="/about/ab2.png" />
            </S.Left>
            <S.Right>
              <S.Text>
                자원을 한번 쓰고 버리는 생산 및 소비방식을 지칭하는'요람에서
                무덤까지' 의 반대의 방식인 '<span>요람에서 요람으로</span>' 는
                한번 사용한 자원(요람)을 내다버리는 쓰레기(무덤)가 아니라 다음
                단계 생산의 원료(요람)가 되도록{" "}
                <span>새로운 생산 및 소비 시스템을 구축하자</span>는 의미입니다.
              </S.Text>
            </S.Right>
          </S.Contents>
        </S.Inner>
      </S.Top>
      <S.Bottom>
        <S.Inner>
          <S.RImgBox>
            <S.RImg src="/about/ab2.png" />
          </S.RImgBox>
          <S.Title>Yoram to Yoram</S.Title>
          <S.StSubtitle>
            "낭비 없이 사는 즐거운 라이프스타일을 제안합니다."
          </S.StSubtitle>
          <S.StText>
            요람에서 요람으로.
            <br />
            요람요람은 낭비 없는 삶,
            <br />
            불필요한 쓰레기 없는 세상을 추구합니다.
          </S.StText>

          <S.Categ>
            <S.CtTitle>
              Start <span>Zero-Waste Life</span> with Yoram Yoram!
            </S.CtTitle>
            <S.CardWrap>
              <S.Card1>
                <S.CardInner>
                  <S.Name>주방</S.Name>
                  <S.Button onClick={onClickMoveToKitchen}>
                    구경가기 <S.RightArrow />
                  </S.Button>
                </S.CardInner>
              </S.Card1>

              <S.Card2>
                <S.CardInner>
                  <S.Name>생활</S.Name>
                  <S.Button onClick={onClickMoveToLife}>
                    구경가기 <S.RightArrow />
                  </S.Button>
                </S.CardInner>
              </S.Card2>
              <S.Card3>
                <S.CardInner>
                  <S.Name>욕실</S.Name>
                  <S.Button onClick={onClickMoveToBathroom}>
                    구경가기 <S.RightArrow />
                  </S.Button>
                </S.CardInner>
              </S.Card3>
              <S.Card4>
                <S.CardInner>
                  <S.Name>여성용품</S.Name>
                  <S.Button onClick={onClickMoveToWoman}>
                    구경가기 <S.RightArrow />
                  </S.Button>
                </S.CardInner>
              </S.Card4>
              <S.Card5>
                <S.CardInner>
                  <S.Name>반려동물</S.Name>
                  <S.Button onClick={onClickMoveToPet}>
                    구경가기 <S.RightArrow />
                  </S.Button>
                </S.CardInner>
              </S.Card5>
            </S.CardWrap>
          </S.Categ>
        </S.Inner>
      </S.Bottom>
    </>
  );
}
