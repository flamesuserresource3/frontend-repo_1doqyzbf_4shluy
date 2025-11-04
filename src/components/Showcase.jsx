import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Nebula CRM',
    desc: 'A high‑performance CRM with real‑time analytics and modular workflows.',
    tags: ['React', 'FastAPI', 'Postgres'],
    color: 'from-blue-50 to-sky-50',
  },
  {
    title: 'Quanta Docs',
    desc: 'AI‑assisted documentation platform with semantic search and chat.',
    tags: ['Next.js', 'OpenAI', 'Vector DB'],
    color: 'from-sky-50 to-blue-50',
  },
  {
    title: 'Orbit Commerce',
    desc: 'Composable storefront with 3D product previews and edge delivery.',
    tags: ['Remix', 'Stripe', 'Three.js'],
    color: 'from-blue-50 to-blue-100',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-slate-900 sm:text-4xl"
        >
          Selected work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-base text-slate-600 sm:text-lg"
        >
          A snapshot of products we’ve shipped with partners across fintech, SaaS, and retail.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${p.color} p-6 text-slate-900`}
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="pointer-events-none absolute -inset-24 animate-pulse rounded-full bg-blue-100 blur-3xl" />
            </div>
            <div className="flex h-40 items-end justify-between rounded-xl bg-white/70 p-4 ring-1 ring-slate-200">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </div>
              <div className="text-5xl font-black tracking-tighter text-slate-200">{i + 1}</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <div id="contact" className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 text-slate-900"
        >
          <h3 className="text-xl font-semibold">Let’s build together</h3>
          <p className="mt-2 text-sm text-slate-600">
            Tell us about your idea, and we’ll make it real. We usually respond within one business day.
          </p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          onSubmit={(e) => e.preventDefault()}
          className="lg:col-span-2"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-0" placeholder="Your name" />
            <input className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-0" placeholder="Email address" type="email" />
            <input className="sm:col-span-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-0" placeholder="Company / Project" />
            <textarea className="sm:col-span-2 h-28 resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-0" placeholder="Tell us more" />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-slate-500">By sending, you agree to our friendly privacy policy.</p>
            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-transform hover:scale-[1.02]">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
