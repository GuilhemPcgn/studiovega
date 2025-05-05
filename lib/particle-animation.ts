export const particleAnimation = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

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
    "rgba(139, 92, 246, 0.5)", // Purple
    "rgba(167, 139, 250, 0.5)", // Violet
    "rgba(186, 230, 253, 0.3)", // Light blue
    "rgba(255, 255, 255, 0.3)",  // White
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
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 150)})`;
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