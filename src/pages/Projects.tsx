import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import TiltCard from '../components/TiltCard';
import { categories, profile, projects } from '../data';

export default function Projects() {
  const [cat, setCat] = useState<(typeof categories)[number]>('All');
  const list = useMemo(() => (cat === 'All' ? projects : projects.filter((p) => p.cats.includes(cat))), [cat]);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6">
      <PageHeader
        eyebrow="3D project vault"
        title="Projects, filtered by what you need"
        intro="Agentic RAG, computer vision, analytics and full-stack builds. Every card with a repository links straight to GitHub."
      />
      <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              cat === c ? 'border-cyan bg-cyan/10 text-cyan' : 'border-white/15 text-slate-300 hover:border-white/40'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div key={p.name} layout initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.3 }}>
              <TiltCard className="h-full p-6">
                <div className="flex h-full flex-col">
                  <div className="flex flex-wrap gap-2">
                    {p.cats.map((c) => (
                      <span key={c} className="chip">
                        {c}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold text-white">{p.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-md bg-white/[0.06] px-2 py-1 font-mono text-[11px] text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-6">
                    {p.repo ? (
                      <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-white">
                        <Github size={16} /> View on GitHub <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-slate-500">Repository on request</span>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
          {cat === 'All' && (
            <motion.a
              key="all-repos"
              layout
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="glass glass-hover flex min-h-[220px] flex-col items-start justify-between bg-gradient-to-br from-cyan/10 to-violet/20 p-6"
            >
              <Github size={30} className="text-white" />
              <div>
                <p className="font-display text-2xl font-extrabold text-white">View All 15+ Repositories on GitHub</p>
                <p className="mt-1 inline-flex items-center gap-1 text-sm text-cyan">
                  github.com/ajay-venkat <ArrowUpRight size={14} />
                </p>
              </div>
            </motion.a>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
