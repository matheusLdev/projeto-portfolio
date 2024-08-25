import { useRef, useState } from 'react';
import { ContainerHeader, HamburgerButton, MenuNav } from './style';

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [menuMobile, setMenuMobile] = useState(false);

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const element = document.getElementById(targetId);
    
    if (element && headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setMenuMobile(false); // Fechar o menu ao clicar em um item
  };

  return (
    <ContainerHeader ref={headerRef}>
      <HamburgerButton onClick={() => setMenuMobile(!menuMobile)} className={menuMobile ? 'open' : ''}>
        <span></span>
      </HamburgerButton>

      <MenuNav className={menuMobile ? 'open' : ''}>
        <ul>
          <li>
            <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'inicio')} rel="noopener noreferrer">HOME</a>
          </li>
          <li>
            <a href="#projeto" onClick={(e) => handleSmoothScroll(e, 'projeto')} rel="noopener noreferrer">PROJETOS</a>
          </li>
          <li>
            <a href="#sobre" onClick={(e) => handleSmoothScroll(e, 'sobre')} rel="noopener noreferrer">SOBRE MIM</a>
          </li>
        </ul>
      </MenuNav>
    </ContainerHeader>
  );
};

export default Header;
