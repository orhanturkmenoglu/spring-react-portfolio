import Hero from '../components/Hero'
import About from "../components/About"
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Register from '../components/Register'
import Login from '../components/Login'
const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home