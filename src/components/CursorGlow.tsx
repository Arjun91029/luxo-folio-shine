import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      {/* Large soft gold glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed z-[9999] h-[500px] w-[500px] rounded-full transition-opacity duration-300 mix-blend-screen"
        style={{
          left: pos.x - 250,
          top: pos.y - 250,
          opacity: visible ? 1 : 0,
          background:
            "radial-gradient(circle, hsl(var(--gold) / 0.18) 0%, hsl(var(--gold) / 0.08) 30%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Crisp gold dot at cursor */}
      <div
        aria-hidden
        className="pointer-events-none fixed z-[9999] h-3 w-3 rounded-full transition-opacity duration-200"
        style={{
          left: pos.x - 6,
          top: pos.y - 6,
          opacity: visible ? 1 : 0,
          background: "var(--gradient-gold)",
          boxShadow: "0 0 20px hsl(var(--gold) / 0.8)",
        }}
      />
    </>
  );
};

export default CursorGlow;
