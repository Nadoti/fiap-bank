'use client';

import Header from '@/components/Header';
import Balance from '@/components/Balance';
import { Card } from 'miragem-ds';
import CurrentDate from '@/components/CurrentDate';

export default function Dashboard() {
  const menuItems = [
    { link: '#', text: 'Início' },
    { link: '#', text: 'Transferências' },
    { link: '#', text: 'Investimentos' },
    { link: '#', text: 'Outros serviços' }
  ];

  return (
      <>
        <Header/>
        <main className="w-full flex items-center justify-center h-full absolute">
          <div className="w-full max-w-[1440px] grid grid-cols-[1fr_3fr_2fr] h-full gap-4">

            <Card isImageBackground={ false }
                  className="bg-c_white"
                  heightAuto={ true }>
              <ul className="flex flex-col text-center gap-4 pt-6">
                { menuItems.map((item, index) => {
                  const isLast = index === menuItems.length - 1;
                  return (
                      <li key={ index }>
                        <a
                            href={ item.link }
                            className={ `block w-full text-black text-lg active:text-orange-500 active:font-bold 
                            ${ !isLast
                               ? 'pb-4 border-b border-black active:border-green-500'
                               : '' }
                            ` }
                        >
                          { item.text
                            || '\u00A0' }
                        </a>
                      </li>
                  );
                }) }
              </ul>
            </Card>
            <div className="flex flex-col w-full h-full">

              <Card background={ 'primary' }
                    isImageBackground={ true }
                    heightAuto={ true }>
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
                    isImageBackground={ true }
                    heightAuto={ true }>
                <div className="">
                  e ai
                </div>
              </Card>
            </div>
            <Card isImageBackground={ false }
                  heightAuto={ false }>Erro encontrado!</Card>
          </div>
        </main>
      </>
  );
}