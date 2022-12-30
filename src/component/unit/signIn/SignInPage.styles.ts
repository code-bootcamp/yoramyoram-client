import styled from "@emotion/styled";

export const Background = styled.div`
  background-color: rgb(252 251 250);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SignBoxWrapper = styled.div`
  width: 920px;
  height: 460px;
  display: flex;
  margin: 0 auto;
`;

export const SignBox = styled.div`
  border: 1px solid rgb(112 112 112);
  width: 50%;
  height: 460px;
  background-color: rgb(48 100 10);
`;

export const SignWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 78px;
`;

export const SignTitle = styled.h1`
  font-size: 30px;
  color: rgb(252 251 250);
`;

export const InputWrapper = styled.div`
  padding-top: 25px;
`;

export const IdInput = styled.input`
  width: 337px;
  height: 40px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px white solid;
  background-color: transparent;
  ::placeholder {
    color: white;
  }
`;

export const PaInput = styled.input`
  width: 337px;
  height: 30px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px white solid;
  background-color: transparent;
  margin-top: 17px;
  ::placeholder {
    color: white;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  padding-right: 52px;
  padding-top: 25px;
`;

export const SearchButton = styled.button`
  border: none;
  background: transparent;
  color: rgb(255 255 255);
`;

export const ButtonWrapper = styled.div`
  padding-top: 53px;
`;

export const LoginButton = styled.button`
  width: 337px;
  height: 58px;
  font-size: 16px;
  background-color: white;
  border: none;
  color: rgb(48 100 10);
`;

export const JoinBox = styled.div`
  border: 1px solid rgb(112 112 112);
  width: 50%;
  padding-top: 60px;
  /* height: 460px; */
  background-color: rgb(255 255 255);
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  text-align: center;
  align-items: center;
`;

export const JoinTitle = styled.h1`
  font-size: 30px;
  padding: 20px 0;
`;

export const JoinContent = styled.p`
  text-align: center;
  padding: 60px 0 84px;
  line-height: 26px;
`;

export const JoinButton = styled.button`
  width: 337px;
  height: 58px;
  color: rgb(252 251 250);
  border: none;
  background-color: rgb(48 100 10);
  font-size: 16px;
`;
