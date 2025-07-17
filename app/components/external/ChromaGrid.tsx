import React, { useRef } from "react";

export interface ChromaItem {
  image?: string;
  title: string;
  subtitle: string | string[];
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
}

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
}) => {
  const data = items || [];
  const gridRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const grid = gridRef.current;
    if (!grid) return;

    const rect = grid.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    for (const card of grid.children) {
      const cardEl = card as HTMLElement;
      const cardRect = cardEl.getBoundingClientRect();
      const cardX = cardRect.left + cardRect.width / 2 - rect.left;
      const cardY = cardRect.top + cardRect.height / 2 - rect.top;

      const distance = Math.sqrt(
        Math.pow(mouseX - cardX, 2) + Math.pow(mouseY - cardY, 2)
      );

      const radius = 300;
      const proximity = Math.max(0, 1 - distance / radius);

      cardEl.style.setProperty("--proximity", proximity.toString());

      const cardMouseX = e.clientX - cardRect.left;
      const cardMouseY = e.clientY - cardRect.top;
      cardEl.style.setProperty("--mouse-x", `${cardMouseX}px`);
      cardEl.style.setProperty("--mouse-y", `${cardMouseY}px`);
    }
  };

  const handleMouseLeave = () => {
    const grid = gridRef.current;
    if (!grid) return;
    for (const card of grid.children) {
      (card as HTMLElement).style.setProperty("--proximity", "0");
    }
  };

  return (
    <div
      ref={gridRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full flex flex-wrap justify-center items-center gap-4 p-4 ${className}`}
    >
      {data.map((c, i) => (
        <article
          key={i}
          onClick={() => handleCardClick(c.url)}
          className="group relative w-auto max-w-[300px] rounded-lg overflow-hidden border border-transparent cursor-pointer"
          style={
            {
              "--card-border": c.borderColor || "transparent",
              "--spotlight-color": "rgba(255,255,255,0.3)",
              "--proximity": 0,
              transition: "transform 200ms ease",
            } as React.CSSProperties
          }
        >
          <div
            className="absolute inset-0"
            style={{
              background: c.gradient,
              filter: "blur(calc((1 - var(--proximity)) * 20px))",
              transition: "filter 300ms ease",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20"
            style={{
              opacity: "calc(var(--proximity) * 0.8)",
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
            }}
          />
          <div className="relative z-10 p-3">
            <div className="max-h-[24px] group-hover:max-h-[500px] transition-all duration-500 ease-in-out overflow-hidden">
              <h3 className="m-0 text-center text-[1.05rem] font-semibold text-white font-sans whitespace-nowrap">
                {c.title}
              </h3>
              <div className="pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                {c.image && (
                  <div className="w-full h-auto aspect-video">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                  </div>
                )}
                <footer className="pt-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
                  <div className="m-0 text-[0.85rem] opacity-85 col-span-2">
                    {Array.isArray(c.subtitle) ? (
                      <ul className="list-disc list-inside space-y-1 text-left">
                        {c.subtitle.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="m-0 text-left">{c.subtitle}</p>
                    )}
                  </div>
                  {c.handle && (
                    <span className="text-[0.95rem] opacity-80">
                      {c.handle}
                    </span>
                  )}
                  {c.location && (
                    <span className="text-[0.85rem] opacity-85 text-right">
                      {c.location}
                    </span>
                  )}
                </footer>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ChromaGrid;
