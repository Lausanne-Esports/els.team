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
          <nuxt-link to="/staff">Staff</nuxt-link>
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
      <img src="/images/logo.png" alt="Lausanne Esports Logo">
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

<style lang="scss" scoped>
  @import '~assets/sass/core/variables.scss';

  .main {
    background-position: top center;
    background-size: cover;
    height: 800px;

    &.compact {
      height: auto;

      .logo {
        display: none;
      }
    }
  }

  .nav-bar {
    background: $dark-blue;
    border-top: 5px solid $blue;
  }

  .logo {
    display: block;
    margin: 0 auto;
    margin-top: 150px;
    width: 500px;

    img {
      height: auto;
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    .main {
      height: 400px;
    }

    .logo {
      margin-top: 50px;
      width: 60%;
    }
  }
</style>
