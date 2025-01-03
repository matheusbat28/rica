import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from "../../components/header";
import Aside from "../../components/aside";
import Footer from "../../components/footer";
import Img from "../../assets/img.png";
import { Typewriter } from 'react-simple-typewriter';
import JsonServices from "../../controls/services.json";
import { FaWhatsapp } from 'react-icons/fa';
import InputMask from 'react-input-mask';
import Logo from "../../assets/logo.png";

export default function Home() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [menu, setMenu] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [fone, setFone] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [services, setServices] = React.useState([]);

    React.useEffect(() => {
        setServices(JsonServices);
    }, []);


    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    const sandEmail = (e) => {
        e.preventDefault();
        console.log(name, email, fone, message);
    }

    return (
        <div className="">
            <Header setMenu={setMenu} menu={menu} />
            <Aside setMenu={setMenu} menu={menu} />
            {/* carrocel */}
            {/* <div className="flex justify-center items-center">
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
            </div> */}
            {/* fim do carrocel */}

            {/* img fixa */}
            <div className="image-container">
                <img src={Img} alt="" className="main-image" />
                <div className="logo-container">
                    <img src={Logo} alt="" className="logo-image" />
                </div>
            </div>
            {/* fim da img fixa */}

            {/* nosso servicos */}
            <div id="service" className="container mx-auto mt-20">
                <h1 className="uppercase text-center text-3xl md:text-4xl text-sea font-bold">nossos serviços</h1>
                <p className="text-center text-gray-500 mt-5">Todos os serviços são disponibilizados 24 horas por dia, todos os dias da semana, incluindo sábados, domingos e feriados.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 gap-2">
                    {services.map((service, index) => (
                        <div key={index} className="">
                            <img src={service.img} alt="" className="object-cover w-full h-52" />
                            <h1 className="text-lg text-center font-bold text-sea mx-5 mt-5">{service.name}</h1>
                            <p className="text-sm text-center text-gray-500 mx-5 mt-3 mb-4">{service.service}</p>
                        </div>
                    ))}

                </div>
            </div>
            {/* fim do nosso servicos */}

            {/* entre em contato */}
            <div id="contact" className="container-2xl mx-auto mt-20 py-24 bg-gradient-to-r from-sea to-sea2">
                <h1 className="uppercase text-center text-5xl text-white font-bold">entre em contato</h1>
                <form onSubmit={sandEmail}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                        <input type="text" placeholder="Nome" className="w-3/4 mx-auto p-5 rounded-lg " value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder="Email" className="w-3/4 mx-auto p-5 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <InputMask mask="(99) 99999-9999" placeholder="Telefone" className="w-3/4 mx-auto p-5 rounded-lg" value={fone} onChange={(e) => setFone(e.target.value)} />
                        <textarea name="" id="" cols="30" rows="2" placeholder="Mensagem" className="w-3/4 mx-auto p-5 rounded-lg" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button className="w-1/3 mx-auto p-5 rounded-lg bg-white text-sea font-bold md:ml-28">Enviar</button>
                    </div>
                </form>
            </div>
            {/* fim do entre em contato */}

            {/* botao whatsapp */}
            <div className="fixed bottom-5 right-5">
                <a href="https://api.whatsapp.com/send?phone=554896495355" target="_blank" rel="noreferrer">
                    <button className="p-2 rounded-full bg-green-500 text-white">
                        <FaWhatsapp size={40} />
                    </button>
                </a>
            </div>
            {/* fim do botao whatsapp */}
            <Footer />
        </div>
    );
}