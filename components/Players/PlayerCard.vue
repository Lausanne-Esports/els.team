<template>
  <div class="player-card">
    <div class="picture">
      <img :src="player.picture" />
    </div>
    <div class="body">
      <label>Nom / Pseudo</label>
      <div class="fullname">{{ player.firstname }} {{ player.lastname }}</div>
      <h2>{{ player.username }}</h2>
      <label>Rôle</label>
      <p class="role">{{ player.role }}</p>
      <div class="socials" v-if="socials">
        <a v-for="social in socials" :key="social.type" :href="social.url"><i :class="'icon-' + social.type"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['player'],

  computed: {
  },
}
</script>
