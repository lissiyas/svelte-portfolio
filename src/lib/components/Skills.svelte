<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import type { SkillCategory } from '$lib/data.ts';
  
  export let data: SkillCategory[];
</script>

<Section title="Technical Skills" id="skills">
  <div class="space-y-6">
    {#each data as category}
      <div>
        <h3 class="text-xl font-semibold text-dark-text mb-3">{category.category}</h3>
        <div class="flex flex-wrap gap-2">
          {#each category.items as item}
            <span
              class="bg-primary bg-opacity-10 text-primary text-sm font-medium px-4 py-1.5 rounded-full 
                     cursor-pointer transition-all duration-200 ease-in-out 
                     hover:scale-105 hover:bg-primary hover:text-white"
            >
              {item}
            </span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</Section>