import Project from "./Project";
import compu2 from './imagenes/compu2.png'
import celular from './imagenes/celular.png'
import traducciones from './imagenes/traducciones.svg'
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";

export default function Traducciones() {

    const imagenes = [{ label: ' ', imgPath: compu2 }, { label: '', imgPath: celular }]

    return (
        <div>
            <div className=" w-[340px]   md:w-[450px]">
                <img src={traducciones} alt="" /></div>
            <br />
            <div className="flex flex-col justify-center md:flex-row md:h-[450px]">

                <div className="border-solid border-2 border-titulo rounded-xl shadow-lg p-1" >
                    <SwipeableTextMobileStepper
                        imagenes={imagenes}
                    />
                </div>
                <div className='mb-[10px] mt-[80px] '>
                    <Project
                        imagenes={null}
                        generalInfo={'This is the first site I developed. It`s a static site offering literary translation services.'}
                        techInfo={' The site was developed with Vanilla JavaScript, HTML and CSS with Bootstrap. The entire site is responsive. I have plans to migrate it to React and connect it to an API and a database, but I never seem to find the time to do it.'}
                        site={'https://traduccionesliterarias.com/'}
                        repo={'https://github.com/semino-dario/traduccionesWeb'}
                    />
                </div>
            </div>
        </div>
    )
}

