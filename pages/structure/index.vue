<template>
  <section class="page">
    <header class="d-flex align-items-end">
      <div class="image-head" :style="{ backgroundImage: 'url(~/assets/images/header_lu.jpg)' }" />
      <div class="container">
        <h1>Les différentes line-up</h1>
        <p class="sub-title">du lausanne-sport eSports</p>
      </div>
    </header>

    <div class="container body">
      <div class="row">
        <structure-card :team="team" v-for="team in teams" :key="team.id"></structure-card>
      </div>
    </div>
  </section>
</template>

<script>
import StructureCard from '@/components/Structure/StructureCard'

export default {
  layout: 'page',

  components: { StructureCard },

  data: () => ({
    teams: [],
  }),

  async asyncData ({ $axios }) {
    const teams = await $axios.$get('teams')

    return { teams }
  },

  head: () => ({
    title: 'Structure | Lausanne eSports',
    meta: [
      { hid: 'description', name: 'description', content: 'Structure du Lausanne eSports' },
    ],
  }),
}
</script>

<style lang="scss">
  @import '~/assets/sass/pages/page.scss';
  @import '~/assets/sass/components/lineup-card.scss';
</style>
