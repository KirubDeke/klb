import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Nav from './pages/NavBar';
import HomeFinal from './pages/HomeFinal';
import Contact from './pages/Contact';
import Vacancy from './pages/Vacancy';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router> 
      <Nav />
        <Routes>
          <Route path='/' element={<HomeFinal/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/vacancy' element={<Vacancy/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/> 
          </Routes>
    </Router>
  </StrictMode>,
)
