import Dock from './dock';
import { VscHome, VscArchive, VscAccount, VscBook } from 'react-icons/vsc';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};

const items = [
  { icon: <VscHome size={18} />, label: 'Home', onClick: () => scrollToSection('home') },
  { icon: <VscBook size={18} />, label: 'About Me', onClick: () => scrollToSection('about') },
  { icon: <VscArchive size={18} />, label: 'Projects', onClick: () => scrollToSection('projects') },
  { icon: <VscAccount size={18} />, label: 'Skills', onClick: () => scrollToSection('skills') },
];

export default function Nav() {
  return (
    <div>
      <Dock
        items={items}
        panelHeight={60}
        baseItemSize={70}
        magnification={90}
      />
    </div>
  );
}