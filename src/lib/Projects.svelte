<script lang="ts">
  import { portfolioData } from "../data/portfolio";
  import { reveal } from "./actions/reveal";
</script>

<section
  id="projects"
  class="mb-12"
  aria-labelledby="projects-heading"
  use:reveal
>
  <h2 id="projects-heading" class="section-title">Projects</h2>
  <p class="text-slate-600 dark:text-slate-400 mb-6 -mt-2">
    Selected work showing product scope, role, and technical contribution.
  </p>
  {#each portfolioData.projects as project}
    <article class="card hover:shadow-lg">
      <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 class="text-xl font-semibold text-indigo-900 dark:text-indigo-200">
          {project.title}
        </h3>
        <p class="text-sm font-medium text-emerald-700 dark:text-emerald-400">
          {project.role}
        </p>
      </div>
      <p class="mt-2 text-slate-700 dark:text-slate-300">{project.description}</p>
      <p class="mt-2 text-sm md:text-base text-slate-600 dark:text-slate-400">
        <span class="font-medium text-slate-800 dark:text-slate-200">Contribution:</span>
        {project.impact}
      </p>
      <ul class="flex flex-wrap gap-2 mt-4" aria-label="Technologies used in {project.title}">
        {#each project.technologies as tech}
          <li class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm list-none">
            {tech}
          </li>
        {/each}
      </ul>
      {#if project.link}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block mt-4 text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          View {project.title}
          <span aria-hidden="true"> →</span>
        </a>
      {/if}
    </article>
  {/each}
</section>
