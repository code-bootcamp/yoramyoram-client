import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Divider, Select } from "antd";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import * as mq from "../../../../commons/styles/mediaQueries";

export const HeaderWrapper = styled.div`
  padding-top: 80px;
  ${mq.mobile} {
    padding-top: 70px;
  }
  ${mq.mobileL} {
    padding-top: 70px;
  }
  ${mq.tablet} {
    padding-top: 70px;
  }
`;

export const ListBanner = styled.div`
  width: 100%;
  height: 254px;
  font-size: 45px;
  color: #ffffff;
  font-family: "NewYork";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url("/productList/shopbanner.jpg") no-repeat center;
  background-size: cover;
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #00000021;
    content: "";
    z-index: 0;
  }
  ${mq.mobile} {
    padding: 0 18px;
    font-size: 35px;
    height: 200px;
  }
  ${mq.mobileL} {
    padding: 0 18px;
    font-size: 35px;
    height: 200px;
  }
`;
export const BannerTitle = styled.h1`
  display: block;
  font-size: 50px;
  ${mq.mobile} {
    padding: 0 18px;
    font-size: 34px;
  }
  ${mq.mobileL} {
    padding: 0 18px;
    font-size: 34px;
  }
  cursor: default;
  z-index: 1;
`;
export const BannerSubTxt = styled.p`
  font-size: 17px;
  display: block;
  margin-top: 15px;
  z-index: 1;
  word-break: keep-all;
  cursor: default;
  text-align: center;
  line-height: 1.3;
  ${mq.mobile} {
    font-size: 16px;
  }
  ${mq.mobileL} {
    font-size: 16px;
  }
  cursor: default;
`;

export const CategoryBar = styled.div`
  width: 100%;
  border-bottom: 1px solid #b7b7b7;
`;

export const CategoryBarSticky = styled.div`
  width: 100%;
  border-bottom: 1px solid #b7b7b7;
  position: fixed;
  top: 80px;
  background-color: #fcfbfa;
  z-index: 3;

  ${mq.mobile} {
    top: 70px;
  }
  ${mq.mobileL} {
    top: 70px;
  }
  ${mq.tablet} {
    top: 70px;
  }
`;

export const CategoryBox = styled.div`
  max-width: 1300px;

  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  gap: 15px;
  ${mq.laptop} {
    max-width: 1000px;
  }
  ${mq.mobile} {
    padding: 0;
    gap: 0;
  }
  ${mq.mobileL} {
    padding: 0;
    gap: 0;
  }
  ${mq.tablet} {
    padding: 15px 18px;
  }
`;

export const CategoryBtn = styled.button`
  width: 16%;
  display: block;
  padding: 8px 0;
  border-radius: 25px;
  border: 1px solid #b7b7b7;
  background: none;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 400;
  cursor: pointer;
  word-break: keep-all;
  &:last-of-type {
    ${mq.mobile} {
      border-right: none;
    }
    ${mq.mobileL} {
      border-right: none;
    }
  }
  ${mq.mobile} {
    width: 20%;
    border-radius: 0;
    border: none;
    border-right: 1px solid #b7b7b7;
  }
  ${mq.mobileL} {
    width: 20%;
    border-radius: 0;
    border: none;
    border-right: 1px solid #b7b7b7;
  }
`;

export const CategoryBtnActive = styled.button`
  width: 16%;
  display: block;
  color: #ffffff;
  padding: 8px 0;
  border-radius: 25px;
  border: none;
  background: #30640a;
  font-size: 16px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  cursor: pointer;
  ${mq.mobile} {
    width: 20%;
    border-radius: 0;
    border-right: 1px solid #b7b7b7;
  }
  ${mq.mobileL} {
    width: 20%;
    border-radius: 0;
    border-right: 1px solid #b7b7b7;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  position: relative;
  ${mq.mobile} {
    display: none;
  }
  ${mq.mobileL} {
    display: none;
  }
`;
export const SearchBoxMobile = styled.div`
  display: none;

  ${mq.mobile} {
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
  }
  ${mq.mobileL} {
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  display: block;
  background: none;
  border-bottom: 1px solid #b7b7b7;
  padding: 10px;
  font-size: 1rem;
  outline: none;
  &::placeholder {
    color: #b7b7b7;
  }
`;

