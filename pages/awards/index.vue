<template>
  <section class="page">
    <header class="d-flex align-items-end">
      <div
        class="image-head"
        v-lazy:background-image="'/images/header_lu.jpg'"
      />
      <div class="container">
        <h1>Nos meilleures performances</h1>
        <p class="sub-title">Palmarès du Lausanne-Sport eSports</p>
      </div>
    </header>

    <div class="container body">
      <div class="row">
        <div class="col-md-6" v-for="game in games" :key="game.code">
          <awards-game :game="game"></awards-game>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AwardsGame from '@/components/Awards/AwardsGame'

export default {
  layout: 'page',

  scrollToTop: true,

  components: { AwardsGame },

  data: () => ({
    games: [
    {
      name: 'Hearthstone',
      code: 'hs',
      awards: [
        {
          result: 1,
          name: 'KFStone #8',
          lineup: 'Bozo',
          year: 2019
        },
        {
          result: 3,
          name: 'KFStone #8',
          lineup: 'Dokhan',
          year: 2019
        },
        {
          result: 3,
          name: 'ArmaCup All-Stars',
          lineup: 'Hypno',
          year: 2019
        },
        {
          result: 3,
          name: 'HCT Oslo',
          lineup: 'Hypno',
          year: 2018
        },
        {
          result: 1,
          name: 'QwertzStone de Noël',
          lineup: 'Hypno',
          year: 2018
        },
        {
          result: 1,
          name: 'SESL Fall Season',
          lineup: 'Bozo',
          year: '2018'
        },
        {
          result: 2,
          name: 'SESL Fall Season',
          lineup: 'younTheory',
          year: '2018'
        },
        {
          result: 1,
          name: 'SwitzerLAN',
          lineup: 'KarpetMan',
          year: '2018'
        },
        {
          result: 1,
          name: 'QwertzStone Édition Noël',
          lineup: 'Bozo',
          year: '2018'
        },
        {
          result: 1,
          name: 'SESL Spring Season',
          lineup: 'Bozo',
          year: '2018'
        },
        {
          result: 3,
          name: 'SESL Spring Season',
          lineup: 'Hypno',
          year: '2018'
        },
        {
          result: 1,
          name: 'Garden Party',
          lineup: 'Bozo',
          year: '2018'
        },
        {
          result: 1,
          name: 'G4 2018',
          lineup: 'Hypno',
          year: '2018'
        },
        {
          result: 6,
          name: 'Gamers Assembly',
          lineup: 'younTheory',
          year: '2018'
        },
        {
          result: 1,
          name: 'ArmaCup Février',
          lineup: 'Hypno',
          year: '2018'
        },
        {
          result: 2,
          name: 'Gaming WinterFest',
          lineup: 'Bozo',
          year: '2018'
        },
        {
          result: 3,
          name: 'Swiss Nationals (Prefire Season #1)',
          lineup: 'Hypno',
          year: '2017'
        },
        {
          result: 2,
          name: 'SwitzerLAN',
          lineup: 'Hypno',
          year: '2017'
        },
        {
          result: 3,
          name: 'Geneva Gaming Convention',
          lineup: 'younTheory',
          year: '2017'
        },
        {
          result: 4,
          name: 'Gamers Assembly',
          lineup: 'younTheory',
          year: '2017'
        },
        {
          result: 8,
          name: 'Gamers Assembly',
          lineup: 'Hypno',
          year: '2017'
        },
        {
          result: 3,
          name: 'QwertzStone Season #1',
          lineup: 'younTheory',
          year: '2017'
        },
        {
          result: 2,
          name: 'G4 Lan',
          lineup: 'Hypno',
          year: '2017'
        },
        {
          result: 3,
          name: 'G4 Lan',
          lineup: 'younTheory',
          year: '2017'
        },
        {
          result: 1,
          name: 'Swiss IeSF Qualifier',
          lineup: 'younTheory',
          year: '2016'
        },
        {
          result: 1,
          name: 'Geneva Gaming Convention',
          lineup: 'Bozo',
          year: '2016'
        },
        {
          result: 6,
          name: 'Dreamhack FR',
          lineup: 'Larssonax',
          year: '2016'
        },
        {
          result: 1,
          name: 'PolyLAN',
          lineup: 'Bozo',
          year: '2016'
        },
        {
          result: 1,
          name: 'Swiss IeSF Qualifier',
          lineup: 'younTheory',
          year: '2015'
        }
      ]
    },
    {
      name: 'League of Legends',
      code: 'lol',
      awards: [
        {
          result: 1,
          name: 'SESL Winter Season',
          lineup: 'eLS.Indigo',
          year: 2019
        },
        {
          result: 3,
          name: 'SESL Fall Season',
          lineup: 'eLS.Indigo',
          year: '2018'
        },
        {
          result: 2,
          name: 'SwitzerLAN',
          lineup: 'eLS.Indigo',
          year: '2018'
        },
        {
          result: 3,
          name: 'PolyLAN #31',
          lineup: 'eLS.Indigo',
          year: '2018'
        },
        {
          result: 2,
          name: 'King Of Nordic',
          lineup: 'eLS.Navy',
          year: '2017'
        },
        {
          result: 1,
          name: 'Swiss Nationals (Prefire Season #2)',
          lineup: 'eLS.Navy',
          year: '2017'
        },
        {
          result: 2,
          name: 'Zurich Game Show',
          lineup: 'eLS.Navy',
          year: '2017'
        },
        {
          result: 1,
          name: 'Swiss Masters',
          lineup: 'eLS.Navy',
          year: '2017'
        },
        {
          result: 1,
          name: 'Logitech Autumn Cup',
          lineup: 'eLS.Navy',
          year: '2017'
        },
        {
          result: 2,
          name: 'SwitzerLAN',
          lineup: 'eLS.Navy',
          year: '2017'
        },
        {
          result: 3,
          name: 'Geneva Gaming Convention',
          lineup: 'eLS.Navy',
          year: '2017'
        },
        {
          result: 1,
          name: 'Swiss IeSF Qualifier',
          lineup: 'eLS.Navy',
          year: '2017'
        },
        {
          result: 1,
          name: 'Prefire Season #1',
          lineup: 'eLS.Navy',
          year: '2017'
        },
        {
          result: 1,
          name: 'GGC Online',
          lineup: 'eLS.Navy',
          year: '2017'
        },
        {
          result: 1,
          name: 'EEvent',
          lineup: 'eLS.Navy',
          year: '2017'
        },
        {
          result: 1,
          name: 'Swiss SMP Invitational',
          lineup: 'eLS.Navy',
          year: '2017'
        },
        {
          result: 1,
          name: 'Swiss Gaming Challenge',
          lineup: 'eLS.Navy',
          year: '2017'
        },
        {
          result: 1,
          name: 'PolyLAN',
          lineup: 'eLS.Navy',
          year: '2017'
        },
      ]
    },
    {
      name: 'Overwatch',
      code: 'ow',
      awards: [
        {
          result: 3,
          name: 'SESL Fall Season',
          lineup: 'eLS.Pachimari',
          year: '2018'
        },
        {
          result: 2,
          name: 'SwitzerLAN',
          lineup: 'eLS.Pachimari',
          year: '2018'
        },
        {
          result: 3,
          name: 'SESL Winter Season',
          lineup: 'eLS.Pachimari',
          year: '2018'
        },
        {
          result: 1,
          name: 'ChablaisLAN',
          lineup: 'eLS.Pachimari',
          year: '2018'
        },
        {
          result: 3,
          name: 'SESL Spring Season',
          lineup: 'eLS.Pachimari',
          year: '2018'
        },
        {
          result: 2,
          name: 'Swiss Gaming Challenge',
          lineup: 'eLS.Pachimari',
          year: '2018'
        },
        {
          result: 2,
          name: 'Polylan #31',
          lineup: 'eLS.Pachimari',
          year: '2018'
        },
        {
          result: 1,
          name: 'Swiss Nationals (Prefire Season #2)',
          lineup: 'eLS.Pachimari',
          year: '2017'
        },
        {
          result: 4,
          name: 'Bâloise International Gaming Show #1',
          lineup: 'eLS.Pachimari',
          year: '2017'
        },
        {
          result: 3,
          name: 'Zurich Game Show',
          lineup: 'eLS.Pachimari',
          year: '2017'
        },
        {
          result: 3,
          name: 'SwitzerLAN',
          lineup: 'eLS.Pachimari',
          year: '2017'
        },
        {
          result: 1,
          name: 'OservCup',
          lineup: 'eLS.Pachimari',
          year: '2017'
        },
        {
          result: 2,
          name: 'Geneva Gaming Convention',
          lineup: 'eLS.Pachimari',
          year: '2017'
        },
        {
          result: 2,
          name: 'GGC Online',
          lineup: 'eLS.Pachimari',
          year: '2017'
        },
        {
          result: 1,
          name: 'Swiss Gaming Challenge',
          lineup: 'eLS.Pachimari',
          year: '2017'
        },
        {
          result: 1,
          name: 'Polylan #29',
          lineup: 'eLS.Pachimari',
          year: '2017'
        }
      ]
    },
    {
      name: 'Counter-Strike',
      code: 'csgo',
      awards: [
        {
          result: 1,
          name: 'Geneva Gaming Convention',
          lineup: 'eLS.Pulse',
          year: '2016'
        },
        {
          result: 4,
          name: 'Swiss Nationals (NetGame)',
          lineup: 'eLS.Pulse',
          year: '2015'
        },
        {
          result: 4,
          name: 'SwitzerLAN',
          lineup: 'eLS.Pulse',
          year: '2015'
        },
      ]
    },
    {
      name: 'Rocket League',
      code: 'rl',
      awards: [
        {
          result: 1,
          name: 'SESL Winter Season',
          lineup: 'eLS.Aurora',
          year: 2019
        },
        {
          result: 3,
          name: 'TCS Esports League',
          lineup: 'eLS.Aurora',
          year: '2018'
        },
        {
          result: 2,
          name: 'SESL Fall Season',
          lineup: 'eLS.Aurora',
          year: '2018'
        },
        {
          result: 1,
          name: 'SwitzerLAN',
          lineup: 'eLS.Aurora',
          year: '2018'
        },
        {
          result: 1,
          name: 'RLRS Qualifier',
          lineup: 'eLS.Aurora',
          year: '2018'
        },
        {
          result: 1,
          name: 'Colosseum Qualifier',
          lineup: 'eLS.Aurora',
          year: '2018'
        },
        {
          result: 2,
          name: 'PolyLAN #31',
          lineup: 'eLS.Aurora',
          year: '2018'
        },
        {
          result: 2,
          name: 'Geneva Gaming Convention',
          lineup: 'eLS.InFlames',
          year: '2017'
        },
        {
          result: 2,
          name: 'Prefire Cup',
          lineup: 'eLS.Kiss',
          year: '2017'
        },
        {
          result: 2,
          name: 'GGC Online',
          lineup: 'eLS.Kiss',
          year: '2017'
        },
        {
          result: '3-4',
          name: 'Swiss Gaming Challenge',
          lineup: 'eLS.Kiss',
          year: '2017'
        },
        {
          result: 2,
          name: 'PolyLAN',
          lineup: 'eLS.Kiss',
          year: '2017'
        },
      ]
    },
    {
      name: 'FIFA',
      code: 'fifa',
      awards: [
        {
          result: 2,
          name: 'SFCO #4',
          lineup: 'AimNight',
          year: 2019
        },
        {
          result: 2,
          name: 'SFCO 2vs2 #2',
          lineup: 'AimNight & Mathieu',
          year: '2018'
        },
        {
          result: 1,
          name: 'IGS Series #1',
          lineup: 'AdiSS',
          year: '2018'
        },
        {
          result: 3,
          name: 'IGS Series #1',
          lineup: 'LoNe_LiNe',
          year: '2018'
        },
        {
          result: 3,
          name: 'Bâloise International Gaming Show #2',
          lineup: 'AimNight',
          year: '2018'
        },
        {
          result: 3,
          name: 'SFCO #1',
          lineup: 'AimNight',
          year: '2018'
        },
      ],
    },
    {
      name: 'Ring of Elysium',
      code: 'roe',
      awards: [
        {
          result: 2,
          name: 'Coupe de France #1',
          lineup: 'Ring of Elysium',
          year: 2019,
        },
      ],
    },
    {
      name: 'Super Smash Bros',
      code: 'smash',
      awards: [
        {
          result: 2,
          name: 'UltiMelt #10',
          lineup: 'MonkeySike',
          year: 2019
        },
        {
          result: 2,
          name: 'Japan Impact Sunday\'s Tournament',
          lineup: 'MonkeySike',
          year: 2019
        },
        {
          result: 3,
          name: 'Japan Impact Sunday\'s Tournament',
          lineup: 'Fabien',
          year: 2019
        },
        {
          result: 2,
          name: 'UltiMelt #8',
          lineup: 'Fabien',
          year: 2019,
        },
      ],
    }
  ]}),

  head: () => ({
    title: 'Palmarès | Lausanne Esports',
    meta: [
      { hid: 'description', name: 'description', content: 'Palmarès du Lausanne Esports' },
    ],
  }),
}
</script>

<style lang="scss">
  @import '~assets/sass/pages/page.scss';
  @import '~assets/sass/components/awards.scss';
</style>
