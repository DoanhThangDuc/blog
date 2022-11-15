import styled from "styled-components";

export const FirstPostStyled = styled.div``;
export const FirstPostImg = styled.div`
  width: 100vw;
  display: inline-flex;
  justify-content: center;
  & img {
    width: calc(100vw - 8.75rem);
  }
`;
export const FirstPostContent = styled.div`
  width: calc(100vw - 18.75rem);
  margin: 0 auto;
  padding-top: 6.25rem;
`;
export const Subject = styled.p`
  color: #b8b2a4;
`;
export const Title = styled.h1`
  color: #626262;
  padding-top: 1.875rem;
  font-weight: 300;
`;
export const Content = styled.p`
  color: #6c6c6c;
  padding-top: 2.125rem;
  line-height: 1.7;
  font-size: 1rem;
`;
export const Comment = styled.p`
  color: #b8b2a4;
  padding: 3.125rem 0 10rem 0;
`;
