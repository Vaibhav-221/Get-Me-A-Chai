import Link from "next/link";

export default function Navbar() {
  return (
    <>
    <nav className="flex items-center justify-between px-8 py-4 border-b sticky top-0 backdrop-blur-3xl">
      <Link href="/" className="text-2xl font-bold">
        GetMeAChai
      </Link>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </nav>
    </>
  );
}