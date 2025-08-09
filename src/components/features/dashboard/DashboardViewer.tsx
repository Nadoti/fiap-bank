"use client"

import Header from '@/components/features/header/Header';
import Balance from '@/components/Balance';
import { Card, Select } from 'miragem-ds';
import CurrentDate from '@/components/CurrentDate';
import { Extract } from '@/components/Extract';
import { Menu } from '@/components/Menu';
import img from "../../../../public/images/img-woman-credit-card-md@2x.png"


export function DashboardViewer() {
  
  return (
    <>
      <Header/>
      <main className="w-full flex items-center justify-center h-full mt-8 pb-9 md:pb-[70px] px-6 md:px-15 lg:px-auto">
        <div className="w-full max-w-[1440px] grid grid-cols-1 lg:grid-cols-[1fr_4fr_2fr] h-full gap-4 ">

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
              <div className="flex flex-col md:flex-row items-center items- w-full h-full">
                <div className="w-full text-center md:text-start md:self-baseline">
                  <p className="text-2xl text-white font-semibold">Olá, Joana!
                    :)</p>
                  <p className="text-sm text-white">
                    <CurrentDate/>
                  </p>
                </div>
                <div className="w-64 flex items-center h-full md:pr-10">
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
              <div className="">
                <h3>Nova transação</h3>
                {/* <Select>
                  
                </Select> */}
              </div>
            </Card>

          </div>

          <Extract />
        </div>
      </main>
    </>
);
}