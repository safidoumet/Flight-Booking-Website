import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Promo() {
  return (
    <section className="promo" data-aos="zoom-in-up">
      <div>
        <p className="tag">Special offer</p>
        <h2>Save up to 30% on Summer Flight Bundles</h2>
        <p>
          Bundle your seat, luggage, and priority boarding with one click and lock
          this week discount.
        </p>
      </div>
      <Link to="/search" className="promo-link">
        Get The Deal <FaArrowRightLong />
      </Link>
    </section>
  )
}

export default Promo
