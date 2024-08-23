import { ContainerSectionProps } from '../../types';
import { Container, TitleSection } from './style';


const ContainerSection = ({ children, titleSection, id }: ContainerSectionProps) => {
  return (
    <Container id={id}>
      <TitleSection>{titleSection}</TitleSection>
      {children}
    </Container>
  )
}

export default ContainerSection;