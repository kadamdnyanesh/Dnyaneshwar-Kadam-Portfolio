<script lang="ts">
  import { portfolioData } from "../data/portfolio";
</script>

<section id="skills" class="mb-12 animate-fade-in">
  <h2 class="section-title">Skills</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each portfolioData.skills as skill}
      <div class="card">
        <h3 class="text-xl font-semibold mb-3">{skill.category}</h3>
        <ul class="space-y-2">
          {#each skill.items as item}
            <li class="flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {item}
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>
