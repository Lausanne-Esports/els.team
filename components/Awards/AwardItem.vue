<template>
  <div class="award-item d-flex align-items-center">
    <div class="result top1" v-if="award.result == 1"><i class="icon-trophy"></i></div>
    <div class="result top2" v-else-if="award.result == 2"><i class="icon-trophy"></i></div>
    <div class="result top3" v-else-if="award.result == 3"><i class="icon-trophy"></i></div>
    <div class="result" v-else>{{ award.result }}</div>
    <div class="infos">
      <h3 class="name">{{ award.name }}</h3>
      <p class="lineup">{{ award.lineup }}</p>
      <p class="year">{{ award.year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['award']
}
</script>

