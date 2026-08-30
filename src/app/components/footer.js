export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-6 px-5 text-center">
      <p className="text-sm text-zinc-500">
        © {new Date().getFullYear()} GetMeAChai. All rights reserved.
      </p>

      <p className="mt-1 text-xs sm:text-sm text-zinc-600">
        Designed & Developed by{" "}
        <span className="font-semibold text-zinc-400">Vaibhav Singh</span>
      </p>
    </footer>
  );
}