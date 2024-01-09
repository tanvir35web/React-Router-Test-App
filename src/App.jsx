import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Project from './components/Project';
import { Route, Routes, Link } from 'react-router-dom';

function App() {


  return (
    <>

    <nav>

      <ul className='nav-ul'>

        <Link to="/" className='nav-link' > Home </Link>
        <Link to="/contact" className='nav-link'> Contact </Link>
        <Link to="/about" className='nav-link'> About </Link>
        <Link to="/project" className='nav-link'> Project </Link>

      </ul>
    </nav>

    

    <Routes>
      
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/project' element={<Project/>} />
      <Route path='/about' element={<About/>} />
    </Routes>

    </>
  )
}

export default App;
