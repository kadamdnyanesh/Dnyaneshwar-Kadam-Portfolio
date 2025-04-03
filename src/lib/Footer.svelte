<script lang="ts">
  const currentYear = new Date().getFullYear();
  import { portfolioData } from "../data/portfolio";
</script>

<footer class="bg-white dark:bg-gray-800 py-8 mt-12">
  <div class="container mx-auto px-4 max-w-4xl">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-lg font-semibold mb-4">Dnyaneshwar Kadam</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Senior Frontend Developer with 6+ years of experience in building scalable and efficient web applications. Proficient in Vue, Svelte, and React frameworks. Strong focus on user experience and performance optimization.
        </p>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="#personal-details"
              class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >Personal Details</a
            >
          </li>
          <li>
            <a
              href="#experience"
              class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >Experience</a
            >
          </li>
          <li>
            <a
              href="#skills"
              class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >Skills</a
            >
          </li>
          <li>
            <a
              href="#projects"
              class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="#education"
              class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >Education</a
            >
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-4">Connect</h3>
        <div class="flex space-x-4">
          <a
            href={portfolioData.personalDetails.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            class="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
          </a>
          <a
            href={portfolioData.personalDetails.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            class="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a
            href={portfolioData.personalDetails.socialLinks.codeSandbox}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodeSandbox Profile"
            class="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-6 h-6"
              viewBox="0 0 24 24"
              role="img"
              ><title>CodeSandbox icon</title><path
                d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z"
              /></svg
            >
          </a>
        </div>
      </div>
    </div>
    <div
      class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400"
    >
      <p>&copy; {currentYear} Dnyaneshwar Kadam. All rights reserved.</p>
    </div>
  </div>
</footer>
