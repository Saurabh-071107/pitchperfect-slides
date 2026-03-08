import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Server, GitBranch, Brain, Monitor, Database } from "lucide-react";

const stacks = [
  { icon: Server, title: "Backend & API", items: ["Python", "FastAPI", "Uvicorn"], color: "text-primary", bg: "bg-primary/10", border: "border-primary/20" },
  { icon: GitBranch, title: "Graph & Analytics", items: ["NetworkX", "Pandas", "NumPy"], color: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
  { icon: Brain, title: "Machine Learning", items: ["XGBoost", "Scikit-learn", "Isolation Forest"], color: "text-slide-orange", bg: "bg-slide-orange/10", border: "border-slide-orange/20" },
  { icon: Monitor, title: "Visualization", items: ["D3.js", "Cytoscape"], color: "text-primary", bg: "bg-primary/10", border: "border-primary/20" },
  { icon: Database, title: "Data Model", items: ["In-Memory Graph", "Neo4j Ready"], color: "text-slide-green", bg: "bg-slide-green/10", border: "border-slide-green/20" },
];

const SlideTechStack = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16 relative z-10">
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Server className="w-6 h-6 text-primary" />
        </div>
        <span className="text-[16px] font-display font-medium text-primary uppercase tracking-[3px]">Technology</span>
      </motion.div>

      <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }} className="font-display text-[52px] font-bold leading-[1.1] mb-14 text-foreground">
        Technology <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stack</span>
      </motion.h2>

      <div className="grid grid-cols-5 gap-5 flex-1">
        {stacks.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className={`p-6 rounded-2xl border ${s.border} ${s.bg} backdrop-blur-sm flex flex-col items-center text-center`}
          >
            <div className={`w-16 h-16 rounded-xl ${s.bg} border ${s.border} flex items-center justify-center mb-5`}>
              <s.icon className={`w-8 h-8 ${s.color}`} />
            </div>
            <h3 className="font-display text-[20px] font-semibold text-foreground mb-4">{s.title}</h3>
            <div className="space-y-2">
              {s.items.map((item) => (
                <span key={item} className="block text-[15px] text-muted-foreground">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default SlideTechStack;
