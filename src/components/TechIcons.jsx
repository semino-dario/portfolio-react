import jsIcons from './imagenes/techlogos/3.svg'
import CSSIcons from './imagenes/techlogos/4.svg'
import DBIcons from './imagenes/techlogos/5.svg'
import HTMLIcons from './imagenes/techlogos/html.svg'
import otrosLogos from './imagenes/techlogos/6.svg'
import otrosLogos2 from './imagenes/techlogos/7.svg'
import TitleSection from './TitleSection';

export default function techInfo() {


    return (
        <div>
            <br />
            <div className='bg-fondoAzul bg-no-repeat bg-cover py-[18rem]'>
                <div className=" bg-azulOscuro mt-[5.5rem] w-[95%] border-solid border-2 p-1 border-azulClaro rounded-lg md:w-[55%]">
                    <div className='flex flex-col items-center'>
                        <div className='mt-[2rem]'>  <TitleSection
                            title='Main technologies'
                            fondo='#033F63'
                        /></div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <img className='' src={jsIcons} alt="" />
                    <br />
                    <hr />
                    <img className='' src={CSSIcons} alt="" />
                    <br />
                    <hr />
                    <img className='' src={DBIcons} alt="" />
                    <br />
                    <hr />
                    <img className='w-[25%]  mt-[1.2rem] mb-[1.2rem] md:w-[9.4rem]' src={HTMLIcons} alt="" />
                </div>
                <br />
                <div className='bg-azulOscuro w-[95%] border-solid mt-[2rem] border-2  border-azulClaro rounded-lg md:w-[50%]'>
                    <div className='flex flex-col justify-center items-center'>
                        < p className='text-titulo text-[1.5rem] md:text-[2.2rem]'>A few more tools:</p>
                    </div>
                    <img src={otrosLogos} className="md:w-[80%] " alt="" />
                    <img src={otrosLogos2} className=" " alt="" />
                </div>
                <br />
                <br />
            </div>
        </div>
    );
}