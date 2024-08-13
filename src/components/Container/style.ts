import styled from 'styled-components';
import Colors from '../../styles/Colors';
import { ContainerProps } from '../../types';

export const ContainerGradient = styled.div<ContainerProps>`
  background: ${Colors.gradient};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100vh'};
`