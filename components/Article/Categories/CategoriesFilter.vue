<template>
  <div class="categories-filter">
    <a @click="$emit('categoryChanged')">Tous les articles</a>
    <a
      v-for="category in categories"
      :key="category.id"
      @click="$emit('categoryChanged', category)"
    >{{ category.name }}</a>
  </div>
</template>

<script>
export default {
  props: ['categories'],
}
</script>

<style lang="scss" scoped>
  @import '~/assets/sass/components/categories-filter.scss';
</style>
