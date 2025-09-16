<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;

  // --- Configuration ---
  // You can tweak these values to change the look and feel
  const PARTICLE_COUNT = 100;
  const PARTICLE_SPEED = 0.4;
  const CONNECTION_DISTANCE = 120;
  // Using a color similar to your site's primary theme
  const PARTICLE_COLOR = 'rgba(113, 99, 224, 0.5)';
  const LINE_COLOR = 'rgba(113, 99, 224, 0.2)';

  // --- Particle Class ---
  // Moved outside onMount for better performance.
  class Particle {
    x: number;
    y: number;
    dx: number;
    dy: number;
    radius: number;

    constructor(x: number, y: number, dx: number, dy: number, radius: number) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = PARTICLE_COLOR;
      ctx.fill();
    }
  }

  onMount(() => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    // --- Particle Update Logic ---
    // Now a standalone function that takes a particle and the context.
    function updateParticle(p: Particle) {
      if (!ctx) return;
      if (p.x + p.radius > canvas.width || p.x - p.radius < 0) {
        p.dx = -p.dx;
      }
      if (p.y + p.radius > canvas.height || p.y - p.radius < 0) {
        p.dy = -p.dy;
      }
      p.x += p.dx;
      p.y += p.dy;
      p.draw(ctx);
    }

    function init() {
      // Set canvas to fill the parent container
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const radius = Math.random() * 2 + 1;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const dx = (Math.random() - 0.5) * PARTICLE_SPEED;
        const dy = (Math.random() - 0.5) * PARTICLE_SPEED;
        particles.push(new Particle(x, y, dx, dy, radius));
      }
    }

    function connect() {
      if (!ctx) return;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance = Math.sqrt(
            (particles[a].x - particles[b].x) ** 2 + (particles[a].y - particles[b].y) ** 2
          );

          if (distance < CONNECTION_DISTANCE) {
            ctx.strokeStyle = LINE_COLOR;
            ctx.lineWidth = (CONNECTION_DISTANCE - distance) / CONNECTION_DISTANCE; // Make lines thinner as they get longer
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(updateParticle);
      connect();
    }

    // Use ResizeObserver for better performance on container resize
    const resizeObserver = new ResizeObserver(init);
    resizeObserver.observe(canvas);

    init();
    animate();

    return () => {
      resizeObserver.unobserve(canvas);
      cancelAnimationFrame(animationFrameId);
    };
  });
</script>

<canvas bind:this={canvas} class="absolute top-0 left-0 w-full h-full -z-10"></canvas>
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    function init() {
      // Set canvas to fill the parent container
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const radius = Math.random() * 2 + 1;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const dx = (Math.random() - 0.5) * PARTICLE_SPEED;
        const dy = (Math.random() - 0.5) * PARTICLE_SPEED;
        particles.push(new Particle(x, y, dx, dy, radius));
      }
    }

    function connect() {
      if (!ctx) return;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance = Math.sqrt(
            (particles[a].x - particles[b].x) ** 2 + (particles[a].y - particles[b].y) ** 2
          );

          if (distance < CONNECTION_DISTANCE) {
            ctx.strokeStyle = LINE_COLOR;
            ctx.lineWidth = (CONNECTION_DISTANCE - distance) / CONNECTION_DISTANCE; // Make lines thinner as they get longer
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => particle.update());
      connect();
    }

    // Use ResizeObserver for better performance on container resize
    const resizeObserver = new ResizeObserver(init);
    resizeObserver.observe(canvas);

    init();
    animate();

    return () => {
      resizeObserver.unobserve(canvas);
      cancelAnimationFrame(animationFrameId);
    };
  });
</script>

<canvas bind:this={canvas} class="absolute top-0 left-0 w-full h-full -z-10"></canvas>