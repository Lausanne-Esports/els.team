<template>
  <div class="twitter-feed col-md-3 p-0">
    <div class="title">
      <i class="icon-twitter" /> Flux twitter
    </div>

    <els-twitter-post
      v-for="tweet in tweets"
      :key="tweet.id"
      :user="tweet.user"
      :date="tweet.date"
      :text="tweet.text"
    />

    <div class="pagination">
      <div class="item current" />
      <div class="item" />
      <div class="item" />
    </div>
  </div>
</template>

<script>
import TwitterPost from './TwitterPost.vue'

export default {
  components: {
    'els-twitter-post': TwitterPost,
  },
  data () {
    return {
      tweets: [
        {
          id: 1,
          user: '@lausanne_esports',
          date: '16 jan 2018 13:37',
          text: 'Bonjour ceci est un tweet de test #integration',
        },
        {
          id: 2,
          user: '@lausanne_esports',
          date: '15 jan 2018 13:37',
          text: 'Deuxième test!',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '~/assets/sass/variables.scss';

  .twitter-feed {
    position: relative;
    background: $white;
  }

  .title {
    background: $blue;
    height: 80px;
    line-height: 80px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    color: $white;

    i {
      margin-right: 5px;
      font-size: 24px;
      vertical-align: sub;
    }
  }

  .pagination {
    position: absolute;
    bottom: 30px;
    left: 0px;
    right: 0px;
    display: flex;
    justify-content: center;

    .item {
      display: block;
      margin: 0px 5px;
      width: 25px;
      height: 6px;
      background: $light-blue-gray;

      &.current {
        background: $blue;
      }
    }
  }
</style>

