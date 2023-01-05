import { useMoveToPage } from "../../custom/useMoveToPage";
import * as S from "./LayoutFooter.styles";

export default function LayoutFooter() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.FooterBox>
      <S.FooterInnerBox>
        <S.LeftBox>
          <S.LeftLogo src="/header/logo_black.png" alt="" />
          <S.LeftText>
            Yoram Yoram은 <br />
            제로 웨이스트 라이프를 추구합니다.
          </S.LeftText>
        </S.LeftBox>
        <div>
          <S.RightNavBox>
            <li onClick={onClickMoveToPage("/")}>Home</li>
            <li onClick={onClickMoveToPage("/about")}>Our Story</li>
            <li onClick={onClickMoveToPage("/products")}>Shop</li>
            <li onClick={onClickMoveToPage("/offline_shop")}>Offline Shops</li>
          </S.RightNavBox>
          <S.ZeroWasteInfo>
            (주)요람요람
            <br />
            12345 서울시 강남구 요람빌딩 20층
            <br />
            사업자 등록번호 안내 : 000-00-11111 대표 김요람 통신판매업 신고 제
            2022-강남구-0000호 [사업자정보확인]
            <br />
            개인정보보호책임자 : 김요람 유선전화 : 1234-5678 팩스 :
            000-1234-5678 (admin@yoramyoram.com)
            <br />
            입금계좌 안내 신한은행 000-012-34567 예금주: (주)요람요람
            <br />
            <br />
            Copyright © 2022 yoramyoram. All rights reserved.
            <br />
            요람요람의 모든 상품 이미지 및 컨텐츠의 저작권은 ㈜요람요람에 있으며
            무단 사용시 법적 제재를 받을 수 있습니다.
          </S.ZeroWasteInfo>
        </div>
      </S.FooterInnerBox>
    </S.FooterBox>
  );
}
