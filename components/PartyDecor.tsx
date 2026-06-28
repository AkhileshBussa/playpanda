// Shared festive brand devices (bunting + scalloped edge) used on the
// birthday, schools and franchise pages. Brand-palette colors only.

export function Bunting() {
  const flags = Array.from({ length: 16 });
  const colors = ["#FFBB01", "#009D72", "#01C9C7", "#FF7EBE", "#8061BE"];
  return (
    <div className="flex w-full" aria-hidden>
      {flags.map((_, i) => (
        <div
          key={i}
          className="flex-1 h-5"
          style={{
            backgroundColor: colors[i % colors.length],
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          }}
        />
      ))}
    </div>
  );
}

export function ScallopBottom({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`block w-full h-6 ${className}`}
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0 40 V20 C 50 40, 100 40, 150 20 C 200 0, 250 0, 300 20 C 350 40, 400 40, 450 20 C 500 0, 550 0, 600 20 C 650 40, 700 40, 750 20 C 800 0, 850 0, 900 20 C 950 40, 1000 40, 1050 20 C 1100 0, 1150 0, 1200 20 V40 Z"
        fill="currentColor"
      />
    </svg>
  );
}
