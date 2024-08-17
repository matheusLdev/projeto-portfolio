import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const ContainerBio = styled.article`
  width: 100%;
  display: flex;
  border-radius: .3rem;
  border-top-left-radius: 7.5rem;
  box-shadow: 0 0 .3rem 0 rgba(0,0,0,.1);
`

export const ImagePerson = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
`

export const ContainerText = styled.div`
  padding: 1rem;

  p {
    font-size: 1.2rem;
    margin: 1rem auto;
  }
`

export const LinkTalkMe = styled.a`
  display: block;
  width: fit-content;
  background: ${Colors.gradient};
  color: ${Colors.white};
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
  border-radius: .3rem;
`