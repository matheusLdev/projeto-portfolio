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
`

export const TitlePosition = styled.h1`
  color: ${() => Colors.white};
  font-family: ${() => Fonts.Roboto_serif_regular};
  font-size: 8rem;
  margin: 1rem 0;
`

export const ContainerTalkMe = styled.section`
  position: absolute;
  bottom: 33%;
  right: 0;
  display: flex;
  gap: 3rem;
`

export const LinkNav = styled.a``

export const ImgSocialNetwork = styled.img`
  width: 4rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.25);
  }
`