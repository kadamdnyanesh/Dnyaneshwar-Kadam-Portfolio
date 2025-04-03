<script lang="ts">
  import ThemeToggle from "./lib/ThemeToggle.svelte";
  import Experience from "./lib/Experience.svelte";
  import Education from "./lib/Education.svelte";
  import Skills from "./lib/Skills.svelte";
  import Projects from "./lib/Projects.svelte";
  import PersonalDetails from "./lib/PersonalDetails.svelte";
  import Footer from "./lib/Footer.svelte";
  import Certifications from "./lib/Certifications.svelte";
  import { onMount } from "svelte";
  import { portfolioData } from "./data/portfolio";

  let isDarkMode = false;

  onMount(() => {
    // Check initial theme
    isDarkMode = document.documentElement.classList.contains("dark");

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          isDarkMode = document.documentElement.classList.contains("dark");
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title
    >{portfolioData.personalDetails.name} - {portfolioData.personalDetails
      .title}</title
  >
  <meta
    name="description"
    content="Senior Frontend Developer with 6+ years of experience in building scalable and efficient web applications. Proficient in Vue, Svelte, and React frameworks. Strong focus on user experience and performance optimization."
  />
</svelte:head>

<ThemeToggle />

<main class="container mx-auto px-4 py-8 max-w-4xl">
  <header class="text-center mb-12 animate-fade-in">
    <div class="relative w-32 h-32 mx-auto mb-4">
      <img
        src={portfolioData.personalDetails.profileImage}
        alt="{portfolioData.personalDetails.name} - {portfolioData
          .personalDetails.title}"
        class="rounded-full w-full h-full object-cover shadow-lg"
      />
    </div>
    <h1 class="text-4xl font-bold mb-2 text-indigo-900 dark:text-indigo-200">
      {portfolioData.personalDetails.name}
    </h1>
    <p class="text-xl text-slate-600 dark:text-slate-400 mb-4">
      {portfolioData.personalDetails.title}
    </p>
    <div class="flex justify-center space-x-4 mb-6">
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
    <div class="flex justify-center space-x-4">
      <a
        type="button"
        target="_blank"
        href="https://my-documents-1993.s3.ap-south-1.amazonaws.com/Dnyaneshwar_Kadam_CV.pdf"
        class="btn-primary"
      >
        Download CV
      </a>
      <a
        type="button"
        target="_blank"
        href="https://www.linkedin.com/messaging/thread/new/?recipient=dnyaneshwar-kadam-b36713a0"
        class="btn-secondary"
      >
        Hire Me
      </a>
    </div>
  </header>
  <PersonalDetails />
  <Experience />
  <Skills />
  <Projects />
  <Certifications />
  <Education />
</main>

<Footer />
