import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Brain, GitBranch, Radio } from "lucide-react";

const innovations = [
  {
    icon: Brain,
    number: "01",
    title: "Multi-Layer ML Ensemble",
    color: "primary",
    items: [
      { label: "XGBoost", desc: "Supervised classification for known fraud structures" },
      { label: "Isolation Forest", desc: "Unsupervised anomaly detection for novel threats" },
    ],
  },
  {
    icon: GitBranch,
    number: "02",
    title: "Deep Graph Engineering",
    color: "accent",
    items: [
      { label: "PageRank & Centrality", desc: "Dynamic calculation on the live network" },
      { label: "Fund Velocity", desc: "Accurate measurement across localized hubs" },
    ],
  },
  {
    icon: Radio,
    number: "03",
    title: "Streaming Analytics",
    color: "slide-orange",
    items: [
      { label: "Real-Time Updates", desc: "Knowledge graph updates instantly per transaction" },
      { label: "Zero Latency", desc: "Synchronous processing with no batch delays" },
    ],
  },
];

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  primary: { text: "text-primary", bg: "bg-primary/10", border: "border-primary/20" },
  accent: { text: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
  "slide-orange": { text: "text-slide-orange", bg: "bg-slide-orange/10", border: "border-slide-orange/20" },
};

const SlideInnovations = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16 relative z-10">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-4 mb-6"
      >
        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Brain className="w-6 h-6 text-primary" />
        </div>
        <span className="text-[16px] font-display font-medium text-primary uppercase tracking-[3px]">Key Innovations</span>
      </motion.div>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="font-display text-[52px] font-bold leading-[1.1] mb-14 text-foreground"
      >
        Technical <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Breakthroughs</span>
      </motion.h2>

      {/* Three columns */}
      <div className="grid grid-cols-3 gap-8 flex-1">
        {innovations.map((inn, i) => {
          const c = colorMap[inn.color];
          return (
            <motion.div
              key={inn.title}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.15 }}
              className={`relative flex flex-col p-8 rounded-2xl border ${c.border} ${c.bg} backdrop-blur-sm`}
            >
              {/* Number */}
              <span className={`font-display text-[72px] font-bold ${c.text} opacity-10 absolute top-4 right-6 leading-none`}>
                {inn.number}
              </span>

              <div className={`w-14 h-14 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-6`}>
                <inn.icon className={`w-7 h-7 ${c.text}`} />
              </div>

              <h3 className={`font-display text-[24px] font-semibold text-foreground mb-8`}>{inn.title}</h3>

              <div className="space-y-5 flex-1">
                {inn.items.map((item) => (
                  <div key={item.label} className="relative pl-5 border-l-2 border-border">
                    <h4 className={`font-display text-[18px] font-semibold ${c.text} mb-1`}>{item.label}</h4>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </SlideLayout>
);

export default SlideInnovations;
