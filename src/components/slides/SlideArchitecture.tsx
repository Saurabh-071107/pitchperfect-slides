import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Database, Cpu, Layers, BarChart3, ArrowRight } from "lucide-react";

const stages = [
  {
    icon: Database,
    title: "Data Ingestion",
    items: ["Transactions", "KYC/Customer", "Device Data"],
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Layers,
    title: "Feature Engineering",
    items: ["O(1) Graph Metrics", "PageRank", "Centrality"],
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: Cpu,
    title: "ML Layer",
    items: ["70% XGBoost", "30% Isolation Forest", "Weighted Ensemble"],
    color: "text-slide-orange",
    bg: "bg-slide-orange/10",
    border: "border-slide-orange/20",
  },
  {
    icon: BarChart3,
    title: "Decision Engine",
    items: ["Auto-Blocking <100ms", "Investigation Dashboard", "STR/FIU Reports"],
    color: "text-slide-green",
    bg: "bg-slide-green/10",
    border: "border-slide-green/20",
  },
];

const SlideArchitecture = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16 relative z-10">
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Cpu className="w-6 h-6 text-primary" />
        </div>
        <span className="text-[16px] font-display font-medium text-primary uppercase tracking-[3px]">Architecture</span>
      </motion.div>

      <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }} className="font-display text-[52px] font-bold leading-[1.1] mb-16 text-foreground">
        System <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pipeline</span>
      </motion.h2>

      {/* Pipeline flow */}
      <div className="flex items-stretch gap-3 flex-1">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.title}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.15 }}
            className="flex items-center gap-3 flex-1"
          >
            <div className={`flex-1 p-7 rounded-2xl border ${stage.border} ${stage.bg} backdrop-blur-sm flex flex-col`}>
              <div className={`w-14 h-14 rounded-xl ${stage.bg} border ${stage.border} flex items-center justify-center mb-5`}>
                <stage.icon className={`w-7 h-7 ${stage.color}`} />
              </div>
              <h3 className={`font-display text-[22px] font-semibold text-foreground mb-4`}>{stage.title}</h3>
              <ul className="space-y-2 flex-1">
                {stage.items.map((item) => (
                  <li key={item} className="text-[15px] text-muted-foreground flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${stage.bg} border ${stage.border}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {i < stages.length - 1 && (
              <ArrowRight className="w-6 h-6 text-muted-foreground flex-shrink-0" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default SlideArchitecture;
