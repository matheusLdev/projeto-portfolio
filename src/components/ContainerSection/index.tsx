import { ContainerSectionProps } from '../../types';
import { Container, TitleSection } from './style';


const ContainerSection = ({ children, titleSection }: ContainerSectionProps) => {
  return (
    <Container>
      <TitleSection>{titleSection}</TitleSection>
      {children}
    </Container>
  )
}

export default ContainerSection;