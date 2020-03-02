<template>
  <section class="page">
    <header class="d-flex align-items-end">
      <div
        class="image-head"
        v-lazy:background-image="'/images/header_lu.jpg'"
      />
      <div class="container">
        <h1>Staff</h1>
        <p class="sub-title">du lausanne-sport eSports</p>
      </div>
    </header>

    <div class="container body">
      <div class="row">
        <staff-card :staff="aStaff" v-for="aStaff in staff" :key="aStaff.id"></staff-card>
      </div>
    </div>
  </section>
</template>

<script>
import StaffCard from '@/components/Staff/StaffCard'

export default {
  layout: 'page',

  scrollToTop: true,

  components: { StaffCard },

  data: () => ({
    staff: [],
  }),

  async asyncData ({ $axios }) {
    const staff = await $axios.$get('staff')

    return { staff }
  },

  head: () => ({
    title: 'Staff | Lausanne Esports',
    meta: [
      { hid: 'description', name: 'description', content: 'Staff du Lausanne Esports' },
    ],
  }),
}
</script>

<style lang="scss">
  @import '~assets/sass/pages/page.scss';
  @import '~assets/sass/components/lineup-card.scss';
</style>
