<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import { Building, MapPin, Calendar } from 'lucide-svelte';
  import type { Job } from '$lib/data.ts';

  export let data: Job[];
</script>

<Section title="Work History" id="experience">
  <div class="relative pl-6 border-l-2 border-primary border-opacity-30 space-y-12">
    {#each data as job}
      <div class="relative">
        <div class="absolute -left-[37px] top-1.5 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-gray-800"></div>
        <article>
        <header>
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
            <h3 class="text-2xl font-bold text-primary">{job.role}</h3>
            <div class="flex items-center text-sm font-medium text-medium-text sm:ml-4 mt-1 sm:mt-0">
              <Calendar size={14} class="mr-1.5" />
              {job.dates}
            </div>
          </div>
          <div class="flex flex-col sm:flex-row sm:items-center text-medium-text text-md font-semibold">
            <div class="flex items-center mr-6">
              <Building size={16} class="mr-2 text-gray-500" />
              {job.company}
            </div>
            <div class="flex items-center mt-1 sm:mt-0">
              <MapPin size={16} class="mr-2 text-gray-500" />
              {job.location}
            </div>
          </div>
        </header>
        
        <ul class="mt-4 space-y-3 list-disc list-outside ml-5 text-medium-text text-base leading-relaxed">
          {#each job.responsibilities as point}
            <li>{point}</li>
          {/each}
        </ul>
        </article>
      </div>
    {/each}
  </div>
</Section>