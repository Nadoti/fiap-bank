"use client"

import Header from '@/components/features/header/Header';
import Balance from '@/components/Balance';
import { Card } from 'miragem-ds';
import CurrentDate from '@/components/CurrentDate';
import { Extract } from '@/components/Extract';
import { Menu } from '@/components/Menu';



export function DashboardViewer() {
  


  return (
    <>
      <Header/>
      <main className="w-full flex items-center justify-center h-full absolute mt-8">
        <div className="w-full max-w-[1440px] grid grid-cols-[1fr_3fr_2fr] h-full gap-4 ">

          <Menu />

          <div className="flex flex-col w-full h-full">
            <Card
              background='primary'
              isImageBackground={ false }
              heightAuto={ true }
              isPixelsImages={false}
            >
              <div className="flex justify-between">
                <div className="w-full lg:w-1/2">
                  <p className="text-2xl text-white font-semibold">Olá, Joana!
                    :)</p>
                  <p className="text-sm text-white">
                    <CurrentDate/>
                  </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <Balance/>
                </div>
              </div>
            </Card>
            <Card background={ 'secondary' }
                  isImageBackground={false }
                  heightAuto={ false }  isPixelsImages={true} sidePixelsImages='right'>
              <div className="">
                e ai
              </div>
            </Card>
          </div>

          <Extract />
        </div>
      </main>
    </>
);
}