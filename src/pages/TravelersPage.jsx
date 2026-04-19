import Travelers from '../components/Travelers'
import Info from '../components/Info'
import Subscribe from '../components/Subscribe'

function TravelersPage() {
  return (
    <>
      <section className="page-hero">
        <p className="tag">Community voices</p>
        <h1>What Travelers Say After Booking</h1>
        <p>Real feedback from passengers who used the platform.</p>
      </section>
      <main>
        <Travelers />
        <Info />
        <Subscribe />
      </main>
    </>
  )
}

export default TravelersPage
