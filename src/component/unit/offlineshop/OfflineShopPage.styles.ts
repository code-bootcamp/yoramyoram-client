import styled from "@emotion/styled";

export const Background = styled.div`
  background-image: url("./ecob.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BigWrapper = styled.div`
  padding: 8.5% 0 5.5%;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  text-align: center;
  color: #30640a;
  & > h1 {
    font-family: "NewYork";
    font-size: 3.8rem;
  }
  & > h5 {
    font-family: "Noto Sans KR";
    font-size: 1.2rem;
    font-weight: 400;
    padding: 1% 0 7.7%;
  }
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`;

export const SearchPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;
export const SearchMap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 3.5%;
  & > select {
    width: 20%;
    border: 1px solid #30640a;
    border-radius: 4px;
    margin-right: 4%;
    padding: 4.5% 2%;
  }

  & > input {
    width: 80%;
    border: 1px solid #30640a;
    border-radius: 4px;
    font-size: 1.2rem;
    padding: 3%;
  }
`;

export const ShopList = styled.div`
  border: 1px solid #30640a;
  background-color: #ffffff;
  padding: 0 0 10%;
  border-radius: 4px;
  margin-top: 5%;
  overflow-y: scroll;

  & > div {
    border-bottom: 1px solid #707070;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5%;
  }

  & > div > h5 {
    font-size: 1.4rem;
  }
`;

export const ShopListWrapper = styled.div``;

export const MapImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1%;
  border: 1px solid #30640a;
`;
