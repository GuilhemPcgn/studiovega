import { brand } from "./brand-colors";

export const particleAnimation = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  // Les couleurs viennent des tokens CSS : aucune valeur codée en dur ici.
  const token = (name: string, fallback: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;

  const hexToRgb = (hex: string) => {
    const h = hex.replace("#", "");
    return [
      parseInt(h.slice(0, 2), 16),
      parseInt(h.slice(2, 4), 16),
      parseInt(h.slice(4, 6), 16),
    ];
  };

  const rgba = (hex: string, alpha: number) => {
    const [r, g, b] = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const accentOnDark = token("--accent-on-dark", brand.accentOnDark);
  const accentSoft = token("--accent-soft", brand.accentSoft);
  const dimOnDark = token("--text-secondary-on-dark", brand.textSecondaryOnDark);

  // Set canvas size
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // Particle properties
  interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
  }

  // Create particles
  const particles: Particle[] = [];
  const particleCount = Math.min(100, Math.floor(canvas.width * canvas.height / 10000));
  
  const colors = [
    rgba(accentOnDark, 0.55),
    rgba(accentSoft, 0.45),
    rgba(dimOnDark, 0.3),
    "rgba(255, 255, 255, 0.28)",
  ];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }

  // Mouse interaction
  let mouseX: number | undefined;
  let mouseY: number | undefined;

  canvas.addEventListener("mousemove", (e) => {
    mouseX = e.x;
    mouseY = e.y;
  });

  canvas.addEventListener("mouseout", () => {
    mouseX = undefined;
    mouseY = undefined;
  });

  // Animation loop
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
      // Move particles
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Wrap around edges
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.y > canvas.height) particle.y = 0;
      if (particle.y < 0) particle.y = canvas.height;

      // Mouse interaction
      if (mouseX !== undefined && mouseY !== undefined) {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 500;
          
          particle.speedX -= Math.cos(angle) * force;
          particle.speedY -= Math.sin(angle) * force;
        }
      }

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      // Connect particles
      connectParticles(particle, particles.slice(index + 1));
    });

    requestAnimationFrame(animate);
  };

  // Connect particles with lines
  const connectParticles = (particle: Particle, otherParticles: Particle[]) => {
    otherParticles.forEach((otherParticle) => {
      const dx = particle.x - otherParticle.x;
      const dy = particle.y - otherParticle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        ctx.beginPath();
        ctx.strokeStyle = rgba(accentOnDark, 0.22 * (1 - distance / 150));
        ctx.lineWidth = 0.5;
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(otherParticle.x, otherParticle.y);
        ctx.stroke();
      }
    });
  };

  animate();

  return () => {
    window.removeEventListener("resize", resizeCanvas);
    canvas.removeEventListener("mousemove", () => {});
    canvas.removeEventListener("mouseout", () => {});
  };
};