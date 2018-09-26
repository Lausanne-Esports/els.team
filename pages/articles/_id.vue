<template>
  <article class="single">
    <header class="d-flex align-items-end">
      <div
        class="image-head"
        v-lazy:background-image="thumbnail"
      />
      <div class="container">
        <p class="category"><i :class="'icon-' + article.category.code" /> {{ article.category.name }}</p>
        <h1>{{ article.headline }}</h1>
        <p class="sub-title" v-if="article.subtitle">{{ article.subtitle }}</p>
        <p class="date">{{ published_at }}</p>
      </div>
    </header>
    <div class="action-bar d-flex align-items-center">
      <div class="container d-flex">
        <div class="socials">
          <i class="icon-share" />
          <a :href="twitterShareUrl" target="_blank"><i class="icon-twitter" /></a>
          <a :href="facebookShareUrl" target="_blank"><i class="icon-facebook" /></a>
          <a href="#" target="_blank"><i class="icon-reddit" /></a>
        </div>

        <div class="lang-menu" v-if="article.translations.length > 0">
          <nuxt-link :to="frUrl" :class="{ current: lang=='fr'}">fr</nuxt-link> / <nuxt-link :to="enUrl" :class="{ current: lang=='en'}">en</nuxt-link>
        </div>
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
  layout: 'page',

  scrollToTop: true,

  data: () => ({
    article: {},
    lang: 'fr',
  }),

  head () {
    return {
      title: `${this.article.headline} | Lausanne eSports`,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `${this.article.headline} | Lausanne eSports` },
        { hid: 'og:name', property: 'og:name', content: `${this.article.headline} | Lausanne eSports` },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        { hid: 'og:image', property: 'og:image', content: this.article.featured_thumbnail },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: this.$route.path },
        { hid: 'description', name: 'description', content: this.article.description },
      ],
    }
  },

  async asyncData ({ params, query, error, $axios }) {
    try {
      const [id] = params.id.split('-')
      const lang = query.lang || 'fr'

      const article = await $axios.$get(`/articles/${id}?lang=${lang}`)

      return { article, lang }
    } catch(e) {
      error({ message: 'Article not found', statusCode: 404 });
    }
  },

  computed: {
    thumbnail () {
      return this.article.thumbnail || '/images/header_bg.jpg';
    },

    twitterShareUrl () {
      return `https://twitter.com/intent/tweet?text=${this.article.headline} https://els.team${this.$route.path}`
    },

    facebookShareUrl () {
      return `https://www.facebook.com/sharer/sharer.php?u=https://www.els.team${this.$route.path}`
    },

    frUrl () {
      return `${this.$route.path}?lang=fr`
    },

    enUrl () {
      return `${this.$route.path}?lang=en`
    },

    published_at() {
      return this.article.published_at.split(' ')[0];
    }
  },

  methods: {
    async langChanged (lang) {
      this.article = await this.$axios.$get('/articles/' + this.article.id + "?lang=" + lang);
    }
  },

  watch: {
    '$route': function(newValue) {
      this.lang = newValue.query.lang;
      this.langChanged(newValue.query.lang);
    }
  }
}
</script>

<style lang="scss">
  @import '~assets/sass/pages/article.scss';
</style>
