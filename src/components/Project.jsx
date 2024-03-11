import { useState } from "react";
import { Collapse } from "react-collapse";
import '../App.css'
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";

export default function Project({ name, image, excerpt, techInfo, generalInfo, site, repo, imagenes, docs }) {

    const [openPanel, setOpenPanel] = useState(false)
    const [openPanel2, setOpenPanel2] = useState(false)

    const handleCLick = () => {
        setOpenPanel(!openPanel)
        setOpenPanel2(false)
    }
    const handleCLick2 = () => {
        setOpenPanel2(!openPanel2)
        setOpenPanel(false)
    }


    return (
        <div className="container flex flex-col  w-72 shrink-0 mx-auto">
            {imagenes === null ?
                <></>
                :
                <div className="flex flex-col items-center rounded border-2 border-titulo bg-verde mb-[15px] ">
                    {imagenes ?
                        <SwipeableTextMobileStepper
                            imagenes={imagenes}
                        /> :
                        <img src={image} className=" h-[350px] object-cover" alt="" />}
                    <h5>{name}</h5>
                    <p>{excerpt}</p>
                </div>
            }
            <div className="rounded-xl h-[50px] w-full  bg-azulOscuro flex items-center justify-around mt-[15px] " style={{ color: 'gray' }}>
                <a href={site} className="hover:text-titulo" target="_blank">{site ? !docs ? "visit site" : "visit docs" : ""}</a> <a href={repo} target="_blank" className="flex flex-row gap-3 items-center justify-center hover:text-titulo" > visit repo </a>
            </div>

            <div onClick={handleCLick} className={`bg-azulClaro rounded-xl h-[50px] w-full flex items-center justify-around mt-[15px] cursor-pointer ${!generalInfo && "hidden"}`}>
                <p >General information</p> <p>{!openPanel ? '+' : '-'}</p>
            </div>
            <Collapse className="ReactCollapse--collapse" isOpened={!openPanel ? false : true}>
                <div className="ReactCollapse--content bg-azulClaro rounded-xl p-[10px]  overflow-hidden mt-[15px]">
                    {generalInfo}
                </div>
            </Collapse>
            <div onClick={handleCLick2} className={`rounded-xl h-[50px] w-full bg-azulMedio flex items-center mt-[15px] justify-around cursor-pointer ${!techInfo && "hidden"}`}>
                <p style={{ color: 'black' }}> Technical information</p> <p>{!openPanel2 ? '+' : '-'}</p>
            </div>
            <Collapse className="ReactCollapse--collapse" isOpened={!openPanel2 ? false : true}>
                <div className="ReactCollapse--content bg-azulMedio rounded-xl  p-[10px] overflow-hidden mt-[15px]">
                    {techInfo}
                </div>
            </Collapse>


        </div>

    );
}


