"use client";
import { signOut, useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [dropdown, setdropdown] = useState(false);
  const { data: session } = useSession();
  return (
    <>
      <nav className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-zinc-800 sticky top-0 z-30 bg-zinc-950/80 backdrop-blur-md">
        <Link
          href="/"
          className="cursor-pointer text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight"
        >
          GetMeAChai
        </Link>

        <div className="flex gap-3 sm:gap-6 items-center">
          <Link
            href="/about"
            className="hidden sm:inline-block text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            About
          </Link>

          {session && (
            <>
              <div className="relative">
                <button
                  onClick={() => setdropdown(!dropdown)}
                  id="dropdownDefaultButton"
                  className="inline-flex items-center justify-center gap-1.5 text-zinc-950 bg-amber-500 hover:bg-amber-400 border border-transparent focus:ring-4 focus:ring-amber-500/30 shadow-sm font-semibold leading-5 rounded-xl text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 focus:outline-none transition-colors cursor-pointer"
                  type="button"
                >
                  <span className="max-w-[8rem] sm:max-w-none truncate">
                    Welcome {session.user.name}
                  </span>
                  <svg
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${dropdown ? "rotate-180" : ""}`}
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
                  id="dropdown"
                  onBlur={() => {
                    setdropdown(false);
                  }}
                  className={`absolute right-0 mt-2 z-20 origin-top-right transition-all duration-150 ${
                    dropdown
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  } bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl shadow-black/40 w-48`}
                >
                  <ul
                    className="p-2 text-sm text-zinc-300 font-medium"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <Link
                        href="/about"
                        className="flex sm:hidden items-center w-full px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="Dashboard"
                        className="flex items-center w-full px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <a
                        href={`/${session.user.name}`}
                        className="flex items-center w-full px-3 py-2 rounded-lg hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
                      >
                        Your Profile
                      </a>
                    </li>

                    <li className="border-t border-zinc-800 mt-1 pt-1">
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
                className="text-zinc-950 bg-amber-500 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-500/30 font-semibold rounded-xl text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 text-center leading-5 border-0 transition-colors cursor-pointer"
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
