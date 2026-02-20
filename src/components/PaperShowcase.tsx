import { motion } from 'framer-motion';
import { ExternalLink, Calendar, ArrowRight } from 'lucide-react';
interface PaperProps {
    title: string;
    arxivId: string;
    category: string;
    date: string;
    authors: string;
    descriptionParagraphs: React.ReactNode[];
    whyItsWild: string;
    index: number;
    icon: React.ReactNode;
}

export default function PaperShowcase({ title, arxivId, category, date, authors, descriptionParagraphs, whyItsWild, index, icon }: PaperProps) {
    const numberFmt = (index + 1).toString().padStart(2, '0');

    return (
        <div className="relative w-full border-t border-white/5 pt-24 pb-32">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">

                {/* Left Side: Sticky Sidebar */}
                <div className="lg:w-5/12 relative">
                    <div className="sticky top-32">

                        {/* Massive Background Number */}
                        <div className="absolute -top-16 -left-8 text-[12rem] font-bold text-white/[0.03] select-none pointer-events-none font-mono tracking-tighter leading-none z-0">
                            {numberFmt}
                        </div>

                        <div className="relative z-10">
                            {/* Icon & Meta */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-brand-cyan/10 rounded-2xl border border-brand-cyan/20 text-brand-cyan shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                                    {icon}
                                </div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                                        {category}
                                    </span>
                                    <span className="text-slate-400 font-mono text-xs flex items-center gap-1.5 uppercase tracking-wider">
                                        <Calendar className="w-3.5 h-3.5 text-brand-orange" /> {date}
                                    </span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-3xl lg:text-[2.5rem] leading-[1.15] font-bold font-sans mb-6 text-white text-balance">
                                {title}
                            </h3>

                            {/* Authors & Links */}
                            <div className="flex flex-col gap-4 mb-10">
                                <div className="flex items-center gap-2 text-slate-400 font-mono text-sm border-l-2 border-slate-700 pl-3">
                                    <span className="text-slate-300">{authors}</span>
                                </div>

                                <a
                                    href={`https://arxiv.org/abs/${arxivId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-mono text-slate-200 hover:text-brand-cyan transition-all w-fit group"
                                >
                                    Read Paper [arXiv:{arxivId}] <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                </a>
                            </div>

                            {/* Why It's Wild Box */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-3xl bg-gradient-to-br from-brand-orange/10 to-transparent border border-brand-orange/20 relative overflow-hidden flex flex-col"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan to-brand-orange shadow-[0_0_15px_rgba(255,102,0,0.6)]"></div>
                                <h4 className="font-bold text-sm uppercase tracking-widest text-brand-orange mb-3 flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4" /> Why It's Wild
                                </h4>
                                <p className="text-slate-200 text-base leading-relaxed font-sans font-medium">
                                    {whyItsWild}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Scrolling Paragraphs */}
                <div className="lg:w-7/12 flex flex-col gap-12 lg:pt-32">
                    {descriptionParagraphs.map((paragraph, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-colors backdrop-blur-sm"
                        >
                            <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-loose prose-strong:text-white prose-strong:font-bold prose-em:text-brand-cyan prose-em:not-italic font-sans">
                                {paragraph}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
