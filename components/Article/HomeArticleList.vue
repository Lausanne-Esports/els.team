<template>
  <section class="wrapper light pt-5">
    <div class="articles container">
      <div class="head d-flex justify-content-between">
        <h2>News</h2>
        <a class="read-more">Toutes les news <i class="icon-arrow-right" /></a>
      </div>
      <div class="row mt-3">
        <div class="col-md-4 ">
          <nuxt-link :to="featured.link" class="article featured">
            <div
              class="thumbnail"
              :style="{ backgroundImage: 'url(' + featured.thumbnail + ')' }"
            />
            <div class="body">
              <div class="title">
                <div class="category"><i :class="'icon-' + article.icon" /> {{ featured.category.name }}</div>
                <h3>{{ featured.title }}</h3>
                <p class="date">{{ featured.date }}</p>
              </div>
              <p class="read-more">Lire l'article <i class="icon-arrow-right" /></p>
            </div>
          </nuxt-link>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6" :key="article.id" v-for="article in articles">
              <nuxt-link :to="article.link" class="article">
                <div class="category"><i :class="'icon-' + article.icon" /> {{ article.category.name }}</div>
                <div
                  class="thumbnail"
                  :style="{ backgroundImage: 'url(' + article.thumbnail + ')' }"
                />
                <div class="body">
                  <div class="title">
                    <h3>{{ article.title }}</h3>
                    <p class="date">{{ article.date }}</p>
                  </div>
                  <p class="read-more">Lire l'article <i class="icon-arrow-right" /></p>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      articles: [
        {
          id: 1,
          title: 'Création du Darwin Project Switzerland',
          date: '22 jan 13h37',
          link: '/articles/1',
          thumbnail: 'https://i.imgur.com/SClWgHk.jpg',
          category: {
            id: 1,
            slug: 'news',
            name: 'News',
          },
          icon: 'lol',
        },
        {
          id: 2,
          title: 'Test',
          date: '22 jan 13h37',
          link: '#',
          thumbnail: 'https://i.imgur.com/pOmBLtV.jpg',
          category: {
            id: 1,
            slug: 'resultats',
            name: 'Résulstats',
          },
          icon: 'overwatch',
        },
      ],
      featured: {
        id: 1,
        title: 'Double titre national pour Lausanne-Sport eSports !',
        date: '22 jan 13h37',
        link: '#',
        thumbnail: 'https://pbs.twimg.com/media/DQJrwTxX0AAZdVK.jpg:large',
        category: {
          id: 1,
          slug: 'resultats',
          name: 'Résulstats',
        },
        icon: 'hs',
      },
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
