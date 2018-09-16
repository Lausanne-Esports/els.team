<template>
  <article class="single">
    <header class="d-flex align-items-end">
      <div class="image-head" :style="{ backgroundImage: 'url(' + thumbnail + ')' }" />
      <div class="container">
        <p class="category"><i :class="'icon-' + article.category.code" /> {{ article.category.name }}</p>
        <h1>{{ article.headline }}</h1>
        <p class="sub-title" v-if="article.subtitle">{{ article.subtitle }}</p>
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
        <div class="col-md-10 offset-md-1" v-html="article.body"></div>
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
    }
  },
  async asyncData({ params, error, $axios }) {
    try {
      const [id, slug] = params.id.split('-');

      const article = await $axios.$get('/articles/' + id + "?lang=fr");

      return { article };
    } catch(e) {
      error({ message: 'Article not found', statusCode: 404 });
    }
  },
  computed: {
    thumbnail() {
      return this.article.thumbnail || '~/assets/images/header_bg.jpg';
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/sass/pages/article.scss';
</style>
