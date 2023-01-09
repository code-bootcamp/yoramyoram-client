import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, isAdminState } from "../../../../commons/stores";
import { useMoveToPage } from "../../custom/useMoveToPage";
import { LOGOUT } from "../../hooks/mutation/useLogout";
import { FETCH_LOGIN_ADMIN } from "../../hooks/queries/useFetchLoginAdmin";
import { FETCH_LOGIN_USER } from "../../hooks/queries/useFetchLoginUser";
import Name from "./LayoutMobileHeader";
import * as S from "./LayoutHeader.styles";
import * as O from "./LayoutHeaderMain.styles";
import WebName from "./LayoutHeader";

const menuList = [
  {
    name: "Our Story",
    url: "/about",
  },
  {
    name: "Shop",
    url: "/products",
  },
  {
    name: "Offline Shops",
    url: "/offline_shop",
  },
  {
    name: "My Page",
    url: "/mypage",
  },
  {
    name: "Cart",
    url: "/basket",
  },
];
export function LayoutHeader() {
  const router = useRouter();
  const [logout] = useMutation(LOGOUT);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [IsAdminState, setIsAdminState] = useRecoilState(isAdminState);

  const onClickLogout = async () => {
    try {
      const result = await logout();
      router.push("/");
      location.reload();
      Modal.success({ content: "로그아웃 되었습니다." });
    } catch (error) {
      Modal.error({ content: "로그아웃에 실패했습니다." });
    }
  };
  const { onClickMoveToPage } = useMoveToPage();

  const { data: user } = useQuery(FETCH_LOGIN_USER);
  const { data: admin } = useQuery(FETCH_LOGIN_ADMIN);
  console.log("HeaderUser:", ` ${user ? user : "유저정보X"} `);
  console.log("HeaderAdmin:", ` ${admin ? user : "관리자정보X"} `);
  // 반응형 메뉴

  const [isOpen, setIsOpen] = useState<boolean>(false); // 메뉴의 초기값을 false로 설정
  // console.log(isOpen);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // on,off 개념 boolean
  };
  // console.log("fetchUser:", user);
  // console.log("fetchAdmin", admin);
  // console.log("엑세스토큰:", accessToken);
  if (!accessToken) {
    // return alert("액세스토큰이 없습니다!!!!!!!!!");
    // console.log("액세스 토큰이 없습니다!");
  }
  return (
    <>
      <S.MobileHeader>
        <S.HeaderWrapper>
          <S.Hamburger onClick={toggleMenu} />
          <S.Logo>
            <img src="/header/logo_gr.png" onClick={onClickMoveToPage("/")} />
          </S.Logo>
          <S.MyMenu>
            <S.User />
            <S.Cart />
          </S.MyMenu>
        </S.HeaderWrapper>
        <S.Sidebar isOpen={isOpen}>
          <Name />

          <S.Nav>
            <ul>
              {menuList.map((el) => (
                <li onClick={onClickMoveToPage(el.url)}>{el.name}</li>
              ))}
            </ul>
          </S.Nav>
        </S.Sidebar>
      </S.MobileHeader>
      <S.HeaderBox>
        <S.TextBox>
          <S.NavUl>
            <S.NavBtn onClick={onClickMoveToPage("/about")}>Our Story</S.NavBtn>
            <S.NavBtn onClick={onClickMoveToPage("/products")}>Shop</S.NavBtn>
            <S.NavBtn onClick={onClickMoveToPage("/offline_shop")}>
              Offline Shops
            </S.NavBtn>
          </S.NavUl>
          <S.MiddleBox>
            <S.LogoImg
              src="/header/yoram_wh.png"
              onClick={onClickMoveToPage("/")}
            />
          </S.MiddleBox>
          <S.NavRightUl>
            <WebName />
            {/* {user?.fetchLoginUser.name ? ( // 여기야야야야양!!!!!!!!!!! 고쳐!!!!!!
              <>
                <S.NavBtn
                  onClick={onClickMoveToPage("/mypage")}
                  style={{ fontWeight: "500" }}
                >
                  {user?.fetchLoginUser.name}
                  <span style={{ fontWeight: "400" }}>님</span>
                </S.NavBtn>
                <S.NavBtn onClick={onClickLogout}>Logout</S.NavBtn>
              </>
            ) : (
              <>
                <S.NavBtn onClick={onClickMoveToPage("/sign_in")}>
                  Login
                </S.NavBtn>
                <S.NavBtn onClick={onClickMoveToPage("/join")}>Join</S.NavBtn>
              </>
            )} */}
            <S.NavBtn onClick={onClickMoveToPage("/basket")}>Cart</S.NavBtn>
          </S.NavRightUl>
        </S.TextBox>
      </S.HeaderBox>
    </>
  );
}

