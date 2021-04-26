import {createGlobalStyle} from 'styled-components';
import JetBrainsMono from './tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yK1TN1OVgaY.woff2';
import JetBrains from './tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yK1TOlOV.woff2';


export default createGlobalStyle`

 
    @font-face {
        font-family: 'JetBrains Mono';
        font-style: normal;
        font-weight: 100;
        src: local('JetBrains Mono'), local('Jet Brains'), url(${JetBrainsMono}) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }

    @font-face {
        font-family: 'JetBrains Mono';
        font-style: normal;
        font-weight: 100;
        src: local('JetBrains Mono'), local('Jet Brains'), url(${JetBrains}) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
 

`