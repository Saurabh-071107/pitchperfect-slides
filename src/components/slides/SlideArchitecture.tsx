import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Database, Cpu, Layers, BarChart3, ArrowRight } from "lucide-react";

const stages = [
  {
    icon: Database,
    title: "Data Ingestion",
    items: [
      "Real-time transaction streams via FastAPI JSON endpoints",
      "Customer & KYC profile enrichment",
      "Device fingerprint & geolocation data",
      "Historical behavioral baselines",
    ],
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Layers,
    title: "Feature Engineering",
    items: [
      "O(1) approximate graph metric updates per transaction",
      "Dynamic PageRank for account influence scoring",
      "Betweenness Centrality to find bridge accounts",
      "Localized Fund Velocity across subgraphs",
    ],
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: Cpu,
    title: "ML Scoring Layer",
    items: [
      "Weighted ensemble: 70% XGBoost + 30% Isolation Forest",
      "XGBoost handles known fraud signatures",
      "Isolation Forest catches novel anomalies",
      "Combined confidence score per transaction",
    ],
    color: "text-slide-orange",
    bg: "bg-slide-orange/10",
    border: "border-slide-orange/20",
  },
  {
    icon: BarChart3,
    title: "Decision & Reporting",
    items: [
      "Auto-block high-risk transfers in <100ms",
      "Investigation dashboard with graph visualization",
      "Automated STR/FIU report generation",
      "Evidence packaging for compliance teams",
    ],
    color: "text-slide-green",
    bg: "bg-slide-green/10",
    border: "border-slide-green/20",
  },
];

const SlideArchitecture = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-16 py-14 relative z-10">
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Cpu className="w-6 h-6 text-primary" />
        </div>
        <span className="text-[15px] font-display font-medium text-primary uppercase tracking-[3px]">Architecture</span>
      </motion.div>

      <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }} className="font-display text-[46px] font-bold leading-[1.1] mb-4 text-foreground">
        System <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pipeline</span>
      </motion.h2>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-[16px] text-muted-foreground mb-10 max-w-[900px] leading-relaxed">
        Every transaction flows through a four-stage pipeline — from raw data ingestion to automated decision-making — with each stage optimized for real-time performance at scale.
      </motion.p>

      {/* Pipeline flow */}
      <div className="flex items-stretch gap-2 flex-1">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.title}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.15 }}
            className="flex items-center gap-2 flex-1"
          >
            <div className={`flex-1 p-5 rounded-2xl border ${stage.border} ${stage.bg} backdrop-blur-sm flex flex-col h-full`}>
              <div className={`w-12 h-12 rounded-xl ${stage.bg} border ${stage.border} flex items-center justify-center mb-4`}>
                <stage.icon className={`w-6 h-6 ${stage.color}`} />
              </div>
              <h3 className={`font-display text-[18px] font-semibold text-foreground mb-3`}>{stage.title}</h3>
              <ul className="space-y-2 flex-1">
                {stage.items.map((item) => (
                  <li key={item} className="text-[12.5px] text-muted-foreground flex items-start gap-2 leading-[1.6]">
                    <span className={`w-1.5 h-1.5 rounded-full ${stage.bg} border ${stage.border} flex-shrink-0 mt-1.5`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {i < stages.length - 1 && (
              <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default SlideArchitecture;
