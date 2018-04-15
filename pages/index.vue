<template>
  <div>
    <els-headline />
    <els-last-matchs />
    <els-article-list />
  </div>
</template>

<script>
import Headline from '~/components/Headline'
import LastMatchs from '~/components/Match/LastMatchs'
import ArticleList from '~/components/Article/ArticleList'

export default {
  layout: 'default',
  components: {
    'els-headline': Headline,
    'els-last-matchs': LastMatchs,
    'els-article-list': ArticleList,
  },
}
</script>

<style>
</style>
