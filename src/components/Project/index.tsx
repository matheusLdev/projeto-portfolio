import ContainerSection from "../ContainerSection";
import { CardProject, ContainerProjects } from "./style";
import TendenciesRh from "../../assets/images/tendenciesrh.png";
import GuiaConferencia from "../../assets/images/app-gdc.png";

const Project = () => {
  return (
    <ContainerSection id="projeto" titleSection="Projetos">
      <ContainerProjects>
        <CardProject>
          <img src={TendenciesRh} alt="Imagem do projeto TendenciesRH" style={{maxWidth: '300px'}}/>
          <div>
            <h2>
              Projeto TendenciesRH -{" "}
              <a
                href="https://tendenciesrh.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Site
              </a>
            </h2>
            <br />
            <h3>Descrição:</h3>
            <p>
              O site da TendenciesRH foi desenvolvido para fortalecer a presença
              digital da empresa, promovendo seus serviços de forma clara e
              acessível. Com uma interface intuitiva e design responsivo, o site
              se adapta a diferentes dispositivos, proporcionando uma
              experiência de navegação fluida para os usuários.
            </p>
            <br /><br />
            <h3>Funcionalidades:</h3>
            <ul>
              <li>
                Páginas dinâmicas que apresentam os serviços e diferenciais da
                TendenciesRH.
              </li>
              <li>
                Design responsivo, garantindo uma boa experiência em
                dispositivos móveis e desktops.
              </li>
              <li>
                SEO otimizado para melhor visibilidade nos mecanismos de busca.
              </li>
            </ul>
            <br />
            <h3>Especificações Técnicas:</h3>
            <p>
              Desenvolvido com <strong>React</strong> e{" "}
              <strong>TypeScript</strong>, o site adota uma arquitetura modular,
              facilitando a manutenção e possíveis expansões. Prototipação e
              design realizados no <strong>Figma</strong> para garantir
              consistência visual. Versionamento e colaboração conduzidos via{" "}
              <strong>Git/GitHub</strong>.
            </p>
          </div>
        </CardProject>
        <CardProject>
          <img src={GuiaConferencia} alt="Imagem do app Guia de Conferência" />
          <br />
          <div>
            <h2>Projeto Guia de Conferência (GDC)</h2>
            <br />
            <h3>Descrição:</h3>
            <p>
              O Guia de Conferência é um aplicativo desenvolvido para otimizar o
              controle de viagens e passageiros por motoristas de ônibus. Com
              uma interface intuitiva e amigável, permite o registro ágil e
              preciso das informações, eliminando o uso de papel e simplificando
              o processo de conferência.
            </p>
            <br />
            <br />
            <h3>Funcionalidades:</h3>
            <ul>
              <li>
                Registro de viagens e passageiros de forma prática e rápida.
              </li>
              <li>
                Armazenamento digital de guias de conferência, acessíveis a
                qualquer momento.
              </li>
              <li>
                Interface simplificada para fácil navegação, mesmo para usuários
                com pouca experiência em tecnologia.
              </li>
            </ul>
            <br />
            <h3>Especificações Técnicas:</h3>
            <p>
              Desenvolvido com <strong>React Native</strong> e{" "}
              <strong>TypeScript</strong>, o aplicativo utiliza uma arquitetura
              modular para facilitar a manutenção e escalabilidade. Design
              prototipado no <strong>Figma</strong> para garantir uma
              experiência visual consistente. Controle de versão e colaboração
              por meio de <strong>Git/GitHub</strong>.
            </p>
          </div>
        </CardProject>
      </ContainerProjects>
    </ContainerSection>
  );
};

export default Project;
