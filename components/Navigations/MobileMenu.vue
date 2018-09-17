<template>
  <div class="mobile-menu" :class="{ open }">
    <div class="close" @click="close">X</div>
    <nav>
      <nuxt-link to="/">Accueil</nuxt-link>
      <nuxt-link to="/articles">News</nuxt-link>
      <nuxt-link to="/structure">Structure</nuxt-link>
      <nuxt-link to="/awards">Palmarès</nuxt-link>
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

<style lang="scss">
  @import '~/assets/sass/core/variables.scss';

  .mobile-menu {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: $dark-blue;
    visibility: collapse;
    opacity: 0;
    transition: 0.3s all;
    z-index: 9999;

    &.open {
      visibility: visible;
      opacity: 1;
    }

    .close {
      position: absolute;
      top: 30px;
      left: 30px;
      color: $blue;
      font-size: 40px;
      font-weight: bold;
      line-height: 1em;
    }

    nav {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);

      a {
        display: block;
        text-align: center;
        font-size: 24px;
        font-style: italic;
        text-transform: uppercase;
      }
    }
  }
</style>


