'use client'

import { HiOutlineUserCircle, HiOutlineXMark } from 'react-icons/hi2';
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { link: '#', text: 'Início' },
    { link: '#', text: 'Transferências' },
    { link: '#', text: 'Investimentos' },
    { link: '#', text: 'Outros serviços' }
  ];
  return (
      <header className="bg-cyan-900">
        <div className="flex max-w-[1440px] my-0 mx-auto justify-between py-4 px-8">
          <div className="flex items-center gap-4">
            <button
                className="lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menu"
            >
              <IoMdMenu className="h-8 w-8 text-orange-500" />
            </button>
          </div>

          <div className="flex items-center gap-2">
          <span className="text-white font-semibold text-[13px] hidden sm:inline sm:mr-4 2xl:mr-10">
            Joana da Silva Oliveira
          </span>
            <HiOutlineUserCircle className="w-10 h-10 text-orange-500" />
          </div>
        </div>

        {menuOpen && (
            <nav className="bg-green-100 lg:hidden fixed top-0 left-0 w-48 p-4 z-50 px-5 pb-8">
              <button
                  className="absolute top-4 right-4 text-white"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Fechar menu"
              >
                <HiOutlineXMark className="w-6 h-6 text-green-500" />
              </button>
              <ul className="flex flex-col text-center gap-4 pt-6">
                {menuItems.map((item, index) => {
                  const isLast = index === menuItems.length - 1;
                  return (
                      <li key={ index }>
                        <a
                            href={ item.link }
                            className={`block w-full text-black text-lg active:text-orange-500 active:font-bold 
                            ${ !isLast ? 'pb-4 border-b border-black active:border-green-500' : '' }
                            `}
                            onClick={ () => setMenuOpen(false) }
                        >
                          { item.text
                            || "\u00A0" }
                        </a>
                      </li>
                  )
                }) }
              </ul>
            </nav>
        ) }
      </header>
  );
}
