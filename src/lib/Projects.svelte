<script lang="ts">
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Built a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented features like user authentication, payment integration, and real-time inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com",
    },
    {
      title: "Task Management App",
      description:
        "Developed a collaborative task management application with real-time updates using Socket.IO. Features include task assignment, progress tracking, and team collaboration tools.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.IO"],
      link: "https://github.com",
    },
    {
      title: "AI Image Generator",
      description:
        "Created an AI-powered image generation tool using OpenAI's DALL-E API. Implemented features for style transfer and image manipulation.",
      technologies: ["Python", "Flask", "OpenAI API", "TensorFlow"],
      link: "https://github.com",
    },
  ];
</script>

<section id="projects" class="mb-12 animate-fade-in">
  <h2 class="section-title">Projects</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each projects as project}
      <article class="card hover:shadow-lg">
        <h3
          class="text-xl font-semibold mb-2 text-indigo-900 dark:text-indigo-200"
        >
          {project.title}
        </h3>
        <p class="text-slate-600 dark:text-slate-400 mb-4">
          {project.description}
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          {#each project.technologies as tech}
            <span class="tag">
              {tech}
            </span>
          {/each}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          class="link inline-flex items-center"
        >
          View Project
          <svg
            class="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </article>
    {/each}
  </div>
</section>
