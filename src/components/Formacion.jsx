import OutlinedCard from "./Card";
import udemy from './imagenes/udemy.svg'
import it from './imagenes/it.png'
import p5 from './imagenes/p5.png'
import TitleSection from "./TitleSection";
import { Divider } from "@mui/material";
import formacion from './imagenes/formacion.svg'

export default function Formacion() {

    const cursos = [{ escuela: 'Udemy', curso: 'Node.js - The Complete RESTful API Masterclass', año: '2023', horas: '11 horas', imagen: udemy }, { escuela: 'Educación IT', curso: 'React.JS Developer', año: '2023', horas: '36 horas', imagen: it },
    { escuela: 'Plataforma 5', curso: 'Scrum Master Program / Curso Introductorio de Programación', año: '2022', horas: '54 horas', imagen: p5 }
    ]

    return (

        <div>
            {/* <img src={formacion} className="w-[150px] ml-[160px]" alt="" /> */}
            <Divider textAlign="left"> <img className="w-[150px]" src={formacion} alt="" /> <TitleSection
                title={'Studies'}
            />
            </Divider>
            <br />
            <div className="flex flex-col md:flex-row justiy-around mt-[5%] md:w-[80%]">
                {cursos.map((item, index) => (
                    <div className='w-[320px] h-[320px]'>
                        <OutlinedCard
                            escuela={item.escuela}
                            curso={item.curso}
                            año={item.año}
                            horas={item.horas}
                            imagen={item.imagen}
                        />

                    </div>))}
            </div>
        </div>
    )
}