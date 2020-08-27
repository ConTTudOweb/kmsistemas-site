<template>
  <div>
    <base-header />
    <Nuxt />
  </div>
</template>

<script>
export default {
  components: {
    BaseHeader: () => import('~/components/base/Header'),
  }
}
</script>
