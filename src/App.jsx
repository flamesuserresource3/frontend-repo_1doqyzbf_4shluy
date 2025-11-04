import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Showcase from './components/Showcase';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090B] antialiased">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.06),transparent_50%)]" />

      <Navbar />
      <main>
        <Hero3D />
        <Services />
        <Showcase />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Tricodeon — Crafted with passion for design, code, and 3D.
          </p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#showcase" className="hover:text-white">Showcase</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
