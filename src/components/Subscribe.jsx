import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Subscribe() {
  return (
    <section className="subscribe" data-aos="zoom-in-up">
      <div>
        <p className="tag">Stay updated</p>
        <h2>Get Weekly Deals And Fresh Flight Alerts</h2>
      </div>
      <form>
        <input type="email" placeholder="Enter your email" />
        <Link to="/search" className="subscribe-link">
          Subscribe <FaArrowRightLong />
        </Link>
      </form>
    </section>
  )
}

export default Subscribe
