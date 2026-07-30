<script lang="ts">
  import {
    CAREER_START,
    calculateYearsAndMonths,
    formatYearsAndMonths,
    getPeriodDuration,
    parsePeriodRange,
    toPeriodDateTime,
  } from "../utils/index";
  import { portfolioData } from "../data/portfolio";
  import { reveal } from "./actions/reveal";

  const totalExperience = calculateYearsAndMonths(CAREER_START);

  type CompanyGroup = {
    company: string;
    experiences: typeof portfolioData.experiences;
    location: string;
    totalDuration: string;
    sortDate: number;
  };

  function getCompanyDuration(experiences: typeof portfolioData.experiences): string {
    const ranges = experiences.map((exp) => parsePeriodRange(exp.period));
    const starts = ranges
      .map((range) => range.start)
      .filter((date): date is Date => date !== null);
    const ends = ranges
      .map((range) => range.end)
      .filter((date): date is Date => date !== null);

    if (!starts.length) return "";

    const earliestStart = new Date(Math.min(...starts.map((date) => date.getTime())));
    const latestEnd = ends.length
      ? new Date(Math.max(...ends.map((date) => date.getTime())))
      : new Date();

    const { years, months } = calculateYearsAndMonths(earliestStart, latestEnd);
    return formatYearsAndMonths(years, months);
  }

  const groupedExperiences = portfolioData.experiences.reduce(
    (acc, exp) => {
      if (!acc[exp.company]) {
        acc[exp.company] = {
          company: exp.company,
          experiences: [],
          location: exp.location,
          totalDuration: "",
          sortDate: 0,
        };
      }
      acc[exp.company].experiences.push(exp);
      return acc;
    },
    {} as Record<string, CompanyGroup>
  );

  for (const group of Object.values(groupedExperiences)) {
    group.totalDuration = getCompanyDuration(group.experiences);
    const firstStart = parsePeriodRange(group.experiences[0]?.period ?? "").start;
    group.sortDate = firstStart?.getTime() ?? 0;
  }

  const sortedCompanies = Object.values(groupedExperiences).sort(
    (a, b) => b.sortDate - a.sortDate
  );
</script>

<section
  id="experience"
  class="mb-12"
  aria-labelledby="experience-heading"
  use:reveal
>
  <div class="flex items-center mb-6">
    <h2 id="experience-heading" class="section-title !mb-0 mr-1">Experience</h2>
    <span class="text-sm md:text-base text-slate-600 dark:text-slate-400">
      ({formatYearsAndMonths(totalExperience.years, totalExperience.months)})
    </span>
  </div>

  {#each sortedCompanies as companyGroup}
    <article class="card hover:shadow-lg mb-8 last:mb-0">
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
        <div>
          <h3 class="text-lg md:text-xl font-semibold text-indigo-900 dark:text-indigo-200">
            {companyGroup.company}
          </h3>
          <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">{companyGroup.location}</p>
        </div>
        <span class="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
          {companyGroup.totalDuration}
        </span>
      </div>

      <div class="relative">
        <div class="absolute left-[7px] md:left-[23px] top-2 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true"></div>

        {#each companyGroup.experiences as exp}
          {@const roleDuration = getPeriodDuration(exp.period)}
          <div class="relative pl-6 md:pl-12 mb-6 last:mb-0">
            <div class="absolute left-2 md:left-6 mt-2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-400 dark:bg-indigo-300 border-4 border-white dark:border-gray-800" aria-hidden="true"></div>

            <div class="mb-4 last:mb-0">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <h4 class="text-base md:text-lg font-medium">{exp.title}</h4>
                <div class="text-sm text-gray-500 dark:text-gray-400 sm:text-right whitespace-nowrap">
                  <time datetime={toPeriodDateTime(exp.period)}>{exp.period}</time>
                  {#if roleDuration}
                    <span class="block text-xs text-gray-400 dark:text-gray-500">{roleDuration}</span>
                  {/if}
                </div>
              </div>
              <ul class="mt-3 space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-400 list-disc pl-5">
                {#each exp.highlights as highlight}
                  <li>{highlight}</li>
                {/each}
              </ul>
              <ul class="flex flex-wrap gap-2 mt-3" aria-label="Technologies used at {companyGroup.company}">
                {#each exp.skills as skill}
                  <li class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs md:text-sm list-none">
                    {skill}
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        {/each}
      </div>
    </article>
  {/each}
</section>
