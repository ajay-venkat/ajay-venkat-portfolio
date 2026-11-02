import { useState } from 'react';
import { Check, Copy, FileText, Github, Linkedin, Mail, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { useResumeModal } from '../components/ResumeModal';
import { profile, resumes } from '../data';

export default function Contact() {
  const resume = useResumeModal();
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6">
      <PageHeader eyebrow="Contact & resume hub" title="Let's build something useful" intro="Send a message, or pick the resume that matches the role you are hiring for." />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={submit} className="glass min-w-0 space-y-4 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-slate-300">
                Name
              </label>
              <input id="name" required className="field" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-slate-300">
                Email
              </label>
              <input id="email" type="email" required className="field" placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm text-slate-300">
              Message
            </label>
            <textarea id="message" required rows={6} className="field resize-y" placeholder="Tell me about the role or project" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </div>
          <button type="submit" className="btn-primary">
            <Send size={16} /> Open in my email app
          </button>
          <p className="text-xs text-slate-500">This opens your email app with the message filled in. If nothing opens, copy my address from the card on the right.</p>
        </form>
        <div className="min-w-0 space-y-4">
          <div className="glass p-6">
            <p className="section-eyebrow">Direct</p>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <p className="break-all font-mono text-sm text-white">{profile.email}</p>
              <button onClick={copy} className="btn-ghost !px-4 !py-2">
                {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <div className="mt-5 flex gap-3">
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
          <div className="glass p-6">
            <p className="section-eyebrow">Role-based resumes</p>
            <ul className="mt-4 divide-y divide-white/10">
              {resumes.map((r) => (
                <li key={r.key} className="flex items-center justify-between gap-3 py-3">
                  <div className="min-w-0">
                    <p className="font-semibold text-white">{r.label}</p>
                    <p className="truncate text-xs text-slate-500">{r.note}</p>
                  </div>
                  <a href={r.file} download className="btn-ghost shrink-0 !px-4 !py-2">
                    <FileText size={14} /> PDF
                  </a>
                </li>
              ))}
            </ul>
            <button onClick={resume.open} className="btn-primary mt-4 w-full justify-center">
              Preview resumes
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
