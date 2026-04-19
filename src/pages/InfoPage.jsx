import Info from '../components/Info'
import Promo from '../components/Promo'
import Subscribe from '../components/Subscribe'

function InfoPage() {
  return (
    <>
      <section className="page-hero">
        <p className="tag">Destination hub</p>
        <h1>Explore Routes Before You Book</h1>
        <p>Check popular destinations and seasonal prices in one clean view.</p>
      </section>
      <main>
        <Info />
        <Promo />
        <Subscribe />
      </main>
    </>
  )
}

export default InfoPage
