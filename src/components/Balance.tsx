'use client'

import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useContext, useMemo, useState } from 'react';

import { TransactionsContext } from '@/contexts/TransactionsContext';

export default function Balance() {
  const [isVisible, setIsVisible] = useState(true);
  const { transactions } = useContext(TransactionsContext)

  const balance = useMemo(() => {
    return transactions.reduce((accumulator, current) => {
      return accumulator + current.value
    }, 0);
  }, [transactions]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  console.log('transactions', transactions)
  const formatBalance = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div className="text-white mx-auto w-full p-4 lg:pt-[94px]">
      {/* O resto do seu JSX continua o mesmo... */}
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

      <div className="text-3xl font-normal">
        { isVisible ? formatBalance(balance) : '••••••' }
      </div>
    </div>
  );
}