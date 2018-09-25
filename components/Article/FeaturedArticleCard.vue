<template>
  <article>
    <nuxt-link :to="url" class="article featured">
      <div
        class="thumbnail"
        v-lazy:background-image="thumbnail"
      />
      <section class="body">
        <div class="title">
          <div class="category"><i :class="'icon-' + article.category.code" /> {{ article.category.name }}</div>
          <h3>{{ translation.headline }}</h3>
          <p class="date">{{ published_at }}</p>
        </div>
        <p class="read-more">Lire l'article <i class="icon-arrow-right" /></p>
      </section>
    </nuxt-link>
  </article>
</template>

<script>
import slug from '@slynova/slug'

export default {
  props: ['article'],

  computed: {
    url () {
      return `/articles/${this.article.id}-${slug(this.translation.headline)}`
    },

    translation () {
      return this.article.translations.find(t => t.language.code === 'fr')
    },

    thumbnail() {
      return this.article.thumbnail || '~assets/images/header_bg.jpg';
    },
    published_at() {
      return this.article.published_at.split(' ')[0];
    }
  },
}
</script>
