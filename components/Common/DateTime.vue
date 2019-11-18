<template>
  <span class="font-variant-numeric">{{ formatedTime }}</span>
</template>

<script>
import { parseISO, format } from "date-fns";

const DateTime = {
  name: "DateTime",

  props: {
    format: {
      type: String,
      required: false,
      default: "dd.MM.yyyy"
    },
    time: {
      type: String,
      required: true
    }
  },

  computed: {
    formatedTime() {
      const parsedDate = parseISO(this.time);
      return format(parsedDate, this.format);
    }
  }
};

export default DateTime;
</script>
