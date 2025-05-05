import { defineStore } from 'pinia'
import questions from '@/assets/questions.json'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    currentIndex: 0,
    selected: null as number | null,
    score: 0,
    finished: false,
    questions: questions,
    answerClass: "",
  }),
  actions: {
    selectAnswer(index: number) {
      this.selected = index
      const isCorrect = index === this.questions[this.currentIndex].correct;
      this.answerClass = isCorrect ? "correct" : "incorrect";
      if (isCorrect) {
        this.score++;
      }

      setTimeout(() => {
        if (this.currentIndex < this.questions.length - 1) {
          this.currentIndex++;
        } else {
          this.finished = true;
        }
        this.answerClass = "";
        this.selected = null;
      }, 2000);
    },

    resetQuiz() {
      this.currentIndex = 0
      this.selected = null
      this.score = 0
      this.finished = false
      this.answerClass = "";
    }
  }
})
