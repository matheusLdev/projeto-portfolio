import styled from 'styled-components';
import Fonts from '../../styles/Fonts';
import Colors from '../../styles/Colors';

export const ContainerProjects = styled.section`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`

export const CardProject = styled.div`
  height: 28rem;
  padding: 1rem;
  border-radius: .3rem;
  box-shadow: 0 0 .3rem 0 rgba(0,0,0,.1);
  margin-bottom: 2rem;

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