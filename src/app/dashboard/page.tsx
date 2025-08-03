import Header from '@/components/Header';
import Card from '@/components/Card';

export default function Dashboard() {
  return (
      <>
        <Header/>
        <main className="w-full flex items-center justify-center h-full absolute">
          <div className="w-full max-w-[1440px] grid grid-cols-[1fr_3fr_2fr] h-full gap-4">
            <Card >OLA POVO</Card>
            <div className="flex flex-col w-full h-full">
              <Card background={ 'bg-gray-300' }>
                <div className="">
                  e ai
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </div>
              </Card>
              <Card background={ 'bg-cyan-900' }>
                <div className="">
                  e ai
                </div>
              </Card>
            </div>
            <Card height={'h-[512px]'}>Erro encontrado!</Card>
          </div>
        </main>
      </>
  )
}