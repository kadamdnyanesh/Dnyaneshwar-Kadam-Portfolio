<script lang="ts">
  import { portfolioData } from "../data/portfolio";
</script>

<section id="certifications" class="mb-12 animate-fade-in">
  <h2 class="section-title">Certifications</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each portfolioData.certifications as cert}
      <div class="card hover:shadow-lg">
        <div class="flex items-start gap-4">
          <div class="w-20 flex-shrink-0">
            <img
              src={cert.logo}
              alt={`${cert.issuer} logo`}
              class="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 class="text-lg font-semibold text-indigo-900 dark:text-indigo-200">
              {cert.name}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
            <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">
              <p>Issued: {cert.date}</p>
              <p>Credential ID: {cert.credentialId}</p>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section> 