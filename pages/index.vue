<template>
  <div>
    <!-- Headline -->
    <section id="headlines-wrapper" class="wrapper dark-blue">
      <div class="headlines container d-flex">
        <featured-article></featured-article>
      </div>
    </section>

    <!-- Articles Section -->
    <section class="wrapper light pt-5">
      <div class="articles container">
        <div class="head d-flex justify-content-between">
          <h2>News</h2>
          <nuxt-link to="/articles" class="read-more">Toutes les news <i class="icon-arrow-right" /></nuxt-link>
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

    <!-- Advertisements -->
    <!--<advertisement-block></advertisement-block>-->

    <section class="wrapper dark-blue pt-5 pb-5">
      <div class="container">
        <div class="head d-flex justify-content-between">
          <h2>Lives</h2>
          <nuxt-link to="/streams" class="read-more">Tous les lives <i class="icon-arrow-right" /></nuxt-link>
        </div>
        <div class="row mt-3">
          <stream-card
            class="col-md-4"
            :key="stream.id"
            :stream="stream"
            v-for="stream in onlineStreams"
          ></stream-card>
        </div>
      </div>
    </section>

    <!-- Social Wall -->
    <section class="wrapper light pt-5 pb-5">
      <div class="container">
        <social-wall></social-wall>
      </div>
    </section>
  </div>
</template>

<script>
import SocialWall from '@/components/Social/SocialWall'
import ArticleCard from '@/components/Article/ArticleCard'
import FeaturedArticle from '@/components/Article/FeaturedArticle'
import FeaturedArticleCard from '@/components/Article/FeaturedArticleCard'
import AdvertisementBlock from '@/components/Advertisement/AdvertisementBlock'
import StreamCard from '@/components/Streams/StreamCard'


export default {
  layout: 'home',

  scrollToTop: true,

  components: {
    ArticleCard,
    FeaturedArticle,
    FeaturedArticleCard,
    SocialWall,
    StreamCard
  },

  data: () => ({
    lastArticle: {},
    articles: [],
    streams: [],
  }),

  async asyncData ({ $axios }) {
    const [lastArticle, ...articles] = await $axios.$get('/articles?limit=5')
    const streams = await $axios.$get('/streams');

    return { articles, lastArticle, streams }
  },

  computed: {
    onlineStreams() {
      return this.streams.filter(x => x.is_live == true).sort((a, b) => b.viewers - a.viewers).slice(0,3);
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/core/variables.scss';

#headlines-wrapper {
  padding-top: 290px;
  position: relative;
}

.headlines {
  position: absolute;
  top: -250px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  height: $lg-headlines-block-height;
}

@media screen and (max-width: 768px) {
  #headlines-wrapper {
    margin-bottom: 0px;
    padding: 80px;
  }

  .headlines {
    top: -120px;
    height: $sm-headlines-block-height;
  }
}
</style>
