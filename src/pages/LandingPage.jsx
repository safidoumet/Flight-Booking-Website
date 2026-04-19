import Home from '../components/Home'
import Search from '../components/Search'
import Brands from '../components/Brands'
import Stats from '../components/Stats'
import Support from '../components/Support'
import Info from '../components/Info'
import Lounge from '../components/Lounge'
import Travelers from '../components/Travelers'
import Promo from '../components/Promo'
import Subscribe from '../components/Subscribe'

function LandingPage() {
  return (
    <>
      <Home />
      <Search />
      <main>
        <Brands />
        <Stats />
        <Support />
        <Info />
        <Lounge />
        <Travelers />
        <Promo />
        <Subscribe />
      </main>
    </>
  )
}

export default LandingPage
