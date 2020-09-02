import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--gray);
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", sans-serif;
  }

  html {
    background: var(--primary);
  }

  :root {
    --primary: rgba(252,252,252,.97);
    --gray: #404040;
    --nubank: #81259D;
  }
`