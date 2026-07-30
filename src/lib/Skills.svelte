<script lang="ts">
  import { portfolioData } from "../data/portfolio";
  import { reveal } from "./actions/reveal";
</script>

<section id="skills" class="mb-12" aria-labelledby="skills-heading" use:reveal>
  <h2 id="skills-heading" class="section-title">Skills</h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each portfolioData.skills as group}
      <article class="card mb-0">
        <h3 class="text-lg font-semibold text-indigo-900 dark:text-indigo-200 mb-1">
          {group.category}
        </h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">
          {group.focus}
        </p>
        <ul class="space-y-3">
          {#each group.items as skill}
            <li>
              <p class="text-sm font-medium text-slate-900 dark:text-slate-100">{skill.name}</p>
              <p class="text-xs text-slate-500 dark:text-slate-400">{skill.detail}</p>
            </li>
          {/each}
        </ul>
      </article>
    {/each}
  </div>
</section>
