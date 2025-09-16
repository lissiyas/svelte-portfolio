<script lang="ts">
  // Import the data
  import { profile, summary, skills, experience, education, certifications, publications } from '$lib/data.ts';
  import type { SkillCategory, Job, Degree, Certification, Publication } from '$lib/data.ts';

  // Import the section components
  import Section from '$lib/components/Section.svelte';
  import Summary from '$lib/components/Summary.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Education from '$lib/components/Education.svelte';
  import Certifications from '$lib/components/Certifications.svelte';
  import Publications from '$lib/components/Publications.svelte';

  // Hero section component
  import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
  <title>{profile.name} - {profile.title}</title>
  <meta name="description" content="Portfolio website for {profile.name}, a {profile.title}.">
</svelte:head>

<Hero />

<Summary data={summary} />

<Skills data={skills} />

<Experience data={experience} />

<Education data={education} />

<Certifications data={certifications} />

<Publications data={publications} />