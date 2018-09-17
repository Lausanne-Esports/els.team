<template>
  <div>
    <mobile-menu :open="mobileMenuOpenStatus" @close="toggleMenu"></mobile-menu>
    <main-header :compact="true" @toggle-mobile-menu="toggleMenu"></main-header>
    <nuxt />
    <main-footer></main-footer>
    <copyright-block></copyright-block>
  </div>
</template>

<script>
import MainHeader from '@/components/Layout/MainHeader'
import MainFooter from '@/components/Layout/MainFooter'
import MobileMenu from '@/components/Navigations/MobileMenu'
import CopyrightBlock from '@/components/Layout/CopyrightBlock'

export default {
  components: {
    CopyrightBlock,
    MainFooter,
    MainHeader,
    MobileMenu,
  },

  data: () => ({
    mobileMenuOpenStatus: false,
  }),

  methods: {
    toggleMenu () {
      this.mobileMenuOpenStatus = !this.mobileMenuOpenStatus
    }
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
