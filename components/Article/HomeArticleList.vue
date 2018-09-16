<template>
  <section class="wrapper light pt-5">
    <div class="articles container">
      <div class="head d-flex justify-content-between">
        <h2>News</h2>
        <a class="read-more">Toutes les news <i class="icon-arrow-right" /></a>
      </div>
      <div class="row mt-3">
        <div class="col-md-4 ">
          <featured-article-card v-if="featured" :article="featured"></featured-article-card>
        </div>
        <div class="col-md-8">
          <div class="row">
            <article-card class="col-md-6" :key="article.id" :article="article" v-for="article in articles"></article-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FeaturedArticleCard from './FeaturedArticleCard'
import ArticleCard from './ArticleCard'

export default {
  components: {
    ArticleCard,
    FeaturedArticleCard
  },

  data: () => ({
    articles: [],
  }),

  async created () {
    try {
    this.articles = await this.$axios.$get('/articles?limit=4')
    } catch(e) {
      //console.log(e);
    }
  },

  computed: {
    featured() {
        return this.articles[0];
    }
  },
}
</script>
