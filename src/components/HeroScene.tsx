import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

function Rig({ children }: { children: React.ReactNode }) {
  const g = useRef<THREE.Group>(null!);
  useFrame((s) => {
    g.current.rotation.y = THREE.MathUtils.lerp(g.current.rotation.y, s.pointer.x * 0.7, 0.05);
    g.current.rotation.x = THREE.MathUtils.lerp(g.current.rotation.x, -s.pointer.y * 0.45, 0.05);
  });
  return <group ref={g}>{children}</group>;
}

function Core() {
  const g = useRef<THREE.Group>(null!);
  useFrame((_, d) => {
    g.current.rotation.y += d * 0.3;
    g.current.rotation.x += d * 0.12;
  });
  return (
    <group ref={g}>
      <mesh>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial color="#00F0FF" wireframe emissive="#00F0FF" emissiveIntensity={1.4} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="#7000FF" emissive="#7000FF" emissiveIntensity={0.9} roughness={0.25} metalness={0.8} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.38, 0]} />
        <meshBasicMaterial color="#10B981" />
      </mesh>
    </group>
  );
}

type NodeProps = { radius: number; speed: number; tilt: [number, number, number]; phase: number; color: string; label: string };

function OrbitNode({ radius, speed, tilt, phase, color, label }: NodeProps) {
  const g = useRef<THREE.Group>(null!);
  useFrame((s) => {
    g.current.rotation.y = s.clock.elapsedTime * speed + phase;
  });
  return (
    <group rotation={tilt}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.005, 8, 160]} />
        <meshBasicMaterial color={color} transparent opacity={0.28} />
      </mesh>
      <group ref={g}>
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.17, 24, 24]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.8} />
          <Html center distanceFactor={8} position={[0, 0.42, 0]} style={{ pointerEvents: 'none' }}>
            <span className="whitespace-nowrap rounded-full border border-white/20 bg-obsidian/80 px-2.5 py-0.5 font-mono text-[11px] text-white">{label}</span>
          </Html>
        </mesh>
      </group>
    </group>
  );
}

function Network() {
  const ref = useRef<THREE.Group>(null!);
  const { points, lines } = useMemo(() => {
    const n = 80;
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < n; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(2.6 + Math.random() * 1.4);
      pts.push(v);
    }
    const p = new Float32Array(n * 3);
    pts.forEach((v, i) => v.toArray(p, i * 3));
    const seg: number[] = [];
    for (let i = 0; i < n; i++)
      for (let j = i + 1; j < n; j++)
        if (pts[i].distanceTo(pts[j]) < 1.5) seg.push(...pts[i].toArray(), ...pts[j].toArray());
    return { points: p, lines: new Float32Array(seg) };
  }, []);
  useFrame((_, d) => {
    ref.current.rotation.y += d * 0.05;
  });
  return (
    <group ref={ref}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.045} color="#00F0FF" sizeAttenuation transparent opacity={0.85} />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#7000FF" transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
}

function PointerLight() {
  const l = useRef<THREE.PointLight>(null!);
  useFrame((s) => {
    l.current.position.set(s.pointer.x * 5, s.pointer.y * 3.5, 3);
  });
  return <pointLight ref={l} intensity={60} color="#00F0FF" distance={14} />;
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7.5], fov: 48 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.35} />
      <PointerLight />
      <Rig>
        <Core />
        <Network />
        <OrbitNode radius={2.1} speed={0.55} tilt={[0.5, 0, 0.2]} phase={0} color="#00F0FF" label="AI" />
        <OrbitNode radius={2.5} speed={-0.42} tilt={[-0.7, 0, 0.5]} phase={2} color="#a78bfa" label="Vision" />
        <OrbitNode radius={1.8} speed={0.7} tilt={[1.1, 0, -0.4]} phase={4} color="#10B981" label="Data" />
        <OrbitNode radius={2.9} speed={0.3} tilt={[0.1, 0, -0.9]} phase={5.2} color="#F5C451" label="Full-Stack" />
      </Rig>
    </Canvas>
  );
}
