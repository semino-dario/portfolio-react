import Arrow from "./imagenes/flecha.svg"


export default function Acerca () {
    return (

        <section className="container mx-auto w-4/5 rounded font-extralight bg-azulClaro mt-16  p-5 pb-9">
            <p>
            Vengo del ámbito de la escritura y la edición de libros. Desde 2020 empecé a trabajar escribiendo contenidos para sitios web y desde fines de 2021 empecé a interesarme en el desarrollo web, principalmente Front-end y con algunas nociones básicas de Back-end. 
            </p>
            <div className=" mt-6 flex justify-end">
                <img src={Arrow} alt="icono flecha" className="w-8"/>
            </div>
        </section>

    )
}