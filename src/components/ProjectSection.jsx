import { Divider } from "@mui/material";
import "../App.css";
import Arteludovica from "./arteludovica/Arteludovica";
import Gerontovida from "./Gerontovida";
import Traducciones from "./Traducciones";
import TitleSection from "./TitleSection";
import proyectos from "../assets/images/proyectos2.svg";
import OrbisLibrisImage from "./orbis-libris/OrbisLibrisImage";
import OrbisLibris from "./orbis-libris/OrbisLibris";

export default function ProjectSection() {
  return (
    <div className="mt-10 mb-10 md:mb-16">
      <Divider textAlign="left">
        <div className="flex flex-row items-center gap-2 ">
          <img className="w-[100px]" src={proyectos} alt="" />
          <TitleSection title={"Projects"} fondo={"#FCFCFC"} />{" "}
        </div>
      </Divider>
      <Gerontovida />
      <br /> <br />
      <Arteludovica />
      <br /> <br /> <br /> <br />
      <Traducciones />
      <br /> <br />
      <OrbisLibris />
    </div>
  );
}
