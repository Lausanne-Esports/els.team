<template>
  <div>
    <!-- Headline -->
    <section id="headlines-wrapper" class="wrapper dark-blue">
      <div class="headlines container d-flex">
        <LazyHydrate when-idle>
          <featured-article></featured-article>
        </LazyHydrate>
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
            <LazyHydrate when-visible>
              <featured-article-card :article="lastArticle"></featured-article-card>
            </LazyHydrate>
          </div>
          <div class="col-md-8">
            <LazyHydrate when-visible>
              <div class="row">
                <article-card class="col-md-6" :key="article.id" :article="article" v-for="article in articles"></article-card>
              </div>
            </LazyHydrate>
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
        <LazyHydrate when-visible>
          <stream-list :streams="streams" :online="true" :limit="3" class="mt-3"></stream-list>
        </LazyHydrate>
      </div>
    </section>

    <!-- Social Wall -->
    <section class="wrapper light pt-5 pb-5">
      <div class="container">
        <LazyHydrate when-visible>
          <social-wall></social-wall>
        </LazyHydrate>
      </div>
    </section>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import SocialWall from '@/components/Social/SocialWall'
import StreamList from '@/components/Streams/StreamList'
import ArticleCard from '@/components/Article/ArticleCard'
import FeaturedArticle from '@/components/Article/FeaturedArticle'
import FeaturedArticleCard from '@/components/Article/FeaturedArticleCard'
import AdvertisementBlock from '@/components/Advertisement/AdvertisementBlock'

export default {
  layout: 'home',

  scrollToTop: true,

  components: {
    ArticleCard,
    FeaturedArticle,
    FeaturedArticleCard,
    SocialWall,
    StreamList,
    LazyHydrate,
  },

  data: () => ({
    lastArticle: {},
    articles: [],
    streams:[],
  }),

  async asyncData ({ $axios }) {
    const [[lastArticle, ...articles], streams] = await Promise.all([
      $axios.$get('/articles?limit=5'),
      $axios.$get('/streams')
    ])

    return { articles, lastArticle, streams }
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
