<template>
  <div class="social-wall">
    <div class="head d-flex mb-4 justify-content-between">
      <div class="d-flex">
        <h2>Réseaux sociaux</h2>
      </div>
      <!--<a class="read-more">Plus d'images <i class="icon-arrow-right" /></a>-->
    </div>

    <div class="posts">
      <a class="post facebook" href="https://www.facebook.com/lausanneesports" target="blank">
        <span><i class="icon-facebook" /></span>
      </a>
      <a class="post dark-blue" href="https://www.instagram.com/p/BjSIbA1ADsE/" target="blank">
        <span
          style="background-image: url(/images/ig/2.jpg);"
        />
      </a>
      <a class="post twitter" href="https://twitter.com/lausanneesports" target="blank">
        <span><i class="icon-twitter" /></span>
      </a>
      <a class="post w-double dark-blue" href="https://www.instagram.com/p/BjbsTp9gxTk/" target="blank">
        <span
          style="background-image: url(/images/ig/1.jpg);"
        />
      </a>
      <a class="post w-double dark-blue" href="https://www.instagram.com/p/BjN2D0vgBYE/" target="blank">
        <span
          style="background-image: url(/images/ig/3.jpg);"
        />
      </a>
      <a class="post youtube" href="https://www.youtube.com/channel/UCt0kuaKzKcuWH8AnMzkvRFg" target="blank">
        <span><i class="icon-youtube" /></span>
      </a>
      <a class="post twitch" href="https://www.twitch.tv/lausannetv" target="blank">
        <span><i class="icon-twitch" /></span>
      </a>
      <a class="post dark-blue" href="https://www.instagram.com/p/BkXQj31gXUF/" target="blank">
        <span
          style="background-image: url(/images/ig/4.jpg);"
        />
      </a>
      <a class="post dark-blue" href="https://www.instagram.com/p/Bi6ddSWg7HX/" target="blank">
        <span
          style="background-image: url(/images/ig/5.jpg);"
        />
      </a>
      <a class="post discord" href="https://discord.gg/RZPDWSe" target="blank">
        <span><i class="icon-discord" /></span>
      </a>
      <a class="post w-double dark-blue" href="https://www.instagram.com/p/BhleP40AWvM/" target="blank">
        <span
          style="background-image: url(/images/ig/6.jpg);"
        />
      </a>
      <a class="post steam" href="https://steamcommunity.com/groups/lausanne_esports" target="blank">
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

        &.youtube {
          background: #ff0000;
        }

        &.twitch {
          background: #6441A4;
        }

        &.twitter {
          background: #4AB3F4;
        }

        &.facebook {
          background: #4267b2;
        }

        &.steam {
          background: #171a21;
        }

        &.discord {
          background: #7289da;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {

    .social-wall {
      .posts {
        .post {
          i {
            font-size: 32px;
          }
        }
      }
    }

  }
</style>
