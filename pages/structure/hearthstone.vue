<template>
  <section class="page">
    <header class="d-flex align-items-end">
      <div class="image-head" :style="{ backgroundImage: 'url(/images/header_lu.jpg)' }" />
      <div class="container">
        <h1>{{ lineup.game }}</h1>
        <p class="sub-title">{{ lineup.name }}</p>
      </div>
    </header>
    <div class="container body">
      <div class="row">
        <div class="col-md-4" v-for="(player, index) in players" :key="index">
          <player-card :player="player"></player-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PlayerCard from '../../components/Players/PlayerCard';

export default {
  layout: 'article',
  components: {
    PlayerCard
  },
  data () {
    return {
      lineup: {
        name: 'Hope',
        game: 'Hearthstone',
      },
      players: [{
        username: 'dodo021',
        firstname: 'Killian',
        lastname: 'Tornese',
        role: 'Joueur',
        picture: '/images/players/default.png',
        socials: [
          {
            type: 'twitter',
            url: '#'
          },
          {
            type: 'facebook',
            url: '#'
          },
          {
            type: 'steam',
            url: '#'
          },
          {
            type: 'twitch',
            url: '#'
          }
        ]
      }],
    }
  },
}
</script>

<style lang="scss">
  @import '~/assets/sass/pages/page.scss';
  @import '~/assets/sass/components/player-card.scss';
</style>
