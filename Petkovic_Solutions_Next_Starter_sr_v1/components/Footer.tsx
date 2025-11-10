export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border/70">
      <div className="container py-8 text-sm text-gray-400 flex flex-col md:flex-row gap-4 items-center justify-between">
        <p>© {new Date().getFullYear()} Petković Solutions. Sva prava zadržana.</p>
        <div className="flex gap-4">
          <a href="mailto:info@petkovicsolutions.com" className="hover:text-accent">Email</a>
          <a href="#" className="hover:text-accent">LinkedIn</a>
          <a href="#" className="hover:text-accent">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
