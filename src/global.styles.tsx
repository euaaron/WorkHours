import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  font-family: Inter, Helvetica, Arial, sans-serif;  
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color-scheme: dark;
  --foreground: rgba(235, 241, 247, 0.87);
  --background: #21242c;
  --background-darker: #1d2028;
  --background-darkest: #0e0f14;
  --primary: #44bbf1;
  
  @media screen and (prefers-color-scheme: light) {
    --foreground: #282a36;
    --background: #fafafa;
    --background-darker: #e4e4ef;
    --background-darkest: #bfbfd6;
    --primary: #44bbf1;
    --primary-darker: #3ca5e2;
  }

  color: var(--foreground);
  background-color: var(--background);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

a {
  font-weight: 500;
  text-decoration: inherit;
  color: var(--primary-darker);
  &:hover {
    color: var(--primary);    
  }
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: var(--primary);
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: var(--primary);
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
`;

export default GlobalStyles;
