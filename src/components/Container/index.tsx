import { ContainerProps } from '../../types';
import { ContainerGradient } from './style';

const Container = ({ width, height, borderRadius, children }: ContainerProps) => {
  return (
    <ContainerGradient width={width} height={height} borderRadius={borderRadius}>
      {children}
    </ContainerGradient>
  )
}

export default Container;