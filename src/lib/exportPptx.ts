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
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.left = "-9999px";
  container.style.top = "0";
  container.style.width = "1920px";
  container.style.height = "1080px";
  container.style.overflow = "hidden";
  container.style.zIndex = "-1";
  container.style.backgroundColor = "hsl(220, 20%, 7%)";
  container.style.color = "hsl(210, 20%, 95%)";
  container.className = "slide-export-container";

  // Copy all CSS custom properties from :root so html2canvas can resolve them
  const rootStyles = getComputedStyle(document.documentElement);
  const cssVars = [
    "--background", "--foreground", "--card", "--card-foreground",
    "--primary", "--primary-foreground", "--secondary", "--secondary-foreground",
    "--muted", "--muted-foreground", "--accent", "--accent-foreground",
    "--border", "--input", "--ring", "--radius",
    "--slide-glow", "--slide-accent-green", "--slide-accent-orange",
    "--slide-accent-red", "--slide-surface", "--slide-surface-hover",
    "--destructive", "--destructive-foreground",
  ];
  cssVars.forEach((v) => {
    const val = rootStyles.getPropertyValue(v);
    if (val) container.style.setProperty(v, val);
  });

  document.body.appendChild(container);

  const root = createRoot(container);
  await new Promise<void>((resolve) => {
    root.render(createElement(Component));
    setTimeout(resolve, 2000);
  });

  // Resolve SVG currentColor to computed color values
  const svgs = container.querySelectorAll("svg");
  svgs.forEach((svg) => {
    const computed = window.getComputedStyle(svg);
    if (!svg.getAttribute("width")) svg.setAttribute("width", computed.width);
    if (!svg.getAttribute("height")) svg.setAttribute("height", computed.height);
    const color = computed.color;
    svg.querySelectorAll("*").forEach((el) => {
      const s = window.getComputedStyle(el);
      if (s.stroke === "currentColor" || el.getAttribute("stroke") === "currentcolor") {
        (el as HTMLElement).style.stroke = color;
      }
      if (s.fill === "currentColor" || el.getAttribute("fill") === "currentcolor") {
        (el as HTMLElement).style.fill = color;
      }
    });
  });

  // Inline all computed background/color styles for elements using CSS vars
  // so html2canvas (which can't resolve CSS custom properties) sees real values
  container.querySelectorAll("*").forEach((el) => {
    const cs = getComputedStyle(el);
    const htmlEl = el as HTMLElement;
    if (cs.backgroundColor && cs.backgroundColor !== "rgba(0, 0, 0, 0)") {
      htmlEl.style.backgroundColor = cs.backgroundColor;
    }
    if (cs.color) {
      htmlEl.style.color = cs.color;
    }
    if (cs.borderColor && cs.borderColor !== "rgb(0, 0, 0)") {
      htmlEl.style.borderColor = cs.borderColor;
    }
  });

  const canvas = await html2canvas(container, {
    width: 1920,
    height: 1080,
    scale: 2,
    backgroundColor: "#0B0F14",
    useCORS: true,
    logging: false,
    allowTaint: true,
    foreignObjectRendering: false,
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
