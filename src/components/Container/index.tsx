import React from 'react'
import { ContainerProps } from '../../types';
import { ContainerGradient } from './style';

const Container: React.FC<ContainerProps> = ({ width, height, children }) => {
  return (
    <ContainerGradient width={width} height={height}>
      {children}
    </ContainerGradient>
  )
}

export default Container;