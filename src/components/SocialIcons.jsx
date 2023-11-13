import Linkedin from "./imagenes/linkedin.svg"
import Mail from "./imagenes/mail.svg"
import Github from "./imagenes/github.svg"
import { Link } from "react-router-dom"


export default function SocialIcons() {

    return (
        <div className="flex flex-row gap-4 justify-center mt-5">
            <img src={Mail} alt="dirección de mail" />
            <img src={Linkedin} alt="Linkedin" />
            <img src={Github} alt="Linkedin" />

        </div >

    )

}