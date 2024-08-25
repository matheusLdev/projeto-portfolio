import styled from 'styled-components';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const ContainerMain = styled.main`
  width: 80%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`

export const TextDescription = styled.p`
  color: ${() => Colors.white};
  font-size: 1.5rem;

  @media (max-width: 1200px) {
    width: 91%;
  }

  @media (max-width: 970px) {
    padding-left: 8rem;
    font-size: 1rem;
  }

  @media (max-width: 820px) {
    padding-left: 0;
  }

  @media (max-width: 490px) {
    font-size: .7rem;
  }
`

export const TitlePosition = styled.h1`
  color: ${() => Colors.white};
  font-family: ${() => Fonts.Roboto_serif_regular};
  font-size: 8rem;
  margin: 1rem 0;

  @media (max-width: 1200px) {
    font-size: 6rem;
  }

  @media (max-width: 970px) {
    padding-left: 8rem;
    font-size: 4rem;
  }

  @media (max-width: 820px) {
    padding-left: 0;
  }

  @media (max-width: 650px) {
    font-size: 3rem;
  }

  @media (max-width: 490px) {
    font-size: 2rem;
  }
`

export const ContainerTalkMe = styled.section`
  position: absolute;
  bottom: 33%;
  right: 0;
  display: flex;
  gap: 3rem;

  @media (max-width: 1200px) {
    left: 35%;
    bottom: 5%;
  }

  @media (max-width: 900px) {
    bottom: 20%;
  }

  @media (max-width: 490px) {
    left: 15%;
  }
`

export const LinkNav = styled.a``

export const ImgSocialNetwork = styled.img`
  width: 4rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.25);
  }

  @media (max-width: 970px) {
    width: 2rem;
  }
`