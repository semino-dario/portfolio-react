import SocialIcons from "./SocialIcons";

export default function Colofon() {

    return (
        <div className='flex flex-col items-center justify-center w-[90%] md:w-[600px]'>
            <p className='text-6xl text-titulo'>Colofón</p>
            <p>
                <br />
            </p>
            <p className='text-2xl text-center'>Este portfolio fue desarrollado utilizando React con Vite. Los estilos fueron creados con Tailwind y Material UI. El diseño fue creado en Figma, con algunas imágenes en SVG tomadas de Canva. Este sitio no posee Backend. Gracias por la visita. </p>
            <br />
            <br />
            <div className="w-14" >
                <SocialIcons />
            </div>

        </div>

    )
}