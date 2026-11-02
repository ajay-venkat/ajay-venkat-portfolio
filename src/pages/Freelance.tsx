import { motion } from 'framer-motion';
import { ExternalLink, Landmark, Store, Ticket, type LucideIcon } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { deployments } from '../data';

const icons: Record<string, LucideIcon> = { mla: Landmark, bakery: Store, pds: Ticket };

export default function Freelance() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6">
      <PageHeader
        eyebrow="Freelance & civic production"
        title="Live Enterprise & Civic Deployments"
        intro="Real products built for real users: a constituency office, a 25-branch bakery brand and public ration shops."
      />
      <div className="mt-14 space-y-6">
        {deployments.map((d, i) => {
          const Icon = icons[d.id] ?? Landmark;
          return (
            <motion.article
              key={d.id}
              initial={{ opacity: 0, y: 40, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              style={{ transformPerspective: 1000, top: `${96 + i * 18}px` }}
              className="glass sticky grid gap-8 !bg-panel/90 p-6 sm:p-8 md:grid-cols-[1fr_260px]"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan/10 text-cyan">
                    <Icon size={24} />
                  </span>
                  <span className="chip !text-emerald">{d.status}</span>
                </div>
                <h2 className="mt-5 font-display text-2xl font-extrabold text-white [text-wrap:balance] sm:text-3xl">{d.title}</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-slate-300">{d.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {d.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                {d.repo && (
                  <a href={d.repo} target="_blank" rel="noreferrer" className="btn-ghost mt-6 !py-2">
                    View repository <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/10 via-transparent to-violet/20 p-6">
                <p className="font-display text-5xl font-extrabold text-white">{d.metric}</p>
                <p className="mt-2 text-sm text-slate-400">{d.metricLabel}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </main>
  );
}
