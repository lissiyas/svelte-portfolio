<script lang="ts">
  import { profile } from '$lib/data.ts';
  import { Mail, Phone, MapPin, Menu, X } from 'lucide-svelte';

  let isMobileMenuOpen = false;

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Publications', href: '#publications' }
  ];
</script>

<header class="bg-primary text-white shadow-md sticky top-0 z-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="hidden md:flex justify-end items-center py-2 border-b border-blue-400 border-opacity-30 text-sm">
      <a href="mailto:{profile.contact.email}" class="flex items-center hover:text-gray-200 transition-colors mr-6">
        <Mail size={16} class="mr-2" />
        {profile.contact.email}
      </a>
      <a href="tel:{profile.contact.phone}" class="flex items-center hover:text-gray-200 transition-colors mr-6">
        <Phone size={16} class="mr-2" />
        {profile.contact.phone}
      </a>
      <div class="flex items-center text-gray-200">
        <MapPin size={16} class="mr-2" />
        {profile.contact.location}
      </div>
    </div>

    <nav class="flex items-center justify-between h-16">
      <div class="flex-shrink-0">
        <a href="/" class="text-2xl font-bold hover:opacity-90 transition-opacity">
          {profile.name}
        </a>
        <p class="text-sm font-light text-gray-200">{profile.title}</p>
      </div>

      <div class="hidden md:flex items-center space-x-6">
        {#each navLinks as link}
          <a
            href={link.href}
            class="font-medium text-gray-200 hover:text-white transition-colors pb-1 border-b-2 border-transparent hover:border-white"
          >
            {link.name}
          </a>
        {/each}
      </div>

      <div class="md:hidden">
        <button
          on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-expanded={isMobileMenuOpen}
        >
          <span class="sr-only">Open main menu</span>
          {#if isMobileMenuOpen}
            <X size={24} />
          {:else}
            <Menu size={24} />
          {/if}
        </button>
      </div>
    </nav>
  </div>

  {#if isMobileMenuOpen}
    <div class="md:hidden bg-primary bg-opacity-95 backdrop-blur-sm" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {#each navLinks as link}
          <a
            href={link.href}
            on:click={() => isMobileMenuOpen = false}
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-secondary transition-all"
          >
            {link.name}
          </a>
        {/each}
      </div>
      <div class="pt-4 pb-3 border-t border-blue-400 border-opacity-30 space-y-3 px-5">
        <a href="mailto:{profile.contact.email}" class="flex items-center text-gray-200 hover:text-white">
          <Mail size={16} class="mr-3" />
          {profile.contact.email}
        </a>
        <a href="tel:{profile.contact.phone}" class="flex items-center text-gray-200 hover:text-white">
          <Phone size={16} class="mr-3" />
          {profile.contact.phone}
        </a>
        <div class="flex items-center text-gray-200">
          <MapPin size={16} class="mr-3" />
          {profile.contact.location}
        </div>
      </div>
    </div>
  {/if}
</header>