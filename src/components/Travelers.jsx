import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const travelers = [
  {
    name: 'Lana Haddad',
    text: 'Fast booking, clean seat options, and fair baggage pricing.',
  },
  {
    name: 'Yousef Khalil',
    text: 'I changed my route in minutes and support solved it instantly.',
  },
  {
    name: 'Mira Salem',
    text: 'The alerts helped me save money on a family trip to Rome.',
  },
]

function Travelers() {
  return (
    <section className="travelers" id="travelers">
      <div className="section-header" data-aos="fade-right">
        <p className="tag">Travelers review</p>
        <h2>Trusted By People Who Fly Often</h2>
      </div>

      <div className="review-grid">
        {travelers.map((traveler, index) => (
          <Link
            className="card-link"
            key={traveler.name}
            to="/travelers"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="stars">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <p>{traveler.text}</p>
            <h3>{traveler.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Travelers