export function LayoutHeaderMain() {
  const router = useRouter();
  const [logout] = useMutation(LOGOUT);
  const { data: user } = useQuery(FETCH_LOGIN_USER);
  const { data: admin } = useQuery(FETCH_LOGIN_ADMIN);
  const onClickLogout = async () => {
    try {
      await logout();
      router.push("/");
      location.reload();
    } catch (error) {
      Modal.error({ content: "로그아웃에 실패했습니다." });
    }
  };
  const { onClickMoveToPage } = useMoveToPage();

  // 반응형 메뉴

  const [isOpen, setIsOpen] = useState(false); // 메뉴의 초기값을 false로 설정

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // on,off 개념 boolean
  };

  return (
    <>
      <O.MobileHeader>
        <O.HeaderWrapper>
          <O.Hamburger onClick={toggleMenu} />
          <O.Logo>
            <img src="/header/logo_gr.png" onClick={onClickMoveToPage("/")} />
          </O.Logo>
          <O.MyMenu>
            <O.User />
            <O.Cart />
          </O.MyMenu>
        </O.HeaderWrapper>
        <O.Sidebar isOpen={isOpen}>
          <Name />
          {/* {data?.fetchLoginUser.name ? (
            <S.UserInfoWrapper>
              <S.UserHi>{data?.fetchLoginUser.name}님, 안녕하세요.</S.UserHi>
              <S.PointBox>
                <S.UserPointTxt>YORAM POINT</S.UserPointTxt>
                <S.UserPoint>
                  {data?.fetchLoginUser.point}
                  <span>P</span>
                </S.UserPoint>
              </S.PointBox>
            </S.UserInfoWrapper>
          ) : (
            <S.GoLoginWrapper>
              <S.GoLoginTxt>로그인이 필요합니다.</S.GoLoginTxt>
              <S.GoLogin onClick={onClickMoveToPage("/sign_in")}>
                Login
              </S.GoLogin>
            </S.GoLoginWrapper>
          )} */}
          <O.Nav>
            <ul>
              <ul>
                {menuList.map((el) => (
                  <li onClick={onClickMoveToPage(el.url)}>{el.name}</li>
                ))}
              </ul>
            </ul>
          </O.Nav>
        </O.Sidebar>
      </O.MobileHeader>
      <O.HeaderBox>
        <O.TextBox>
          <O.NavUl>
            <O.NavBtn onClick={onClickMoveToPage("/about")}>Our Story</O.NavBtn>
            <O.NavBtn onClick={onClickMoveToPage("/products")}>Shop</O.NavBtn>
            <O.NavBtn onClick={onClickMoveToPage("/offline_shop")}>
              Offline Shops
            </O.NavBtn>
          </O.NavUl>
          <O.MiddleBox>
            <S.LogoImg
              src="/header/logo_gr.png"
              onClick={onClickMoveToPage("/")}
            />
          </O.MiddleBox>
          <O.NavRightUl>
            <WebName />

            {/* {user?.fetchLoginUser.name ? (
              <>
                <O.NavBtn
                  onClick={onClickMoveToPage("/mypage")}
                  style={{ fontWeight: "500" }}
                >
                  {user?.fetchLoginUser.name}
                  <span style={{ fontWeight: "400" }}>님</span>
                </O.NavBtn>
                <O.NavBtn onClick={onClickLogout}>Logout</O.NavBtn>
              </>
            ) : (
              <>
                <O.NavBtn onClick={onClickMoveToPage("/sign_in")}>
                  Login
                </O.NavBtn>
                <O.NavBtn onClick={onClickMoveToPage("/join")}>Join</O.NavBtn>
              </>
            )} */}
            <O.NavBtn onClick={onClickMoveToPage("/basket")}>Cart</O.NavBtn>
          </O.NavRightUl>
        </O.TextBox>
      </O.HeaderBox>
    </>
  );
}
