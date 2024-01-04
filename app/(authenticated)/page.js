import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import { getAuthSession } from '../utils/serverUtils';
import { redirect } from "next/navigation";


export default async function Home() {
  const session = await getAuthSession();
  console.log('ini si sessionnya', {session})
  if (!session) {
    redirect("/login");
  }

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
