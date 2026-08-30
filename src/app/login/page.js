"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const { data: session } = useSession();
  const router = useRouter()

   useEffect(() => {
    if (session) {
      router.push("/Dashboard");
    }
  }, [ session, router])

  

  return (
    <>
  <title>Login - Get Me a Chai</title>

  <div className="relative overflow-hidden min-h-[85vh] flex items-center justify-center px-4 py-12 lg:py-0">
    {/* decorative glow — visual only */}
    <div className="pointer-events-none absolute -top-24 -left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
    <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>

    <div className="relative w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden">
      {/* LEFT — brand panel, desktop only */}
      <div className="hidden lg:flex flex-col justify-between bg-zinc-900 border-r border-zinc-800 p-10">
        <div>
          <span className="text-2xl font-bold text-zinc-100 tracking-tight">
            GetMeAChai
          </span>
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed max-w-xs">
            Sign in to manage your page, track support from your fans, and
            keep the chai flowing.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-sm shrink-0">
              🔒
            </span>
            <p className="text-zinc-400 text-sm">
              Secure sign-in — no passwords to remember or lose.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm shrink-0">
              ⚡
            </span>
            <p className="text-zinc-400 text-sm">
              One click and you're in — your dashboard is ready instantly.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sm shrink-0">
              ☕
            </span>
            <p className="text-zinc-400 text-sm">
              New here? Signing in automatically creates your page.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT — auth form */}
      <div className="flex flex-col items-center justify-center px-6 sm:px-10 py-12 sm:py-16">
        <div className="w-full max-w-sm">
          <h1 className="text-zinc-100 text-2xl sm:text-3xl font-bold text-center mb-2">
            Welcome back
          </h1>
          <p className="text-zinc-400 text-center text-sm mb-10">
            Sign in to continue to Get Me a Chai
          </p>

          <div className="flex flex-col gap-3">
            {/* Google */}
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/Dashboard" })}
              className="flex items-center justify-center gap-3 w-full text-zinc-100 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.766 12.276c0-.818-.074-1.606-.212-2.364H12.24v4.472h6.482a5.54 5.54 0 01-2.402 3.632v3.016h3.887c2.274-2.094 3.559-5.176 3.559-8.756z"
                />
                <path
                  fill="#34A853"
                  d="M12.24 24c3.24 0 5.956-1.075 7.941-2.908l-3.887-3.016c-1.077.722-2.455 1.148-4.054 1.148-3.117 0-5.755-2.104-6.698-4.93H1.526v3.11A11.997 11.997 0 0012.24 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.542 14.294a7.19 7.19 0 010-4.588v-3.11H1.526a12.003 12.003 0 000 10.808l4.016-3.11z"
                />
                <path
                  fill="#EA4335"
                  d="M12.24 4.776c1.762 0 3.343.606 4.588 1.796l3.442-3.442C18.192 1.19 15.476 0 12.24 0A11.997 11.997 0 001.526 6.596l4.016 3.11c.943-2.826 3.581-4.93 6.698-4.93z"
                />
              </svg>
              Continue with Google
            </button>

            {/* GitHub */}
            <button
              type="button"
              onClick={() => signIn("github", { callbackUrl: "/Dashboard" })}
              className="flex items-center justify-center gap-3 w-full text-zinc-100 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.814 1.103.814 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Continue with GitHub
            </button>
          </div>

          <p className="text-zinc-500 text-xs text-center mt-8 leading-relaxed">
            By continuing, you agree to GetMeAChai's{" "}
            <span className="text-amber-400 hover:text-amber-300 cursor-pointer">
              Terms
            </span>{" "}
            and{" "}
            <span className="text-amber-400 hover:text-amber-300 cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
</>
  );
};

export default page;
