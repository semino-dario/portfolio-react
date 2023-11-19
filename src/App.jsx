import './App.css'
import CredencialP5 from './components/CredencialP5'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { Home } from './components/Home';
import { useEffect } from 'react';


export default function App() {

  const { id } = useParams('id')

  const scrollToSection = (x) => {
    const sectionId = Object.values(x)
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView()
    }
  };
  useEffect(
    () => { if (id) { scrollToSection(id) } }, []
  )

  return (
    <div>
      <Home />
      {/* <BrowserRouter>
        <Routes>
          <Route index='home' element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route to='/credenciales/:id' element={<CredencialP5 />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}

