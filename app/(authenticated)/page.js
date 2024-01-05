import Sidebar from '@/components/Sidebar';
import Center from '@/components/Center';
import Image from 'next/image';
import { getAuthSession } from '../utils/serverUtils';
import { redirect } from "next/navigation";
import { getSession } from 'next-auth/react';


export default async function Home(props) {
  const session = await getAuthSession();

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

async function getSessions(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    }
  }
}