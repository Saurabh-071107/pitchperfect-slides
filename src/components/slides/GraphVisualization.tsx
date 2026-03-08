import { motion } from "framer-motion";

/** Animated network graph SVG used as illustration on multiple slides */
const GraphVisualization = ({ className = "" }: { className?: string }) => {
  const nodes = [
    { x: 300, y: 200, label: "Bank A", color: "hsl(var(--primary))", size: 28 },
    { x: 550, y: 120, label: "Shell Co", color: "hsl(var(--slide-accent-red))", size: 22 },
    { x: 700, y: 300, label: "Bank B", color: "hsl(var(--primary))", size: 28 },
    { x: 450, y: 380, label: "Mule", color: "hsl(var(--slide-accent-orange))", size: 20 },
    { x: 200, y: 400, label: "Source", color: "hsl(var(--slide-accent-green))", size: 24 },
    { x: 600, y: 480, label: "Target", color: "hsl(var(--slide-accent-red))", size: 24 },
    { x: 150, y: 250, label: "KYC", color: "hsl(var(--muted-foreground))", size: 16 },
    { x: 750, y: 150, label: "Offshore", color: "hsl(var(--slide-accent-orange))", size: 18 },
  ];

  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 0], [4, 0], [3, 5], [4, 6], [1, 7], [2, 5], [0, 3],
  ];

  return (
    <svg viewBox="0 0 900 600" className={className} fill="none">
      {/* Edges */}
      {edges.map(([from, to], i) => (
        <motion.line
          key={`edge-${i}`}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          stroke="hsl(var(--border))"
          strokeWidth={1.5}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
        />
      ))}

      {/* Animated data flow along edges */}
      {edges.slice(0, 5).map(([from, to], i) => (
        <motion.circle
          key={`flow-${i}`}
          r={3}
          fill="hsl(var(--primary))"
          initial={{ cx: nodes[from].x, cy: nodes[from].y, opacity: 0 }}
          animate={{
            cx: [nodes[from].x, nodes[to].x],
            cy: [nodes[from].y, nodes[to].y],
            opacity: [0, 1, 0],
          }}
          transition={{ delay: 1 + i * 0.4, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.g
          key={`node-${i}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 200 }}
        >
          {/* Pulse ring for flagged nodes */}
          {(node.label === "Shell Co" || node.label === "Mule") && (
            <circle cx={node.x} cy={node.y} r={node.size + 8} fill="none" stroke={node.color} strokeWidth={1} className="pulse-ring" opacity={0.4} />
          )}
          <circle cx={node.x} cy={node.y} r={node.size} fill={node.color} opacity={0.15} />
          <circle cx={node.x} cy={node.y} r={node.size * 0.6} fill={node.color} opacity={0.8} />
          <text x={node.x} y={node.y + node.size + 16} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize={12} fontFamily="var(--font-body)">
            {node.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
};

export default GraphVisualization;
