<template>
  <section class="wrapper darker-blue pt-5 pb-5">
    <div class="container sponsors">
      <div class="mb-5">
        <a href="https://www.andros.ch/" target="blank" class="main"><img src="~assets/images/sponsors/andros.svg" alt="Andros"></a>
        <a href="https://www.casinosbarriere.com/fr/montreux.html" target="blank" class="main"><img src="~assets/images/sponsors/barriere.svg" alt="Casino Barrière"></a><br />
      </div>
      <div>
        <a href="http://gaming.eizo.com/" target="blank"><img src="~assets/images/sponsors/eizo.svg" alt="EIZO Gaming"></a>
        <a href="http://tech-center.ch/" target="blank"><img src="~assets/images/sponsors/tcm.svg" alt="Tech-Center"></a>
        <a href="https://slynova.ch/" target="blank"><img src="~assets/images/sponsors/slynova.svg" alt="Slynova"></a>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  @import '~assets/sass/core/variables.scss';
  .sponsors {
    text-align: center;
    a {
      display: inline-block;
      margin: 0px 30px;
      margin-bottom: 30px;
      width: 150px;

      &.main {
        width: 300px;
      }
    }

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    .sponsors {
      text-align: center;

      a:last-of-type {
        margin-bottom: 0px;
      }

      img {
        display: inline-block;
        margin-bottom: 30px;
      }
    }
  }
</style>

