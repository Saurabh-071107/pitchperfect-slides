import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Play, ArrowRight, MessageCircle } from "lucide-react";

const SlideDemo = () => (
  <SlideLayout>
    <div className="flex flex-col items-center justify-center h-full px-20 text-center relative z-10">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
        className="w-28 h-28 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-12"
        style={{ boxShadow: "var(--shadow-glow-strong)" }}
      >
        <Play className="w-12 h-12 text-primary ml-1" />
      </motion.div>

      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="font-display text-[60px] font-bold text-foreground mb-6"
      >
        Live Demo & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Q&A</span>
      </motion.h2>

      <motion.div initial={{ width: 0 }} animate={{ width: 120 }} transition={{ delay: 0.7, duration: 0.5 }} className="h-[2px] bg-gradient-to-r from-primary to-accent mb-10 mx-auto" />

      <div className="grid grid-cols-2 gap-8 max-w-[900px] w-full mb-14">
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="p-8 rounded-2xl border border-primary/20 bg-primary/5 text-left">
          <h3 className="font-display text-[22px] font-semibold text-primary mb-4">Live Demonstration</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-[17px] text-muted-foreground">
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              Detecting a deep Layering attack instantly
            </li>
            <li className="flex items-start gap-3 text-[17px] text-muted-foreground">
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              Recognizing organic traffic properly
            </li>
          </ul>
        </motion.div>

        <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.9 }} className="p-8 rounded-2xl border border-accent/20 bg-accent/5 text-left">
          <h3 className="font-display text-[22px] font-semibold text-accent mb-4">Next Steps</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-[17px] text-muted-foreground">
              <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              Distribute graph via Neo4j cluster
            </li>
            <li className="flex items-start gap-3 text-[17px] text-muted-foreground">
              <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              Deepen behavioral models (LSTMs)
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex items-center gap-3 text-[22px] text-muted-foreground"
      >
        <MessageCircle className="w-6 h-6 text-primary" />
        <span className="font-display">Thank you! Any Questions?</span>
      </motion.div>
    </div>
  </SlideLayout>
);

export default SlideDemo;
