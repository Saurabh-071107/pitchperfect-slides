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
      {
        label: "XGBoost (Supervised)",
        desc: "Trained on historically labeled fraud cases, XGBoost learns the structural signatures of known fraud — such as rapid multi-hop transfers, sudden dormant account activation, and threshold-adjacent amounts. It provides high-confidence classification for established fraud typologies.",
      },
      {
        label: "Isolation Forest (Unsupervised)",
        desc: "Detects novel, never-before-seen fraud patterns by identifying statistical outliers in transaction behavior. This catches 0-day attacks and emerging criminal techniques that supervised models would miss, providing a critical safety net against evolving threats.",
      },
    ],
  },
  {
    icon: GitBranch,
    number: "02",
    title: "Deep Graph Engineering",
    color: "accent",
    items: [
      {
        label: "Dynamic PageRank & Centrality",
        desc: "Calculated in real-time on the live transaction network using NetworkX. Identifies which accounts serve as critical \"hubs\" or \"bridges\" in fund flows — the exact nodes criminals exploit to distribute and consolidate illicit money across the network.",
      },
      {
        label: "Fund Velocity Measurement",
        desc: "Tracks how quickly money passes through localized clusters of accounts. Abnormally high velocity in a subgraph is a strong indicator of layering — legitimate businesses don't move money through 8 accounts in 90 seconds. This metric alone catches patterns invisible to flat-file analysis.",
      },
    ],
  },
  {
    icon: Radio,
    number: "03",
    title: "Synchronous Streaming",
    color: "slide-orange",
    items: [
      {
        label: "Instant Graph Updates",
        desc: "Every single transaction updates the knowledge graph synchronously — no batching, no overnight jobs. The system's understanding of the network topology is always current, ensuring that decisions are made on the freshest possible data, not stale snapshots.",
      },
      {
        label: "Zero-Latency Processing",
        desc: "Using O(1) graph metric approximations, we avoid expensive full-graph recomputation. Local neighborhood updates propagate relevant metric changes in constant time, enabling sub-100ms scoring even as the graph scales to millions of nodes.",
      },
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
    <div className="flex flex-col h-full px-16 py-14 relative z-10">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-4 mb-4"
      >
        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Brain className="w-6 h-6 text-primary" />
        </div>
        <span className="text-[15px] font-display font-medium text-primary uppercase tracking-[3px]">Key Innovations</span>
      </motion.div>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="font-display text-[46px] font-bold leading-[1.1] mb-10 text-foreground"
      >
        Technical <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Breakthroughs</span>
      </motion.h2>

      {/* Three columns */}
      <div className="grid grid-cols-3 gap-6 flex-1">
        {innovations.map((inn, i) => {
          const c = colorMap[inn.color];
          return (
            <motion.div
              key={inn.title}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.15 }}
              className={`relative flex flex-col p-6 rounded-2xl border ${c.border} ${c.bg} backdrop-blur-sm overflow-hidden`}
            >
              {/* Number */}
              <span className={`font-display text-[64px] font-bold ${c.text} opacity-10 absolute top-2 right-4 leading-none`}>
                {inn.number}
              </span>

              <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                <inn.icon className={`w-6 h-6 ${c.text}`} />
              </div>

              <h3 className="font-display text-[20px] font-semibold text-foreground mb-5">{inn.title}</h3>

              <div className="space-y-4 flex-1">
                {inn.items.map((item) => (
                  <div key={item.label} className="relative pl-4 border-l-2 border-border">
                    <h4 className={`font-display text-[15px] font-semibold ${c.text} mb-1`}>{item.label}</h4>
                    <p className="text-[12.5px] text-muted-foreground leading-[1.7]">{item.desc}</p>
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
