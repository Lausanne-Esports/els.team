<template>
  <div class="mobile-menu" :class="{ open }">
    <div class="close" @click="close">X</div>
    <nav>
      <nuxt-link to="/">Accueil</nuxt-link>
      <nuxt-link to="/articles">News</nuxt-link>
      <nuxt-link to="/structure">Structure</nuxt-link>
      <nuxt-link to="/awards">Palmarès</nuxt-link>
      <nuxt-link to="/streams">Lives</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['open'],
  methods: {
    close() {
      this.$emit('close');
    }
  },
  watch: {
    '$route': function(newValue) {
      if(this.open)
        this.$emit('close');
    }
  }
}
</script>
