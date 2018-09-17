<template>
  <section class="wrapper darker-blue pt-5 pb-5">
    <div class="container sponsors d-sm-flex justify-content-center align-items-center">
      <a href="#" target="blank"><img src="~/assets/images/sponsors/andros.svg"></a>
      <a href="#" target="blank"><img src="~/assets/images/sponsors/barriere.svg"></a>
      <a href="#" target="blank"><img src="~/assets/images/sponsors/eizo.svg"></a>
      <a href="#" target="blank"><img src="~/assets/images/sponsors/tcm.svg"></a>
      <a href="#" target="blank"><img src="~/assets/images/sponsors/slynova.svg"></a>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  @import '~/assets/sass/core/variables.scss';
  .sponsors {
    img {
      margin: 0px 50px;
      width: 150px;
    }
  }

  @media screen and (max-width: 768px) {
    .sponsors {
      text-align: center;

      a:last-of-type {
        img {
          margin-bottom: 0px;
        }
      }

      img {
        display: inline-block;
        margin-bottom: 30px;
      }

    }
  }
</style>

