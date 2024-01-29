import RetratoDario from "./imagenes/dario.webp";
import SocialIcons from "./SocialIcons";

const Header = () => {
    return (
        <div className="md:mb-[12rem]">
            <div className="flex mt-5  ">
                <div className="">
                    <img src={RetratoDario} className="rounded-full w-40 h-40 object-cover border-2 border-titulo md:w-[15rem] md:h-[15rem] " alt="Darío Semino's photo" />
                </div>
                <div className="w-62 flex flex-col items-center font-bold mt-14 ">
                    <h1 className="text-2xl uppercase  text-2xl text-titulo mt-[-3rem] md:text-6xl">Portfolio</h1>
                    <div className="text-center text-azulOscuro text-sm  md:flex md:flex-row md:gap-[0.9rem]">
                        <p className="md:text-xl text-fondo">Darío Semino</p>
                        <p className="md:text-xl text-fondo"> Web Dev / Frontend</p></div>
                    <div className="w-8 md:w-10">
                        <SocialIcons /></div>
                </div>

            </div>

        </div>
    )
}

export default Header;