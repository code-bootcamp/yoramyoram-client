import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Divider, Select } from "antd";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const HeaderWrapper = styled.div`
  padding-top: 80px;
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
  border-bottom: 1px solid #b7b7b7;
`;

export const CategoryBox = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1% 0;
  gap: 1%;
`;

export const CategoryBtn = styled.button`
  width: 16%;
  display: block;
  padding: 0.9% 0;
  border-radius: 25px;
  border: 1px solid #b7b7b7;
  background: none;
  font-size: 1.1rem;
  font-family: "NotoSansMedium";
  cursor: pointer;
`;

export const CategoryStickyBtn = styled.button`
  width: 100%;
  border-bottom: 1px solid #b7b7b7;
  background-color: red;
  z-index: 5px;
  position: fixed;
  top: 200px;
  left: 0;
`;

export const CategoryBtnActive = styled.button`
  width: 16%;
  display: block;
  color: #ffffff;
  padding: 0.9% 0;
  border-radius: 25px;
  border: none;
  background: #30640a;
  font-size: 1.1rem;
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
  border: none;
  display: block;
  background: none;
  border-bottom: 1px solid #b7b7b7;
  padding: 5.1% 5%;
  font-size: 1rem;
`;

export const SearchOutline = styled(SearchOutlined)`
  position: absolute;
  top: 19px;
  right: 6px;
`;

export const ListWrapper = styled.main`
  width: 68.25%;
  margin: 4.1% auto;
`;
export const ProductWriteBtn = styled.button`
  width: 15%;
  padding: 1% 0;
  color: #ffffff;
  font-size: 1.1rem;
  background-color: #30640a;
  border: none;
  cursor: pointer;
`;

export const ListHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* padding-top: 21px; */
  padding-top: 1%;
`;

export const ListCount = styled.div`
  font-size: 0.9rem;
  color: #838383;

  & > span {
    font-size: 0.9rem;
    color: #222222;
  }
`;

export const SelectBox = styled(Select)`
  width: 8.1%;
  margin-bottom: 0.5%;
`;

export const ListContentsBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  cursor: pointer;
`;

export const ProductItemBox = styled.article`
  width: 23.8%;
`;

export const ListImg = styled.img`
  width: 100%;
`;

export const ListProductInfo = styled.div`
  padding: 7% 0 21%;
  font-size: 1.1rem;
  color: #222222;
`;

export const ListProductName = styled.div``;

export const ListProductPrice = styled.div`
  padding: 3.3% 0 5.2%;
  font-family: "NotoSansBold";
`;

export const ListProductBtnBar = styled.div`
  color: #707070;
  display: flex;
  align-items: center;
  & > span {
    padding-right: 5%;
    display: flex;
    align-items: center;
  }
`;

export const BtnBarText = styled.span`
  padding-left: 5%;
`;

export const ListChatBtn = styled(ChatBubbleOutlineIcon)`
  font-size: 1rem;
  cursor: pointer;
`;

export const ListWishBtn = styled(FavoriteBorderIcon)`
  font-size: 1rem;
  cursor: pointer;
`;

export const ListBasketBtn = styled(AddShoppingCartIcon)`
  font-size: 1.2rem;
  cursor: pointer;
`;

export const ListPagenation = styled.div`
  text-align: center;
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
