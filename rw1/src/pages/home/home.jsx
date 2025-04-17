import Mainheader from "../../components/Mainheader"
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'
import "./home.css"

const Home = () =>{
  return (
    <>
      <Mainheader/>
      <Programs/>
      <Values/>
      <FAQs/>
      <Testimonials/>
    </>
  )
}

export default Home;