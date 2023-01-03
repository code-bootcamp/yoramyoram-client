import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Divider, Select } from "antd";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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
  align-items: center;
  justify-content: center;

  background: url("/productList/shopbanner.jpg") no-repeat center;
  background-size: cover;
  ${mq.mobile} {
    padding: 0 18px;
    font-size: 35px;
    height: 200px;
  }
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
  background-color: #ffffff;
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
`;

export const SearchOutline = styled(SearchOutlined)`
  position: absolute;
  top: 19px;
  right: 6px;
`;

export const ListWrapper = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
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
export const ProductWriteBtn = styled.button`
  width: 15%;
  padding: 10px 0;
  color: #ffffff;
  font-size: 16px;
  background-color: #30640a;
  border: none;
  cursor: pointer;
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

export const SelectBox = styled(Select)`
  width: 100px;
`;

export const ListContentsBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  cursor: pointer;
`;

export const ProductItemBox = styled.div`
  flex-basis: 313px;
  flex-grow: 0;
  ${mq.mobile} {
    flex: 0 0 47.5%;
  }
`;

export const ListImg = styled.img`
  width: 100%;
`;

export const ListProductInfo = styled.div`
  padding: 15px 0;
  font-size: 16px;
  color: #222222;
`;

export const ListProductName = styled.div`
  line-height: 1.5;
  word-break: keep-all;
`;

export const ListProductPrice = styled.div`
  margin: 10px 0 20px;
  font-family: "Noto Sans KR";
  font-weight: bold;
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
  /* color: ${(props: IPageProps) => (props.isActive ? "blue" : "black")}; */
  /* font-weight: ${(props: IPageProps) =>
    props.isActive ? "bold" : "normal"}; */
  /* cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")}; */
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
