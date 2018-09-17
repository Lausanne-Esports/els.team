<template>
  <div class="col-md-4">
    <nuxt-link :to="`/structure/${team.id}-${team.category.code}-${sluggifiedName}`">
      <div :class="`lineup-card ${team.category.code}`">
        <div class="bg-image"></div>
        <div class="body">
          <div class="players">{{ team.numberOfPlayers }} joueurs</div>
          <h2>{{ team.name }} <small v-if="team.academy">(Académie)</small></h2>
          <p class="read-more">En savoir plus <i class="icon-arrow-right" /></p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import slug from '@slynova/slug'

export default {
  props: ['team'],

  computed: {
    sluggifiedName () {
      return slug(this.team.name)
    },
  },
}
</script>

