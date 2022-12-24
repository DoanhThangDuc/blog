import styled from "styled-components";
import { TfiGoogle } from "react-icons/tfi";
import { CgTwitter } from "react-icons/cg";

export const PostDetailStyled = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Container = styled.div`
  width: calc(100vw - 8.75rem);
  display: flex;
  flex-direction: column;
`;
export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Img = styled.img`
  width: 80%;
  display: ${(props) => (props.src ? "block" : "none")};
`;
export const BodyContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-top: 6.5rem;
`;
export const Details = styled.div`
  width: calc(100vw - 14rem);
  display: flex;
  justify-content: flex-end;
`;
export const PostBody = styled.div`
  flex-grow: 1;
  padding-right: 2rem;
`;
export const PersionalDetails = styled.div`
  & div {
    width: 18rem;
  }
`;

export const Subject = styled.p`
  font-size: 0.9rem;
  color: #b4ab95;
`;
export const Title = styled.h1`
  color: #626262;
  padding-top: 1.5rem;
  font-weight: 300;
`;
export const Content = styled.div`
  padding-top: 2rem;
  line-height: 1.5rem;
  font-size: 0.95rem;
  color: #4b4942;
`;
export const ImgDetails = styled.div`
  width: 100%;
`;
export const ImgDetail = styled.img`
  padding-top: 3rem;
  width: 100%;
  display: ${(props) => (props.src ? "block" : "none")};
`;
export const Quote = styled.div`
  padding: 3rem 1rem 0;
  font-size: 1rem;
  font-style: italic;
  line-height: 1.5rem;
  color: #4b4942;
`;
export const Share = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const SocialContainer = styled.div`
  width: 13rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 0 8rem 0;
  & p {
    font-size: 0.9rem;
    color: #bab4b4;
  }
`;
export const GoogleIcon = styled(TfiGoogle)`
  color: #bab4b4;
  cursor: pointer;
`;
export const Ticon = styled(CgTwitter)`
  color: #bab4b4;
  cursor: pointer;
`;
export const References = styled.div`
  width: 100%;
  background-color: #f6f5f5;
`;
export const RefContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const RefTitle = styled.p`
  width: calc(100vw - 21rem);
  padding: 4rem 0 2rem 0;
  color: #b8b2a4;
`;
export const RefPosts = styled.div`
  width: calc(100vw - 21rem);
  display: flex;
  justify-content: space-between;
`;
export const RefPost = styled.div`
  & div {
    width: 18rem;
    height: 19rem;
  }
  & h2 {
    font-size: 1.3rem;
    font-weight: 500;
    padding-top: 1rem;
    color: #7e7a6c;
  }
  & p {
    display: none;
  }
`;
export const RefTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const Comments = styled.div``;
export const ReturnBtn = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 2rem;
  cursor: pointer;
  & div {
    margin-left: 3rem;
    padding: 1rem;
    font-size: 1.5rem;
    background-color: #bfbbae;
    color: #f3f3f1;
    border-radius: 1rem;
  }
`;
export const Return = styled.div``;
