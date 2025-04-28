import OutlinedCard from "./Card";

import { cursos } from "../data";
import TitleSection from "./TitleSection";
import { Divider } from "@mui/material";
import formacion from "../assets/images/formacion.svg";

export default function Formacion() {
  return (
    <div id="formacion">
      <Divider textAlign="left">
        {" "}
        <img className="w-[150px]" src={formacion} alt="" />{" "}
        <TitleSection title={"Studies"} />
      </Divider>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justiy-around mt-[5%] md:w-[90%]">
          {cursos.map((item) => (
            <div key={item.curso} className="mb-[10px]">
              <OutlinedCard
                escuela={item.escuela}
                curso={item.curso}
                año={item.año}
                horas={item.horas}
                imagen={item.imagen}
                imagenes={item.credencial}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
