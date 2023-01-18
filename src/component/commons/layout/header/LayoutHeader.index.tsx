import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { PriceReg } from "../../../../commons/library/util";
import { useMoveToPage } from "../../custom/useMoveToPage";
import { LOGOUT } from "../../hooks/mutation/useLogout";
import { FETCH_LOGIN_USER } from "../../hooks/queries/useFetchLoginUser";
import * as S from "./LayoutHeader.styles";
import * as O from "./LayoutHeaderMain.styles";

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
  const onClickLogout = async () => {
    try {
      const result = await logout();
      location.reload();
      Modal.success({
        content: "로그아웃 되었습니다.",
        afterClose() {
          router.push("/sign_in");
        },
      });
    } catch (error) {
      Modal.error({ content: "로그아웃에 실패했습니다." });
    }
  };
  const { data } = useQuery(FETCH_LOGIN_USER);
  // console.log(data);
  // 반응형 메뉴

  const [isOpen, setIsOpen] = useState<boolean>(false); // 메뉴의 초기값을 false로 설정
  // console.log(isOpen);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // on,off 개념 boolean
  };

  const onClickMoveToPage = (path: string) => () => {
    void router.push(path);
    setIsOpen(false);
  };

  return (
    <>
      <S.MobileHeader>
        <S.HeaderWrapper>
          <S.Hamburger onClick={toggleMenu} />
          <S.Logo onClick={onClickMoveToPage("/")}>
            <img src="/header/logo_gr.png" />
          </S.Logo>
          <S.MyMenu>
            <S.User onClick={onClickMoveToPage("/mypage")} />
            <S.Cart onClick={onClickMoveToPage("/basket")} />
          </S.MyMenu>
        </S.HeaderWrapper>
        <S.Sidebar isOpen={isOpen}>
          {data?.fetchLoginUser.name ? (
            <S.UserInfoWrapper>
              <S.UserHi>{data?.fetchLoginUser.name}님, 안녕하세요.</S.UserHi>

              <S.PointBox>
                <S.UserPointTxt>YORAM POINT</S.UserPointTxt>
                <S.UserPoint>
                  {PriceReg(data?.fetchLoginUser.point)}
                  <span>P</span>
                </S.UserPoint>
                <S.GoLogout onClick={onClickLogout}>Logout</S.GoLogout>
              </S.PointBox>
            </S.UserInfoWrapper>
          ) : (
            <S.GoLoginWrapper>
              <S.GoLoginTxt>로그인이 필요합니다.</S.GoLoginTxt>
              <S.GoLogin onClick={onClickMoveToPage("/sign_in")}>
                Login
              </S.GoLogin>
            </S.GoLoginWrapper>
          )}

          <S.Nav>
            <ul>
              {menuList.map((el: typeof data) => (
                <li key={el.url} onClick={onClickMoveToPage(el.url)}>
                  {el.name}
                </li>
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
            {data?.fetchLoginUser.name ? (
              <>
                <S.NavBtn
                  onClick={onClickMoveToPage("/mypage")}
                  style={{ fontWeight: "500" }}
                >
                  {data?.fetchLoginUser.name}
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
            )}
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
  const onClickLogout = async () => {
    try {
      const result = await logout();
      router.push("/");
      location.reload();
    } catch (error) {
      Modal.error({ content: "로그아웃에 실패했습니다." });
    }
  };
  const { data } = useQuery(FETCH_LOGIN_USER);
  // 반응형 메뉴

  const [isOpen, setIsOpen] = useState(false); // 메뉴의 초기값을 false로 설정

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // on,off 개념 boolean
  };

  const onClickMoveToPage = (path: string) => () => {
    void router.push(path);
    setIsOpen(false);
  };

  return (
    <>
      <O.MobileHeader>
        <O.HeaderWrapper>
          <O.Hamburger onClick={toggleMenu} />
          <O.Logo onClick={onClickMoveToPage("/")}>
            <img src="/header/logo_gr.png" />
          </O.Logo>
          <O.MyMenu>
            <O.User onClick={onClickMoveToPage("/mypage")} />
            <O.Cart onClick={onClickMoveToPage("/basket")} />
          </O.MyMenu>
        </O.HeaderWrapper>
        <O.Sidebar isOpen={isOpen}>
          {data?.fetchLoginUser.name ? (
            <S.UserInfoWrapper>
              <S.UserHi>{data?.fetchLoginUser.name}님, 안녕하세요.</S.UserHi>

              <S.PointBox>
                <S.UserPointTxt>YORAM POINT</S.UserPointTxt>
                <S.UserPoint>
                  {PriceReg(data?.fetchLoginUser.point)}
                  <span>P</span>
                </S.UserPoint>
                <S.GoLogout onClick={onClickLogout}>Logout</S.GoLogout>
              </S.PointBox>
            </S.UserInfoWrapper>
          ) : (
            <S.GoLoginWrapper>
              <S.GoLoginTxt>로그인이 필요합니다.</S.GoLoginTxt>
              <S.GoLogin onClick={onClickMoveToPage("/sign_in")}>
                Login
              </S.GoLogin>
            </S.GoLoginWrapper>
          )}
          <O.Nav>
            <ul>
              {menuList.map((el: typeof data) => (
                <li key={el.url} onClick={onClickMoveToPage(el.url)}>
                  {el.name}
                </li>
              ))}
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
            {data?.fetchLoginUser.name ? (
              <>
                <O.NavBtn
                  onClick={onClickMoveToPage("/mypage")}
                  style={{ fontWeight: "500" }}
                >
                  {data?.fetchLoginUser.name}
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
            )}
            <O.NavBtn onClick={onClickMoveToPage("/basket")}>Cart</O.NavBtn>
          </O.NavRightUl>
        </O.TextBox>
      </O.HeaderBox>
    </>
  );
}
