<template>
  <div class="container ">
    <div class="searchPart">
      <form @submit.prevent="searchMeals" class="d-flex" role="search">
        <input
          class="form-control"
          type="search"
          placeholder="Search For Meals"
          aria-label="Search"
          v-model="keyword"
        />

        <button class="btn btn-outline-success" type="submit">
          <i class="bi bi-search-heart"></i>
        </button>
      </form>
      <!-- <input
        type="text"
        v-model="keyword"
        class="form-control"
        placeholder="Search for Meals"
        @change="searchMeals"
      /> -->
    </div>
    <div class="inventory mt-2 border p-1 bg-dark bg-opacity-50">
      <Meals :meals="meals" />
    </div>
  </div>
</template>

<script setup>
import Meals from "../../components/Meals.vue";
import { computed, onMounted, ref } from "vue";
import store from "../../store";
import { useRoute } from "vue-router";

const route = useRoute();

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style></style>
