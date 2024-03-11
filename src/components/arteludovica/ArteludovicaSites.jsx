import portadaArteludovica from './../imagenes/arteludovica/portada-arteludovica.png'
import portadaMdo from './../imagenes/arteludovica/portada-mdo.png'
import portadaTejedoras from './../imagenes/arteludovica/portada-tejedoras.png'
import portadaBanquete from './../imagenes/arteludovica/portada-banquete.png'
import portadaCelArteludovica from './../imagenes/arteludovica/portada-cel-arteludovica.png'
import portadaCelMdo from './../imagenes/arteludovica/portada-cel-mdo.png'
import portadaCelTejedoras from './../imagenes/arteludovica/portada-cel-tejedoras.png'
import portadaCelBanquete from './../imagenes/arteludovica/portada-cel-banquete.png'

export default function ArteludovicaSites() {


    const imagesDesktop = [portadaArteludovica, portadaMdo, portadaTejedoras, portadaBanquete];
    const imagesMobile = [portadaCelArteludovica, portadaCelMdo, portadaCelTejedoras, portadaCelBanquete];

    return (
        <div className={`rounded border-solid border-[0.5rem] border-blanco w-[90vw]  md:w-[52vw] h-[42rem] md:h-[32rem] overflow-auto`}>

            {/* images of desktop */}
            {
                imagesDesktop.map((image, index) => (
                    <img key={index} src={image} className='w-[100%] h-[100%] object-cover hidden md:block border-b-[0.3rem] border-b-solid border-b-blanco' alt="" />
                ))
            }

            {/* images of mobile */}
            {
                imagesMobile.map((image, index) => (
                    <img src={image} className='w-[100%] h-[100%] object-cover block md:hidden border-b-[0.3rem] border-b-solid border-b-blanco' alt="" />

                ))
            }
        </div>
    );

}