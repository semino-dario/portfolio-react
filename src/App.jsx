import Header from './components/Header'
import './App.css'
import Acerca from './components/Acerca'
import TechIcons from './components/TechIcons'
import Formacion from './components/Formacion'
import Colofon from './components/Colofon'
import ProjectSection from './components/ProjectSection'

function App() {

  return (
    <div>
      <div className='bg-fondoAzul  bg-bottom bg-cover bg-no-repeat h-[200px] md:h-[450px]'>
      </div>
      <div className='mt-[-200px] md:mt-[-400px]'>
        <Header />
        <Acerca />
      </div>
      <ProjectSection />
      <Formacion />
      <TechIcons />
      <Colofon />
      <br />
      <br />
    </div>
  )
}
export default App

