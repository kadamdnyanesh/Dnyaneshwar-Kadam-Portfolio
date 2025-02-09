<script lang="ts">
  const education = [
    {
      degree: "Master of Engineering",
      school: "Pune University",
      period: "2015 - 2017",
      description: "Specialized in Mechanical Machine Design. Published multiple research papers and completed masters with CGPA 8.02"
    },
    {
      degree: "Bachelor of Engineering",
      school: "Pune University",
      period: "2012 - 2015",
      description: "Activities and societies: 1) Event Manager of workshop taken by IIT Delhi & IIT Guwahati. 2) Research Paper Presented in International Conference on Science And Technology. 3) Effective Student of NSS and Earn and Learn."
    }
  ];
</script>

<section id="education" class="mb-12 animate-fade-in">
  <h2 class="section-title">Education</h2>
  {#each education as edu}
    <div class="card hover:shadow-lg">
      <h3 class="text-xl font-semibold">{edu.degree}</h3>
      <p class="text-gray-600 dark:text-gray-400">{edu.school} | {edu.period}</p>
      <p class="mt-2">{edu.description}</p>
    </div>
  {/each}
</section>