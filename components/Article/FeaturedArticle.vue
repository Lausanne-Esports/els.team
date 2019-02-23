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

<style lang="scss" scoped>
  @import '~assets/sass/core/variables.scss';

  .featured-article {
    background-color: $white;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .infos {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    padding-top: 60px;
    padding-left: 50px;
    padding-bottom: 50px;
    text-transform: uppercase;
    background-image: linear-gradient(15deg, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0) 65%);
  }

  .category {
    font-weight: bold;
    font-size: 12px;
    color: $blue;

    i {
      margin-right: 5px;
      font-size: 18px;
      color: $white;
      vertical-align: middle;
    }
  }

  h2 {
    padding-right: 20%;
    color: $white;
    font-size: 32px;
    font-style: italic;
  }

  .read-more {
    font-weight: bold;
    color: $white;

    i {
      margin-left: 5px;
      font-size: 24px;
      color: $blue;
      vertical-align: sub;
    }
  }

  @media screen and (max-width: 768px) {
    .infos {
      padding-left: 30px;
      padding-bottom: 30px;
      background-image: linear-gradient(15deg, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 90%);
    }

    h2 {
      font-size: 22px;
    }
  }
</style>
