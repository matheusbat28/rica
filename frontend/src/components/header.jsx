import React from "react";

export default function Header({ setMenu, menu }) {

    return (
        <header className="w-full p-4 flex justify-between items-center absolute z-40 px-3.5">
            <div className="">
            </div>
            <div className="">
                <ul className="md:flex uppercase text-white hidden my-3">
                    <li className="mx-4 cursor-pointer hover:text-sea">
                        <a href="#">home</a>
                    </li>
                    <li className="mx-4 cursor-pointer hover:text-sea">
                        <a href="#service">serviços</a>
                    </li>
                    <li className="mx-4 cursor-pointer hover:text-sea">
                        <a href="#contact">contato</a>
                    </li>
                </ul>
                <div className="flex text-white md:hidden flex-col gap-1 cursor-pointer" onClick={() => setMenu(!menu)}>
                    <span className="w-10 h-1 block bg-white rounded-sm"></span>
                    <span className="w-10 h-1 block bg-white rounded-sm"></span>
                    <span className="w-10 h-1 block bg-white rounded-sm"></span>
                </div>
            </div>
        </header>
    );
}