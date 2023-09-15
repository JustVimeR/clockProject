import './App.scss'
import Banner from './bannerNav/banner'
import Advantages from './advantages/advantages'
import Consultation from './consultation/consultation'
import Carousel from './carousel/carousel'
import Catalog from './catalog/catalog'
import Feed from './feedback/feed'
import FooterMap from './footerMap/footerMap'
import ModalWindow from './modalWindows/modalWindow'
import 'jquery';

const App = () => {

  return (
    <>
      <main>
        <Banner />
        <Advantages />
        <Consultation />
        <Carousel />
        <Catalog />
        <Feed />
        <FooterMap />
        <ModalWindow />
      </main>
    </>
  )
}

export default App
