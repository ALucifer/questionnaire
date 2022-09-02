<template>
  <div>On va voir</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useQuizStore } from "../stores/quiz";
import type { Question } from "@/models/quiz.model";

export default defineComponent({
  data() {
    return {
      questions: [] as Question[],
    };
  },
  created() {
    this.fetchQuestionByQuizz(this.$route.params.quiz);
  },
  methods: {
    ...mapActions(useQuizStore, ["fetchQuestionByQuizz"]),
  },
});
</script>

<style></style>
