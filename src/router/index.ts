import { createRouter, createWebHistory } from 'vue-router'
import QuizApp from "@/components/QuizApp/QuizApp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quizapp',
      component: QuizApp,
    }
  ],
})

export default router
