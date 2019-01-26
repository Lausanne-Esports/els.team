<template>
  <div class="page">
    <header class="d-flex align-items-end">
      <div
        class="image-head"
        v-lazy:background-image="'/images/header_twitch.jpg'"
      />
      <div class="container">
        <h1>Lives</h1>
      </div>
    </header>
    <section class="wrapper light pt-5 pb-5">
      <div class="container streams">
        <div class="head d-flex">
          <h2>En ligne</h2>
        </div>
        <div class="row mt-3">
          <stream-card
            class="col-md-4"
            :key="stream.id"
            :stream="stream"
            v-for="stream in onlineStreams"
          ></stream-card>
        </div>
      </div>
    </section>
    <section class="wrapper darker-blue pt-5 pb-5">
      <div class="container streams">
        <div class="head d-flex">
          <h2>Hors ligne</h2>
        </div>
        <div class="row mt-3">
          <stream-card
            class="col-md-4"
            :key="stream.id"
            :stream="stream"
            v-for="stream in offlineStreams"
          ></stream-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import StreamCard from '@/components/Streams/StreamCard'

export default {
  layout: 'page',

  components: { StreamCard },

  data: () => ({
    streams: [],
  }),

  head: () => ({
    title: 'Live | Lausanne eSports',
    meta: [
      { hid: 'description', name: 'description', content: 'Liste des lives' },
    ],
  }),

  async asyncData ({ $axios }) {
    try {
      const streams = await $axios.$get('/streams')

      return { streams }
    } catch(e) {}
  },

  computed: {
    onlineStreams () {
      return this.streams.filter(x => x.is_live === true)
    },

    offlineStreams () {
      return this.streams.filter(x => x.is_live === false)
    },
  },
}
</script>

<style lang="scss">
@import '~assets/sass/pages/page.scss';
</style>
