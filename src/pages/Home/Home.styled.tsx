import styled from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";

export const HomeStyled = styled.div`
  display: flex;
  justify-content: center;
`;
export const Status = styled.div`
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -20px;
`;
export const PostContainer = styled.div`
  display: inline-flex;
  width: calc(100vw - 18.8rem);
  justify-content: space-between;
  flex-wrap: wrap;
  cursor: pointer;
  & div {
    margin-bottom: 10rem;
  }
`;
export const TopBtn = styled(FaArrowCircleUp)`
  position: fixed;
  bottom: 30px;
  right: 40px;
  color: #636269;
  cursor: pointer;

  & :hover {
    opacity: 0.7;
  }
`;
