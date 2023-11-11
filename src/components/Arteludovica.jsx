import Project from './Project'
import QuiltedImageList from './QuiltedImageList'
import tituloLudovica from './imagenes/tituloLudovica.svg'
import mascara from './imagenes/mascara.svg'

export default function Arteludovica() {

    return (

        <div className=" flex flex-col justify-around py-12 shadow-2xl bg-negroGris md:h-[730px] md:flex-row md:px-4 "
        >
            <div>
                <div>
                    <img className='w-[340px] md:w-[700px]' src={tituloLudovica} alt="" />
                </div>

                <div className='p-2 rounded bg-blanco w-[340px] '>
                    <QuiltedImageList />
                </div>

            </div>
            <div className='flex flex-col-reverse md:flex-col' >
                <div >
                    <img className='w-[150px] mt-[30px]' src={mascara} alt="" />
                </div>
                <div className='md:mt-[80px]'>
                    <Project
                        imagenes={null}
                        generalInfo={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatem cumque perspiciatis et distinctio. Veniam ut autem veritatis aliquam nobis sint quia itaque delectus, labore iusto suscipit dolores nihil nulla.'}
                        techInfo={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatem cumque perspiciatis et distinctio. Veniam ut autem veritatis aliquam nobis sint quia itaque delectus, labore iusto suscipit dolores nihil nulla.'}
                    />
                    <br />
                </div>
            </div>

        </div>
    )
}

