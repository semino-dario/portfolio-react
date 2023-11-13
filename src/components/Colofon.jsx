import SocialIcons from "./SocialIcons";

export default function Colofon() {

    return (
        <div className='flex flex-col items-center justify-center w-[90%] md:w-[600px]'>
            <p className='text-6xl text-titulo'>Colophon</p>
            <p>
                <br />
            </p>
            <p className='text-2xl text-center'>
                This portfolio was developed using React with Vite. The styles were created with Tailwind and Material UI. The design was crafted in Figma, with some images in SVG taken from Canva. Thank you for visiting. </p>
            <br />
            <br />
            <div className="w-14" >
                <SocialIcons />
            </div>

        </div>

    )
}