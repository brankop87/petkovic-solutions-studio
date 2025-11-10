export default function Footer() {
  return (
    <footer className="w-full bg-[#F9EBD0] border-t border-emerald-200 text-center py-8 text-sm text-gray-700">
      <div className="space-y-2">
        <p className="font-medium text-emerald-600">
          © {new Date().getFullYear()} Petković Solutions Studio
        </p>
        <p>Deo Petciety ekosistema — digitalna rešenja za pametan rast.</p>
        <p className="text-gray-500">
          Izgrađeno s ljubavlju i tehnologijom 💡
        </p>
      </div>
    </footer>
  );
}
