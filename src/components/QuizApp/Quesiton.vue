<script setup lang="ts">
import {ref, watch} from "vue";
import {useQuizStore} from "@/stores/quizStore.ts"

const quizStore = useQuizStore();
const questionNumber = ref()
const question = ref()
console.log("Question: ",quizStore.questions);
watch(()=>quizStore.currentIndex, () => {
  questionNumber.value = quizStore.currentIndex
  question.value = quizStore.questions[quizStore.currentIndex].text
console.log("quizStore.currentIndex : ",quizStore.currentIndex);
}, {immediate: true})

</script>

<template>
  <div
    style="border: 2px solid; user-select: none; border-radius: 15px; margin-top: 2%;  padding: 4%">
    <p>{{ questionNumber + 1 }}-) {{ question }}</p>
  </div>
</template>
