import ContainerSection from '../ContainerSection';
import Matheus from '../../assets/images/matheus.png'
import { ContainerBio, ContainerContent, ContainerHistory, ContainerHistoryEducation, ContainerText, ImagePerson, LinkTalkMe, MenuAside } from './style';
import Container from '../Container';
import { useState } from 'react';

const About = () => {
  const [activeSection, setActiveSection] = useState('Formações');

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
      <ContainerHistory>
        <MenuAside>
          <ul>
            <li
              className={activeSection === 'Formações' ? 'active' : ''}
              onClick={() => setActiveSection('Formações')}
            >
              Formações
            </li>
            <li
              className={activeSection === 'Experiência Profissional' ? 'active' : ''} 
              onClick={() => setActiveSection('Experiência Profissional')}
            >
              Experiência Profissional
            </li>
          </ul>
        </MenuAside>
        <ContainerHistoryEducation>
        {activeSection === 'Formações' && (
            <>
              <Container height='fit-content' borderRadius='.3rem'>
                <ContainerContent>
                  <h2>Ensino Superior</h2>
                  <br/>
                  <h3>Instituição:</h3>
                  <p>Universidade Estácio de Sá - UNESA</p>
                  <br/>
                  <h3>Curso:</h3>
                  <p>Análise e Desenvolvimentos de Sistemas, cursando 4° período.</p>
                </ContainerContent>
              </Container>
              <Container height='fit-content' borderRadius='.3rem'>
                <ContainerContent>
                  <h2>Cursos</h2>
                  <br/>
                  <h3>Instituição:</h3>
                  <p>Origamid</p>
                  <br/>
                  <h3>Cursos Realizados:</h3>
                  <p>
                    <a href=''>JavaScript Completo</a>, <a href=''>TypeScript Completo</a>, <a href=''>React Completo</a>, <a href=''>React com TypeScript</a>, <a href=''>Redux com React</a> e <a href=''>UI Design</a>.
                  </p>
                  <br/><br/>
                  <h3>Instituição:</h3>
                  <p>Udemy</p>
                  <br/>
                  <h3>Cursos Realizados:</h3>
                  <p>
                    <a href=''>Desenvolvimento Web Completo</a> e <a href=''>NestJS</a>.
                  </p>
                  <br/><br/>
                  <h3>Instituição:</h3>
                  <p>Digital Innovation One - DIO</p>
                  <br/>
                  <h3>Cursos Realizados:</h3>
                  <p>
                    <a href=''>Git e GitHub</a>, <a href=''>Metodologia Ágil SCRUM</a>, e <a href=''>Bootcamp Cloud AWS</a>.
                  </p>
                </ContainerContent>
              </Container>
            </>
          )}
          {activeSection === 'Experiência Profissional' && (
            <Container height='fit-content' borderRadius='.3rem'>
              <ContainerContent>
                <h2>Experiência Profissional</h2>
                <br/>
                <h3>Empresa:</h3><h4>Markts.</h4>
                <p> - <strong>Período:</strong> Fevereiro de 2024, até o presente momento.</p>
                <br/>
                <h3>Cargo:</h3>
                <p>Desenvolvedor Full-Stack e Mobile.</p>
                <br/>
                <h3>Descrição:</h3>
                <ul>
                  <li>Desenvolver aplicações web e móveis intuitivas e responsivas usando React, React Native e TypeScript;</li>
                  <li>Utilizar o NestJS para desenvolver a lógica do servidor;</li>
                  <li>Consumir WebServices em RestFull;</li>
                  <li>Usar o Git para controlar as versões do código-fonte;</li>
                  <li>Identificar e corrigir bugs em aplicações existentes, aplicar testes unitários e adotar Clean Code;</li>
                  <li>Usar a metodologia ágil Scrum.</li>
                </ul>
              </ContainerContent>
            </Container>
          )}
        </ContainerHistoryEducation>
      </ContainerHistory>
    </ContainerSection>
  )
}

export default About;