import Lounge from '../components/Lounge'
import Support from '../components/Support'
import Subscribe from '../components/Subscribe'

function LoungePage() {
  return (
    <>
      <section className="page-hero">
        <p className="tag">Sky lounge</p>
        <h1>Premium Flight Experience</h1>
        <p>Enjoy the full travel vibe with concierge features and smooth boarding.</p>
      </section>
      <main>
        <Lounge />
        <Support />
        <Subscribe />
      </main>
    </>
  )
}

export default LoungePage
