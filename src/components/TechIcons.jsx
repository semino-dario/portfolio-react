import { Divider } from '@mui/material';
import jsIcons from './imagenes/techlogos/3.svg'
import CSSIcons from './imagenes/techlogos/4.svg'
import DBIcons from './imagenes/techlogos/5.svg'
import HTMLIcons from './imagenes/techlogos/html.svg'
import otrosLogos from './imagenes/techlogos/6.svg'
import TitleSection from './TitleSection';

export default function techInfo() {


    return (
        <div>
            <br />
            <div className='bg-fondoAzul bg-no-repeat bg-cover py-[200px]'>
                <div className="bg-azulOscuro mt-[90px] w-[95%] border-solid border-2 p-1 border-azulClaro rounded-lg md:w-[800px]">
                    <div className='flex flex-col items-center'>
                        <div className='mt-[30px]'>  <TitleSection
                            title='Main technologies:'
                            fondo='#033F63'
                        /></div>
                    </div>
                    <br />
                    <img className='' src={jsIcons} alt="" />
                    <br />
                    <img className='' src={CSSIcons} alt="" />
                    <img className='' src={DBIcons} alt="" />
                    <img className='w-[25%] ml-[-3%] mt-[20px] mb-[20px] md:w-[150px] md:ml-[70px]' src={HTMLIcons} alt="" />
                </div>
                <br />
                <div className='bg-azulOscuro w-[95%] border-solid mt-[30px] border-2 p-2 border-azulClaro rounded-lg md:w-[800px]'>
                    <div className='flex flex-col justify-center items-center'>
                        < p className='text-titulo text-[25px] md:text-[35px]'>A few more tools:</p>
                    </div>
                    <img src={otrosLogos} className="md:w-[80%] " alt="" />
                </div>
                <br />
                <br />
            </div>
        </div>
    );
}