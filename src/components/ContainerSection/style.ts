import styled from 'styled-components';
import Colors from '../../styles/Colors';

export const Container = styled.section`
  width: 90%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2.5rem 0;
`

export const TitleSection = styled.h2`
  color: ${Colors.dark_blue};
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`