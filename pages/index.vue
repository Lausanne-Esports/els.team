<template>
  <div>
    <els-headline />
    <els-last-matchs />
  </div>
</template>

<script>
import Headline from '~/components/Headline'
import LastMatchs from '~/components/Match/LastMatchs'

export default {
  layout: 'default',
  components: {
    'els-headline': Headline,
    'els-last-matchs': LastMatchs,
  },
}
</script>

<style>
</style>
