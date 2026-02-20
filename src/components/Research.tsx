import PaperShowcase from './PaperShowcase';
import { Network, Zap, Target, ShieldCheck, Server } from 'lucide-react';

export default function Research() {
    const papers = [
        {
            title: "LLM-Powered Social Digital Twins: Simulating How Populations Behave",
            arxivId: "2601.06111",
            category: "cs.AI",
            date: "Jan 2026",
            authors: "Aayush Gupta, Fatima Koaik, Farahan Raza Sheikh",
            icon: <Network className="w-8 h-8" />,
            descriptionParagraphs: [
                <span>
                    This paper tackles one of the hardest questions in computational social science: <em>can you predict how an entire population will react to a policy before you enact it?</em>
                </span>,
                <span>
                    Aayush and collaborators build <strong>Social Digital Twins</strong> — virtual replicas of populations where each simulated individual is powered by an LLM acting as a cognitive engine. Each agent carries demographic and psychographic attributes, receives policy signals, and outputs multi-dimensional behavioral probability vectors. A calibration layer then maps these agent-level outputs to real-world observable metrics.
                </span>,
                <span>
                    The framework is validated using COVID-19 pandemic response data, achieving a <strong>20.7% improvement</strong> in macro-averaged prediction error over gradient boosting baselines across six behavioral categories. But the real power move is the generality: the same architecture applies to transportation, environmental policy, economic interventions — anywhere humans respond to top-down decisions.
                </span>
            ],
            whyItsWild: "This isn't prompt engineering or toy-scale simulation. It's a formally specified, calibrated framework that turns LLMs into population-scale behavioral prediction engines — essentially giving governments a 'what-if' machine for policy design."
        },
        {
            title: "ReliabilityBench: Stress-Testing AI Agents Like Production Systems",
            arxivId: "2601.06112",
            category: "cs.AI",
            date: "Jan 2026",
            authors: "Aayush Gupta",
            icon: <Zap className="w-8 h-8" />,
            descriptionParagraphs: [
                <span>
                    This is the paper that asks the question nobody in the benchmarking world wanted to hear: <em>"Your agent passes the test once — but will it pass it a thousand times, under real-world chaos?"</em>
                </span>,
                <span>
                    Aayush introduces <strong>ReliabilityBench</strong>, the first benchmark that evaluates LLM agents across three orthogonal dimensions simultaneously: <strong>(i) consistency</strong> under repeated execution (pass^k), <strong>(ii) robustness</strong> to semantically equivalent but syntactically varied instructions, and <strong>(iii) fault tolerance</strong> under controlled infrastructure failures (timeouts, rate limits, partial responses, schema drift).
                </span>,
                <span>
                    Drawing directly from <strong>chaos engineering</strong> principles used in Site Reliability Engineering, the benchmark defines a unified <strong>Reliability Surface R(k, ε, λ)</strong> and introduces <strong>action metamorphic relations</strong> — a correctness criterion based on end-state equivalence rather than text similarity. Across 1,280 episodes evaluating Gemini 2.0 Flash and GPT-4o with ReAct and Reflexion architectures, the results are sobering: perturbations alone drop success from 96.9% to 88.1%, and rate limiting emerges as the most damaging fault mode.
                </span>
            ],
            whyItsWild: "This paper imports the battle-tested discipline of chaos engineering into AI evaluation. It fundamentally reframes 'does the agent work?' into 'is the agent production-ready?' — a distinction that matters enormously as LLM agents move into mission-critical deployment. Sole-authored, no less."
        },
        {
            title: "Fact Grounded Attention: Eliminating Hallucinations at the Attention Level",
            arxivId: "2509.25252",
            category: "cs.AI",
            date: "Sep 2025",
            authors: "Aayush Gupta",
            icon: <Target className="w-8 h-8" />,
            descriptionParagraphs: [
                <span>
                    Most anti-hallucination approaches are band-aids — post-hoc filters, retrieval-augmented prepending, or fine-tuning. Aayush goes straight to the mathematical heart of the transformer.
                </span>,
                <span>
                    <strong>Fact Grounded Attention (FGA)</strong> modifies the pre-softmax attention scores by injecting a grounding term that biases attention toward factually consistent tokens. A learnable <strong>Fact Gate</strong> recognizes when the model is about to make a factual claim and forces it to be correct by intervening at the attention computation itself. The formula is elegant: <strong>S_FGA = S + α ⊙ G</strong>, where α is the learned gate and G is the grounding signal from an external knowledge base.
                </span>,
                <span>
                    The results are staggering: on 1,107 technical queries across smartphones, laptops, and electric vehicles, accuracy jumps from <strong>6.3% (vanilla Llama 3.2) to 99.7% with FGA</strong>. Knowledge updates happen in under one second with zero retraining.
                </span>
            ],
            whyItsWild: "This doesn't reduce hallucination — it eliminates it for verifiable facts. The approach is architecturally minimal, requires no fine-tuning, and updates knowledge instantly. It represents a paradigm shift from probabilistic approximation to deterministic precision in neural language generation."
        },
        {
            title: "Contextual Integrity Verification: A Provable Security Architecture for LLMs",
            arxivId: "2508.09288",
            category: "cs.CR",
            date: "Aug 2025",
            authors: "Aayush Gupta",
            icon: <ShieldCheck className="w-8 h-8" />,
            descriptionParagraphs: [
                <span>
                    Prompt injection is ranked as the <strong>#1 security risk</strong> for LLM applications by OWASP. Every existing defense — LLM-Guard, Rebuff, PromptArmor — is a heuristic guardrail that gets routinely bypassed. Aayush decided to stop playing the cat-and-mouse game entirely.
                </span>,
                <span>
                    <strong>Contextual Integrity Verification (CIV)</strong> attaches cryptographically signed provenance labels to every token and enforces a source-trust lattice inside the transformer via a pre-softmax hard attention mask with optional FFN/residual gating. The result: <strong>deterministic, per-token non-interference guarantees</strong> — lower-trust tokens literally cannot influence higher-trust representations. Mathematically impossible to bypass within the threat model.
                </span>,
                <span>
                    On benchmarks derived from Elite-Attack and SoK-246 prompt injection taxonomies, CIV achieves a <strong>0% attack success rate</strong> while preserving <strong>93.1% output fidelity</strong> with zero perplexity degradation. It deploys as a surgical, inference-time modification on frozen models — no fine-tuning, no retraining, no architectural redesign.
                </span>
            ],
            whyItsWild: "While the entire industry was building bigger and better filters, Aayush built cryptographic enforcement at the attention level. CIV doesn't try to outsmart attackers — it makes their attacks algebraically impossible. This is the kind of paper that could redefine how production LLM security is approached."
        },
        {
            title: "Cold-RL: Learning Cache Eviction with Offline Reinforcement Learning for NGINX",
            arxivId: "2508.12485",
            category: "cs.LG",
            date: "Aug 2025",
            authors: "Aayush Gupta, Arpit Bhayani",
            icon: <Server className="w-8 h-8" />,
            descriptionParagraphs: [
                <span>
                    This paper is the curveball in the portfolio — and it's brilliant precisely because it shows range. While the other papers live in the LLM/AI safety world, Cold-RL drops into hardcore systems engineering territory.
                </span>,
                <span>
                    <strong>Cold-RL</strong> replaces NGINX's default LRU cache eviction with a <strong>dueling Deep Q-Network</strong> served by an ONNX sidecar, all within a strict <strong>500-microsecond</strong> latency budget. On each eviction event, the system samples the K least-recently-used objects, extracts six lightweight features (age, size, hit count, inter-arrival time, remaining TTL, last origin RTT), and makes intelligent eviction decisions trained entirely offline from NGINX access logs.
                </span>,
                <span>
                    The key insight: you don't need to evaluate the entire cache — the victims almost always lurk in the LRU tail. Against LRU, LFU, size-based, adaptive LRU, and hybrid baselines on adversarial workloads, Cold-RL demonstrates a <strong>146% improvement</strong> at small cache sizes (25 MB), with an immediate LRU fallback ensuring bounded latency under all conditions.
                </span>
            ],
            whyItsWild: "This is offline reinforcement learning deployed in a production web proxy at microsecond scale. It bridges the gap between ML research and the kind of bare-metal systems work that keeps the internet running. It's the paper that proves Aayush doesn't just theorize about production systems — he builds for them."
        }
    ];

    return (
        <section id="research" className="bg-[#08080a] relative z-10 w-full min-h-screen pb-32">
            <div className="pt-24 pb-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="mb-8">
                        <h2 className="text-5xl md:text-7xl font-bold font-sans mb-6 tracking-tight">
                            Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-orange">Research</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-sans leading-relaxed">
                            Surgical, deployable solutions backed by rigorous experimentation. Spanning AI safety, computational social science, and systems-level machine learning.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full">
                {papers.map((paper, index) => (
                    <PaperShowcase key={paper.arxivId} {...paper} index={index} />
                ))}
            </div>
        </section>
    );
}
