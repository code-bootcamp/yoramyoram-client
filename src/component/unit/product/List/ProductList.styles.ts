import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Divider, Select } from "antd";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const HeaderWrapper = styled.header`
  margin-top: 80px;
  position: relative;
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

  background-image: url("/productList/shopbanner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CategoryBar = styled.div`
  width: 100%;
  position: sticky;
  top: 0px;
  border-bottom: 1px solid rgb(183, 183, 183);
`;

export const CategoryBox = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  gap: 15px;
`;

export const CategoryBtn = styled.button`
  width: 16%;
  display: block;
  height: 50px;
  border-radius: 25px;
  border: 1px solid rgb(183, 183, 183);
  background: none;
  font-size: 18px;
  font-family: "NotoSansMedium";
  cursor: pointer;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 47px;
  border: none;
  display: block;
  background: none;
  border-bottom: 1px solid rgb(183, 183, 183);
  padding-left: 10px;
  font-size: 16px;
`;

export const SearchOutline = styled(SearchOutlined)`
  position: absolute;
  top: 19px;
  right: 6px;
`;

export const ListWrapper = styled.main`
  width: 1300px;
  margin: 77px auto;
`;
export const ProductWriteBtn = styled.button`
  width: 194px;
  height: 51px;
  color: #ffffff;
  font-size: 18px;
  background-color: rgb(48, 100, 10);
  border: none;
`;

export const ListHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 21px;
`;

export const ListCount = styled.div`
  font-size: 14px;
  color: rgb(131, 131, 131);

  & > span {
    font-size: 14px;
    color: rgb(34, 34, 34);
  }
`;

export const SelectBox = styled(Select)`
  width: 105px;
  height: 39px;
`;

export const ListContentsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const ProductItemBox = styled.div`
  width: 25%;
`;

export const ListImg = styled.img`
  width: 95.5%;
  height: 310px;
`;

export const ListProductInfo = styled.div`
  padding: 17px 0 70px;
  font-size: 18px;
  color: rgb(34, 34, 34);
`;

export const ListProductName = styled.div`
  padding-bottom: 10px;
`;

export const ListProductPrice = styled.div`
  padding-bottom: 16px;
  font-family: "NotoSansBold";
`;

export const ListProductBtnBar = styled.div`
  color: rgb(112, 112, 112);
  & > span {
    padding-right: 14px;
  }
`;

export const ListChatBtn = styled(ChatBubbleOutlineIcon)`
  width: 16px;
  height: 15px;
  cursor: pointer;
`;

export const ListWishBtn = styled(FavoriteBorderIcon)`
  width: 17px;
  height: 15px;
  cursor: pointer;
`;

export const ListBasketBtn = styled(AddShoppingCartIcon)`
  width: 19px;
  height: 18px;
  cursor: pointer;
`;

export const ListPagenation = styled.div`
  text-align: center;
  gap: 28px;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.span`
  margin: 0px 10px;
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
// List가장 오른쪽 공간 수정.
