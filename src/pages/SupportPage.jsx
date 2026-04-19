import Support from '../components/Support'
import Stats from '../components/Stats'
import Subscribe from '../components/Subscribe'

function SupportPage() {
  return (
    <>
      <section className="page-hero">
        <p className="tag">Travel support</p>
        <h1>Help That Moves As Fast As You</h1>
        <p>From fare alerts to booking changes, every step is covered.</p>
      </section>
      <main>
        <Stats />
        <Support />
        <Subscribe />
      </main>
    </>
  )
}

export default SupportPage
