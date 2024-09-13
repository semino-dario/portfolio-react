import { useEffect, useRef, useState } from 'react'
import galeria1 from './../../assets/images/arteludovica/galeria-1.jpeg'
import galeria2 from './../../assets/images/arteludovica/galeria-2.jpeg'
import galeria3 from './../../assets/images/arteludovica/galeria-3.jpeg'
import galeria4 from './../../assets/images/arteludovica/galeria-4.jpeg'
import galeria5 from './../../assets/images/arteludovica/galeria-5.jpeg'
import galeria6 from './../../assets/images/arteludovica/galeria-6.jpeg'
import galeria7 from './../../assets/images/arteludovica/galeria-7.jpeg'

export default function () {

    const [photo, setPhoto] = useState(0)
    const [intervalId, setIntervalId] = useState(null);
    const containerRef = useRef(null);

    const photos = [galeria1, galeria2, galeria3, galeria4, galeria5, galeria6, galeria7]

    useEffect(() => {
        const id = setInterval(() => {
            setPhoto(prevPhoto => (prevPhoto + 1) % photos.length)
        }, 3000);
        setIntervalId(id);

        return () => clearInterval(id);
    }, [photos.length]);

    useEffect(() => {
        const container = containerRef.current;
        const imageWidth = container.offsetWidth / photos.length;
        const scrollPos = (photo - 1) * imageWidth * 4; // Scroll one position to the left
        container.scrollTo({
            left: scrollPos,
            behavior: 'smooth'
        });
    }, [photo]);


    const handleClick = (index) => {
        setPhoto(index);
        clearInterval(intervalId);
        const newIntervalId = setInterval(() => { // Start interval again after it's cleared
            setPhoto(prevPhoto => (prevPhoto + 1) % photos.length);
        }, 3000);
        setIntervalId(newIntervalId); // Update intervalId state

        const container = containerRef.current;
        if (container) {
            const imageWidth = container.offsetWidth / photos.length;
            const scrollPos = index * imageWidth - (container.offsetWidth / 2 - imageWidth / 2);
            container.scrollTo({
                left: scrollPos,
                behavior: 'smooth'
            });
        }

    };



    return (
        <div className="">
            <div className='' >
                <img className={`w-[80vw] h-[35rem] z-0  object-cover border-solid border-8 border-[#FFFFFF] rounded-lg`} src={photos[photo]} alt="main image" />
            </div>
            <div ref={containerRef} className="flex-row gap-4 overflow-auto w-[70vw] mt-[-4rem] flex " >
                {
                    photos.map((image, index) => (

                        <img key={index} onClick={() => handleClick(index)} src={image} className={` z-10 object-cover cursor-pointer w-[8rem] md:w-[9rem] h-[15rem] border-solid border-2 ${index !== photo ? 'border-[#FFFFFF]' : 'border-[#F7567C]'} ${index === 0 && 'object-left'}`} alt="" />
                    )
                    )
                }
            </div>
        </div>
    )
}