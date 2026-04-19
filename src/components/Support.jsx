import { FaShieldHeart, FaTicket, FaUserGroup } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const supportItems = [
  {
    title: 'Smart Fare Alerts',
    text: 'Follow your route and get notified as soon as prices drop.',
    icon: <FaTicket />,
  },
  {
    title: 'Travel Protection',
    text: 'Fast modifications and secure support for every reservation.',
    icon: <FaShieldHeart />,
  },
  {
    title: 'Group Booking',
    text: 'Coordinate seats and fares for family and team itineraries.',
    icon: <FaUserGroup />,
  },
]

function Support() {
  return (
    <section className="support" id="support">
      <div className="section-header" data-aos="fade-right">
        <p className="tag">Support</p>
        <h2>Plan Smooth Trips With Smart Tools</h2>
      </div>

      <div className="support-grid">
        {supportItems.map((item, index) => (
          <Link
            className="card-link"
            key={item.title}
            to="/support"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="icon-badge">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Support
