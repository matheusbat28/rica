import React from "react";
import Logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="container-2xl bg-gray-100 mx-auto mt-28 mb-5 pt-16 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10">
                <div className="text-center">
                    <img src={Logo} alt="logo" className="w-1/2 mx-auto" />

                    <div className="flex justify-center mt-4 ">
                        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-sea shadow-md mr-4">
                            <FaFacebook className="text-2xl text-gray-200" />
                        </div>

                        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-sea shadow-md mr-4">
                            <FaInstagram className="text-2xl text-gray-200" />
                        </div>

                        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-sea shadow-md">
                            <FaLinkedin className="text-2xl text-gray-200" />
                        </div>


                    </div>
                </div>
                <div className="text-start">
                    <h3 className="text-2xl font-bold">Telefone</h3>
                    <p className="mt-4 opacity-50">+55 (48) 9649-5355</p>
                    <p className="mt-1 opacity-50">(Orçamentos somente em horário comercial)</p>
                    <h3 className="mt-4 text-2xl font-bold">Email</h3>
                    <p className="mt-4 opacity-50">ricaaguapotavel@gmail.com</p>
                </div>

                <div className="text-start">

                    <ul className="opacity-50 uppercase text-xl">
                        <li className="cursor-pointer hover:text-sea mb-5">
                            <a href="#">home</a>
                        </li>
                        <li className="cursor-pointer hover:text-sea mb-5"><a href="#service">serviços</a></li>
                        <li className="cursor-pointer hover:text-sea mb-5">
                            <a href="#contact">contato</a>
                        </li>
                    </ul>

                    <p className="mt-4 opacity-50">SC 281 km 8 colonia Santana são José SC</p>

                </div>
            </div>
            <hr className=" w-3/5 mx-auto mt-8" />
            <p className="text-center mt-4 opacity-50">© 2024 Rica Água Potável - Todos os direitos reservados</p>
        </footer>
    );
}