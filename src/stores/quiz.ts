import { defineStore } from "pinia";
import data from '../../data.json';
import type { Quiz, Question } from '../models/quiz.model';

export const useQuizStore = defineStore({
    id: 'quiz',
    state: () => ({
        items: [] as Quiz[],
        questions: [] as Question[]
    }),
    actions: {
        fetchQuiz() {
            this.items = data.quiz
        },
        fetchQuestionByQuizz(quiz: number) {
            console.log(quiz)
        }
    }
})