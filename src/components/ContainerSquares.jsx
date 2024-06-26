import Image1 from '../images/img1.jpg'
import Image2 from '../images/img2.jpg'
import Image3 from '../images/img3.jpg'
import '../styles/index.css'

export default function ContainerSquares() {
    return (
        <div className="flex justify-center">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:gap-10">
                <div className="flex flex-col sm:px-10">
                    <a href='/qualidadedevida'>
                        <div className="w-full bg-green2 mt-16 rounded-md relative cursor-pointer sm:ml:12 lg:ml-0">
                            <img src={Image1} className='rounded-md z-0 hover:opacity-25 h-96 w-full transition-opacity' alt="imagem 1"></img>
                            <p className='absolute top-0 left-0 z-10 text-white p-4 title2 font-bold'>Qualidade de Vida</p>
                        </div>
                    </a>
                </div>
                <div className="flex flex-col sm:px-10 sm:gap-10 lg:gap-0 lg:">
                    <a href="/qualidadedevida">
                        <div className="w-full bg-green2 lg:mt-16 rounded-md relative cursor-pointer sm:mt-0">
                            <img src={Image2} className='rounded-md z-0 hover:opacity-25 lg:h-48 w-full transition-opacity sm:h-96' alt="imagem 2"></img>
                            <p className='absolute top-0 left-0 z-10 text-white p-4 title2 font-bold'>Cidades Inteligentes</p>
                        </div>
                    </a>
                    <a href="/bemestar">
                        <div className="w-full bg-green2 lg:mt-6 rounded-md relative cursor-pointer">
                            <img src={Image3} className='rounded-md z-0 hover:opacity-25 lg:h-48 w-full transition-opacity sm:h-96' alt="imagem 3"></img>
                            <p className='absolute top-0 left-0 z-10 text-white p-4 title2 font-bold'>Bem-Estar</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
