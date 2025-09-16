<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import { Award } from 'lucide-svelte';
  import type { Certification } from '$lib/data.ts';
  
  export let data: Certification[];
</script>

<Section title="Certifications" id="certifications">
  <div class="space-y-6">
    {#each data as cert}
      <div class="section-card p-6 flex items-center">
        <div class="flex-shrink-0">
          <Award class="text-primary" size={36} />
        </div>
        <div class="ml-4">
          <h3 class="text-lg font-semibold text-dark-text">{cert.name}</h3>
          <p class="text-medium-text">{cert.issuer}</p>
        </div>
      </div>
    {/each}
  </div>
</Section>