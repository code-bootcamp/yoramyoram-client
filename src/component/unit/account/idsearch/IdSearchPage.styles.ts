import styled from "@emotion/styled";

export const Background = styled.div`
  padding: 13.5% 0 10.2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Box = styled.div`
  /* max-width: 680px; */
  width: 36%;

  margin: 0 auto;
`;

export const SearchTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1.6rem;
`;

export const SearchId = styled.p`
  font-weight: 700;
  color: #30640a;
`;

export const SearchLine = styled.p`
  color: #c4c4c4;
  margin: 0 4.3%;
`;

export const SearchPa = styled.p`
  color: #c4c4c4;
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
  justify-content: space-between;
  align-items: center;
  color: #222222;
  padding: 3% 0 8%;
  & > span {
    padding: 0 1.5%;
  }
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

export const PhoneSearch = styled.p`
  font-size: 1rem;
  color: #222222;
  font-weight: 600;
`;

export const PhoneOk = styled.button`
  margin-top: 4.8%;
  width: 100%;
  padding: 3.7%;
  background-color: #30640a;
  color: #ffffff;
  font-size: 1.2rem;
  border: none;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
`;

export const NoticeText = styled.li`
  width: 92%;
  padding-bottom: 3%;

  & > p {
    padding: 1% 4.4%;
  }
`;
