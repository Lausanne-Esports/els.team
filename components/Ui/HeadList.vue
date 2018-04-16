<template>
  <div class="head-items-selector">
    <div class="item current">{{ selectedItem.value }} <i class="icon-small-arrow-bottom" /></div>
    <div class="items-list">
      <els-head-list-item
        :value="item.value"
        :key="item.value"
        v-for="item in items"
        @item="onItemSelected" />
    </div>
  </div>
</template>
<script>
import HeadListItem from '~/components/Ui/HeadListItem.vue'

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    'els-head-list-item': HeadListItem,
  },
  data () {
    return {
      selectedItem: {
        value: 'Tout les jeux',
      },
    }
  },
  methods: {
    onItemSelected (item) {
      this.selectedItem = item
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '~/assets/sass/core/variables.scss';

  .head-items-selector {
    position: relative;
    margin-left: 5px;
    padding: 0 15px;
    font-size: 18px;
    font-style: italic;
    font-weight: bold;
    cursor: pointer;

    &:hover, &.open {
      .item {
        &.current {
          color: $dark-purple-blue;
        }
      }

      .items-list {
        visibility: visible;
        opacity: 1;
        transform: translateY(0px);
      }
    }

    .item {
      white-space: nowrap;
      color: $blue;

      &.current {
        color: $blue;

        i {
          margin-left: 5px;
        }
      }

      &:hover {
        color: $white;
      }
    }

    .items-list {
      position: absolute;
      top: 30px;
      left: 0px;
      padding: 15px;
      visibility: collapse;
      opacity: 0;
      transform: translateY(-10px);
      transition: 0.3s all;
      background: $dark-blue;
      border-radius: 3px;
      z-index: 999;
    }
  }
</style>
