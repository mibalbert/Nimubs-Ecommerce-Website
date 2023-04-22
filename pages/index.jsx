
/**
 * index.jsx
 */

import { useSession, signIn, signOut } from "next-auth/react";


export default function Home() {

  const { data: session } = useSession();

  if (!session) {

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
    >
      <div className="relative  flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <button onClick={()=> signIn('google')}  className="relative z-50 bg-white rounded-md  text-gray-900 py-2 px-4">
          Log in with Google
        </button>
      </div>
    </main>
  );

  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
    >
      <div>Logged in as {session.user.name}</div>

      <button onClick={ ()=> signOut()} className="bg-white py-2 px-4 text-gray-900 rounded-md">Sign Out</button>

    </main>
  )


}
