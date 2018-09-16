<template>
  <section class="wrapper light pt-5">
    <div class="articles container">
      <div class="head d-flex justify-content-between">
        <h2>News</h2>
        <a class="read-more">Toutes les news <i class="icon-arrow-right" /></a>
      </div>
      <div class="row mt-3">
        <div class="col-md-4 ">
          <featured-article-card :article="lastArticle"></featured-article-card>
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
import ArticleCard from './ArticleCard'
import FeaturedArticleCard from './FeaturedArticleCard'

export default {
  components: { ArticleCard, FeaturedArticleCard },

  data: () => ({
    lastArticle: {},
    articles: [],
  }),

  async created () {
    const [lastArticle, ...articles] = await this.$axios.$get('/articles?limit=5')

    this.lastArticle = lastArticle
    this.articles = articles
  },
}
</script>
