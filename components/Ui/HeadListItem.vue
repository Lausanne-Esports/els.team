<template>
  <div class="item" @click="onItemClick">{{ value }}</div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  components: {
  },
  methods: {
    onItemClick () {
      this.$emit('item', { value: this.value })
    },
  },
}
</script>
