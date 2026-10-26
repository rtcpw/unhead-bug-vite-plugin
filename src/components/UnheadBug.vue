<template>
  <div>
    <h4>Unhead Script Status:</h4>
    <div>{{ status }}</div>
  </div>
</template>

<script setup lang="ts">
import { useScript } from '@unhead/vue';
import { onMounted } from 'vue';

const { load, status } = useScript(
  'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js',
  {
    trigger: 'manual',
  },
);

onMounted(() => {
  void load();
});
</script>
