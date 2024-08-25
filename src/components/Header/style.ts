import styled from 'styled-components';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const ContainerHeader = styled.header`
  height: 3rem;
  position: fixed;
  top: 0;
  background: ${Colors.gradient};
  width: 100%;
  text-align: center;
  z-index: 10;

  @media (max-width: 768px) {
    background: ${Colors.dark_blue};
  }
`;

export const MenuNav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 1.2rem;
  }

  a {
    font-family: ${Fonts.Poppins_bold};
    font-weight: 700;
    color: ${Colors.white};

    &:hover {
      color: #A0A0A0;
      transition: color 0.5s ease;
    }
  }

  @media (max-width: 768px) {
    ul {
      width: 100%;
      height: 0;
      overflow: hidden;
      transition: height .5s ease;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      background: ${Colors.dark_blue};
      margin-top: 0;
      gap: 2rem;
      padding-top: 3rem;
    }

    li {
      width: 100%;
      padding-left: .5rem;
      padding-bottom: .5rem;
      border-bottom: .1rem solid ${Colors.white};
      text-align: start;
    }

    &.open ul {
      height: 100vh;
      background: ${Colors.gradient};
    }
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: .5rem;
  right: 1rem;
  z-index: 20;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${Colors.white};
    position: absolute;
    transition: transform 0.3s ease, top 0.3s ease;
  }

  &::before {
    transform: translateY(-6px);
  }

  &::after {
    transform: translateY(6px);
  }

  span {
    width: 100%;
    height: 2px;
    background-color: ${Colors.white};
    transition: opacity 0.3s ease;
  }


  &.open::before {
    transform: rotate(45deg) translateY(0);
  }

  &.open::after {
    transform: rotate(-45deg) translateY(0);
  }

  &.open span {
    opacity: 0;
  }
`;