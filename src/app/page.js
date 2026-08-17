import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="uppebody flex flex-col h-[35vh] justify-center items-center">
        <div className="title text-5xl font-bold"> Get Me a Chai</div>
        <div className="text-slate-400 pt-3 py-5">
          Get-Me-A-Chai is a Next.js-based platform where creators can receive
          small monetary support from their audience via a simple, shareable
          profile page — inspired by 'Buy Me a Coffee.
        </div>
        <div className="buttons gap-4 pt-3 flex">
          <Link href="login">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 border-0 rounded-xl flex gap-1"
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
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 border-0 rounded-xl"
          >
            Raad More
          </button>
        </div>
        {/* seperator and below content  */}
      </div>
      <div className="border-t border-indigo-100/40 max-w-6xl mx-auto"></div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
          Your Fans can buy you a Chai
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Laptop / Work */}
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
              <svg
                className="w-12 h-12 text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Fans want to help
            </h3>
            <p className="text-slate-400 text-sm">
              Your fans are available for you to help you
            </p>
          </div>

          {/* Card 2 - Support / Ruler */}
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
              <svg
                className="w-12 h-12 text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Fans want to help
            </h3>
            <p className="text-slate-400 text-sm">
              Your fans are available for you to help you
            </p>
          </div>

          {/* Card 3 - Community / People */}
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
              <svg
                className="w-12 h-12 text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Fans want to help
            </h3>
            <p className="text-slate-400 text-sm">
              Your fans are available for you to help you
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
