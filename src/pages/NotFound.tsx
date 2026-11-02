import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-4 text-center">
      <div>
        <p className="section-eyebrow">404</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold text-white">This page does not exist</h1>
        <Link to="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </main>
  );
}
