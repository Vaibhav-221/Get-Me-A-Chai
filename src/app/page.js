import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="uppebody flex flex-col h-[35vh] justify-center items-center">
        <div className="title text-5xl font-bold"> Get Me a Chai</div>
        <div className="text-gray-300 pt-3">
          Get-Me-A-Chai is a Next.js-based platform where creators can receive
          small monetary support from their audience via a simple, shareable
          profile page — inspired by 'Buy Me a Coffee.
        </div>
        <div className="buttons">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 border-0 rounded-xl">Start now</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 border-0 rounded-xl">Raad More</button>
        </div>
      </div>
    </>
  );
}
