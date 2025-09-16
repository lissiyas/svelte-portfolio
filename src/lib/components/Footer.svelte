<script lang="ts">
  import { profile } from '$lib/data.ts';
  import { Linkedin, Github, Mail } from 'lucide-svelte';
  
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-dark-text text-gray-300 mt-16">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <div>
        <h3 class="text-xl font-semibold text-white">{profile.name}</h3>
        <p class="text-gray-400">{profile.title}</p>
      </div>
      
      <div class="flex space-x-6 mt-6 md:mt-0">
        <a href="mailto:{profile.contact.email}" aria-label="Email" class="hover:text-white transition-colors">
          <Mail size={24} />
        </a>
        {#if profile.social.linkedin}
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
        {/if}
        {#if profile.social.github}
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="hover:text-white transition-colors">
            <Github size={24} />
          </a>
        {/if}
      </div>
    </div>
    
    <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
      <p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
    </div>
  </div>
</footer>