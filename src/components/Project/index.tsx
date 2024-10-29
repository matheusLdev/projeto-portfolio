import ContainerSection from '../ContainerSection';
import { CardProject, ContainerProjects } from './style';
import TendenciesRh from '../../assets/images/tendenciesrh.png';
import GuiaConferencia from '../../assets/images/app-gdc.png';

const Project = () => {
  return (
    <ContainerSection id='projeto' titleSection='Projetos'>
      <ContainerProjects>
        <CardProject>
          <img src={TendenciesRh} alt='Imagem do projeto TendenciesRH'/>
          <div>
            <h2>Projeto TendenciesRH - <a href='https://tendenciesrh.com/' target='_blank' rel='noopener noreferrer'>Ver Site</a></h2>
            <br/>
            <h3>Descrição:</h3>
            <p>O site oferece uma interface intuitiva e responsiva, projetada para destacar a presença digital da TendenciesRH e promover seus serviços.</p>
            <br/>
            <h3>Ferramentas:</h3>
            <p>JavaScript, React, TypeScript, Git/GitHub e Figma.</p>
          </div>
        </CardProject>
        <CardProject>
          <img src={GuiaConferencia} alt='Imagem do app Guia de Conferência'/>
          <div>
            <h2>Projeto Guia de Conferência</h2>
            <br/>
            <h3>Descrição:</h3>
            <p>O aplicativo oferece uma interface intuitiva, projetado para facilitar a conferência dos amigos rodoviários.</p>
            <br/>
            <h3>Ferramentas:</h3>
            <p>JavaScript, React-Native, TypeScript, Git/GitHub e Figma.</p>
          </div>
        </CardProject>
      </ContainerProjects>
    </ContainerSection>
  )
}

export default Project;