<template>
  <div>
    <els-headline />
    <els-last-matchs />
    <els-home-article-list />
    <section class="wrapper light pt-5 pb-5">
      <div class="container">
        <els-social-wall />
      </div>
    </section>
  </div>
</template>

<script>
import Headline from '~/components/Headline'
import LastMatchs from '~/components/Match/LastMatchs'
import HomeArticleList from '~/components/Article/HomeArticleList'
import SocialWall from '~/components/Social/SocialWall'

export default {
  layout: 'default',
  components: {
    'els-headline': Headline,
    'els-last-matchs': LastMatchs,
    'els-home-article-list': HomeArticleList,
    'els-social-wall': SocialWall,
  },
}
</script>

<style>
</style>
