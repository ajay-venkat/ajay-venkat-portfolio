import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { resumes } from '../data';

export default function ResumeMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button className="btn-ghost" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <Download size={16} /> Download Role-Specific Resume <ChevronDown size={14} className={open ? 'rotate-180 transition-transform' : 'transition-transform'} />
      </button>
      {open && (
        <div role="menu" className="glass absolute left-0 top-full z-30 mt-2 w-72 overflow-hidden !bg-panel p-1.5">
          {resumes.map((r) => (
            <a
              key={r.key}
              role="menuitem"
              href={r.file}
              download
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-slate-200 transition-colors hover:bg-cyan/10 hover:text-white"
              onClick={() => setOpen(false)}
            >
              <span>{r.label}</span>
              <span className="font-mono text-[11px] uppercase text-slate-500">PDF</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
