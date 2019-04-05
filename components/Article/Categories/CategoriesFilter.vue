<template>
  <div class="categories-filter">
    <a @click="$emit('categoryChanged')">Tous les articles</a>
    <a
      v-for="category in categories"
      :key="category.id"
      @click="$emit('categoryChanged', category)"
    >
      <i :class="'icon-' + category.code" />
    </a>
  </div>
</template>

<script>
export default {
  props: ['categories'],
}
</script>
