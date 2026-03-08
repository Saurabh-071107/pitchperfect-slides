import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Zap, Eye, Network, Clock, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Graph-Native Architecture",
    desc: "Instead of examining transactions in isolation, our system models the entire banking ecosystem as a living, evolving graph. Every account is a node, every transaction is an edge — enabling us to detect complex multi-hop patterns that span hundreds of accounts in real time.",
    metric: "500K+ nodes",
  },
  {
    icon: Eye,
    title: "Full Fund-Flow Path Tracking",
    desc: "Traditional systems flag individual transactions. Ours traces the complete journey of every dollar — from origin to final destination — across all intermediaries. This end-to-end visibility exposes layering chains, circular loops, and structuring patterns that would otherwise remain invisible.",
    metric: "End-to-end",
  },
  {
    icon: Clock,
    title: "Sub-100ms Real-Time Alerts",
    desc: "Every incoming transaction is scored and analyzed before it settles. Our streaming pipeline processes graph metrics, runs ensemble ML models, and generates actionable alerts — all within 100 milliseconds. This means suspicious transfers can be blocked before funds leave the institution.",
    metric: "<100ms",
  },
  {
    icon: ShieldCheck,
    title: "Drastically Reduced False Positives",
    desc: "By combining supervised learning (trained on known fraud) with unsupervised anomaly detection, the system distinguishes genuine threats from legitimate activity with 92%+ precision. Fewer false alerts mean compliance teams focus on real risks, not noise — saving thousands of analyst hours.",
    metric: "92% accuracy",
  },
];

const SlideSolution = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-14 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-4 mb-4"
      >
        <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
          <Zap className="w-6 h-6 text-accent" />
        </div>
        <span className="text-[15px] font-display font-medium text-accent uppercase tracking-[3px]">Our Solution</span>
      </motion.div>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="font-display text-[46px] font-bold leading-[1.1] mb-3 text-foreground"
      >
        Multi-Modal ML
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Architecture</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-[17px] text-muted-foreground mb-10 max-w-[800px] leading-relaxed"
      >
        We've built a real-time, multi-modal machine learning system that sees what rule-based systems fundamentally cannot — by treating financial networks as organic, evolving graphs rather than static ledgers.
      </motion.p>

      {/* Feature cards grid */}
      <div className="grid grid-cols-2 gap-5 flex-1">
        {features.map((feat, i) => (
          <motion.div
            key={feat.title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.12 }}
            className="relative group p-7 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors"
          >
            {/* Metric badge */}
            <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-[13px] font-display font-semibold text-primary">{feat.metric}</span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
              <feat.icon className="w-6 h-6 text-primary" />
            </div>

            <h3 className="font-display text-[21px] font-semibold text-foreground mb-2">{feat.title}</h3>
            <p className="text-[14px] text-muted-foreground leading-[1.7]">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default SlideSolution;
