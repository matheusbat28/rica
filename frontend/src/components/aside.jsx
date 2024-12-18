import React from "react";
import { IoMdClose } from "react-icons/io";

export default function Aside({ setMenu, menu }) {
    return (
        <aside className={`w-full h-full bg-black bg-opacity-80 fixed top-0 left-0 z-50 transition-opacity duration-500 ${menu ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex flex-col p-4" onClick={() => setMenu(!menu)}>
                <IoMdClose className="text-white text-4xl cursor-pointer" />
            </div>
            <div className="flex flex-col items-center justify-center h-full">
                <ul className="text-white uppercase text-4xl">
                    <li className="cursor-pointer hover:text-sea mb-5">
                        <a href="#">home</a>
                    </li>
                    <li className="cursor-pointer hover:text-sea mb-5">
                        <a href="#service">serviços</a></li>
                    <li className="cursor-pointer hover:text-sea mb-5">
                        <a href="#contact">contato</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}