import styled from "@emotion/styled";

export const Background = styled.div`
  background-image: url("./ecob.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  background-color: rgb(252 251 250);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BigWrapper = styled.div`
  padding: 150px 0 100px 0;
  max-width: 1300px;
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  text-align: center;
  color: rgb(48 100 10);
  & > h1 {
    font-family: "NewYork";
    font-size: 60px;
  }
  & > h5 {
    font-family: "Noto Sans KR";
    font-size: 18px;
    font-weight: 400;
    margin-top: 15px;
  }
`;

export const MapWrapper = styled.div`
  display: flex;
  /* border: 1px solid red; */
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  gap: 40px;
`;

export const SearchPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;
export const SerachMap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
  & > select {
    width: 20%;
    height: 65px;
    border: 1px solid rgb(48 100 10);
    border-radius: 4px;
    margin-right: 18px;
    padding: 12px;
  }

  & > input {
    width: 80%;
    height: 65px;
    border: 1px solid rgb(48 100 10);
    border-radius: 4px;
    font-size: 18px;
    padding: 12px;
  }
`;

export const ShopList = styled.div`
  border: 1px solid rgb(48 100 10);
  background-color: rgb(252 251 250);
  width: 100%;
  height: 523px;
  border-radius: 4px;
  margin-top: 23px;
  overflow-y: scroll;

  & > div {
    border-bottom: 1px solid rgb(112 112 112);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
  }

  & > div > h5 {
    font-size: 22px;
  }
`;

export const ShopListWrapper = styled.div`
  /* overflow-y: scroll; */
  width: 100%;
`;

export const MapImg = styled.img`
  width: 100%;
  height: 100%;
  /* height: 755px; */
  border-radius: 4px;
  border: 1px solid rgb(48 100 10);
`;
