import styled from "styled-components";

export const PostStyled = styled.div`
  width: 26.25rem;
  height: 29.7rem;
  margin-bottom: 20px;
  box-sizing: border-box;
  overflow: hidden;
`;
export const PostContainer = styled.div``;

export const PostImg = styled.img<{ src: string }>`
  display: ${(props) => (props.src ? "block" : "none")};
`;
export const PostSubject = styled.p`
  color: #b8b2a4;
  padding: 1.7rem 0 0.7rem;
`;
export const PostTitle = styled.h2`
  color: #626262;
  font-weight: 300;
  font-size: 30px;
`;
export const PostContent = styled.div`
  padding-top: 2rem;
  font-weight: 500;
  line-height: 1.4rem;
  & p {
    font-size: 14px;
    color: #7a7878;
  }
`;
