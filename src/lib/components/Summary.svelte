<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import { User } from 'lucide-svelte';
  
  export let data: string[];
</script>

<Section title="About Me" id="about">
  <div class="space-y-4 text-lg text-medium-text leading-relaxed">
    {#each data as point}
      <p class="flex">
        <User size={20} class="text-primary flex-shrink-0 mr-3 mt-1.5" />
        <span>{point}</span>
      </p>
    {/each}
  </div>
</Section>