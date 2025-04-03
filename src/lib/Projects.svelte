<script lang="ts">
  import { portfolioData } from "../data/portfolio";
</script>

<section id="projects" class="mb-12 animate-fade-in">
  <h2 class="section-title">Projects</h2>
  {#each portfolioData.projects as project}
    <div class="card hover:shadow-lg">
      <h3 class="text-xl font-semibold">{project.title}</h3>
      <p class="mt-2">{project.description}</p>
      <div class="flex flex-wrap gap-2 mt-4">
        {#each project.technologies as tech}
          <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
            {tech}
          </span>
        {/each}
      </div>
      <!-- <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block mt-4 text-indigo-600 dark:text-indigo-400 hover:underline"
      >
        View Project →
      </a> -->
    </div>
  {/each}
</section>
