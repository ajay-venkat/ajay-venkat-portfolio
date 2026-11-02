import { useEffect, useState } from 'react';

export default function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = words[i];
    let delay = deleting ? 30 : 60;
    if (!deleting && text === full) delay = 1700;
    if (deleting && text === '') delay = 300;
    const t = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true);
      else if (deleting && text === '') {
        setDeleting(false);
        setI((i + 1) % words.length);
      } else setText(full.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <p className="min-h-[2rem] font-mono text-base text-cyan sm:text-lg" aria-label={words.join(', ')}>
      <span aria-hidden="true">
        {text}
        <span className="caret ml-0.5 inline-block w-[2px] bg-cyan align-middle">&nbsp;</span>
      </span>
    </p>
  );
}
