<template>
  <footer class="wrapper dark-blue pt-5 pb-5">
    <div class="container">
      <div class="d-md-flex justify-content-between">
        <div class="infos">
          <img v-lazy="'/images/logo_footer.png'" class="mb-3" alt="">
          <p class="els">Lausanne-Sport<br>
            eSports</p>
          <p>Frédéric Boy<br>
            Stade de la Tuilière<br>
            1018 Lausanne - Suisse / Vaud</p>
        </div>
        <nav class="footer-nav">
          <nuxt-link to="/">Accueil</nuxt-link>
          <nuxt-link to="/articles">News</nuxt-link>
          <nuxt-link to="/structure">Structure</nuxt-link>
          <nuxt-link to="/awards">Palmarès</nuxt-link>
          <nuxt-link to="/streams">Lives</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link>
          <nuxt-link to="/about">A Propos</nuxt-link>
        </nav>
        <div class="socials">
          <h4>Réseaux sociaux</h4>
          <a href="https://www.facebook.com/lausanneesports" target="blank" aria-label="Page Facebook du Lausanne eSports"><i class="icon-facebook" /> Facebook</a>
          <a href="https://twitter.com/lausanneesports" target="blank" aria-label="Page Twitter du Lausanne eSports"><i class="icon-twitter" /> Twitter</a>
          <a href="https://www.youtube.com/channel/UCt0kuaKzKcuWH8AnMzkvRFg" target="blank" aria-label="Chaîne Youtube du Lausanne eSports"><i class="icon-youtube" /> Youtube</a>
          <a href="https://www.twitch.tv/lausannetv" target="blank" aria-label="Chaîne Twitch du Lausanne eSports"><i class="icon-twitch" /> Twitch</a>
          <a href="https://discord.gg/RZPDWSe" target="blank" aria-label="Serveur Discord du Lausanne eSports"><i class="icon-discord" /> Discord</a>
          <a href="https://steamcommunity.com/groups/lausanne_esports" target="blank" aria-label="Groupe Steam du Lausanne eSports"><i class="icon-steam" /> Steam</a>
        </div>
        <div class="sesf align-md-self-end">
          <img v-lazy="'/images/sesf.png'" alt="Swiss Esports Federation Logo">
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  a {
    color: #a5a5a5 !important;
  }

  .els {
    color: #1f8cfe !important;
  }
</style>

