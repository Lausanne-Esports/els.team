<template>
  <header class="main" :class="{ compact: compact }">
    <div class="nav-bar">
      <div class="container d-flex justify-content-between">
        <nav class="top-nav">
          <nuxt-link to="/">Accueil</nuxt-link>
          <nuxt-link to="#">News</nuxt-link>
          <nuxt-link to="#">Résultats</nuxt-link>
          <div class="sub-menu">
            <nuxt-link to="#">League of Legends</nuxt-link>
            <nuxt-link to="#">Overwatch</nuxt-link>
            <nuxt-link to="#">Rocket League</nuxt-link>
            <nuxt-link to="#">Fifa</nuxt-link>
          </div>
          <nuxt-link to="#">Structure</nuxt-link>
          <nuxt-link to="#">Palmarès</nuxt-link>
          <nuxt-link to="#">Médias</nuxt-link>
          <nuxt-link to="#">Contact</nuxt-link>
        </nav>
        <nav class="lang-nav">
          <a href="#">FR</a> / <a href="#">EN</a>
        </nav>
      </div>
    </div>
    <a href="/" class="logo mx-auto">
      <img src="~/assets/images/logo.png">
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
}
</script>

<style lang="scss" scoped>
  @import '~/assets/sass/core/variables.scss';

  .main {
    background: url('~/assets/images/header_bg.jpg') top center;
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
</style>
