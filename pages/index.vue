<template>
  <section id="headlines-wrapper" class="wrapper dark-blue">
    <els-headline />

  </section>
</template>

<script>
import Headline from '~/components/Headline'

export default {
  layout: 'default',
  components: {
    'els-headline': Headline,
  },
}
</script>

<style>
</style>
