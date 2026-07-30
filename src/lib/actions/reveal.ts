/** Scroll-triggered reveal for content sections. */
export function reveal(
  node: HTMLElement,
  options: { rootMargin?: string; threshold?: number } = {}
) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  node.classList.add("reveal-section");

  node.querySelectorAll<HTMLElement>(".card").forEach((card, index) => {
    card.style.setProperty("--stagger", `${0.08 + index * 0.07}s`);
  });

  if (reduceMotion) {
    node.classList.add("is-visible");
    return {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        node.classList.add("is-visible");
        observer.unobserve(node);
      }
    },
    {
      rootMargin: options.rootMargin ?? "0px 0px -10% 0px",
      threshold: options.threshold ?? 0.12,
    }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
