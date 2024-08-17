import { ContainerProps } from '../../types';
import { ContainerGradient } from './style';

const Container = ({ width, height, children }: ContainerProps) => {
  return (
    <ContainerGradient width={width} height={height}>
      {children}
    </ContainerGradient>
  )
}

export default Container;