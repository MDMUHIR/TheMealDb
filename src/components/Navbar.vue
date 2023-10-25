<template>
  <nav
    class="navbar navbar-expand-sm bg-white fixed-top shadow-sm border border-success border-opacity-50 p-0"
  >
    <div class="container-fluid fw-semibold">
      <RouterLink
        :to="{ name: 'home' }"
        class="text-decoration-none navbar-brand fw-bold text-danger fst-italic p-0"
      >
      <img style="" src="../../public/Images/nav.png" alt="">
       The HoMe Meal</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse active" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-0 mb-lg-0 text-center">
          <li class="nav-item">
            <RouterLink
              :to="{ name: 'aboutUs'}"
              class="text-decoration-none nav-link "
              aria-current="page"
            >
              About us</RouterLink
            >
          </li>
          <!-- <li class="nav-item">
            <RouterLink
              :to="{ name: 'contact' }"
              class="text-decoration-none nav-link"
            >
              Contact</RouterLink
            >
          </li> -->

          <!-- <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li> -->
        </ul>
        <div
          class="nav-item me-2 fw-semibold dropdown link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        >
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Searching Option
          </a>
          <ul class="dropdown-menu">
            <!-- Meals by letter -->
            <li>
              <RouterLink
                :to="{ name: 'byLetter' }"
                class="text-decoration-none dropdown-item link-success fw-semibold"
              >
                Meals By Letter</RouterLink
              >
            </li>
            <!-- Meals by Ingredients -->
            <li>
              <RouterLink
                :to="{ name: 'ingredients' }"
                class="text-decoration-none dropdown-item link-success fw-semibold"
              >
                Meals By Ingredients</RouterLink
              >
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <RouterLink
                :to="{ name: 'byName' }"
                class="text-decoration-none dropdown-item link-success fw-semibold"
              >
                Meals By Name</RouterLink
              >
            </li>
          </ul>
        </div>
        <RouterLink
          :to="{ name: 'byName' }"
          class="btn btn-outline-success fw-bold text-decoration-none"
        >
          <i class="bi bi-search-heart fw-bold"></i>
        </RouterLink>
        <!-- <form class="d-flex" role="search">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">
                    
                </button>
            </form> -->
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style></style>
