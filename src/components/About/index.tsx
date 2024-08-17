import ContainerSection from '../ContainerSection';
import Matheus from '../../assets/images/matheus.png'
import { ContainerBio, ContainerText, ImagePerson, LinkTalkMe } from './style';

const About = () => {
  return (
    <ContainerSection titleSection='Quem Sou Eu?'>
      <ContainerBio>
        <ImagePerson src={Matheus} />
        <ContainerText>
          <p>Sou um profissional analítico, organizado e resiliente. Gosto de estar em constante evolução e aprendizado. Sou comprometido com o trabalho em equipe e praticante do lema juntos vamos mais longe.</p>
          <p>Minhas principais ferramentas são: JavaScript, TypeScript, React, React-Native, NodeJs, NestJS, Docker, Insomnia, SQL Server, Git/GitHub e Figma.</p>
          <p>Além da minha paixão pela tecnologia, amo estar com a minha família, assistir e jogar futebol.</p>
          <p>Vamos marcar um café e conversar sobre como podemos juntos gerar impacto positivo na sociedade através do universo da programação ?</p>
          <LinkTalkMe href='https://wa.me/+5521980729950' target='_blank'>Let's Go!</LinkTalkMe>
        </ContainerText>
      </ContainerBio>
    </ContainerSection>
  )
}

export default About;