<template>
  <div class="item">{{ value }}</div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
</style>
