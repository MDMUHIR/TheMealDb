<template>
  <div class="container">
    <div class="inventory mt-2">
     <!-- -->
     <Meals :meals="meals" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../../store";
import { useRoute } from "vue-router";
import Meals from "../../components/Meals.vue";

const route = useRoute();

const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>

<style></style>
