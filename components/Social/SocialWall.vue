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
          style="background-image: url(https://instagram.fgva1-1.fna.fbcdn.net/vp/dd06a532d2f2b22c3d0a950c661acab1/5C1D35A6/t51.2885-15/sh0.08/e35/s640x640/35616344_399165677260136_5850979873702543360_n.jpg);"
        />
      </a>
      <a class="post dark-blue" href="#" target="blank">
        <span><i class="icon-twitter" /></span>
      </a>
      <a class="post w-double dark-blue" href="#" target="blank">
        <span
          style="background-image: url(https://instagram.fgva1-1.fna.fbcdn.net/vp/dd06a532d2f2b22c3d0a950c661acab1/5C1D35A6/t51.2885-15/sh0.08/e35/s640x640/35616344_399165677260136_5850979873702543360_n.jpg);"
        />
      </a>
      <a class="post w-double dark-blue" href="#" target="blank">
        <span
          style="background-image: url(https://instagram.fgva1-1.fna.fbcdn.net/vp/dd06a532d2f2b22c3d0a950c661acab1/5C1D35A6/t51.2885-15/sh0.08/e35/s640x640/35616344_399165677260136_5850979873702543360_n.jpg);"
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
          style="background-image: url(https://instagram.fgva1-1.fna.fbcdn.net/vp/dd06a532d2f2b22c3d0a950c661acab1/5C1D35A6/t51.2885-15/sh0.08/e35/s640x640/35616344_399165677260136_5850979873702543360_n.jpg);"
        />
      </a>
      <a class="post dark-blue" href="#" target="blank">
        <span
          style="background-image: url(https://instagram.fgva1-1.fna.fbcdn.net/vp/dd06a532d2f2b22c3d0a950c661acab1/5C1D35A6/t51.2885-15/sh0.08/e35/s640x640/35616344_399165677260136_5850979873702543360_n.jpg);"
        />
      </a>
      <a class="post" href="#" target="blank">
        <span><i class="icon-discord" /></span>
      </a>
      <a class="post w-double dark-blue" href="#" target="blank">
        <span
          style="background-image: url(https://instagram.fgva1-1.fna.fbcdn.net/vp/dd06a532d2f2b22c3d0a950c661acab1/5C1D35A6/t51.2885-15/sh0.08/e35/s640x640/35616344_399165677260136_5850979873702543360_n.jpg);"
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
