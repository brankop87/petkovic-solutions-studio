export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-emerald-700 text-gray-300 text-center py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 space-y-3">
        <p className="text-emerald-400 font-semibold text-lg">
          Petković Solutions Studio
        </p>
        <p className="text-sm text-gray-400">
          Deo Petciety ekosistema — digitalna rešenja za pametan rast.
        </p>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Petković Solutions. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}
