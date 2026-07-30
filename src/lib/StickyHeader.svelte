<script lang="ts">
  interface Props {
    name: string;
    title: string;
    image: string;
    compact: boolean;
    scrollingDown: boolean;
    avatarSettled: boolean;
    textSettled: boolean;
    progress?: number;
    textProgress?: number;
  }

  let {
    name,
    title,
    image,
    compact,
    scrollingDown,
    avatarSettled,
    textSettled,
    progress = 0,
    textProgress = 0,
  }: Props = $props();
</script>

<div
  class="sticky-header"
  class:is-visible={compact}
  class:is-scrolling-down={scrollingDown && compact && progress > 0.85}
  class:is-measuring={!compact}
  style="--sticky-progress: {progress}"
  role="banner"
  aria-hidden={!compact}
>
  <div class="sticky-header__inner">
    <a href="#about" class="sticky-header__brand" aria-label="Back to top — {name}">
      <span
        id="sticky-avatar"
        class="sticky-header__avatar-wrap"
        class:is-settled={avatarSettled && compact}
        class:is-morphing={!avatarSettled && compact}
      >
        <img
          src={image}
          alt=""
          width="40"
          height="40"
          class="sticky-header__avatar"
          decoding="async"
        />
      </span>
      <span
        class="sticky-header__text"
        class:is-settled={textSettled && compact}
        class:is-morphing={!textSettled && textProgress > 0.02}
      >
        <span id="sticky-name" class="sticky-header__name">{name}</span>
        <span id="sticky-title" class="sticky-header__title">{title}</span>
      </span>
    </a>

    <nav
      class="sticky-header__nav"
      aria-label="Section navigation"
      style="opacity: {compact ? Math.min(1, Math.max(0, (progress - 0.55) / 0.35)) : 0}"
    >
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</div>
