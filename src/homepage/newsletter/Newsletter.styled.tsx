import styled from "styled-components";
import { CiPaperplane } from "react-icons/ci";
export const NewsletterStyled = styled.div`
  height: 18rem;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  width: 25rem;
  height: 100%;
`;
export const Content = styled.p`
  font-size: 2.2rem;
  padding-bottom: 5rem;
  color: #333333;
`;
export const InputContainer = styled.div`
  position: relative;
  width: 25rem;
  display: flex;
  flex-direction: row;
`;
export const InputEmail = styled.input`
  width: 100%;
  height: 1.8rem;
  background-color: inherit;
  border: hidden;
  border-bottom: 1.5px solid black;
`;
export const Lable = styled.label`
  position: absolute;
  color: #757575;
  padding-left: 0.3rem;
`;
export const SendIcon = styled(CiPaperplane)`
  position: absolute;
  color: #757575;
  right: 0;
`;