export const SearchOutline = styled(SearchOutlined)`
  position: absolute;
  top: 19px;
  right: 6px;
  & > svg {
    color: #b7b7b7;
  }
`;

export const ListWrapper = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
  ${mq.laptop} {
    max-width: 1000px;
  }
  ${mq.mobile} {
    padding: 0 18px;
  }
  ${mq.mobileL} {
    padding: 0 18px;
  }
  ${mq.tablet} {
    padding: 0 18px;
  }
`;

interface IAdmin {
  admin: string;
}
export const ProductWriteBtn = styled.button<IAdmin>`
  width: 15%;
  padding: 10px 0;
  color: #ffffff;
  font-size: 16px;
  background-color: #30640a;
  border: none;
  cursor: pointer;
  display: ${(props) => (props.admin === "ADMIN" ? "block" : "none")};
  ${mq.mobile} {
    width: 100%;
  }
  ${mq.mobileL} {
    width: 100%;
  }
`;

export const ListHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* padding-top: 21px; */

  align-items: center;
  margin: 15px 0;
`;

export const ListCount = styled.div`
  font-size: 15px;
  color: #838383;

  & > span {
    font-size: 15px;
    color: #222222;
  }
`;

export const SelectBox = styled.select`
  width: 100px;
`;

export const ListContentsBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2.7em;
  ${mq.mobile} {
    gap: 1em;
  }
  ${mq.mobileL} {
    gap: 1em;
  }
`;

export const ProductItemBox = styled.div`
  flex-basis: 292px;
  flex-grow: 0;
  cursor: pointer;
  ${mq.mobile} {
    flex: 0 0 47.5%;
  }
  ${mq.mobileL} {
    flex: 0 0 47.5%;
  }
`;

export const ListImgWrap = styled.div`
  height: 292px;
  overflow: hidden;
  ${mq.mobile} {
    height: 213px;
  }
  ${mq.mobileL} {
    height: 213px;
  }
  &:hover img {
    transform: scale(1.13);
  }
`;
export const ListImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  transition: all 0.3s;
`;

export const ListProductInfo = styled.div`
  padding: 15px 0;
  font-size: 16px;
  color: #222222;
`;

export const ListProductName = styled.h5`
  line-height: 1.5;
  word-break: keep-all;
  ${mq.mobile} {
    font-size: 15px;
    width: 152px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  ${mq.mobileL} {
    font-size: 15px;
    width: 152px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const ListProductPrice = styled.p`
  margin: 10px 0 20px;
  font-family: "Noto Sans KR";
  font-weight: bold;
  color: #30640a;
  ${mq.mobile} {
    font-size: 15px;
    margin-top: 6px;
  }
  ${mq.mobileL} {
    font-size: 15px;
    margin-top: 6px;
  }
`;

export const ListProductBtnBar = styled.div`
  color: #707070;
  display: flex;
  align-items: center;
  & > span {
    padding-right: 15px;
    display: flex;
    align-items: center;
    font-size: 15px;
  }
`;

export const BtnBarText = styled.span`
  padding-left: 3px;
`;

export const ListChatBtn = styled(ChatBubbleOutlineIcon)`
  font-size: 18px;
  cursor: pointer;
`;

export const ListWishBtn = styled(FavoriteBorderIcon)`
  font-size: 18px;
  cursor: pointer;
`;

export const ListWishFiledBtn = styled(FavoriteIcon)`
  font-size: 18px;
  cursor: pointer;
`;

export const ListBasketBtn = styled(AddShoppingCartIcon)`
  font-size: 18px;
  cursor: pointer;
`;

export const ListPagination = styled.div`
  text-align: center;
  margin-top: 50px;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.span`
  padding: 0 1%;
  color: ${(props: IPageProps) => (props.isActive ? "#000000" : "#30640a")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
  cursor: pointer;
`;

export const PageNationLeftArrow = styled(LeftOutlined)`
  cursor: pointer;
`;

export const PageNationRightArrow = styled(RightOutlined)`
  cursor: pointer;
`;

// position: sticky 안됨
// 카테고리 버튼 색깔변경 map으로 뿌려서 index로 로직짜기
