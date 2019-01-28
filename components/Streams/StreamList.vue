<template>
  <div
    class="row"
    v-if="filtredStreams.length > 0"
  >
    <stream-card
      class="col-md-4"
      :key="stream.id"
      :stream="stream"
      v-for="stream in filtredStreams"
    ></stream-card>
  </div>
  <div v-else>
    {{ noStreamMessage }}
  </div>
</template>

<script>
import StreamCard from '@/components/Streams/StreamCard'

export default {
  props: {
    streams: {
      type: Array,
      required: true,
    },
    online: {
      type: Boolean,
      required: false,
      default: true,
    },
    limit: {
      type: Number,
      required: false,
      default: 0,
    }
  },

  components: {
    StreamCard
  },

  computed: {
    filtredStreams () {
      var streams = this.streams
        .filter(x => x.is_live === this.online)
        .sort((a, b) => b.viewers - a.viewers)

      if(this.limit !== 0)
        streams = streams.slice(0, this.limit)

      return streams;
    },
    noStreamMessage() {
      if(this.online)
        return 'Aucun stream est en ligne';
      else
        return 'Aucun stream est hors ligne';
    }
  }
}
</script>

