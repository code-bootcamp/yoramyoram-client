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
  flex-direction: row;
  justify-content: center;
  text-align: center;

  padding: 66px 0;
  width: 100%;
  margin: 0 auto;
`;

// export const JoinButtonWrapper = styled.div`
//   width: 320px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

// `;

export const JoinButton = styled.button`
  min-width: 312px;
  color: white;
  background-color: rgb(48 100 10);
  border: none;
  padding: 20px 0;
  font-size: 20px;
  display: block;
  margin: 0 auto;
  margin-top: 33px;
`;
