<template>
  <section class="wrapper dark-blue pt-5">
    <div class="matches container">
      <div class="head d-flex justify-content-between">
        <div class="d-flex">
          <h2>Derniers matchs</h2>
          <els-head-list :items="games" />
        </div>
        <a class="read-more">Tous les matchs <i class="icon-arrow-right" /></a>
      </div>
      <div class="horizontal-list row">
        <div
          class="col-md-3"
          :key="match.id"
          v-for="match in matches">
          <div class="item match-item d-flex flex-column justify-content-center">
            <div class="infos d-flex align-items-center">
              <i class="game icon-lol" />
              <div>
                <div class="event">
                  {{ match.name }}
                  <i class="icon-arrow-right" />
                  {{ match.phase }}
                </div>
                <div class="date">{{ match.date }}</div>
              </div>
            </div>
            <div class="result d-flex align-items-center justify-content-between">
              <img :src="match.teams[0].logo">
              <div class="score">
                <span class="big">{{ match.teams[0].score }}</span> vs
                <span class="big">{{ match.teams[1].score }}</span>
              </div>
              <img :src="match.teams[1].logo">
            </div>
            <i class="bottom-icon icon-twitch align-self-center" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeadList from '~/components/Ui/HeadList.vue'

export default {
  components: {
    'els-head-list': HeadList,
  },
  data () {
    return {
      games: [
        {
          value: 'Tous les jeux',
        },
        {
          value: 'Counter-Strike : Global Offensive',
        },
        {
          value: 'League of Legends',
        },
        {
          value: 'Fifa',
        },
      ],
      matches: [
        {
          id: 1,
          date: '16 jan 13h37',
          name: 'Prefire League',
          phase: 'Final',
          teams: [
            {
              id: 1,
              name: 'Lausanne eSports',
              logo: 'http://via.placeholder.com/50x50',
              score: 3,
            },
            {
              id: 2,
              name: 'Qualitas Helvetica',
              logo: 'http://via.placeholder.com/50x50',
              score: 2,
            },
          ],
        },
        {
          id: 1,
          date: '16 jan 13h37',
          name: 'Prefire League',
          phase: 'Final',
          teams: [
            {
              id: 1,
              name: 'Lausanne eSports',
              logo: 'http://via.placeholder.com/50x50',
              score: 1,
            },
            {
              id: 2,
              name: 'Qualitas Helvetica',
              logo: 'http://via.placeholder.com/50x50',
              score: 2,
            },
          ],
        },
        {
          id: 1,
          date: '16 jan 13h37',
          name: 'Prefire League',
          phase: 'Final',
          teams: [
            {
              id: 1,
              name: 'Lausanne eSports',
              logo: 'http://via.placeholder.com/50x50',
              score: 3,
            },
            {
              id: 2,
              name: 'Qualitas Helvetica',
              logo: 'http://via.placeholder.com/50x50',
              score: 2,
            },
          ],
        },
        {
          id: 1,
          date: '16 jan 13h37',
          name: 'Prefire League',
          phase: 'Final',
          teams: [
            {
              id: 1,
              name: 'Lausanne eSports',
              logo: 'http://via.placeholder.com/50x50',
              score: 3,
            },
            {
              id: 2,
              name: 'Qualitas Helvetica',
              logo: 'http://via.placeholder.com/50x50',
              score: 2,
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~assets/sass/components/horizontal-list.scss";
</style>

