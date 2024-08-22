import styled from 'styled-components';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const ContainerBio = styled.article`
  width: 100%;
  display: flex;
  border-radius: .3rem;
  border-top-left-radius: 7.5rem;
  box-shadow: 0 0 .3rem 0 rgba(0,0,0,.1);
  margin-bottom: 2rem;
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
  font-family: ${Fonts.Poppins_bold};
  font-weight: 700;
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
  border-radius: .3rem;
`

export const ContainerHistory = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const MenuAside = styled.aside`
 ul li {
    font-family: ${Fonts.Poppins_bold};
    font-weight: 700;
    font-size: 1.5rem;
    padding: 1rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: .3rem;
    box-shadow: 0 0 .3rem 0 rgba(0,0,0,.1);
    cursor: pointer;

  }
  ul li.active {
    background: ${Colors.gradient};
    color: ${Colors.white};
  }
`

export const ContainerContent = styled.div`
  width: 100%;
  padding: 1rem;
  color: ${Colors.white};

  h3, h4, p {
    display: inline;
  }

  h3 {
    margin-right: .5rem;
  }

  a {
    color: ${Colors.white};
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    padding-left: 1rem;
    li {
      list-style: disc;
    }
  }
`

export const ContainerHistoryEducation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem
` 