import styled from 'styled-components';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const ContainerHeader = styled.header`
  position: fixed;
  top: 0;
  background: none;
  width: 100%;
  text-align: center;
`

export const MenuNav = styled.nav`
  font-family: ${Fonts.Poppins_bold};
  font-weight: 700;
  color: ${Colors.white};

  ul {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 1.2rem;
  }
` 