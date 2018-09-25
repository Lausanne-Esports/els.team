<template>
  <section class="page">
    <header class="d-flex align-items-end">
      <div class="image-head" :style="{ backgroundImage: 'url(/images/header_lu.jpg)' }" />
      <div class="container">
        <h1>{{ team.category.name }}</h1>
        <p class="sub-title">{{ team.name }}</p>
      </div>
    </header>

    <div class="container body">
      <div class="row">
        <div class="player-card-wrapper col-6 col-lg-4" v-for="player in team.players" :key="player.id">
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
    team: [],
  }),

  async asyncData ({ $axios, params }) {
    const [id] = params.id.split('-');
    const team = await $axios.$get(`teams/${id}`)

    return { team }
  },

  head () {
    return {
      title: `${this.team.name} | Lausanne eSports`,
      meta: [
        { hid: 'description', name: 'description', content: `Page de l'équipe ${this.team.name}` },
      ],
    }
  },
}
</script>

<style lang="scss">
  @import '~assets/sass/pages/page.scss';
  @import '~assets/sass/components/player-card.scss';
</style>

