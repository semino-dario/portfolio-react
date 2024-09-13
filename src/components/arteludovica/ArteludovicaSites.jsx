import portadaArteludovica from './../../assets/images/arteludovica/portada-arteludovica.png'
import portadaMdo from './../../assets/images/arteludovica/portada-mdo.png'
import portadaTejedoras from './../../assets/images/arteludovica/portada-tejedoras.png'
import portadaBanquete from './../../assets/images/arteludovica/portada-banquete.png'
import portadaCelArteludovica from './../../assets/images/arteludovica/portada-cel-arteludovica.png'
import portadaCelMdo from './../../assets/images/arteludovica/portada-cel-mdo.png'
import portadaCelTejedoras from './../../assets/images/arteludovica/portada-cel-tejedoras.png'
import portadaCelBanquete from './../../assets/images/arteludovica/portada-cel-banquete.png'

export default function ArteludovicaSites() {


    const imagesDesktop = [portadaArteludovica, portadaMdo, portadaTejedoras, portadaBanquete];
    const imagesMobile = [portadaCelArteludovica, portadaCelMdo, portadaCelTejedoras, portadaCelBanquete];

    return (
        <div className={`rounded border-solid border-[0.5rem] border-blanco w-[95vw]  md:w-[48vw] h-[29rem] md:h-[32rem] overflow-auto`}>

            <img src={portadaArteludovica} className='w-[100%] h-[100%] object-cover md:block border-b-[0.3rem] border-b-solid border-b-blanco' alt="Grupo de teatro Arteludovica" />


            {/* {
                imagesDesktop.map((image, index) => (
                    <img key={index} src={image} className='w-[100%] h-[100%] object-cover md:block border-b-[0.3rem] border-b-solid border-b-blanco' alt="" />
                ))
            } */}

            {/* {
                imagesMobile.map((image, index) => (
                    <img key={index} src={image} className='w-[100%] h-[100%] object-cover block md:hidden border-b-[0.3rem] border-b-solid border-b-blanco' alt="" />

                ))
            } */}
        </div>
    );

}