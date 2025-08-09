import { Card } from "miragem-ds";
import { FiTrash2 } from 'react-icons/fi';
import { IoPencil } from 'react-icons/io5';

export function Extract() {
  const transactions = [
    {
      id: 1,
      month: 'Novembro',
      type: 'Depósito',
      value: 150,
      data: '18/11/2022'
    },
    {
      id: 2,
      month: 'Novembro',
      type: 'Depósito',
      value: 100,
      data: '21/11/2022'
    },
    {
      id: 3,
      month: 'Novembro',
      type: 'Depósito',
      value: 50,
      data: '21/11/2022'
    },
    {
      id: 4,
      month: 'Novembro',
      type: 'Transferência',
      value: -500,
      data: '21/11/2022'
    }
  ];

  const formatValue = (value: number) => {
    const prefix = value < 0 ? '-R$ ' : 'R$ ';
    return prefix + Math.abs(value);
  };


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

      <div>
        {transactions.map((transaction, index) => (
            <div key={transaction.id} className="mb-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col w-full gap-2">
                  <div className="text-green-500 text-[13px] font-semibold">
                    {transaction.month}
                  </div>
                  <div className="text-black text-base font-medium">
                    {transaction.type}
                  </div>
                  <div className="text-black text-base font-semibold">
                    {formatValue(transaction.value)}
                  </div>
                  <div className="h-px bg-green-500 mt-2"></div>
                </div>
                <div className="text-gray-400 text-sm">
                  {transaction.data}
                </div>
              </div>
            </div>
        ))}
      </div>
    </Card>
  )
}