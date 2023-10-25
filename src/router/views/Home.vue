<template>
  <div class="container">
    <div class="heading bg-white p-3 rounded">
      <div class="heading-top d-flex justify-content-around w-100">
        <div class="h-logo w-25 text-end">
          <img
            class="heading-logo w-25"
            src="../../../public/Images/meal-icon.png"
            alt=""
          />
        </div>
        <div class="h-text text-center mt-3">
          <h4 class="">Welcome to <span class="navbar-brand fw-bold text-danger fst-italic">The HoMe Meal</span></h4>
        </div>
        <div class="h-logo w-25">
          <img
            class="heading-logo w-25"
            src="../../../public/Images/meal-icon.png"
            alt=""
          />
        </div>
      </div>
      <div class="heading-bottom p-2 pb-0">
        <figure class="text-end">
          <blockquote class="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
      </div>
    </div>

   <div class="home-body border mt-4 p-1 bg-dark bg-opacity-50">
     <h2 class="bg-warning-subtle text-center p-2  m-1 rounded-4">
      🍴Random Meals🍴
    </h2>
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators top-0 mt-1" style="height: 5px">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active translate-middle pb-1 rounded-4 bg-danger border border-3 border-light"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          class="translate-middle pb-1 rounded-4 bg-warning border border-3 border-light"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          class="translate-middle pb-1 rounded-4 bg-success border border-3 border-light"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <Meals :meals="meals" />
        </div>
        <div class="carousel-item">
          <Meals :meals="meals1" />
        </div>
        <div class="carousel-item">
          <Meals :meals="meals2" />
        </div>
      </div>
      <button
        class="carousel-control-prev justify-content-start"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon bg-danger border rounded-start-pill w-100"
          aria-hidden="true"
        ></span>
        <!-- <span class="visually-hidden">Previous</span> -->
      </button>
      <button
        class="carousel-control-next justify-content-end"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon bg-danger border rounded-end-pill w-100"
          aria-hidden="true"
        ></span>
        <!-- <span class="visually-hidden">Next</span> -->
      </button>
    </div>
   </div>

    <div class="end bg-white bg-opacity-75 mt-4 p-2 text-center rounded-bottom">
      <Service/>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import store from "../../store";
import axiosClient from "../../axiosClient";
import Meals from "../../components/Meals.vue";
import Service from "../../components/Service.vue"

const meals = ref([]);
const meals1 = ref([]);
const meals2 = ref([]);

onMounted(async () => {
  for (let i = 0; i < 4; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
onMounted(async () => {
  for (let i = 0; i < 4; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals1.value.push(data.meals[0]));
  }
});
onMounted(async () => {
  for (let i = 0; i < 4; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals2.value.push(data.meals[0]));
  }
});
</script>

<style scoped>
.h-text {
  width: 315px;
}
.carousel-control-prev {
  width: 50px !important;
  left: -55px;
}
.carousel-control-next {
  width: 50px !important;
  right: -55px;
}
.carousel-control-prev-icon {
  height: 5rem !important;
}
.carousel-control-next-icon {
  height: 5rem !important;
}
</style>
