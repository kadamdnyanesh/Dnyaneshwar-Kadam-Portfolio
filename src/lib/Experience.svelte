<script lang="ts">
  import { calculateYearsAndMonths } from "../utils/index";
  import { portfolioData } from "../data/portfolio";

  // Calculate total experience duration
  const totalExperience = calculateYearsAndMonths("2018-12-08");

  // Group experiences by company
  const groupedExperiences = portfolioData.experiences.reduce((acc, exp) => {
    if (!acc[exp.company]) {
      acc[exp.company] = {
        company: exp.company,
        experiences: [],
        location: exp.location,
        totalDuration: exp.period?.includes("Present")
          ? `${calculateYearsAndMonths(exp.duration)?.years} yrs ${calculateYearsAndMonths("2023-07-01")?.months} mos`
          : exp.duration
      };
    }
    acc[exp.company].experiences.push(exp);
    return acc;
  }, {} as Record<string, {
    company: string;
    experiences: typeof portfolioData.experiences;
    location: string;
    totalDuration: string;
  }>);

  // Convert to array and sort by most recent experience
  const sortedCompanies = Object.values(groupedExperiences).sort((a, b) => {
    const aDate = new Date(a.experiences[0].period.split(' - ')[0]);
    const bDate = new Date(b.experiences[0].period.split(' - ')[0]);
    return bDate.getTime() - aDate.getTime();
  });
</script>

<section id="experience" class="mb-12 animate-fade-in">
  <div class="flex items-center mb-6">
    <h2 class="section-title !mb-0 mr-1">Experience</h2>
    <span class="text-sm md:text-base">
      ({totalExperience?.years} yrs {totalExperience?.months} mos)
    </span>
  </div>

  {#each sortedCompanies as companyGroup, i}
    <div class="card hover:shadow-lg mb-8 last:mb-0">
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
        <div>
          <h3 class="text-lg md:text-xl font-semibold text-indigo-900 dark:text-indigo-200">
            {companyGroup.company}
          </h3>
          <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">{companyGroup.location}</p>
        </div>
        <span class="text-sm text-gray-500 dark:text-gray-400">
          {companyGroup.totalDuration}
        </span>
      </div>

      <div class="relative">
        <!-- Vertical line inside card -->
        <div class="absolute left-[7px] md:left-[23px] top-2 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

        {#each companyGroup.experiences as exp, j}
          <div class="relative pl-6 md:pl-12 mb-6 last:mb-0">
            <!-- Timeline dot inside card -->
            <div class="absolute left-2 md:left-6 mt-2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-400 dark:bg-indigo-300 border-4 border-white dark:border-gray-800"></div>

            <div class="mb-4 last:mb-0">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <h4 class="text-base md:text-lg font-medium">{exp.title}</h4>
                <span class="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
              </div>
              <p class="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400">{exp.description}</p>
              <div class="flex flex-wrap gap-2 mt-3">
                {#each exp.skills as skill}
                  <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs md:text-sm">
                    {skill}
                  </span>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>
