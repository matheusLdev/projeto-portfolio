export type ContainerProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
  children: React.ReactNode;
}

export type ContainerSectionProps = {
  id: string;
  titleSection: string;
  children: React.ReactNode;
}

export type AnimateProps = {
  children: React.ReactNode;
  className?: string;
  key?: string;
}