import { motion } from 'framer-motion';
import { ExternalLink, Users, Calendar, ArrowRight } from 'lucide-react';

interface PaperProps {
    title: string;
    arxivId: string;
    category: string;
    date: string;
    authors: string;
    description: React.ReactNode;
    whyItsWild: string;
    delay?: number;
}

export default function PaperCard({ title, arxivId, category, date, authors, description, whyItsWild, delay = 0 }: PaperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay }}
            className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-brand-cyan/40 transition-all duration-500 group h-full flex flex-col"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative h-full bg-brand-dark rounded-3xl p-8 flex flex-col z-10 overflow-hidden shadow-2xl">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 truncate shadow-[0_0_10px_rgba(0,240,255,0.1)]">
                            {category}
                        </span>
                        <span className="text-slate-400 font-mono text-sm flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-brand-orange" /> {date}
                        </span>
                    </div>
                    <a
                        href={`https://arxiv.org/abs/${arxivId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-mono text-slate-300 hover:text-brand-cyan transition-colors"
                    >
                        arXiv:{arxivId} <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                <h3 className="text-2xl md:text-[1.75rem] leading-tight font-bold font-sans mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-cyan transition-all duration-300">
                    {title}
                </h3>

                <div className="flex justify-start items-center gap-2 text-slate-400 mb-6 font-mono text-sm w-full">
                    <Users className="w-4 h-4 min-w-[16px]" />
                    <span className="truncate">{authors}</span>
                </div>

                <div className="text-slate-300 font-sans leading-relaxed space-y-4 mb-8 flex-grow prose prose-invert prose-p:text-slate-300">
                    {description}
                </div>

                <div className="mt-auto p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative overflow-hidden group/wild hover:border-brand-orange/30 transition-colors">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-cyan to-brand-orange shadow-[0_0_10px_rgba(255,102,0,0.5)]"></div>
                    <p className="font-bold text-sm uppercase tracking-wider text-brand-orange flex items-center gap-2 mb-3">
                        Why it's wild <ArrowRight className="w-4 h-4 group-hover/wild:translate-x-1 transition-transform" />
                    </p>
                    <p className="text-slate-200 text-sm leading-relaxed font-sans">
                        {whyItsWild}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
