import OutlinedCard from "./Card";
import udemy from './imagenes/udemy.svg'
import it from './imagenes/it.png'
import p5 from './imagenes/p5.png'
import credencialP5 from './imagenes/credenciales/credencial-p5.webp'
import credencialUdemy from './imagenes/credenciales/credencial-udemy.webp'
import credencialIt from './imagenes/credenciales/credencial-it.webp'
import TitleSection from "./TitleSection";
import { Divider } from "@mui/material";
import formacion from './imagenes/formacion.svg'



export default function Formacion() {


    const cursos = [{ escuela: 'Udemy', curso: 'Node.js - The Complete RESTful API Masterclass', año: '2023', horas: '11 hs', imagen: udemy, credencial: credencialUdemy, id: 2 }, { escuela: 'Educación IT', curso: 'React.JS Developer', año: '2023', horas: '36 hs', imagen: it, credencial: credencialIt, id: 1 },
    { escuela: 'Plataforma 5', curso: 'Scrum Master Program / Curso Introductorio de Programación', año: '2022', horas: '54 hs', imagen: p5, credencial: credencialP5, id: 0 }
    ]


    return (

        <div id='formacion'>
            <Divider textAlign="left"> <img className="w-[150px]" src={formacion} alt="" /> <TitleSection
                title={'Studies'}
            />
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
                        </div>))}
                </div>
            </div>
        </div>
    )
}