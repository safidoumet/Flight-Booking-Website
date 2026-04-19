import { FaClock } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <p>SkyWave Flights</p>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/info">Info</Link>
      </div>
      <p>
        <FaClock /> 24/7 live support
      </p>
    </footer>
  )
}

export default Footer
