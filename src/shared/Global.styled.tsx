import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Playfair Display', serif;
    scroll-behavior: smooth;
    text-decoration: none;
  }
  html {
    width: 100vw;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
