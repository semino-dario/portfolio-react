import Project from "./Project";
import compu2 from './imagenes/compu2.png'
import celular from './imagenes/celular.png'
import traducciones from './imagenes/traducciones.svg'
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import typewriter from './imagenes/typewriter.jpg'
import Typewriter from "./Typewriter";

export default function Traducciones() {

    const imagenes = [{ label: ' ', imgPath: compu2 }, { label: '', imgPath: celular }]

    return (
        <div className="w-[100%] md:w-[90%] lg:w-[80%] mb-[8rem] ">
            <div className=" w-[90%]   md:w-[34rem]">
                <img src={traducciones} alt="" />
            </div>
            <br />
            <div className="flex flex-col  md:flex-row justify-center gap-[2rem]">

                <div className="flex flex-col border-solid border-2 border-titulo rounded-xl shadow-lg pt-2 h-[30rem] w-[20rem] md:w-[26rem] mt-[2rem] " >
                    <SwipeableTextMobileStepper
                        imagenes={imagenes}
                    />
                </div>

                <div className='flex flex-col mb-[10px] md:w-[20rem] '>
                    <div className="h-[8rem] md:h-[10rem] p-2 md:p-0 z-10">  <Typewriter
                        text={"In the good old days, my first website with code. Only HTML, JavaScript, and CSS with Bootstrap."}
                    /></div>
                    <img src={typewriter} className="w-[20rem] mb-[-2rem]z-0" alt="" />
                    <Project
                        imagenes={null}
                        site={'https://traduccioneslierarias.netlify.app/'}
                        repo={'https://github.com/semino-dario/traduccionesWeb'}
                    />
                </div>
            </div>
        </div >
    )
}

