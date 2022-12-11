import styled from "styled-components";

export const CommentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;
`;
export const Container = styled.div`
  width: calc(100vw - 20rem);
`;
export const CommentNumber = styled.p`
  color: #b8b2a4;
  font-style: "Playfair Display, sans-serif";
  padding: 4rem 0 2rem 0;
`;
export const CommentContainer = styled.div`
  display: inline-flex;
  padding-top: 1rem;
`;
export const Img = styled.img`
  width: 5rem;
  height: 5rem;
  display: ${(props) => (props.src ? "block" : "none")};
  clip-path: circle(50%);
`;
export const Content = styled.div`
  position: relative;
  padding-left: 2.5rem;
  font-style: "Playfair Display";
`;
export const Name = styled.p`
  padding-bottom: 0.5rem;
  font-family: "Playfair Display";
  font-weight: 500;
  color: #625f5d;
`;
export const Desciption = styled.p`
  padding-bottom: 1rem;
  font-weight: 500;
  font-family: "Playfair Display";
  color: #625f5d;
  font-size: 0.85rem;
`;
export const Reply = styled.p`
  color: #b8b2a4;
  bottom: 0;
`;
