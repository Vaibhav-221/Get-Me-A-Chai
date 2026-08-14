export default function Footer() {
  return (
    <footer className="border-t py-4 text-center text-gray-600">
      <p>
        © {new Date().getFullYear()} GetMeAChai. All rights reserved.
      </p>

      <p className="mt-1 text-sm">
        Designed & Developed by{" "}
        <span className="font-semibold">Vaibhav Singh</span>
      </p>
    </footer>
  );
}