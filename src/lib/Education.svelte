<script lang="ts">
  import { portfolioData } from "../data/portfolio";
  import { toPeriodDateTime } from "../utils/index";
  import { reveal } from "./actions/reveal";
</script>

<section
  id="education"
  class="mb-12"
  aria-labelledby="education-heading"
  use:reveal
>
  <h2 id="education-heading" class="section-title">Education</h2>
  {#each portfolioData.education as edu}
    <article class="card hover:shadow-lg">
      <h3 class="text-xl font-semibold text-indigo-900 dark:text-indigo-200">{edu.degree}</h3>
      <p class="text-gray-600 dark:text-gray-400 mt-1">
        <span>{edu.school}</span>
        <span aria-hidden="true"> · </span>
        <time datetime={toPeriodDateTime(edu.period)}>{edu.period}</time>
      </p>
      <p class="mt-2 text-slate-700 dark:text-slate-300">{edu.description}</p>
    </article>
  {/each}
</section>
