import { Fab } from "@mui/material";


export default function Acerca() {
    return (

        <div className="flex flex-col">
            <section className="container  w-4/5 rounded font-extralight bg-azulClaro mt-16  p-5 pb-9 shadow-lg md:w-[450px]">
                <p>

                    I started getting interested in web development in late 2021. I took some courses and worked on personal projects, focusing on Frontend development using React. I also have basic knowledge of Backend technologies like Node.js, MongoDB, and SQL. You can find some examples of the projects I worked on here.
                </p>

            </section>
            <br />
            <div className="">
                <Fab variant='extended' >Descargar CV</Fab>
            </div>
        </div>

    )
}