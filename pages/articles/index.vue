<template>
  <section class="page">
    <header class="d-flex align-items-end">
      <div class="image-head" :style="{ backgroundImage: 'url(~assets/images/header_lu.jpg)' }" />
      <div class="container">
        <h1>Toutes les news</h1>
      </div>
    </header>
    <div class="container body">
      <categories-filter :categories="categories" @categoryChanged="selectCategory"></categories-filter>

      <div class="row articles">
        <article-card
          class="col-md-4"
          :key="article.id"
          :article="article"
          v-for="article in filteredArticles"
        ></article-card>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleCard from '@/components/Article/ArticleCard'
import CategoriesFilter from '@/components/Article/Categories/CategoriesFilter'

export default {
  layout: 'page',

  components: { ArticleCard, CategoriesFilter },

  data: () => ({
    articles: [],
    categories: [],
    selectedCategory: null,
  }),

  head: () => ({
    title: 'Articles | Lausanne eSports',
    meta: [
      { hid: 'description', name: 'description', content: 'Liste des articles' },
    ],
  }),

  async asyncData ({ query, error, $axios }) {
    try {
      const [articles, categories] = await Promise.all([
        $axios.$get('/articles'),
        $axios.$get('/articles/categories'),
      ])

      return { articles, categories }
    } catch(e) {
    }
  },

  computed: {
    filteredArticles () {
      if (!this.selectedCategory) {
        return this.articles
      }

      return this.articles.filter(article => (
        article.category.code === this.selectedCategory.code
      ))
    }
  },

  methods: {
    selectCategory (category) {
      this.selectedCategory = category
    },
  },
}
</script>

<style lang="scss">
  @import '~assets/sass/pages/page.scss';
  @import '~assets/sass/pages/article.scss';
</style>
