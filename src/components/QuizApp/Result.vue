<script setup lang="ts">
import {ref, watch} from 'vue';
import Knob from 'primevue/knob';
import {useQuizStore} from "@/stores/quizStore.ts"

const quizStore = useQuizStore();
const score = ref();
watch(() => quizStore.currentIndex, () => {
  score.value = quizStore.currentIndex+1
},{immediate: true})
</script>
<template>
  <div class="card flex justify-center" style="user-select: none;">
    <Knob v-model="score" :step="1" :max="quizStore.questions.length"/>
  </div>
</template>

<style scoped>

</style>
