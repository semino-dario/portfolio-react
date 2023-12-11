import { Divider } from "@mui/material";
import quien from './imagenes/quien.svg'
import TitleSection from "./TitleSection";
import DownloadCV from "./DownloadCV";

export default function Acerca() {
    return (
        <div className="flex flex-col mt-[50px] md:mt[-50px]">
            <Divider ><TitleSection title='About me' /> </Divider>
            <section className="container flex flex-row justify-center gap-4 w-4/5 rounded font-extralight bg-azulClaro mt-8  p-5 pb-9 shadow-lg md:w-[650px]">
                <img src={quien} className="w-[100px] hidden md:block" alt="" />
                <p>
                    My name is Darío Semino, and I'm from Argentina. I became interested in web development in late 2021. I took several courses and worked on personal and professional projects, with a primary focus on Frontend development using React. Additionally, I possess basic knowledge of Backend technologies such as Node.js, MongoDB, and SQL. You can find examples of the projects I've worked on here.
                    <br /> <br />
                    I also love literature, philosophy and learning languages. Besides Spanish, I'm fluent in English and French.
                </p>
            </section>
            <br />
            <div className="">
                <DownloadCV />
            </div>
        </div>

    )
}