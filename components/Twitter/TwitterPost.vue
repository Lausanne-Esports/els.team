<template>
  <a href="#" target="_blank" class="twitter-feed-item">
    <div class="infos">
      <div>
        <p class="user">{{ user }}</p>
        <p class="date">{{ date }}</p>
      </div>
      <i class="icon-link" />
    </div>
    <div class="body">
      <p>{{ text }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
