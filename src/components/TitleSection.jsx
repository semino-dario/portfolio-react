export default function TitleSection({ title, fondo }) {


    return (
        <h2 className="uppercase text-titulo text-2xl md:text-4xl z-10 opacity-100" style={{ backgroundColor: fondo }}>{title}</h2>
    )
}