import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from "./components/Navbar.jsx";
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Work from "./components/Work.jsx"
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { Toaster } from 'react-hot-toast';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';

function App() {

  return (
    <div>
      <Navbar />
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/works' element={<Work/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
    </div>
  )
}

export default App
