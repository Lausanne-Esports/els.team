<template>
  <div>
    <els-headline />
    <els-last-matchs />
    <els-home-article-list />
  </div>
</template>

<script>
import Headline from '~/components/Headline'
import LastMatchs from '~/components/Match/LastMatchs'
import HomeArticleList from '~/components/Article/HomeArticleList'

export default {
  layout: 'default',
  components: {
    'els-headline': Headline,
    'els-last-matchs': LastMatchs,
    'els-home-article-list': HomeArticleList,
  },
}
</script>

<style>
</style>
