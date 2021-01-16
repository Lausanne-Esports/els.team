<template>
  <div class="col-md-4">
    <nuxt-link :to="`/staff/${staff.id}-${sluggifiedName}`">
      <div :class="`lineup-card staff`">
        <div class="bg-image"></div>
        <div class="body">
          <div class="players">{{ nbPlayers }}</div>
          <h2>{{ staff.name }}</h2>
          <p class="read-more">En savoir plus <i class="icon-arrow-right" /></p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import slug from '@slynova/slug'

export default {
  props: ['staff'],

  computed: {
    sluggifiedName () {
      return slug(this.staff.name)
    },
    nbPlayers () {
      return `${this.staff.numberOfPlayers} joueur${this.staff.numberOfPlayers > 1 ? "s" : ""}`
    }
  },
}
</script>
