<script lang="ts">
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp",
      period: "2020 - Present",
      description: "Led development of cloud-native applications using modern technologies. Mentored junior developers and implemented best practices."
    },
    {
      title: "Software Engineer",
      company: "Innovation Labs",
      period: "2018 - 2020",
      description: "Developed and maintained full-stack applications. Collaborated with cross-functional teams to deliver high-quality solutions."
    }
  ];
</script>

<section class="mb-12 animate-fade-in">
  <h2 class="section-title">Experience</h2>
  {#each experiences as exp}
    <div class="card hover:shadow-lg">
      <h3 class="text-xl font-semibold">{exp.title}</h3>
      <p class="text-gray-600 dark:text-gray-400">{exp.company} | {exp.period}</p>
      <p class="mt-2">{exp.description}</p>
    </div>
  {/each}
</section>