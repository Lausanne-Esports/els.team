<template>
  <article>
    <nuxt-link :to="url" class="article">
      <div class="category">
        <i :class="'icon-' + category.code" /> {{ category.name }}
      </div>
      <div class="thumbnail" v-lazy:background-image="thumbnail" />
      <section class="body">
        <div class="title">
          <h3>{{ translation.headline }}</h3>
          <p class="date"><DateTime :time="published_at" /></p>
        </div>
        <p class="read-more">Lire l'article <i class="icon-arrow-right" /></p>
      </section>
    </nuxt-link>
  </article>
</template>

<script>
import slug from "@slynova/slug";
import DateTime from "@/components/Common/DateTime.vue";

export default {
  props: ["article"],
  components: { DateTime },
  computed: {
    category() {
      return this.$store.state.articleCategories[this.article.category_id];
    },

    url() {
      return `/articles/${this.article.id}-${slug(this.translation.headline)}`;
    },

    translation() {
      return this.article.translations.find(t => t.code === "fr");
    },

    thumbnail() {
      return this.article.thumbnail || "/images/header_bg.jpg";
    },

    published_at() {
      return this.article.published_at.split(" ")[0];
    }
  }
};
</script>
