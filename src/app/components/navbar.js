"use client";
import { signOut, useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [dropdown, setdropdown] = useState(false);
  const { data: session } = useSession();
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 border-b sticky top-0 backdrop-blur-3xl">
        <Link href="/" className=" cursor-pointer text-2xl font-bold">
          GetMeAChai
        </Link>

        <div className="flex gap-6 items-center">
          {session && (
            <>
              <div className="relative">
                <button
                  onClick={() => setdropdown(!dropdown)}
                  id="dropdownDefaultButton"
                  className="inline-flex items-center justify-center gap-1.5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 border border-transparent focus:ring-4 focus:ring-indigo-500/40 shadow-md font-medium leading-5 rounded-xl text-sm px-4 py-2.5 focus:outline-none transition-all cursor-pointer"
                  type="button"
                >
                   welcome {session.user.name}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${dropdown ? "rotate-180" : ""}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  id="dropdown" onBlur={() => {setdropdown(false)
                    
                  }
                  }
                  className={`absolute right-0 mt-2 z-20 origin-top-right transition-all duration-150 ${
                    dropdown
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  } bg-[#0a0e1f] border border-indigo-500/20 rounded-xl shadow-xl shadow-black/40 w-44`}
                >
                  <ul
                    className="p-2 text-sm text-gray-200 font-medium"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <Link
                        href="Dashboard"
                        className="flex items-center w-full px-3 py-2 rounded-lg hover:bg-indigo-500/10 hover:text-white transition-colors"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <a
                        href={`/${session.user.name}`}
                        className="flex items-center w-full px-3 py-2 rounded-lg hover:bg-indigo-500/10 hover:text-white transition-colors"
                      >
                        Your Profile
                      </a>
                    </li>
                   
                    <li className="border-t border-indigo-500/10 mt-1 pt-1">
                      <a
                        href="#"
                        onClick={() => signOut()}
                        className="flex items-center w-full px-3 py-2 rounded-lg hover:bg-red-500/10 hover:text-red-400 transition-colors cursor-pointer"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {!session && (
            <Link href="login">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 border-0 rounded-xl"
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
