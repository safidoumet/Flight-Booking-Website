import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home" id="home">
      <video
        className="home-video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1200"
      >
        <source
          src="/videos/hero-flight.mp4"
          type="video/mp4"
        />
      </video>
      <div className="home-overlay"></div>

      <div className="home-content" data-aos="fade-up">
        <p className="tag">Travel with confidence</p>
        <h1>Your Journey Starts Here, Book With Zero Stress</h1>
        <p>
          Compare top airlines, lock the right fare, and fly with an experience
          designed for speed, comfort, and control.
        </p>
        <div className="home-actions">
          <Link to="/search" className="btn-solid hero-btn-primary">
            Book A Flight
          </Link>
          <Link to="/info" className="btn-outline hero-btn-secondary">
            Explore Routes
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
