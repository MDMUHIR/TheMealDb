<template>
  <div class="container">
    <div
      class="searchByLetter mt-3 d-flex justify-content-center list-group border border-warning border-opacity-25"
    >
      <div class="list-group-item text-center">
        <router-link
          :to="{ name: 'byLetter', params: { letter } }"
          v-for="letter of letters"
          :key="letter"
          class="text-decoration-none p-2 m-1 fs-4 btn btn-outline-dark shadow"
          style="width: 40px"
          >{{ letter }}</router-link
        >
      </div>
    </div>
    <div class="inventory mt-2">
      <Meals :meals="meals"/>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../../store";
import Meals from "../../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<style scoped>
.searchByLetter {
  max-width: 100% !important;
}
</style>
