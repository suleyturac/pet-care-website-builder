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
    path: "M 247.9 192.1 L 272.7 201.8 L 289.8 212.3 L 306.1 226.4 L 284.3 229.8 L 270.3 238.5 L 255.2 248.0 L 240.7 257.1 L 226.2 266.2 L 201.5 264.2 L 163.5 249.3 L 152.6 240.9 L 161.2 235.2 L 164.6 232.7 L 170.7 229.6 L 174.0 224.0 L 186.0 205.4 L 193.4 193.5 L 192.7 186.9 L 191.7 182.9 L 188.1 179.3 L 187.5 178.2 L 221.0 185.2 L 247.9 192.1 Z",
  },
  {
    name: "Bay Ridge",
    active: true,
    path: "M 90.0 145.4 L 127.9 159.4 L 142.3 164.4 L 155.3 156.0 L 156.0 158.3 L 157.4 164.5 L 169.9 171.7 L 190.9 181.6 L 180.3 214.5 L 155.6 238.9 L 126.0 272.2 L 120.6 260.8 L 95.3 277.5 L 68.5 284.6 L 62.6 278.7 L 41.0 262.6 L 31.7 239.1 L 30.3 226.1 L 33.7 204.7 L 36.5 198.3 L 62.3 163.5 L 86.4 145.4 L 90.0 145.4 Z",
  },
  {
    name: "Bensonhurst",
    active: true,
    path: "M 353.7 230.0 L 405.1 253.9 L 446.7 270.3 L 453.1 284.3 L 430.7 289.0 L 409.9 290.5 L 389.3 292.0 L 363.3 294.3 L 366.4 306.6 L 341.6 307.9 L 314.5 319.9 L 291.7 310.9 L 270.5 305.4 L 275.3 293.2 L 281.4 286.0 L 254.2 276.7 L 226.2 266.2 L 244.3 254.8 L 263.1 243.1 L 281.2 231.7 L 306.1 226.4 L 311.1 215.4 L 325.2 218.2 L 338.4 224.0 L 353.7 230.0 Z",
  },
  {
    name: "Bath Beach",
    active: true,
    path: "M 319.3 321.8 L 291.9 339.1 L 279.1 347.0 L 274.6 343.0 L 270.3 339.7 L 266.0 337.2 L 234.2 323.4 L 226.4 320.7 L 218.7 318.4 L 204.7 315.3 L 188.9 313.1 L 179.4 312.6 L 170.4 311.1 L 174.9 308.2 L 178.6 305.2 L 189.3 298.5 L 218.6 270.9 L 247.4 274.4 L 281.4 286.0 L 264.2 300.1 L 280.3 308.8 L 305.4 316.4 L 319.3 321.8 Z",
  },
  {
    name: "Borough Park",
    active: true,
    path: "M 441.5 195.5 L 437.4 207.4 L 428.9 211.0 L 423.5 214.4 L 414.3 220.2 L 389.3 221.5 L 361.3 225.3 L 327.3 219.6 L 311.9 213.6 L 310.1 217.4 L 277.9 205.7 L 252.2 193.8 L 251.8 190.4 L 270.6 182.2 L 293.0 172.4 L 315.4 162.7 L 333.3 154.9 L 355.7 145.1 L 379.9 147.5 L 398.1 154.6 L 416.3 157.8 L 419.6 168.8 L 429.1 178.1 L 441.5 195.5 Z",
  },
  {
    name: "Sunset Park",
    active: false,
    path: "M 337.0 56.1 L 296.5 95.9 L 201.8 155.1 L 156.3 160.6 L 147.4 160.0 L 123.4 158.5 L 110.0 141.3 L 129.0 115.2 L 149.8 114.0 L 154.6 110.2 L 172.0 103.4 L 181.3 84.8 L 257.2 69.7 L 254.1 67.6 L 263.1 67.4 L 256.7 64.5 L 250.3 61.0 L 256.5 62.7 L 279.0 51.0 L 299.6 35.7 L 317.7 46.1 L 337.0 56.1 Z",
  },
  {
    name: "Gravesend",
    active: false,
    path: "M 412.3 347.2 L 391.0 348.8 L 344.7 361.9 L 308.3 368.9 L 298.9 364.8 L 299.3 362.3 L 301.8 362.3 L 309.5 357.1 L 297.0 358.8 L 292.4 358.8 L 290.7 358.0 L 296.1 354.6 L 295.1 351.6 L 281.3 349.5 L 291.9 339.1 L 337.9 310.2 L 362.8 297.7 L 400.9 291.2 L 436.5 288.6 L 465.7 305.7 L 459.0 335.1 L 423.6 337.6 L 412.3 347.2 Z",
  },
  {
    name: "Fort Hamilton",
    active: false,
    path: "M 137.0 283.3 L 159.2 303.5 L 171.4 307.5 L 171.6 310.2 L 164.7 309.1 L 160.9 308.4 L 134.7 306.2 L 92.7 299.1 L 76.9 290.7 L 75.2 288.8 L 73.1 287.4 L 70.8 286.5 L 68.6 286.0 L 72.5 283.7 L 85.0 280.8 L 95.3 277.5 L 110.3 268.0 L 116.9 263.3 L 127.5 256.3 L 126.1 263.1 L 135.7 283.1 L 137.0 283.3 Z",
  },
];

const ServiceAreaMap = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>("Dyker Heights");

  const getCentroid = (path: string) => {
    const coords = path
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
    return { x: cx / count, y: cy / count };
  };

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-foreground text-primary-foreground">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Map */}
        <div className="relative">
          <svg
            viewBox="10 20 480 370"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {areas.map((area) => (
              <g key={area.name}>
                <path
                  d={area.path}
                  fill={
                    selectedArea === area.name
                      ? "hsl(80, 55%, 50%)"
                      : hoveredArea === area.name
                      ? area.active
                        ? "hsl(80, 40%, 40%)"
                        : "hsl(220, 15%, 35%)"
                      : area.active
                      ? "hsl(80, 35%, 32%)"
                      : "hsl(220, 12%, 25%)"
                  }
                  stroke="hsl(220, 15%, 18%)"
                  strokeWidth="1.5"
                  className="cursor-pointer transition-colors duration-200"
                  onMouseEnter={() => setHoveredArea(area.name)}
                  onMouseLeave={() => setHoveredArea(null)}
                  onClick={() => setSelectedArea(area.name)}
                />
              </g>
            ))}
            {/* Labels */}
            {areas.map((area) => {
              const { x, y } = getCentroid(area.path);
              return (
                <text
                  key={`label-${area.name}`}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="pointer-events-none select-none"
                  fill="white"
                  fontSize="9"
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
            Our Service <span className="font-accent">Areas</span>
          </h2>
          <p className="text-sm font-body opacity-70 mb-8">
            Serving Brooklyn, NY — Dyker Heights and surrounding neighborhoods
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full" style={{ background: "hsl(80, 35%, 32%)" }} />
              <span className="font-body text-sm">Active Service Areas</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full" style={{ background: "hsl(220, 12%, 25%)" }} />
              <span className="font-body text-sm">Nearby Areas</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full" style={{ background: "hsl(80, 55%, 50%)" }} />
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
