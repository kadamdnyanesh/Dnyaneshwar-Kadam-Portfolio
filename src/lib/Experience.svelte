<script lang="ts">
  import { calculateYearsAndMonths } from "../utils/index";
  import { portfolioData } from "../data/portfolio";

  // Calculate total experience duration
  const totalExperience = calculateYearsAndMonths("2018-12-08");
</script>

<section id="experience" class="mb-12 animate-fade-in">
  <div class="flex items-center mb-6">
    <h2 class="section-title !mb-0 mr-1">Experience</h2>
    <span>
      ({totalExperience?.years} yrs {totalExperience?.months} mos)
    </span>
  </div>

  {#each portfolioData.experiences as exp}
    <div
      class="card hover:shadow-lg mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        {exp.title}
      </h3>
      <p class="text-gray-600 dark:text-gray-400">
        {exp.company} | {exp.period} · {exp.period?.includes("Present")
          ? `${calculateYearsAndMonths("2023-07-01")?.years} yrs ${calculateYearsAndMonths("2023-07-01")?.months} mos`
          : exp.duration}
      </p>
      <p class="text-gray-600 dark:text-gray-400 mt-1">
        {exp.location}
      </p>
      <p class="mt-2 text-gray-700 dark:text-gray-300">
        {exp.description}
      </p>
      {#if exp.skills}
        <div class="mt-3">
          <span class="text-sm font-medium text-gray-600 dark:text-gray-400"
            >Skills:</span
          >
          <div class="flex flex-wrap gap-2 mt-1">
            {#each exp.skills as skill}
              <span
                class="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-sm"
              >
                {skill}
              </span>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  {/each}
</section>
