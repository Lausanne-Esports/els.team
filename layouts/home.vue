<template>
  <div>
    <mobile-menu :open="mobileMenuOpenStatus" @close="toggleMenu"></mobile-menu>
    <main-header @toggle-mobile-menu="toggleMenu"></main-header>
    <nuxt />
    <sponsor-block></sponsor-block>
    <main-footer></main-footer>
    <copyright-block></copyright-block>
  </div>
</template>

<script>
import MainHeader from '@/components/Layout/MainHeader'
import MainFooter from '@/components/Layout/MainFooter'
import MobileMenu from '@/components/Navigations/MobileMenu'
import CopyrightBlock from '@/components/Layout/CopyrightBlock'
import SponsorBlock from '@/components/Layout/SponsorBlock'

export default {
  components: {
    CopyrightBlock,
    MainFooter,
    MainHeader,
    MobileMenu,
    SponsorBlock,
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

