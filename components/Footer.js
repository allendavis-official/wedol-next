export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 grid place-content-center text-white">
            W
          </div>
          <span className="text-sm font-semibold text-gray-800">WEDOL</span>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Women Education and Development
          Organization of Liberia.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#about" className="text-gray-600 hover:text-emerald-700">
            About
          </a>
          <a href="#programs" className="text-gray-600 hover:text-emerald-700">
            Programs
          </a>
          <a href="#contact" className="text-gray-600 hover:text-emerald-700">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
