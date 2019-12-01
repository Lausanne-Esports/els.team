<template>
  <div class="award-game">
    <div class="header" @click="toggleList">
      <h2>
        <i :class="'icon-' + game.code"></i>
        {{ game.name }}
      </h2>
      <div class="picture" :class="game.code"></div>
    </div>
    <div ref="list" class="awards" :class="{ open }">
      <award-item :award="award" v-for="(award, index) in sortedAwards" :key="index"></award-item>
      <div class="more" @click="toggleList">En voir plus</div>
    </div>
  </div>
</template>

<script>
import AwardItem from "@/components/Awards/AwardItem";

export default {
  props: ["game"],

  components: { AwardItem },

  data: () => ({
    open: false,
    hasMore: true
  }),

  mounted() {
    if (this.$refs.list.scrollHeight <= this.$refs.list.clientHeight) {
      this.open = true;
      this.hasMore = false;
    }
  },

  computed: {
    sortedAwards() {
      return this.game.awards.slice().sort((a, b) => {
        if (Number(a.year) > Number(b.year)) return -1;
        if (Number(a.year) < Number(b.year)) return 1;

        if (a.order > b.order) return 1;
        if (a.order < b.order) return -1;
      });
    }
  },

  methods: {
    toggleList() {
      if (!this.hasMore) {
        return;
      }

      if (this.$refs.list.style.maxHeight) {
        this.$refs.list.style.maxHeight = null;
        this.open = false;
      } else {
        this.$refs.list.style.maxHeight = this.$refs.list.scrollHeight + "px";
        this.open = true;
      }
    }
  }
};
</script>

