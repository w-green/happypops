import { createGlobalStyle } from "styled-components";

import { IcomoonEOT, IcomoonTTF, IcomoonWOFF, IcomoonSVG } from './fonts.css';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    @font-face {
        font-family: 'icomoon';
        src: url(${IcomoonEOT}) format('embedded-opentype'),
            url(${IcomoonTTF}) format('truetype'),
            url(${IcomoonWOFF}) format('woff'),
            url(${IcomoonSVG}) format('svg');
        font-weight: normal;
        font-style: normal;
    }

    [class^="icon-"], [class*=" icon-"] {
        /* use !important to prevent issues with browser extensions that change fonts */
        font-family: 'icomoon' !important;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;

        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon-facebook:before {
        content: "\ea90";
    }
    .icon-instagram:before {
        content: "\e900";
    }
`;

export default GlobalStyle;
