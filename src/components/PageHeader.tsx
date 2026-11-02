import { motion } from 'framer-motion';

export default function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] text-white [text-wrap:balance] sm:text-5xl md:text-6xl">{title}</h1>
      {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">{intro}</p>}
    </motion.div>
  );
}
