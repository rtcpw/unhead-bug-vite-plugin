import { defineBoot } from '#q-app';
import { createHead } from '@unhead/vue/client';

export default defineBoot(({ app }) => {
  // Docs: https://unhead.unjs.io/docs/vue/head/guides/get-started/installation#_2-setup-client-side-rendering
  app.use(createHead());
});
