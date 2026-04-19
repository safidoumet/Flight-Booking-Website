import Search from '../components/Search'
import Brands from '../components/Brands'
import Stats from '../components/Stats'
import Subscribe from '../components/Subscribe'

function SearchPage() {
  return (
    <>
      <section className="page-hero">
        <p className="tag">Search and compare</p>
        <h1>Find The Best Fare In Seconds</h1>
        <p>Use filters and flight class options to pick your perfect itinerary.</p>
      </section>
      <Search />
      <main>
        <Brands />
        <Stats />
        <Subscribe />
      </main>
    </>
  )
}

export default SearchPage
