import styled from "styled-components";

export const PostStyled = styled.div`
  width: 26.25rem;
  height: 29.7rem;
  margin-bottom: 20px;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
`;
export const PostContainer = styled.div`
  width: 100%;
`;
export const PostImg = styled.img<{ src: string }>`
  display: ${(props) => (props.src ? "block" : "none")};
  width: 100%;
  height:50%
`;
export const PostSubject = styled.p`
  color: #b8b2a4;
  padding-top: 1.7em;
`;
export const PostTitle = styled.h2`
  color: #626262;
  font-weight: 300;
  font-size: 1.875em;
  padding: 0.7rem 0 1.7rem 0;
`;
export const PostContent = styled.div`
  font-weight: 500;
  line-height: 1.4em;
  & p {
    font-size: 0.875em;
    color: #7a7878;
  }
`;
