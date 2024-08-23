import { ContainerHeader, MenuNav } from './style';

const Header = () => {
  return (
    <ContainerHeader>
      <MenuNav>
        <ul>
          <li><a href="#inicio" rel="noopener noreferrer">HOME</a></li>
          <li><a href="#projeto" rel="noopener noreferrer">PROJETOS</a></li>
          <li><a href="#sobre" rel="noopener noreferrer">SOBRE MIM</a></li>
        </ul>
      </MenuNav>
    </ContainerHeader>
  )
}

export default Header;