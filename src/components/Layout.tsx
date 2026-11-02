import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from './CustomCursor';
import { ResumeProvider, useResumeModal } from './ResumeModal';
import { profile } from '../data';

gsap.registerPlugin(ScrollTrigger);

const links = [
  { to: '/', label: 'Home' },
  { to: '/freelance', label: 'Freelance' },
  { to: '/projects', label: 'Project Vault' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const resume = useResumeModal();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-obsidian/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="font-display text-lg font-extrabold tracking-wide text-white">
          AJAY<span className="text-cyan">.</span>VENKAT
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition-colors ${isActive ? 'bg-cyan/10 text-cyan' : 'text-slate-300 hover:text-white'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="btn-primary !px-4 !py-2" onClick={resume.open}>
            Resumes
          </button>
          <button className="icon-btn lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/[0.07] px-4 pb-4 pt-2 lg:hidden" aria-label="Mobile">
          <div className="grid gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `rounded-lg px-3 py-3 text-sm ${isActive ? 'bg-cyan/10 text-cyan' : 'text-slate-300'}`}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  const resume = useResumeModal();
  return (
    <footer className="mt-24 border-t border-white/[0.07]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-bold text-white">Ajay Venkat A</p>
          <p className="mt-1 text-sm text-slate-400">AI Engineer, Data Scientist and Full-Stack Freelance Architect. {profile.location}.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="btn-ghost !py-2" onClick={resume.open}>
            Role-based resumes
          </button>
          <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <p className="pb-8 text-center font-mono text-xs text-slate-600">Built with React, Three.js, Framer Motion and GSAP.</p>
    </footer>
  );
}

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ lerp: 0.1 });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ResumeProvider>
      <CustomCursor />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black">
        Skip to content
      </a>
      <Nav />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </ResumeProvider>
  );
}
