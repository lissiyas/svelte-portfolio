<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import { GraduationCap, MapPin, Calendar } from 'lucide-svelte';
  import type { Degree } from '$lib/data.ts';

  export let data: Degree[];
</script>

<Section title="Education" id="education">
  <div class="space-y-8">
    {#each data as degree}
      <div class="section-card p-6">
        <header>
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
            <h3 class="text-xl font-bold text-primary">{degree.degree}</h3>
            <div class="flex items-center text-sm font-medium text-medium-text sm:ml-4 mt-1 sm:mt-0">
              <Calendar size={14} class="mr-1.5" />
              {degree.dates}
            </div>
          </div>
          <div class="flex flex-col sm:flex-row sm:items-center text-medium-text text-md">
            <div class="flex items-center mr-6">
              <GraduationCap size={16} class="mr-2 text-gray-500" />
              {degree.institution}
            </div>
            <div class="flex items-center mt-1 sm:mt-0">
              <MapPin size={16} class="mr-2 text-gray-500" />
              {degree.location}
            </div>
          </div>
        </header>
      </div>
    {/each}
  </div>
</Section>