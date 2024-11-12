import styled from 'styled-components';
import Fonts from '../../styles/Fonts';
import Colors from '../../styles/Colors';

export const ContainerProjects = styled.section`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 920px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const CardProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 50%;
  min-width: 22rem;
  min-height: 36rem;
  padding: 1rem;
  border-radius: .3rem;
  box-shadow: 0 0 .3rem 0 rgba(0,0,0,.1);
  margin-bottom: 2rem;

  ul li {
    margin-left: 1rem;
    list-style: disc;
  }

  @media (max-width: 920px) {
    max-width: 90%;
    height: fit-content;

    img {
      width: 100%;
    }
  }

  img {
    max-width: 200px;
    border-radius: 8px;
    margin: 0 auto;
  }

  h2 a {
    font-family: ${Fonts.Poppins_regular};
    color: ${Colors.dark_blue};
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  h3, p {
    display: inline;
  }

  p {
    margin-left: .3rem;
  }

  strong {
    font-size: .95rem;
  }
`