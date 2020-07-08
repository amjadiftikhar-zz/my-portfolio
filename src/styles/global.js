import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  @import url('<https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap>');

  * {
    margin: 0;
    padding: 0;
    outline: 0; 
    border: 0;
    box-sizing: border-box;    
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100vh;
    margin-bottom: -10em;
  }
  body {
    -webkit-font-smoothing: antialiased;
    // background-color: #e6e6ff;
    // background: linear-gradient(to left, #555, #333 50%, #eee 100%, #333 100%);
    background: linear-gradient(to left, #999, #333 60%, #eee 100%, #111 20%);
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }  
  `;