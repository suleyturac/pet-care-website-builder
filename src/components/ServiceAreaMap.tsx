import { useState } from "react";

interface Area {
  name: string;
  path: string;
  active: boolean;
}

const areas: Area[] = [
  {
    name: "Dyker Heights",
    active: true,
    path: "M 180 160 L 220 140 L 260 155 L 255 195 L 210 200 L 180 185 Z",
  },
  {
    name: "Bay Ridge",
    active: true,
    path: "M 140 185 L 180 160 L 180 185 L 210 200 L 200 240 L 155 235 L 140 210 Z",
  },
  {
    name: "Bensonhurst",
    active: true,
    path: "M 260 155 L 310 140 L 330 170 L 320 210 L 255 195 Z",
  },
  {
    name: "Bath Beach",
    active: true,
    path: "M 210 200 L 255 195 L 320 210 L 310 250 L 250 260 L 200 240 Z",
  },
  {
    name: "Borough Park",
    active: true,
    path: "M 220 140 L 280 110 L 310 140 L 260 155 Z",
  },
  {
    name: "Sunset Park",
    active: false,
    path: "M 180 110 L 220 90 L 280 110 L 220 140 L 180 160 L 155 140 Z",
  },
  {
    name: "Gravesend",
    active: false,
    path: "M 320 210 L 370 190 L 390 230 L 370 270 L 310 250 Z",
  },
  {
    name: "Coney Island",
    active: false,
    path: "M 250 260 L 310 250 L 370 270 L 350 300 L 270 305 L 200 280 L 200 240 Z",
  },
  {
    name: "Park Slope",
    active: false,
    path: "M 155 80 L 180 110 L 155 140 L 120 120 Z",
  },
];

const ServiceAreaMap = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>("Dyker Heights");

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-foreground text-primary-foreground">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Map */}
        <div className="relative">
          <svg
            viewBox="80 60 350 270"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {areas.map((area) => (
              <g key={area.name}>
                <path
                  d={area.path}
                  fill={
                    selectedArea === area.name
                      ? "hsl(205, 60%, 55%)"
                      : hoveredArea === area.name
                      ? area.active
                        ? "hsl(80, 50%, 50%)"
                        : "hsl(220, 20%, 40%)"
                      : area.active
                      ? "hsl(80, 45%, 40%)"
                      : "hsl(220, 15%, 30%)"
                  }
                  stroke="hsl(220, 20%, 20%)"
                  strokeWidth="1.5"
                  className="cursor-pointer transition-colors duration-200"
                  onMouseEnter={() => setHoveredArea(area.name)}
                  onMouseLeave={() => setHoveredArea(null)}
                  onClick={() => setSelectedArea(area.name)}
                />
              </g>
            ))}
            {/* Area labels */}
            {areas.map((area) => {
              const match = area.path.match(/M\s+([\d.]+)\s+([\d.]+)/);
              if (!match) return null;
              const coords = area.path
                .replace(/[MLZ]/g, "")
                .trim()
                .split(/\s+/)
                .map(Number);
              let cx = 0, cy = 0, count = 0;
              for (let j = 0; j < coords.length; j += 2) {
                cx += coords[j];
                cy += coords[j + 1];
                count++;
              }
              cx /= count;
              cy /= count;
              return (
                <text
                  key={`label-${area.name}`}
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="pointer-events-none select-none"
                  fill="white"
                  fontSize="8"
                  fontWeight="600"
                >
                  {area.name}
                </text>
              );
            })}
          </svg>
        </div>

        {/* Legend */}
        <div>
          <h2 className="text-3xl md:text-5xl font-heading mb-3">
            Our Service Areas
          </h2>
          <p className="text-sm font-body opacity-70 mb-8">
            across Brooklyn, NY and surrounding neighborhoods
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full" style={{ background: "hsl(80, 45%, 40%)" }} />
              <span className="font-body text-sm">Active Service Areas</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full" style={{ background: "hsl(220, 15%, 30%)" }} />
              <span className="font-body text-sm">Nearby Areas</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full" style={{ background: "hsl(205, 60%, 55%)" }} />
              <span className="font-body text-sm">Selected Area</span>
            </div>
          </div>

          {selectedArea && (
            <div className="mt-8 p-5 rounded-2xl border border-primary-foreground/20 bg-primary-foreground/5">
              <h3 className="font-heading text-xl mb-1">{selectedArea}</h3>
              <p className="font-body text-sm opacity-70">
                {areas.find((a) => a.name === selectedArea)?.active
                  ? "We actively serve this area with all our pet care services including dog walking, boarding, and pet taxi."
                  : "This area is nearby. Contact us to check availability for services in this neighborhood."}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;
