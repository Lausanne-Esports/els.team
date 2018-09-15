<template>
  <article class="single">
    <header class="d-flex align-items-end">
      <div class="image-head" :style="{ backgroundImage: 'url(' + article.thumbnail + ')' }" />
      <div class="container">
        <p class="category"><i :class="'icon-' + category.code" /> {{ category.name }}</p>
        <h1>{{ translation.headline }}</h1>
        <p class="sub-title" v-if="translation.subtitle">{{ translation.subtitle }}</p>
        <p class="date">{{ article.published_at }}</p>
      </div>
    </header>
    <div class="socials d-flex align-items-center">
      <div class="container">
        <i class="icon-share" />
        <a href="#" target="blank"><i class="icon-twitter" /></a>
        <a href="#" target="blank"><i class="icon-facebook" /></a>
        <a href="#" target="blank"><i class="icon-reddit" /></a>
      </div>
    </div>
    <div class="container body">
      <div class="row">
        {{ article }}
        <div class="col-md-10 offset-md-1" v-html="translation.body"></div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  layout: 'article',
  components: {

  },
  data () {
    return {
      article: {},
      categories: {},
    }
  },
  async asyncData({ params, error, $axios }) {
    try {
      const [id, slug] = params.id.split('-');

      const categories = await $axios.$get('articles/categories');
      const article = await $axios.$get('/articles/' + id);

      return { article, categories };
    } catch(e) {
      error({ message: 'Article not found', statusCode: 404 });
    }
  },
  computed: {
    translation () {
      return this.article.translations.find(t => t.language_id === 1)
    },
    category () {
      return this.categories.find(c => c.id === this.article.category_id)
    },
  }
}
</script>

<style lang="scss">
  @import '~/assets/sass/pages/article.scss';
</style>
