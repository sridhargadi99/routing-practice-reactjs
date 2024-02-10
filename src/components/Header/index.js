// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-container">
      <img
        className="logo-style"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1 className="logo-heading-style">Wave</h1>
    </div>
    <ul className="list-container">
      <li className="list-style">
        <Link to="/" className="list-style1">
          Home
        </Link>
      </li>
      <li className="list-style">
        <Link to="/about" className="list-style1">
          About
        </Link>
      </li>
      <li className="list-style">
        <Link to="/contact" className="list-style1">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
