import { FaCheckSquare, FaUserPlus, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './header.css'

export default function Header() {
  return (
    <header>
      <div className="navbars">
        <div>
          <Link to={'/'}>
            <FaCheckSquare className='navbar_icon' />
          </Link>
        </div>
        <div className="menuIcons">
          <Link to={'/register'} title={'register'}>
            <FaUserPlus className='navbar_icon' />
          </Link>
          <Link to={'/login'} title={'login'}>
            <FaSignInAlt className='navbar_icon' />
          </Link>
        </div>
      </div>
    </header>
  )
}
