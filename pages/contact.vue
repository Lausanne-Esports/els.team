<template>
  <section class="page">
    <header class="d-flex align-items-end">
      <div class="image-head" :style="{ backgroundImage: 'url(~/assets/images/header_lu.jpg)' }" />
      <div class="container">
        <h1>Contact</h1>
        <p class="sub-title">Envie de nous dire quelque chose ?</p>
      </div>
    </header>

    <div class="container body">
      <form action="#" method="POST" class="form-contact">
        <div class="form-input">
          <label>Titre :</label>
          <input type="text" name="title">
        </div>
        <div class="form-input">
          <label>Email :</label>
          <input type="email" name="email">
        </div>
        <div class="form-input">
          <label>Message :</label>
          <textarea name="message" rows="20"></textarea>
        </div>
        <div class="form-input">
          <button type="submit" class="">Envoyer</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  layout: "page",

  components: {},

  data: () => ({
    teams: []
  })
};
</script>

<style lang="scss">
@import "~/assets/sass/pages/page.scss";
@import "~/assets/sass/pages/contact.scss";
</style>
