import React from 'react'

const page = () => {
  return (
    <>
     <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="w-full max-w-md">
        {/* Heading */}
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-2">
          Welcome back
        </h1>
        <p className="text-slate-400 text-center text-sm mb-10">
          Sign in to continue to Get Me a Chai
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          {/* Google */}
          <button
            type="button"
            className="flex items-center justify-center gap-3 w-full text-white bg-white/5 border border-indigo-500/20 hover:bg-white/10 hover:border-indigo-500/40 rounded-xl px-4 py-3 text-sm font-medium transition-colors"
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
            className="flex items-center justify-center gap-3 w-full text-white bg-white/5 border border-indigo-500/20 hover:bg-white/10 hover:border-indigo-500/40 rounded-xl px-4 py-3 text-sm font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.814 1.103.814 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Continue with GitHub
          </button>

          {/* Twitter / X */}
          <button
            type="button"
            className="flex items-center justify-center gap-3 w-full text-white bg-white/5 border border-indigo-500/20 hover:bg-white/10 hover:border-indigo-500/40 rounded-xl px-4 py-3 text-sm font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Continue with X
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 py-2">
            <div className="flex-1 border-t border-indigo-500/20"></div>
            <span className="text-slate-500 text-xs">OR</span>
            <div className="flex-1 border-t border-indigo-500/20"></div>
          </div>

          {/* Email option */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl rounded-xl px-4 py-3 text-sm font-medium transition-all group"
          >
            Continue with Email
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        <p className="text-slate-500 text-xs text-center mt-8">
          Don't have an account?{" "}
          <span className="text-indigo-400 hover:text-indigo-300 cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div></>
  )
}

export default page
