import Project from "./Project";
import compu2 from './imagenes/compu2.png'
import celular from './imagenes/celular.png'
import traducciones from './imagenes/traducciones.svg'
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";

export default function Traducciones() {

    const imagenes = [{ label: '', imgPath: compu2 }, { label: '', imgPath: celular }]

    return (
        <div className="flex flex-col justify-center md:flex-row md:h-[450px]">
            <div className="border-solid border-2 border-titulo rounded-xl shadow-lg p-1" >
                <SwipeableTextMobileStepper
                    imagenes={imagenes}
                />
            </div>
            <div className='mb-[10px] '>
                <div className=" w-[340px]   md:w-[450px]">
                    <img src={traducciones} alt="" /></div>
                <Project
                    imagenes={null}
                    generalInfo={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis porro saepe necessitatibus nesciunt atque aliquam quis, architecto itaque quam voluptate exercitationem. Totam, dolore accusamus animi ullam officiis molestiae facere?'}
                    techInfo={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis porro saepe necessitatibus nesciunt atque aliquam quis, architecto itaque quam voluptate exercitationem. Totam, dolore accusamus animi ullam officiis molestiae facere?'}
                />
            </div>
        </div>
    )
}

