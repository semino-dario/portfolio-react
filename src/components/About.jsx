import { Divider } from "@mui/material";
import TitleSection from "./TitleSection";
import DownloadCV from "./DownloadCV";

export default function About() {
    return (
        <div className="flex flex-col mt-[50px] md:mt[-50px]">
            <Divider ><TitleSection title='About me' /> </Divider>
            <section className="container flex flex-row justify-center gap-4 w-4/5 rounded font-light bg-azulClaro mt-8  p-5 pb-9 shadow-lg md:w-[650px]">
                <p>
                    I'm from Argentina. I became interested in web development in late 2021. I took several courses and worked on personal and professional projects, with a primary focus on Frontend development using React.
                    <br /> <br />
                    Additionally, I have an interest in design. Whenever possible, I enjoy creating my own designs using Figma, CSS and AI tools.
                    <br /> <br />
                    I also love literature, philosophy and learning languages. Besides Spanish, I'm fluent in English and French.
                </p>
            </section>
            <div className="mt-[2rem]">
                <DownloadCV />
            </div>
        </div>

    )
}