import React from 'react'
import { ContainerProps } from '../../types';

const Container: React.FC<ContainerProps> = ({ width, height, children }) => {
  return (
    <Container width={width} height={height}>
      {children}
    </Container>
  )
}

export default Container;