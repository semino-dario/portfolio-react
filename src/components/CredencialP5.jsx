import { Button } from '@mui/material'
import p5 from './imagenes/credenciales/credencial-p5.png'
import udemy from './imagenes/credenciales/credencial-udemy.png'
import it from './imagenes/credenciales/credencial-it.png'

import { Link, useParams } from 'react-router-dom'

export default function CredencialP5() {

    const { id } = useParams('id')

    const credenciales = [p5, it, udemy]


    return (
        <div className="flex flex-col gap-4 justify-center items-center h-[100vh] bg-fondoTrans bg-no-repeat bg-cover">
            <img className='[w-70%] md:h-[600px] cover ' src={credenciales[id]} alt="" />
            <div>
                <Link to="/"> <Button variant="contained" color="error">
                    volver
                </Button></Link>
            </div>
        </div>
    )
}