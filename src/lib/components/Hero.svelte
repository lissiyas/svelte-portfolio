<script lang="ts">
  import { profile } from '$lib/data.ts';
  import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';
  import { Github, Linkedin } from 'lucide-svelte';
</script>

<section
  id="home"
  class="relative min-h-screen flex flex-col justify-center items-center text-center p-4"
>
  <AnimatedBackground />

  <div class="z-10">
    <h1 class="text-4xl md:text-6xl font-extrabold text-dark-text leading-tight">
      Hi, I'm <span class="text-primary">{profile.name}</span>
    </h1>
    <p class="mt-4 text-xl md:text-2xl text-medium-text max-w-3xl mx-auto">
      I'm a {profile.title} passionate about leading teams, optimizing resources, and delivering
      high-quality projects.
    </p>
    <div class="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <a
        href="#experience"
        class="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-secondary transition-all transform hover:-translate-y-1"
      >
        View My Work
      </a>
      <a
        href="mailto:{profile.contact.email}"
        class="inline-block bg-gray-200 text-dark-text font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-300 transition-all transform hover:-translate-y-1"
      >
        Get in Touch
      </a>
    </div>

    <div class="mt-8 flex justify-center gap-6">
      <a
        href={profile.social.github}
        target="_blank"
        rel="noopener noreferrer"
        class="text-medium-text hover:text-primary transition-colors"
        aria-label="GitHub"
      >
        <Github size={28} />
      </a>
      <a
        href={profile.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        class="text-medium-text hover:text-primary transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={28} />
      </a>
    </div>
  </div>
</section>