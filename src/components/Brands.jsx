import { Link } from 'react-router-dom'

const airlines = ['Qatar Airways', 'Emirates', 'Turkish', 'Etihad', 'Lufthansa']

function Brands() {
  return (
    <section className="brands" data-aos="fade-up">
      <p>Trusted by top airlines</p>
      <div>
        {airlines.map((name) => (
          <Link key={name} to="/search">{name}</Link>
        ))}
      </div>
    </section>
  )
}

export default Brands
