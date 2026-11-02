import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../components/PageHeader';
import { timeline } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const wrap = useRef<HTMLDivElement>(null);
  const beam = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        beam.current,
        { scaleY: 0 },
        { scaleY: 1, ease: 'none', scrollTrigger: { trigger: wrap.current, start: 'top 65%', end: 'bottom 75%', scrub: true } },
      );
      gsap.utils.toArray<HTMLElement>('[data-node]').forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 68%',
          onEnter: () => el.classList.add('is-lit'),
          onLeaveBack: () => el.classList.remove('is-lit'),
        });
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <main className="mx-auto max-w-5xl px-4 pb-10 pt-12 sm:px-6">
      <PageHeader eyebrow="Internship timeline" title="Four internships across ML, analytics and apps" intro="Scroll to light up the timeline, newest role first." />
      <div ref={wrap} className="relative mt-16 pl-10 sm:pl-16">
        <div className="absolute bottom-0 left-[15px] top-0 w-px bg-white/10 sm:left-[23px]" />
        <div
          ref={beam}
          className="absolute bottom-0 left-[14px] top-0 w-[3px] origin-top rounded-full bg-gradient-to-b from-cyan via-violet to-emerald shadow-[0_0_18px_rgba(0,240,255,0.8)] sm:left-[22px]"
        />
        <ol className="space-y-10">
          {timeline.map((t) => (
            <li key={t.org} data-node className="group relative">
              <span className="absolute -left-[34px] top-6 h-4 w-4 rounded-full border-2 border-white/30 bg-obsidian transition-all duration-500 group-[.is-lit]:border-cyan group-[.is-lit]:bg-cyan group-[.is-lit]:shadow-[0_0_22px_6px_rgba(0,240,255,0.7)] sm:-left-[50px]" />
              <div className="glass p-6 opacity-70 transition-all duration-500 group-[.is-lit]:opacity-100 group-[.is-lit]:border-cyan/40 sm:p-7">
                <p className="font-mono text-xs uppercase tracking-widest text-cyan">{t.dates}</p>
                <h2 className="mt-2 font-display text-2xl font-extrabold text-white">{t.org}</h2>
                <p className="mt-1 text-sm font-semibold text-violet-soft">{t.role}</p>
                <p className="mt-3 leading-relaxed text-slate-300">{t.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
