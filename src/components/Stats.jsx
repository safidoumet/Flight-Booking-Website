import { Link } from 'react-router-dom'

function Stats() {
  return (
    <section className="stats" data-aos="fade-up">
      <Link to="/support" className="card-link">
        <h3>10M+</h3>
        <p>Travelers Served</p>
      </Link>
      <Link to="/support" className="card-link">
        <h3>190+</h3>
        <p>Airlines Connected</p>
      </Link>
      <Link to="/travelers" className="card-link">
        <h3>4.9/5</h3>
        <p>Average Rating</p>
      </Link>
      <Link to="/support" className="card-link">
        <h3>24/7</h3>
        <p>Live Support Team</p>
      </Link>
    </section>
  )
}

export default Stats
