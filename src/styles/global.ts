import { createGlobalStyle } from 'styled-components';
import 'reset-css';

export default createGlobalStyle`
    * {
      box-sizing: border-box;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
    
    html,body {
      font-family: Pretendard, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
      color:#040505;
      touch-action: pan-y;
      -webkit-font-smoothing: antialiased;
      font-size: 62.5%;

      @media screen and (min-width: 768px) and (max-width: 1179px) {
        font-size: 55%;
      }

    @media screen and (max-width: 767px) {
        font-size: 40%;
      }
  }

    button {
      background: inherit; 
      border:none; 
      box-shadow:none; 
      border-radius:0; 
      padding:0; 
      overflow:visible; 
      cursor:pointer
    } 

    a:focus,
      button:focus,
      input:focus,
      :focus {
        outline: none;
      }
      
      a::-moz-focus-inner,
      button::-moz-focus-inner,
      input::-moz-focus-inner,
      ::-moz-focus-inner {
        border: 0;
    }

    .react-confirm-alert-overlay {
      z-index: 1000;
    }
    `;
