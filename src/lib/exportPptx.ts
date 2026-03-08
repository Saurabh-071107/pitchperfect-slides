import pptxgen from "pptxgenjs";
import html2canvas from "html2canvas";
import { createElement } from "react";
import { createRoot } from "react-dom/client";

// We import slide components lazily to render them offscreen
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
  // Create an offscreen container at exact slide dimensions
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.left = "-9999px";
  container.style.top = "0";
  container.style.width = "1920px";
  container.style.height = "1080px";
  container.style.overflow = "hidden";
  document.body.appendChild(container);

  // Render the slide component into the container
  const root = createRoot(container);
  await new Promise<void>((resolve) => {
    root.render(createElement(Component));
    // Wait for render + animations to settle
    setTimeout(resolve, 600);
  });

  // Capture as canvas
  const canvas = await html2canvas(container, {
    width: 1920,
    height: 1080,
    scale: 1,
    backgroundColor: null,
    useCORS: true,
    logging: false,
  });

  const dataUrl = canvas.toDataURL("image/png");

  // Cleanup
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
    slide.addImage({
      data: imageData,
      x: 0,
      y: 0,
      w: 13.33,
      h: 7.5,
    });
  }

  const blob = (await pptx.write({ outputType: "blob" })) as Blob;
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Fund_Flow_Fraud_Detection.pptx";
  a.click();
  URL.revokeObjectURL(url);
}
