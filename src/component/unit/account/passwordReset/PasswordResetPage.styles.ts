import styled from "@emotion/styled";

export const Form = styled.form``;

export const Background = styled.div`
  padding: 10% 0;
`;

export const MainBox = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  color: #c4c4c4;
`;

export const SearchId = styled.p`
  font-weight: 600;
`;

export const SearchLine = styled.p`
  padding: 0 7%;
`;

export const SearchPassword = styled.p`
  font-weight: 600;
  color: #30640a;
`;

export const ContentWrapper = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 7% 8.5% 8%;
  margin: 4.5% auto 5.5%;
`;

export const JoinButton = styled.button`
  max-width: 580px;
  width: 100%;
  color: #ffffff;
  background-color: #30640a;
  border: none;
  padding: 3.7% 0;
  font-size: 1.2rem;
  margin-top: 6%;
  cursor: pointer;
`;

export const Comment1 = styled.p`
  font-size: 1.2rem;
  padding-bottom: 6%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  & > li > p {
    padding: 1% 3.7%;
  }
`;

export const Info2 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PasswordWrapper = styled.div`
  max-width: 580px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  align-items: inherit;
  padding-bottom: 4%;
`;

export const PasswordInput = styled.input`
  width: 75%;
  padding: 2.3%;
  border: 1px solid #b7b7b7;
  border-radius: 4px;
  font-size: 1.5rem;
`;

export const PasswordInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PasswordInputWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
