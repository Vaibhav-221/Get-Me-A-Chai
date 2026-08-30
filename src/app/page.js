import Link from "next/link";

export default function Home() {
  return (
   <>
  {/* HERO */}
  <div className="relative overflow-hidden bg-zinc-950">
    {/* decorative glow blobs — purely visual, no logic */}
    <div className="pointer-events-none absolute -top-32 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse [animation-duration:6s]"></div>
    <div className="pointer-events-none absolute top-20 -right-16 w-64 h-64 sm:w-80 sm:h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse [animation-duration:8s]"></div>

    <div className="relative flex flex-col min-h-[70vh] justify-center items-center px-5 text-center py-16">
      <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
        ☕ Support creators, one chai at a time
      </span>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-100 tracking-tight max-w-3xl">
        Get Me a <span className="text-amber-400">Chai</span>
      </h1>

      <p className="text-zinc-400 pt-5 pb-3 max-w-xs sm:max-w-md md:max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
        Get-Me-A-Chai is a Next.js-based platform where creators can receive
        small monetary support from their audience via a simple, shareable
        profile page — inspired by "Buy Me a Coffee." No middlemen, no
        clutter — just your work and the people who want to back it.
      </p>

      <div className="buttons gap-3 sm:gap-4 pt-5 flex flex-col sm:flex-row w-full sm:w-auto">
        <Link href="login" className="w-full sm:w-auto">
          <button
            type="button"
            className="w-full sm:w-auto justify-center text-zinc-950 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 font-semibold text-sm px-6 py-3 text-center leading-5 border-0 rounded-xl flex items-center gap-1.5 cursor-pointer transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-lg shadow-amber-500/20"
          >
            <span>Start Now</span>
            <svg
              className="w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </Link>
        <Link href="/about" className="w-full sm:w-auto">
          <button
            type="button"
            className="w-full sm:w-auto justify-center text-zinc-100 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 font-semibold text-sm px-6 py-3 text-center cursor-pointer leading-5 rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-95"
          >
            Read More
          </button>
        </Link>
      </div>

      <p className="text-zinc-500 text-xs sm:text-sm pt-6">
        Free to start · Set up your page in minutes
      </p>
    </div>
  </div>

  <div className="border-t border-zinc-800 max-w-6xl mx-auto"></div>

  {/* FEATURES */}
  <div className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 bg-zinc-950">
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-zinc-100 text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
        Your fans can buy you a chai
      </h2>
      <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto">
        Every creator starts somewhere small. GetMeAChai gives your
        supporters an easy, direct way to say "thank you" — and gives you a
        page you'll actually be proud to share.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
      {/* Card 1 */}
      <div className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:bg-zinc-900">
        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 text-2xl transition-transform duration-300 group-hover:scale-110">
          ☕
        </div>
        <h3 className="text-zinc-100 font-semibold text-lg mb-2">
          Fans want to help
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Your audience is already rooting for you. Give them a real,
          frictionless way to show it — a single chai at a time.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-zinc-900">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 text-2xl transition-transform duration-300 group-hover:scale-110">
          ⚡
        </div>
        <h3 className="text-zinc-100 font-semibold text-lg mb-2">
          Live in minutes
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Sign up, personalize your profile, and share your link. No
          approvals, no waiting, no complicated setup.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-zinc-900 sm:col-span-2 md:col-span-1">
        <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-5 text-2xl transition-transform duration-300 group-hover:scale-110">
          🌍
        </div>
        <h3 className="text-zinc-100 font-semibold text-lg mb-2">
          Built for community
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Every supporter shows up on your public page — a visible, growing
          record of the people backing your work.
        </p>
      </div>
    </div>
  </div>

  <div className="border-t border-zinc-800 max-w-6xl mx-auto"></div>

  {/* HOW IT WORKS */}
  <div className="max-w-5xl mx-auto px-5 sm:px-6 py-16 sm:py-20">
    <h2 className="text-zinc-100 text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16">
      How it works
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
      {/* connecting line on desktop */}
      <div className="hidden md:block absolute top-6 left-[16.5%] right-[16.5%] h-px bg-zinc-800"></div>

      {[
        {
          step: "01",
          title: "Create your page",
          desc: "Sign up and set up your profile in a few clicks — no code required.",
          color: "amber",
        },
        {
          step: "02",
          title: "Share your link",
          desc: "Drop it in your bio, videos, or newsletter so fans always know where to find you.",
          color: "emerald",
        },
        {
          step: "03",
          title: "Get supported",
          desc: "Receive chai from your fans and watch your supporter wall grow.",
          color: "sky",
        },
      ].map((item) => (
        <div key={item.step} className="relative flex flex-col items-center text-center">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mb-5 border relative z-10 bg-zinc-950 ${
              item.color === "amber"
                ? "border-amber-500/40 text-amber-400"
                : item.color === "emerald"
                ? "border-emerald-500/40 text-emerald-400"
                : "border-sky-500/40 text-sky-400"
            }`}
          >
            {item.step}
          </div>
          <h3 className="text-zinc-100 font-semibold text-base sm:text-lg mb-2">
            {item.title}
          </h3>
          <p className="text-zinc-400 text-sm max-w-[16rem]">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  <div className="border-t border-zinc-800 max-w-6xl mx-auto"></div>

  {/* TESTIMONIAL */}
  <div className="max-w-3xl mx-auto px-5 sm:px-6 py-16 sm:py-20 text-center">
    <div className="text-amber-400 text-4xl mb-4">"</div>
    <p className="text-zinc-200 text-lg sm:text-xl font-medium leading-relaxed mb-5">
      Setting up my page took less time than making my morning chai. My
      followers finally have a simple way to support what I make.
    </p>
    <p className="text-zinc-500 text-sm">— A creator using GetMeAChai</p>
  </div>

  {/* FINAL CTA */}
  <div className="max-w-6xl mx-auto px-5 sm:px-6 pb-16 sm:pb-20">
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 to-orange-600 px-6 sm:px-12 py-12 sm:py-16 text-center">
      <div className="pointer-events-none absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
      <h2 className="text-zinc-950 text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
        Ready to get your first chai?
      </h2>
      <p className="text-zinc-900/80 text-sm sm:text-base max-w-md mx-auto mb-7">
        Join creators who've turned casual support into something real.
      </p>
      <Link href="login">
        <button
          type="button"
          className="bg-zinc-950 text-zinc-100 hover:bg-zinc-900 font-semibold text-sm px-7 py-3 rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer"
        >
          Start Now — It's Free
        </button>
      </Link>
    </div>
  </div>
</>
  );
}
