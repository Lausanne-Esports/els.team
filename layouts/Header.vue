<template>
  <header class="main">
    <div class="nav-bar">
      <div class="container d-flex justify-content-between">
        <nav class="top-nav">
          <a href="#">Accueil</a>
          <a href="#">News</a>
          <a href="#">Résultats</a>
          <div class="sub-menu">
            <a href="#">League of Legends</a>
            <a href="#">Overwatch</a>
            <a href="#">Rocket League</a>
            <a href="#">Fifa</a>
          </div>
          <a href="#">Structure</a>
          <a href="#">Palmarès</a>
          <a href="#">Médias</a>
          <a href="#">Contact</a>
        </nav>
        <nav class="lang-nav">
          <a href="#">FR</a> / <a href="#">EN</a>
        </nav>
      </div>
    </div>
    <a href="/" class="logo mx-auto">
      <img src="~/assets/images/logo.png">
    </a>
  </header>
</template>

<style lang="scss" scoped>
  @import '~/assets/sass/variables.scss';

  .main {
    background: url('~/assets/images/header_bg.jpg') top center;
    background-size: cover;
    height: 800px;
  }

  .nav-bar {
    background: $dark-blue;
    border-top: 5px solid $blue;
  }

  .logo {
    display: block;
    margin: 0 auto;
    margin-top: 150px;
    width: 500px;

    img {
      height: auto;
      width: 100%;
    }
  }

  .top-nav, .lang-nav {
    height: 80px;

    a {
      color: $dark-purple-blue;
      display: inline-block;
      height: 80px;
      line-height: 80px;
      font-style: italic;
      font-weight: bold;
      font-size: 14px;
      padding: 0px 20px;
      text-transform: uppercase;
      transition: 0.3s all;

      &:hover, &.current {
        color: $white;
      }
    }

    .sub-menu {
      display: none;
    }
  }

  .lang-nav {
    a {
      padding: 0 3px;
      font-weight: normal;

      &.current {
        font-weight: bold;
        color: $blue;
      }
    }
  }
</style>

