import { defineBoot } from '#q-app';
import { createHead } from '@unhead/vue/server';

export default defineBoot(({ app, ssrContext }) => {
  // Docs: https://unhead.unjs.io/docs/vue/head/guides/get-started/installation#_3-setup-server-side-rendering
  const head = createHead();
  app.use(head);

  if (ssrContext != null) {
    ssrContext.res.locals.head = head;
  }
});
