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

<style lang="scss" scoped>
  @import '~assets/sass/core/variables.scss';

  .twitter-feed-item {
    display: block;
    margin: 0px 15px;
    padding: 20px 0px;
    font-size: 14px;
    color: $black;
    border-bottom: 1px solid $gray;
  }

  p {
    margin-bottom: 0px;
  }

  .infos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    text-transform: uppercase;

    i {
      font-size: 18px;
      color: $blue;
    }
  }

  .user {
    font-weight: bold;
  }

  .date {
    font-size: 13px;
    font-weight: bold;
    color: $light-blue-gray;
  }
</style>

