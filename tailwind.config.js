
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        colors: {
            titulo: "#F7567C",
            azulMedio: "#28666E",
            azulClaro: "#99E1D9",
            azulOscuro: "#033F63",
            fondo: "#FCFCFC",
            verde: "#C8F8C9",
            negroGris: 'rgb(23 23 23)',
            blanco: '#fff'


        },
        extend: {

            backgroundImage: {
                'fondoAzul': "url('./components/imagenes/techlogos/fondo.svg')",
                'triangulos': "url('./components/imagenes/triangulos.svg')",
                'fondoTrans': "url('./components/imagenes/fondoTrans.svg')"

            }
        },
    },
    plugins: [],
}
