import styled from "@emotion/styled";
import { RightOutlined } from "@ant-design/icons";
export const Top = styled.div`
  background-image: url(/about/detailbg.png);
  padding: 10% 0 16% 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const Title = styled.h1`
  font-family: "NewYork";
  font-size: 80px;
  color: #30640a;
  margin-bottom: 20px;
`;
export const Inner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;
export const Subtitle = styled.h5`
  color: #30640a;
`;
export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;
export const Left = styled.div`
  width: 50%;
`;
export const Img = styled.img`
  width: 65%;
`;
export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Text = styled.p`
  font-size: 20px;
  color: #222;
  line-height: 1.5;
  margin-top: -100px;
  word-break: keep-all;
  & > span {
    color: #30640a;
  }
`;
export const RImgBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const RImg = styled.img`
  width: 30%;
  margin-top: -500px;
`;

export const Bottom = styled.div`
  display: block;
  padding-bottom: 11%;
  background-color: #fcfbfa;
`;

export const StSubtitle = styled.h5`
  color: #30640a;
  margin-bottom: 80px;
  position: relative;
  padding-left: 40px;
  &:before {
    content: "";
    width: 30px;
    height: 1px;
    background-color: #30640a;
    position: absolute;
    left: 0;
    top: 35%;
  }
`;
export const StText = styled.p`
  color: #30640a;
  line-height: 1.5;
  margin-bottom: 80px;
`;
export const Categ = styled.div``;
export const CtTitle = styled.h3`
  font-family: "NewYork";
  font-size: 35px;
  color: #222222;
  margin-bottom: 30px;
  & > span {
    color: #30640a;
  }
`;
export const CardWrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export const Card1 = styled.div`
  background: url(/about/hov1.png) no-repeat center;
  width: 20%;
  padding-bottom: 23%;
  transition: all 0.3s;

  position: relative;
  cursor: pointer;
  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ffffffa1;
    opacity: 0;
    content: "";
    transition: all 0.3s;
  }
  &:hover div {
    opacity: 1;
  }
  &:hover:before {
    opacity: 1;
  }
`;
export const Card2 = styled.div`
  background: url(/about/hov2.png) no-repeat center;
  width: 20%;
  padding-bottom: 23%;
  position: relative;
  transition: all 0.3s;
  cursor: pointer;
  transform: translateY(30px);
  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ffffffa1;
    opacity: 0;
    content: "";
    transition: all 0.3s;
  }
  &:hover div {
    opacity: 1;
  }
  &:hover:before {
    opacity: 1;
  }
`;
export const Card3 = styled.div`
  background: url(/about/hov3.png) no-repeat center;
  width: 20%;
  padding-bottom: 23%;
  transition: all 0.3s;
  position: relative;
  cursor: pointer;
  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ffffffa1;
    opacity: 0;
    content: "";
    transition: all 0.3s;
  }
  &:hover div {
    opacity: 1;
  }
  &:hover:before {
    opacity: 1;
  }
`;
export const Card4 = styled.div`
  background: url(/about/hov4.png) no-repeat center;
  width: 20%;
  padding-bottom: 23%;
  transition: all 0.3s;
  position: relative;
  cursor: pointer;
  transform: translateY(30px);
  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ffffffa1;
    opacity: 0;
    content: "";
    transition: all 0.3s;
  }
  &:hover div {
    opacity: 1;
  }
  &:hover:before {
    opacity: 1;
  }
`;
export const Card5 = styled.div`
  background: url(/about/hov5.png) no-repeat center;
  width: 20%;
  padding-bottom: 23%;
  transition: all 0.3s;
  position: relative;
  cursor: pointer;
  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ffffffa1;
    opacity: 0;
    content: "";
    transition: all 0.3s;
  }
  &:hover div {
    opacity: 1;
  }
  &:hover:before {
    opacity: 1;
  }
`;
export const CardInner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 1;
`;
export const Name = styled.p`
  font-size: 20px;
  color: #306415;
  margin-bottom: 10px;
  font-weight: bold;
`;
export const Button = styled.button`
  font-size: 15px;
  border: 1px solid #306415;
  background-color: transparent;
  color: #306415;
  padding: 5px 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #fcfbfa;
    background-color: #306415;
  }
`;
export const RightArrow = styled(RightOutlined)``;
