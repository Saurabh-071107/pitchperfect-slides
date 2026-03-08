import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Shield } from "lucide-react";

const SlideTitleSlide = () => (
  <SlideLayout>
    <div className="flex flex-col items-center justify-center h-full px-40 text-center relative z-10">
      {/* Logo area */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
        className="mb-16"
      >
        <div className="w-32 h-32 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto" style={{ boxShadow: "var(--shadow-glow)" }}>
          <Shield className="w-16 h-16 text-primary" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="font-display text-[82px] font-bold leading-[1.05] tracking-tight text-foreground"
      >
        Advanced Fund Flow
        <br />
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Fraud Detection
        </span>
      </motion.h1>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="h-[2px] bg-gradient-to-r from-primary to-accent my-10 mx-auto"
      />

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-[28px] text-muted-foreground font-body font-light tracking-wide"
      >
        AI & Graph-Powered Real-Time Analytics
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-8 px-6 py-2 rounded-full border border-border bg-secondary/50 text-muted-foreground text-[18px]"
      >
        Hackathon Presentation
      </motion.div>
    </div>
  </SlideLayout>
);

export default SlideTitleSlide;
