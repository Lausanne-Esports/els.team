<template>
  <section class="page">
    <header class="d-flex align-items-end">
      <div class="image-head" v-lazy:background-image="'/images/header_lu.jpg'" />
      <div class="container">
        <h1>Nos meilleures performances</h1>
        <p class="sub-title">Palmarès du Lausanne-Sport eSports</p>
      </div>
    </header>

    <div class="container body">
        <template v-for="year in sortedAwardsPerYearAndCagetory">
          <h3 :key="`${year}-title`">{{ year }}</h3>
          <div :key="`${year}-row`" class="row">
            <div class="col-md-6" v-for="game in awardPerYearAndCagetory[year]" :key="game.code">
              <awards-game :game="game"></awards-game>
            </div>
          </div>
      </template>
    </div>
  </section>
</template>

<script>
import AwardsGame from "@/components/Awards/AwardsGame";

export default {
  layout: "page",

  scrollToTop: true,

  components: { AwardsGame },

  data: () => ({
    awardPerYearAndCagetory: [],
    categoryOrder: [],
  }),

  async asyncData({ $axios }) {
    const [awards, categoryOrder] = await Promise.all([
      $axios.$get("awards"),
      $axios.$get('awards/categories/order')
    ])

    console.log(categoryOrder)

    const awardPerYearAndCagetory = awards.reduce((agg, award) => {
      if (!agg[award.year]) {
        agg[award.year] = []
      }

      const index = agg[award.year].findIndex(
        awardPerCategory => awardPerCategory.code === award.category.code
      );

      if (index === -1) {
        agg[award.year].push({
          name: award.category.name,
          code: award.category.code,
          order: categoryOrder.find(c => c.year === award.year && c.category_id === award.category.id).order,
          awards: [award]
        });

        return agg;
      }

      agg[award.year][index].awards.push(award);
      return agg;
    }, {});

    Object.keys(awardPerYearAndCagetory).forEach(key => {
      awardPerYearAndCagetory[key].sort((a, b) => a.order - b.order)
    })

    return { awardPerYearAndCagetory, categoryOrder };
  },

  computed: {
    sortedAwardsPerYearAndCagetory () {
     return Object.keys(this.awardPerYearAndCagetory).sort((a, b) => b - a)
    }
  },

  head: () => ({
    title: "Palmarès | Lausanne Esports",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Palmarès du Lausanne Esports"
      }
    ]
  })
};
</script>

<style lang="scss">
@import "~assets/sass/pages/page.scss";
@import "~assets/sass/components/awards.scss";
</style>
