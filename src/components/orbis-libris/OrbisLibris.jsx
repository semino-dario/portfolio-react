import LineOrnamentOrbisLibris from "../../assets/svg/lineOrnamentOrbisLibris";
import Project from "../Project";

export default function OrbisLibris() {
  return (
    <div className={"bg-[#111827] pb-10 "}>
      <h2 className="font-[font-family: Arial, Helvetica, sans-serif;]  text-[#F7567C] font-semibold text-[1.5rem] text-center w-[fit-content]  mb-[8rem] p-[1rem]  border-b md:border-r outline-solid border-[#F7567C]  lg:text-[2.3rem]">
        and at last the begining of everything...
      </h2>
      <div className="md:flex md:justify-center md:items-center md:p-20 md:pb-40 md:pt-0">
        <div className="mb-[2rem]">
          <img src="/images/orbis-logo.png" alt="" />

          <h1 className="font-[font-family: Arial, Helvetica, sans-serif;] text-[#fff] font-bold text-[2.5rem] text-center lg:text-[5rem]">
            ORBIS LIBRIS
          </h1>
          <LineOrnamentOrbisLibris />
        </div>
        <Project
          site={"https://orbislibris.com/"}
          repo={"https://github.com/semino-dario/orbis-libris"}
          imagenes={[
            { label: "light-mode", imgPath: "/images/orbis-6.png" },
            { label: "dark-mode", imgPath: "/images/orbis-5.png" },
          ]}
          generalInfo={
            "First website ever made by me, in 2021, for pubilsing books reviews and articles about literature and philosophy."
          }
          techInfo={
            "First version of the website was made with Wordpress and Elementor. Then I made a complete remake with Next.js and SASS. This was the fist time I've used Next.js with Page Router and Typescript."
          }
        />
      </div>
    </div>
  );
}
