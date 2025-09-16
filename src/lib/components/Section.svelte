<script lang="ts">
  import { ChevronsRight } from 'lucide-svelte';

  export let title: string;
  export let id: string;
</script>

<section {id} class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
  <div class="max-w-4xl mx-auto">
    <div class="flex items-center mb-6">
      <ChevronsRight class="text-primary mr-2" size={28} />
      <h2 class="text-3xl font-bold text-dark-text">
        {title}
      </h2>
    </div>
    
    <div class="pl-0 md:pl-10">
      <slot />
    </div>
  </div>
</section>