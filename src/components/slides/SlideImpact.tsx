import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { TrendingUp, Clock, Target, Scaling, Zap } from "lucide-react";

const impacts = [
  {
    icon: Clock,
    title: "Faster Detection",
    desc: "Every transaction is analyzed, scored, and flagged in under 100 milliseconds — before the transfer settles. This means suspicious fund movements can be automatically blocked or held for review before the money leaves your institution's network. No more chasing funds after the fact.",
    metric: "<100ms",
    metricLabel: "Response Time",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Operational Efficiency",
    desc: "When a suspicious pattern is detected, the system automatically compiles all related transaction evidence, account histories, and graph visualizations into a ready-to-file Suspicious Transaction Report (STR) for FIU submission. This eliminates hours of manual evidence gathering per case, freeing analysts to focus on complex investigations.",
    metric: "80%",
    metricLabel: "Time Saved",
    color: "accent",
  },
  {
    icon: Target,
    title: "Higher Accuracy",
    desc: "Our ensemble approach combines XGBoost's pattern recognition with Isolation Forest's anomaly detection, achieving 92%+ precision. This dual-model architecture catches both known fraud typologies and zero-day emerging techniques, while dramatically reducing false positives that plague traditional rule-based systems and waste compliance resources.",
    metric: "92%",
    metricLabel: "Detection Rate",
    color: "slide-orange",
  },
  {
    icon: Scaling,
    title: "Enterprise Scalability",
    desc: "The architecture is designed for horizontal scaling from day one. The in-memory graph engine can be distributed across a Neo4j cluster for multi-billion-node networks, while the streaming pipeline integrates natively with Apache Kafka and Spark Streaming — supporting 10M+ transactions per day with consistent sub-100ms latency.",
    metric: "10M+",
    metricLabel: "Txns/Day",
    color: "slide-green",
  },
];

const colorMap: Record<string, { text: string; bg: string; border: string }> = {
  primary: { text: "text-primary", bg: "bg-primary/10", border: "border-primary/20" },
  accent: { text: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
  "slide-orange": { text: "text-slide-orange", bg: "bg-slide-orange/10", border: "border-slide-orange/20" },
  "slide-green": { text: "text-slide-green", bg: "bg-slide-green/10", border: "border-slide-green/20" },
};

const SlideImpact = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-14 relative z-10">
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-accent" />
        </div>
        <span className="text-[15px] font-display font-medium text-accent uppercase tracking-[3px]">Business Impact</span>
      </motion.div>

      <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }} className="font-display text-[46px] font-bold leading-[1.1] mb-10 text-foreground">
        Measurable <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Results</span>
      </motion.h2>

      <div className="grid grid-cols-2 gap-5 flex-1">
        {impacts.map((item, i) => {
          const c = colorMap[item.color];
          return (
            <motion.div
              key={item.title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.12 }}
              className={`relative p-7 rounded-2xl border ${c.border} ${c.bg} backdrop-blur-sm overflow-hidden`}
            >
              {/* Big metric */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                  <item.icon className={`w-6 h-6 ${c.text}`} />
                </div>
                <div className="text-right">
                  <div className={`font-display text-[42px] font-bold ${c.text} leading-none`}>{item.metric}</div>
                  <div className="text-[12px] text-muted-foreground mt-1">{item.metricLabel}</div>
                </div>
              </div>

              <h3 className="font-display text-[21px] font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-[13.5px] text-muted-foreground leading-[1.7]">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </SlideLayout>
);

export default SlideImpact;
