import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import { map } from "jquery";

import {
  ChangeEvent,
  KeyboardEvent,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { string } from "yup";
import { makeMap } from "../../commons/kakaomap/kakaoMap.index";
// import KaKaoMap from "../../commons/kakaomap/kakaoMap.index";
import * as S from "./OfflineShopPage.styles";

declare const window: typeof globalThis & {
  kakao: any;
};
export default function OfflineShopPageUI() {
  const [shopList, setShopList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [x, setX] = useState("37.562910000");
  const [y, setY] = useState("126.974680000");
  const [word, setWord] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?&libraries=services&autoload=false&appkey=f35a51c8c3697a64576bbb9f231c93f4";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        makeMap(x, y);
      });
    };

    const getData = async () => {
      const head = await axios.get(
        "https://map.seoul.go.kr/smgis/apps/theme.do?cmd=getContentsList&key=94ac43caa974490f8a37bba68f3438e9&page_size=20&page_no=1&coord_x=126.974695&coord_y=37.564150&distance=100000&search_type=0&search_name=&theme_id=11103395&content_id=&subcate_id=11103395,1,2,3,4,5,6,7,8,9"
      );

      // setShopList(head.data.body);
      const DATA_COUNT = head.data.head.DATA_COUNT;
      const TOTAL_COUNT = head.data.head.TOTAL_COUNT;
      let PAGE = 1;
      if (TOTAL_COUNT % DATA_COUNT === 0) {
        PAGE = TOTAL_COUNT / DATA_COUNT;
      } else {
        PAGE = Math.floor(TOTAL_COUNT / DATA_COUNT + 1);
      }

      const temp: any = [...shopList];
      for (let i = 1; i <= PAGE; i++) {
        const result = await axios
          .get(
            `https://map.seoul.go.kr/smgis/apps/theme.do?cmd=getContentsList&key=94ac43caa974490f8a37bba68f3438e9&page_size=20&page_no=${i}&coord_x=126.974695&coord_y=37.564150&distance=100000&search_type=0&search_name=&theme_id=11103395&content_id=&subcate_id=11103395,1,2,3,4,5,6,7,8,9`
          )
          .then((res) => {
            temp.push(...res.data.body);
          })
          .catch((e) => {
            // console.log(e);
          });
      }
      setX(temp[0].COT_COORD_X);
      setY(temp[0].COT_COORD_Y);
      setShopList(temp);
    };
    // console.log(shopList);
    void getData();
  }, []);

  const toggleMenu = () => {
    setIsVisible((prev) => !prev); // on,off 개념 boolean
  };

  const onClickShop = (x: string, y: string) => {
    makeMap(x, y);
  };

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleMessage();
    }
  };

  const onClickSearch = () => {
    handleMessage();
  };

  const handleMessage = async () => {
    if (word === "") {
      return alert("검색어를 입력해주세요");
    } else {
      await axios
        .get(
          `https://map.seoul.go.kr/smgis/apps/theme.do?cmd=getContentsList&key=94ac43caa974490f8a37bba68f3438e9&page_size=20&page_no=1&coord_x=126.974695&coord_y=37.564150&distance=100000&search_type=1&search_name=${word}&theme_id=11103395&content_id=&subcate_id=11103395,1,2,3,4,5,6,7,8,9`
        )
        .then((res) => {
          setShopList(res.data.body);
        })
        .catch((e) => {
          // console.log(e);
        });
    }
  };

  return (
    <S.Background>
      <S.BigWrapper>
        <S.TitleWrapper>
          <h1>Find Your Favorite</h1>
          <h1>Zero Waste Shops!</h1>
          <h5>서울에 있는 모든 제로웨이스트 샵을 찾아보세요!</h5>
        </S.TitleWrapper>
        <S.MapWrapper>
          <S.ButtonBar onClick={toggleMenu} isVisible={isVisible}>
            {isVisible ? "✕" : "검색하기"}
          </S.ButtonBar>
          <S.SearchPart isVisible={isVisible}>
            <S.SearchMap>
              <input
                type="text"
                onChange={onChangeInputs}
                onKeyPress={handleKeyPress}
                placeholder="제로웨이스트샵을 검색하세요."
              />
              <S.SearchButton onClick={onClickSearch}>검색</S.SearchButton>
            </S.SearchMap>
            <S.ShopListWrapper>
              <S.ShopList>
                {shopList.map((el: any, idx) => (
                  <S.ListBox
                    onClick={() => onClickShop(el.COT_COORD_X, el.COT_COORD_Y)}
                  >
                    <S.List key={idx}>
                      <S.ListName>{el.COT_CONTS_NAME} </S.ListName>
                      <S.ListAddress>{el.COT_ADDR_FULL_NEW}</S.ListAddress>
                      <S.ListPhone>{el.COT_TEL_NO}</S.ListPhone>
                    </S.List>
                  </S.ListBox>
                ))}
              </S.ShopList>
            </S.ShopListWrapper>
          </S.SearchPart>
          <S.MapWrapper2>
            <S.Map id="map"></S.Map>
          </S.MapWrapper2>
        </S.MapWrapper>
      </S.BigWrapper>
    </S.Background>
  );
}
//
