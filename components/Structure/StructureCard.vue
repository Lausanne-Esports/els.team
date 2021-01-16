<template>
  <div class="col-md-4">
    <nuxt-link :to="`/structure/${team.id}-${category.code}-${sluggifiedName}`">
      <div :class="`lineup-card ${category.code}`">
        <div class="bg-image"></div>
        <div v-if="team.academy" class="academy">Académie</div>
        <div class="body">
          <div class="players">{{ nbPlayers }}</div>
          <h2>{{ category.name }}
          <span v-if="team.name" class="name"><br />{{ team.name }}</span></h2>
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

    category () {
      return this.$store.state.teamCategories[this.team.category_id]
    },
    nbPlayers () {
      return `${this.team.numberOfPlayers} joueur${this.team.numberOfPlayers > 1 ? "s" : ""}`
    }
  },
}
</script>

