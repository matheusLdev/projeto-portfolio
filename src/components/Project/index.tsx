import ContainerSection from "../ContainerSection";
import { CardProject, ContainerProjects } from "./style";

const Project = () => {
  return (
    <ContainerSection titleSection="Projetos">
      <ContainerProjects>
        <CardProject>
          <h2>Projeto TendenciesRH - <a href="https://tendenciesrh.com/" target="_blank" rel="noopener noreferrer">Ver Site</a></h2>
          <br/>
          <h3>Descrição:</h3>
          <p>O site oferece uma interface intuitiva e responsiva, projetada para destacar a presença digital da TendenciesRH e promover seus serviços.</p>
          <br/>
          <h3>Ferramentas:</h3>
          <p>JavaScript, React, TypeScript, Git/GitHub e Figma.</p>
        </CardProject>
        <CardProject>
          <h2>Projeto TendenciesRH - <a href="http://" target="_blank" rel="noopener noreferrer">Ver Site</a></h2>
          <br/>
          <h3>Descrição:</h3>
          <p>O site oferece uma interface intuitiva e responsiva, projetada para destacar a presença digital da TendenciesRH e promover seus serviços.</p>
          <br/>
          <h3>Ferramentas:</h3>
          <p>JavaScript, React, TypeScript, Git/GitHub e Figma.</p>
        </CardProject>
      </ContainerProjects>
    </ContainerSection>
  )
}

export default Project;