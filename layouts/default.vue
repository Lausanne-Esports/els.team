<template>
  <div>
    <els-header />
    <nuxt/>
    <els-footer />
    <els-copyright />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Copyright from './Copyright.vue'

export default {
  components: {
    'els-header': Header,
    'els-footer': Footer,
    'els-copyright': Copyright,
  },
}
</script>

<style lang="scss">
  @import '~/node_modules/bootstrap/scss/bootstrap-reboot.scss';
  @import '~/node_modules/bootstrap/scss/_utilities.scss';
  @import '~/node_modules/bootstrap/scss/_grid.scss';

  @import '~/assets/sass/core/variables.scss';
  @import '~/assets/sass/core/webfont.scss';

  @import '~/assets/sass/ui/wrappers.scss';

  @import "~/assets/sass/layouts/navs.scss";
  @import "~/assets/sass/layouts/sections.scss";
  @import "~/assets/sass/layouts/footer.scss";

  @import '~/assets/sass/components/horizontal-list.scss';
  @import '~/assets/sass/components/article-list.scss';

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
