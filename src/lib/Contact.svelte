<script lang="ts">
  import { portfolioData } from "../data/portfolio";
  import { reveal } from "./actions/reveal";

  const details = portfolioData.personalDetails;
</script>

<section id="contact" class="mb-12" aria-labelledby="contact-heading" use:reveal>
  <h2 id="contact-heading" class="section-title">Contact</h2>
  <p class="text-slate-600 dark:text-slate-400 mb-6 -mt-2">
    Fastest ways to reach me for roles, interviews, or project discussions.
  </p>
  <address class="card grid grid-cols-1 md:grid-cols-2 gap-5 not-italic">
    <div class="flex items-start">
      <svg class="w-5 h-5 mr-3 mt-0.5 text-gray-600 dark:text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Email</p>
        <a
          href="mailto:{details.email}"
          class="font-medium text-indigo-700 dark:text-indigo-300 hover:underline break-all"
        >
          {details.email}
        </a>
      </div>
    </div>
    <div class="flex items-start">
      <svg class="w-5 h-5 mr-3 mt-0.5 text-gray-600 dark:text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Phone</p>
        <a href="tel:{details.phone.replace(/\s/g, '')}" class="font-medium hover:underline">
          {details.phone}
        </a>
      </div>
    </div>
    <div class="flex items-start">
      <svg class="w-5 h-5 mr-3 mt-0.5 text-gray-600 dark:text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Location</p>
        <p class="font-medium">{details.address}</p>
      </div>
    </div>
    <div class="flex items-start">
      <svg class="w-5 h-5 mr-3 mt-0.5 text-gray-600 dark:text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Availability</p>
        <p class="font-medium">{details.availability}</p>
      </div>
    </div>
    <div class="flex items-start md:col-span-2">
      <svg class="w-5 h-5 mr-3 mt-0.5 text-gray-600 dark:text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Languages</p>
        <p class="font-medium">{details.languages.join(" · ")}</p>
      </div>
    </div>
  </address>
</section>
