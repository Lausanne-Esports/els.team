<template>
  <section class="page">
    <header class="d-flex align-items-end">
      <div
        class="image-head"
        v-lazy:background-image="'/images/header_lu.jpg'"
      />
      <div class="container">
        <h1>Staff</h1>
        <p class="sub-title">{{ staff.name }}</p>
      </div>
    </header>

    <div class="container body">
      <div class="row">
        <div class="player-card-wrapper col-6 col-lg-4" v-for="player in staff.players" :key="player.id">
          <player-card :player="player"></player-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PlayerCard from '@/components/Players/PlayerCard'

export default {
  layout: 'page',

  scrollToTop: true,

  components: { PlayerCard },

  data: () => ({
    staff: [],
  }),

  async asyncData ({ $axios, params }) {
    const [id] = params.id.split('-');
    const staff = await $axios.$get(`staff/${id}`)

    return { staff }
  },

  head () {
    return {
      title: `${this.staff.name} | Lausanne Esports`,
      meta: [
        { hid: 'description', name: 'description', content: `Page de du Staff ${this.staff.name}` },
      ],
    }
  },
}
</script>

<style lang="scss">
  @import '~assets/sass/pages/page.scss';
  @import '~assets/sass/components/player-card.scss';
</style>
