<template>
  <section id="headlines-wrapper" class="wrapper dark-blue">
    <div class="headlines container d-flex">
      <els-featured-article />
    </div>

    <els-twitter-feed />
  </section>
</template>

<script>
import TwitterFeed from './Twitter/TwitterFeed.vue'
import FeaturedArticle from './Article/FeaturedArticle.vue'

export default {
  components: {
    'els-twitter-feed': TwitterFeed,
    'els-featured-article': FeaturedArticle,
  },
}
</script>


<style lang="scss" scoped>
  @import '~/assets/sass/variables.scss';

  #headlines-wrapper {
    padding-top: 290px;
    position: relative;
  }

  .headlines {
    position: absolute;
    top: -200px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    height: $lg-headlines-block-height;
  }
</style>

