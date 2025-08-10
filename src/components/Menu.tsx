"use client"

import { Card } from "miragem-ds";
import { usePathname } from 'next/navigation';


const menuItems = [
  { link: '/dashboard', text: 'Início' },
  { link: 'transferencias', text: 'Transferências' },
  { link: 'investimentos', text: 'Investimentos' },
  { link: 'outros-servicos', text: 'Outros serviços' }
];

export function Menu() {
  const pathname = usePathname();

  return (
    <Card
      isImageBackground={ true }
      heightAuto={ true }
      positionImageBackground={'bottom-left'}
      isPixelsImages={false}
      sidePixelsImages='left'
      className={'hidden lg:block'}
    >
      <ul className="flex flex-col text-center gap-4 pt-6">
        { menuItems.map((item, index) => {
          const isLast = index === menuItems.length - 1;
          return (
              <li key={ index }>
                <a
                    href={ item.link }
                    className={ `block w-full  text-lg hover:text-green-500 hover:font-bold
                    ${pathname === item.link
                      ? 'text-green-500 font-bold border-green-500'
                      :'text-black'}
                    ${ !isLast
                        ? 'pb-4 border-b border-black hover:border-green-500'
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
  )
}