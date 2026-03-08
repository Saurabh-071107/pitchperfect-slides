import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Zap, Eye, Network, Clock, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Graph-Native Architecture",
    desc: "Treats the banking ecosystem as a continuous, organic graph",
    metric: "500K+ nodes",
  },
  {
    icon: Eye,
    title: "Full Path Tracking",
    desc: "Tracks entire fund flow paths instantly, not isolated transactions",
    metric: "End-to-end",
  },
  {
    icon: Clock,
    title: "Real-Time Alerts",
    desc: "Generates actionable alerts in under 100 milliseconds",
    metric: "<100ms",
  },
  {
    icon: ShieldCheck,
    title: "Reduced False Positives",
    desc: "Uncovers invisible shell networks with high precision",
    metric: "92% accuracy",
  },
];

const SlideSolution = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-4 mb-6"
      >
        <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
          <Zap className="w-6 h-6 text-accent" />
        </div>
        <span className="text-[16px] font-display font-medium text-accent uppercase tracking-[3px]">Our Solution</span>
      </motion.div>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="font-display text-[52px] font-bold leading-[1.1] mb-4 text-foreground"
      >
        Multi-Modal ML
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Architecture</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-[20px] text-muted-foreground mb-14 max-w-[700px]"
      >
        A real-time, multi-modal machine learning system that sees what rule-based systems can't.
      </motion.p>

      {/* Feature cards grid */}
      <div className="grid grid-cols-2 gap-6 flex-1">
        {features.map((feat, i) => (
          <motion.div
            key={feat.title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.12 }}
            className="relative group p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors"
          >
            {/* Metric badge */}
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-[14px] font-display font-semibold text-primary">{feat.metric}</span>
            </div>

            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <feat.icon className="w-7 h-7 text-primary" />
            </div>

            <h3 className="font-display text-[24px] font-semibold text-foreground mb-3">{feat.title}</h3>
            <p className="text-[17px] text-muted-foreground leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default SlideSolution;
