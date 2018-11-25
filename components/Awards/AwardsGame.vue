<template>
  <div class="award-game">
    <div class="header" @click="toggleList">
      <h2><i :class="'icon-' + game.code"></i> {{ game.name }}</h2>
      <div class="picture" :class="game.code"></div>
    </div>
    <div ref="list" class="awards" :class="{ open }">
      <award-item :award="award" v-for="(award, index) in game.awards" :key="index"></award-item>
      <div class="more" @click="toggleList">En voir plus</div>
    </div>
  </div>
</template>

<script>
import AwardItem from '@/components/Awards/AwardItem';

export default {
  props: ['game'],
  data() {
    return {
      open: false,
      hasMore: true,
    }
  },
  components: { AwardItem },
  mounted() {
    if(this.$refs.list.scrollHeight <= this.$refs.list.clientHeight) {
      this.open = true;
      this.hasMore = false;
    }
  },
  methods: {
    toggleList() {
      if(!this.hasMore)
        return;

      if (this.$refs.list.style.maxHeight){
        this.$refs.list.style.maxHeight = null;
        this.open = false;
      } else {
        this.$refs.list.style.maxHeight = this.$refs.list.scrollHeight + "px";
        this.open = true;
      }
    }
  }
}
</script>

