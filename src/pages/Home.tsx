import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpenCheck, Github, GraduationCap, Linkedin, Mail, Medal, Trophy } from 'lucide-react';
import Typewriter from '../components/Typewriter';
import Magnetic from '../components/Magnetic';
import TiltCard from '../components/TiltCard';
import ResumeMenu from '../components/ResumeMenu';
import { achievements, deployments, profile, typeWords } from '../data';

const HeroScene = lazy(() => import('../components/HeroScene'));

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-6 px-4 pb-10 pt-10 sm:px-6 lg:min-h-[calc(100svh-64px)] lg:grid-cols-[1.05fr_0.95fr] lg:pt-4">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 min-w-0">
        <span className="chip !normal-case !tracking-normal">
          <span className="h-2 w-2 rounded-full bg-emerald" />
          Available for AI, Data Science &amp; Full-Stack Roles | 15+ Production Repos
        </span>
        <h1 className="text-metal mt-6 font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl xl:text-8xl">
          AJAY
          <br />
          VENKAT A
        </h1>
        <div className="mt-6">
          <Typewriter words={typeWords} />
        </div>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
          Final-year B.Tech student in AI &amp; Data Science. I build agentic RAG systems, computer vision tools and full-stack products for civic and
          business use in Tamil Nadu.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Magnetic>
            <Link to="/projects" className="btn-primary">
              Explore 3D Project Vault <ArrowRight size={16} />
            </Link>
          </Magnetic>
          <ResumeMenu />
        </div>
        <div className="mt-6 flex items-center gap-3">
          <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
          <span className="hidden font-mono text-xs text-slate-500 sm:inline">{profile.email}</span>
        </div>
      </motion.div>
      <div className="relative h-[360px] min-w-0 sm:h-[460px] lg:h-[640px]" aria-hidden="true">
        <div className="pointer-events-none absolute inset-8 rounded-full bg-violet/20 blur-[90px]" />
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>
    </section>
  );
}

function Bento() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <p className="section-eyebrow">Impact &amp; achievements</p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-white [text-wrap:balance] sm:text-4xl">Wins, publications and a degree in progress</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <TiltCard className="p-6 md:col-span-2 md:row-span-2">
          <div className="flex h-full flex-col justify-between gap-8">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gold/10 text-gold shadow-[0_0_50px_-8px_rgba(245,196,81,0.7)]">
              <Trophy size={34} />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-gold">National level</p>
              <h3 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">{achievements.app}</h3>
              <p className="mt-2 text-slate-300">{achievements.appSub}</p>
            </div>
          </div>
        </TiltCard>
        <TiltCard className="p-6 md:col-span-2">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-violet/20 text-violet-soft">
              <Medal size={24} />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white">{achievements.hackTitle}</h3>
              <p className="mt-1 text-sm text-slate-300">{achievements.hackSub}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="chip">5 hackathons</span>
                <span className="chip">2x 1st</span>
                <span className="chip">1x 2nd</span>
              </div>
            </div>
          </div>
        </TiltCard>
        <TiltCard className="p-6 md:col-span-2">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald/15 text-emerald">
              <BookOpenCheck size={24} />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white">{achievements.researchTitle}</h3>
              <p className="mt-1 text-sm text-slate-300">{achievements.researchSub}</p>
            </div>
          </div>
        </TiltCard>
        <TiltCard className="p-6 md:col-span-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">{achievements.academicTitle}</h3>
                <p className="mt-1 text-sm text-slate-300">{achievements.academicSub}</p>
              </div>
            </div>
            <div className="shrink-0 sm:text-right">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">CGPA</p>
              <p className="font-display text-3xl font-extrabold text-cyan">{achievements.cgpa}</p>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}

function Deployments() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-eyebrow">Freelance &amp; civic work</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-white [text-wrap:balance] sm:text-4xl">Live Enterprise &amp; Civic Deployments</h2>
        </div>
        <Link to="/freelance" className="btn-ghost">
          See all deployments <ArrowRight size={16} />
        </Link>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {deployments.map((d) => (
          <TiltCard key={d.id} className="p-6">
            <span className="chip !text-emerald">{d.status}</span>
            <h3 className="mt-4 font-display text-xl font-bold text-white">{d.title}</h3>
            <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-slate-400">{d.summary}</p>
            <p className="mt-5 font-display text-3xl font-extrabold text-cyan">{d.metric}</p>
            <p className="text-xs text-slate-500">{d.metricLabel}</p>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="glass flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">Have a product or a role in mind?</h2>
          <p className="mt-2 text-slate-400">Open to AI, data science and full-stack work, including freelance projects.</p>
        </div>
        <Magnetic>
          <Link to="/contact" className="btn-primary">
            Get in touch <ArrowRight size={16} />
          </Link>
        </Magnetic>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Bento />
      <Deployments />
      <Cta />
    </main>
  );
}
