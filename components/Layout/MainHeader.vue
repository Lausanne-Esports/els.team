<template>
  <header
    class="main"
    :class="{ compact: compact }"
    v-lazy:background-image="'/images/header_bg.jpg'"
  >
    <div class="nav-bar">
      <div class="container d-flex justify-content-between">
        <div class="hamburger" @click="toggleMenu">
          <div class="meat"></div>
        </div>
        <nav class="top-nav">
          <nuxt-link to="/">Accueil</nuxt-link>
          <nuxt-link to="/articles">News</nuxt-link>
          <nuxt-link to="/structure">Structure</nuxt-link>
          <nuxt-link to="/awards">Palmarès</nuxt-link>
          <nuxt-link to="/streams">Lives</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link>
          <nuxt-link to="/about">A Propos</nuxt-link>
        </nav>
        <nav class="top-nav" v-if="currentUser !== null">
          <a :href="backendUrl">Admin <small>({{ currentUser.username }})</small></a>
        </nav>
        <nav class="lang-nav">
          <a href="#">FR</a> / <a href="#">EN</a>
        </nav>
      </div>
    </div>
    <a href="/" class="logo mx-auto">
      <img src="/images/logo.png" alt="Lausanne eSports Logo">
    </a>
  </header>
</template>

<script>
export default {
  props: {
    compact: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    toggleMenu() {
      this.$emit('toggle-mobile-menu');
    },
  },

  computed: {
    currentUser () {
      return this.$store.state.currentUser
    },

    backendUrl () {
      return process.env.BACKEND_URL
    },
  },
}
</script>
