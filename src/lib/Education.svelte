<script lang="ts">
  import { portfolioData } from "../data/portfolio";
</script>

<section id="education" class="mb-12 animate-fade-in">
  <h2 class="section-title">Education</h2>
  {#each portfolioData.education as edu}
    <div class="card hover:shadow-lg">
      <h3 class="text-xl font-semibold">{edu.degree}</h3>
      <p class="text-gray-600 dark:text-gray-400">{edu.school} | {edu.period}</p>
      <p class="mt-2">{edu.description}</p>
    </div>
  {/each}
</section>