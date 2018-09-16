<template>
  <section class="page">
    <header class="d-flex align-items-end">
      <div class="image-head" :style="{ backgroundImage: 'url(~/assets/images/header_bg.jpg)' }" />
      <div class="container">
        <h1>Les différentes line-up</h1>
        <p class="sub-title">du lausanne-sport eSports</p>
      </div>
    </header>
    <div class="container body">
      <div class="row">
        <div class="col-md-4">
          <nuxt-link to="/lineups">
          <div class="lineup-card fortnite">
            <div class="bg-image"></div>
            <div class="body">
              <div class="players">5 joueurs</div>
              <h2>Fortnite Battle Royal</h2>
              <p class="read-more">En savoir plus <i class="icon-arrow-right" /></p>
            </div>
          </div>
          </nuxt-link>
        </div>

        <div class="col-md-4">
          <nuxt-link to="/lineups">
          <div class="lineup-card lol">
            <div class="bg-image"></div>
            <div class="body">
              <div class="players">6 joueurs</div>
              <h2>League of Legends</h2>
              <p class="read-more">En savoir plus <i class="icon-arrow-right" /></p>
            </div>
          </div>
          </nuxt-link>
        </div>

        <div class="col-md-4">
          <nuxt-link to="/lineups">
          <div class="lineup-card ow">
            <div class="bg-image"></div>
            <div class="body">
              <div class="players">6 joueurs</div>
              <h2>Overwatch</h2>
              <p class="read-more">En savoir plus <i class="icon-arrow-right" /></p>
            </div>
          </div>
          </nuxt-link>
        </div>

        <div class="col-md-4">
          <nuxt-link to="/lineups">
          <div class="lineup-card hs">
            <div class="bg-image"></div>
            <div class="body">
              <div class="players">5 joueurs</div>
              <h2>Hearthstone</h2>
              <p class="read-more">En savoir plus <i class="icon-arrow-right" /></p>
            </div>
          </div>
          </nuxt-link>
        </div>

        <div class="col-md-4">
          <nuxt-link to="/lineups">
          <div class="lineup-card rl">
            <div class="bg-image"></div>
            <div class="body">
              <div class="players">5 joueurs</div>
              <h2>Rocket League</h2>
              <p class="read-more">En savoir plus <i class="icon-arrow-right" /></p>
            </div>
          </div>
          </nuxt-link>
        </div>

        <div class="col-md-4">
          <nuxt-link to="/lineups">
          <div class="lineup-card fifa">
            <div class="bg-image"></div>
            <div class="body">
              <div class="players">2 joueurs</div>
              <h2>Fifa</h2>
              <p class="read-more">En savoir plus <i class="icon-arrow-right" /></p>
            </div>
          </div>
          </nuxt-link>
        </div>

        <div class="col-md-4">
          <nuxt-link to="/lineups">
          <div class="lineup-card staff">
            <div class="bg-image"></div>
            <div class="body">
              <div class="players">1000000 joueurs</div>
              <h2>Staff</h2>
              <p class="read-more">En savoir plus <i class="icon-arrow-right" /></p>
            </div>
          </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'article',
  components: {

  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss">
  @import '~/assets/sass/pages/page.scss';
  @import '~/assets/sass/components/lineup-card.scss';
</style>
