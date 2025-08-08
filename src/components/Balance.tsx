'use client'

import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useState } from 'react';

export default function Balance() {
  const [isVisible, setIsVisible] = useState(true);
  const [balance] = useState(2500.00);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const formatBalance = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
      <div className="text-white mx-auto w-full p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Saldo</h1>
          <button
              onClick={ toggleVisibility }
              className="text-orange-500 hover:text-orange-400 transition-colors duration-200 cursor-pointer"
              aria-label={ isVisible ? 'Ocultar saldo' : 'Mostrar saldo' }
          >
            { isVisible ? <IoEye className="text-orange-500"/> : <IoEyeOff className="text-orange-500"/> }
          </button>
        </div>

        <div className="w-full h-0.5 bg-orange-500 mb-4"></div>

        <div className="mb-2">
          <p className="font-normal text-gray-200">Conta Corrente</p>
        </div>

        <div className="text-3xl font-light">
          { isVisible ? formatBalance(balance) : '••••••' }
        </div>
      </div>
  );
}