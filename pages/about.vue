<template>
  <article class="single">
    <header class="d-flex align-items-end">
      <div
        class="image-head"
        v-lazy:background-image="'/images/header_lu.jpg'"
      />
      <div class="container">
        <h1>A propos</h1>
        <p class="sub-title">Qu'est-ce que le Lausanne-Sport Esports ?</p>
      </div>
    </header>

    <div class="container body">
      <p>Nous sommes le Lausanne-Sport Esport, une association à but non lucratif évoluant dans le monde de l’esport suisse depuis le 6 avril 2017.</p>

      <p>Avant de s’allier avec le FC Lausanne-Sport, notre association se nommait Qualitas Helvetica. Celle-ci a été créée le 1er août 2015, avec à sa tête notre président actuel, Frédéric «Torrix» Boy. Par la suite, deux anciennes associations ont rejoint nos rangs : la Team Evenfall en août 2018 et Night Saber en février 2019. Aujourd’hui, nous sommes l’un des clubs les plus titrés de Suisse, avec plus de 150 podiums sur dix jeux différents !</p>

      <p>Nous avons pour ambition de promouvoir, dynamiser et professionnaliser l’esport en Suisse, ainsi que de remporter des tournois nationaux et internationaux. Nous faisons tout notre possible pour qu’un jour, l’esport soit une discipline reconnue dans le paysage helvétique.</p>

      <figure class="wild">
        <img v-lazy="`https://i.imgur.com/Ge0FVPf.jpg`" alt="Polylan 29">
        <figcaption>L'équipe Overwatch Pachimari gagnant la Polylan 29</figcaption>
      </figure>

      <p>Pour accéder à ce but, nous organisons des tournois pour aider la scène à grandir et nous formons la jeunesse en offrant la meilleure structure possible du pays à nos joueurs talentueux qui sont pour la plupart romands ou suisses. Des talents étrangers complètent parfois nos équipes afin de nous apporter expertise et expérience.</p>

      <p>En complément à notre activité sur la scène esportive, nous réalisons et diffusons du contenu lors d’évènements, et produisons des talkshows sur notre chaîne Twitch «Lausanne TV».</p>

      <p>Tout cela serait bien évidemment impossible sans l’aide de nos nombreux bénévoles ; psychologues, rédacteurs, community managers, coaches, staffs événementiel, designers, développeurs web, photographes et monteurs vidéos qui nous aident et tirent à la même corde dans un but commun.</p>

      <p>Mais ce n’est pas tout ! En effet, nous sommes également impliqués dans des actions caritatives. Grâce à notre collaboration avec Zoé4Life, nous sommes fiers d’avoir organisé des événements ayant pour but de lever des fonds pour une cause nous tenant à cœur. En 2020, nous avons récolté plus de 6300 francs pour la lutte contre le cancer de l’enfant !</p>
    
      <p>Sans partenaire ou sponsors, un club esportif ne pourrait tout simplement pas exister. Merci bien évidemment au FC Lausanne-Sport avec qui nous sommes en étroite collaboration. La marque Andros qui nous permet d’être vitaminés depuis 2018 ! Et finalement, le Casino Barrière qui nous aide lors de nos événements.</p>
    
      <p>
        Si vous souhaitez nous contacter, l’onglet
        <nuxt-link to="/contact">contact</nuxt-link>
        sur le haut de notre site internet est fait pour vous. Vous pouvez aussi nous rejoindre sur
        <a href="https://discord.gg/TUrQwaTMhQ" target="_blank" rel="nofollow noopener noreferrer">Discord</a>,
        notre communauté vous attend avec impatience !
        </p>
    </div>
  </article>
</template>

<script>
export default {
  layout: 'page',

  scrollToTop: true,

  head: () => ({
    title: 'A Propos | Lausanne Esports',
    meta: [
      { hid: 'description', name: 'description', content: `Qu'est-ce que le Lausanne-Sport Esports ?` }
    ],
  }),
}
</script>
