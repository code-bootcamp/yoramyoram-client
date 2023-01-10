import styled from "@emotion/styled";
import * as mq from "../../../commons/styles/mediaQueries";

export const Background = styled.div`
  background-image: url("/ecob.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mq.laptop} {
    padding: 0 50px;
  }
  ${mq.tablet} {
    padding: 0 50px;
  }
  ${mq.mobileL} {
    padding: 0 18px;
    ::before {
      width: 100%;
      height: 100%;
      background-color: #ffffff80;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      z-index: 0;
    }
  }
  ${mq.mobile} {
    padding: 0 18px;
    ::before {
      width: 100%;
      height: 100%;
      background-color: #ffffff80;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      z-index: 0;
    }
  }
  ${mq.tablet} {
    padding: 0 18px;
    ::before {
      width: 100%;
      height: 100%;
      background-color: #ffffff80;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      z-index: 0;
    }
  }
`;

export const BigWrapper = styled.div`
  padding: 150px 10px;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`;

export const ButtonBar = styled.button<{ isVisible: boolean }>`
  font-size: 15px;
  height: ${(props) => (props.isVisible ? "31px" : "91px")};
  background-color: #30640a;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  width: 27px;
  position: absolute;
  left: ${(props) => (props.isVisible ? "27.4%" : "0%")};
  top: 15.5%;
  z-index: 2;
  transition: all 0.5s;
  ${mq.laptop} {
    left: ${(props) => (props.isVisible ? "337px" : "0%")};
  }

  ${mq.tablet} {
    left: ${(props) => (props.isVisible ? "337px" : "0%")};
    top: 14.5%;
  }
  ${mq.mobileL} {
    left: ${(props) => (props.isVisible ? "91%" : "0%")};
    top: 14.5%;
  }

  ${mq.mobile} {
    left: ${(props) => (props.isVisible ? "91%" : "0%")};
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
  ${mq.mobile} {
    text-align: center;
    z-index: 2;
    color: #30640a;
    position: relative;
  }
  ${mq.mobileL} {
    text-align: center;
    z-index: 2;
    color: #30640a;
    position: relative;
  }

  ${mq.tablet} {
    text-align: center;
    z-index: 2;
    color: #30640a;
    position: relative;
  }
  color: #30640a;
  & > h1 {
    font-family: "NewYork";
    font-size: 55px;
    ${mq.mobileL} {
      font-size: 40px;
    }
    ${mq.mobile} {
      font-size: 40px;
    }
  }
  & > h5 {
    font-family: "Noto Sans KR";
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 50px;
    margin-top: 22px;
    ${mq.mobile} {
      font-size: 15px;
    }
    ${mq.mobileL} {
      font-size: 15px;
    }
  }
  & > button {
  }
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
`;

export const SearchPart = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  width: 26%;
  position: absolute;
  z-index: 2;
  margin-left: 20px;
  padding: 20px 0px;
  ${mq.laptop} {
    width: 320px;
  }
  ${mq.tablet} {
    width: 320px;
  }
  ${mq.mobileL} {
    width: 86%;
  }

  ${mq.mobile} {
    width: 86%;
  }
`;
export const SearchMap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  gap: 2px;
  & > select {
    width: 25%;
    border: 1px solid #30640a;
    border-radius: 4px;
    margin-right: 12px;
    padding: 10px;
    ${mq.laptop} {
      padding: 2px;
      width: 30%;
    }
    ${mq.tablet} {
      width: 30%;
      padding: 2px;
    }
    ${mq.mobile} {
      width: 35%;
    }
  }

  & > input {
    width: 100%;
    border: 1px solid #30640a;
    border-radius: 4px;
    font-size: 15px;
    padding: 15px;
    ${mq.tablet} {
      width: 100%;
      padding: 11px;
    }
    ${mq.mobileL} {
      width: 100%;
      padding: 11px;
    }
  }
`;

export const ShopList = styled.div`
  border: 1px solid #30640a;
  background-color: #ffffff;
  /* padding: 0 0 10%; */
  border-radius: 4px;
  margin-top: 20px;
  height: 480px;
  /* margin-top: 5%; */
  overflow-y: scroll;

  & > div {
    border-bottom: 1px solid #707070;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
  }

  & > div > h5 {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const ShopListWrapper = styled.div``;

export const MapImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1%;
  border: 1px solid #30640a;
`;

export const MapWrapper2 = styled.div`
  width: 100%;
  height: 600px;

  /* width: 100%;
  display: block;
  position: absolute;
  height: 600px;
  margin-left: 10px; */
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;
`;

export const SearchButton = styled.button`
  background-color: #30640a;
  width: 65px;
  border-radius: 4px;
  color: #f2f2f2;
  font-size: 15px;
  font-weight: 500;
`;

export const ListBox = styled.div`
  font-family: "Noto Sans KR";
`;
export const List = styled.div`
  line-height: 1.5;
`;
export const ListName = styled.p`
  font-weight: 500;
  margin-bottom: 3px;
  cursor: pointer;
  color: #30640a;
`;
export const ListAddress = styled.p`
  font-weight: 400;
  font-size: 15px;
`;
export const ListPhone = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin-top: 5px;
`;
