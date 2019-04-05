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
