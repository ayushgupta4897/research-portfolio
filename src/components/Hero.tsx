import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <Sphere args={[1, 100, 200]} scale={2.8}>
                        <MeshDistortMaterial
                            color="#0f172a"
                            attach="material"
                            distort={0.4}
                            speed={1.5}
                            roughness={0.2}
                        />
                    </Sphere>
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold font-sans tracking-tight mb-6">
                        Aayush <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-orange">Gupta</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-400 font-mono">
                        Research Polymath & Systems Engineer
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mt-12"
                >
                    <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-brand-cyan to-brand-orange hover:shadow-[0_0_30px_-5px_var(--color-brand-cyan)] transition-shadow duration-500">
                        <button
                            className="px-8 py-4 rounded-full bg-brand-dark text-white font-medium hover:bg-black/50 transition-colors duration-300 flex items-center gap-2 font-mono text-sm tracking-widest uppercase"
                            onClick={() => {
                                document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Explore Research
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
