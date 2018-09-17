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
      <form @submit.prevent="sendEmail" method="POST" class="form-contact">
        <div class="form-input">
          <label>Titre :</label>
          <input type="text" name="title" v-model="form.title">
        </div>
        <div class="form-input">
          <label>Email :</label>
          <input type="email" name="email" v-model="form.email">
        </div>
        <div class="form-input">
          <label>Message :</label>
          <textarea name="message" rows="20" v-model="form.message"></textarea>
        </div>
        <div class="form-input">
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import swal from 'sweetalert'

export default {
  layout: 'page',

  data: () => ({
    form: {
      title: null,
      email: null,
      message: null,
    },
  }),

  methods: {
    async sendEmail () {
      try {
        this.$axios.$post('contact', this.form)
        this.form = { title: null, email: null, message: null }
        swal({ text: 'Votre message a été envoyé !', icon: 'success' })
      } catch (e) {
        swal({ text: 'Une erreur est survenue :(', icon: 'error' })
      }
    }
  },
}
</script>

<style lang="scss">
@import "~/assets/sass/pages/page.scss";
@import "~/assets/sass/pages/contact.scss";
</style>
