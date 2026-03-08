import pptxgen from "pptxgenjs";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { createElement } from "react";
import { createRoot } from "react-dom/client";

import SlideTitleSlide from "@/components/slides/SlideTitleSlide";
import SlideProblem from "@/components/slides/SlideProblem";
import SlideSolution from "@/components/slides/SlideSolution";
import SlideInnovations from "@/components/slides/SlideInnovations";
import SlideArchitecture from "@/components/slides/SlideArchitecture";
import SlideTechStack from "@/components/slides/SlideTechStack";
import SlideImpact from "@/components/slides/SlideImpact";
import SlideDemo from "@/components/slides/SlideDemo";

const slideComponents = [
  SlideTitleSlide,
  SlideProblem,
  SlideSolution,
  SlideInnovations,
  SlideArchitecture,
  SlideTechStack,
  SlideImpact,
  SlideDemo,
];

async function renderSlideToImage(Component: React.FC): Promise<string> {
  // Create a visible but off-screen container so styles/SVGs render properly
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.left = "-9999px";
  container.style.top = "0";
  container.style.width = "1920px";
  container.style.height = "1080px";
  container.style.overflow = "hidden";
  container.style.zIndex = "-1";
  // Ensure it inherits the dark theme background
  container.style.backgroundColor = "hsl(220, 20%, 7%)";
  container.className = "slide-export-container";
  document.body.appendChild(container);

  // Render the component
  const root = createRoot(container);
  await new Promise<void>((resolve) => {
    root.render(createElement(Component));
    // Give time for:
    // 1. React render
    // 2. Framer-motion animations to complete
    // 3. Fonts to apply
    // 4. SVG icons to render
    setTimeout(resolve, 1500);
  });

  // Convert all SVG elements to inline so html2canvas can capture them
  const svgs = container.querySelectorAll("svg");
  svgs.forEach((svg) => {
    // Ensure SVGs have explicit dimensions and are visible
    const computed = window.getComputedStyle(svg);
    if (!svg.getAttribute("width")) {
      svg.setAttribute("width", computed.width);
    }
    if (!svg.getAttribute("height")) {
      svg.setAttribute("height", computed.height);
    }
    // Convert currentColor to actual color
    const color = computed.color;
    svg.querySelectorAll("*").forEach((el) => {
      const elStyle = window.getComputedStyle(el);
      if (elStyle.stroke === "currentColor" || el.getAttribute("stroke") === "currentcolor") {
        (el as HTMLElement).style.stroke = color;
      }
      if (elStyle.fill === "currentColor" || el.getAttribute("fill") === "currentcolor") {
        (el as HTMLElement).style.fill = color;
      }
    });
  });

  // Capture with html2canvas
  const canvas = await html2canvas(container, {
    width: 1920,
    height: 1080,
    scale: 2, // 2x for crisp output
    backgroundColor: "#0B0F14",
    useCORS: true,
    logging: false,
    allowTaint: true,
    foreignObjectRendering: true,
  });

  const dataUrl = canvas.toDataURL("image/png", 1.0);

  root.unmount();
  document.body.removeChild(container);

  return dataUrl;
}

export async function exportPresentation(onProgress?: (current: number, total: number) => void) {
  const pptx = new pptxgen();
  pptx.defineLayout({ name: "HD", width: 13.33, height: 7.5 });
  pptx.layout = "HD";
  pptx.author = "Fund Flow Fraud Detection";
  pptx.title = "Advanced Fund Flow Fraud Detection";

  for (let i = 0; i < slideComponents.length; i++) {
    onProgress?.(i + 1, slideComponents.length);
    const imageData = await renderSlideToImage(slideComponents[i]);
    const slide = pptx.addSlide();
    slide.addImage({ data: imageData, x: 0, y: 0, w: 13.33, h: 7.5 });
  }

  const blob = (await pptx.write({ outputType: "blob" })) as Blob;
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Fund_Flow_Fraud_Detection.pptx";
  a.click();
  URL.revokeObjectURL(url);
}

export async function exportPDF(onProgress?: (current: number, total: number) => void) {
  const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1920, 1080] });

  for (let i = 0; i < slideComponents.length; i++) {
    onProgress?.(i + 1, slideComponents.length);
    const imageData = await renderSlideToImage(slideComponents[i]);
    if (i > 0) pdf.addPage([1920, 1080], "landscape");
    pdf.addImage(imageData, "PNG", 0, 0, 1920, 1080);
  }

  pdf.save("Fund_Flow_Fraud_Detection.pdf");
}
