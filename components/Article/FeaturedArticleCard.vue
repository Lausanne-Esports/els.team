<template>
  <article>
    <nuxt-link :to="featured.link" class="article featured">
      <div
        class="thumbnail"
        :style="{ backgroundImage: 'url(' + featured.thumbnail + ')' }"
      />
      <section class="body">
        <div class="title">
          <div class="category"><i :class="'icon-' + featured.icon" /> {{ featured.category.name }}</div>
          <h3>{{ featured.title }}</h3>
          <p class="date">{{ featured.date }}</p>
        </div>
        <p class="read-more">Lire l'article <i class="icon-arrow-right" /></p>
      </section>
    </nuxt-link>
  </article>
</template>

<script>
import slug from '@slynova/slug'

export default {
  props: ['featured'],

  computed: {
    url () {
      return `/articles/${this.article.id}-${slug(this.translation.headline)}`
    },

    translation () {
      return this.article.translations.find(t => t.language.code === 'fr')
    },
  },
}
</script>
