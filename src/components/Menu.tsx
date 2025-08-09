import { Card } from "miragem-ds";


const menuItems = [
  { link: '#', text: 'Início' },
  { link: '#', text: 'Transferências' },
  { link: '#', text: 'Investimentos' },
  { link: '#', text: 'Outros serviços' }
];

export function Menu() {

  return (
    <Card
      isImageBackground={ true }
      heightAuto={ true }
      positionImageBackground={'bottom-left'}
      isPixelsImages={false}
      sidePixelsImages='left'
    >
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
  )
}