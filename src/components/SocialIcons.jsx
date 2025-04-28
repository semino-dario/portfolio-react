import Linkedin from "../assets/images/linkedin.svg";
import Mail from "../assets/images/mail.svg";
import Github from "../assets/images/github.svg";

export default function SocialIcons() {
  return (
    <div className="flex flex-row gap-4 justify-center mt-5">
      <a href="mailto:dariomartinsemino@gmail.com" target="_blank">
        {" "}
        <div className="w-[30px] md:w-[55px]">
          <img src={Mail} alt="Mail" />{" "}
        </div>
      </a>

      <a href="https://linkedin.com/in/dario-semino" target="_blank">
        {" "}
        <div className="w-[30px] md:w-[55px]">
          <img src={Linkedin} alt="Linkedin" />{" "}
        </div>
      </a>
      <a href="https://github.com/semino-dario" target="_blank">
        {" "}
        <div className="w-[30px] md:w-[50px]">
          {" "}
          <img src={Github} alt="Github" />{" "}
        </div>
      </a>
    </div>
  );
}
