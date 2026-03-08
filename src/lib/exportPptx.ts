import pptxgen from "pptxgenjs";

const BG = "0B0F14";
const FG = "E8ECF1";
const MUTED = "7B8BA3";
const PRIMARY = "0EA5E9";
const ACCENT = "2DB87F";
const ORANGE = "F97316";
const RED = "EF4444";
const GREEN = "2DB87F";
const CARD_BG = "141921";
const BORDER = "1E2533";

function addCornerAccents(slide: pptxgen.Slide) {
  slide.addShape("rect", { x: 0, y: 0, w: 0.02, h: 0.8, fill: { color: PRIMARY + "33" } });
  slide.addShape("rect", { x: 0, y: 0, w: 0.8, h: 0.02, fill: { color: PRIMARY + "33" } });
}

export async function exportPresentation() {
  const pptx = new pptxgen();
  pptx.defineLayout({ name: "HD", width: 13.33, height: 7.5 });
  pptx.layout = "HD";
  pptx.author = "Fund Flow Fraud Detection";
  pptx.title = "Advanced Fund Flow Fraud Detection";

  // ===== SLIDE 1: Title =====
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG };
    addCornerAccents(slide);
    slide.addText("🛡️", { x: 5.5, y: 0.8, w: 2.33, h: 1, fontSize: 48, align: "center" });
    slide.addText("Advanced Fund Flow\nFraud Detection", {
      x: 1.5, y: 2, w: 10.33, h: 2.2, fontSize: 44, fontFace: "Calibri", bold: true, align: "center", color: FG,
    });
    slide.addShape("rect", { x: 5.66, y: 4.3, w: 2, h: 0.04, fill: { color: PRIMARY } });
    slide.addText("AI & Graph-Powered Real-Time Analytics", {
      x: 2, y: 4.6, w: 9.33, h: 0.6, fontSize: 20, fontFace: "Calibri", align: "center", color: MUTED,
    });
    slide.addText("Hackathon Presentation", {
      x: 4.5, y: 5.5, w: 4.33, h: 0.5, fontSize: 14, fontFace: "Calibri", align: "center", color: MUTED,
    });
  }

  // ===== SLIDE 2: Problem =====
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG };
    addCornerAccents(slide);
    slide.addText("⚠️  THE PROBLEM", { x: 0.8, y: 0.5, w: 6, h: 0.5, fontSize: 13, fontFace: "Calibri", bold: true, color: RED });
    slide.addText("Evolving\nFinancial Crime", { x: 0.8, y: 1.1, w: 7, h: 1.4, fontSize: 36, fontFace: "Calibri", bold: true, color: FG });
    slide.addText("Traditional rule-based detection systems rely on static thresholds. Modern criminals exploit the gaps using three primary techniques:", {
      x: 0.8, y: 2.6, w: 7, h: 0.8, fontSize: 13, fontFace: "Calibri", color: MUTED, lineSpacingMultiple: 1.3,
    });

    const fraudTypes = [
      { title: "Layering", desc: "Criminals rapidly move illicit funds through multiple intermediary accounts — sometimes 10 or more — in quick succession, obscuring the origin.", color: RED },
      { title: "Circular Trading", desc: "Fraudsters create closed loops of transactions between colluding accounts, generating the appearance of legitimate commercial activity.", color: ORANGE },
      { title: "Structuring (Smurfing)", desc: "Criminals split large sums into smaller transfers below reporting thresholds to avoid triggering CTRs and SARs.", color: PRIMARY },
    ];

    fraudTypes.forEach((f, i) => {
      const y = 3.6 + i * 1.15;
      slide.addShape("roundRect", { x: 0.8, y, w: 7.5, h: 1, fill: { color: CARD_BG }, rectRadius: 0.1, line: { color: BORDER, width: 0.5 } });
      slide.addText(f.title, { x: 1.1, y: y + 0.1, w: 3, h: 0.35, fontSize: 14, fontFace: "Calibri", bold: true, color: f.color });
      slide.addText(f.desc, { x: 1.1, y: y + 0.45, w: 7, h: 0.5, fontSize: 10.5, fontFace: "Calibri", color: MUTED, lineSpacingMultiple: 1.3 });
    });
  }

  // ===== SLIDE 3: Solution =====
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG };
    addCornerAccents(slide);
    slide.addText("⚡  OUR SOLUTION", { x: 0.8, y: 0.5, w: 6, h: 0.5, fontSize: 13, fontFace: "Calibri", bold: true, color: ACCENT });
    slide.addText("Multi-Modal ML Architecture", { x: 0.8, y: 1.1, w: 10, h: 0.8, fontSize: 36, fontFace: "Calibri", bold: true, color: FG });
    slide.addText("A real-time, multi-modal ML system that sees what rule-based systems cannot — by treating financial networks as evolving graphs.", {
      x: 0.8, y: 2.0, w: 10, h: 0.6, fontSize: 13, fontFace: "Calibri", color: MUTED, lineSpacingMultiple: 1.3,
    });

    const features = [
      { title: "Graph-Native Architecture", metric: "500K+ nodes", desc: "Models the entire banking ecosystem as a living graph. Every account is a node, every transaction an edge." },
      { title: "Full Fund-Flow Path Tracking", metric: "End-to-end", desc: "Traces the complete journey of every dollar from origin to final destination across all intermediaries." },
      { title: "Sub-100ms Real-Time Alerts", metric: "<100ms", desc: "Every incoming transaction is scored and analyzed before it settles, enabling pre-settlement blocking." },
      { title: "Reduced False Positives", metric: "92% accuracy", desc: "Combining supervised + unsupervised ML distinguishes genuine threats from legitimate activity." },
    ];

    features.forEach((f, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 0.8 + col * 6;
      const y = 2.9 + row * 2.1;
      slide.addShape("roundRect", { x, y, w: 5.6, h: 1.9, fill: { color: CARD_BG }, rectRadius: 0.1, line: { color: BORDER, width: 0.5 } });
      slide.addText(f.metric, { x: x + 3.2, y: y + 0.15, w: 2.2, h: 0.35, fontSize: 11, fontFace: "Calibri", bold: true, color: PRIMARY, align: "right" });
      slide.addText(f.title, { x: x + 0.3, y: y + 0.15, w: 3.5, h: 0.4, fontSize: 15, fontFace: "Calibri", bold: true, color: FG });
      slide.addText(f.desc, { x: x + 0.3, y: y + 0.65, w: 5, h: 1, fontSize: 10.5, fontFace: "Calibri", color: MUTED, lineSpacingMultiple: 1.4 });
    });
  }

  // ===== SLIDE 4: Innovations =====
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG };
    addCornerAccents(slide);
    slide.addText("🧠  KEY INNOVATIONS", { x: 0.8, y: 0.5, w: 6, h: 0.5, fontSize: 13, fontFace: "Calibri", bold: true, color: PRIMARY });
    slide.addText("Technical Breakthroughs", { x: 0.8, y: 1.1, w: 10, h: 0.8, fontSize: 36, fontFace: "Calibri", bold: true, color: FG });

    const innovations = [
      { title: "01 — Multi-Layer ML Ensemble", color: PRIMARY, items: ["XGBoost (Supervised): Trained on labeled fraud cases for known pattern recognition", "Isolation Forest (Unsupervised): Catches novel, never-before-seen anomalies"] },
      { title: "02 — Deep Graph Engineering", color: ACCENT, items: ["Dynamic PageRank & Centrality: Real-time identification of hub/bridge accounts", "Fund Velocity: Tracks speed of money through account clusters"] },
      { title: "03 — Synchronous Streaming", color: ORANGE, items: ["Instant Graph Updates: Every transaction updates the graph synchronously", "O(1) Approximations: Constant-time local metric updates for sub-100ms scoring"] },
    ];

    innovations.forEach((inn, i) => {
      const x = 0.8 + i * 4;
      slide.addShape("roundRect", { x, y: 2.2, w: 3.7, h: 4.8, fill: { color: CARD_BG }, rectRadius: 0.1, line: { color: BORDER, width: 0.5 } });
      slide.addText(inn.title, { x: x + 0.3, y: 2.4, w: 3.2, h: 0.5, fontSize: 14, fontFace: "Calibri", bold: true, color: inn.color });
      inn.items.forEach((item, j) => {
        slide.addText(item, { x: x + 0.3, y: 3.1 + j * 1.8, w: 3.2, h: 1.5, fontSize: 10.5, fontFace: "Calibri", color: MUTED, lineSpacingMultiple: 1.4 });
      });
    });
  }

  // ===== SLIDE 5: Architecture =====
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG };
    addCornerAccents(slide);
    slide.addText("⚙️  ARCHITECTURE", { x: 0.8, y: 0.5, w: 6, h: 0.5, fontSize: 13, fontFace: "Calibri", bold: true, color: PRIMARY });
    slide.addText("System Pipeline", { x: 0.8, y: 1.1, w: 10, h: 0.8, fontSize: 36, fontFace: "Calibri", bold: true, color: FG });

    const stages = [
      { title: "Data Ingestion", color: PRIMARY, items: ["Real-time transaction streams via FastAPI", "Customer & KYC enrichment", "Device fingerprint & geolocation", "Historical behavioral baselines"] },
      { title: "Feature Engineering", color: ACCENT, items: ["O(1) graph metric updates", "Dynamic PageRank scoring", "Betweenness Centrality", "Localized Fund Velocity"] },
      { title: "ML Scoring Layer", color: ORANGE, items: ["70% XGBoost + 30% Isolation Forest", "Known fraud signatures", "Novel anomaly detection", "Combined confidence scoring"] },
      { title: "Decision & Reporting", color: GREEN, items: ["Auto-block in <100ms", "Investigation dashboard", "Automated STR/FIU reports", "Evidence packaging"] },
    ];

    stages.forEach((s, i) => {
      const x = 0.5 + i * 3.2;
      slide.addShape("roundRect", { x, y: 2.2, w: 2.9, h: 4.8, fill: { color: CARD_BG }, rectRadius: 0.1, line: { color: BORDER, width: 0.5 } });
      slide.addText(s.title, { x: x + 0.2, y: 2.4, w: 2.5, h: 0.5, fontSize: 14, fontFace: "Calibri", bold: true, color: s.color });
      s.items.forEach((item, j) => {
        slide.addText("• " + item, { x: x + 0.2, y: 3.1 + j * 0.6, w: 2.5, h: 0.5, fontSize: 10, fontFace: "Calibri", color: MUTED, lineSpacingMultiple: 1.3 });
      });
      if (i < stages.length - 1) {
        slide.addText("→", { x: x + 2.95, y: 4.2, w: 0.3, h: 0.5, fontSize: 18, color: MUTED, align: "center" });
      }
    });
  }

  // ===== SLIDE 6: Tech Stack =====
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG };
    addCornerAccents(slide);
    slide.addText("🖥️  TECHNOLOGY", { x: 0.8, y: 0.5, w: 6, h: 0.5, fontSize: 13, fontFace: "Calibri", bold: true, color: PRIMARY, letterSpacing: 3 });
    slide.addText("Technology Stack", { x: 0.8, y: 1.1, w: 10, h: 0.8, fontSize: 36, fontFace: "Calibri", bold: true, color: FG });

    const stacks = [
      { title: "Backend & API", items: ["Python", "FastAPI", "Uvicorn"], color: PRIMARY },
      { title: "Graph & Analytics", items: ["NetworkX", "Pandas", "NumPy"], color: ACCENT },
      { title: "Machine Learning", items: ["XGBoost", "Scikit-learn"], color: ORANGE },
      { title: "Visualization", items: ["D3.js", "Cytoscape"], color: PRIMARY },
      { title: "Data Model", items: ["In-Memory Graph", "Neo4j Ready"], color: GREEN },
    ];

    stacks.forEach((s, i) => {
      const x = 0.4 + i * 2.55;
      slide.addShape("roundRect", { x, y: 2.2, w: 2.35, h: 4.5, fill: { color: CARD_BG }, rectRadius: 0.1, line: { color: BORDER, width: 0.5 } });
      slide.addText(s.title, { x: x + 0.15, y: 2.4, w: 2.1, h: 0.5, fontSize: 13, fontFace: "Calibri", bold: true, color: FG });
      s.items.forEach((item, j) => {
        slide.addText(item, { x: x + 0.15, y: 3.1 + j * 0.8, w: 2, h: 0.4, fontSize: 12, fontFace: "Calibri", bold: true, color: s.color });
      });
    });
  }

  // ===== SLIDE 7: Impact =====
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG };
    addCornerAccents(slide);
    slide.addText("📈  BUSINESS IMPACT", { x: 0.8, y: 0.5, w: 6, h: 0.5, fontSize: 13, fontFace: "Calibri", bold: true, color: ACCENT, letterSpacing: 3 });
    slide.addText("Measurable Results", { x: 0.8, y: 1.1, w: 10, h: 0.8, fontSize: 36, fontFace: "Calibri", bold: true, color: FG });

    const impacts = [
      { title: "Faster Detection", metric: "<100ms", label: "Response Time", desc: "Transactions analyzed and flagged before settlement.", color: PRIMARY },
      { title: "Operational Efficiency", metric: "80%", label: "Time Saved", desc: "Automated STR compilation eliminates hours of manual work.", color: ACCENT },
      { title: "Higher Accuracy", metric: "92%", label: "Detection Rate", desc: "Ensemble approach catches known and zero-day fraud.", color: ORANGE },
      { title: "Enterprise Scalability", metric: "10M+", label: "Txns/Day", desc: "Horizontal scaling with sub-100ms latency at scale.", color: GREEN },
    ];

    impacts.forEach((item, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 0.8 + col * 6;
      const y = 2.2 + row * 2.5;
      slide.addShape("roundRect", { x, y, w: 5.6, h: 2.2, fill: { color: CARD_BG }, rectRadius: 0.1, line: { color: BORDER, width: 0.5 } });
      slide.addText(item.metric, { x: x + 3, y: y + 0.15, w: 2.3, h: 0.7, fontSize: 32, fontFace: "Calibri", bold: true, color: item.color, align: "right" });
      slide.addText(item.label, { x: x + 3, y: y + 0.8, w: 2.3, h: 0.3, fontSize: 10, fontFace: "Calibri", color: MUTED, align: "right" });
      slide.addText(item.title, { x: x + 0.3, y: y + 0.2, w: 3, h: 0.5, fontSize: 16, fontFace: "Calibri", bold: true, color: FG });
      slide.addText(item.desc, { x: x + 0.3, y: y + 0.8, w: 3.5, h: 1.2, fontSize: 11, fontFace: "Calibri", color: MUTED, lineSpacingMultiple: 1.4 });
    });
  }

  // ===== SLIDE 8: Demo & Q/A =====
  {
    const slide = pptx.addSlide();
    slide.background = { color: BG };
    addCornerAccents(slide);
    slide.addText("▶", { x: 5.5, y: 1, w: 2.33, h: 1.2, fontSize: 52, align: "center", color: PRIMARY });
    slide.addText("Live Demo & Q&A", { x: 2, y: 2.5, w: 9.33, h: 1, fontSize: 42, fontFace: "Calibri", bold: true, align: "center", color: FG });
    slide.addShape("rect", { x: 5.66, y: 3.6, w: 2, h: 0.04, fill: { color: PRIMARY } });

    // Two boxes
    slide.addShape("roundRect", { x: 2, y: 4.2, w: 4.3, h: 2, fill: { color: CARD_BG }, rectRadius: 0.1, line: { color: PRIMARY + "33", width: 0.5 } });
    slide.addText("Live Demonstration", { x: 2.3, y: 4.35, w: 3.7, h: 0.4, fontSize: 16, fontFace: "Calibri", bold: true, color: PRIMARY });
    slide.addText("→ Detecting a deep Layering attack instantly\n→ Recognizing organic traffic properly", {
      x: 2.3, y: 4.8, w: 3.7, h: 1.2, fontSize: 12, fontFace: "Calibri", color: MUTED, lineSpacingMultiple: 1.5,
    });

    slide.addShape("roundRect", { x: 7, y: 4.2, w: 4.3, h: 2, fill: { color: CARD_BG }, rectRadius: 0.1, line: { color: ACCENT + "33", width: 0.5 } });
    slide.addText("Next Steps", { x: 7.3, y: 4.35, w: 3.7, h: 0.4, fontSize: 16, fontFace: "Calibri", bold: true, color: ACCENT });
    slide.addText("→ Distribute graph via Neo4j cluster\n→ Deepen behavioral models (LSTMs)", {
      x: 7.3, y: 4.8, w: 3.7, h: 1.2, fontSize: 12, fontFace: "Calibri", color: MUTED, lineSpacingMultiple: 1.5,
    });

    slide.addText("💬  Thank you! Any Questions?", { x: 3, y: 6.5, w: 7.33, h: 0.5, fontSize: 16, fontFace: "Calibri", align: "center", color: MUTED });
  }

  const blob = await pptx.write({ outputType: "blob" }) as Blob;
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Fund_Flow_Fraud_Detection.pptx";
  a.click();
  URL.revokeObjectURL(url);
}
