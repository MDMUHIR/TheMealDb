<template>
  <div class="container mt-1 mb-3 d-flex justify-content-center">
    <div class="card" style="width: 90%">
      <img :src="meal.strMealThumb" class="card-img-top" alt="..." />
      <div class="card-body">
        <h2 class="card-title">{{ meal.strMeal }}</h2>
        <p class="card-text">{{ meal.strInstructions }}</p>
      </div>
      <ul class="d-flex justify-content-around ps-0 border border-success p-2 mb-2 border-opacity-50">
        <li class="list-group-item fw-semibold fst-italic">
          <strong>Category:</strong> {{ meal.strCategory }}
        </li>
        <li class="list-group-item fw-semibold fst-italic">
          <strong>Origin:</strong> {{ meal.strArea }}
        </li>
        <li class="list-group-item fw-semibold fst-italic">
          <strong>Tag:</strong> {{ meal.strTags }}
        </li>
      </ul>
      <div class="ing-meg d-flex justify-content-center">
        <ul class="ingredients">
          <strong>Ingredients:</strong>
          <template
            v-for="(el, ind) of new Array(20)"
            class="list-group-item fst-italic"
          >
            <li v-if="meal[`strIngredient${ind + 1}`]" class="list-group-item">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
        <ul class="ingredients">
          <strong>Measures:</strong>
          <template
            v-for="(el, ind) of new Array(20)"
            class="list-group-item fst-italic"
          >
            <li v-if="meal[`strMeasure${ind + 1}`]" class="list-group-item">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div class="card-body d-flex justify-content-around">
        <a :href="meal.strYoutube" class="btn btn-danger">YouTube</a>
        <a :href="meal.strSource" class="btn btn-success float-end"
          >Order Now</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../../axiosClient";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>

<style></style>
