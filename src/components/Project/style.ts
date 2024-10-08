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
  }
`

export const CardProject = styled.div`
  min-width: 22rem;
  height: 28rem;
  padding: 1rem;
  border-radius: .3rem;
  box-shadow: 0 0 .3rem 0 rgba(0,0,0,.1);
  margin-bottom: 2rem;

  @media (max-width: 920px) {
    height: fit-content;
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
`