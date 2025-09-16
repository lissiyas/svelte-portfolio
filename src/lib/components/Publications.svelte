<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import { Book, Link } from 'lucide-svelte';
  import type { Publication } from '$lib/data.ts';
  
  export let data: Publication[];
</script>

<Section title="Publications" id="publications">
  <div class="space-y-6">
    {#each data as pub}
      <div class="section-card p-6">
        <div class="flex items-start">
          <Book class="text-primary flex-shrink-0 mr-4 mt-1" size={20} />
          <div>
            <h3 class="text-lg font-semibold text-dark-text">{pub.title}</h3>
            <p class="text-medium-text text-sm mt-1">{pub.details}</p>
            {#if pub.link}
              <a 
                href={pub.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center text-primary hover:text-secondary font-medium text-sm mt-2 transition-colors"
              >
                <Link size={14} class="mr-1.5" />
                View Publication
              </a>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</Section>