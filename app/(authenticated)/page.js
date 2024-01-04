import Sidebar from '@/components/Sidebar';
import Center from '@/components/Center';
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
      <main className='flex'>
        <Sidebar />
        <Center session={session}/>
      </main>

     <div>{/* Player */}</div>
    </div>
  )
}
