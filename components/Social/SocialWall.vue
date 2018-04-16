<template>
  <div class="social-wall">
    <div class="head d-flex mb-4 justify-content-between">
      <div class="d-flex">
        <h2>Réseaux sociaux</h2>
      </div>
      <a class="read-more">Plus d'images <i class="icon-arrow-right" /></a>
    </div>

    <div class="posts">
      <a class="post" href="#" target="blank">
        <span><i class="icon-facebook" /></span>
      </a>
      <a class="post dark-blue" href="#" target="blank">
        <span
          style="background-image: url(https://instagram.fgva1-1.fna.fbcdn.net/vp/abbafabe200e2a77974c1b27e69afc9c/5B666F3E/t51.2885-15/e35/30078887_194086307984180_550220945961254912_n.jpg);"
        />
      </a>
      <a class="post dark-blue" href="#" target="blank">
        <span><i class="icon-twitter" /></span>
      </a>
      <a class="post w-double dark-blue" href="#" target="blank">
        <span
          style="background-image: url(https://instagram.fgva1-1.fna.fbcdn.net/vp/efb9ae7f241785a2d9644b74c637c6f4/5B5B92E2/t51.2885-15/e35/29717771_2090492021165456_1375851837940301824_n.jpg);"
        />
      </a>
      <a class="post w-double dark-blue" href="#" target="blank">
        <span
          style="background-image: url(https://instagram.fgva1-1.fna.fbcdn.net/vp/efb9ae7f241785a2d9644b74c637c6f4/5B5B92E2/t51.2885-15/e35/29717771_2090492021165456_1375851837940301824_n.jpg);"
        />
      </a>
      <a class="post white" href="#" target="blank">
        <span><i class="icon-youtube" /></span>
      </a>
      <a class="post" href="#" target="blank">
        <span><i class="icon-twitch" /></span>
      </a>
      <a class="post dark-blue" href="#" target="blank">
        <span
          style="background-image: url(https://instagram.fgva1-1.fna.fbcdn.net/vp/abbafabe200e2a77974c1b27e69afc9c/5B666F3E/t51.2885-15/e35/30078887_194086307984180_550220945961254912_n.jpg);"
        />
      </a>
      <a class="post dark-blue" href="#" target="blank">
        <span
          style="background-image: url(https://instagram.fgva1-1.fna.fbcdn.net/vp/abbafabe200e2a77974c1b27e69afc9c/5B666F3E/t51.2885-15/e35/30078887_194086307984180_550220945961254912_n.jpg);"
        />
      </a>
      <a class="post" href="#" target="blank">
        <span><i class="icon-discord" /></span>
      </a>
      <a class="post w-double dark-blue" href="#" target="blank">
        <span
          style="background-image: url(https://instagram.fgva1-1.fna.fbcdn.net/vp/efb9ae7f241785a2d9644b74c637c6f4/5B5B92E2/t51.2885-15/e35/29717771_2090492021165456_1375851837940301824_n.jpg);"
        />
      </a>
      <a class="post dark-blue" href="#" target="blank">
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

<style lang="scss" scoped>
  @import '~/assets/sass/core/variables.scss';

  .social-wall {
    .posts {
      overflow: hidden;

      .post {
        position: relative;
        display: block;
        float: left;
        padding-top: (100% / 5);
        width: (100% / 5);
        text-align: center;
        color: $white;
        background: $blue;

        span {
          position: absolute;
          display: flex;
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 0px;
          justify-content: center;
          align-items: center;
          background-size: 100%;
          background-position: center;
          transition: 0.3s all;
        }

        i {
          font-size: 55px;
          transition: 0.3s all;
        }

        &:hover {
          span {
            background-size: 103%;
          }

          i {
            transform: scale(1.1);
          }
        }

        &.w-double {
          width: (100% / 5) * 2;
        }

        &.white {
          color: $blue;
          background: $white;
        }

        &.dark-blue {
          background: $dark-blue;
        }
      }
    }
  }
</style>
