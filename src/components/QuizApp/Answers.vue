<script setup lang="ts">
import {useQuizStore} from "@/stores/quizStore.ts"
import {ref, watch} from "vue";

const quizStore = useQuizStore();
const answers = ref([])
const questionNumber = ref()

watch(() => quizStore.currentIndex, () => {
  answers.value = quizStore.questions[quizStore.currentIndex].options
  questionNumber.value = quizStore.currentIndex+1
}, {immediate: true})
</script>

<template>
  <div class="answers-grid">
    <div
      v-for="(answer, index) in answers"
      :key="index"
      class="answer-option"
     :class ="{
      correct: quizStore.selected==index && quizStore.questions[quizStore.currentIndex].correct==index,
      incorrect: quizStore.selected==index && quizStore.questions[quizStore.currentIndex].correct!=index
     }"
      @click="quizStore.selectAnswer(index)">
      {{ answer }}
    </div>
  </div>
</template>

<style scoped>
.answers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 20px;
}

.answer-option {
  border: 2px solid #4CAF50;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  user-select: none;
}

.answer-option:hover {
  background-color: #e0f7e9;
  color: black;
}

.correct {
  background-color: green;
  color: white;
}

.incorrect {
  background-color: red;
  color: white;
}
</style>
