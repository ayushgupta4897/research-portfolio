import { motion } from 'framer-motion';
import { Layers, Zap, Shield, Cpu } from 'lucide-react';

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="py-24 bg-brand-dark relative z-10 w-full">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent"></div>

            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-sans mb-10 leading-tight">
                        The Arc: From Systems Engineer to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-orange">AI Research Polymath</span>
                    </motion.h2>

                    <motion.div variants={itemVariants} className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-6 leading-relaxed text-lg md:text-xl">
                        <p>
                            Aayush Gupta's research portfolio is not what you'd expect from a single researcher. It reads more like the output of an entire lab — spanning <strong className="text-white">AI safety and security</strong>, <strong className="text-white">LLM reliability engineering</strong>, <strong className="text-white">hallucination elimination at the architectural level</strong>, <strong className="text-white">computational social science</strong>, and <strong className="text-white">systems-level machine learning</strong> — all published within a remarkably compressed timeframe on arXiv.
                        </p>
                        <p>
                            What ties this body of work together is a singular obsession: <strong className="text-brand-cyan">making AI systems that actually work in the real world</strong>, not just on leaderboards.
                        </p>
                        <p>
                            Where most AI researchers pick a lane — theory, benchmarks, applications, or systems — Aayush operates across all four simultaneously. His papers don't just identify problems; they propose surgical, deployable solutions and back them up with rigorous experimentation.
                        </p>
                    </motion.div>

                    {/* Pillars */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-brand-cyan/40 hover:bg-white/[0.04] transition-all duration-300 group">
                            <Shield className="w-10 h-10 text-brand-cyan mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all" />
                            <h3 className="text-2xl font-bold mb-3 text-white">Architectural Interventions</h3>
                            <p className="text-slate-400 leading-relaxed text-lg">Rejecting surface-level patches in favor of mathematically grounded solutions that operate at the mechanism level.</p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-brand-orange/40 hover:bg-white/[0.04] transition-all duration-300 group">
                            <Zap className="w-10 h-10 text-brand-orange mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,102,0,0.5)] transition-all" />
                            <h3 className="text-2xl font-bold mb-3 text-white">Production-First Mentality</h3>
                            <p className="text-slate-400 leading-relaxed text-lg">Bringing chaos engineering to AI and operating under microsecond SLOs. "Does it actually work at scale?"</p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-brand-red/40 hover:bg-white/[0.04] transition-all duration-300 group">
                            <Layers className="w-10 h-10 text-brand-red mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,51,51,0.5)] transition-all" />
                            <h3 className="text-2xl font-bold mb-3 text-white">Breadth Without Sacrifice</h3>
                            <p className="text-slate-400 leading-relaxed text-lg">Five major published papers spanning multiple complex domains, each with rigorous formalism and strong empirical baselines.</p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/40 hover:bg-white/[0.04] transition-all duration-300 group">
                            <Cpu className="w-10 h-10 text-slate-200 mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all" />
                            <h3 className="text-2xl font-bold mb-3 text-white">Speed of Execution</h3>
                            <p className="text-slate-400 leading-relaxed text-lg">Executing research ideas from conception to completion at high velocity, all published within a compressed timeframe.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
