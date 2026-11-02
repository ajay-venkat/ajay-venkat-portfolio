import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { Award } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { certs, skillGroups, skills } from '../data';

function Tags() {
  const g = useRef<THREE.Group>(null!);
  const pts = useMemo(
    () =>
      skills.map((s, i) => {
        const n = skills.length;
        const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
        const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
        const r = 2.7;
        return {
          s,
          pos: [r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta)] as [number, number, number],
        };
      }),
    [],
  );
  useFrame((st, d) => {
    g.current.rotation.y += d * (0.18 + st.pointer.x * 0.5);
    g.current.rotation.x = THREE.MathUtils.lerp(g.current.rotation.x, -st.pointer.y * 0.5, 0.05);
  });
  return (
    <group ref={g}>
      <mesh>
        <icosahedronGeometry args={[2.7, 2]} />
        <meshBasicMaterial color="#7000FF" wireframe transparent opacity={0.12} />
      </mesh>
      {pts.map(({ s, pos }) => (
        <Html key={s} position={pos} center distanceFactor={8}>
          <span className="tag-pill">{s}</span>
        </Html>
      ))}
    </group>
  );
}

export default function Skills() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6">
      <PageHeader eyebrow="Skill orbit" title="The tools I reach for" intro="Move the cursor over the sphere to steer it. The grouped list below carries the same skills." />
      <div className="relative mt-8 h-[420px] sm:h-[520px]" aria-hidden="true">
        <div className="pointer-events-none absolute inset-10 rounded-full bg-cyan/10 blur-[90px]" />
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 1.75]}>
          <Tags />
        </Canvas>
      </div>
      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g) => (
          <div key={g.title} className="glass p-5">
            <h2 className="font-display text-lg font-bold text-white">{g.title}</h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {g.items.map((i) => (
                <span key={i} className="rounded-md bg-white/[0.06] px-2 py-1 font-mono text-[11px] text-slate-300">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="mt-14">
        <p className="section-eyebrow">Certifications</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c) => (
            <div key={c.name} className="glass flex items-start gap-3 p-5">
              <Award className="mt-0.5 shrink-0 text-gold" size={22} />
              <div>
                <p className="font-semibold text-white">{c.name}</p>
                <p className="text-sm text-slate-400">{c.by}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
