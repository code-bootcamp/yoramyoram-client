import styled from "@emotion/styled";

export const Background = styled.div`
  width: 100%;
`;

export const Box = styled.div`
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
`;

export const SearchTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 33px;
  margin-right: 121px;
`;

export const SearchId = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: rgb(196 196 196);
`;

export const SearchLine = styled.p`
  color: rgb(196 196 196);
  font-size: 25px;
  margin-left: 29.5px;
  margin-right: 29.5px;
`;

export const SearchPa = styled.p`
  color: rgb(48 100 10);
  font-weight: 700;
  font-size: 25px;
`;

export const MainCon = styled.div`
  padding: 8.5%;
  max-width: 680px;
  width: 100%;
  border: 1px solid #707070;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 5% 0 4.5%;
  font-size: 1.4rem;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #222222;
`;

export const NameIn = styled.input`
  width: 75%;
  padding: 3.8% 0;
  border: 1px solid #b7b7b7;
  background-color: none;
  background: transparent;
  border-radius: 4px;
`;

export const Phone = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-align: center;
  color: #222222;
  padding: 3% 0 0;
  & > span {
    padding: 0 1.5%;
  }
`;

export const PhoneInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PhoneTitle = styled.div`
  width: 17.4%;
  font-size: 1.25rem;
`;

export const PhoneNumber = styled.div`
  width: 75%;

  & > span {
    padding: 0 2.87%;
  }
`;

export const PhoneSelect = styled.select`
  width: 22.8%;
  padding: 4.75% 0;
  border-radius: 4px;
  background: none;
  border: 1px solid #b7b7b7;
`;

export const PhoneNumber2 = styled.input`
  width: 31%;
  padding: 4.75% 0;
  border-radius: 4px;
  border: 1px solid #b7b7b7;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  color: rgb(34 34 34);
  margin-top: 18px;
`;

export const EmailIn = styled.input`
  width: 420px;
  height: 63px;
  border: 1px solid rgb(183 183 183);
  background-color: none;
  background: transparent;
  border-radius: 4px;
`;

export const PhoneSearch = styled.p`
  font-size: 16px;
  color: rgb(34 34 34);
  margin-top: 43px;
  font-weight: 600;
`;

export const PhoneOk = styled.button`
  margin-top: 27px;
  width: 580.7px;
  height: 67px;
  background-color: rgb(48 100 10);
  color: rgb(252 251 250);
  font-size: 18px;
  border: none;
`;

export const Content = styled.div`
  margin-top: 34px;
`;

export const LiCon = styled.li`
  font-size: 18px;
  color: rgb(34 34 34);
  margin-top: 18px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  padding: 37px 0px;
`;

export const InfoComment1 = styled.p`
  margin-left: 22px;
  margin-top: 8px;
`;

export const Info2 = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
`;
