<script lang="ts">
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Tech University",
      period: "2016 - 2018",
      description: "Specialized in Machine Learning and Distributed Systems. Graduated with honors."
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "State University",
      period: "2012 - 2016",
      description: "Dean's List. Led multiple academic projects and participated in coding competitions."
    }
  ];
</script>

<section class="mb-12 animate-fade-in">
  <h2 class="section-title">Education</h2>
  {#each education as edu}
    <div class="card hover:shadow-lg">
      <h3 class="text-xl font-semibold">{edu.degree}</h3>
      <p class="text-gray-600 dark:text-gray-400">{edu.school} | {edu.period}</p>
      <p class="mt-2">{edu.description}</p>
    </div>
  {/each}
</section>