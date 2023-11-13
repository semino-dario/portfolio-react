import RetratoDario from "./imagenes/dario.jpeg";
import SocialIcons from "./SocialIcons";

const Header = () => {
    return (
        <div className="md:mb-[200px]">
            <div className="flex mt-5  ">
                <div className="">
                    <img src={RetratoDario} className="rounded-full w-40 h-40 object-cover border-2 border-titulo md:w-60 md:h-60 " alt="Darío Semino's photo" />
                </div>
                <div className="w-62 flex flex-col items-center font-bold mt-14 md:ml-[-100px]">
                    <h1 className="text-2xl uppercase  text-2xl text-titulo mt-[-50px] md:text-6xl">Portfolio</h1>
                    <div className="text-center text-azulOscuro text-sm  md:flex md:flex-row md:gap-[10px]">
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