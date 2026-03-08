import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid, Download } from "lucide-react";
import { exportPresentation } from "@/lib/exportPptx";
import SlideTitleSlide from "./slides/SlideTitleSlide";
import SlideProblem from "./slides/SlideProblem";
import SlideSolution from "./slides/SlideSolution";
import SlideInnovations from "./slides/SlideInnovations";
import SlideArchitecture from "./slides/SlideArchitecture";
import SlideTechStack from "./slides/SlideTechStack";
import SlideImpact from "./slides/SlideImpact";
import SlideDemo from "./slides/SlideDemo";

const slides = [
  { component: SlideTitleSlide, title: "Title" },
  { component: SlideProblem, title: "Problem" },
  { component: SlideSolution, title: "Solution" },
  { component: SlideInnovations, title: "Innovations" },
  { component: SlideArchitecture, title: "Architecture" },
  { component: SlideTechStack, title: "Tech Stack" },
  { component: SlideImpact, title: "Impact" },
  { component: SlideDemo, title: "Demo & Q/A" },
];

const PresentationViewer = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateScale = useCallback(() => {
    if (!containerRef.current) return;
    const { clientWidth, clientHeight } = containerRef.current;
    setScale(Math.min(clientWidth / 1920, clientHeight / 1080));
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale, isFullscreen]);

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape") { setIsFullscreen(false); setShowGrid(false); }
      if (e.key === "f" || e.key === "F") setIsFullscreen((f) => !f);
      if (e.key === "g" || e.key === "G") setShowGrid((g) => !g);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  useEffect(() => {
    if (isFullscreen) document.documentElement.requestFullscreen?.();
    else if (document.fullscreenElement) document.exitFullscreen?.();
  }, [isFullscreen]);

  useEffect(() => {
    const handler = () => { if (!document.fullscreenElement) setIsFullscreen(false); };
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const SlideComponent = slides[current].component;

  if (showGrid) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl font-semibold text-foreground">All Slides</h2>
          <button onClick={() => setShowGrid(false)} className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">
            Close Grid
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setShowGrid(false); }}
              className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all hover:scale-[1.02] ${
                i === current ? "border-primary shadow-lg" : "border-border hover:border-primary/40"
              }`}
            >
              <div className="slide-container">
                <div className="slide-canvas" style={{ transform: `scale(${0.15})` }}>
                  <slide.component />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm px-3 py-2 text-left">
                <span className="text-xs text-muted-foreground">{i + 1}.</span>
                <span className="text-xs text-foreground ml-1 font-medium">{slide.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-screen h-screen bg-background overflow-hidden select-none" tabIndex={0}>
      {/* Slide canvas */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="slide-container"
        >
          <div className="slide-canvas" style={{ transform: `scale(${scale})` }}>
            <SlideComponent />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom controls */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full bg-card/80 border border-border backdrop-blur-md z-50"
      >
        <button onClick={prev} disabled={current === 0} className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide dots */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all rounded-full ${
                i === current ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        <button onClick={next} disabled={current === slides.length - 1} className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="w-px h-4 bg-border mx-1" />

        <span className="text-xs text-muted-foreground font-display min-w-[36px] text-center">
          {current + 1}/{slides.length}
        </span>

        <button onClick={() => setShowGrid(true)} className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
          <Grid className="w-4 h-4" />
        </button>

        <button onClick={() => setIsFullscreen((f) => !f)} className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>

        <div className="w-px h-4 bg-border" />

        <button onClick={() => exportPresentation()} className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" title="Download PPTX">
          <Download className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
};

export default PresentationViewer;
