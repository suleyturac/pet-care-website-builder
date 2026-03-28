import { useState } from "react";

interface Area {
  name: string;
  path: string;
  active: boolean;
}

const areas: Area[] = [
  {
    name: "Coney Island",
    active: false,
    path: "M 223.8 361.3 L 220.9 366.6 L 216.4 368.1 L 212.0 365.5 L 206.8 365.8 L 201.3 364.9 L 188.5 361.1 L 181.3 360.0 L 180.1 355.9 L 167.9 357.4 L 153.4 354.5 L 147.2 354.0 L 140.0 359.6 L 129.6 364.5 L 123.9 369.4 L 125.2 377.3 L 134.3 386.4 L 153.4 393.5 L 164.7 398.2 L 167.0 405.0 L 176.4 404.4 L 198.4 404.8 L 227.0 400.5 L 264.1 396.5 L 291.1 393.5 L 298.0 350.0 L 297.5 346.1 L 285.4 349.1 L 269.3 352.3 L 261.9 352.3 L 247.3 351.3 L 239.6 349.8 L 234.9 351.3 L 223.8 361.3 Z",
  },
  {
    name: "Gravesend",
    active: true,
    path: "M 222.0 364.1 L 226.1 358.7 L 233.2 352.3 L 239.0 349.4 L 246.7 351.1 L 262.6 352.0 L 274.2 351.3 L 287.9 348.0 L 297.8 347.1 L 300.5 335.9 L 306.8 305.8 L 295.0 236.0 L 217.9 246.2 L 198.1 268.4 L 177.0 291.9 L 165.7 302.1 L 168.7 308.2 L 176.7 324.1 L 175.9 337.8 L 171.2 346.3 L 172.8 350.4 L 182.4 352.0 L 222.0 364.1 Z",
  },
  {
    name: "Bath Beach",
    active: true,
    path: "M 165.7 301.9 L 177.2 291.6 L 186.3 281.2 L 197.5 268.9 L 129.2 222.4 L 110.1 243.7 L 114.8 247.1 L 104.3 258.0 L 98.7 263.0 L 102.0 266.4 L 105.2 266.6 L 108.7 266.3 L 112.8 266.4 L 121.5 268.6 L 127.6 270.6 L 132.7 273.9 L 140.8 278.9 L 147.3 283.9 L 154.3 288.5 L 159.9 294.1 L 164.6 299.3 L 165.7 301.9 Z",
  },
  {
    name: "Fort Hamilton",
    active: true,
    path: "M 109.8 243.9 L 106.1 247.1 L 101.1 247.0 L 93.7 244.2 L 84.8 238.4 L 80.2 234.1 L 84.3 223.3 L 89.0 209.6 L 93.5 196.9 L 84.5 191.0 L 66.4 178.7 L 25.8 167.5 L 15.7 164.7 L 15.0 168.9 L 15.5 183.0 L 16.8 191.4 L 19.9 206.5 L 23.3 216.3 L 31.1 225.2 L 35.0 231.3 L 35.0 233.1 L 37.9 237.7 L 42.4 241.4 L 46.9 247.8 L 56.9 255.1 L 63.9 257.3 L 78.9 259.7 L 91.0 261.1 L 98.6 263.0 L 114.6 247.1 L 109.8 243.9 Z",
  },
  {
    name: "Bensonhurst",
    active: true,
    path: "M 275.0 238.7 L 176.5 170.7 L 129.3 222.3 L 197.8 268.7 L 218.0 246.1 L 275.0 238.7 Z",
  },
  {
    name: "Dyker Heights",
    active: true,
    path: "M 176.5 170.7 L 149.1 151.9 L 118.2 130.6 L 116.6 134.4 L 112.7 145.0 L 102.6 172.5 L 100.4 178.5 L 92.6 199.1 L 88.7 211.6 L 85.0 221.6 L 80.4 232.7 L 80.7 234.8 L 85.6 239.2 L 92.3 243.4 L 99.8 246.6 L 106.3 247.0 L 109.7 243.8 L 129.4 222.0 L 176.5 170.7 Z",
  },
  {
    name: "Bay Ridge",
    active: true,
    path: "M 93.5 196.8 L 102.9 171.6 L 110.9 149.7 L 118.2 130.6 L 104.0 121.4 L 77.3 105.0 L 63.3 98.3 L 45.0 94.3 L 37.8 102.6 L 32.4 113.3 L 24.8 131.4 L 19.0 145.1 L 16.1 162.4 L 15.6 164.8 L 24.6 167.0 L 36.0 170.4 L 47.8 173.6 L 60.5 176.9 L 66.9 178.6 L 74.6 184.5 L 86.5 192.5 L 93.5 196.8 Z",
  },
  {
    name: "Borough Park",
    active: false,
    path: "M 126.4 135.9 L 151.3 153.4 L 178.3 171.6 L 196.6 184.9 L 219.9 201.0 L 244.2 217.4 L 272.0 235.8 L 275.5 238.2 L 273.6 225.8 L 254.6 112.9 L 250.5 110.6 L 211.2 84.0 L 188.7 68.3 L 126.4 135.9 Z",
  },
  {
    name: "Sunset Park",
    active: false,
    path: "M 45.0 94.3 L 55.8 96.3 L 67.0 100.1 L 76.1 104.0 L 83.0 108.3 L 93.5 115.1 L 111.0 125.8 L 124.6 134.7 L 126.2 136.3 L 141.8 119.3 L 157.2 102.4 L 178.7 79.0 L 188.5 68.5 L 180.1 62.5 L 182.4 59.9 L 129.6 23.2 L 114.4 15.0 L 109.1 19.2 L 45.0 94.3 Z",
  },
  {
    name: "Midwood",
    active: false,
    path: "M 255.0 113.2 L 264.6 168.5 L 270.4 204.9 L 275.5 237.1 L 276.5 239.2 L 295.5 235.8 L 386.1 225.3 L 370.5 132.7 L 341.4 103.1 L 333.9 94.0 L 332.9 87.3 L 294.3 107.9 L 255.0 113.2 Z",
  },
  {
    name: "Sheepshead Bay",
    active: false,
    path: "M 295.3 235.8 L 301.6 273.9 L 307.2 305.8 L 298.0 347.0 L 296.5 361.5 L 349.0 349.5 L 372.4 347.4 L 388.0 347.0 L 395.5 346.8 L 396.3 348.4 L 432.9 349.9 L 441.7 347.4 L 460.8 347.9 L 458.5 343.4 L 448.6 337.2 L 445.3 332.5 L 439.9 332.4 L 434.5 333.3 L 433.8 330.8 L 440.8 330.0 L 434.1 320.7 L 433.4 312.9 L 428.9 299.4 L 431.1 298.3 L 434.7 301.1 L 439.5 306.2 L 437.2 314.5 L 438.1 321.9 L 443.5 323.2 L 448.4 327.1 L 457.0 337.5 L 461.2 339.7 L 467.7 337.3 L 471.3 338.6 L 477.4 336.9 L 485.0 335.0 L 387.6 236.4 L 386.0 225.4 L 295.3 235.8 Z",
  },
  {
    name: "Brighton Beach",
    active: false,
    path: "M 291.2 393.2 L 297.5 391.8 L 308.7 390.3 L 322.5 389.5 L 329.7 389.4 L 334.6 388.6 L 340.7 388.0 L 349.0 387.5 L 354.4 387.6 L 347.7 349.7 L 296.1 361.5 L 291.2 393.2 Z",
  },
  {
    name: "Manhattan Beach",
    active: false,
    path: "M 347.7 349.8 L 354.6 387.7 L 356.7 386.6 L 361.3 386.1 L 377.8 383.8 L 378.8 383.5 L 378.9 382.1 L 381.2 382.1 L 383.3 382.4 L 383.8 381.6 L 395.0 382.4 L 413.0 382.0 L 433.5 381.2 L 435.0 378.9 L 429.3 357.2 L 428.3 357.4 L 423.8 357.7 L 399.5 358.3 L 390.9 358.4 L 364.4 352.7 L 350.9 354.1 L 349.9 349.5 L 347.7 349.8 Z",
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
            viewBox="0 0 500 420"
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
