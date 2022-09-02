import { FaBeer } from 'react-icons/fa';
import './header.css'

export default function Header() {
  return (
    <nav>
      <div className="navbar">
        <FaBeer className='iconLogo' />
        <div className="menuIcons"></div>
      </div>
    </nav>
  )
}
