<template>
  <div class="page">
    <header class="d-flex align-items-end">
      <div
        class="image-head"
        v-lazy:background-image="'/images/header_twitch.jpg'"
      />
      <div class="container">
        <h1>{{ stream.display_name }}</h1>
        <p class="sub-title">{{ stream.status }}</p>
      </div>
    </header>
    <section class="wrapper light pt-5 pb-5">
      <div class="stream" :class="{ fullscreen, container: !fullscreen }">
        <div class="row">
          <div :class="{ 'col-md-9': !fullscreen, 'col-md-10': fullscreen }">
            <div class="head d-flex justify-content-between">
              <h2>Stream</h2>
              <div class="btn-actions">
                <div class="btn-fullscreen" @click="toggleFullscreen"><i class="icon-fullscreen" /></div>
                <a class="btn-sub" v-if="stream.is_partner" :href="subUrl" target="_blank">S'abonner</a>
              </div>
            </div>
            <div class="player">
              <iframe :src="playerUrl"
                scrolling="no"
                volume="100"
                allowfullscreen="true"></iframe>
            </div>
          </div>
          <div class="chat" :class="{ 'col-md-3': !fullscreen, 'col-md-2': fullscreen }">
            <div class="head d-flex">
              <h2>Chat</h2>
            </div>
            <iframe :src="chatUrl"></iframe>
          </div>
        </div>
      </div>
    </section>
    <section class="wrapper darker-blue pt-5 pb-5">
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
  </div>
</template>

<script>
import StreamCard from '@/components/Streams/StreamCard';

export default {
  layout: 'page',

  components: { StreamCard },

  data: () => ({
    stream: {},
    streams: [],
    fullscreen: false
  }),

  head: () => ({
    title: 'Live | Lausanne eSports',
    meta: [
      { hid: 'description', name: 'description', content: 'Liste des lives' },
    ],
  }),

  async asyncData ({ params, query, error, $axios }) {
    try {
      const stream = await $axios.$get(`/streams/${params.id.split('-')[0]}`);
      const streams = await $axios.$get('/streams');

      return { stream, streams }
    } catch(e) {
    }
  },

  computed: {
    playerUrl() {
      return `https://player.twitch.tv/?channel=${this.stream.username}&muted=false`;
    },
    chatUrl() {
      return `https://www.twitch.tv/embed/${this.stream.username}/chat?darkpopout`;
    },
    subUrl() {
      return `https://www.twitch.tv/subs/${this.stream.username}`;
    },
    onlineStreams() {
      return this.streams.filter(x => x.is_live == true);
    },
    offlineStreams() {
      return this.streams.filter(x => x.is_live == false);
    }
  },

  methods: {
    toggleFullscreen() {
      this.fullscreen = !this.fullscreen;
    }
  },
}
</script>

<style lang="scss">
  @import '~assets/sass/pages/page.scss';
  @import '~assets/sass/pages/stream.scss';
</style>
