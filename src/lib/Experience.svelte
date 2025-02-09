<script lang="ts">
  import { calculateYearsAndMonths } from "../utils/index";

  // Define the experiences array
  const experiences = [
    {
      title: "Senior Application Developer (Assistant Manager)",
      company: "Genpact",
      period: "Jul 2023 - Present",
      duration: "1 yr 8 mos",
      location: "Gurugram, Haryana, India · Remote",
      description:
        "Led development of in-house applications using modern technologies. Mentored junior developers and implemented best practices.",
      skills: ["Vue.js", "Svelte", "Astro.js"],
    },
    {
      title: "Application Developer",
      company: "Genpact",
      period: "Sep 2021 - Present",
      duration: "3 yrs 6 mos",
      location: "Delhi, India",
      description:
        "Developed and maintained full-stack applications. Collaborated with cross-functional teams to deliver high-quality solutions.",
      skills: ["Vue.js", "Svelte", "Astro.js"],
    },
    {
      title: "Frontend Developer",
      company: "iAssure International Technologies Pvt Ltd",
      period: "Apr 2019 - Sep 2021",
      duration: "2 yrs 6 mos",
      location: "Pune",
      description:
        "Developed and maintained frontend applications. Collaborated with cross-functional teams to deliver high-quality solutions.",
      skills: ["Vue.js", "React.js"],
    },
    {
      title: "Software Engineering Trainee",
      company: "iAssure International Technologies Pvt Ltd",
      period: "Dec 2018 - Mar 2019",
      duration: "4 mos",
      location: "Pune, Maharashtra, India",
      description:
        "Trained in software development best practices and contributed to small-scale projects.",
      skills: ["React.js"],
    },
  ];

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

  {#each experiences as exp}
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
