import { useMemo } from "react";

function Confetti({ active }) {
  const pieces = useMemo(() => {
    if (!active) return [];

    const colors = ["#a78bfa", "#fbbf24", "#4ade80", "#38bdf8", "#f472b6"];
    return Array.from({ length: 60 }, (_, id) => ({
      id,
      left: (id * 37) % 100,
      delay: ((id * 7) % 40) / 100,
      color: colors[id % colors.length],
      size: 6 + ((id * 11) % 6),
    }));
  }, [active]);

  if (!pieces.length) return null;

  return (
    <div className="confetti-wrap" aria-hidden="true">
      {pieces.map((piece) => (
        <span
          className="confetti-piece"
          key={piece.id}
          style={{
            left: `${piece.left}%`,
            background: piece.color,
            width: piece.size,
            height: piece.size * 1.6,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Confetti;
