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
        <stream-list :streams="streams" :online="true" class="mt-3"></stream-list>
      </div>
    </section>
    <section class="wrapper darker-blue pt-5 pb-5">
      <div class="container streams">
        <div class="head d-flex">
          <h2>Hors ligne</h2>
        </div>
        <stream-list :streams="streams" :online="false" class="mt-3"></stream-list>
      </div>
    </section>
  </div>
</template>

<script>
import StreamList from '@/components/Streams/StreamList'

export default {
  layout: 'page',

  components: { StreamList },

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
}
</script>
