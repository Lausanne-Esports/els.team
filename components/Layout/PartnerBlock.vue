<template>
  <section class="wrapper darker-blue pt-5 pb-5">
    <div class="partners container">
      <div>
        <a href="https://www.andros.ch/" target="blank" class="main"><img v-lazy="'/images/partners/andros.svg'" alt="Andros"></a>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  @import '~assets/sass/core/variables.scss';
  .partners {
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
    .partners {
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
