import { createGlobalStyle } from 'styled-components';
import Fonts from './Fonts';
import Colors from './Colors';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins-Light';
    src: url('../assets/fonts/Poppins-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins-Regular';
    src: url('../assets/fonts/Poppins-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins-Bold';
    src: url('../assets/fonts/Poppins-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'RobotoSerif-Regular';
    src: url('../assets/fonts/RobotoSerif-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'RobotoSerif-SemiBold';
    src: url('../assets/fonts/RobotoSerif-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

  body {
    background: ${Colors.white};
    font-family: ${Fonts.Poppins_regular};
    color: ${Colors.dark_blue};
  }

  h1, h2 {
    font-family: ${Fonts.Roboto_serif_semibold};
  }
  
  h3 {
    font-family: ${Fonts.Poppins_bold};
  }

  p {
    font-family: ${Fonts.Poppins_regular};
  }
`;
