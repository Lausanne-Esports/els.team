<template>
  <section id="headlines-wrapper" class="wrapper dark-blue">
    <div class="headlines container d-flex">
      <els-featured-article />
      <!-- <els-twitter-feed /> -->
    </div>
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
  @import '~/assets/sass/core/variables.scss';

  #headlines-wrapper {
    padding-top: 290px;
    position: relative;
  }

  .headlines {
    position: absolute;
    top: -120px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    height: $lg-headlines-block-height;
  }

  @media screen and (max-width: 768px) {
    #headlines-wrapper {
      padding: 60px;
    }

    .headlines {
      height: $sm-headlines-block-height;
    }
  }
</style>

