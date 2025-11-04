import { useState } from 'react';
import { Menu, X, Rocket, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 animate-pulse rounded-lg bg-gradient-to-br from-cyan-400/40 via-fuchsia-400/30 to-purple-500/40 blur-md" />
                <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg">
                  <Rocket className="h-5 w-5" />
                </div>
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-fuchsia-300 bg-clip-text text-transparent">Tricodeon</span>
              </span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02]"
              >
                <Sparkles className="h-4 w-4" /> Start a Project
              </a>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {open ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </nav>

          {open && (
            <div className="md:hidden">
              <div className="space-y-1 border-t border-white/10 px-4 py-3 sm:px-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg"
                >
                  <Sparkles className="h-4 w-4" /> Start a Project
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
