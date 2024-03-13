import { useEffect, useRef, useState } from "react";
import orbis1 from "./../imagenes/biblioteca-orbis-libris.jpg"
import orbis2 from "./../imagenes/cartel-orbis-libris.jpg"
//import orbis3 from "./../imagenes/biblioteca-sola.png"
import useInViewport from './../UseInViewport';
//import './orbis.css'

export default function OrbisLibrisImage() {
    const [titleOrbis, setTitleOrbis] = useState(false)
    const [textOrbis, setTextOrbis] = useState(false)
    const containerRef = useRef(null);
    const inViewport = useInViewport(containerRef);


    useEffect(() => {
        if (inViewport) {
            setTimeout(() => setTitleOrbis(true), 2000)
        }
    }, [inViewport]

    )



    return (
        <div className=" bg-[#000000] flex flex-col justify-center align-center py-[4rem]">
            <div ref={containerRef} className=" relative w-[90vw] md:w-[50vw]">
                <div className="absolute ">
                    <img className={'w-[100%]'} src={orbis2} alt="" />
                </div>
                <div className="absolute">
                    <img className={`w-[100%] transition-opacity transform ${titleOrbis ? 'opacity-0 duration-1000' : 'opacity-100'}`} src={orbis1} alt="" />
                </div>
            </div>
            <br />
            <br />
            <div className='mt-[70%] md:mt-[40%] flex flex-col justify-center align-center text-[#FFFFFF]'>
                <p className=" text-azulClaro text-center font-extrabold text-4xl ">Do you like books?</p>
                <br />
                <p className='text-center font-serif text-xl transition-opacity transform'>My personal site for book reviews. <br /> Built with Wordpress and Elementor.</p>
                <br />
                <a href="https://orbislibris.com/" target="_blank" className="text-xl text-titulo hover:text-azulClaro"> - visit site -</a>
            </div>
        </div>

    );
}