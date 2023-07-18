import RetratoDario from "./imagenes/dario.jpeg";
import SocialIcons from "./SocialIcons";

const Header = () => {
    return(
        <div className="flex  justify-around mt-5">
        <div className="">
            <img src={RetratoDario} className="rounded-full w-40 h-40 object-cover border-2 border-titulo  " alt="retrato de Darío Semino" />
        </div>
        <div className="w-62 flex flex-col items-center font-bold mt-3">
        <h1 className="text-2xl uppercase text-titulo text-2xl">Portfolio</h1>
            <p className="text-center text-azulOscuro text-sm mt-2">Darío Semino <br />
            Desarrollo Web <br />
             Frontend</p> 
             <SocialIcons />

        </div>
      </div>
    )
}

export default Header;