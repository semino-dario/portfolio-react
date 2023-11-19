import Project from './Project'
import QuiltedImageList from './QuiltedImageList'
import tituloLudovica from './imagenes/tituloLudovica.svg'
import mascara from './imagenes/mascara.svg'

export default function Arteludovica() {

    return (

        <div className=" flex flex-col justify-around py-12 shadow-2xl bg-negroGris  md:flex-row md:px-4 "
        >
            <div>
                <div>
                    <img className='w-[340px] md:w-[700px]' src={tituloLudovica} alt="" />
                </div>

                <div className='p-2 rounded bg-blanco w-[340px] '>
                    <QuiltedImageList />
                </div>

            </div>
            <div className='flex flex-col-reverse md:flex-col' >
                <div >
                    <img className='w-[150px] mt-[30px]' src={mascara} alt="" />
                </div>
                <div className='md:mt-[80px]'>
                    <Project
                        imagenes={null}
                        generalInfo={'On this site, all the material from the Arteludovica Theater Company is available, of which I was a part several years ago. There are galleries of images, videos, texts, and PDF downloads. In addition to the main site, there are three sections or subsites corresponding to each of the theater productions premiered by the company. In each case, the design of the section varies to adapt to the aesthetics of the respective play.'}
                        techInfo={'This is the second site I developed with HTML, CSS, and Javascript on the frontend, along with a simple backend developed with PHP and a SQL database. The project involved a focus on design, leading me to delve deeper into CSS, Figma, and the creation of custom icons using SVG.'}
                        site={'https://arteludovica.com.ar/'}
                        repo={'https://github.com/semino-dario/arteludovica'}
                    />
                    <br />
                </div>
            </div>

        </div>
    )
}

