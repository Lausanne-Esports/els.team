<template>
  <div
    v-if="!processingRequest"
    class="featured-article col-md-12"
    v-lazy:background-image="thumbnail"
  >
    <nuxt-link :to="url">
      <div class="infos">
        <p class="category mb-0"><i :class="`icon-${category.code}`" /> {{ category.name }}</p>
        <h2>{{ translation.headline }}</h2>
        <div href="#" class="read-more mb-0">Lire l'article <i class="icon-arrow-right" /></div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import slug from '@slynova/slug';

export default {
  data: () => ({
    processingRequest: true,
    article: {},
  }),

  async created () {
    const [article] = await this.$axios.$get('articles?filter=featured')

    this.article = article
    this.processingRequest = false
  },

  computed: {
    category () {
      return this.$store.state.articleCategories[this.article.category_id]
    },

    url () {
      return `/articles/${this.article.id}-${slug(this.translation.headline)}`
    },

    translation () {
      return this.article.translations.find(t => t.code === 'fr')
    },

    thumbnail() {
      return this.article.featured_thumbnail || '/images/header_bg.jpg';
    }
  }
}
</script>
