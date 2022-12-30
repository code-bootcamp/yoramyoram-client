import styled from "@emotion/styled";

export const Form = styled.form``;

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(252 251 250);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainBox = styled.div`
  width: 680px;
  margin: 0 auto;
`;

export const SearchBar = styled.div`
  display: flex;

  /* flex-direction: row; */
  /* text-align: center; */
  justify-content: center;
  /* margin-left: 213px; */
  margin-bottom: 30px;
`;

export const SearchId = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: rgb(196 196 196);
  margin-top: 6px;
`;

export const SearchLine = styled.p`
  font-size: 35px;
  color: rgb(196 196 196);
  margin-left: 23px;
  margin-right: 23px;
`;

export const SearchPassword = styled.p`
  font-size: 25px;
  margin-top: 6px;
  font-weight: 600;
  color: rgb(48 100 21);
`;

export const ContentWrapper = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 41px 0;
  width: 100%;
  margin: 0 auto;
`;

export const JoinButton = styled.button`
  min-width: 580px;
  color: white;
  background-color: rgb(48 100 10);
  border: none;
  padding: 20px 0;
  font-size: 18px;
  display: block;
  margin: 0 auto;
  margin-top: 33px;
`;

export const Comment1 = styled.p`
  font-size: 18px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding: 37px 0px;
  font-size: 1.1rem;
  & > li > p {
    padding: 8px 22px;
  }
`;

export const Info2 = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 23px 51px;
  font-size: 20px;
  align-items: inherit;
`;

export const PasswordInput = styled.input`
  width: 420px;
  height: 63px;
  border: 1px solid rgb(183 183 183);
  border-radius: 4px;
  background-color: transparent;
`;

export const PasswordInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PasswordWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 23px 51px;
  font-size: 20px;
  align-items: inherit;
`;

export const PasswordInput2 = styled.input`
  width: 420px;
  height: 63px;
  border: 1px solid rgb(183 183 183);
  border-radius: 4px;
  background-color: transparent;
`;

export const PasswordInputWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
