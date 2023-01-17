import '../App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero';
import Card from './Card'
import Section from './Section'
import Stats from './Stats'
function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Card />
        <Section />
        <Stats />
        <Footer />
    </div>
  )
  
}

export default Home;
