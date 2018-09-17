<template>
  <section class="page">
    <header class="d-flex align-items-end">
      <div class="image-head" :style="{ backgroundImage: 'url(~/assets/images/header_lu.jpg)' }" />
      <div class="container">
        <h1>Nos meilleures preformances</h1>
        <p class="sub-title">Palmarès du Lausanne-Sport eSports</p>
      </div>
    </header>

    <div class="container body">
      <div class="row">
        <div class="col-md-6" v-for="game in games" :key="game.code">
          <awards-game :game="game"></awards-game>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AwardsGame from '@/components/Awards/AwardsGame'

export default {
  layout: 'page',

  components: { AwardsGame },

  data: () => ({
    games: [{
      name: 'Overwatch',
      code: 'ow',
      awards: [{
        result: 2,
        name: 'Polylan #31',
        lineup: 'eLS.Pachimari',
        year: '2018'
      },
      {
        result: 1,
        name: 'Swiss Nationals (Prefire Season #2)',
        lineup: 'eLS.Pachimari',
        year: '2017'
      },
      {
        result: 4,
        name: 'Bâloise International Gaming Show',
        lineup: 'eLS.Pachimari',
        year: '2017'
      },
      {
        result: 3,
        name: 'Zurich Game Show',
        lineup: 'eLS.Pachimari',
        year: '2017'
      },
      {
        result: 3,
        name: 'SwitzerLAN',
        lineup: 'eLS.Pachimari',
        year: '2017'
      },
      {
        result: 1,
        name: 'OservCup',
        lineup: 'eLS.Pachimari',
        year: '2017'
      },
      {
        result: 2,
        name: 'Geneva Gaming Convention',
        lineup: 'eLS.Pachimari',
        year: '2017'
      },
      {
        result: 2,
        name: 'GGC Online',
        lineup: 'eLS.Pachimari',
        year: '2017'
      },
      {
        result: 1,
        name: 'Swiss Gaming Challenge',
        lineup: 'eLS.Pachimari',
        year: '2017'
      },
      {
        result: 1,
        name: 'Polylan #29',
        lineup: 'eLS.Pachimari',
        year: '2017'
      }]
    },
    {
      name: 'Hearthstone',
      code: 'hs',
      awards: []
    },
    {
      name: 'League of Legends',
      code: 'lol',
      awards: []
    },
    {
      name: 'Counter-Strike',
      code: 'csgo',
      awards: []
    },
    {
      name: 'Rocket League',
      code: 'rl',
      awards: []
    }],
  }),
}
</script>

<style lang="scss">
  @import '~/assets/sass/pages/page.scss';
  @import '~/assets/sass/components/awards.scss';
</style>
