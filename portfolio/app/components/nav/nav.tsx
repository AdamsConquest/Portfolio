import PillNav from './PillNav';

export default function Dock() {
  return (
    <PillNav
      items={[
        { label: 'Home', href: '#home' },
        { label: 'About me', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' }
      ]}
      className="custom-nav"
      ease="power2.easeOut"
      baseColor="#00000000"
      pillColor="#00000000"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#ffffff"

      initialLoadAnimation={true}
    />
  )
}