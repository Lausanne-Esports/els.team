<template>
  <article>
    <nuxt-link :to="url" class="stream-card">
      <div
        class="thumbnail"
        v-if="stream.is_live"
        v-lazy:background-image="stream.preview"
      >
        <div class="viewers">{{ stream.viewers }}</div>
      </div>
      <section class="body">
        <div class="title">
          <div class="username">{{ stream.username }}</div>
          <h3 v-if="stream.is_live">{{ stream.game }}</h3>
        </div>
      </section>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: ['stream'],

  computed: {
    url () {
      return `/streams/${this.stream.id}-${this.stream.username}`
    },
  },
}
</script>

<style lang="scss">
@import '~assets/sass/core/variables.scss';
@import '~assets/sass/components/stream-card.scss';
</style>

