import Project from "./Project";
import gerontovida from './../assets/images/gerontovida/gerontovida-imagen.webp'
import login from './../assets/images/gerontovida/login.webp'
import api from './../assets/images/gerontovida/api.webp'
import login2 from './../assets/images/gerontovida/login-2.png'
import login3 from './../assets/images/gerontovida/login-3.png'
import escritorio from './../assets/images/gerontovida/escritorio.png'
import publicarCanasta from './../assets/images/gerontovida/publicarCanasta.png'
import canastaBarra from './../assets/images/gerontovida/canasta-barra.png'
import canastaTorta from './../assets/images/gerontovida/canasta-torta.png'
import portadaGeronto from './../assets/images/gerontovida/portadaGeronto.svg'
import '../App.css'


export default function Gerontovida() {


    const imagenes = [
        { label: 'login', imgPath: login }, { label: 'reset password', imgPath: login2 }, { label: 'register', imgPath: login3 },
        { label: 'edit articles', imgPath: escritorio }, { label: 'publish charts', imgPath: publicarCanasta }, { label: 'charts', imgPath: canastaBarra }, { label: 'donut chart', imgPath: canastaTorta }]

    return (
        <div>
            <div className="flex flex-col justify-center items-center">

                <br />
                <div className="container max-w-[100%]">
                    <div className="w-[21.2rem]">
                        <img src={portadaGeronto} alt="Muestra del sitio Gerontovida" />
                    </div>
                    <div className=" grid grid-cols-1 gap-[10px] max-w-[95%] p-6 md:grid-cols-2 lg:grid-cols-3 justify-around ">
                        <div className="" >
                            <p className="text-center text-titulo font-bold"> - PUBLIC WEBSITE - </p>
                            <br />
                            <Project
                                name={'- www.gerontovida.org.ar -'}
                                excerpt={'Articles, charts and information'}
                                image={gerontovida}
                                generalInfo={"This is the Gerontovida Association website. This is the public side of the website. Here you can read articles and access information about the situation of older adults in Argentina and Latin America."}
                                techInfo={"The front-end is developed using React, React-Router, Redux, ReactBootstrap, Styled-Components, and React-Chart for the charts, among other technologies. The entire public section of the site is responsive."}
                                site={"https://gerontovida.org.ar/"}
                                repo={"https://github.com/semino-dario/gerontovida"}
                            />
                        </div>
                        <div className="mt-[2rem] md:mt-0">
                            <p className="text-center text-titulo font-bold"> - LOGIN & DESKTOP - </p>
                            <br />
                            <Project
                                imagenes={imagenes}
                                techInfo={"This is the login section of the site. User authentication and session management are carried out through a token generated using JSON Web Tokens (JWT). API queries are conducted using Axios. This section is not responsive."}
                                generalInfo={"This is the private side of the website. Public access is not allowed to this section. Here it's possible to perform operations to register as a user and access the dashboard to publish, edit, or delete articles in the news section. It's also possible to recover the password and access information about the logged-in user. In the Canasta section, it's possible to publish, edit, or delete any of the Canasta's charts. Additionally, you can upload a PDF file with information about the chart, which can be downloaded later."}
                                repo={"https://github.com/semino-dario/gerontovida"}
                            /></div>
                        <div className="mt-[2rem] lg:mt-0">
                            <p className="text-center text-titulo font-bold"> - BACKEND - </p>
                            <br />
                            <Project
                                name={'- API RESTful-'}
                                excerpt={'API with Node JS and Mongo DB'}
                                image={api}
                                techInfo={"This API was developed with Node.js, Exprees. The databse is MongoDB. Authentication functionalities are handled with JWT (JASON WEB TOKEN). The images for articles and PDF files are loaded into an AWS S3 bucket."}
                                generalInfo={"This is the API that handles the connection to the database. It handles different kind of writen content, for example articles. You can upoad, download and delete files. It also has all the typital authentication functionalities for users."}
                                docs={true}
                                site={"https://api-docs.netlify.app/"}
                                repo={"https://github.com/semino-dario/api-contenidos"}
                            />
                        </div>
                        <br />
                    </div>
                    <br />
                </div>
                <br /> <br />
            </div>
        </div>

    )
}