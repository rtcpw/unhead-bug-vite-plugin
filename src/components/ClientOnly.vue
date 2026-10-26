<template>
  <slot v-if="mounted" name="default" />
  <slot v-else name="placeholder" />
</template>

<script setup lang="ts">
import type { VNode } from 'vue';
import { onMounted, shallowRef } from 'vue';

// Quasar's <q-no-ssr> injects an additional HTML element in case there are multiple content children.
// To avoid that, we have reimplemeneted the component here.
// https://quasar.dev/vue-components/no-ssr
// https://github.com/quasarframework/quasar/blob/dev/ui/src/components/no-ssr/QNoSsr.js
// https://vuejs.org/guide/scaling-up/ssr.html#hydration-mismatch

defineSlots<{
  default?(props: object): VNode[];
  placeholder?(props: object): VNode[];
}>();

const mounted = shallowRef(false);

onMounted(() => {
  mounted.value = true;
});
</script>

<style lang="scss" module></style>
