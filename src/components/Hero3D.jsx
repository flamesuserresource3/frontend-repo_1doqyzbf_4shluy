import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section id="home" className="relative isolate pt-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.20),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(217,70,239,0.18),transparent_45%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="order-2 space-y-6 pb-10 lg:order-1 lg:py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Building next‑gen digital products with precision and flair.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Tricodeon is a software studio crafting elegant web apps, immersive experiences, and scalable platforms. We unite design, 3D, and engineering to ship what matters.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02]"
            >
              Explore Services
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10"
            >
              View Showcase
            </a>
          </motion.div>

          <div className="mt-6 grid max-w-2xl grid-cols-3 gap-6 text-center sm:text-left">
            {[
              { k: 'Projects', v: '120+' },
              { k: 'Uptime', v: '99.98%' },
              { k: 'Satisfaction', v: '4.9/5' },
            ].map((stat) => (
              <motion.div
                key={stat.k}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 text-white"
              >
                <div className="text-2xl font-semibold">{stat.v}</div>
                <div className="text-xs uppercase tracking-wide text-white/60">{stat.k}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="order-1 h-[55vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl lg:order-2 lg:h-[80vh]">
          <Spline
            scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
