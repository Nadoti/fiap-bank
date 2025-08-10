"use client"

import Header from '@/components/features/header/Header';
import Balance from '@/components/Balance';
import { Button, Card, CurrencyInput, Input, Select } from 'miragem-ds';
import CurrentDate from '@/components/CurrentDate';
import { Extract } from '@/components/Extract';
import { Menu } from '@/components/Menu';
import img from "../../../../public/images/img-woman-credit-card-md@2x.png"
import React from 'react';
import { useLocalStorage } from '@/hooks/useStorage';
import { TransactionType } from '@/enum/transaction.enum';



export interface SelectIOption {
  label: string;
  value: string;
}

const sampleOptions: SelectIOption[] = [
  { value: "currency-exchange", label: "Câmbio de Moeda" },
  { value: "doc-ted", label: "DOC/TED" },
  { value: "loan-financing", label: "Empréstimo e Financiamento" },
  { value: "investments", label: "Investimentos" },
];

interface Transaction {
  id: string
  type: string;
  value: number;
  createdAt: string;
}

export function DashboardViewer() {
  const [typeTransaction, setTypeTransaction] = React.useState('')
  const [valueTransaction, setValueTransaction] = React.useState(0)
  const { getStorage, setStorage} = useLocalStorage();

  function createTransaction() {
    console.log(valueTransaction)
    if(typeTransaction && valueTransaction) {
      const existingTransactions = getStorage<Transaction[]>(TransactionType.TRANSACTION) || [];
      console.log('existingTransactions', existingTransactions)
      const newTransaction: Transaction = {
        id: crypto.randomUUID(),
        type: typeTransaction,
        value: valueTransaction,
        createdAt: new Date().toISOString()
      };
      console.log('newTransaction', newTransaction)
      const updatedTransactions = [...existingTransactions, newTransaction];
      console.log('updatedTransactions', updatedTransactions)
      setStorage(TransactionType.TRANSACTION, updatedTransactions);
      
      setTypeTransaction('');
      setValueTransaction(0);
    }
  }
  
  const handleValorChange = (value: number | '') => {
    if (value === '') {
      setValueTransaction(0);
    } else {
      setValueTransaction(value);
    }
  };

  
  return (
    <>
      <Header/>
      <main className="w-full flex items-center justify-center h-full mt-8">
        <div className="w-full max-w-[1440px] grid grid-cols-[1fr_4fr_2fr] h-full gap-4 ">

          <Menu />

          <div className="flex flex-col w-full h-full gap-4">
            <Card
              background='primary'
              isImageBackground={ false }
              heightAuto={ true }
              isPixelsImages={false}
              positionImageBackground='bottom-left'
              className='h-96'
              // imageBackground={img.src}
            >
              <div className="flex w-full h-full">
                <div className="w-full">
                  <p className="text-2xl text-white font-semibold">Olá, Joana!
                    :)</p>
                  <p className="text-sm text-white">
                    <CurrentDate/>
                  </p>
                </div>
                <div className="w-64 flex items-center h-full pr-10">
                  <Balance/>
                </div>
              </div>
            </Card>

            <Card 
              background={ 'secondary' }
              isImageBackground={false }
              heightAuto={ false }  
              isPixelsImages={true} 
              sidePixelsImages='right'
            >
              <div className="p-2">
                <h3 className='text-2xl font-bold text-gray-100 mb-8'>Nova transação</h3>
                <div className='w-full max-w-96 mb-8'>
                  <Select
                    options={sampleOptions}
                    value={typeTransaction}
                    onChange={(type) => setTypeTransaction(type)}
                    placeholder='Selecione o tipo de transação'
                    label=''
                    fullWidth={false}
                  />
                </div>
                <div className='w-full max-w-72 mb-8'>
                  {/* <Input label='Valor' variant='default' onChange={(value) => setValueTransaction(value)}/> */}
                  <CurrencyInput
                    label="Valor"
                    value={valueTransaction}
                    onChange={handleValorChange}
                    placeholder="0,00"
                  />
      
                  
                </div>
                <div className='w-full max-w-72 mb-8'>
                  <Button fullWidth type='button' onClick={createTransaction}>
                    Concluir transação
                  </Button>
                </div>
              </div>
            </Card>

          </div>

          <Extract />
        </div>
      </main>
    </>
);
}