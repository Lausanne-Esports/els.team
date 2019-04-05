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
