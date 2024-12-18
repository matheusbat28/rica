import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from "../../components/header";
import Aside from "../../components/aside";
import Footer from "../../components/footer";
import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg";
import Img3 from "../../assets/img3.jpg";
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [menu, setMenu] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="">
            <Header setMenu={setMenu} menu={menu} />
            <Aside setMenu={setMenu} menu={menu} />
            {/* carrocel */}
            <div className="flex justify-center items-center">
                <Carousel showThumbs={false} autoPlay infiniteLoop onChange={handleSlideChange} showStatus={false}>
                    <div className="relative">
                        <div className="absolute inset-0 flex justify-center items-center flex-col gap-9 text-white">
                            {currentSlide === 0 && (
                                <>
                                    <h1 className="text-3xl md:text-5xl lg:text-7xl text-justify">
                                        <Typewriter
                                            words={['Lorem ipsum dolor sit amet']}
                                            loop={1}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={50}
                                            deleteSpeed={30}
                                            delaySpeed={500}
                                        />
                                    </h1>

                                    <p className="text-2xl md:text-3xl lg:text-4xl text-justify">
                                        <Typewriter
                                            words={['voluptates quae culpa, ratione aut molestiae error']}
                                            loop={1}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={50}
                                            deleteSpeed={30}
                                            delaySpeed={500}
                                        />
                                    </p>
                                </>
                            )}
                        </div>
                        <img src={Img1} alt="" className="object-cover" style={{ width: '100%', height: '930px' }} />
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex justify-center items-center flex-col gap-9 text-white">
                            {currentSlide === 1 && (
                                <>
                                    <h1 className="text-3xl md:text-5xl lg:text-7xl text-justify">
                                        <Typewriter
                                            words={['Lorem ipsum dolor sit amet']}
                                            loop={1}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={50}
                                            deleteSpeed={30}
                                            delaySpeed={500}
                                        />
                                    </h1>

                                    <p className="text-2xl md:text-3xl lg:text-4xl text-justify">
                                        <Typewriter
                                            words={['voluptates quae culpa, ratione aut molestiae error']}
                                            loop={1}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={50}
                                            deleteSpeed={30}
                                            delaySpeed={500}
                                        />
                                    </p>
                                </>
                            )}
                        </div>
                        <img src={Img2} alt="" className="object-cover" style={{ width: '100%', height: '930px' }} />
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex justify-center items-center flex-col gap-9 text-white">
                            {currentSlide === 2 && (
                                <>
                                    <h1 className="text-3xl md:text-5xl lg:text-7xl text-justify">
                                        <Typewriter
                                            words={['Lorem ipsum dolor sit amet']}
                                            loop={1}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={50}
                                            deleteSpeed={30}
                                            delaySpeed={500}
                                        />
                                    </h1>

                                    <p className="text-2xl md:text-3xl lg:text-4xl text-justify">
                                        <Typewriter
                                            words={['voluptates quae culpa, ratione aut molestiae error']}
                                            loop={1}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={50}
                                            deleteSpeed={30}
                                            delaySpeed={500}
                                        />
                                    </p>
                                </>
                            )}
                        </div>
                        <img src={Img3} alt="" className="object-cover" style={{ width: '100%', height: '930px' }} />
                    </div>
                </Carousel>
            </div>
            {/* fim do carrocel */}

            {/* nosso servicos */}
            <div id="service" className="container mx-auto mt-36">
                <h1 className="uppercase text-center text-4xl text-sea font-bold">nossos serviços</h1>
                <p className="text-center mt-6 text-3xl opacity-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates maiores veniam, qui dicta ex</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
                    <div className="bg-gray-100 rounded-lg">
                        <img src="https://fotos-estradao-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2023/02/25222118/Transformers.jpg" alt="" className=" h-1/2 w-full" />
                        <h1 className="text-3xl mt-5 px-10">Lorem ipsum dolor sit amet</h1>
                        <p className="mt-5 px-10 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores veniam, qui dicta ex</p>
                    </div>
                    <div className="rounded-lg">
                        <img src="https://img0.icarros.com/dbimg/imgnoticia/4/14577_7" alt="" className="h-1/2 w-full" />
                        <h1 className="text-3xl mt-5 px-10">Lorem ipsum dolor sit amet</h1>
                        <p className="mt-5 px-10 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores veniam, qui dicta ex</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg">
                        <img src="https://fotos-estradao-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2023/02/25222118/Transformers.jpg" alt="" className=" h-1/2 w-full" />
                        <h1 className="text-3xl mt-5 px-10">Lorem ipsum dolor sit amet</h1>
                        <p className="mt-5 px-10 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores veniam, qui dicta ex</p>
                    </div>
                    <div className="rounded-lg">
                        <img src="https://img0.icarros.com/dbimg/imgnoticia/4/14577_7" alt="" className="h-1/2 w-full" />
                        <h1 className="text-3xl mt-5 px-10">Lorem ipsum dolor sit amet</h1>
                        <p className="mt-5 px-10 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores veniam, qui dicta ex</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg">
                        <img src="https://fotos-estradao-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2023/02/25222118/Transformers.jpg" alt="" className=" h-1/2 w-full" />
                        <h1 className="text-3xl mt-5 px-10">Lorem ipsum dolor sit amet</h1>
                        <p className="mt-5 px-10 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores veniam, qui dicta ex</p>
                    </div>
                    <div className="rounded-lg">
                        <img src="https://img0.icarros.com/dbimg/imgnoticia/4/14577_7" alt="" className="h-1/2 w-full" />
                        <h1 className="text-3xl mt-5 px-10">Lorem ipsum dolor sit amet</h1>
                        <p className="mt-5 px-10 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores veniam, qui dicta ex</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg">
                        <img src="https://fotos-estradao-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2023/02/25222118/Transformers.jpg" alt="" className=" h-1/2 w-full" />
                        <h1 className="text-3xl mt-5 px-10">Lorem ipsum dolor sit amet</h1>
                        <p className="mt-5 px-10 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores veniam, qui dicta ex</p>
                    </div>
                    <div className="rounded-lg">
                        <img src="https://img0.icarros.com/dbimg/imgnoticia/4/14577_7" alt="" className="h-1/2 w-full" />
                        <h1 className="text-3xl mt-5 px-10">Lorem ipsum dolor sit amet</h1>
                        <p className="mt-5 px-10 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores veniam, qui dicta ex</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg">
                        <img src="https://fotos-estradao-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2023/02/25222118/Transformers.jpg" alt="" className=" h-1/2 w-full" />
                        <h1 className="text-3xl mt-5 px-10">Lorem ipsum dolor sit amet</h1>
                        <p className="mt-5 px-10 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores veniam, qui dicta ex</p>
                    </div>
                    <div className="rounded-lg">
                        <img src="https://img0.icarros.com/dbimg/imgnoticia/4/14577_7" alt="" className="h-1/2 w-full" />
                        <h1 className="text-3xl mt-5 px-10">Lorem ipsum dolor sit amet</h1>
                        <p className="mt-5 px-10 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores veniam, qui dicta ex</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg">
                        <img src="https://fotos-estradao-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2023/02/25222118/Transformers.jpg" alt="" className=" h-1/2 w-full" />
                        <h1 className="text-3xl mt-5 px-10">Lorem ipsum dolor sit amet</h1>
                        <p className="mt-5 px-10 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores veniam, qui dicta ex</p>
                    </div>
                    <div className="rounded-lg">
                        <img src="https://img0.icarros.com/dbimg/imgnoticia/4/14577_7" alt="" className="h-1/2 w-full" />
                        <h1 className="text-3xl mt-5 px-10">Lorem ipsum dolor sit amet</h1>
                        <p className="mt-5 px-10 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores veniam, qui dicta ex</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg">
                        <img src="https://fotos-estradao-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2023/02/25222118/Transformers.jpg" alt="" className=" h-1/2 w-full" />
                        <h1 className="text-3xl mt-5 px-10">Lorem ipsum dolor sit amet</h1>
                        <p className="mt-5 px-10 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores veniam, qui dicta ex</p>
                    </div>
                    <div className="rounded-lg">
                        <img src="https://img0.icarros.com/dbimg/imgnoticia/4/14577_7" alt="" className="h-1/2 w-full" />
                        <h1 className="text-3xl mt-5 px-10">Lorem ipsum dolor sit amet</h1>
                        <p className="mt-5 px-10 pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores veniam, qui dicta ex</p>
                    </div>

                </div>
            </div>
            {/* fim do nosso servicos */}

            {/* entre em contato */}
            <div id="contact" className="container-2xl mx-auto mt-36 py-24 bg-gradient-to-r from-sea to-sea2">
                <h1 className="uppercase text-center text-4xl text-white font-bold">entre em contato</h1>
                <form action="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                        <input type="text" placeholder="Nome" className="w-3/4 mx-auto p-5 rounded-lg " value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder="Email" className="w-3/4 mx-auto p-5 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Assunto" className="w-3/4 mx-auto p-5 rounded-lg" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <textarea name="" id="" cols="30" rows="2" placeholder="Mensagem" className="w-3/4 mx-auto p-5 rounded-lg" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button className="w-1/3 mx-auto p-5 rounded-lg bg-white text-sea font-bold md:ml-28">Enviar</button>
                    </div>
                </form>
            </div>
            {/* fim do entre em contato */}
            <Footer />
        </div>
    );
}