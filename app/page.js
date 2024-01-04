import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className=''>
        <Sidebar />
        {/* Center */}
      </main>

     <div>{/* Player */}</div>
    </div>
  )
}
