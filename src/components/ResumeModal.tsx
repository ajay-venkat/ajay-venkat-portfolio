import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, ExternalLink, X } from 'lucide-react';
import { resumes } from '../data';

const Ctx = createContext<{ open: () => void }>({ open: () => {} });
export const useResumeModal = () => useContext(Ctx);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [sel, setSel] = useState(resumes[0]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <Ctx.Provider value={{ open: () => setOpen(true) }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Role-based resumes"
              className="glass flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden !bg-panel md:flex-row"
              initial={{ y: 30, scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex shrink-0 flex-col gap-2 border-b border-white/10 p-4 md:w-72 md:border-b-0 md:border-r">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="section-eyebrow">Resume hub</p>
                    <h2 className="mt-1 font-display text-xl font-bold text-white">Pick a role</h2>
                  </div>
                  <button className="icon-btn !h-9 !w-9" onClick={() => setOpen(false)} aria-label="Close resume hub">
                    <X size={16} />
                  </button>
                </div>
                <p className="text-xs text-slate-400">One-page, black and white, ATS-friendly. Each resume is tailored to the role.</p>
                <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-1">
                  {resumes.map((r) => (
                    <button
                      key={r.key}
                      onClick={() => setSel(r)}
                      className={`rounded-xl border px-3 py-2.5 text-left text-sm transition-colors ${
                        sel.key === r.key ? 'border-cyan/70 bg-cyan/10 text-white' : 'border-white/10 text-slate-300 hover:border-white/30'
                      }`}
                    >
                      <span className="block font-semibold">{r.label}</span>
                      <span className="hidden text-xs text-slate-400 md:block">{r.note}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-auto flex flex-col gap-2 pt-2">
                  <a className="btn-primary justify-center" href={sel.file} download>
                    <Download size={16} /> Download PDF
                  </a>
                  <a className="btn-ghost justify-center" href={sel.file} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> Open in new tab
                  </a>
                </div>
              </div>
              <div className="hidden min-h-0 flex-1 bg-white md:block">
                <iframe key={sel.key} title={`${sel.label} resume preview`} src={`${sel.file}#toolbar=0&navpanes=0`} className="h-full w-full" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}
