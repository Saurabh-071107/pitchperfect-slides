import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import GraphVisualization from "./GraphVisualization";
import { AlertTriangle, Repeat, ArrowRightLeft, Layers } from "lucide-react";

const fraudTypes = [
  {
    icon: Layers,
    title: "Layering",
    desc: "Passing money rapidly across long chains of accounts to obscure the trail",
    color: "text-slide-red",
    bgColor: "bg-slide-red/10",
    borderColor: "border-slide-red/20",
  },
  {
    icon: Repeat,
    title: "Circular Trading",
    desc: "Round-tripping funds to simulate legitimate business activity",
    color: "text-slide-orange",
    bgColor: "bg-slide-orange/10",
    borderColor: "border-slide-orange/20",
  },
  {
    icon: ArrowRightLeft,
    title: "Structuring",
    desc: "Keeping transfers just below reporting thresholds to evade detection",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
];

const SlideProblem = () => (
  <SlideLayout>
    <div className="flex h-full">
      {/* Left content */}
      <div className="w-[55%] flex flex-col justify-center px-20 py-16 relative z-10">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-12 rounded-lg bg-slide-red/10 border border-slide-red/20 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-slide-red" />
          </div>
          <span className="text-[16px] font-display font-medium text-slide-red uppercase tracking-[3px]">The Problem</span>
        </motion.div>

        <motion.h2
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="font-display text-[52px] font-bold leading-[1.1] mb-6 text-foreground"
        >
          Evolving
          <br />
          Financial Crime
        </motion.h2>

        <motion.p
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[20px] text-muted-foreground leading-relaxed mb-12 max-w-[560px]"
        >
          Traditional rule-based systems are failing to catch sophisticated fraud. Criminals hide illicit fund flows through:
        </motion.p>

        <div className="space-y-5">
          {fraudTypes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.15 }}
              className={`flex items-start gap-5 p-5 rounded-xl border ${item.borderColor} ${item.bgColor} backdrop-blur-sm`}
            >
              <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <h3 className={`font-display text-[20px] font-semibold ${item.color} mb-1`}>{item.title}</h3>
                <p className="text-[16px] text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 p-4 rounded-lg bg-secondary/50 border border-border"
        >
          <p className="text-[16px] text-muted-foreground italic">
            ⚡ Analyzing these complex patterns manually is <span className="text-foreground font-medium">too slow</span> and <span className="text-foreground font-medium">too late</span>.
          </p>
        </motion.div>
      </div>

      {/* Right illustration */}
      <div className="w-[45%] flex items-center justify-center relative">
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
