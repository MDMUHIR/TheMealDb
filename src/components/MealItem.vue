<template>
  <div class="card text-center bg-white mt-3 position-relative" style="width: 18rem; height: 27rem;">
    <div class="card-link bg-warning-subtle mt-2 rounded-bottom">
      <router-link
        :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
        class="text-decoration-none text-dark"
      >
        <img
          :src="meal.strMealThumb"
          class="card-img-top"
          :alt="meal.strMeal"
        />
        <div class="card-body">
          <h5 class="card-title">{{ meal.strMeal }}</h5>
          <p class="card-text">Category: {{ meal.strCategory }}</p>
        </div>
      </router-link>
    </div>
    <div class="card-button m-1 position-absolute bottom-0 start-0 end-0">
      <a href="" @click="alertTxt()" class="btn btn-success w-100">Order</a>
    </div>
  </div>
</template>

<script setup>
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});

function alertTxt() {
  alert(
    "Sorry🥲,we are unable to accept your order today. Our cock has gone to in-laws house."
  );
}
</script>

<style scoped>

</style>

