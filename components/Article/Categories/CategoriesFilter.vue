<template>
  <div class="categories-filter">
    <nuxt-link to="/articles">Tous les articles</nuxt-link>
    <nuxt-link v-for="category in categories" :key="category.id" :to="'/articles/?filter=' + category.code">{{ category.name }}</nuxt-link>
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
