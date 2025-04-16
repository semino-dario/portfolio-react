import Project from './../Project'
import tituloLudovica from '../../assets/images//tituloLudovica.svg'
import mascaras from '../../assets/images/arteludovica/mascaras.png'
import ArteludoviaGallery from './ArteludoviaGallery'
import ArteludovicaSites from './ArteludovicaSites'

export default function Arteludovica() {

    return (

        <div className='shadow-2xl bg-negroGris pb-[5rem]'>
            <div className=" flex flex-col justify-around py-12 md:px-4 ">
                <div className='flex flex-col md:flex-row md:gap-[8rem]'>
                    <div>
                        <p className='text-5xl text-center md:hidden text-[#e9dcc2] font-extrabold'>Compañía <br /> Arteludovica</p>
                        <img className='w-[100%] md:w-[44rem] hidden md:block ' src={tituloLudovica} alt="" />
                    </div>

                    <div >
                        <img className='w-[250px] mt-[5px]' src={mascaras} alt="" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-[3rem]'>
                    <ArteludovicaSites />
                    <Project
                        imagenes={null}
                        generalInfo={'On this site, all the material from the Arteludovica Theater Company is available. There are galleries of images, videos and PDF downloads. There are also three sections or subsites corresponding to each of the theater productions premiered by the company. In each case, the design of the section varies to adapt to the aesthetics of the respective play.'}
                        techInfo={'This is the second site I developed with HTML, CSS, and Javascript on the frontend, along with a simple backend developed with PHP and a SQL database. The project involved a focus on design, leading me to go deeper into CSS, Figma, and the creation of custom icons using SVG.'}
                        site={'http://www.arteludovica.com.ar/'}
                        repo={'https://github.com/semino-dario/arteludovica'}
                    />
                    <br />
                </div>
            </div>
            <br /> <br />
            <ArteludoviaGallery />
        </div>
    )
}

