
import Header from './components/Header'
import './App.css'
import Acerca from './components/Acerca'
import Arteludovica from './components/Arteludovica'
import Gerontovida from './components/Gerontovida'
import Traducciones from './components/Traducciones'
import TechIcons from './components/TechIcons'
import Formacion from './components/Formacion'
import Colofon from './components/Colofon'
import { Divider } from '@mui/material'
import TitleSection from './components/TitleSection'


function App() {


  return (
    <div>
      <div className=' w-full' >
        <div className='bg-fondo  bg-bottom bg-cover bg-no-repeat h-[400px]'>
        </div>
        <div className='mt-[-400px]'>
          <Header />
          <Acerca />
        </div>
        <br />
        <br />
        <br />
        <div className='w-full'>
          <Divider textAlign="left">
            <TitleSection
              title={'Proyectos'}
            /></Divider>
        </div>
        <Gerontovida />
        <br />
        <Arteludovica />
        <br />
        <br />
        <br />
        <Traducciones />
        <br />
        <br />
      </div>
      <br />
      <br />
      <div>
        <Formacion />
      </div>
      <br />
      <div className='w-full'>
        <TechIcons />
        <br />
      </div>
      <br />
      <br />
      <Colofon />
      <br />
      <br />
    </div>
  )
}
export default App

