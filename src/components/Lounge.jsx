import { FaCalendarCheck, FaShield, FaSuitcaseRolling } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const loungeCards = [
  {
    title: 'Priority Boarding',
    text: 'Quick gate access and smooth boarding process with less waiting.',
    icon: <FaCalendarCheck />,
  },
  {
    title: 'Safe Journey',
    text: 'Verified airlines, secure checkout, and protection on every route.',
    icon: <FaShield />,
  },
  {
    title: 'Baggage Assistant',
    text: 'Smart baggage guidance before checkout to avoid airport surprises.',
    icon: <FaSuitcaseRolling />,
  },
]

function Lounge() {
  return (
    <section className="lounge" id="lounge">
      <div className="lounge-video-box" data-aos="fade-right">
        <video autoPlay loop muted playsInline className="lounge-video">
          <source
            src="/videos/lounge-flight.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="lounge-content" data-aos="fade-left">
        <p className="tag">Premium lounge</p>
        <h2>Clear Sky Journey With Real-Time Flight Experience</h2>
        <p>
          Watch real airplane footage while you explore premium travel options,
          boarding perks, and smooth booking tools.
        </p>

        <div className="lounge-grid">
          {loungeCards.map((item, index) => (
            <Link
              className="card-link"
              key={item.title}
              to="/lounge"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="icon-badge">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Lounge
