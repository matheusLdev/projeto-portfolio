import { createGlobalStyle } from 'styled-components';
import Fonts from './Fonts';

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

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${Fonts.Poppins_regular};
    background-color: #fff;
    color: #000;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${Fonts.Roboto_serif_semibold};
  }

  p {
    font-family: ${Fonts.Poppins_regular};
  }

  .bold {
    font-family: ${Fonts.Poppins_bold};
  }

  .light {
    font-family: ${Fonts.Poppins_light};
  }
`;
