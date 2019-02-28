<template>
  <div>
    <LazyHydrate when-idle>
      <mobile-menu :open="mobileMenuOpenStatus" @close="toggleMenu"></mobile-menu>
    </LazyHydrate>

    <LazyHydrate when-idle>
      <main-header :compact="true" @toggle-mobile-menu="toggleMenu"></main-header>
    </LazyHydrate>

    <nuxt />

    <LazyHydrate when-visible>
      <main-footer></main-footer>
    </LazyHydrate>

    <LazyHydrate ssr-only>
      <copyright-block></copyright-block>
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
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
    LazyHydrate,
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

  @import '~assets/sass/core/variables.scss';
  @import '~assets/sass/core/webfont.scss';
  @import '~assets/sass/core/base.scss';

  @import '~assets/sass/ui/wrappers.scss';

  @import "~assets/sass/layouts/navs.scss";
  @import "~assets/sass/layouts/sections.scss";
  @import "~assets/sass/layouts/footer.scss";

  @import '~assets/sass/components/horizontal-list.scss';
  @import '~assets/sass/components/article-list.scss';

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
