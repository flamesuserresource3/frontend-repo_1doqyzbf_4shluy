import { motion } from 'framer-motion';
import { Code2, Layers, Cpu, Globe2 } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Applications',
    desc: 'Robust, scalable, and accessible apps built with modern stacks and best practices.'
  },
  {
    icon: Layers,
    title: 'Product Design',
    desc: 'UX/UI systems, design languages, and prototypes that turn ideas into sticky products.'
  },
  {
    icon: Cpu,
    title: 'AI Integrations',
    desc: 'From copilots to automations — practical AI embedded into your workflows.'
  },
  {
    icon: Globe2,
    title: '3D & WebXR',
    desc: 'Immersive 3D, motion, and interactive experiences powered by WebGL and Spline.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-slate-900 sm:text-4xl"
        >
          What we craft
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-base text-slate-600 sm:text-lg"
        >
          End‑to‑end product development — from vision and design to deployment and iteration.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100 blur-2xl transition-transform duration-300 group-hover:scale-125" />
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-200">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            <div className="mt-4 text-sm font-medium text-blue-600">Learn more →</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
