import styled from "@emotion/styled";

export const Page = styled.button`
  color: #707070;
  background-color: #30640a24;
  font-family: "Poppins", sans-serif;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  &:disabled {
    color: #707070;
    background-color: transparent;
  }
  &:hover {
    background-color: #30640a24;
  }
`;
interface IIsActive {
  isActive: boolean;
}

export const PageNum = styled.button<IIsActive>`
  color: #707070;
  background-color: ${(props) =>
    props.isActive ? "#30640a24" : "transparent"};
  font-family: "Poppins", sans-serif;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  &:hover {
    background-color: #30640a24;
  }
`;

export const PaginationBox = styled.div`
  text-align: center;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;
