import { useState } from 'react';
import { Menu, X, Rocket, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#showcase' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 animate-pulse rounded-lg bg-gradient-to-br from-blue-400/30 to-sky-400/30 blur-md" />
                <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg">
                  <Rocket className="h-5 w-5" />
                </div>
              </div>
              <span className="text-lg font-semibold tracking-tight text-slate-900">
                <span className="bg-gradient-to-r from-slate-900 via-blue-700 to-sky-600 bg-clip-text text-transparent">Tricodeon</span>
              </span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-700 transition-colors hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-transform hover:scale-[1.02]"
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
                <X className="h-6 w-6 text-slate-900" />
              ) : (
                <Menu className="h-6 w-6 text-slate-900" />
              )}
            </button>
          </nav>

          {open && (
            <div className="md:hidden">
              <div className="space-y-1 border-t border-slate-200 px-4 py-3 sm:px-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-2 text-sm font-medium text-white shadow-lg"
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
