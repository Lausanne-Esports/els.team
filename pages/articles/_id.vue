<template>
  <article class="single">
    <header class="d-flex align-items-end">
      <div class="image-head" :style="{ backgroundImage: 'url(' + article.imageHead + ')' }" />
      <div class="container">
        <p class="category"><i :class="'icon-' + article.icon" /> {{ article.category.name }}</p>
        <h1>{{ article.title }}</h1>
        <p class="sub-title">{{ article.subTitle }}</p>
        <p class="date">04 Mai 2018 à 13h37</p>
      </div>
    </header>
    <div class="socials d-flex align-items-center">
      <div class="container">
        <i class="icon-share" />
        <a href="#" target="blank"><i class="icon-twitter" /></a>
        <a href="#" target="blank"><i class="icon-facebook" /></a>
        <a href="#" target="blank"><i class="icon-reddit" /></a>
      </div>
    </div>
    <div class="container body">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <p class="headline">Donec ornare nec dolor id mattis. Maecenas a molestie justo, quis laoreet tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et velit a quam congue consectetur ut nec neque. Donec blandit mi felis, ac viverra erat ultricies eget. In hac habitasse platea dictumst. Nam ut convallis nisl, at fermentum odio. Cras pretium nisl at congue rutrum. Pellentesque ut augue velit. Cras vel augue massa. Sed rutrum, erat quis volutpat finibus, lacus arcu sodales turpis, ut imperdiet purus urna in sem. Vivamus sed velit tristique, tempor elit viverra, tincidunt orci. Vivamus eget mi mattis elit pellentesque varius ac in augue. Mauris nisl enim, posuere eget tincidunt eu, tincidunt sagittis dolor.</p>
          <h2>H2 Title</h2>
          <p>Morbi tristique, velit vel elementum dictum, mi risus dapibus est, pharetra elementum quam ante et purus. In quis efficitur nisi. Aenean nec tristique leo. Nulla sit amet leo ultricies, bibendum massa a, pellentesque purus. Cras a turpis volutpat libero dapibus convallis vitae at massa. Fusce condimentum non ante non tristique. Nullam sed finibus dui. Mauris maximus placerat libero, vel blandit odio bibendum at. Aliquam ac dictum tortor, eget tristique diam.</p>
          <p>Sed non nisi ligula. Quisque commodo massa justo, sit amet luctus elit euismod quis. Suspendisse finibus urna neque, ut viverra turpis porttitor sed. Phasellus tempus fermentum lectus ac commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum in condimentum eros. Sed ultricies volutpat risus, ac gravida mauris dignissim id. Curabitur sollicitudin porta nisl, ac congue lorem faucibus at. Etiam egestas at lacus vitae scelerisque. Donec sollicitudin odio non pretium consectetur. Aenean tristique facilisis venenatis. Aenean sem velit, efficitur vel elit a, luctus laoreet mi. Donec suscipit ac ante sed pellentesque. Duis maximus risus felis, eget vulputate dolor volutpat eget.</p>
          <blockquote>Nulla eu condimentum nulla. Quisque suscipit convallis dui aliquam pretium. Ut at congue orci, non suscipit odio. Donec placerat ultrices orci vel tristique. Nunc nec purus mattis, mattis est vel, tincidunt enim. Maecenas lacus arcu, sollicitudin at tellus eu, commodo sodales erat.</blockquote>
          <p>Sed maximus ac nibh tincidunt malesuada. Quisque pharetra arcu eleifend rutrum maximus. Proin luctus ligula vel diam hendrerit, ut egestas magna egestas. Nullam egestas hendrerit ante, tincidunt varius dolor mollis ac. Sed auctor enim nisl, non efficitur nisi ultricies eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <h3>H3 Title</h3>
          <div class="question">Vestibulum a rhoncus turpis, quis luctus libero ?</div>
          <div class="answer show">Vivamus egestas risus ligula, sit amet finibus leo efficitur accumsan. Proin sed sodales turpis. Nunc tristique ligula justo, id congue diam tempor id. Ut tortor dui, egestas vitae molestie eget, maximus eu ante. Etiam libero magna, congue in nibh egestas, bibendum placerat ex.</div>
          <div class="question">Vestibulum a rhoncus turpis, quis luctus libero ?</div>
          <div class="answer">Vivamus egestas risus ligula, sit amet finibus leo efficitur accumsan. Proin sed sodales turpis. Nunc tristique ligula justo, id congue diam tempor id. Ut tortor dui, egestas vitae molestie eget, maximus eu ante. Etiam libero magna, congue in nibh egestas, bibendum placerat ex.</div>
          <div class="question">Vestibulum a rhoncus turpis, quis luctus libero ?</div>
          <div class="answer">Vivamus egestas risus ligula, sit amet finibus leo efficitur accumsan. Proin sed sodales turpis. Nunc tristique ligula justo, id congue diam tempor id. Ut tortor dui, egestas vitae molestie eget, maximus eu ante. Etiam libero magna, congue in nibh egestas, bibendum placerat ex.</div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  layout: 'article',
  components: {

  },
  data () {
    return {
      article: {
        title: 'Swiss eSports League',
        subTitle: 'Deuxième week-end',
        date: '04 Mai 2018 à 13h37',
        thumbnail: 'https://i.imgur.com/SClWgHk.jpg',
        imageHead: 'https://i.imgur.com/SClWgHk.jpg',
        category: {
          id: 1,
          slug: 'resultats',
          name: 'Résultats',
        },
        icon: 'overwatch',
      },
    }
  },
}
</script>

<style lang="scss">
  @import '~/assets/sass/pages/article.scss';
</style>
