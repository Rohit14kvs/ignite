import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html {
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgray;
    }
}
body {
     font-family: 'Montserrat', sans-serif;
     width: 100%;
}
h2 {
    font-family: 'Montserrat Subrayada', sans-serif;
    font-size: 3rem;
    color: #333;
}
h3 {
    font-size: 1.2rem;
    color: #333;
    padding: 1rem  1.5rem;
}
p {
    font-size: 1rem;
    line-height: 2rem;
    color: #696969;
}
a {
    text-decoration: none;
    color: #333;
}
`;

export default GlobalStyles;
