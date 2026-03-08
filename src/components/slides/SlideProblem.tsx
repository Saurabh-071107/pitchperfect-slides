import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import GraphVisualization from "./GraphVisualization";
import { AlertTriangle, Repeat, ArrowRightLeft, Layers } from "lucide-react";

const fraudTypes = [
  {
    icon: Layers,
    title: "Layering",
    desc: "Criminals rapidly move illicit funds through multiple intermediary accounts — sometimes 10 or more — in quick succession. Each hop obscures the origin, making it nearly impossible for traditional systems to trace the money back to its source. By the time a manual review flags the first transfer, the funds have already exited the network.",
    color: "text-slide-red",
    bgColor: "bg-slide-red/10",
    borderColor: "border-slide-red/20",
  },
  {
    icon: Repeat,
    title: "Circular Trading",
    desc: "Fraudsters create closed loops of transactions between colluding accounts, generating the appearance of legitimate commercial activity. Money is sent from Account A → B → C → back to A, inflating transaction volumes and creating fake revenue streams that fool compliance teams into believing the activity is organic and lawful.",
    color: "text-slide-orange",
    bgColor: "bg-slide-orange/10",
    borderColor: "border-slide-orange/20",
  },
  {
    icon: ArrowRightLeft,
    title: "Structuring (Smurfing)",
    desc: "To avoid triggering Currency Transaction Reports (CTRs) and Suspicious Activity Reports (SARs), criminals deliberately split large sums into smaller transfers — each kept just below the regulatory reporting threshold (e.g., $10,000). This technique exploits the fact that individual transactions appear routine, while the aggregate pattern reveals coordinated evasion.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
];

const SlideProblem = () => (
  <SlideLayout>
    <div className="flex h-full">
      {/* Left content */}
      <div className="w-[58%] flex flex-col justify-center px-16 py-12 relative z-10">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-12 rounded-lg bg-slide-red/10 border border-slide-red/20 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-slide-red" />
          </div>
          <span className="text-[15px] font-display font-medium text-slide-red uppercase tracking-[3px]">The Problem</span>
        </motion.div>

        <motion.h2
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="font-display text-[46px] font-bold leading-[1.1] mb-4 text-foreground"
        >
          Evolving
          <br />
          Financial Crime
        </motion.h2>

        <motion.p
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[17px] text-muted-foreground leading-relaxed mb-8 max-w-[600px]"
        >
          Traditional rule-based detection systems rely on static thresholds and predefined patterns. But modern financial criminals have evolved — they exploit the gaps between these rigid rules using three primary techniques:
        </motion.p>

        <div className="space-y-4">
          {fraudTypes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.15 }}
              className={`flex items-start gap-4 p-4 rounded-xl border ${item.borderColor} ${item.bgColor} backdrop-blur-sm`}
            >
              <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0 mt-1`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <h3 className={`font-display text-[18px] font-semibold ${item.color} mb-1.5`}>{item.title}</h3>
                <p className="text-[13.5px] text-muted-foreground leading-[1.65]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 p-4 rounded-lg bg-secondary/50 border border-border"
        >
          <p className="text-[15px] text-muted-foreground">
            ⚡ The core challenge: By the time human analysts identify these patterns, the money is <span className="text-foreground font-semibold">already gone</span>. We need a system that thinks in <span className="text-foreground font-semibold">milliseconds, not hours</span>.
          </p>
        </motion.div>
      </div>

      {/* Right illustration */}
      <div className="w-[42%] flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full"
        >
          <GraphVisualization className="w-full h-auto opacity-80" />
        </motion.div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideProblem;
