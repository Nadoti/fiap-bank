'use client'

import { TransactionType } from "@/enum/transaction.enum";
import { useLocalStorage } from "@/hooks/useStorage";
import { Card } from "miragem-ds";
import { FiTrash2 } from 'react-icons/fi';
import { IoPencil } from 'react-icons/io5';
import { Transaction } from '@/types/transactions.interface';
import { sampleOptions } from "@/utils/list-options";

export function Extract() {
  const { getStorage } = useLocalStorage();
  const transactions: Transaction[] | null = getStorage(TransactionType.TRANSACTION)

  const formatValue = (value: number) => {
    const prefix = value < 0 ? '-R$ ' : 'R$ ';
    return prefix + Math.abs(value);
  };

  function formatDateComplete(date: string) {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(new Date(date))
  }

  function dayOfWeek(day: string) {

    return new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long'
    }).format(new Date(day));
  }

  function filterTypes(type: string) {
    const options = sampleOptions.find((types) => types.value === type)
    return options?.label
  }

  return (
    <Card 
      className="bg-white rounded-lg py-8 ps-6 pe-[18px]"
      isPixelsImages={false}
      isImageBackground={ false }
      heightAuto={ false }
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[25px] font-bold text-black">Extrato</h3>
        <div className="flex gap-[15px]">
          <div className="w-10 h-10 flex items-center justify-center bg-cyan-900 rounded-full content-box hover:bg-teal-800 transition-colors">
            <button>
              <IoPencil className="w-5 h-5 text-white"/>
            </button>
          </div>
          <div className="w-10 h-10 flex items-center justify-center bg-cyan-900 rounded-full content-box hover:bg-teal-800 transition-colors">
            <button>
              <FiTrash2 className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-auto max-h-[500px]">
        {transactions?.map((transaction, index) => (
            <div key={transaction.id} className="mb-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col w-full gap-2">
                  <div className="text-green-500 text-[13px] font-semibold">
                    {dayOfWeek(transaction.createdAt)}
                  </div>
                  <div className="text-black text-base font-medium">
                  {filterTypes(transaction.type)}
                  </div>
                  <div className="text-black text-base font-semibold">
                    {formatValue(transaction.value)}
                  </div>
                  <div className="h-px bg-green-500 mt-2"></div>
                </div>
                <div className="text-gray-400 text-sm">
                  {formatDateComplete(transaction.createdAt)}
                </div>
              </div>
            </div>
        ))}
      </div>
    </Card>
  )
}