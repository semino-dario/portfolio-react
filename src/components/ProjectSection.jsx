import Project from "./Project";
import TitleSection from "./TitleSection";
import gerontovida from './imagenes/gerontovida-imagen.png'
import login from './imagenes/login.png'
import api from './imagenes/api.png'
import login2 from './imagenes/login-2.png'
import login3 from './imagenes/login-3.png'
import escritorio from './imagenes/escritorio.png'
import publicarCanasta from './imagenes/publicarCanasta.png'
import canastaBarra from './imagenes/canasta-barra.png'
import canastaTorta from './imagenes/canasta-torta.png'
import portadaGeronto from './imagenes/portadaGeronto.png'

import '../App.css'
import Arteludovica from "./Arteludovica";


export default function ProjectSection() {


    const imagenes = [
        { label: 'login', imgPath: login }, { label: 'reset password', imgPath: login2 }, { label: 'register', imgPath: login3 },
        { label: 'edit articles', imgPath: escritorio }, { label: 'publish charts', imgPath: publicarCanasta }, { label: 'canasta', imgPath: canastaBarra }, { label: 'canasta', imgPath: canastaTorta }]

    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <TitleSection
                    title={'Projects'}
                />
            </div>
            <br />
            <div className="container max-w-[100%] border-solid border-2 border-gray rounded">
                <div className="w-[350px]">
                    <img src={portadaGeronto} alt="Muestra del sitio Gerontovida" />
                </div>
                <div className=" flex flex-col  gap-[10px] max-w-[95%] p-6 md:flex-row justify-center ">
                    <Project
                        name={'- Public Site -'}
                        excerpt={'Articles, charts and information'}
                        image={gerontovida}
                        techInfo={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae architecto illo porro corrupti dignissimos quas veniam! At necessitatibus quam possimus accusamus eius provident aperiam quaerat. Ipsa nam alias cumque debitis."}
                        generalInfo={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae architecto illo porro corrupti dignissimos quas veniam! At necessitatibus quam possimus accusamus eius provident aperiam quaerat. Ipsa nam alias cumque debitis."}
                        site={"https://www.arteludovica.com.ar"}
                        repo={"https://github.com/semino-dario/arteludovica"}
                    />
                    <br />
                    <br />
                    <Project
                        // name={'- Login and desktop -'}
                        // excerpt={'Login with token and CRUD actions'}
                        // image={login}
                        imagenes={imagenes}
                        techInfo={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae architecto illo porro corrupti dignissimos quas veniam! At necessitatibus quam possimus accusamus eius provident aperiam quaerat. Ipsa nam alias cumque debitis."}
                        generalInfo={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae architecto illo porro corrupti dignissimos quas veniam! At necessitatibus quam possimus accusamus eius provident aperiam quaerat. Ipsa nam alias cumque debitis."}
                        site={"https://www.arteludovica.com.ar"}
                        repo={"https://github.com/semino-dario/arteludovica"}
                    />
                    <br />
                    <br />
                    <Project
                        name={'- Backend -'}
                        excerpt={'API with Node JS and Mongo DB'}
                        image={api}
                        techInfo={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae architecto illo porro corrupti dignissimos quas veniam! At necessitatibus quam possimus accusamus eius provident aperiam quaerat. Ipsa nam alias cumque debitis."}
                        generalInfo={"This API handles different kind of writen content, for example articles for different blog applications. It also has all the typital authentication functionalities for users with Jason Web Token (JWT). It was developped with Node.js, Express, and Mongo DB. This version is a sample of the real application, in which some functionalities such as password recovery email sending are disabled."}
                        site={"https://www.arteludovica.com.ar"}
                        repo={"https://github.com/semino-dario/arteludovica"}
                    />
                    <br />
                </div>
                <br />
            </div>
            <br /> <br />
            <Arteludovica />
        </div>
    )
}