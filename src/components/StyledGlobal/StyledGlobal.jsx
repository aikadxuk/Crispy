import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --red: #dc3545;
  --second-color: #f8959f;
  --yellow: #f3af24;
  --second-yellow: #FCD965;
  --blue: #62D3E3;
  --dark-gray: #212226;
  --white: #ffffff;
  --black:#000000;
}

body{
  font-family: "Sarabun", sans-serif;
}
`;