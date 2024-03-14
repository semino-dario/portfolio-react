import Header from './Header'
import About from './About'
import TechIcons from './TechIcons'
import Formacion from './Formacion'
import Colofon from './Colofon'
import ProjectSection from './ProjectSection'

export function Home() {

    return (
        <div className="mx-auto max-w-screen-xlg">
            <div className='bg-fondoAzul  bg-bottom bg-cover bg-no-repeat h-[14rem] md:h-[28rem]'>
                {/* <div className='h-[14rem] md:h-[28rem]'>
                <img src={fondo} className="" width={'100%'} height={'100%'} title='background image' alt="background image" />*/}
            </div>
            <div className='mt-[-14rem] md:mt-[-27rem] '>
                <Header />
                <About />
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