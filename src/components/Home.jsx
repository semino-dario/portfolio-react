import Header from './Header'
import Acerca from './Acerca'
import TechIcons from './TechIcons'
import Formacion from './Formacion'
import Colofon from './Colofon'
import ProjectSection from './ProjectSection'

export function Home() {

    return (
        <>
            <div className='bg-fondoAzul  bg-bottom bg-cover bg-no-repeat h-[220px] md:h-[450px]'>
            </div>
            <div className='mt-[-220px] md:mt-[-400px]'>
                <Header />
                <Acerca />
            </div>
            <ProjectSection />
            <Formacion />
            <TechIcons />
            <Colofon />
            <br />
            <br />
        </>
    )
}