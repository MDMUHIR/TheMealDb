<template>
 <div>
   <div class="row d-flex justify-content-around">
        <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
      </div>
      <div v-if="!meals.length" class="text center">
        <h5 class="text-center bg-warning-subtle rounded-5 p-5 "><span class="text-danger">!!!</span> There are no meals...</h5>
      </div>
 </div>
</template>

<script setup>
import MealItem from '../components/MealItem.vue';

const { meals } = defineProps({
  meals: {
    required: true,
    type: Object,
  }
})

</script>
