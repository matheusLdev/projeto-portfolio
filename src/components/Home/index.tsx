import Github from '../../assets/images/github.png';
import Linkedin from '../../assets/images/linkedin.png';
import Whatsapp from '../../assets/images/whatsapp.png';
import ContainerGradient from '../Container';
import { ContainerMain, ContainerTalkMe, ImgSocialNetwork, LinkNav, TextDescription, TitlePosition } from './style';

const Home = () => {
  return (
    <ContainerGradient>
      <ContainerMain id='inicio'>
        <TextDescription>OLÁ!! EU SOU MATHEUS GONÇALVES, TENHO 26 ANOS, SOU</TextDescription>
        <TitlePosition>DESENVOLVEDOR FULL-STACK</TitlePosition>
        <ContainerTalkMe>
          <LinkNav href='https://github.com/matheusLdev' target='_blank'>
            <ImgSocialNetwork src={Github}/>
          </LinkNav>
          <LinkNav href="https://www.linkedin.com/in/developer-matheus/" target="_blank">
            <ImgSocialNetwork src={Linkedin}/>
          </LinkNav>
          <LinkNav href="https://wa.me/+5521980729950" target="_blank">
            <ImgSocialNetwork src={Whatsapp}/>
          </LinkNav>
        </ContainerTalkMe>
        <TextDescription style={{textAlign: 'right'}}>
          ESPECIALIZADO EM <strong>REACT, TYPESCRIPT E NESTJS.</strong>
        </TextDescription>
      </ContainerMain>
    </ContainerGradient>
  )
}

export default Home;