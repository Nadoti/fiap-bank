"use client"

import Header from '@/components/features/header/Header';
import Balance from '@/components/Balance';
import { Button, Card, CurrencyInput, Input, Select } from 'miragem-ds';
import CurrentDate from '@/components/CurrentDate';
import { Extract } from '@/components/Extract';
import { Menu } from '@/components/Menu';
import imgWoman from "../../../../public/images/img-woman-credit-card-md@2x.png"
import imgMoney from "../../../../public/images/img-man-coin-sm@2x.png"
import React from 'react';
import { useLocalStorage } from '@/hooks/useStorage';
import { TransactionType } from '@/enum/transaction.enum';
import { Transaction } from '@/types/transactions.interface';
import { sampleOptions } from '@/utils/list-options';
import { useScreenSizeDebounced } from '@/hooks/useWidth';



export interface SelectIOption {
  label: string;
  value: string;
}

export function DashboardViewer() {
  const [typeTransaction, setTypeTransaction] = React.useState('')
  const [valueTransaction, setValueTransaction] = React.useState(0)
  const { getStorage, setStorage} = useLocalStorage();

  function createTransaction() {
    if(typeTransaction && valueTransaction) {
      const existingTransactions = getStorage<Transaction[]>(TransactionType.TRANSACTION) || [];
      const newTransaction: Transaction = {
        id: crypto.randomUUID(),
        type: typeTransaction,
        value: valueTransaction,
        createdAt: new Date().toISOString()
      };
      const updatedTransactions = [...existingTransactions, newTransaction];
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
  const { isMobile, isTablet } = useScreenSizeDebounced()
  return (
    <>
      <Header/>
      <main className="w-full flex items-center justify-center h-full mt-8 pb-9 md:pb-[70px] px-6 md:px-15 lg:px-auto">
        <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-[1fr_4fr_2fr] h-full gap-4 ">

          <Menu />

          <div className="flex flex-col w-full h-full gap-4">
            <Card
              background='primary'
              isImageBackground={ isTablet || isMobile }
              heightAuto={ true }
              isPixelsImages={ isTablet || isMobile }
              sidePixelsImages={isTablet ? "right" : isMobile ? "left" : "left"}
              imageBackground={imgMoney.src}
              positionImageBackground='bottom-left'
              className='sm:h-[700px] md:h-[600px] lg:h-full lg:pb-[180px]'
            >
              <div className="flex flex-col md:flex-row items-center items- w-full h-full">
                <div className="w-full text-center md:text-start md:self-baseline">
                  <p className="text-2xl text-white font-semibold">Olá, Joana!
                    :)</p>
                  <p className="text-sm text-white">
                    <CurrentDate/>
                  </p>
                </div>
                <div className="w-64 flex items-center md:pr-10">
                  <Balance/>
                </div>
              </div>
            </Card>

            <Card 
              background={ 'secondary' }
              isImageBackground={ isTablet || isMobile }
              heightAuto={ false }  
              isPixelsImages={ true }
              sidePixelsImages={isTablet ? "left" : "right" }
              imageBackground={imgWoman.src}
              positionImageBackground='bottom-right'
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