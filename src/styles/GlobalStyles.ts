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
    --primary: #f0f0f0;
    --nubank: #81259D;
    --gray: #404040;
    --light-gray: #E0E0E0;
    --light-gray-text: #a0a0a0;
    --white: #fff;
    --active-white: rgba(255,255,255,.08);
    --hover-white: rgba(235,235,235,.04);
    --light-blue: #66CFFF;
    --light-purple: rgba(129,37,157,.5);
    --free: #A5CC25;
    --current: #00BCC9;
    --future: #FFCF5A;
    --free-card: #7ED321;
    --current-card: #40AAB9;
    --future-card: #F5A623;
  }
`