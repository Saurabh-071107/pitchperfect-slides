import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { TrendingUp, Clock, Target, Scaling, Zap } from "lucide-react";

const impacts = [
  {
    icon: Clock,
    title: "Faster Detection",
    desc: "Sub-100ms analysis ensures money doesn't leave the network before it's flagged",
    metric: "<100ms",
    metricLabel: "Response Time",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Operational Efficiency",
    desc: "Automated evidence packaging for FIU reporting saves thousands of analyst hours annually",
    metric: "80%",
    metricLabel: "Time Saved",
    color: "accent",
  },
  {
    icon: Target,
    title: "Higher Accuracy",
    desc: "Ensemble modeling catches 0-day emerging fraud typologies with minimal false positives",
    metric: "92%",
    metricLabel: "Detection Rate",
    color: "slide-orange",
  },
  {
    icon: Scaling,
    title: "Enterprise Scalability",
    desc: "Designed to integrate seamlessly with Kafka and Spark Streaming for massive throughput",
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
    <div className="flex flex-col h-full px-20 py-16 relative z-10">
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-accent" />
        </div>
        <span className="text-[16px] font-display font-medium text-accent uppercase tracking-[3px]">Business Impact</span>
      </motion.div>

      <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }} className="font-display text-[52px] font-bold leading-[1.1] mb-14 text-foreground">
        Measurable <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Results</span>
      </motion.h2>

      <div className="grid grid-cols-2 gap-6 flex-1">
        {impacts.map((item, i) => {
          const c = colorMap[item.color];
          return (
            <motion.div
              key={item.title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.12 }}
              className={`relative p-8 rounded-2xl border ${c.border} ${c.bg} backdrop-blur-sm overflow-hidden`}
            >
              {/* Big metric */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                  <item.icon className={`w-7 h-7 ${c.text}`} />
                </div>
                <div className="text-right">
                  <div className={`font-display text-[48px] font-bold ${c.text} leading-none`}>{item.metric}</div>
                  <div className="text-[13px] text-muted-foreground mt-1">{item.metricLabel}</div>
                </div>
              </div>

              <h3 className="font-display text-[24px] font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-[16px] text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </SlideLayout>
);

export default SlideImpact;
