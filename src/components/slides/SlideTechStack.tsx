import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { Server, GitBranch, Brain, Monitor, Database } from "lucide-react";

const stacks = [
  {
    icon: Server,
    title: "Backend & API",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    items: [
      { name: "Python", desc: "Core programming language — chosen for its rich ML/data ecosystem and rapid prototyping capabilities" },
      { name: "FastAPI", desc: "High-performance async web framework that parses incoming JSON transaction payloads with automatic validation" },
      { name: "Uvicorn", desc: "Lightning-fast ASGI server that handles thousands of concurrent API requests with minimal overhead" },
    ],
  },
  {
    icon: GitBranch,
    title: "Graph & Analytics",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
    items: [
      { name: "NetworkX", desc: "Builds and maintains the live transaction graph — computes PageRank, centrality, and shortest paths between accounts" },
      { name: "Pandas", desc: "Structures and transforms raw transaction data into feature-rich DataFrames for ML model consumption" },
      { name: "NumPy", desc: "Powers high-speed numerical computations for graph metric approximations and statistical aggregations" },
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    color: "text-slide-orange",
    bg: "bg-slide-orange/10",
    border: "border-slide-orange/20",
    items: [
      { name: "XGBoost", desc: "Gradient-boosted decision trees trained on labeled fraud data — classifies known fraud patterns with high precision" },
      { name: "Scikit-learn", desc: "Provides the Isolation Forest algorithm for unsupervised anomaly detection of novel, unseen fraud typologies" },
    ],
  },
  {
    icon: Monitor,
    title: "Visualization",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    items: [
      { name: "D3.js", desc: "Renders interactive charts, timelines, and data dashboards for compliance analysts to explore flagged activity" },
      { name: "Cytoscape", desc: "Visualizes the transaction graph as an interactive network map — showing fund flow paths and suspicious clusters" },
    ],
  },
  {
    icon: Database,
    title: "Data Model",
    color: "text-slide-green",
    bg: "bg-slide-green/10",
    border: "border-slide-green/20",
    items: [
      { name: "In-Memory Graph", desc: "Optimized in-memory data structure for sub-millisecond graph queries during real-time scoring" },
      { name: "Neo4j Ready", desc: "Architecture designed for seamless migration to Neo4j clusters for production-scale distributed graph processing" },
    ],
  },
];

const SlideTechStack = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-16 py-14 relative z-10">
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Server className="w-6 h-6 text-primary" />
        </div>
        <span className="text-[15px] font-display font-medium text-primary uppercase tracking-[3px]">Technology</span>
      </motion.div>

      <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }} className="font-display text-[46px] font-bold leading-[1.1] mb-10 text-foreground">
        Technology <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stack</span>
      </motion.h2>

      <div className="grid grid-cols-5 gap-4 flex-1">
        {stacks.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className={`p-5 rounded-2xl border ${s.border} ${s.bg} backdrop-blur-sm flex flex-col`}
          >
            <div className={`w-12 h-12 rounded-xl ${s.bg} border ${s.border} flex items-center justify-center mb-4`}>
              <s.icon className={`w-6 h-6 ${s.color}`} />
            </div>
            <h3 className={`font-display text-[17px] font-semibold text-foreground mb-4`}>{s.title}</h3>
            <div className="space-y-3 flex-1">
              {s.items.map((item) => (
                <div key={item.name} className="border-l-2 border-border pl-3">
                  <span className={`block text-[13px] font-display font-semibold ${s.color} mb-0.5`}>{item.name}</span>
                  <span className="block text-[11.5px] text-muted-foreground leading-[1.6]">{item.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default SlideTechStack;
