"use client"

import React, { useContext } from "react";
import imgWoman from "../../public/images/img-woman-credit-card-md@2x.png"
import imgMoney from "../../public/images/img-man-coin-sm@2x.png"
import Balance from '@/components/Balance';
import { Button, Card, CurrencyInput, Select } from 'miragem-ds';
import CurrentDate from '@/components/CurrentDate';
import { sampleOptions } from '@/utils/list-options';
import { useScreenSizeDebounced } from '@/hooks/useWidth';
import { TransactionsContext } from "@/contexts/TransactionsContext";


export function TransactionsView() {

  const [typeTransaction, setTypeTransaction] = React.useState('')
  const [valueTransaction, setValueTransaction] = React.useState(0)
  const { isMobile, isTablet } = useScreenSizeDebounced()
  const { addTransactions } = useContext(TransactionsContext)
  

  function createTransaction() {
    if(typeTransaction && valueTransaction) {
      const newTransaction = {
        type: typeTransaction,
        value: valueTransaction,
      };
      addTransactions(newTransaction);
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
    </>
  )
}