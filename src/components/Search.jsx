import { FaCalendarDays, FaLocationDot, FaMagnifyingGlass, FaPlaneDeparture } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Search() {
  return (
    <section className="search" id="search" data-aos="zoom-in-up">
      <div className="search-field">
        <FaLocationDot />
        <div>
          <label>From - To</label>
          <input type="text" placeholder="Amman to London" />
        </div>
      </div>

      <div className="search-field">
        <FaCalendarDays />
        <div>
          <label>Departure</label>
          <input type="date" />
        </div>
      </div>

      <div className="search-field">
        <FaCalendarDays />
        <div>
          <label>Return</label>
          <input type="date" />
        </div>
      </div>

      <div className="search-field">
        <FaPlaneDeparture />
        <div>
          <label>Travelers</label>
          <select defaultValue="1 Adult">
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>2 Adults, 1 Child</option>
            <option>Family Pack</option>
          </select>
        </div>
      </div>

      <div className="search-field">
        <FaPlaneDeparture />
        <div>
          <label>Cabin</label>
          <select defaultValue="Economy">
            <option>Economy</option>
            <option>Premium Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
        </div>
      </div>

      <Link className="btn-solid" to="/search">
        <FaMagnifyingGlass /> Search Flight
      </Link>
    </section>
  )
}

export default Search
