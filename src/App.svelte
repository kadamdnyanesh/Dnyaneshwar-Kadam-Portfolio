<script lang="ts">
  import ThemeToggle from "./lib/ThemeToggle.svelte";
  import Experience from "./lib/Experience.svelte";
  import Education from "./lib/Education.svelte";
  import Skills from "./lib/Skills.svelte";
  import Projects from "./lib/Projects.svelte";
  import Contact from "./lib/Contact.svelte";
  import Footer from "./lib/Footer.svelte";
  import Certifications from "./lib/Certifications.svelte";
  import { portfolioData, siteSeo, getPersonalSummary, getSiteDescription } from "./data/portfolio";
  import { downloadCV } from "./utils/generateCV";

  let isDownloading = $state(false);
  const p = portfolioData.personalDetails;
  const summary = getPersonalSummary();
  const description = getSiteDescription();

  async function handleDownloadCV() {
    if (isDownloading) return;
    isDownloading = true;
    try {
      await new Promise((resolve) => setTimeout(resolve, 30));
      await downloadCV(portfolioData);
    } finally {
      isDownloading = false;
    }
  }
</script>

<svelte:head>
  <title>{siteSeo.title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={siteSeo.keywords} />
  <meta name="author" content={p.name} />
  <meta
    name="robots"
    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  />
  <link rel="canonical" href="{siteSeo.siteUrl}/" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content={siteSeo.locale} />
  <meta property="og:site_name" content="{p.name} Portfolio" />
  <meta property="og:url" content="{siteSeo.siteUrl}/" />
  <meta property="og:title" content={siteSeo.title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={p.profileImage} />
  <meta property="og:image:alt" content="Portrait of {p.name}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={siteSeo.title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={p.profileImage} />
  <meta name="theme-color" content={siteSeo.themeColor} />
</svelte:head>

<a href="#main-content" class="skip-link">Skip to main content</a>

<ThemeToggle />

<nav
  class="sr-only"
  aria-label="Primary"
>
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#certifications">Certifications</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<main id="main-content" class="container mx-auto px-4 py-8 max-w-4xl" tabindex="-1">
  <header
    id="about"
    class="text-center mb-12 hero-enter"
    aria-labelledby="profile-name"
  >
    <div class="relative md:w-32 md:h-32 w-24 h-24 lg:w-48 lg:h-48 mx-auto mb-4">
      <img
        src={p.profileImage}
        alt="{p.name}, {p.title}"
        width="192"
        height="192"
        decoding="async"
        fetchpriority="high"
        class="rounded-full w-full h-full object-cover shadow-lg"
      />
    </div>
    <h1
      id="profile-name"
      class="text-4xl font-bold mb-2 text-indigo-900 dark:text-indigo-200"
    >
      {p.name}
    </h1>
    <p class="text-xl text-slate-600 dark:text-slate-400 mb-3">
      {p.title}
    </p>
    <p
      class="max-w-2xl mx-auto text-base md:text-lg text-slate-600 dark:text-slate-300 mb-3 leading-relaxed"
    >
      {summary}
    </p>
    <p class="text-sm text-emerald-700 dark:text-emerald-400 font-medium mb-6">
      {p.availability}
    </p>
    <div class="flex justify-center space-x-4 mb-6" aria-label="Social profiles">
      <a
        href={p.socialLinks.github}
        target="_blank"
        rel="noopener noreferrer me"
        aria-label="GitHub profile of {p.name}"
        class="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
          />
        </svg>
      </a>
      <a
        href={p.socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer me"
        aria-label="LinkedIn profile of {p.name}"
        class="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      </a>
      <a
        href={p.socialLinks.codeSandbox}
        target="_blank"
        rel="noopener noreferrer me"
        aria-label="CodeSandbox profile of {p.name}"
        class="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="w-6 h-6"
          viewBox="0 0 24 24"
          aria-hidden="true"
          ><path
            d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z"
          /></svg
        >
      </a>
    </div>
    <div class="flex justify-center flex-wrap gap-4">
      <button
        type="button"
        onclick={handleDownloadCV}
        disabled={isDownloading}
        aria-busy={isDownloading}
        class="btn-primary disabled:opacity-70 disabled:cursor-wait"
      >
        <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        {isDownloading ? "Preparing CV…" : "Download CV"}
      </button>
      <a href="mailto:{p.email}" class="btn-secondary !px-3" aria-label="Email {p.name}">
        <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </a>
      <a
        href="tel:{p.phone.replace(/\s/g, '')}"
        class="btn-secondary !px-3"
        aria-label="Call {p.name}"
      >
        <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/messaging/thread/new/?recipient=dnyaneshwar-kadam-b36713a0"
        class="btn-secondary !px-3"
        aria-label="Message {p.name} on LinkedIn"
      >
        <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
    </div>
  </header>

  <Experience />
  <Projects />
  <Skills />
  <Education />
  <Certifications />
  <Contact />
</main>

<Footer />
