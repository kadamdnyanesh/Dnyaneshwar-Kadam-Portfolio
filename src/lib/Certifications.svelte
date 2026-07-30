<script lang="ts">
  import { portfolioData } from "../data/portfolio";
  import { reveal } from "./actions/reveal";
</script>

<section
  id="certifications"
  class="mb-12"
  aria-labelledby="certifications-heading"
  use:reveal
>
  <h2 id="certifications-heading" class="section-title">Certifications</h2>
  <p class="text-slate-600 dark:text-slate-400 mb-6 -mt-2">
    Cloud and AI credentials that support delivery on modern platforms.
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each portfolioData.certifications as cert}
      <article class="card hover:shadow-lg">
        <div class="flex items-start gap-4">
          <div class="w-20 flex-shrink-0">
            <img
              src={cert.logo}
              alt="{cert.name} certificate badge from {cert.issuer}"
              width="80"
              height="80"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 class="text-lg font-semibold text-indigo-900 dark:text-indigo-200">
              {cert.name}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
            <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
              <p>Issued: <time datetime={cert.date}>{cert.date}</time></p>
              <p>Credential ID: {cert.credentialId}</p>
            </div>
          </div>
        </div>
      </article>
    {/each}
  </div>
</section>
