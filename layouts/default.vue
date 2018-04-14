<template>
  <div>
    <els-header/>
    <nuxt/>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  components: {
    'els-header': Header,
  },
}
</script>

<style lang="scss">
  @import '~/node_modules/bootstrap/scss/bootstrap-reboot.scss';
  @import '~/node_modules/bootstrap/scss/_utilities.scss';
  @import '~/node_modules/bootstrap/scss/_grid.scss';
  @import '~/assets/sass/core/variables.scss';
  @import '~/assets/sass/ui/wrappers.scss';

  * {
    font-family: 'Barlow', Arial, sans-serif;
  }

  body, html {
    background: $gray;
  }

  a {
    &:hover {
      text-decoration: none;
    }
  }
</style>
