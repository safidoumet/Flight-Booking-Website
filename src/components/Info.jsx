import { Link } from 'react-router-dom'

const routes = [
  {
    city: 'Istanbul',
    country: 'Turkey',
    price: '$249',
    image:
      'https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    city: 'Dubai',
    country: 'UAE',
    price: '$289',
    image:
      'https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    city: 'Rome',
    country: 'Italy',
    price: '$219',
    image:
      'https://images.pexels.com/photos/753337/pexels-photo-753337.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
]

function Info() {
  return (
    <section className="info" id="info">
      <div className="section-header" data-aos="fade-right">
        <p className="tag">Top destinations</p>
        <h2>Popular Routes This Month</h2>
      </div>

      <div className="route-grid">
        {routes.map((route, index) => (
          <Link
            className="route-card"
            key={route.city}
            to="/search"
            data-aos="fade-up"
            data-aos-delay={index * 120}
          >
            <img src={route.image} alt={route.city} />
            <div>
              <h3>{route.city}</h3>
              <p>{route.country}</p>
            </div>
            <strong>{route.price}</strong>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Info
