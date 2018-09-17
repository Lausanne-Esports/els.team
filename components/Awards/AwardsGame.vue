<template>
  <div class="award-game">
    <div class="header">
      <h2><i :class="'icon-' + game.code"></i> {{ game.name }}</h2>
      <div class="picture" :class="game.code"></div>
    </div>
    <div class="awards">
      <award-item :award="award" v-for="award in game.awards" :key="award.name"></award-item>
    </div>
  </div>
</template>

<script>
import AwardItem from '@/components/Awards/AwardItem';

export default {
  props: ['game'],
  components: { AwardItem }
}
</script>

