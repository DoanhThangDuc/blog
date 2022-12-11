import styled from "styled-components";

export const HomeStyled = styled.div`
  display: flex;
  justify-content: center;
`;
export const PostContainer = styled.div`
  display: inline-flex;
  width: calc(100vw - 18.8rem);
  justify-content: space-between;
  flex-wrap: wrap;
  & div {
    margin-bottom: 10rem;
  }
`;
