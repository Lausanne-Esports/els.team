<template>
  <section class="page">
    <header class="d-flex align-items-end">
      <div class="image-head" :style="{ backgroundImage: 'url(~/assets/images/header_lu.jpg)' }" />
      <div class="container">
        <h1>Toutes les news</h1>
      </div>
    </header>
    <div class="container body">
      <categories-filter :categories="categories" @select="categoryChanged"></categories-filter>

      <div class="row articles">
        <article-card class="col-md-4" :key="article.id" :article="article" v-for="article in articles"></article-card>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleCard from '../../components/Article/ArticleCard'
import CategoriesFilter from '../../components/Article/Categories/CategoriesFilter'

export default {
  layout: 'article',
  components: {
    ArticleCard,
    CategoriesFilter
  },
  data () {
    return {
      articles: [],
      categories: [],
    }
  },
  async asyncData ({ query, error, $axios }) {
    try {
      let articles = null;

      if(query.filter) {
        articles = await $axios.$get('/articles?filter=' + query.filter);
      } else {
        articles = await $axios.$get('/articles');
      }

      const categories = await $axios.$get('/articles/categories');

      return { articles, categories };
    } catch(e) {
      //console.log(e);
    }
  },
  methods: {
    async categoryChanged(category) {
      this.articles = await this.$axios.$get('/articles?filter=' + category);
    }
  },
  watch: {
    '$route': function(newValue) {
      this.categoryChanged(newValue.query.filter);
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/sass/pages/page.scss';
  @import '~/assets/sass/pages/article.scss';
</style>
