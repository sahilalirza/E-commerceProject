import BannerGrid from '../components/BannerGrid'
import Men from '../components/Men'
import Kids from '../components/Kids'
import Women from '../components/Women'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    {/* <Navbar/> */}
    <BannerGrid/>
    <Services/>
    <Men/>
    <Women/>
    <Kids/>
    <Footer/>
    </>
  )
}

export default Home