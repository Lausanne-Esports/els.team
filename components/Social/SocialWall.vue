<template>
  <div class="social-wall">
    <div class="head d-flex mb-4 justify-content-between">
      <div class="d-flex">
        <h2>Réseaux sociaux</h2>
      </div>
      <!--<a class="read-more">Plus d'images <i class="icon-arrow-right" /></a>-->
    </div>

    <div class="posts">
      <a class="post facebook" href="https://www.facebook.com/lausanneesports" target="blank" aria-label="Page Facebook du Lausanne eSports">
        <span><i class="icon-facebook" /></span>
      </a>
      <a class="post dark-blue" href="https://www.instagram.com/p/BjSIbA1ADsE/" target="blank" aria-label="Page Instagram du Lausanne eSports">
        <span v-lazy:background-image="'/images/ig/2.jpg'" />
      </a>
      <a class="post twitter" href="https://twitter.com/lausanneesports" target="blank" aria-label="Page Twitter du Lausanne eSports">
        <span><i class="icon-twitter" /></span>
      </a>
      <a class="post w-double dark-blue" href="https://www.instagram.com/p/BjbsTp9gxTk/" target="blank" aria-label="Page Instagram du Lausanne eSports">
        <span v-lazy:background-image="'/images/ig/1.jpg'" />
      </a>
      <a class="post w-double dark-blue" href="https://www.instagram.com/p/BjN2D0vgBYE/" target="blank" aria-label="Page Instagram du Lausanne eSports">
        <span v-lazy:background-image="'/images/ig/3.jpg'" />
      </a>
      <a class="post youtube" href="https://www.youtube.com/channel/UCt0kuaKzKcuWH8AnMzkvRFg" target="blank" aria-label="Chaîne Youtube du Lausanne eSports">
        <span><i class="icon-youtube" /></span>
      </a>
      <a class="post twitch" href="https://www.twitch.tv/lausannetv" target="blank" aria-label="Chaîne Twitch du Lausanne eSports">
        <span><i class="icon-twitch" /></span>
      </a>
      <a class="post dark-blue" href="https://www.instagram.com/p/BkXQj31gXUF/" target="blank" aria-label="Page Instagram du Lausanne eSports">
        <span v-lazy:background-image="'/images/ig/4.jpg'" />
      </a>
      <a class="post dark-blue" href="https://www.instagram.com/p/Bi6ddSWg7HX/" target="blank" aria-label="Page Instagram du Lausanne eSports">
        <span v-lazy:background-image="'/images/ig/5.jpg'" />
      </a>
      <a class="post discord" href="https://discord.gg/RZPDWSe" target="blank" aria-label="Serveur Discord du Lausanne eSports">
        <span><i class="icon-discord" /></span>
      </a>
      <a class="post w-double dark-blue" href="https://www.instagram.com/p/BhleP40AWvM/" target="blank" aria-label="Page Instagram du Lausanne eSports">
        <span v-lazy:background-image="'/images/ig/6.jpg'" />
      </a>
      <a class="post steam" href="https://steamcommunity.com/groups/lausanne_esports" target="blank" aria-label="Groupe Steam du Lausanne eSports">
        <span><i class="icon-steam" /></span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
  },
  components: {
  },
  methods: {
  },
}
</script>
