import Header from '@/components/Header';
import Card from '@/components/Card';

export default function Dashboard() {
  return (
      <>
          <Header />
          <main className="max-w-[1200px] mx-auto">
            <div className="w-full grid grid-cols-1 gap-[24px] sm:gap-[32px] 2xl:grid 2xl:grid-cols-3 2xl:gap-[24px]">
              oi
            <Card width={'w-[180px]'} height={'h-auto'}>
              <span>
                e ai
              </span>
            </Card>
            <div className="w-full">
              <Card background={'bg-gray-300'}>
                <div className="">
                  e ai
                </div>
              </Card>
              <Card background={'bg-cyan-900'}>
            <div className="">
              e ai
            </div>
          </Card>
            </div>
            <Card>
              <div className=""></div>
            </Card>
            </div>
          </main>
      </>
  )
}