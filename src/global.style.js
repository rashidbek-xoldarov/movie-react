import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* GENERAL */
* {
  box-sizing: border-box;
}

html {
  height: 100%;
  box-sizing: border-box;
}

img {
  display: block;
  height: auto;
}

body {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;;
  font-size: v16px;
  font-weight: 400;
  line-height: 20px;
  color: #fff;
  background-color:#100E19 ;
}

/* VISUALLY-HIDDEN */

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

/* STICKY-FOOTER */

.site-main {
  flex-grow: 1;
}
`;
