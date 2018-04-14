<template>
  <div class="featured-article col-md-9" style="background-image: url(https://i.imgur.com/Ltfi60M.jpg);">
    <div class="infos">
      <p class="category mb-0"><i class="icon-overwatch" /> Résultats</p>
      <h2>Les skins de l'Overwatch League débarquent</h2>
      <a href="#" class="read-more mb-0">Lire l'article <i class="icon-arrow-right" /></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~/assets/sass/core/variables.scss';

  .featured-article {
    background-color: $white;
    background-size: cover;
    position: relative;
  }

  .infos {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    padding-top: 60px;
    padding-left: 50px;
    padding-bottom: 50px;
    text-transform: uppercase;
    background-image: linear-gradient(15deg, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0) 65%);
  }

  .category {
    font-weight: bold;
    font-size: 12px;
    color: $blue;

    i {
      margin-right: 5px;
      font-size: 18px;
      color: $white;
      vertical-align: middle;
    }
  }

  h2 {
    padding-right: 20%;
    color: $white;
    font-size: 32px;
    font-style: italic;
  }

  .read-more {
    font-weight: bold;
    color: $white;

    i {
      margin-left: 5px;
      font-size: 24px;
      color: $blue;
      vertical-align: sub;
    }
  }
</style>
