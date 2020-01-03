import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

  body {
    background-color: rgb(46, 47, 49);
    font-family: 'Inconsolata', monospace;
  }
`;
