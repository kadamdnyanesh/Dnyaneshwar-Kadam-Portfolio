import { defineConfig, type Plugin } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { getTotalExperience } from "./src/utils/index";

/** Inject live experience years into index.html at serve/build time. */
function injectDynamicDates(): Plugin {
  const years = String(getTotalExperience().years);

  return {
    name: "inject-dynamic-dates",
    transformIndexHtml(html) {
      return html.replaceAll("__YEARS_PLUS__", years);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), injectDynamicDates()],
});
