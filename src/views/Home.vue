<template>
  <div class="row">
    <div
      v-for="item in items"
      :key="item.id"
      @click="changeQuiz(item)"
      class="col-6 p-3"
    >
      <div
        class="quiz-container"
        :class="{ 'quiz-container--selected': selectedItem === item }"
      >
        {{ item.libelle }}
      </div>
    </div>
    <div>Questionnaire selectionné {{ selectedItem.libelle }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useQuizStore } from "../stores/quiz";
import type { Quiz } from "../models/quiz.model";

export default defineComponent({
  data() {
    return {
      selectedItem: {} as Quiz,
    };
  },
  computed: {
    ...mapState(useQuizStore, ["items"]),
  },
  methods: {
    ...mapActions(useQuizStore, ["fetchQuiz"]),
    changeQuiz(item: Quiz) {
      if (this.selectedItem === item) {
        this.$router.push({ name: "Quiz", params: { quiz: item.id } });
      } else {
        this.selectedItem = item;
      }
    },
  },
  created() {
    this.fetchQuiz();
  },
});
</script>

<style>
.quiz-container {
  height: 250px;
  background-color: red;
  padding: 10px;
  border-radius: 10px;
}
.quiz-container--selected {
  background-color: green;
}
</style>
