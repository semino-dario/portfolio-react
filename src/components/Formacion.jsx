import OutlinedCard from "./Card";
import udemy from './imagenes/udemy.svg'
import it from './imagenes/it.png'
import p5 from './imagenes/p5.png'
import credencialP5 from './imagenes/credenciales/credencial-p5.png'
import credencialUdemy from './imagenes/credenciales/credencial-udemy.png'
import credencialIt from './imagenes/credenciales/credencial-it.png'
import TitleSection from "./TitleSection";
import { Button, Divider } from "@mui/material";
import formacion from './imagenes/formacion.svg'
import { useState } from "react";



export default function Formacion() {

    const [imagen, setImagen] = useState(false)
    const [credencial, setCredencial] = useState(0)

    const cursos = [{ escuela: 'Udemy', curso: 'Node.js - The Complete RESTful API Masterclass', año: '2023', horas: '11 hs', imagen: udemy, id: 2 }, { escuela: 'Educación IT', curso: 'React.JS Developer', año: '2023', horas: '36 hs', imagen: it, id: 1 },
    { escuela: 'Plataforma 5', curso: 'Scrum Master Program / Curso Introductorio de Programación', año: '2022', horas: '54 hs', imagen: p5, id: 0 }
    ]

    const credenciales = [credencialP5, credencialIt, credencialUdemy]

    return (

        <div id='formacion'>
            <Divider textAlign="left"> <img className="w-[150px]" src={formacion} alt="" /> <TitleSection
                title={'Studies'}
            />
            </Divider>
            <div>  {
                imagen ?
                    <div className="flex flex-col gap-4 justify-center items-center h-[100vh]  w-[100vw]">
                        <img className='[w-70%] md:h-[600px] cover ' src={credenciales[credencial]} alt="" />
                        <div>
                            <Button onClick={() => setImagen(false)} variant="contained" color="error">
                                Cerrar
                            </Button>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col md:flex-row justiy-around mt-[5%] md:w-[80%]">
                        {cursos.map((item) => (
                            <div key={item.curso} className='w-[320px] h-[320px]'>
                                <OutlinedCard
                                    escuela={item.escuela}
                                    curso={item.curso}
                                    año={item.año}
                                    horas={item.horas}
                                    imagen={item.imagen}
                                    verCredencial={() => { setImagen(true), setCredencial(item.id) }}
                                />
                            </div>))}
                    </div>}
            </div>
        </div>
    )
}