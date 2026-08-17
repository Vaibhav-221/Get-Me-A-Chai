"use client"
import { signOut, useSession, signIn } from "next-auth/react";
import Link from "next/link";


export default function Navbar() {
    const { data: session } = useSession();
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 border-b sticky top-0 backdrop-blur-3xl">
        <Link href="/" className="text-2xl font-bold">
          GetMeAChai
        </Link>

        <div className="flex gap-6 items-center">
          {session && (
            <Link href="">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 border-0 rounded-xl"
              >
                Dashboard
              </button>
            </Link>
          )}
          {session && (
       
              <button
                type="button"
                onClick={() => {
                  signOut();
                }}
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 border-0 rounded-xl"
              >
                Sign Out
              </button>
    
          )}
          {!session &&
          <Link href="login">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 border-0 rounded-xl"
            >
              Login
            </button>
          </Link>
}
        </div>
      </nav>
    </>
  );
}
