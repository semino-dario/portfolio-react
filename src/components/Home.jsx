import Header from './Header'
import Acerca from './Acerca'
import TechIcons from './TechIcons'
import Formacion from './Formacion'
import Colofon from './Colofon'
import ProjectSection from './ProjectSection'

export function Home() {

    return (
        <div className="mx-auto max-w-screen-xlg">
            <div className='bg-fondoAzul  bg-bottom bg-cover bg-no-repeat h-[14rem] md:h-[28rem]'>
            </div>
            <div className='mt-[-14rem] md:mt-[-25rem]'>
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