import styled from 'styled-components';
import Fonts from '../../styles/Fonts';
import Colors from '../../styles/Colors';

export const ContainerFooter = styled.footer`
  color: ${Colors.white};
  font-family: ${Fonts.Poppins_bold};
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
  padding: 2rem 0;

  @media (max-width: 768px) {
    font-size: .8rem;
  }
`