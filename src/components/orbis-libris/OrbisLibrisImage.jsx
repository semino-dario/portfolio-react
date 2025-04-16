import { useEffect, useRef, useState } from "react";
// import orbis1 from "./../../assets/images/biblioteca-orbis-libris.jpg"
// import orbis2 from "./../../assets/images/cartel-orbis-libris.jpg"
import useInViewport from './../UseInViewport';

export default function OrbisLibrisImage() {
    const [titleOrbis, setTitleOrbis] = useState(false)
    const containerRef = useRef(null);
    const inViewport = useInViewport(containerRef);


    useEffect(() => {
        if (inViewport) {
            setTimeout(() => setTitleOrbis(true), 2000)
        }
    }, [inViewport]

    )



    return (
        <div className=" bg-[#000000] flex flex-col justify-center align-center gap-6 py-[4rem]">
            {/* <div ref={containerRef} className=" relative w-[90vw] md:w-[50vw]">
                <div className="absolute ">
                    <img className={'w-[100%]'} src={orbis2} alt="" />
                </div>
                <div className="absolute">
                    <img className={`w-[100%] transition-opacity transform ${titleOrbis ? 'opacity-0 duration-1000' : 'opacity-100'}`} src={orbis1} alt="" />
                </div>
            </div> */}

            <div className='mt-[70%] md:mt-[43%] flex flex-col justify-center align-center text-[#FFFFFF] gap-6'>
                <p className=" text-azulClaro text-center font-extrabold text-4xl ">Do you like books?</p>
                <div className='text-center font-serif text-xl transition-opacity transform px-4 flex flex-col justify-center items-center gap-2'>
                    <p >My personal website for book reviews.</p> <p> It was originally developed with Wordpress, and then I re-built it using Next.js with Typescript. <br /></p>
                </div>
                <br />
                <a href="https://orbislibris.netlify.app/" target="_blank" className="text-xl text-titulo hover:text-azulClaro"> - visit site -</a>
            </div>
        </div>

    );
}