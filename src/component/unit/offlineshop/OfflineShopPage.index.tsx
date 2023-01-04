import * as S from "./OfflineShopPage.styles";

export default function OfflineShopPageUI() {
  return (
    <S.Background>
      <S.BigWrapper>
        <S.TitleWrapper>
          <h1>Find Your Favorite</h1>
          <h1>Zero Waste Shops!</h1>
          <h5>서울에 있는 모든 제로웨이스트 샵을 찾아보세요!</h5>
        </S.TitleWrapper>
        <S.MapWrapper>
          <S.SearchPart>
            <S.SearchMap>
              <select>
                <option>강남구</option>
              </select>
              <input type="text" placeholder="검색어를 입력하세요" />
            </S.SearchMap>
            <S.ShopListWrapper>
              <S.ShopList>
                <div>
                  <h5>요람요람샵</h5>
                  <p>02055 서울 강남구 테헤란로 13길 40-36 역삼동 1층</p>
                  <p>000-1111-2222</p>
                </div>
                <div>
                  <h5>요람요람샵</h5>
                  <p>02055 서울 강남구 테헤란로 13길 40-36 역삼동 1층</p>
                  <p>000-1111-2222</p>
                </div>
                <div>
                  <h5>요람요람샵</h5>
                  <p>02055 서울 강남구 테헤란로 13길 40-36 역삼동 1층</p>
                  <p>000-1111-2222</p>
                </div>
                <div>
                  <h5>요람요람샵</h5>
                  <p>02055 서울 강남구 테헤란로 13길 40-36 역삼동 1층</p>
                  <p>000-1111-2222</p>
                </div>
                <div>
                  <h5>요람요람샵</h5>
                  <p>02055 서울 강남구 테헤란로 13길 40-36 역삼동 1층</p>
                  <p>000-1111-2222</p>
                </div>
              </S.ShopList>
            </S.ShopListWrapper>
          </S.SearchPart>
          <div>
            <S.MapImg src="./map2.png" />
          </div>
        </S.MapWrapper>
      </S.BigWrapper>
    </S.Background>
  );
}
//
